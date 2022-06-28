import { Component, Input } from "@angular/core";
import { SignInformations } from "../signature-pad/signature-pad.component";

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentList {

    @Input() classInfo: ClassInformations = {
        name: 'WorkShop Tech',
        date: {
            start: 'Mon, 27 Jun 2022 07:00:00 GMT',
            end: 'Mon, 27 Jun 2022 10:30:00 GMT',
        },
        students: [
            {firstname: "Yvan", lastname: "LEMAIRE", hasSigned: false},
            {firstname: "Jean", lastname: "VALJEAN", hasSigned: false},
            {firstname: "Lola", lastname: "DUPONT", hasSigned: false},
            {firstname: "Paul", lastname: "RAOUL", hasSigned: false},
            {firstname: "Mathilde", lastname: "DUMARCHAND", hasSigned: false},
            {firstname: "Rose", lastname: "LE GRAND", hasSigned: false},
            {firstname: "Michel", lastname: "MARTIN", hasSigned: false},
            {firstname: "Ninon", lastname: "DUBOIS", hasSigned: false},
        ],
    };

    display: boolean = false;
    studentSignature: SignInformations = {};

    openSignatureModal(student: Student) {
        this.studentSignature = {
            name: this.classInfo.name,
            schedule: this.convertDateToSchedule(new Date(this.classInfo.date?.start), new Date(this.classInfo.date?.end)),
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

    /**
     * Format two date to a schedule date like : 'day 0 month 00:00 - 12:00'
     * @param start Start Date
     * @param end End Date
     * @returns String formated date
     */
    convertDateToSchedule(start: Date, end: Date): string {
        var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        return `${days[start.getDay()]} ${start.getDate()} ${months[start.getMonth()]} ${start.toTimeString().slice(0, 5)} - ${end.toTimeString().slice(0, 5)}`;
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
}