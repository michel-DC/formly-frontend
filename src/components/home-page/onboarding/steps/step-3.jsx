"use client";

import ProgressIndicator from "../progress-indicator";
import { motion } from "framer-motion";

export default function Step3({ onNext, currentStep, totalSteps }) {
  const leaderboard = [
    { name: "Thomas D.", points: "1234 pts", position: 1, avatar: "⚡" },
    { name: "Toi", points: "980 pts", position: 2, avatar: "⚡" },
    { name: "Marie L.", points: "846 pts", position: 3, avatar: "🔥" },
  ];

  return (
    <motion.div
      className="p-6 sm:p-8 min-h-[550px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <div className="text-center flex-1 flex flex-col justify-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {leaderboard.map((user, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between py-3 px-6 mb-3 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
            >
              <div className="flex items-center space-x-4">
                <span className="text-xl">{user.avatar}</span>
                <span className="font-medium text-gray-800 text-base">
                  {user.name}
                </span>
              </div>
              <span className="text-orange-500 font-semibold text-base">
                {user.points}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Forme-toi... et grimpe au classement
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base leading-relaxed mb-10 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          Un système de compétition entre apprenants te motive à progresser.
          Termine tes cours, gagne des points, sois le N°1 !
        </motion.p>
      </div>

      <motion.button
        onClick={onNext}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-base cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        👉 Je veux gagner !
      </motion.button>
    </motion.div>
  );
}
