import mongoose from 'mongoose';
import { Product } from '../products/products.model';

// fetching cart added products
const getProductsByIdsFromDB = async (ids: string[]) => {
  if (!ids || Object.keys(ids).length === 0) {
    return [];
  }

  // making objectid from _id string
  const objectIds = ids.map((id) => {
    const ObjectId = new mongoose.Types.ObjectId(id);
    return ObjectId;
  });

  // fetching products by array of objectids
  const result = await Product.find({ _id: { $in: objectIds } });
  return result;
};

export const CartServices = {
  getProductsByIdsFromDB,
};
