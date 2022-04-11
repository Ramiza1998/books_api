function auth(req, res, next) {
    let isVarified = true;
    if (isVarified){
        console.log("Logged in suceessfully")
        next()
    }else{
    console.log("Not authorised") 
    throw Error;
    }     
}

module.exports = auth