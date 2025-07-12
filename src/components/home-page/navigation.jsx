"use client";

import {
  Heart,
  LineChart,
  ShoppingCart,
  Code,
  ChevronRight,
} from "lucide-react";

export default function Navigation() {
  const navItems = [
    { icon: Heart, label: "Seduction", active: false },
    { icon: LineChart, label: "Trading", active: false },
    { icon: ShoppingCart, label: "E-commerce", active: true },
    { icon: Code, label: "Development", active: false },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 py-8 pb-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-14">
        {navItems.map((item, idx) => (
          <div
            key={item.label}
            className={`flex flex-col items-center text-gray-500 text-sm font-normal gap-2 cursor-pointer min-w-20 relative ${
              item.active ? "text-gray-900" : ""
            }`}
          >
            <div
              className={
                item.active
                  ? "bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mb-1"
                  : "mb-1"
              }
            >
              <item.icon size={22} className="text-gray-500" />
            </div>
            <span>{item.label}</span>
          </div>
        ))}

        <div className="ml-8 flex items-center">
          <ChevronRight size={22} className="text-gray-500" />
        </div>
      </div>
    </nav>
  );
}
