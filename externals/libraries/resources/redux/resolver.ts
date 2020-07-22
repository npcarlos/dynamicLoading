import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export abstract class ReducerSelectorResolver<ApplicationState, Model> implements Resolve<Model> {
  constructor(protected store: Store<ApplicationState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Model> {
    return new Observable((subscriber) => {
      this.getSelector().subscribe((model) => {
        if (!model) {
          const allowNull = this.executeRequest(route, state);
          this.getSelector().subscribe((response) => {
            if (response || allowNull) {
              subscriber.next(response);
              subscriber.complete();
            }
            //  else {
            //   throw new Error('No se pudo resolver el elemento: ' + this.constructor.name);
            // }
          });
        } else {
          subscriber.next(model);
          subscriber.complete();
        }
      });
    });
  }

  private getSelector(): Observable<Model> {
    return this.store.select(this.getReducerSelector());
  }

  abstract executeRequest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
  abstract getReducerSelector(): MemoizedSelector<ApplicationState, Model>;
}
