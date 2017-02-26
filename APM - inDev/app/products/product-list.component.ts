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

    constructor( private _productService : ProductService ){ //Used to register a Service
    }
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    ngOnInit() : void {
        // Better to use OnInit instead of constructor for initialization
        this._productService.getProducts()
            .subscribe( products => this.products = products,
                        error => this.errorMessage = <any>error);
        // subscribe kicks off the http request used in product.service to retrieve the product items
        // The first function: (products)
            // products is the array of retrieved products,
            // this.products than sets the returned array to the local products array
        //The second function:  (error)
            // this function is executed if the observable fails
    }
    onRatingClicked( message : string ) : void {
        this.pageTitle = 'Product List ' + message;
    }
}

