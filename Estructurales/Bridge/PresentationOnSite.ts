import { Course } from "./Course"
import { coursePresentation } from "./CoursePresentation";

export class PresentationOnSite extends coursePresentation{
    private location: string;

    constructor(location:string, course:Course){
        super(course)
        this.location = location
    }

    public presentarCurso(): void {
        console.log('Este curso será impartido en la sala: '+ this.location)
        this.course.displayCourseInfo()
    }

    public showPrerequisits(): void{
        console.log('Presentarse 15 min antes en la sala asignada, avisar de su asisencia en recepción');
        //this.course.getMaterials.forEach(material => {console.log(material)})
    }

    public confirmAsistance(aConfirmado:boolean): void{
        if(aConfirmado) {
            console.log('El asistente confirmó su asisencia');
        } else {
            console.log('El asistente no confirmó su asisencia');
        }
    }
}