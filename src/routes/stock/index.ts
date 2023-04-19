import { Express } from "../../types/express";
import StockController from "../../controllers/StockController";

export default (app: Express) => {
  app.route("/stock").get(StockController.findAll).post(StockController.create);
  app
    .route("/stock/:id")
    .get(StockController.findOne)
    .patch(StockController.update)
    .delete(StockController.delete);
};
