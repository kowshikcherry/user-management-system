import React, { useState, useEffect } from "react";
import {
  fetchUsers,
  addUser,
  editUser,
  deleteUser,
} from "../services/userService";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import Navbar from "../components/Navbar";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers((prev) => [...prev, newUser]);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleEditUser = async (updatedUser) => {
    try {
      if (!editingUser) return;
      const newUser = await editUser(editingUser.id, updatedUser);
      setUsers((prev) =>
        prev.map((user) => (user.id === editingUser.id ? newUser : user))
      );

      setEditingUser(null);
    } catch (err) {
      console.error("Error editing user:", err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      setEditingUser(null);
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Manage Users</h1>
      <UserForm
        initialData={editingUser}
        onSubmit={editingUser ? handleEditUser : handleAddUser}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserManagement;
