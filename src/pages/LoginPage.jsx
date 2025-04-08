

// import { useState } from "react"
// import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"


// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row my-20 ">
//       {/* Left side - Decorative */}
//       <div className="hidden md:flex md:w-1/2 pt-20 bg-gradient-to-br from-[#1e3b6f] to-[#1b2f5b] text-white p-12 flex-col justify-between relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="absolute inset-0">
//           {/* Enhanced decorative elements */}
//           <div className="absolute top-0 left-0 w-full h-full">
//             {/* Decorative circles */}
//             <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-ping"></div>
//             <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
//             <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full "></div>

//             {/* Additional decorative elements */}
//             <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-red-500 opacity-30 rounded-full animate-bounce"></div>
//             <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-white opacity-10 rounded-full"></div>

//             {/* Decorative lines */}
//             <div className="absolute top-20 right-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-white opacity-20"></div>
//             <div className="absolute bottom-32 left-0 w-1/2 h-[1px] bg-gradient-to-r from-white to-transparent opacity-20 "></div>

//             {/* Decorative patterns */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-5">
//               <div
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 8%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 8%)",
//                   backgroundSize: "60px 60px",
//                 }}
//               ></div>
//             </div>

//             {/* Glowing accent */}
//             <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#c88d0e] opacity-30 rounded-full blur-3xl"></div>
//             <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#4a6491] opacity-20 rounded-full blur-3xl"></div>
//           </div>
//         </div>

//         <div className="relative z-10">
//           <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
//           <p className="text-lg text-[#eeeeee] mb-8 max-w-md">
//             Log in to your account to access your dashboard, manage your settings, and see your latest activity.
//           </p>
//           <div className="flex space-x-4 mb-8">
//             <div className="h-1 w-12 bg-[#eeeeee]/70 rounded-full"></div>
//             <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//             <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//           </div>
//         </div>

//         <div className="relative z-10">
//           <p className="text-[#eeeeee] mb-4">Don&apos;t have an account?</p>
//           <Link
//             href="/register"
//             className="inline-flex items-center px-6 py-3 border border-[#eeeeee] text-white rounded-lg  transition-colors duration-300"
//           >
//             Create an account
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>

//       {/* Right side - Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16 ">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-[#1b2f5b]">Sign in to your account</h2>
//             <p className="mt-3 text-gray-600">Enter your credentials to access your account</p>
//           </div>

//           <div className="bg-light-gray backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/40 transition-all duration-300 ">
//             <form className="space-y-6">
//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <div className="relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e3b6f] focus:border-[#1e3b6f] sm:text-sm"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <Link href="#" className="text-sm font-medium text-[#1e3b6f] hover:text-[#1b2f5b]">
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div className="relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="current-password"
//                     required
//                     className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e3b6f] focus:border-[#1e3b6f] sm:text-sm"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-[#1e3b6f] focus:ring-[#1e3b6f] border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#1e3b6f] hover:bg-[#1b2f5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3b6f] transition-colors duration-300"
//               >
//                 Sign in
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </button>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-3 gap-3">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
//                 >
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
//                 >
//                   <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
//                 >
//                   <svg className="h-5 w-5 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile only - Link to register */}
//           <div className="mt-8 text-center md:hidden">
//             <p className="text-gray-600">Don&apos;t have an account?</p>
//             <Link
//               href="/register"
//               className="mt-2 inline-flex items-center font-medium text-[#1e3b6f] hover:text-[#1b2f5b]"
//             >
//               Create an account
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



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
                <Link href="/register" className="font-medium text-white hover:text-white/90">
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
