import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
//   const deleteSingle = await prisma.post.delete({
//     where: {
//       id: 2,
//     },
//   });
//   console.log(deleteSingle);

  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: "This is updated title for id for 5/6",
    },
  });
  console.log(deleteMany);
};
deleteData();
