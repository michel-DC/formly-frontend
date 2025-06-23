"use client";

import { ArrowLeft, MoreHorizontal } from "lucide-react";

export default function ProfileHeader() {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "8px",
  };

  const backButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const moreButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div style={headerStyle}>
      <button
        style={backButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#f9fafb";
          e.target.style.borderColor = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.borderColor = "#e5e7eb";
        }}
      >
        <ArrowLeft
          style={{ width: "20px", height: "20px", color: "#6b7280" }}
        />
      </button>
      <button
        style={moreButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#f9fafb";
          e.target.style.borderColor = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.borderColor = "#e5e7eb";
        }}
      >
        <MoreHorizontal
          style={{ width: "20px", height: "20px", color: "#6b7280" }}
        />
      </button>
    </div>
  );
}
