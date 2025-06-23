"use client";

import {
  Heart,
  LineChart,
  ShoppingCart,
  Code,
  ChevronRight,
} from "lucide-react";

export default function Navigation() {
  const navStyle = {
    background: "#fff",
    borderBottom: "1px solid #f1f1f4",
    padding: "32px 0 16px 0",
    width: "100%",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "56px",
  };

  const navItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#6b7280",
    fontSize: "13px",
    fontWeight: 400,
    gap: "8px",
    cursor: "pointer",
    minWidth: "80px",
    position: "relative",
  };

  const navItemActiveStyle = {
    ...navItemStyle,
    color: "#111827",
  };

  const iconCircleStyle = {
    background: "#f3f4f6",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4px",
  };

  const navItems = [
    { icon: Heart, label: "Seduction", active: false },
    { icon: LineChart, label: "Trading", active: false },
    { icon: ShoppingCart, label: "E-commerce", active: true },
    { icon: Code, label: "Development", active: false },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {navItems.map((item, idx) => (
          <div
            key={item.label}
            style={item.active ? navItemActiveStyle : navItemStyle}
          >
            <div
              style={item.active ? iconCircleStyle : { marginBottom: "4px" }}
            >
              <item.icon
                size={22}
                style={{ color: item.active ? "#6b7280" : "#6b7280" }}
              />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
        <div
          style={{ marginLeft: "32px", display: "flex", alignItems: "center" }}
        >
          <ChevronRight size={22} color="#6b7280" />
        </div>
      </div>
    </nav>
  );
}
