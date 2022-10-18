import { GET_ERROR, GET_REQUEST, GET_SUCCESS, PUT_ERROR, PUT_REQUEST, PUT_SUCCESS } from "./actionTypes"

let initState= {
  loading : false,
  error: false,
  data: []
}

export const reducer = (state = initState, action) =>{
    switch(action.type){
        case GET_REQUEST:{
            return{
              ...state,
              loading: true,
              error: false,
              data: []
            }
        }
        case GET_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: false,
                data: action.payload
              }
        }
        case GET_ERROR :{
            return{
                ...state,
                loading: false,
                error: false,
                data: [] 
            }
        }
        case PUT_REQUEST:{
            return{
              ...state,
              loading: true,
              error: false,
              data: []
            }
        }
        case PUT_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: false
              }
        }
        case PUT_ERROR :{
            return{
                ...state,
                loading: false,
                error: false,
                data: [] 
            }
        }
        default: {
            {return state}
        }
    }
}