"use client"
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[#FFFBF2] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40"></div>
      
      <div className="w-full max-w-[400px]">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-block p-3 sm:p-4 rounded-full bg-orange-100 mb-3 sm:mb-4">
            <div className="bg-orange-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-xl sm:text-2xl font-bold">ॐ</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-orange-900">Return to Peace</h1>
          <p className="text-orange-600/70 mt-1 text-sm sm:text-base px-4">Please sign in to continue your daily Jaap</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-orange-900/5 p-6 sm:p-10 border border-orange-50">
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-[10px] sm:text-xs uppercase tracking-widest font-bold text-orange-800 mb-1.5 ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 sm:py-4 bg-orange-50/30 border border-orange-100 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-orange-200 text-sm sm:text-base"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-orange-800">
                  Password
                </label>
                <button type="button" className="text-[10px] sm:text-xs font-semibold text-orange-600 hover:text-orange-700">
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 sm:py-4 bg-orange-50/30 border border-orange-100 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 outline-none transition-all placeholder:text-orange-200 text-sm sm:text-base"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-200 transform transition-all active:scale-[0.97] flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Enter Prayer Room</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 sm:mt-8">
            <div className="relative flex items-center justify-center">
              <div className="flex-grow border-t border-orange-100"></div>
              <span className="flex-shrink mx-4 text-orange-300 text-[10px] uppercase tracking-widest font-medium">New Here?</span>
              <div className="flex-grow border-t border-orange-100"></div>
            </div>
            
            <button 
              className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 border-2 border-orange-100 text-orange-700 text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl hover:bg-orange-50 transition-colors"
            >
              Create an Account
            </button>
          </div>
        </div>

        {/* Support */}
        <p className="text-center mt-6 sm:mt-8 text-orange-400 text-xs sm:text-sm">
          Having trouble? <a href="#" className="underline font-medium">Contact support</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;