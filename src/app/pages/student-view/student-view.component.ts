import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { SignInformations } from "src/app/components/signature-pad/signature-pad.component";
import { ClassInformations } from "src/app/components/student-list/student-list.component";

@Component({
    selector: 'student-view',
    templateUrl: './student-view.component.html',
    styleUrls: ['./student-view.component.scss']
})
export class StudentView {

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

    onCloseSignatureModal: Subject<void> = new Subject<void>();

    displaySignaturePad: boolean = false;
    disabledAllSignatureButton: boolean = false;

    constructor() {}

    signedEvent(signInfo: SignInformations) {
        this.disabledAllSignatureButton = true;
        // TODO call api to send data
    }

    emitEventOnCloseSignatureModal() {
        this.onCloseSignatureModal.next();
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