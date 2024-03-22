const { dataSchema } = require("yup");

const validateMW = (dataSchema)=> async(req,res,next)=>{
     const data = req.body;
     try{
         await dataSchema.validate(data); 
         next(); // passer les données au router
     } catch (e){
        console.log(e)
        res.status(400).json({error: e.errors.join(", ")});
     }
}
module.exports=validateMW; 