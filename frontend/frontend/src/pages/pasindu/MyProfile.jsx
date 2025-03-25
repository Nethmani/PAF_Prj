import { deleteUserById } from "../pasindu/DeleteUser";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      try {
        await deleteUserById(user.id);
        sessionStorage.removeItem("user");
        navigate("/login");
      } catch (err) {
        console.error("Delete failed", err);
        alert("Failed to delete user ❌");
      }
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Profile</h2>
        <div className="space-y-2">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
        </div>

        <button
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition"
          onClick={() => navigate(`/update-user/${user.id}`)}
        >
          ✏️ Edit Profile
        </button>

        <button
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          onClick={() => {
            sessionStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </button>

        {/* ✅ Delete Button */}
        <button
          className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition"
          onClick={handleDelete}
        >
          🗑️ Delete Account
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
