import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';
import { BasicComponent } from './basic/basic.component';

export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'datatable',
                component: DatatableComponent,
                data: {
                    title: 'Guest List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Guest List' }
                    ]
                }
            },
            {
                path: 'basictable',
                component: BasicComponent,
                data: {
                    title: 'Rooms Booking  List ',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Rooms Booking  List' }
                    ]
                }
            }
        ]
    }
];
