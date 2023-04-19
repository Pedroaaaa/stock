import express from "express";
import helmet from "helmet";
import apiRules from "../middlewares/apiRules";
import requestLogger from "../middlewares/requestLogger";
import router from "../routes";

export default () => {
  const app = express();
  app.use(helmet());
  app.use(requestLogger);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(apiRules);
  router(app);
  return app;
};
