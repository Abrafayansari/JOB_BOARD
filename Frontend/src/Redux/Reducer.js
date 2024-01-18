import { USER } from "./Action";

const initialstate={}
export const Userreducer=(state=initialstate,action)=>{
    switch (action.type) {
        case USER:
            return {...state,loginuser:action.payload}
           
    }
    return state
}