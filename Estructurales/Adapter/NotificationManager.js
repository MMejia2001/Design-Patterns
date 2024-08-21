"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationManager = void 0;
const EmailNotificationService_1 = require("./EmailNotificationService");
const SMSNotificationService_1 = require("./SMSNotificationService");
const ExternalNotificationService_1 = require("./ExternalNotificationService");
const NotificationAdapter_1 = require("./NotificationAdapter");
class NotificationManager {
    constructor() {
        this.emailService = new EmailNotificationService_1.EmailNotificationService();
        this.smsService = new SMSNotificationService_1.SMSNotificationService();
        this.telegramService = new NotificationAdapter_1.NotificationAdapter(new ExternalNotificationService_1.ExternalNotificationService());
    }
    static getSingleInstance() {
        if (!NotificationManager.instanceUnique) {
            NotificationManager.instanceUnique = new NotificationManager();
        }
        return NotificationManager.instanceUnique;
    }
    notifyByEmail(message, recipient) {
        this.emailService.sendNotification(message, recipient);
    }
    notifyBySMS(message, recipient) {
        this.smsService.sendNotification(message, recipient);
    }
    ownNotifyByTelegram(message, recipient) {
        this.telegramService.sendNotification(message, recipient);
    }
}
exports.NotificationManager = NotificationManager;
