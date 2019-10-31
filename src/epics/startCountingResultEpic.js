import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const startCountingResultEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_COUNTING_RESUL),
        mergeMap(action => {
            return of(
                Actions.improveMarketing(action.act),
            )
        }) 
    )

export default startCountingResultEpic;
