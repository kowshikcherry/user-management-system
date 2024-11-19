import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = ({ users, onEdit, onDelete }) => (
  <div className="user-list">
    {users.map((user) => (
      <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default UserList;
