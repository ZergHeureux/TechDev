import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { Subject } from "rxjs";
import { ClassInformations } from "src/app/interfaces/classInformations";
import { SignInformations } from "src/app/interfaces/signInformations";
import { Student } from "src/app/interfaces/student";
import { DateUtils } from "src/app/utils/date.utils";

@Component({
    selector: 'teacher-class-view',
    templateUrl: './teacher-class-view.component.html',
    styleUrls: ['./teacher-class-view.component.scss']
})
export class TeacherClassView {

    classInfo: ClassInformations = {
        name: 'WorkShop Tech',
        date: {
            start: 'Mon, 27 Jun 2022 07:00:00 GMT',
            end: 'Mon, 27 Jun 2022 10:30:00 GMT',
        },
        students: [
            {firstname: "Yvan", lastname: "LEMAIRE", hasSigned: false, mail: 'yvan@student.school.fr'},
            {firstname: "Jean", lastname: "VALJEAN", hasSigned: false, mail: 'jean@student.school.fr'},
            {firstname: "Lola", lastname: "DUPONT", hasSigned: false, mail: 'lola@student.school.fr'},
            {firstname: "Paul", lastname: "RAOUL", hasSigned: false, mail: 'paul@student.school.fr'},
            {firstname: "Mathilde", lastname: "DUMARCHAND", hasSigned: false, mail: 'mathilde@student.school.fr'},
            {firstname: "Rose", lastname: "LE GRAND", hasSigned: false, mail: 'rose@student.school.fr'},
            {firstname: "Michel", lastname: "MARTIN", hasSigned: false, mail: 'michel@student.school.fr'},
            {firstname: "Ninon", lastname: "DUBOIS", hasSigned: false, mail: 'ninon@student.school.fr'},
        ],
        teacher: {
            firstname: 'Emilien',
            lastname: 'MENTOU',
            hasSigned: false,
        }
    };
    selectedStudents: Student[] = [];

    onCloseSignatureModal: Subject<void> = new Subject<void>();

    displayQrCode: boolean = false;
    displaySignaturePad: boolean = false;
    displayMailConfirm: boolean = false;
    teacherSignature: SignInformations = {};

    // Computed method
    get getStudentWhoSigned() { return this.classInfo.students.filter(s => s.hasSigned).length; }
    get getStudentWhoNotSigned() { return this.classInfo.students.filter(s => !s.hasSigned).length; }

    constructor(private messageService: MessageService) {}
    
    addSelectedStudent(students: any) {
        this.selectedStudents = students;
    }

    signedEvent(signInfo: SignInformations) {
        this.classInfo.teacher.hasSigned = true;
        // TODO call api to send data
    }

    emitEventOnCloseSignatureModal() {
        this.onCloseSignatureModal.next();
    }

    openSignatureModal() {
        this.teacherSignature = {
            name: this.classInfo.name,
            schedule: DateUtils.convertDateToSchedule(new Date(this.classInfo.date?.start), new Date(this.classInfo.date?.end)),
            student: {
                firstname: this.classInfo.teacher.firstname,
                lastname: this.classInfo.teacher.lastname,
            }
        }
        this.displaySignaturePad = true;
    }

    showQRCode() {
        this.displayQrCode = true;
    }

    openMailModal() {
        this.displayMailConfirm = true;
    }

    sendEmail() {
        // To send if success
        this.messageService.add({severity:'success', summary:'Service email', detail:'Tous les emails on été envoyés'});

        // To send on error
        //this.messageService.add({severity:'error', summary:'Service email', detail:'Echec lors de l\'envoie de mail'});
    }




    classDuration(): string {
        const MS_PER_MINUTE = 1000 * 60;
        let durationInMinutes = (new Date(this.classInfo.date?.end).getTime() - new Date(this.classInfo.date?.start).getTime()) / MS_PER_MINUTE;
        let minutes: any = durationInMinutes % 60;
        let hours = Math.floor(durationInMinutes / 60);

        if (minutes > 0 && minutes < 10) minutes = `0${minutes}`;
        else if (minutes <= 0) minutes = '';

        return `${hours}h${minutes}`;
    }
}