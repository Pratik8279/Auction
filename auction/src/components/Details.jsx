import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { put_data } from "../redux/actions";
import styles from "../styles/Home.module.css"

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [bid, setBid] = useState({});
  const [bidder, setBidder] = useState("");
  const [val,setVal] = useState(0);
  const storage = window.sessionStorage;
  const get_data = async () => {
    try {
      let res = await fetch(`http://localhost:8080/bids/${id}`);
      let data = await res.json();
      setBid(data);
      console.log(data);
      console.log(bid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_data();
    let bidder = storage.getItem("bidder_name");
    setBidder(bidder);
  
  }, []);

  const handleClick = () =>{
    let new_bid = window.prompt("Enter New Bid");
    setVal(new_bid);
    bid.Previous_bid = new_bid;
    dispatch(put_data(bid,id)).then(()=>{
      dispatch(get_data())
    })
  }
  return (
    <>
      <img src={bid.image} alt="" />
      <div>
        <h1>Name: {bid.name}</h1>
        <h1>User: {bidder}</h1>
        <p>Quantity: {bid.Quantity}</p>
        <p>Previous Bid: {bid.Previous_bid}</p>
        <p>Description: {bid.Description}</p>
        <button onClick={handleClick} id= {styles.btn}>Create New Bid</button>
      </div>
    </>
  );
}

export default Details;
