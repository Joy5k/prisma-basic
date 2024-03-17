import { PrismaClient } from "@prisma/client";
import { pseudoRandomBytes } from "crypto";

const prisma = new PrismaClient();

const main = async () => { 

    // const result = await prisma.post.findMany()

    const findFirst = await prisma.post.findFirst({
        where: {
            id:5
        }
    })

    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            // published: true//! getting a error because published is not unique
            id:4
        }
    })
    console.log({findUnique});
}
main();