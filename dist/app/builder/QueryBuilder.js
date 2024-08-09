"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    // filter query
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields', 'price', 'rating', 'minPrice', 'maxPrice', 'minRating'];
        if (!queryObj.category) {
            excludeFields.push('category');
        }
        if (!queryObj.brand) {
            excludeFields.push('brand');
        }
        excludeFields.forEach((field) => delete queryObj[field]);
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    // search query
    search(searchableFields) {
        var _a;
        if ((_a = this.query) === null || _a === void 0 ? void 0 : _a.searchTerm) {
            const searchTerm = this.query.searchTerm;
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => {
                    return { [field]: { $regex: searchTerm, $options: 'i' } };
                }),
            });
        }
        return this;
    }
    // sort logic
    sort() {
        var _a;
        const sortQ = ((_a = this.query) === null || _a === void 0 ? void 0 : _a.sort) || '-createdAt';
        this.modelQuery = this.modelQuery.sort(sortQ);
        return this;
    }
    // pagination logic
    paginate() {
        var _a, _b;
        const page = Number((_a = this.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
        const limit = Number((_b = this.query) === null || _b === void 0 ? void 0 : _b.limit) || 20;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    // filter fields
    fields() {
        var _a, _b;
        const fields = ((_b = (_a = this.query) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.split(',').join(' ')) || '-__v';
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
    // count total model documents
    countTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const page = Number((_a = this.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
            const limit = Number((_b = this.query) === null || _b === void 0 ? void 0 : _b.limit) || 20;
            const total = yield this.modelQuery.model.countDocuments();
            const totalPage = Math.ceil(total / limit);
            return {
                page,
                limit,
                total,
                totalPage,
            };
        });
    }
}
exports.default = QueryBuilder;
