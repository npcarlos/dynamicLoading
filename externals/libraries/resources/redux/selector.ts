import { select, MemoizedSelector, createSelector } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

type SelectorFunction<State, StateModel> = (state: State) => StateModel;

export const createReduxSelector = <ApplicationState, State, StateModel>(
  featureSelector: (state: ApplicationState) => State,
  selector: SelectorFunction<State, StateModel>
): MemoizedSelector<ApplicationState, StateModel> =>
  createSelector(featureSelector, (state: State) => selector(state) || null);

export const notNullSelect = <ApplicationState, StateModel>(
  selector: MemoizedSelector<ApplicationState, StateModel>,
  ...args: any[]
) => ($source: Observable<ApplicationState>): Observable<StateModel> => {
  return select(selector, ...args)($source).pipe(filter((data) => !!data));
};
