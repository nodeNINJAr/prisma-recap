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



// retrived all data
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
const userData = await prisma.users.findUniqueOrThrow({
  where:{
    id:4
  }
})

console.log(userData);





}

main()