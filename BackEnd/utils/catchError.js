const catchError=(fn)=>{
    return(req,res,next)=>{
     fn(req,res,next).catch((err)=>{
         res.status(500).json({
             message:"Internal Error",
             fullError:console.log(err)
         })
     })
    }
 }

 export default catchError