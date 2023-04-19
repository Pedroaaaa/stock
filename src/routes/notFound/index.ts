import { Express, Request, Response } from "../../types/express";

export default (app: Express) => {
  app.route("*").get((req: Request, res: Response) => {
    res.status(404).json({ message: `${req.originalUrl} does not exist` });
  });
};
