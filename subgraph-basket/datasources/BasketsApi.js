import { readFile } from "fs/promises";

const data = JSON.parse(
  await readFile(new URL("./basket_data.json", import.meta.url))
);

export default class BasketsAPI {
  getAllBaskets() {
    return data.basket;
  }

  getBasket(id) {
    return data.basket.find(l => l.basketId === id);
  }
}