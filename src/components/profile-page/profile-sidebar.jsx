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
    <div className="w-70 bg-white border-r border-gray-200 h-[calc(100vh-90px)] py-6 fixed left-0 top-[90px] overflow-y-auto">
      <div className="mb-8">
        <h3 className="text-base font-semibold text-gray-900 px-6 mb-4">
          Settings
        </h3>
        {settingsItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-6 py-3 text-gray-500 text-sm cursor-pointer transition-all duration-200 ${
              item.active
                ? "bg-orange-50 text-orange-500 border-r-3 border-orange-500"
                : "hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-base font-semibold text-gray-900 px-6 mb-4">
          Help
        </h3>
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 text-gray-500 text-sm cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:text-gray-700"
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
