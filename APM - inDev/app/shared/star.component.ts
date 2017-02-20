import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'ai-star',
    moduleId : module.id,
    templateUrl : 'star.component.html',
    styleUrls : ['star.component.css']
})


export class StarComponent implements OnChanges{
    @Input() rating : number; //Input data from its container
    starWidth : number;
    @Output() ratingClicked : EventEmitter<string> =
                new EventEmitter<string>(); //sends a payload to the outside container

    ngOnChanges() : void {
        this.starWidth = this.rating * 86/5
        // 86 Pixel stars by 5 stars each.
    }
    onClick() : void {
        this.ratingClicked.emit( `: The Rating ${this.rating} was clicked!` );
        //Sends a payload with the following string to the outside container.
    }
}