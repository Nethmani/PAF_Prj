import axios from "axios";

export const deleteUserById = async (id, callback) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
      alert("User deleted ✅");
      if (callback) callback(); // e.g., refresh user list
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete ❌");
    }
  }
};
