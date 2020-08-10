import { Routes } from '@angular/router';

import { BasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { MultiselectComponent } from './multiselect/multiselect.component';

export const FormsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'formbasic',
                component: BasicComponent,
                data: {
                    title: 'Room Booking',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Room Booking' }
                    ]
                }
            },
            {
                path: 'formvalidation',
                component: FormvalComponent,
                data: {
                    title: 'Settings',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Settings' }
                    ]
                }
            },
            {
                path: 'multiselect',
                component: MultiselectComponent,
                data: {
                    title: 'Multiselect',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Multiselect' }
                    ]
                }
            },
            {
                path: 'ngx',
                loadChildren: () => import('./ngx-wizard/ngx-wizard.module').then(m => m.NGXFormWizardModule)
            }
        ]
    }
];
