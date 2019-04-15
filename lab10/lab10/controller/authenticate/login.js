var login =function(user,password){

    console.log(user,password)
    if(user==="tiancheng@tiancheng.com" && password==="tiancheng"){
        return true;
    }
    else{
        return false;
    }
}


module.exports=login;
