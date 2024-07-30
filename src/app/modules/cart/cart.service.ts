import mongoose from 'mongoose';
import { Product } from '../products/products.model';

const getProductsByIdsFromDB = async (ids: string[]) => {
    if (!ids || Object.keys(ids).length === 0){
        return [];
    }
  const objectIds = ids.map((id) => {
    const ObjectId = new mongoose.Types.ObjectId(id);
    return ObjectId;
  });
  const result = await Product.find({ _id: { $in: objectIds } });
  return result;
};

export const CartServices = {
  getProductsByIdsFromDB,
};
