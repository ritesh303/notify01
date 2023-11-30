const notificationController=require('../controllers/notification.controllers')


module.exports=function(app){
    // to create a notification
    app.post('/notificationService/api/v1/notification',notificationController.createnotification)
}