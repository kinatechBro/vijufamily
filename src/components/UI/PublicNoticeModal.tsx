import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ShieldCheck,
  Building2,
  CreditCard,
  X,
} from "lucide-react";

const PublicNoticeModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Show on every page load/refresh, shortly after the app mounts.
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  // Lock background scroll while open + allow Esc to close.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClose = () => {
    // Closes for this view only; it returns on the next page refresh.
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="public-notice-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10"
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
          >
            {/* Gradient header */}
            <div className="relative bg-gradient-to-br from-red-600 to-orange-500 px-7 py-7 text-center text-white">
              <button
                onClick={handleClose}
                aria-label="Close notice"
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <X className="h-5 w-5" />
              </button>
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260 }}
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur"
              >
                <AlertTriangle className="h-7 w-7" />
              </motion.div>
              <h2
                id="public-notice-title"
                className="text-2xl font-bold tracking-tight"
              >
                Public Notice
              </h2>
            </div>

            {/* Body */}
            <div className="space-y-5 px-7 py-7">
              <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                This is to formally inform all customers, prospective customers, and the general
                public that the sale of Viju products within the company premises is strictly
                prohibited under any circumstances.
              </p>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/30">
                  <Building2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                  The company conducts sales exclusively through its duly registered distributors.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/30">
                  <CreditCard className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                  All payments must be made directly into the company&apos;s official bank accounts.
                  Under no condition should payments be made into any personal or staff accounts. The
                  company will not be held liable for any loss arising from payments made to
                  unauthorized accounts.
                </p>
              </div>

              <div className="flex items-center gap-2.5 border-t border-slate-200/80 pt-4 dark:border-slate-700/80">
                <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">By order of</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Management</p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicNoticeModal;
