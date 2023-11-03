const { PrismaClient } = require("@prisma/client"); // Menggantikan { db } dengan PrismaClient
const bcrypt = require("bcrypt"); // Mengimpor modul bcrypt

const prisma = new PrismaClient(); // Membuat instance PrismaClient

function getUser() {
  return [
    {
      firstName: "Muhammad",
      lastName: "Ridha",
      email: "edo.ridha@ymail.com",
      phoneNumber: "081267251905",
      password: "untukjokanti",
      role: "Admin",
    },
    {
      firstName: "Richa",
      lastName: "Mahardhina",
      email: "richadinarjati30@gmail.com",
      phoneNumber: "081267251905",
      password: "untukjokanti",
      role: "User",
    },
  ];
}

async function seed() {
  await Promise.all(
    getUser().map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10); // Menggunakan await untuk hashing password
      return prisma.user.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: hashedPassword,
          role: user.role,
        },
      });
    })
  );
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect(); // Memastikan koneksi database ditutup setelah selesai seeding
  });
