//------------ Void --------------

// Tipo Explicito
function showInfo(user:any):any{
  console.log('User Info', user.id,user.username,user.firstName)
//  return 'hola'
}

showInfo({id:1,username:'Juanda1803',firstName:'Juan'})

// Tipo Inferido
function showFormattedInfo(user:any){
  console.log('User Info',`
  id: ${user.id}
  username: ${user.username}
  firstName: ${user.firstName}
  `)
}

showFormattedInfo({id:1,username:'Juanda1803',firstName:'Juan'})

// Tipo void, como tipo de dato en una variable
let unusable: void
// unusable = null // Error use strict
unusable = undefined


//------------- Never---------------

function handleError(code:number,message:string):never{

  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`)

}

try{
  handleError(404,'Not Found')
}catch(err){

}


function sumNumbers(limit:number):never{
  let sum = 0
  while(true){
    sum++
  }
  // return sum
}

sumNumbers(10)
// ciclo infinito , el programa no termina