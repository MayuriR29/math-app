import {INC_NUMBER} from '../actions';

export default function performAction  (state={num:0},action){
    switch(action.type){
        case INC_NUMBER:
        console.log('Action performed from the reducer ->state',state,'action ->',action);
        let num=0;
        return {num};
        default:  
        return state;
    }
}
