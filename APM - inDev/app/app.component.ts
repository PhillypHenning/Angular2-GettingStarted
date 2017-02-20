import { Component } from '@angular/core'; //Core Library Module

import { ProductService } from './products/product.service';

@Component({
    // ( function ) { object }
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>
    `,
    moduleId : module.id,
    providers : [ ProductService ]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
