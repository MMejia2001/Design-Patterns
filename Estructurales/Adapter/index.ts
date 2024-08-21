
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';


const inscriptionService = new EnrollmentService();
const buyService = new BillingService();
const contactMail = 'Marco.Mejia@axity.com';

inscriptionService.enrollStudent(contactMail);
buyService.notifyPaymentDue(contactMail);