//page title and product properties.
import { Component } from '@angular/core';

import { IProduct } from './product';


@Component({
    templateUrl : 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle : string = 'Product Detail';
    prodProps : IProduct;

}