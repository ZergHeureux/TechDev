import { PrimeNGConfig } from 'primeng/api';

import { ChangeDetectorRef, OnDestroy, Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TechDev';
  display :boolean=false;
  sideBarOpen = false;
  mobileQuery!: MediaQueryList ;

  private _mobileQueryListener!: (() => void);

  constructor(private primengConfig: PrimeNGConfig,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery?.removeListener(this._mobileQueryListener);
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}

