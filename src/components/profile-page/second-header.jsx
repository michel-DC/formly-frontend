"use client";

import { Search, Coins, Menu } from "lucide-react";
import LogoFormly from "/assets/logo/formly.png";
import SearchBarIcon from "/assets/icons/IconSearchBar.svg";

export default function SecondHeader({ onFilterClick }) {
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
