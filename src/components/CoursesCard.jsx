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
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    transition: "box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const imageContainerStyle = {
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "192px",
    objectFit: "cover",
  };

  const categoryTagStyle = {
    position: "absolute",
    top: "12px",
    left: "12px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "12px",
    padding: "4px 12px",
    borderRadius: "9999px",
  };

  const heartContainerStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    width: "32px",
    height: "32px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  };

  const contentStyle = {
    padding: "16px",
  };

  const ratingContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "8px",
  };

  const instructorStyle = {
    fontSize: "12px",
    color: "#6b7280",
    marginLeft: "4px",
  };

  const titleStyle = {
    fontWeight: "600",
    color: "#111827",
    marginBottom: "8px",
    fontSize: "14px",
  };

  const descriptionStyle = {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "12px",
    lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const priceStyle = {
    fontWeight: "bold",
    color: "#111827",
  };

  const learnMoreStyle = {
    fontSize: "12px",
    color: "#ea580c",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
  };

  const getStarStyle = (filled) => ({
    width: "12px",
    height: "12px",
    color: filled ? "#fbbf24" : "#d1d5db",
    fill: filled ? "#fbbf24" : "none",
  });

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Image Container */}
      <div style={imageContainerStyle}>
        <img
          src={image || "/placeholder.svg?height=192&width=300"}
          alt={title}
          style={imageStyle}
        />
        <div style={categoryTagStyle}>{category}</div>
        <div style={heartContainerStyle}>
          <Heart style={{ width: "16px", height: "16px", color: "#9ca3af" }} />
        </div>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {/* Rating */}
        <div style={ratingContainerStyle}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} style={getStarStyle(i < rating)} />
          ))}
          <span style={instructorStyle}>{instructor}</span>
        </div>

        {/* Title */}
        <h3 style={titleStyle}>{title}</h3>

        {/* Description */}
        <p style={descriptionStyle}>{description}</p>

        {/* Price and Learn More */}
        <div style={footerStyle}>
          <span style={priceStyle}>${price}</span>
          <a
            href="#"
            style={learnMoreStyle}
            onMouseEnter={(e) => {
              e.target.style.color = "#c2410c";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#ea580c";
            }}
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
