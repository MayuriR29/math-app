export const INC_NUMBER="INC_NUMBER";

 export const incrementNumber =(num)=>{
    const action = {
        type:INC_NUMBER,
        num
    }
    return action;
 }