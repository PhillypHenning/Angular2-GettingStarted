import { Component, OnInit } from '@angular/core'; //Imported modules

import { IProduct } from './product' ;
import { ProductService } from './product.service';

@Component({  //Decorator
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'] //Style array
})

export class ProductListComponent implements OnInit{  //Class declaration, implementing interface
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage : string;
    products: IProduct[];

    constructor( private _productService : ProductService ){ //Used to register a service object
    }
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    ngOnInit() : void {
        this._productService.getProducts()
            .subscribe( products => this.products = products,
                        error => this.errorMessage = <any>error); //Better to use OnInit instead of constructor for initialization
    }
    onRatingClicked( message : string ) : void {
        this.pageTitle = 'Product List ' + message;
    }
}

