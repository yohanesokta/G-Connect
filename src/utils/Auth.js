const base_url = "http://localhost:4000"

async function AuthPostLogin(number){

    try{
        let data = await fetch(base_url+"/auth/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(
                number
            )
        })
        data = await data.json()
        if (data.status.code = "200"){
            return {
                status : true,
                message 
            }
        }
        else{
            return {
                status:false,
                message:"Unknown"
            }
        }
    }catch(error){
    }
}