import { Express } from "../../types/express";
import ProductController from "../../controllers/ProductController";

export default (app: Express) => {
  app
    .route("/product")
    .get(ProductController.findAll)
    .post(ProductController.create);
  app
    .route("/product/:id")
    .get(ProductController.findOne)
    .patch(ProductController.update)
    .delete(ProductController.delete);
};
