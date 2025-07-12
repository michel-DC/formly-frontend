"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { handleLogin } from "./login-logic";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Passe à l'étape 2 après validation de l'email
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    setStep(2);
  };

  // Soumission finale avec mot de passe
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await handleLogin(email, password);
      // Redirection ou autre logique après succès
    } catch (err) {
      setError(err.message || "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FCFCFC] flex items-center justify-center relative overflow-hidden">
      <img
        src="/assets/icons/decorations/login-register/top-orange.svg"
        alt=""
        className="pointer-events-none select-none absolute top-4 -right-10 w-[180px] md:w-[260px] lg:w-[320px]"
        style={{ right: 0, top: 0 }}
      />
      <img
        src="/assets/icons/decorations/login-register/bottom-blue.svg"
        alt=""
        className="pointer-events-none select-none absolute left-0 bottom-0 w-[180px] md:w-[260px] lg:w-[320px] -translate-x-[20%]"
      />

      <div
        className="relative z-10 w-full max-w-2xl mx-auto bg-[#FFFFFF]/60 rounded-2xl shadow-xl px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 md:py-24 lg:py-36 flex flex-col items-center overflow-hidden"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)" }}
      >
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-6 top-6 flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
          aria-label="Retour à l'accueil"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Retour</span>
        </button>
        <img
          src="/assets/icons/decorations/login-register/inside-bottom-blue.svg"
          alt=""
          className="pointer-events-none select-none absolute left-0 bottom-0 w-30"
        />
        <img
          src="/assets/icons/decorations/login-register/inside-top-orange.svg"
          alt=""
          className="pointer-events-none select-none absolute right-0 top-0 w-30"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FF9900] mb-10 text-center">
          Se connecter
        </h1>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              onSubmit={handleEmailSubmit}
              className="w-full flex flex-col gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Adresse e-mail
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@exemple.com"
                    required
                    className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-[#FCFCFC] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base shadow-sm"
                    style={{ background: "#FCFCFC" }}
                  />
                </div>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-[#FFA600] hover:bg-[#FFB733] text-white font-semibold py-4 rounded-xl text-base transition-colors duration-200 shadow-none"
              >
                Continuer
              </button>
            </motion.form>
          )}
          {step === 2 && (
            <motion.form
              key="step2"
              onSubmit={handlePasswordSubmit}
              className="w-full flex flex-col gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M5 8a5 5 0 1110 0v2a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2V8zm2 0v2h6V8a3 3 0 00-6 0z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Votre mot de passe"
                    required
                    className="block w-full pl-12 pr-12 py-4 rounded-xl border-none bg-[#FCFCFC] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-base shadow-sm"
                    style={{ background: "#FCFCFC" }}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                    tabIndex={-1}
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword
                        ? "Masquer le mot de passe"
                        : "Afficher le mot de passe"
                    }
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFA600] hover:bg-[#FFB733] text-white font-semibold py-4 rounded-xl text-base transition-colors duration-200 shadow-none disabled:opacity-60"
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
              <button
                type="button"
                className="text-sm text-gray-500 underline mt-2"
                onClick={() => setStep(1)}
              >
                Retour
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        <div className="flex items-center w-full my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-4 text-gray-400 text-sm">ou continuer avec</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => {}}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-medium text-gray-700">
              Continuer avec Google
            </span>
          </button>
          <button
            onClick={() => {}}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="font-medium text-gray-700">
              Continuer avec Apple
            </span>
          </button>
        </div>
        <div className="w-full text-center mt-10">
          <span className="text-gray-500 text-sm">
            Vous n'avez pas de compte ?{" "}
          </span>
          <a
            href="/creer-un-compte"
            className="text-orange-500 font-medium hover:underline ml-1"
          >
            S'inscrire ici
          </a>
        </div>
      </div>
    </div>
  );
}
