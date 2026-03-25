import { PrismaClient } from '@prisma/client'

// next jsの開発時、ホットリロードによって新しいprismaclientができてしまうためglobalthisに保持することで
// インスタンスの形成をここに限定する
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma