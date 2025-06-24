"use client";

import { Search, Coins, Menu } from "lucide-react";
import LogoFormly from "/assets/formly.png";
import SearchBarIcon from "/assets/IconSearchBar.svg";

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
    flex: "0 0 auto",
  };

  const logoIconStyle = {
    width: "70px",
    height: "50px",
    backgroundColor: "#f97316",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flex: "0 0 auto",
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
        <div
          style={logoContainerStyle}
          onClick={() => (window.location.href = "/")}
        >
          <img src={LogoFormly} alt="Formly Logo" style={logoIconStyle} />
        </div>

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
