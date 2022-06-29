import { Component, OnInit } from '@angular/core';
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-qr-code-impl',
  templateUrl: './qr-code-impl.component.html',
  styleUrls: ['./qr-code-impl.component.scss']
})
export class QrCodeImplComponent implements OnInit {

  public qrCodeDownloadLink: string = "http://localhost:4200/dashboard/classe";
  display: boolean = false;
  constructor () {
  }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

}
