import React from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom"

function Home() {
    const storage = window.sessionStorage;
    useEffect(()=>{
        let name = storage.getItem("bidder_name");
        let id = storage.getItem("bidder_id");
        console.log(name, id);
    
        if ((name && id) == null) {
          window.location.reload();
          name = window.prompt("Enter Username");
          id = uuidv4();
          storage.setItem("bidder_name", name);
          storage.setItem("bidder_id", id);
        }
    })
  return (
    <>
       <Link to="/auctions"><button id= {styles.btn}>Go to Auctions</button> </Link> 
    </>
  )
}

export default Home