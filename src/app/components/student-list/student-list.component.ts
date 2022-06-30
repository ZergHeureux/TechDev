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

    @Input() isTeacherView: boolean = false;
    @Input() classInfo!: ClassInformations;

    @Output() selected = new EventEmitter<Student[]>();
    selectedStudents: Student[] = [];

    onCloseSignatureModal: Subject<void> = new Subject<void>();

    display: boolean = false;
    studentSignature: SignInformations = {};


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