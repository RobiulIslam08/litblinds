

import { useState } from "react"
import user1 from '../../assets/images/windowBlindsSinglePage/testimonial-user-1.jpg'
import user2 from '../../assets/images/windowBlindsSinglePage/user2.jpeg'
const ReviewSections = () => {
	
	  // Sample data for reviews
	  const reviewsData = [
		{
		  id: 1,
		  name: "Lori Bennett",
		  rating: 5,
		  comment: "Great Product! I'm Very Satisfied With My Purchase.",
		  date: "2 May",
		  avatar: user1,
		},
		{
		  id: 2,
		  name: "Timona Simsuna",
		  rating: 5,
		  comment: "Excellent Quality! I Highly Recommend It.",
		  date: "12 May",
		  avatar: user2,
		},
	  ]
	  const [comment, setComment] = useState("")
	  const averageRating = 4.6
	
	  // Render star rating
	  const renderStars = (rating) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
		  if (i <= rating) {
			stars.push(
			  <span key={i} className="text-yellow-400 text-xl">
				★
			  </span>,
			)
		  } else {
			stars.push(
			  <span key={i} className="text-gray-300 text-xl">
				★
			  </span>,
			)
		  }
		}
		return stars
	  }
	return (
		<div className="bg-light-gray p-4">
      <div className="p-4 bg-white  border border-green-400 rounded-lg shadow-sm">
        <h2 className="text-xl font-medium mb-1">Reviews</h2>

        {/* Average Rating */}
        <div className="flex items-center mb-1">
          {renderStars(Math.floor(averageRating))}
          <span className="ml-1 text-lg">{averageRating}</span>
        </div>

        <hr className="my-2 border-gray-200" />

        {/* Filter Options */}
        <div className="flex items-center space-x-1 mb-4">
          <button className="bg-black text-white px-2 py-1 rounded-md text-sm">All (290)</button>
          <button className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm flex items-center">
            <span className="mr-1">★</span> 23
          </button>
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-md text-sm flex items-center">
            <span className="text-white">★★★★★</span> 2,123
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Individual Reviews */}
        {reviewsData.map((review) => (
          <div key={review.id} className="mb-1">
            <div className="flex items-start">
              <img
                src={review.avatar || "/placeholder.svg"}
                alt={`${review.name}'s avatar`}
                className="w-10 h-10 rounded-full mr-4 object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center mb-1">{renderStars(review.rating)}</div>
                <div className="font-medium text-sm">{review.name}</div>
                <p className="text-base mb-1">{review.comment}</p>
              </div>
              <div className="text-sm text-gray-500">{review.date}</div>
            </div>
            <hr className="my-2 border-gray-200" />
          </div>
        ))}

        {/* Comment Form */}
        <div className="mt-1">
          <h3 className="text-lg font-medium mb-1">Post A Comment</h3>
          <div className="mb-1">
            <label htmlFor="comment" className="block mb-1">
              Your Comment
            </label>
            <textarea
              id="comment"
              className="w-full border border-gray-300 rounded-md p-2 min-h-[100px]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
            onClick={() => console.log("Comment posted:", comment)}
          >
            Post
          </button>
        </div>
      </div>
    </div>
	);
};

export default ReviewSections;