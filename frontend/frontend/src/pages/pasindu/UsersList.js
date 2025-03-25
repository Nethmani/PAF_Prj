import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteUserById } from "../pasindu/DeleteUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        All Users
      </h2>
      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition duration-200"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Link to={`/edit/${user.id}`}>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteUserById(user.id, fetchUsers)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
