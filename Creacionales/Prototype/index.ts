import { CourseBuilder } from './CourseBuilder';

const basicCourse = new CourseBuilder()
.setName('Introducción a TypeScript')
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setExtraMethod((message: string)=>{console.log('Se agregó funcionalidad extra '+ message)})
.buildCourse();

console.log('Curso 1:');
basicCourse.displayCourseInfo();
console.log('*****************************************');
basicCourse.addExtraBehaviour('AVISO: este curso es sabatino');
//basicCourse.printDetailedSummary();
console.log('*****************************************');

const advancedCourse = new CourseBuilder()
.setName('TypeScript Avanzado')
.setDescription('Template para cursos avanzados')
.setMaterials(['Libro', 'Videos', 'Proyectos','Diapositivas'])
.setSchedule({days:['Lunes'],time: 'DE 8:00 am A 10:00 am'})
.setStudent([
    { name: 'Kevin', email: 'Kevin@example.com' },
    { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
    ])
.setStartDate(new Date(2024, 8, 1))
.setEndDate(new Date(2024, 11, 30))
.buildCourse()

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');
//advancedCourse.printDetailedSummary();
console.log('*****************************************');

const cursoAdvancedDataBase = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso Avanzado de BD')
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setSchedule({days:['Lunes'],time: 'DE 10:00 am A 12:00 pm'})
.buildCourse()

console.log('Imprimiendo clon para BD:');
console.log('*****************************************');
console.log(cursoAdvancedDataBase.displayCourseInfo())

const cursoAdvancedApis = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso Avanzado de Apis')
.setInstructor({ name: 'Raul', email: 'raul@example.com', experience: 5 })
.setSchedule({days:['Lunes'],time: 'DE 12:00 pm A 14:00 pm'})
.buildCourse()

console.log('Imprimiendo clon para Apis:');
console.log('*****************************************');
console.log(cursoAdvancedApis.displayCourseInfo())

