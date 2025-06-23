"use client";

import { Search, Coins, Menu } from "lucide-react";
import LogoFormly from "../assets/formly.png";
import SearchBarIcon from "../assets/IconSearchBar.svg";

export default function SecondHeader({ onFilterClick }) {
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
    height: "48px",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: "0 0 auto", // Ajouté
  };

  const logoIconStyle = {
    width: "70px",
    height: "50px",
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
    margin: "0 24px", // Changé de "0 auto"
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Ajouté
  };

  const searchWrapperStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    background: "#f6f7fb",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    padding: "0", // Changé de "0 8px 0 0"
    width: "100%", // Ajouté
    height: "40px", // Ajouté
  };

  const searchIconStyle = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9ca3af",
    width: "16px",
    height: "16px",
    zIndex: 2,
  };

  const searchInputStyle = {
    width: "100%",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "none",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
    background: "transparent",
    flex: 1,
  };

  const searchIconRightStyle = {
    position: "absolute", // Ajouté
    right: "12px", // Ajouté
    top: "50%", // Ajouté
    transform: "translateY(-50%)", // Ajouté
    width: "20px",
    height: "20px",
    color: "#6b7280",
    cursor: "pointer",
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flex: "0 0 auto", // Ajouté
  };

  const coinsBubbleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#efefef",
    borderRadius: "999px",
    padding: "4px 16px 4px 12px",
    minWidth: "0",
    minHeight: "0",
    justifyContent: "center",
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
        </div>

        {/* Right Section */}

        <div style={rightSectionStyle}>
          <div style={coinsBubbleStyle}>
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
