"use client";

import ProgressIndicator from "../progress-indicator";
import { motion } from "framer-motion";

export default function Step2({ onNext, currentStep, totalSteps }) {
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
          className="mb-8 flex justify-center space-x-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.div
            className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">🎥</span>
          </motion.div>
          <motion.div
            className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">🎯</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full">
            En direct 🔴
          </span>
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Apprends avec les meilleurs, en direct
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base leading-relaxed mb-10 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Participe à des lives dans les communautés et réserve des coachings
          1:1 avec ton formateur préféré.
        </motion.p>
      </div>

      <motion.button
        onClick={onNext}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-base cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        👉 Super !
      </motion.button>
    </motion.div>
  );
}
