import { readFile } from "fs/promises";
import fs from "fs";

const data = JSON.parse(
  await readFile(new URL("./basket_data.json", import.meta.url))
);

export default class BasketsAPI {
  addProductToBasket(basketId, productId, quantity) {
    const obj = {
      id: productId,
      quantity: quantity,
    };
    data.baskets.find((l, i) => {
      if (l.basketId === basketId) {
        l.lineitems.push(obj);
        return true; // stop searching
      }
    });

    fs.writeFileSync("./basket_data.json", JSON.stringify(data));
  }

  getAllBaskets() {
    return data.baskets;
  }

  getBasket(id) {
    return data.baskets.find((l) => l.basketId === id);
  }
}
