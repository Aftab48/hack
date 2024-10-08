import { useState } from "react";
import MaxWidthContainer from "../components/mmw";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <section className="bg-hero-pattern py-10 bg-[url('/assets/bg-hero.png')]">
      <MaxWidthContainer>
        {isSubmitted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key="submission"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl text-white font-bold mb-4">
                  Logged in!
                </h2>

                <div className="animate-pulse mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <button
                  onClick={goToHome}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
                >
                  Go to Home
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <div className="min-h-screen flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-l-xl">
                <div className="max-w-md w-full space-y-8 p-6 md:p-10">
                  <h2 className="text-center text-3xl font-bold text-gray-900">
                    LOGIN
                  </h2>
                  <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="username" className="sr-only">
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                          placeholder="Username"
                        />
                      </div>

                      <div className="mt-4">
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={handleSubmit}
                      >
                        Login Now
                      </button>
                    </div>

                    <div className="mt-6">
                      <p className="text-center text-gray-500">
                        Login with Others
                      </p>
                      <div className="flex flex-col items-center space-y-4 mt-4">
                        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center rounded-md">
                          <img
                            src="icons/google.png"
                            alt="Google"
                            className="h-5 mr-2"
                          />
                          Login with Google
                        </button>
                        <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center rounded-md">
                          <img
                            src="icons/facebook.png"
                            alt="Facebook"
                            className="h-5 mr-2"
                          />
                          Login with Facebook
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-gray-500">
                        New to PitchPerfect?{" "}
                        <a
                          href="/signup"
                          className="text-blue-600 hover:underline"
                        >
                          Sign up for an account
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-full md:w-1/2 hidden md:flex items-center justify-center relative bg-[url('/assets/blog.png')] bg-cover rounded-r-xl">
                <div className="text-white text-center p-8">
                  <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-left pl-28">
                    Login Now, <br /> Enjoy the Game
                  </h2>
                  /
                </div>
              </div>
            </div>
          </>
        )}
      </MaxWidthContainer>
    </section>
  );
};

export default Login;
