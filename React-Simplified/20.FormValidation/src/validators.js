
export function checkEmail(email){

const error = [];

if( email === "") 
{
    error.push("Required \n")
}else if(!email.endsWith("@gmail.com"))
{
    error.push("Email must end with @gmail.com \n")
}
    return error;
}

export function checkPassword(password){

    const error = [];
    if(password.length < 10){
        error.push("Password must be atleast 10 character \n")
    }else if(!password.match(/[A-Z]/)){
        error.push("must have atleast 1 Upper case letter \n")
    }else if(!password.match(/[a-z]/)){
        error.push("must have atleast 1 Lower case letter \n")
    }else if(!password.match(/[0-9]/)){
        error.push("must have atleast 1 number \n")
    }

    return error;
}
