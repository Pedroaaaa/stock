import { Request, Response, NextFunction } from "../types/express";
import { databaseClient } from "../config";

class ItemController {
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const item = await databaseClient.item.delete({
        where: { id: Number(id) },
      });
      return res.json(item);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      const item = await databaseClient.item.update({
        where: { id: Number(id) },
        data,
      });
      return res.json(item);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const item = await databaseClient.item.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
            },
          },
          address: {
            select: {
              id: true,
              street: true,
              module: true,
              level: true,
            },
          },
          stock: {
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
          },
        },
      });
      return res.json(item);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await databaseClient.item.findMany({
        select: {
          id: true,
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
            },
          },
          address: {
            select: {
              id: true,
              street: true,
              module: true,
              level: true,
            },
          },
          stock: {
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
          },
        },
      });
      return res.json(items);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const item = await databaseClient.item.create({ data });
      return res.status(201).json(item);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }
}

export default new ItemController();
