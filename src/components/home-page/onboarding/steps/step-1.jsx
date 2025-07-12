"use client";

import ProgressIndicator from "../progress-indicator";
import { motion } from "framer-motion";

export default function Step1({ onNext, currentStep, totalSteps }) {
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
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
            Certifié Formly ✓
          </span>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-5xl">👨‍🏫</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Des experts validés par Formly
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base leading-relaxed mb-10 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Découvre des formations créées par des formateurs certifiés,
          sélectionnés pour leur pédagogie et leur expérience.
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
        👉 Découvrir
      </motion.button>
    </motion.div>
  );
}
