import { JOB, LOGOUT, USER } from "./Action";

const initialstate={}
export const Userreducer=(state=initialstate,action)=>{
    switch (action.type) {
        case USER:
            return {...state,loginuser:action.payload}
           case LOGOUT:
            delete state["loginuser"]
            return {...state}
    }
    return state
}
const jobstate={}
export const jobreducer =(state=jobstate,action)=>{
if (action.type==JOB) {
    return {...state,currentjob:action.payload}
}return state
}