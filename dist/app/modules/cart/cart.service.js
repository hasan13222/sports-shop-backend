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
exports.CartServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const products_model_1 = require("../products/products.model");
// fetching cart added products
const getProductsByIdsFromDB = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ids || Object.keys(ids).length === 0) {
        return [];
    }
    // making objectid from _id string
    const objectIds = ids.map((id) => {
        const ObjectId = new mongoose_1.default.Types.ObjectId(id);
        return ObjectId;
    });
    // fetching products by array of objectids
    const result = yield products_model_1.Product.find({ _id: { $in: objectIds } });
    return result;
});
exports.CartServices = {
    getProductsByIdsFromDB,
};
