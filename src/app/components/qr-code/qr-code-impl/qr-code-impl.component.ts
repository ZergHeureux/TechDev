import { Component, OnInit } from '@angular/core';
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-qr-code-impl',
  templateUrl: './qr-code-impl.component.html',
  styleUrls: ['./qr-code-impl.component.scss']
})
export class QrCodeImplComponent implements OnInit {

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor () {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  ngOnInit(): void {
  }

}
