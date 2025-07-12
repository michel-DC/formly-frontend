"use client";

import Header from "../../components/home-page/header";
import Navigation from "../../components/home-page/navigation";
import Hero from "../../components/home-page/hero";
import CourseCard from "../../components/home-page/courses-card";
import { Home, MessageSquare, Dumbbell, User } from "lucide-react";
import React from "react";
import { useState } from "react";
import Modal from "../../components/home-page/opening-modal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let gridColumns = "grid-cols-1";
  if (windowWidth >= 1024) gridColumns = "grid-cols-3";
  else if (windowWidth >= 640) gridColumns = "grid-cols-2";

  const courses = [
    {
      category: "Yoga & Meditation",
      title: "Yoga for Beginners",
      description:
        "Start your yoga journey with expert guidance and foundational poses",
      price: "109",
      rating: 4,
      image: "/assets/images/yoga.jpeg",
      instructor: "Sarah Chen",
    },
    {
      category: "Health & Fitness",
      title: "Advanced Pilates & Nutrition Masterclass",
      description:
        "Comprehensive training program covering modern fitness techniques",
      price: "209",
      rating: 5,
      image: "/assets/images/yoga.jpeg",
      instructor: "Alex Johnson",
    },
    {
      category: "Strength Training",
      title: "Strength Training Fundamentals",
      description:
        "Master the basics of strength training with proper form and technique",
      price: "249",
      rating: 4,
      image: "/assets/images/yoga.jpeg",
      instructor: "Mike Thompson",
    },
    {
      category: "Yoga & Meditation",
      title: "Advanced Yoga Flow",
      description:
        "Take your practice to the next level with challenging sequences",
      price: "159",
      rating: 5,
      image: "/assets/images/yoga.jpeg",
      instructor: "Lisa Park",
    },
    {
      category: "Health & Fitness",
      title: "HIIT & Cardio Bootcamp",
      description: "High-intensity interval training for maximum results",
      price: "189",
      rating: 4,
      image: "/assets/images/yoga.jpeg",
      instructor: "David Kim",
    },
    {
      category: "Strength Training",
      title: "Powerlifting Essentials",
      description:
        "Learn the fundamentals of powerlifting with expert coaching",
      price: "299",
      rating: 5,
      image: "/assets/images/yoga.jpeg",
      instructor: "Emma Wilson",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      <Header onFilterClick={() => setIsModalOpen(true)} />
      <Navigation />
      <Hero />

      <div className="max-w-7xl mx-auto px-3 pt-10">
        <div className={`grid ${gridColumns} gap-8`}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-100 shadow-lg">
        <div className="flex flex-col items-center text-orange-500 text-xs font-medium gap-0.5 cursor-pointer flex-1 py-1.5 transition-colors">
          <Home size={20} />
          Reflection
        </div>

        <div className="flex flex-col items-center text-gray-500 text-xs font-medium gap-0.5 cursor-pointer flex-1 py-1.5 transition-colors">
          <MessageSquare size={20} />
          Message
        </div>
        <div className="flex flex-col items-center text-gray-500 text-xs font-medium gap-0.5 cursor-pointer flex-1 py-1.5 transition-colors">
          <Dumbbell size={20} />
          Training
        </div>
        <div className="flex flex-col items-center text-gray-500 text-xs font-medium gap-0.5 cursor-pointer flex-1 py-1.5 transition-colors">
          <User size={20} />
          Profile
        </div>
      </div>
    </div>
  );
}
