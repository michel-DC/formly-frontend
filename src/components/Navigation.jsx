"use client";

import { User, Dumbbell, ShoppingCart, Code } from "lucide-react";

export default function Navigation() {
  const navStyle = {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const navListStyle = {
    display: "flex",
    gap: "32px",
  };

  const getNavItemStyle = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 0",
    borderBottom: active ? "2px solid #f97316" : "2px solid transparent",
    color: active ? "#ea580c" : "#6b7280",
    cursor: "pointer",
    transition: "color 0.2s ease",
  });

  const navTextStyle = {
    fontSize: "14px",
    fontWeight: "500",
  };

  const iconStyle = {
    width: "16px",
    height: "16px",
  };

  const navItems = [
    { icon: User, label: "Individual", active: true },
    { icon: Dumbbell, label: "Training", active: false },
    { icon: ShoppingCart, label: "E-commerce", active: false },
    { icon: Code, label: "Development", active: false },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navListStyle}>
          {navItems.map((item, index) => (
            <div
              key={index}
              style={getNavItemStyle(item.active)}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.target.style.color = "#111827";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.target.style.color = "#6b7280";
                }
              }}
            >
              <item.icon style={iconStyle} />
              <span style={navTextStyle}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
