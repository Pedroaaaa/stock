import { Request, Response, NextFunction } from "../types/express";
import { databaseClient } from "../config";

class StockController {
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const stock = await databaseClient.stock.delete({
        where: { id: Number(id) },
      });
      return res.json(stock);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      const stock = await databaseClient.stock.update({
        where: { id: Number(id) },
        data,
      });
      return res.json(stock);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const stock = await databaseClient.stock.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          name: true,
          curve: true,
          address: {
            select: {
              id: true,
              street: true,
              module: true,
              level: true,
            },
          },
        },
      });
      return res.json(stock);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const stocks = await databaseClient.stock.findMany({
        select: {
          id: true,
          name: true,
          curve: true,
          address: {
            select: {
              id: true,
              street: true,
              module: true,
              level: true,
            },
          },
        },
      });
      return res.json(stocks);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const stock = await databaseClient.stock.create({ data });
      return res.status(201).json(stock);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }
}

export default new StockController();
