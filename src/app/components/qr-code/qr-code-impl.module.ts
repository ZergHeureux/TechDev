import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QrCodeImplComponent} from "./qr-code-impl/qr-code-impl.component";
import {QRCodeModule} from "angularx-qrcode";
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [QrCodeImplComponent],
  imports: [
    CommonModule,
    QRCodeModule,
    DialogModule
  ],
  exports : [QrCodeImplComponent]
})
export class QrCodeImplModule { }
