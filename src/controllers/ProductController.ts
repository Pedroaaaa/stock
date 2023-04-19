import { Request, Response, NextFunction } from "../types/express";
import { databaseClient } from "../config";

class ProductController {
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await databaseClient.product.delete({
        where: { id: Number(id) },
      });
      return res.json(product);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      const product = await databaseClient.product.update({
        where: { id: Number(id) },
        data,
      });
      return res.json(product);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await databaseClient.product.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
      });
      return res.json(product);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await databaseClient.product.findMany();
      return res.json(products);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const product = await databaseClient.product.create({ data });
      return res.status(201).json(product);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }
}

export default new ProductController();
