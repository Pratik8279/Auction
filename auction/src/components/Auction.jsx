import React from "react";
import { useEffect } from "react";
import { get_data } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles/Auctions.module.css";

function Auction() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);
  useEffect(() => {
    dispatch(get_data());
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Participate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key = {ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.Quantity}</td>
              <td>
                {" "}
                <Link to={`/auctions/${ele.id}`}>Join</Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Auction;
