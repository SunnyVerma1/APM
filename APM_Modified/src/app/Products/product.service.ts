import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'


import { IProduct } from "./product";



@Injectable()
export class ProductService{

    private _productUrl = './api/products/products.json'
    constructor (private _http : HttpClient){

    }
    getProduct() : Observable<IProduct[]>{
         return this._http.get<IProduct[]>(this._productUrl)
         .do(data => console.log('All: ' + JSON.stringify(data)))
         .catch(this.handleError);
    }

    private handleError(err : HttpErrorResponse) {

        console.log(err.message);
        return Observable.throw(err.message);
    }
}