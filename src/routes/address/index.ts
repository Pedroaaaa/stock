import { Express } from "../../types/express";
import AddressController from "../../controllers/AddressController";

export default (app: Express) => {
  app
    .route("/address")
    .get(AddressController.findAll)
    .post(AddressController.create);
  app
    .route("/address/:id")
    .get(AddressController.findOne)
    .patch(AddressController.update)
    .delete(AddressController.delete);
};
