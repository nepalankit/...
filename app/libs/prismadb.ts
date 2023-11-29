import { PrismaClient } from "@prisma/client";
//best practice for using prisma with NExt 13
//prevents hot reloading
declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
