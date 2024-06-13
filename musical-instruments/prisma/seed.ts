import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.instrumentMusical.upsert({
    where: { name: 'Guitarra' },
    update: {},
    create: {
      name: 'Guitarra',
      description: 'Spruce wood classical guitar, warm and bright sound, perfect for beginners and experienced musicians. Buy now!',
      type: 'Electric Guitar',
      fabricante: 'EVH',
      color:'Red',
      image: 'https://www.shutterstock.com/image-photo/red-electric-guitar-isolated-on-260nw-2300954933.jpg',
      price: 320,
    },
  });

    const post2 = await prisma.instrumentMusical.upsert({
    where: { name: 'Piano' },
    update: {},
    create: {
        name: 'Piano',
        description: 'The piano is a classical instrument of great elegance and captivating sound, perfect for musicians and music lovers.',
        type: 'Electric piano',
        fabricante: 'Kawai',
        color:'Black',
        image: 'https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFNMExaY1V1MEwuX0FDX1NMMTUwMF8uanBn.jpg',
        price: 480,
      },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });