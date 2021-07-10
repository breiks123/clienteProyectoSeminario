import { loginResponse } from "../../interfaces/responseIntefaces";

export interface AuthState {
    errorMessage:string;
    token:string|null,
    user:loginResponse|null|"no data",
    status:'verificando'|'auntenticado'|'no-autenticado',
}

type AuthActions=
    |{type:'singIn',payload:{userL:loginResponse}}
    |{type:'addError',payload:string}
    |{type:'removeError'}
    |{type:'logout'}
    |{type:'logueado',payload:loginResponse}
    
export const AuthReducer =(state:AuthState,action:AuthActions):AuthState=>{
    switch (action.type) {
        case 'addError':
            return{
                ...state,
                errorMessage:action.payload,
                user:null,
                status:'no-autenticado'
            }
            break;
        
        case 'removeError':
            return{
                ...state,
                errorMessage:''
            }
        case 'singIn':
            return{
                ...state,
                status:'auntenticado',
                errorMessage:'',
                user:action.payload.userL
            }
        case 'logout':
            return{
                ...state,
                status:'no-autenticado',
                user:null
            }
        case 'logueado':
            return{
                ...state,
                status:'auntenticado',
                user:action.payload
            }
        default:
            return state;
    }
}
