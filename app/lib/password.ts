import bcrypt from "bcryptjs"


export function encryptPassword(password:string){

return bcrypt.hashSync(password,10)

}


export function checkPassword(
password:string,
encrypted:string
){

return bcrypt.compareSync(password,encrypted)

}