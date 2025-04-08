

// import { useState } from "react"
// import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react"
// import { Link } from "react-router-dom"


// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className=" flex flex-col md:flex-row my-20">
//       {/* Left side - Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16  order-2 md:order-1 py-20">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-[#1b2f5b]">Create your account</h2>
//             <p className="mt-3 text-gray-600">Join thousands of users and start your journey</p>
//           </div>

//           <div className="bg-light-gray p-8 rounded-2xl shadow-sm border border-gray-100">
//             <form className="space-y-5">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <div className="relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e3b6f] focus:border-[#1e3b6f] sm:text-sm"
//                     placeholder="John Doe"
//                   />
//                 </div>
//               </div>

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
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="new-password"
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

//               <div className="space-y-2">
//                 <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <div className="relative rounded-lg shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="confirm-password"
//                     name="confirmPassword"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="new-password"
//                     required
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e3b6f] focus:border-[#1e3b6f] sm:text-sm"
//                     placeholder="••••••••"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-3 pt-2">
//                 <div className="text-sm font-medium text-gray-700 mb-2">Password must contain:</div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="h-4 w-4 text-[#1e3b6f] mr-2" />
//                   <span>At least 8 characters</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="h-4 w-4 text-[#1e3b6f] mr-2" />
//                   <span>At least one uppercase letter</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="h-4 w-4 text-[#1e3b6f] mr-2" />
//                   <span>At least one number</span>
//                 </div>
//               </div>

//               <div className="flex items-start pt-2">
//                 <input
//                   id="terms"
//                   name="terms"
//                   type="checkbox"
//                   className="h-4 w-4 text-[#1e3b6f] focus:ring-[#1e3b6f] border-gray-300 rounded mt-1"
//                 />
//                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//                   I agree to the{" "}
//                   <a href="#" className="text-[#1e3b6f] hover:text-[#1b2f5b]">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-[#1e3b6f] hover:text-[#1b2f5b]">
//                     Privacy Policy
//                   </a>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#1e3b6f] hover:bg-[#1b2f5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3b6f] transition-colors duration-300 mt-6"
//               >
//                 Create account
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </button>
//             </form>
//           </div>

//           {/* Mobile only - Link to login */}
//           <div className="mt-8 text-center md:hidden">
//             <p className="text-gray-600">Already have an account?</p>
//             <Link
//               href="/login"
//               className="mt-2 inline-flex items-center font-medium text-[#1e3b6f] hover:text-[#1b2f5b]"
//             >
//               Sign in
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Decorative */}
//       <div className="hidden md:flex py-20 md:w-1/2 bg-gradient-to-br from-[#1e3b6f] to-[#1b2f5b] text-white p-12 flex-col justify-between relative overflow-hidden order-1 md:order-2">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full">
//             {/* Decorative elements */}
//             <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
//             <div className="absolute bottom-10 left-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
//             <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full"></div>
//           </div>
//         </div>

//         <div className="relative z-10">
//           <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
//           <p className="text-lg text-[#eeeeee] mb-8 max-w-md">
//             Create an account to get started with our platform. Unlock all features and connect with thousands of users.
//           </p>
//           <div className="flex space-x-4 mb-8">
//             <div className="h-1 w-12 bg-[#eeeeee]/70 rounded-full"></div>
//             <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//             <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//           </div>
//         </div>

//         <div className="relative z-10">
//           <p className="text-[#eeeeee] mb-4">Already have an account?</p>
//           <Link
//             href="/login"
//             className="inline-flex items-center px-6 py-3 border border-[#eeeeee] text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
//           >
//             Sign in
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }



import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, CheckCircle, Github, Facebook } from "lucide-react"
import { Link } from "react-router-dom"


export default function RegisterPage() {
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4a6491] opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1e3b6f] opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/2 w-40 h-40 bg-[#4a6491] opacity-20 rounded-full blur-3xl"></div>

        {/* Stars/dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-1 w-1 bg-white rounded-full top-[12%] left-[18%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[17%] left-[28%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[22%] left-[38%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[27%] left-[48%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[32%] left-[58%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[37%] left-[68%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[42%] left-[78%]"></div>
          <div className="absolute h-1 w-1 bg-white rounded-full top-[47%] left-[88%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[52%] left-[12%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[57%] left-[22%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[62%] left-[32%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[67%] left-[42%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[72%] left-[52%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[77%] left-[62%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[82%] left-[72%]"></div>
          <div className="absolute h-2 w-2 bg-white rounded-full top-[87%] left-[82%]"></div>
        </div>
      </div>

      {/* Register Form - Centered */}
      <div className="w-full flex items-center justify-center p-6 md:p-16 z-10">
        <div className="w-full max-w-md">
          {/* Glassmorphism form container */}
          <div className="backdrop-blur-xl bg-[#1e3b6f]/30 p-8 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden">
            {/* Subtle glass highlights */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Register</h2>
              <p className="mt-2 text-white/70 text-sm">Create an account to get started</p>
            </div>

            <form className="space-y-5 relative">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                  Full Name
                </label>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email address
                </label>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-white/80">
                  Password
                </label>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="••••••••"
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

              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-white/80">
                  Confirm Password
                </label>
                <div className="relative rounded-lg group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/60" />
                  </div>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/50 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-sm font-medium text-white/80 mb-2">Password must contain:</div>
                <div className="flex items-center text-sm text-white/80">
                  <CheckCircle className="h-4 w-4 text-white/80 mr-2" />
                  <span>At least 8 characters</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <CheckCircle className="h-4 w-4 text-white/80 mr-2" />
                  <span>At least one uppercase letter</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <CheckCircle className="h-4 w-4 text-white/80 mr-2" />
                  <span>At least one number</span>
                </div>
              </div>

              <div className="flex items-start pt-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 bg-white/10 border-white/20 rounded focus:ring-white/50 focus:ring-offset-white/10 mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
                  I agree to the{" "}
                  <a href="#" className="text-white hover:text-white/90">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-white hover:text-white/90">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#1e3b6f] bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-300 mt-6"
              >
                Create account
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
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-white/20 rounded-lg shadow-sm bg-white/10 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-white hover:text-white/90">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
