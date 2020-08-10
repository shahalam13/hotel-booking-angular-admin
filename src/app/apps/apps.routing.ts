import { Routes } from '@angular/router';


import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: {
          title: 'TasK List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Taskboard' }
          ]
        }
      },
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Booking-Calendar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Booking-Calendar' }
          ]
        }
      }
    ]
  }
];
