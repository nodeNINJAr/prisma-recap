import { PrismaClient } from "@prisma/client";




const prisma = new PrismaClient();

async function main() {
  console.log("Hello from Prisma!!!!!");  
//    insert data 
// const result = await prisma.users.create({
//    data:{
//        name:"Saif Hasan2",
//        email:"saifhasan2@gmail.com"
//    } 
// })

// console.log(result);



//** */ retrived all data
// const result = await prisma.users.findMany();

// retrived data by conditions
// const result = await prisma.users.findMany({
//      where:{
//        id:6
//      }
// })

// console.log(result);


// find single data
// const userData = await prisma.users.findUnique({
//   where:{
//     id:6
//   }
// })

// console.log(userData);

// find unique and throw error
// const userData = await prisma.users.findUniqueOrThrow({
//   where:{
//     id:4
//   }
// })

// console.log(userData);


// ** Update 


// ** update single data
// const updatedUser = await prisma.users.update({
//   where:{
//     id:1
//   },
//   data:{
//     name: "Sm Mehedi Hasan1"
//   }
// })

// console.log(updatedUser);

// ** update many data updateManyAndReturn/updateMany
// const updateProfilePhoto = await prisma.users.updateManyAndReturn({
//    where:{
//       profilePhoto:null
//    },
//    data:{
//        profilePhoto:"https://programming-hero.com/level2/default-image.png"
//    }
// })
 
// console.log("updated data", updateProfilePhoto);

// ** delete

// deleted one
// const deletedUser = await prisma.users.delete({
//   where:{
//     id:1
//   }
// })

// console.log("Deleted Id", deletedUser);

const deletedUsers = await prisma.users.deleteMany({
  where:{
    id:{
      lt:3 
    }
  }
})

console.log("Deleted Id", deletedUsers);

}



main()