"use client";

import { Users, UserPlus, Activity, Star, Award, Trophy } from "lucide-react";

const iconMap = {
  Activity,
  Star,
  Award,
  Trophy,
};

export default function StatsGrid() {
  const pastelColors = [
    { bg: "#e0edfd", color: "#3b82f6" },
    { bg: "#fef7e0", color: "#f59e0b" },
    { bg: "#fef3e0", color: "#f97316" },
    { bg: "#f3e8ff", color: "#8b5cf6" },
  ];

  return (
    <>
      <div className="flex justify-center items-center mb-8 border border-gray-200 rounded-xl bg-white h-20">
        <div className="flex-1 text-center text-xl font-semibold text-gray-900 flex flex-col justify-center items-center h-full">
          105
          <span className="text-sm text-gray-500 font-normal">
            Subscriptions
          </span>
          <span className="text-xs text-gray-400 font-normal mt-1">
            Online 8 hours ago
          </span>
        </div>

        <div className="w-px h-3/5 bg-gray-200"></div>

        <div className="flex-1 text-center text-xl font-semibold text-gray-900 flex flex-col justify-center items-center h-full">
          45
          <span className="text-sm text-gray-500 font-normal">Subscribers</span>
          <span className="text-xs text-gray-400 font-normal mt-1">
            Created on May 30, 2023
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-10">
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
              className="flex items-center bg-white rounded-xl p-0 pl-5 border-none shadow-none h-16"
              style={{ background: pastelColors[i].bg }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mr-4"
                style={{ background: pastelColors[i].bg }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: pastelColors[i].color }}
                />
              </div>

              <div>
                <div className="text-xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mb-0">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
