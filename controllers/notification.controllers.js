const notificationService=require('../services/notification.services')

const createnotification=async(req,res)=>{
    try{
        const response=await notificationService.createticketnotification(req.body);
        if(response.result){
            res.status(200).send({
                data:response.result,
                status:'NOTIFICATION IS CREATED'
            })
        }
        else{
            res.status(500).send({
                status:'NOTIFICATION IS NOT CREATED'
            })
        }
    }catch(err){
        res.status(500).send({
            error:err.message
        })
    }

}

module.exports={createnotification}