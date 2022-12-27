import { readFile } from "fs/promises";
import fs from "fs";

const data = JSON.parse(
  await readFile(new URL("./products_data.json", import.meta.url))
);

export default class ProductsAPI {
  createProduct(id, name, description, photo, price) {
    const obj = {
      id: id,
      name: name,
      description: description,
      photo: photo,
      price: price,
    };

    data.products.push(obj);
    const datajson = JSON.stringify(data);
    fs.writeFileSync("./products_data.json", datajson, "utf-8");
  }

  getAllProducts() {
    return data.products;
  }

  getProduct(id) {
    return data.products.find((l) => l.id === id);
  }
}
