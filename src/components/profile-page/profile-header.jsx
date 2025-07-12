"use client";

import { ArrowLeft, MoreHorizontal } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex items-center justify-start mb-2">
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-300">
        <ArrowLeft className="w-5 h-5 text-gray-500" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-300">
        <MoreHorizontal className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}
