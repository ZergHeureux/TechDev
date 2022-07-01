import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Subject } from "rxjs";
import { DateUtils } from "src/app/utils/date.utils";
import { SignInformations } from "../signature-pad/signature-pad.component";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentList {

    constructor(/*private cache:CacheStorage*/){
        //this.updateCache();
    }

    @Input() isTeacherView: boolean = false;
    @Input() classInfo!: ClassInformations;
    @Input() disabledAllButton: boolean = false;

    @Output() selected = new EventEmitter<Student[]>();
    @Output() studentSignedEvent = new EventEmitter<SignInformations>();
    selectedStudents: Student[] = [];

    onCloseSignatureModal: Subject<void> = new Subject<void>();

    display: boolean = false;
    studentSignature: SignInformations = {};

    /*updateCache(){
        let name = <string>this.classInfo.name
        let stdJson = JSON.stringify(this.classInfo.students);
        this.cache.has(name).then((p)=>{
            this.cache.open(name).then((c)=>{
                c.add(stdJson);
            })
       })
       if (navigator.onLine){



            //INSERT FUNCTION HERE

             EXEMPLE

            this.cache.match(name).then((d)=>{
                sendDataToServer(JSON.parse(d)); //sendDataToServer is an unknown or TODO function
            })

            
            
            
        
        alert("navigator online data will be sent :D")
       }
       else{
        setTimeout(()=>{
            this.updateCache()
        },5000)
       }
    }*/

    emitEventOnCloseSignatureModal() {
        this.onCloseSignatureModal.next();
    }


    openSignatureModal(student: Student) {
        this.studentSignature = {
            name: this.classInfo.name,
            schedule: DateUtils.convertDateToSchedule(new Date(this.classInfo.date?.start), new Date(this.classInfo.date?.end)),
            student: {
                firstname: student.firstname,
                lastname: student.lastname,
            }
        }
        this.display = true;
    }

    signedEvent(signInfo: SignInformations) {
        let student: Student = this.classInfo.students.filter(student => student.lastname == signInfo.student?.lastname && student.firstname == signInfo.student?.firstname)[0];
        student.hasSigned = true;
        student.signImage = signInfo.signImage;
        this.studentSignedEvent.emit(signInfo);
        //this.updateCache();
    }

    isRowSelectable(event: any) {
        return !event.data.hasSigned;
    }

    updateSelectedRows() {
        this.selected.emit(this.selectedStudents);
    }

}

export interface Student {
    firstname?: string,
    lastname?: string,
    hasSigned?: boolean,
    signImage?: string,
    mail?: string,
}

export interface ClassInformations {
    name?: string,
    date?: {
        start?: any,
        end?: any,
    },
    students: Student[],
    teacher: {
        firstname: string,
        lastname: string,
        hasSigned?: boolean,
    }
}