import { IInstructorDetails } from "./IInstructorDetails";
import { ISchedule } from "./ISchedule";
import { IStudent } from "./IStudent";
import { Course } from "./Course";

export class CourseBuilder {
    private name: string = '';
    private description: string = '';
    private materials: string[] = [];
    private instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: ISchedule | null = null;
    private students: IStudent[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;
    private custumMethod: (cadena: string) => void = (cadena:string) => {}

    public setName(name:string): CourseBuilder{
        this.name = name;
        return this;
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    public setSchedule(schedule: ISchedule): CourseBuilder {
        this.schedule = schedule;
        return this;
    }

    public setStudent(student: IStudent[]):  CourseBuilder{
        this.students = student;
        return this;
    }
    public setStartDate(startDate: Date):  CourseBuilder{
        this.startDate = startDate;
        return this;
    }
    public setEndDate(endDate: Date):  CourseBuilder{
        this.endDate = endDate;
        return this;
    }

    public setExtraMethod(method:(cadena:string)=>void): CourseBuilder {
        this.custumMethod = method
        return this;
    }

    public fromPrototype(course:Course):CourseBuilder{
        this.name = course.getName,
        this.description = course.getDescription,
        this.materials = [...course.getMaterials],
        this.instructorDetails = {...course.getInstructorDetails},
        this.schedule = course.getSchedule? {...course.getSchedule}: null,
        this.students = course.getStudents? course.getStudents.map(student => ({ ...student })): null,
        this.startDate = course.getStartDate ? new Date(course.getStartDate.getTime()): null,
        this.endDate = course.getEndDate ? new Date(course.getEndDate.getTime()): null
        this.custumMethod = course.addExtraBehaviour
        return this
    }
    
    public buildCourse(): Course {
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehaviour = this.custumMethod;
        return course;
    }

}