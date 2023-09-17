import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleData } from "./userSlice";
import "./UserView.css";

export const SingleUser = (props) => {
  const idLocal = localStorage.getItem("id");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleData(idLocal));
  }, []);
  return (
    <div onClick={() => console.log(user.users)} className="container">
      {/* <button>click</button> */}
      <div className="container2">
        <h2>Single User Data</h2>
        <ul>
          <li>Name: {user.users.name} </li>
          <li>Username: {user.users.username} </li>
          <li>E-mail: {user.users.email} </li>
          <li>Phone: {user.users.phone} </li>
          <li>Website: {user.users.website} </li>
        </ul>
      </div>
    </div>
  );
};
