import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const databaseClient = new PrismaClient();
const SERVER_PORT = process.env.SERVER_PORT ?? "3141";

const config = {
  server: {
    port: Number(SERVER_PORT),
  },
};

export { databaseClient, config };
