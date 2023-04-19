import { Request, Response, NextFunction } from "../types/express";
import { databaseClient } from "../config";

class AddressController {
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const address = await databaseClient.address.delete({
        where: { id: Number(id) },
      });
      return res.json(address);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = req.body;
      const address = await databaseClient.address.update({
        where: { id: Number(id) },
        data,
      });
      return res.json(address);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const address = await databaseClient.address.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          street: true,
          module: true,
          level: true,
        },
      });
      return res.json(address);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const addresss = await databaseClient.address.findMany({
        select: {
          id: true,
          street: true,
          module: true,
          level: true,
        },
      });
      return res.json(addresss);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const address = await databaseClient.address.create({ data });
      return res.status(201).json(address);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error });
    }
  }
}

export default new AddressController();
