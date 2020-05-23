import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Product } from './product.model';

// Service
import { ProductService } from './product.service';

// RxJS
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<Product> {


  constructor(private productService: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Observable<never> {

    const id = route.paramMap.get('id');

    return this
            .productService
            .getProduct(id)
            .pipe(
              take(1),
              mergeMap(product => {
                if (product) {
                  return of(product);
                } else { // id not found
                  this.router.navigate(['products']);
                  return EMPTY;
                }
              })
            );
  }

}
