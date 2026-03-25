import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            name: 'テストユーザー',
        },
    })

    console.log('Seed completed:', user)
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(
    () => prisma.$disconnect()
)