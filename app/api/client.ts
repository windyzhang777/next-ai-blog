declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production" || !global.prisma) {
  prisma = new PrismaClient();
} else {
  prisma = global.prisma;
}

export default prisma;
