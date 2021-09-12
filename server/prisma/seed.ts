import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

function randomElement(arr: unknown[]) {
  if (arr.length === 0) {
    throw new Error('Cannot select element from empty array');
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

async function seed() {
  await prisma.user.upsert({
    where: {
      username: 'admin',
    },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@email.com',
      password: 'admin',
    },
  });
  const usersData = [];
  for (let i = 0; i < 100; i++) {
    usersData.push({
      username: `${faker.internet.userName()}__${randomUUID()}`,
      email: `${randomUUID()}-${faker.internet.email()}`,
      password: `${faker.internet.password()}__${randomUUID()}`,
    });
  }
  await prisma.user.createMany({
    data: usersData,
  });
  const users = await prisma.user.findMany({
    select: { id: true },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
