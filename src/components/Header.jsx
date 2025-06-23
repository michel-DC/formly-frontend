"use client";

import { Search, Coins, Menu } from "lucide-react";
import LogoFormly from "../assets/LogoFormly.svg";

export default function Header() {
  const headerStyle = {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    padding: "16px 24px",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1280px",
    margin: "0 auto",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const logoIconStyle = {
    width: "32px",
    height: "32px",
    backgroundColor: "#f97316",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoTextStyle = {
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const brandTextStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
  };

  const searchContainerStyle = {
    flex: "1",
    maxWidth: "384px",
    margin: "0 32px",
  };

  const searchWrapperStyle = {
    position: "relative",
  };

  const searchIconStyle = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
    width: "16px",
    height: "16px",
  };

  const searchInputStyle = {
    width: "100%",
    paddingLeft: "40px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const coinsContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const coinsTextStyle = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#111827",
  };

  const myTrainingStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const menuStyle = {
    width: "20px",
    height: "20px",
    color: "#6b7280",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <img src={LogoFormly} alt="Formly Logo" style={logoIconStyle} />
          <span style={brandTextStyle}>Formly</span>
        </div>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <div style={searchWrapperStyle}>
            <Search style={searchIconStyle} />
            <input
              type="text"
              placeholder="Search for trainings"
              style={searchInputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = "#f97316";
                e.target.style.boxShadow = "0 0 0 2px rgba(249, 115, 22, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div style={rightSectionStyle}>
          <div style={coinsContainerStyle}>
            <Coins
              style={{ width: "16px", height: "16px", color: "#f97316" }}
            />
            <span style={coinsTextStyle}>200</span>
          </div>
          <span style={myTrainingStyle}>My training</span>
          <Menu style={menuStyle} />
        </div>
      </div>
    </header>
  );
}
