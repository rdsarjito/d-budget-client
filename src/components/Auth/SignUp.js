import React from 'react';
import useForm from '../../useForm';
import validate from '../../validateInfo';

const SignUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="pr-4 pl-4 py-10 flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col items-center justify-center lg:bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium text-center text-xl sm:text-2xl uppercase text-gray-800">Sign up for free</div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-6">
                <label htmlFor="username" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Username:</label>
                <div className="relative">
                  <input id="username" value={values.username} onChange={handleChange} type="username" name="username" className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Username" />
                  <p>{errors.username}</p>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                <div className="relative">
                  <input id="email" value={values.email} onChange={handleChange} type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                  <p>{errors.email}</p>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                <div className="relative">
                  <input id="password" value={values.password} onChange={handleChange} type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <label htmlFor="password2" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
                <div className="relative">
                  <input id="password2" value={values.password2} onChange={handleChange} type="password" name="password2" className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Confirm Password" />
                </div>
              </div>

              <div className="flex w-full">
                <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SignUp;