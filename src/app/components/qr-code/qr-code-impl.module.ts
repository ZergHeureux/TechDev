import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QrCodeImplComponent} from "./qr-code-impl/qr-code-impl.component";
import {QRCodeModule} from "angularx-qrcode";



@NgModule({
  declarations: [QrCodeImplComponent],
  imports: [
    CommonModule,
    QRCodeModule
  ],
  exports : [QrCodeImplComponent]
})
export class QrCodeImplModule { }
