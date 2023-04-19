import { Express } from "../../types/express";
import ItemController from "../../controllers/ItemController";

export default (app: Express) => {
  app.route("/item").get(ItemController.findAll).post(ItemController.create);
  app
    .route("/item/:id")
    .get(ItemController.findOne)
    .patch(ItemController.update)
    .delete(ItemController.delete);
};
