import { Express } from "../types/express";
import address from "./address";
import healthCheck from "./healthCheck";
import item from "./item";
import notFound from "./notFound";
import product from "./product";
import stock from "./stock";

export default (app: Express) => {
  stock(app);
  address(app);
  item(app);
  product(app);
  healthCheck(app);
  notFound(app);
};
