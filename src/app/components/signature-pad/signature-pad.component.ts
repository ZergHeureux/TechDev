import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';
import { Observable, Subscription } from "rxjs";


@Component({
    selector: 'sign-pad',
    templateUrl: './signature-pad.component.html',
    styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePad {

    private eventsSubscription!: Subscription;

    @Input() events!: Observable<void>;
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

    ngOnInit(){
        this.eventsSubscription = this.events.subscribe(() => {
            this?.signaturePad?.clear();
        });
    }

    ngAfterViewInit() {
        this.resizeCanvas();
    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }


    @HostListener('window:resize', ['$event'])
    resizeCanvas() {
        let screenWidth = window.screen.availWidth;
        let canvas = { width: 500, height: 300, ratio: 3/5 };

        if (screenWidth <= 500) {
            canvas.width = screenWidth - 10;
            canvas.height = (screenWidth - 10) * canvas.ratio;
        }

        this.signaturePadOptions.canvasWidth = canvas.width;
        this.signaturePadOptions.canvasHeight = canvas.height;
        this.signaturePad?.set('canvasWidth', canvas.width);
        this.signaturePad?.set('canvasHeight', canvas.height);

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