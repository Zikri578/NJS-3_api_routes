import { PrismaClient } from "@prisma/client"

// mengkoneksikan database 
const connection = new PrismaClient()

export default connection