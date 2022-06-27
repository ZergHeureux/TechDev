import { Component, ApplicationRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechDev';
  constructor(private applicationRef: ApplicationRef){}
  
  ngOnInit() {
    this.applicationRef.isStable.subscribe((t) => {
      console.log('App stable: ' + t);
    });
  }
}
