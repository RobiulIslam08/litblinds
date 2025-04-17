"use client"

import { AlertCircle, Home } from "lucide-react"
import { Link } from "react-router-dom"



export default function ErrorPage({
  statusCode = 404,
  title = "Page not found",
  description = "Sorry, we couldn't find the page you're looking for.",
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle className="h-12 w-12 text-red-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
            {statusCode}
          </span>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

       
      </div>
    </div>
  )
}
