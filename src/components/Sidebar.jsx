"use client";

import {
  User,
  Lock,
  Mail,
  CreditCard,
  FileText,
  Gift,
  MessageCircle,
} from "lucide-react";

export default function Sidebar() {
  const sidebarStyle = {
    width: "280px",
    backgroundColor: "white",
    borderRight: "1px solid #e5e7eb",
    height: "calc(100vh - 90px)",
    padding: "24px 0",
    position: "fixed",
    left: 0,
    top: "90px",
    overflowY: "auto",
  };

  const sectionStyle = {
    marginBottom: "32px",
  };

  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    padding: "0 24px",
    marginBottom: "16px",
  };

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 24px",
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: "#fff7ed",
    color: "#f97316",
    borderRight: "3px solid #f97316",
  };

  const iconStyle = {
    width: "18px",
    height: "18px",
  };

  const settingsItems = [
    { icon: User, label: "Profile", active: true },
    { icon: Lock, label: "Password", active: false },
    { icon: Mail, label: "E-mail address", active: false },
    { icon: CreditCard, label: "Payment methods", active: false },
    { icon: FileText, label: "Payment history", active: false },
    { icon: Gift, label: "Sponsorship", active: false },
  ];

  const helpItems = [
    { icon: MessageCircle, label: "Contact us", active: false },
  ];

  return (
    <div style={sidebarStyle}>
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Settings</h3>
        {settingsItems.map((item, index) => (
          <div
            key={index}
            style={item.active ? activeMenuItemStyle : menuItemStyle}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.color = "#374151";
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#6b7280";
              }
            }}
          >
            <item.icon style={iconStyle} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Help</h3>
        {helpItems.map((item, index) => (
          <div
            key={index}
            style={menuItemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
              e.currentTarget.style.color = "#374151";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#6b7280";
            }}
          >
            <item.icon style={iconStyle} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
