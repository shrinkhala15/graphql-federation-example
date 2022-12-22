import { readFile } from "fs/promises";

const data = JSON.parse(
  await readFile(new URL("./products_data.json", import.meta.url))
);

export default class ProductsAPI {
  getAllLocations() {
    return data.products;
  }

  getProduct(id) {
    return data.products.find(l => l.id === id);
  }
}