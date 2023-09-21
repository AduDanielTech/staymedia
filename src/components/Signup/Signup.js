import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ formData, setFormData }) {
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return; // Do not proceed with submission
    }

    // Clear any previous password match error
    setPasswordMatchError(false);

    // Perform signup logic (e.g., API call) here
    // If successful, redirect to the success page
    console.log('hu');
    navigate('/success');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg capitalize">a simple signup page</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        {passwordMatchError && (
          <p className="text-red-500">Passwords do not match.</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
