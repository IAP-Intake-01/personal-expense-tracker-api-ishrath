import { getExampleData } from "../models/exampleModel.js";


const getExample =  async (req,res)=>{
    try{
        const data = await getExampleData();
        res.status(200).json(data)

    // eslint-disable-next-line no-unused-vars
    }catch(error){
        res.status(500).json({'message':'internal server error'});
    }
}



export {getExample};
