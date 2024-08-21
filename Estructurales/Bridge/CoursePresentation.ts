import { Course } from "./Course";

export abstract class coursePresentation{
    protected course: Course

    constructor(course:Course){
        this.course = course
    }

    public abstract presentarCurso(): void;
}