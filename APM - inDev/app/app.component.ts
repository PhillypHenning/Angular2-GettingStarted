import { Component } from '@angular/core'; //Core Library Module


@Component({
    // ( function ) { object }
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
