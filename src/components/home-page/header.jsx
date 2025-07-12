"use client";

import { Search, Coins, Menu } from "lucide-react";
import LogoFormly from "/assets/logo/formly.png";
import SearchBarIcon from "/assets/icons/IconSearchBar.svg";

export default function Header({ onFilterClick }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-12">
        <div
          className="flex items-center gap-2 flex-none cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={LogoFormly}
            alt="Formly Logo"
            className="w-[70px] h-[50px] bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer"
          />
        </div>

        <div className="flex-1 max-w-96 mx-6 flex justify-center items-center">
          <div className="flex items-center relative bg-gray-50 rounded-lg border border-gray-300 p-0 w-full h-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />

            <input
              type="text"
              placeholder="Search for trainings"
              className="w-full pl-10 pr-10 py-2 border-none rounded-lg outline-none text-sm bg-transparent flex-1 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              onFocus={(e) => {
                e.target.style.borderColor = "#f97316";
                e.target.style.boxShadow = "0 0 0 2px rgba(249, 115, 22, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
                e.target.style.boxShadow = "none";
              }}
            />

            <img
              src={SearchBarIcon}
              alt="search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-orange-600 transition-colors"
              onClick={onFilterClick}
              onMouseEnter={(e) => {
                e.target.style.color = "#ea580c";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#f97316";
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-6 flex-none">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 min-w-0 min-h-0 justify-center">
            <Coins className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-900">200</span>
          </div>

          <span className="text-sm text-gray-500">My training</span>

          <Menu className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
