export {}

// <> // Angle Bracket syntax
let username: any
username = 'Juan'

// Tenemos una caden, TS confia en mi
let message: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short'

console.log(message)


let usernameWithId: any = 'Juan 1'
// Como obtener el username?
username = (<string>usernameWithId).substring(0,5)
console.log(username)

// Sintaxis "as"
message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short'

console.log(message)

let helloUser: any
helloUser = ' Hello Juan'
username = (helloUser as string).substring(6)

console.log(username)