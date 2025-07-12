"use client";

import ProgressIndicator from "../progress-indicator";
import { motion } from "framer-motion";

export default function Step4({ onNext, currentStep, totalSteps }) {
  // Gestionnaire pour terminer l'onboarding et marquer comme vu
  const handleFinishOnboarding = () => {
    localStorage.setItem("hasSeenTheOnboardingHomePage", "true");
    onNext();
  };

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
          className="mb-8 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl">🪙</div>
            </motion.div>
            <motion.div
              className="absolute -top-1 -right-1 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            >
              <span className="text-white text-sm font-bold">+</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
            -20% sur les cours
          </span>
        </motion.div>

        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Ton implication est récompensée
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base leading-relaxed mb-10 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Chaque action te rapporte des FormlyCoins. Utilise-les pour avoir des
          réductions sur les cours des formateurs certifiés.
        </motion.p>
      </div>

      <motion.button
        onClick={handleFinishOnboarding}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-base cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        👉 C'est parti !
      </motion.button>
    </motion.div>
  );
}
