/*
A service is a class with a focused purpose, they are often used for features that:
    Are independent from any particular component
    Provide shared data or logic across components
    encapsulate external interactions
*/


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()

export class ProductService{
    private _productUrl : string = 'api/products/products.json';

    constructor( private _http : Http ){ }
    // Constructors are used to inject service dependencies,
    // Creates a private _http variable and assigns the injected service instance to _http

    getProducts() : Observable<IProduct[]> {
    // Returns a Observable sequence of type IProduct
        return this._http.get( this._productUrl )
            // Sends a get request out to _productUrl and waits for response
            .map(( response : Response ) => <IProduct[]> response.json())
            // map operator, allows us to transform the incoming data.
            // _http.get will return an Observable<Response> however this is just data
            // we instead use map to transform the response data to IProduct
            .do(data => console.log('All: ' + JSON.stringify(data)))
            // Lets us peak at the data without interrupting the flow of data, useful for debugging
            .catch(this.handleError);
            // Call local handle error method
    }

    private handleError( error : Response ) {
     console.error(error);
     return Observable.throw(error.json().error || 'Server error');
    }
}