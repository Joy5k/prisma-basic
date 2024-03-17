import { PrismaClient, userRole,  } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user5",
    //         email: "user5@ph.com",
    //         role:userRole.user
    //     }
    // });

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio..3",
    //         userId: 3
    //     }
    // })

    // const createCategory = await prisma.categories.create({
    //     data: {
    //         name: "Web Development"
    //     }
    // })

    const createPost = await prisma.post.create({
        data: {
            title: "this is title 5",
            content: "this is content of the post. 5",
            authorId: 1,
            post: {
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 2
                    }
                    
                ]
            }
        },
      
    })
    console.log(createPost)
}

main();