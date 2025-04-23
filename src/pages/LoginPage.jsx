


import { useState } from "react"
import { Eye, EyeOff, Lock, User, Github, Facebook } from "lucide-react"
import { Link } from "react-router-dom"
import { BsGoogle } from "react-icons/bs"
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#1e3b6f] via-[#2d4d87] to-[#1b2f5b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full opacity-20">
            <path
              fill="#0A1628"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4a6491] opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1e3b6f] opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 bg-[#4a6491] opacity-20 rounded-full blur-3xl"></div>

        {/* Stars/dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-1 w-1 bg-white rounded-full top-[10%] left-[15%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[15%] left-[25%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[20%] left-[35%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[25%] left-[45%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[30%] left-[55%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[35%] left-[65%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[40%] left-[75%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[45%] left-[85%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[50%] left-[10%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[55%] left-[20%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[60%] left-[30%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[65%] left-[40%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[70%] left-[50%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[75%] left-[60%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[80%] left-[70%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[85%] left-[80%]"></div>
        </div>
      </div>

      {/* Login Form - Centered */}
      <div className="w-full flex items-center justify-center p-6 md:p-16 z-10">
        <div className="w-full max-w-md">
          {/* Glassmorphism form container */}
          <div className="backdrop-blur-xl bg-[#1e3b6f]/30 p-8 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden">
            {/* Subtle glass highlights */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Login</h2>
              <p className="mt-2 text-white/70 text-sm">Welcome back! Please enter your details</p>
            </div>

            <form className="space-y-6 relative">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Username
                </label>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white/80">
                    Password
                  </label>
                </div>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-white/60" />
                    ) : (
                      <Eye className="h-5 w-5 text-white/60" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-white/10 border-white/20 rounded focus:ring-white/50 focus:ring-offset-white/10"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#1e3b6f] bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1e3b6f]/30 backdrop-blur-sm text-white/60">Or continue with</span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <FaGoogle className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <FaFacebook className="h-5 w-5"></FaFacebook>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <FaTwitter className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/registration" className="font-medium text-white hover:text-white/90">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
