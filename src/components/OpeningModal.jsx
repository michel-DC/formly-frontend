"use client";

import {
  X,
  User,
  Dumbbell,
  ShoppingCart,
  Code,
  ChevronDown,
} from "lucide-react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: "24px",
    width: "500px",
    maxWidth: "95vw",
    maxHeight: "95vh",
    overflow: "hidden",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
    border: "1.5px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 28px 12px 28px",
    borderBottom: "none",
    fontWeight: 700,
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111827",
    margin: 0,
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    padding: "0 28px 0 28px",
    maxHeight: "calc(95vh - 180px)",
    overflowY: "auto",
    fontFamily: "inherit",
  };

  const sectionStyle = {
    marginBottom: "28px",
  };

  const sectionTitleStyle = {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "8px",
    marginTop: "24px",
  };

  const sectionSubtitleStyle = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "16px",
    marginTop: "-8px",
  };

  const categoriesRowStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "8px",
    alignItems: "center",
  };

  const categoryItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "none",
    border: "none",
    outline: "none",
    padding: 0,
    minWidth: "64px",
  };

  const categoryIconCircleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "6px",
    transition: "background 0.2s",
  };

  const categoryIconCircleActiveStyle = {
    ...categoryIconCircleStyle,
    background: "#f97316",
  };

  const categoryIconStyle = {
    width: "22px",
    height: "22px",
    color: "#6b7280",
    transition: "color 0.2s",
  };

  const categoryIconActiveStyle = {
    ...categoryIconStyle,
    color: "#fff",
  };

  const categoryTextStyle = {
    fontSize: "12px",
    color: "#6b7280",
    textAlign: "center",
    fontWeight: 400,
  };

  const categoryTextActiveStyle = {
    ...categoryTextStyle,
    color: "#f97316",
    fontWeight: 600,
  };

  const chevronStyle = {
    marginLeft: "8px",
    color: "#6b7280",
    background: "#f3f4f6",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const pillGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "8px",
  };

  const pillStyle = {
    padding: "8px 18px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "999px",
    background: "#fff",
    color: "#111827",
    fontSize: "14px",
    fontWeight: 400,
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const pillActiveStyle = {
    ...pillStyle,
    background: "#fff7ed",
    borderColor: "#f97316",
    color: "#f97316",
    fontWeight: 600,
  };

  const footerStyle = {
    padding: "24px 28px 20px 28px",
    background: "#fff",
    borderTop: "none",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const showButtonStyle = {
    width: "100%",
    padding: "14px 0",
    border: "none",
    borderRadius: "8px",
    background: "#374151",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "8px",
    marginTop: "8px",
    letterSpacing: "0.01em",
  };

  const eraseButtonStyle = {
    width: "100%",
    padding: "10px 0",
    border: "none",
    borderRadius: "8px",
    background: "#f3f4f6",
    color: "#6b7280",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    margin: 0,
  };

  const categories = [
    { icon: User, label: "Individual", active: true },
    { icon: Dumbbell, label: "Training", active: false },
    { icon: ShoppingCart, label: "E-commerce", active: false },
    { icon: Code, label: "Development", active: false },
  ];

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Filters</h2>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f3f4f6";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            <X style={{ width: "20px", height: "20px", color: "#6b7280" }} />
          </button>
        </div>

        {/* Content */}
        <div style={contentStyle}>
          {/* Categories */}
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Categories</div>
            <div style={sectionSubtitleStyle}>The training category</div>
            <div style={categoriesRowStyle}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  style={
                    category.active ? categoryItemStyle : categoryItemStyle
                  }
                >
                  <div
                    style={
                      category.active
                        ? categoryIconCircleActiveStyle
                        : categoryIconCircleStyle
                    }
                  >
                    <category.icon
                      style={
                        category.activesssssssssssssssssssssssss
                          ? categoryIconActiveStyle
                          : categoryIconStyle
                      }
                    />
                  </div>
                  <span
                    style={
                      category.active
                        ? categoryTextActiveStyle
                        : categoryTextStyle
                    }
                  >
                    {category.label}
                  </span>
                </button>
              ))}
              <div style={chevronStyle}>
                <ChevronDown style={{ width: "18px", height: "18px" }} />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Budget</div>
            <div style={sectionSubtitleStyle}>Price per training</div>
            <div style={pillGridStyle}>
              <button style={pillActiveStyle}>0 to 100 €</button>
              <button style={pillStyle}>100 to 250 €</button>
              <button style={pillStyle}>250 to 500 €</button>
              <button style={pillStyle}>500 to 1000 €</button>
              <button style={pillStyle}>1000 to 2000 €</button>
              <button style={pillStyle}>2000 and more</button>
            </div>
          </div>

          {/* Learning time */}
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Learning time</div>
            <div style={sectionSubtitleStyle}>
              Number of hours needed by training
            </div>
            <div style={pillGridStyle}>
              <button style={pillStyle}>0 to 4 hours</button>
              <button style={pillStyle}>5 to 10 hours</button>
              <button style={pillStyle}>10 to 18 hours</button>
              <button style={pillStyle}>20 to 40 hours</button>
              <button style={pillStyle}>40 to 80 hours</button>
              <button style={pillStyle}>80 hours and more</button>
            </div>
          </div>

          {/* Coaching */}
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Coaching</div>
            <div style={sectionSubtitleStyle}>Includes coaching</div>
            <div style={pillGridStyle}>
              <button style={pillStyle}>Oui</button>
              <button style={pillActiveStyle}>Non</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <button style={showButtonStyle}>
            Show 341&nbsp; training courses
          </button>
          <button style={eraseButtonStyle}>Erase</button>
        </div>
      </div>
    </div>
  );
}
