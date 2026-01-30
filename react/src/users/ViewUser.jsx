import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          User Details
        </h2>

        <p className="mb-2"><b>ID:</b> {user.id}</p>
        <p className="mb-2"><b>Name:</b> {user.name}</p>
        <p className="mb-2"><b>Username:</b> {user.username}</p>
        <p className="mb-4"><b>Email:</b> {user.email}</p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default ViewUser;
