import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import CourseCard from "../../components/CoursesCard";

export default function HomePage() {
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  };

  const coursesContainerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "32px 24px",
  };

  const coursesGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
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

      {/* Courses Grid */}
      <div style={coursesContainerStyle}>
        <div style={coursesGridStyle}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
