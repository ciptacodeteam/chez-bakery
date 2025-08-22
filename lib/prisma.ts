import { PrismaClient } from "@/app/generated/prisma";

// Extend the global object to include the PrismaClient instance
declare global {
    var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// Check if a PrismaClient instance already exists on the global object
if (typeof globalThis.prisma === 'undefined') {
    // If not, create a new instance
    prisma = new PrismaClient();
    // Store it on the global object for future reloads (in development)
    if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
    }
} else {
    // If an instance exists, reuse it
    prisma = globalThis.prisma;
}

export default prisma;