import React, { useState } from "react";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().min(3, "Email is required!"),
  password: z.string().min(3, "Password is required!!"),
});

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: null, password: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: null, password: null });

    try {
      formSchema.parse(form);
      console.log("Valid Data:", form);
      // Call Backend Here
    } catch (error) {
      const newErrors = { email: null, password: null };
      error.errors.forEach((err) => {
        if (err.path[0] === "email") newErrors.email = err.message;
        if (err.path[0] === "password") newErrors.password = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
