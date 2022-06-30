import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="container row">
           <div class="d-flex justify-content-center">
             <div class="col-md-6">
               <app-calendar-view-day></app-calendar-view-day>
             </div>
           </div>
        </div>`
})
export class DashboardPage {

}
