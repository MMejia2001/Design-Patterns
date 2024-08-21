import { Course } from "./Course";

export class ExtendedCourse extends Course {
    public printDetailedSummary(): void {
        console.log(`Resumen detallado del curso: ${this.name}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Instructor: ${this.instructorDetails.name}`);
        console.log(`Fecha de inicio: ${this.startDate?.toDateString()}`);
        console.log(`Fecha de fin: ${this.endDate?.toDateString()}`);
        console.log(`Número de estudiantes inscritos: ${this.students?.length || 0}`);
    }
}