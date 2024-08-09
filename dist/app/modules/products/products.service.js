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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const products_model_1 = require("./products.model");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const uploadResult = await sendImageToCloud(
    //   path,
    //   `${Date.now()}-${payload.name}`,
    // );
    // payload.image = uploadResult?.secure_url;
    const result = yield products_model_1.Product.create(payload);
    return result;
});
const updateProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // if (path) {
    //   const uploadResult = await sendImageToCloud(
    //     path,
    //     `${Date.now()}-${payload.name}`,
    //   );
    //   payload.image = uploadResult?.secure_url;
    // }
    const result = yield products_model_1.Product.findByIdAndUpdate(id, payload);
    return result;
});
const deleteProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndDelete(id);
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findById(id);
    return result;
});
// query to get all products after filtering
const getAllProductFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productsQuery = new QueryBuilder_1.default(products_model_1.Product.find({
        rating: { $gt: Number(query.minRating) },
        price: { $gt: Number(query.minPrice), $lt: Number(query.maxPrice) },
    }), query)
        .search(['name'])
        .filter()
        .sort()
        .fields();
    // pagination on query to get all products after filtering
    const paginatedQuery = new QueryBuilder_1.default(products_model_1.Product.find({
        rating: { $gt: Number(query.minRating) },
        price: { $gt: Number(query.minPrice), $lt: Number(query.maxPrice) },
    }), query)
        .search(['name'])
        .filter()
        .sort()
        .fields()
        .paginate();
    const totalItems = yield productsQuery.modelQuery;
    const result = yield paginatedQuery.modelQuery;
    const meta = yield productsQuery.countTotal();
    return { result, meta: Object.assign(Object.assign({}, meta), { mainTotal: totalItems.length }) };
});
exports.ProductServices = {
    createProductIntoDB,
    updateProductIntoDB,
    deleteProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
};
