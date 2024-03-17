import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const filtering = async () => {
    const result = await prisma.post.findMany({
        // where: {
        //     OR: [
        //         {
        //              title:
        //              {
        //                  contains: "this is title 5"
        //              },
        //               published: false
        //       }
        //  ]
        // }
        where: {
            title: {
                startsWith:"t"
            }
        }
    })
    console.log(result);
}
filtering()