import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';


@Component({
    selector: 'sign-pad',
    templateUrl: './signature-pad.component.html',
    styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePad {

    @Input() signInfo: SignInformations = {};
    @Output() signedEvent = new EventEmitter<SignInformations>();

    @ViewChild('signature')
    signaturePad!: SignaturePadComponent;

    signaturePadOptions: NgSignaturePadOptions = {
        minWidth: 5,
        canvasWidth: 500,
        canvasHeight: 300,
        backgroundColor: "white"
    };

    canValidate: boolean = false;

    constructor() {}

    ngAfterViewInit() {
        this.signaturePad.clear();
    }

    validateSignature() {
        this.signInfo.signImage = this.signaturePad.toDataURL("image/jpeg");
        this.signInfo.isSigned = true;
        this.signedEvent.emit(this.signInfo);
    }

    clearSignature() {
        this.signaturePad.clear();
        this.canValidate = false;
    }

    drawEnd(event: MouseEvent | Touch) {
        this.canValidate = true;
    }

}

export interface  SignInformations {
    name?: string,
    schedule?: string,
    isSigned?: boolean,
    signImage?: string,
    student?: {
        firstname?: string,
        lastname?: string,
    }
}