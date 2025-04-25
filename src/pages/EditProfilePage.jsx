"use client"


import { useState } from "react"
import { ArrowLeft, Edit2 } from "lucide-react"
import { Link } from "react-router-dom"

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    email: "techniciajkir@gmail.com",
    firstName: "Md Jakir",
    lastName: "Md Jakir",
    phone: "+126565944",
    birthday: "01-NOV-1998",
    gender: "Female",
    country: "CANADA",
  })

  const [editing, setEditing] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    country: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleEdit = (field) => {
    setEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSave = () => {
    // Save logic here
    console.log("Saving profile data:", formData)
    // Reset all editing states
    setEditing({
      firstName: false,
      lastName: false,
      phone: false,
      country: false,
    })
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 min-h-screen my-7 md:my-12">
      {/* Header */}
      <div className="bg-gray-200 p-4 flex items-center">
     
        <Link to="/user-profile"> <ArrowLeft size={20} className="mr-2"/></Link>
        <h1 className="text-lg font-medium">Edit Profile Information</h1>
      </div>

      {/* Form */}
      <div className="p-4 space-y-4">
        {/* Email */}
        <div className="bg-white p-4 rounded-sm">
          <label className="block text-sm mb-1">Email</label>
          <div className="text-gray-500">{formData.email}</div>
        </div>

        {/* First Name */}
        <div className="bg-white p-4 rounded-sm">
          <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">First name</label>
            {!editing.firstName && (
              <button onClick={() => toggleEdit("firstName")}>
                <Edit2 size={18} />
              </button>
            )}
          </div>
          {editing.firstName ? (
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1"
              autoFocus
            />
          ) : (
            <div>{formData.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div className="bg-white p-4 rounded-sm">
          <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">Last name</label>
            {!editing.lastName && (
              <button onClick={() => toggleEdit("lastName")}>
                <Edit2 size={18} />
              </button>
            )}
          </div>
          {editing.lastName ? (
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1"
              autoFocus
            />
          ) : (
            <div>{formData.lastName}</div>
          )}
        </div>

        {/* Phone */}
        <div className="bg-white p-4 rounded-sm">
          <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">Phone</label>
            {!editing.phone && (
              <button onClick={() => toggleEdit("phone")}>
                <Edit2 size={18} />
              </button>
            )}
          </div>
          {editing.phone ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1"
              autoFocus
            />
          ) : (
            <div>{formData.phone}</div>
          )}
        </div>

        {/* Birthday */}
        <div className="bg-white p-4 rounded-sm">
          <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">Birthday</label>
            <span className="text-xs text-gray-500">no changed available</span>
          </div>
          <div>{formData.birthday}</div>
        </div>

        {/* Gender */}
        <div className="bg-white p-4 rounded-sm">
          <label className="block text-sm mb-2">Gender</label>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-1 rounded-md flex items-center ${
                formData.gender === "Female" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, gender: "Female" }))}
            >
              <span className="mr-1">♀</span> Female
            </button>
            <button
              className={`px-4 py-1 rounded-md flex items-center ${
                formData.gender === "Male" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, gender: "Male" }))}
            >
              <span className="mr-1">♂</span> Male
            </button>
          </div>
        </div>

        {/* Country */}
        <div className="bg-white p-4 rounded-sm">
          <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">Country</label>
            {!editing.country && (
              <button onClick={() => toggleEdit("country")}>
                <Edit2 size={18} />
              </button>
            )}
          </div>
          {editing.country ? (
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1"
              autoFocus
            />
          ) : (
            <div>{formData.country}</div>
          )}
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="w-full bg-[#1a2d5a] text-white py-3 font-medium uppercase">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default EditProfilePage
