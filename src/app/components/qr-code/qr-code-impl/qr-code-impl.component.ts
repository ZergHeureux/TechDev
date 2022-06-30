import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr-code-impl',
  templateUrl: './qr-code-impl.component.html',
  styleUrls: ['./qr-code-impl.component.scss']
})
export class QrCodeImplComponent {

  @Input() display: boolean = false;

  public qrCodeDownloadLink: string = "http://localhost:4200/dashboard/class";

  constructor () {}
}
