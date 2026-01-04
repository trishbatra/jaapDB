"use client"
import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Creating account...", formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF2] flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Logo Section */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-orange-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl border-4 border-orange-200 transition-transform hover:scale-105">
          <span className="text-white text-3xl sm:text-4xl font-bold">ॐ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-orange-900 tracking-tight">Jaap Sahayak</h1>
        <p className="text-orange-700 mt-1 italic text-sm sm:text-base px-2">"Your companion in daily devotion"</p>
      </div>

      {/* Auth Card */}
      <div className="bg-white p-5 sm:p-8 rounded-[2rem] shadow-xl w-full max-w-md border border-orange-50">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 bg-orange-50 p-1 rounded-2xl">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isLogin ? 'bg-white text-orange-600 shadow-sm' : 'text-orange-400'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${!isLogin ? 'bg-white text-orange-600 shadow-sm' : 'text-orange-400'}`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Join the Sangat'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-orange-800 uppercase tracking-tighter mb-1 ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Arjun Singh"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-orange-50/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-sm"
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-orange-800 uppercase tracking-tighter mb-1 ml-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-orange-50/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-sm"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-orange-800 uppercase tracking-tighter mb-1 ml-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-orange-50/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-sm"
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98] mt-2 text-sm sm:text-base"
          >
            {isLogin ? 'Open Prayer Room' : 'Create My Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-600 text-xs sm:text-sm font-bold hover:underline"
          >
            {isLogin ? "New user? Sign up here" : "Have an account? Login here"}
          </button>
        </div>
      </div>

      <p className="mt-8 text-orange-300 text-[10px] tracking-[0.2em] uppercase font-bold text-center px-4">
        Simple • Spiritual • Secure
      </p>
    </div>
  );
};

export default AuthPage;