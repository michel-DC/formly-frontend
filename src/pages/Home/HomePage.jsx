import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import CourseCard from "../../components/CoursesCard";
import { Home, MessageSquare, Dumbbell, User } from "lucide-react";
import React from "react";

export default function HomePage() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let gridColumns = "1fr";
  if (windowWidth >= 1024) gridColumns = "repeat(3, 1fr)";
  else if (windowWidth >= 640) gridColumns = "repeat(2, 1fr)";

  const pageStyle = {
    minHeight: "100vh",
    background: "#f6f7fb",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
  };

  const coursesContainerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 12px 0 12px",
  };

  const coursesGridStyle = {
    display: "grid",
    gridTemplateColumns: gridColumns,
    gap: "32px",
  };

  const bottomNavStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "64px",
    zIndex: 100,
    boxShadow: "0 -2px 8px 0 rgba(0,0,0,0.04)",
  };

  const navItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#6b7280",
    fontSize: "12px",
    fontWeight: 500,
    gap: "2px",
    cursor: "pointer",
    flex: 1,
    padding: "6px 0",
    transition: "color 0.2s",
  };

  const navItemActiveStyle = {
    ...navItemStyle,
    color: "#f97316",
  };

  const courses = [
    {
      category: "Yoga & Meditation",
      title: "Yoga for Beginners",
      description:
        "Start your yoga journey with expert guidance and foundational poses",
      price: "109",
      rating: 4,
      image: "src/assets/images/yoga.jpeg",
      instructor: "Sarah Chen",
    },
    {
      category: "Health & Fitness",
      title: "Advanced Pilates & Nutrition Masterclass",
      description:
        "Comprehensive training program covering modern fitness techniques",
      price: "209",
      rating: 5,
      image: "src/assets/images/yoga.jpeg",
      instructor: "Alex Johnson",
    },
    {
      category: "Strength Training",
      title: "Strength Training Fundamentals",
      description:
        "Master the basics of strength training with proper form and technique",
      price: "249",
      rating: 4,
      image: "src/assets/images/yoga.jpeg",
      instructor: "Mike Thompson",
    },
    {
      category: "Yoga & Meditation",
      title: "Advanced Yoga Flow",
      description:
        "Take your practice to the next level with challenging sequences",
      price: "159",
      rating: 5,
      image: "src/assets/images/yoga.jpeg",
      instructor: "Lisa Park",
    },
    {
      category: "Health & Fitness",
      title: "HIIT & Cardio Bootcamp",
      description: "High-intensity interval training for maximum results",
      price: "189",
      rating: 4,
      image: "src/assets/images/yoga.jpeg",
      instructor: "David Kim",
    },
    {
      category: "Strength Training",
      title: "Powerlifting Essentials",
      description:
        "Learn the fundamentals of powerlifting with expert coaching",
      price: "299",
      rating: 5,
      image: "src/assets/images/yoga.jpeg",
      instructor: "Emma Wilson",
    },
  ];

  return (
    <div style={pageStyle}>
      <Header />
      <Navigation />
      <Hero />
      <div style={coursesContainerStyle}>
        <div style={coursesGridStyle}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <div style={bottomNavStyle}>
        <div style={navItemActiveStyle}>
          <Home size={20} />
          Reflection
        </div>
        <div style={navItemStyle}>
          <MessageSquare size={20} />
          Message
        </div>
        <div style={navItemStyle}>
          <Dumbbell size={20} />
          Training
        </div>
        <div style={navItemStyle}>
          <User size={20} />
          Profile
        </div>
      </div>
    </div>
  );
}
