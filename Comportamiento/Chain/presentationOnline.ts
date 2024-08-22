import { Course } from "./Course"
import { coursePresentation } from "./CoursePresentation"

export class PresentactionOnline extends coursePresentation {
    private plattform: string;

    constructor(plattform:string, course:Course){
        super(course)
        this.plattform = plattform
    }

    public presentarCurso(): void {
        console.log('Este curso será impartido por medio de la plataforma '+ this.plattform)
        this.course.displayCourseInfo()
    }

    public showOnlineResults(): void{
        console.log('Los materiales para el curso son: ');
        this.course.getMaterials.forEach(material => {console.log(material)})
    }

    public sendReminder(cadena:string): void{
        console.log('Este es un recordatorio del curso en linea: ' + cadena)
    }
}