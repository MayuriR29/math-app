import {INC_NUMBER} from '../actions';

export const performAction = (state,action)=>{
    switch(action.type){
        case INC_NUMBER:
        console.log('Action performed from the reducer');
        let num=0;
        return num;
        default:
        num=0;
        return num;
    }
}
