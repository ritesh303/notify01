const Ticket=require('../models/notificationModel')

const createticketnotification=async(data)=>{
    try{
        const ticketObj={
            subject:data.subject,
            content:data.content,
            recipientEmails:data.recipientEmails,
            requester:data.requester,
            ticketId:data.ticketId
        }
    
        const response=await Ticket.create(ticketObj);
        return {
            result:response
        }
    }catch(err){
        console.log(err.message)
        return err.message
    }

}

module.exports={createticketnotification}