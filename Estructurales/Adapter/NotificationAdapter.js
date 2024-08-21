"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAdapter = void 0;
const ExternalNotificationService_1 = require("./ExternalNotificationService");
class NotificationAdapter {
    constructor(external) {
        this.external = new ExternalNotificationService_1.ExternalNotificationService();
    }
    sendNotification(message, recipient) {
        this.external.notifyExternalTelegram(recipient, message);
    }
}
exports.NotificationAdapter = NotificationAdapter;
