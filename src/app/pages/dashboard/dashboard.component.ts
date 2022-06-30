import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<div class="container">' +
    '      <div class="col-md-6">' +
    '        <app-calendar-view-day></app-calendar-view-day>' +
    '      </div>' +
    '    </div>'
})
export class DashboardPage {

}
