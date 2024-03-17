import { PrismaClient } from "@prisma/client";
import { pseudoRandomBytes } from "crypto";
import { title } from "process";

const prisma = new PrismaClient();

const main = async () => { 
    // const updateOne = await prisma.post.update({
    //     where: {
    //         id:5
    //     },
    //     data: {
    //         title: "This is updated title for id 5",
    //         content:"updated"
    //     }
    
    // })
    // const updatemany = await prisma.post.updateMany({
    //     where: {
    //       title:"This is updated title for id for 5/6"
    //     },
    //     data: {
    //         content:"updated by many"
    //     }

    // })
    // console.log(updatemany);
    const updateWithUpsert = await prisma.post.upsert({
        where: {
            id:1
        },
        update: {
         title:"upsert title"
           
        },        
        create: {
            title: "This is upsertData",
            content: "This is upsertData Content",
            author:"This is upsertData Mehedi"
        }
    })
console.log(updateWithUpsert);
}
main();