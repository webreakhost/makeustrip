




import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../context/authContext";
import { BACKENDURL } from "../Config/Config";

const AdminRoleManager = () => {
  const { isAdmin } = useContext(authContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/v1/auth/allusers`);
      setUsers(response.data.users || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch user data.");
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(`${BACKENDURL}/api/v1/auth/update-role/${userId}`, { role: newRole });

      // Update UI with new role
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user.id === userId ? { ...user, user: { ...user.user, role: newRole } } : user
        )
      );
    } catch (err) {
      console.error("Error updating role:", err);
      alert("Failed to update role. Please try again.");
    }
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">Access Denied: Admins Only</p>
      </div>
    );
  }

  if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage User Roles</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ user }) => (
            <tr key={user.id} className="text-center border-b">
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border">{user.role}</td>
              <td className="p-3 border">
                <select
                  className="p-2 border rounded"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRoleManager;
