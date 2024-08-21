"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const NotificationManager_1 = require("./NotificationManager");
class BillingService {
    //private externalService: ExternalNotificationService;
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
        //this.externalService = new ExternalNotificationService();
    }
    notifyPaymentDue(studentEmail) {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);
        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        //this.externalService.notifyExternalTelegram('5545455656','Urgente el pago de tu colegiatura');
        this.notificationManager.ownNotifyByTelegram('Urgente el pago de tu colegiatura', '5545455656');
    }
}
exports.BillingService = BillingService;
