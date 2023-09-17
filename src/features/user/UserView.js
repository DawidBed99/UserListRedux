import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./userSlice";
import "./UserView.css";
import { Link } from "react-router-dom";
import { SingleUser } from "./SingleUser";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="container">
      <div className="container2">
        <h2>List of Users</h2>
        <ul>
          <h3>Name:</h3>
          {Array.isArray(user.users)
            ? user.users.map((userSingle) => (
                <li
                  key={userSingle.id}
                  onClick={() => localStorage.setItem("id", userSingle.id)}
                >
                  <Link className="link" to={`/id`}>
                    {userSingle.name}{" "}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
