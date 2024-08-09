import QueryBuilder from '../../builder/QueryBuilder';
// import { sendImageToCloud } from '../../utils/sendImageToCloud';
import { TProduct } from './products.interface';
import { Product } from './products.model';


const createProductIntoDB = async ( payload: TProduct) => {
  // const uploadResult = await sendImageToCloud(
  //   path,
  //   `${Date.now()}-${payload.name}`,
  // );
  // payload.image = uploadResult?.secure_url;

  const result = await Product.create(payload);
  return result;
};

const updateProductIntoDB = async (
  id: string,
  payload: TProduct,
) => {
  // if (path) {
  //   const uploadResult = await sendImageToCloud(
  //     path,
  //     `${Date.now()}-${payload.name}`,
  //   );
  //   payload.image = uploadResult?.secure_url;
  // }

  const result = await Product.findByIdAndUpdate(id, payload);
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// query to get all products after filtering
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productsQuery = new QueryBuilder(
    Product.find({
      rating: { $gt: Number(query.minRating) },
      price: { $gt: Number(query.minPrice), $lt: Number(query.maxPrice) },
    }),
    query,
  )
    .search(['name'])
    .filter()
    .sort()
    .fields();

    // pagination on query to get all products after filtering
  const paginatedQuery = new QueryBuilder(
    Product.find({
      rating: { $gt: Number(query.minRating) },
      price: { $gt: Number(query.minPrice), $lt: Number(query.maxPrice) },
    }),
    query,
  )
    .search(['name'])
    .filter()
    .sort()
    .fields()
    .paginate();

  const totalItems = await productsQuery.modelQuery;
  const result = await paginatedQuery.modelQuery;
  const meta = await productsQuery.countTotal();

  return { result, meta: { ...meta, mainTotal: totalItems.length } };
};



export const ProductServices = {
  createProductIntoDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
