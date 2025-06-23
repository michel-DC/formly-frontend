"use client";

import { Users, UserPlus, Activity, Star, Award, Trophy } from "lucide-react";

const iconMap = {
  Activity,
  Star,
  Award,
  Trophy,
};

export default function StatsGrid() {
  const topRowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "32px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "white",
    height: "80px",
  };
  const topItemStyle = {
    flex: 1,
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 600,
    color: "#111827",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };
  const dividerStyle = {
    width: "1px",
    height: "60%",
    background: "#e5e7eb",
  };
  const metaStyle = {
    fontSize: "12px",
    color: "#9ca3af",
    fontWeight: 400,
    marginTop: 4,
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "40px",
  };
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "0 0 0 20px",
    border: "none",
    boxShadow: "none",
    height: "64px",
  };
  const iconContainerStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px",
  };
  const numberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111827",
  };
  const labelStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "0",
  };
  const pastelColors = [
    { bg: "#e0edfd", color: "#3b82f6" },
    { bg: "#fef7e0", color: "#f59e0b" },
    { bg: "#fef3e0", color: "#f97316" },
    { bg: "#f3e8ff", color: "#8b5cf6" },
  ];
  return (
    <>
      <div style={topRowStyle}>
        <div style={topItemStyle}>
          105
          <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 400 }}>
            Subscriptions
          </span>
          <span style={metaStyle}>Online 8 hours ago</span>
        </div>
        <div style={dividerStyle}></div>
        <div style={topItemStyle}>
          45
          <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 400 }}>
            Subscribers
          </span>
          <span style={metaStyle}>Created on May 30, 2023</span>
        </div>
      </div>
      <div style={gridStyle}>
        {[
          { number: "45", label: "Activity day", icon: "Activity" },
          { number: "575", label: "XP earned", icon: "Star" },
          { number: "850", label: "Formly Coins", icon: "Award" },
          { number: "2", label: "Times in the top 3", icon: "Trophy" },
        ].map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={i}
              style={{ ...cardStyle, background: pastelColors[i].bg }}
            >
              <div
                style={{
                  ...iconContainerStyle,
                  background: pastelColors[i].bg,
                }}
              >
                <Icon
                  style={{
                    width: 20,
                    height: 20,
                    color: pastelColors[i].color,
                  }}
                />
              </div>
              <div>
                <div style={numberStyle}>{stat.number}</div>
                <div style={labelStyle}>{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
