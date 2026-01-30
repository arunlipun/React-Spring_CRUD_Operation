import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();          // ✅ kept
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();  // ✅ function call
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Edit User
        </h2>

        <form className="space-y-5" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={onInputChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onInputChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onInputChange}
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Update
          </button>

          <Link to="/" className="block text-center text-blue-600">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
