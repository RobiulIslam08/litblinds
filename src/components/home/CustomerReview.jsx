"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Abdur Rahman",
    avatar: "https://i.ibb.co.com/gPvQ8WT/avatar-1-150x150.png",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "It Was A Very Comfortable And Informative Experience Shopping At Lit Blinds. The Staff Were Very Friendly And Were Available Upon Entering The Store. I Would Recommend Anyone Looking For Window Coverings To Go To 'Lit Blinds'. Thank You.",
    position: "Banker",
  },
  {
    id: 2,
    name: "Rahadul Islam",
    avatar: "https://i.ibb.co.com/TTrWGqW/avatar-3-150x150.png",
    date: "1 month ago",
    rating: 4,
	comment:
	"It Was A Very Comfortable And Informative Experience Shopping At Lit Blinds. The Staff Were Very Friendly And Were Available Upon Entering The Store. I Would Recommend Anyone Looking For Window Coverings To Go To 'Lit Blinds'. Thank You.",
    position: "Teacher",
  },
  {
    id: 3,
    name: "Rabbil Hasan",
    avatar: "https://i.ibb.co.com/dkhMfM5/portrait-young-confident-businessman-wearing-glasses.jpg",
    date: "3 weeks ago",
    rating: 5,
	comment:
	"It Was A Very Comfortable And Informative Experience Shopping At Lit Blinds. The Staff Were Very Friendly And Were Available Upon Entering The Store. I Would Recommend Anyone Looking For Window Coverings To Go To 'Lit Blinds'. Thank You.",
    position: "Programmer",
  },
  {
    id: 4,
    name: "Arif Ahmed",
    avatar: "https://i.ibb.co.com/1KTqkxJ/young-adult-enjoying-virtual-date.jpg",
    date: "2 months ago",
    rating: 4,
	comment:
	"It Was A Very Comfortable And Informative Experience Shopping At Lit Blinds. The Staff Were Very Friendly And Were Available Upon Entering The Store. I Would Recommend Anyone Looking For Window Coverings To Go To 'Lit Blinds'. Thank You.",
    position: "Business Analyst",
  },
  {
    id: 5,
    name: "Shahinur Rahman",
    avatar: "https://i.ibb.co.com/8mrRb23/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg",
    date: "1 week ago",
    rating: 5,
	comment:
	"It Was A Very Comfortable And Informative Experience Shopping At Lit Blinds. The Staff Were Very Friendly And Were Available Upon Entering The Store. I Would Recommend Anyone Looking For Window Coverings To Go To 'Lit Blinds'. Thank You.",
    position: "Businessman",
  },
]

// ReviewCard component definition
function ReviewCard({ review }) {
  return (
    <div className="h-full bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 mr-3 rounded-full overflow-hidden border border-gray-200">
            <img src={review.avatar || "/placeholder.svg"} alt={review.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            {review.position && <p className="text-sm text-gray-500">{review.position}</p>}
          </div>
        </div>

        <div className="flex mb-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
              />
            ))}
        </div>

        <p className="text-gray-700 flex-grow mb-4">"{review.comment}"</p>

        <div className="text-sm text-gray-500 mt-auto">{review.date}</div>
      </div>
    </div>
  )
}

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayCount = { mobile: 1, tablet: 2, desktop: 3 }

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1))
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-6 px-4  bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with our
            products and services.
          </p>
        </div>

        <div className="relative">
          {/* Desktop and Tablet View */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...reviews.slice(currentIndex), ...reviews.slice(0, currentIndex)]
              .slice(0, displayCount.desktop)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>

          {/* Mobile View */}
          <div className="sm:hidden">
            <ReviewCard review={reviews[currentIndex]} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={prevReview}
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={nextReview}
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReview

