"use client";

import {
  X,
  User,
  Dumbbell,
  ShoppingCart,
  Code,
  ChevronDown,
} from "lucide-react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = [
    { icon: User, label: "Individual", active: true },
    { icon: Dumbbell, label: "Training", active: false },
    { icon: ShoppingCart, label: "E-commerce", active: false },
    { icon: Code, label: "Development", active: false },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-[500px] max-w-[95vw] max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-7 pt-6 pb-3 border-b-0 font-bold">
          <h2 className="text-xl font-bold text-gray-900 m-0">Filters</h2>
          <button
            className="bg-transparent border-none cursor-pointer p-1 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="px-7 max-h-[calc(95vh-180px)] overflow-y-auto font-inherit">
          <div className="mb-7">
            <div className="text-sm font-semibold text-gray-900 mb-2 mt-6">
              Categories
            </div>
            <div className="text-sm text-gray-500 mb-4 -mt-2">
              The training category
            </div>
            <div className="flex gap-4 mb-2 items-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center cursor-pointer bg-transparent border-none outline-none p-0 min-w-16"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 transition-colors ${
                      category.active ? "bg-orange-500" : "bg-gray-100"
                    }`}
                  >
                    <category.icon
                      className={`w-[22px] h-[22px] transition-colors ${
                        category.active ? "text-white" : "text-gray-500"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-xs text-center font-normal ${
                      category.active
                        ? "text-orange-500 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {category.label}
                  </span>
                </button>
              ))}

              <div className="ml-2 text-gray-500 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <ChevronDown className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>

          <div className="mb-7">
            <div className="text-sm font-semibold text-gray-900 mb-2 mt-6">
              Budget
            </div>
            <div className="text-sm text-gray-500 mb-4 -mt-2">
              Price per training
            </div>
            <div className="flex flex-wrap gap-2.5 mb-2">
              <button className="px-4.5 py-2 border border-orange-500 rounded-full bg-orange-50 text-orange-500 text-sm font-semibold cursor-pointer transition-all">
                0 to 100 €
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                100 to 250 €
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                250 to 500 €
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                500 to 1000 €
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                1000 to 2000 €
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                2000 and more
              </button>
            </div>
          </div>

          <div className="mb-7">
            <div className="text-sm font-semibold text-gray-900 mb-2 mt-6">
              Learning time
            </div>
            <div className="text-sm text-gray-500 mb-4 -mt-2">
              Number of hours needed by training
            </div>
            <div className="flex flex-wrap gap-2.5 mb-2">
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                0 to 4 hours
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                5 to 10 hours
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                10 to 18 hours
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                20 to 40 hours
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                40 to 80 hours
              </button>
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                80 hours and more
              </button>
            </div>
          </div>

          <div className="mb-7">
            <div className="text-sm font-semibold text-gray-900 mb-2 mt-6">
              Coaching
            </div>
            <div className="text-sm text-gray-500 mb-4 -mt-2">
              Includes coaching
            </div>
            <div className="flex flex-wrap gap-2.5 mb-2">
              <button className="px-4.5 py-2 border border-gray-200 rounded-full bg-white text-gray-900 text-sm font-normal cursor-pointer transition-all hover:bg-gray-50">
                Oui
              </button>
              <button className="px-4.5 py-2 border border-orange-500 rounded-full bg-orange-50 text-orange-500 text-sm font-semibold cursor-pointer transition-all">
                Non
              </button>
            </div>
          </div>
        </div>

        <div className="px-7 pt-6 pb-5 bg-white border-t-0 flex flex-col gap-3">
          <button className="w-full py-3.5 border-none rounded-lg bg-gray-700 text-white text-base font-semibold cursor-pointer mb-2 mt-2 tracking-wide">
            Show 341&nbsp; training courses
          </button>

          <button className="w-full py-2.5 border-none rounded-lg bg-gray-100 text-gray-500 text-sm font-medium cursor-pointer m-0">
            Erase
          </button>
        </div>
      </div>
    </div>
  );
}
