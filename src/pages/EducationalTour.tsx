import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const EducationalTour: React.FC = () => {
  const guidelines = [
    "All visitors must wear appropriate closed-toe footwear (slippers, sandals, or open-toe shoes are not permitted).",
    "Children under the age of 7 are not permitted to enter the factory premises.",
    "The use of cameras, mobile phones for photography, or any video recording devices is strictly prohibited in the production line areas. (Limited use is permitted in designated non-production areas, such as the playground, subject to staff approval.)",
    "All visitors must wear identifying attire, such as school uniforms, company-branded clothing, or provided visitor badges.",
    "Maintain cleanliness at all times—do not litter and actively help preserve a clean environment.",
  ];

  const responsibilities = [
    "As the organizing school or group, you are fully responsible for arranging and providing safe transportation to and from the factory.",
    "All participants must comply with safety regulations and follow instructions given by factory staff at all times.",
    "Participants should be in good health; individuals with contagious illnesses or any medical conditions that may pose risks to themselves or others are not permitted to attend.",
    "Viju Industries (Nigeria) Limited and its employees shall not be held liable for any injuries, damages, losses, or incidents arising from negligence, non-compliance with rules, or failure to follow safety instructions during the visit.",
    "For effective supervision and an optimal educational experience, we strongly recommend assigning one responsible teacher or tutor for every 10 students, irrespective of the total group size.",
    "Environmental best practices must be observed throughout the visit, including proper waste disposal and respectful use of resources.",
    "If your group wishes to organize a picnic or similar activity, please notify the company in advance to allow for proper arrangements.",
    "The consumption or introduction of other brand products (such as water, carbonated drinks, or milk-based beverages) is not permitted on the premises.",
  ];

  const socialMedia = [
    {
      name: "Facebook",
      handle: "@vijufamily",
      icon: Facebook,
      url: "https://facebook.com/vijufamily",
    },
    {
      name: "Instagram",
      handle: "@vijufamily",
      icon: Instagram,
      url: "https://instagram.com/vijufamily",
    },
    {
      name: "X (Twitter)",
      handle: "@VijuFamily",
      icon: Twitter,
      url: "https://twitter.com/VijuFamily",
    },
    {
      name: "TikTok",
      handle: "@vijufamily",
      icon: Globe,
      url: "https://tiktok.com/@vijufamily",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
            Public Notice
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Factory Visit Guidelines
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Viju Educational Tour
          </h2>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Factory Location
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our factory is located in{" "}
                  <strong>
                    Igbesa Town, Ado-Odo/Ota Local Government Area, Ogun State
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-6 md:p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Visit Schedule</h3>
                <p className="text-white/90">
                  We are pleased to welcome approved schools and organizations
                  for an educational factory visit as part of your
                  extracurricular activities. The factory will be open for your
                  scheduled visit on the{" "}
                  <strong>[agreed date(s) in the month(s)] 2026</strong>, from{" "}
                  <strong>8:00 a.m. to 2:00 p.m.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Important Guidelines for the Visit
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              To ensure the safety, security, hygiene, and smooth operation for
              all participants, please strictly adhere to the following rules:
            </p>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {guideline}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Additional Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Additional Responsibilities and Important Notices
            </h3>
            <ul className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Social Media Engagement:
            </h3>
            <p className="text-slate-300 mb-6">
              We kindly invite you to tag and follow our official social media
              platforms to share your experience:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {socialMedia.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <platform.icon className="w-8 h-8 mb-2 text-orange-400" />
                  <span className="font-semibold text-sm">{platform.name}</span>
                  <span className="text-xs text-slate-400">
                    {platform.handle}
                  </span>
                </a>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm text-slate-300">
                Please use the hashtags{" "}
                <span className="text-orange-400 font-semibold">
                  #vijufamily
                </span>{" "}
                and{" "}
                <span className="text-orange-400 font-semibold">
                  #vijueducationaltour
                </span>{" "}
                when posting photos or updates (subject to photography
                restrictions in production areas).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 md:p-8 border border-orange-200 dark:border-orange-800">
            <p className="text-lg text-slate-700 dark:text-slate-300 text-center italic">
              Thank you for your full cooperation and understanding. We are
              genuinely excited to host your group and offer an informative,
              engaging educational experience at our facility.
            </p>
            <p className="text-xl font-semibold text-orange-600 dark:text-orange-400 text-center mt-4">
              We look forward to welcoming you!
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              For Visit Requests or Inquiries
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Please submit your official letter to:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:raphaelosiomwan@vijufamily.com"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    raphaelosiomwan@vijufamily.com
                  </a>
                  <br />
                  <a
                    href="mailto:info@vijufamily.com"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    info@vijufamily.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/2348136654358"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    08136654358
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl md:col-span-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Website
                  </p>
                  <a
                    href="https://vijufamily.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    https://vijufamily.com/
                  </a>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Raphael Osiomwan
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Media Manager/Head of CSR
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Viju Industries (Nigeria) Limited
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationalTour;
