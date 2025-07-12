"use client";

import { Heart, Star } from "lucide-react";

export default function CourseCard({
  category,
  title,
  description,
  price,
  rating,
  image,
  instructor,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-shadow duration-200 cursor-pointer hover:shadow-md">
      <div className="relative">
        <img
          src={image || "/placeholder.svg?height=192&width=300"}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
          {category}
        </div>

        <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Heart className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}

          <span className="text-xs text-gray-500 ml-1">{instructor}</span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>

        <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">${price}</span>

          <a
            href="#"
            className="text-xs text-orange-600 font-medium no-underline cursor-pointer hover:text-orange-700 transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
