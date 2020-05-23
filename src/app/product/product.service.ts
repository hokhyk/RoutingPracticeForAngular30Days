import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  prodcutList: Product[] = [];
  constructor() { }

  getProduct(id: string): Observable<Product> {

    return of(this.prodcutList[id]);
  }

}


