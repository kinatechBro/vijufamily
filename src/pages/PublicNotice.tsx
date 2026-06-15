import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Building2, CreditCard } from "lucide-react";

const PublicNotice: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-orange-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-xl mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Public Notice
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-orange-500" />
          </div>

          {/* Body */}
          <div className="mt-10 rounded-2xl bg-white dark:bg-slate-800/60 shadow-xl border border-slate-200/60 dark:border-slate-700/60 p-7 md:p-10 space-y-7">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              This is to formally inform all customers, prospective customers, and the general
              public that the sale of Viju products within the company premises is strictly
              prohibited under any circumstances.
            </p>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                The company conducts sales exclusively through its duly registered distributors.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                All payments must be made directly into the company&apos;s official bank accounts.
                Under no condition should payments be made into any personal or staff accounts. The
                company will not be held liable for any loss arising from payments made to
                unauthorized accounts.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-slate-200/70 dark:border-slate-700/70">
              <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">By order of</p>
                <p className="font-semibold text-slate-900 dark:text-white">Management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicNotice;
