// Prisma playground
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allCustomers = await prisma.customers.findMany()
  console.log(allCustomers)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })