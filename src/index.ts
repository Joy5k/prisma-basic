import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => { 
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is first title",
    //         content: "The content of the first title",
    //         author:"Mehedi hasan Joy"
    //     }
    // })
    const result = await prisma.post.findMany()
    console.log(result);
}
main();