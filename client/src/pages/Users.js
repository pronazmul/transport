import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/Profile/User";
import users from "../constant/users";

export default function Users() {
  const { id } = useParams();

  const existingUser = users.find((user) => user.userName === id);

  return (
    <div>
      <User existingUser={existingUser} />
    </div>
  );
}
