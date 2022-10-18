import { GET_ERROR, GET_REQUEST, GET_SUCCESS, PUT_ERROR, PUT_REQUEST, PUT_SUCCESS } from "./actionTypes";

export const get_request = ()=> ({
    type: GET_REQUEST
})

export const get_success = (data) =>({
    type: GET_SUCCESS,
    payload: data
})

export const get_error =  () =>({
    type: GET_ERROR
})


export const get_data = () => async(dispatch)=>{
    dispatch(get_request())
      try {
        let res = await fetch("http://localhost:8080/bids");
        let data = await res.json();
        dispatch(get_success(data))
      } catch (error) {
         dispatch(get_error())
      }
}

export const put_request = ()=> ({
    type: PUT_REQUEST
})

export const put_success = (data) =>({
    type: PUT_SUCCESS,
})

export const put_error =  () =>({
    type: PUT_ERROR
})


export const put_data = ({name,image,Previous_bid,Quantity,Description},id) => async(dispatch)=>{
    dispatch(put_request())
      try {
        let res = await fetch(`http://localhost:8080/bids/${id}`,{
            method: "PUT",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                name,
                image,
                Previous_bid,
                Quantity,
                Description
            })
        });
        dispatch(put_success())
      } catch (error) {
         dispatch(put_error())
      }
}