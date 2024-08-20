
import { UserManagement } from './UserManagement';

// Ejemplo de uso
const userManager = new UserManagement();

const admin = userManager.createUser('admin', 1, 'Alice');
const instructor = userManager.createUser('instructor', 2, 'Bob');
const student = userManager.createUser('student', 3, 'Charlie');


console.log(admin);
console.log(instructor);
console.log(student);
