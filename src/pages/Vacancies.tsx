import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Users,
  Calendar,
  Send,
  Briefcase,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Vacancy } from "../types";

const Vacancies: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);

  // Extended mock data for vacancies
  const extendedVacancies: Vacancy[] = [
    // ABUJA POSITIONS
    {
      id: 1,
      title: "Production Manager",
      department: "Production",
      location: "Abuja, Nigeria",
      type: "full-time",
      description:
        "We are looking for an experienced Production Manager to oversee our bottled water production operations at our Abuja facility. The ideal candidate will manage the entire production line and ensure quality standards are met.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
        "All candidates must clearly indicate the position(s) and location they are applying for",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 2,
      title: "Water Line Operator",
      department: "Production",
      location: "Abuja, Nigeria",
      type: "full-time",
      description:
        "We are seeking a Water Line Operator to manage and operate our water production line at our Abuja facility.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
        "All candidates must clearly indicate the position(s) and location they are applying for",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 3,
      title: "Dairy Line Manager",
      department: "Production",
      location: "Abuja, Nigeria",
      type: "full-time",
      description:
        "We are looking for a Dairy Line Manager to supervise our dairy production operations at our Abuja facility.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
        "All candidates must clearly indicate the position(s) and location they are applying for",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 4,
      title: "Injection Molding Technician",
      department: "Technical",
      location: "Abuja, Nigeria",
      type: "full-time",
      description:
        "We are seeking an Injection Molding Technician for our Abuja facility to operate and maintain injection molding equipment.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
        "All candidates must clearly indicate the position(s) and location they are applying for",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 5,
      title: "Maintenance Personnel",
      department: "Maintenance",
      location: "Abuja, Nigeria",
      type: "full-time",
      description:
        "We are looking for Maintenance Personnel to support our Abuja facility operations.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
        "All candidates must clearly indicate the position(s) and location they are applying for",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    // IGBESA POSITIONS
    {
      id: 6,
      title: "Maintenance Personnel",
      department: "Maintenance",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are looking for Maintenance Personnel to support our Igbesa facility operations with equipment maintenance and repair.",
      requirements: [
        "Familiar with injection molding processes for PE, PET, PP plastic bottles",
        "Hands-on and maintenance experience with large injection molding machines",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 7,
      title: "PET Water Line Production Manager",
      department: "Production",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are seeking a PET Water Line Production Manager to oversee our PET bottled water production operations at our Igbesa facility.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 8,
      title: "Welder",
      department: "Technical",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are looking for an experienced Welder to join our technical team at the Igbesa facility.",
      requirements: [
        "Familiar with injection molding processes for PE, PET, PP plastic bottles",
        "Hands-on and maintenance experience with large injection molding machines",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 9,
      title: "Injection Molding Technician",
      department: "Technical",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are seeking an Injection Molding Technician for our Igbesa facility to operate and maintain injection molding equipment for plastic bottle production.",
      requirements: [
        "Familiar with injection molding processes for PE, PET, PP plastic bottles",
        "Hands-on and maintenance experience with large injection molding machines",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 10,
      title: "Generator Technician",
      department: "Technical / Utilities",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are looking for an experienced Generator Technician to maintain and operate our power generation equipment at the Igbesa facility.",
      requirements: [
        "Over 5 years of maintenance and operational experience with natural gas or diesel generators rated above 800KW",
        "Familiar with bottled water production processes and workflows",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 11,
      title: "Financial Assistant (Female)",
      department: "Finance",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are seeking a Female Financial Assistant to support our finance department at the Igbesa facility.",
      requirements: [
        "Familiar with accounting and financial processes",
        "Able to work independently and manage financial documentation",
        "Organize work according to established standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 12,
      title: "Tetra Pack Line Operator",
      department: "Production",
      location: "Igbesa, Ogun State, Nigeria",
      type: "full-time",
      description:
        "We are looking for a Tetra Pack Line Operator to manage our Tetra Pack production line at the Igbesa facility.",
      requirements: [
        "Familiar with bottled water production processes and workflows",
        "Able to independently manage the entire bottled water production line",
        "Organize production according to established production and quality standards",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    // IKEJA POSITIONS
    {
      id: 13,
      title: "Labeling Machine Operator",
      department: "Production",
      location: "Ikeja, Lagos, Nigeria",
      type: "full-time",
      description:
        "We are seeking a Labeling Machine Operator for our Ikeja facility to operate and maintain labeling equipment.",
      requirements: [
        "Hands-on operation and maintenance experience with labeling machine",
        "Able to independently perform upkeep and repair",
        "Responsible, detail-oriented, with good teamwork and communication skills",
        "Able to adapt to the fast pace of production environments",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 14,
      title: "Blow-Fill-Seal Machine Operator",
      department: "Production",
      location: "Ikeja, Lagos, Nigeria",
      type: "full-time",
      description:
        "We are looking for a Blow-Fill-Seal Machine Operator to operate our BFS equipment at the Ikeja facility.",
      requirements: [
        "Over 3 years of hands-on operation and maintenance experience with fully automatic blow-fill-seal equipment (such as Krones, Sidel)",
        "Required knowledge in electrical systems",
        "Responsible, detail-oriented, with good teamwork and communication skills",
        "Able to adapt to the fast pace of production environments",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
    {
      id: 15,
      title: "Packaging Machine Operator",
      department: "Production",
      location: "Ikeja, Lagos, Nigeria",
      type: "full-time",
      description:
        "We are seeking a Packaging Machine Operator for our Ikeja facility to operate packaging equipment.",
      requirements: [
        "Hands-on operation and maintenance experience with packaging machines",
        "Able to independently perform upkeep and repair",
        "Responsible, detail-oriented, with good teamwork and communication skills",
        "Able to adapt to the fast pace of production environments",
      ],
      responsibilities: [],
      postedDate: "2026-03-09",
    },
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setVacancies(extendedVacancies);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Modern gradient background with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-red-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI0OCwgMTEzLCA1MSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Modern badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-orange-700 font-medium mb-8"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              We Are Hiring!
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Join Our
              </span>
              <br />
              <span className="text-gray-800">Growing Team</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Join Viju Industries (Nigeria) Limited and build your career with
              one of Nigeria's leading beverage and dairy companies
            </p>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <Briefcase className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <Building2 className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-gray-600">Locations</div>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">Nigeria</div>
                <div className="text-gray-600">Abuja, Igbesa, Ikeja</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {vacancies.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 border border-white/30 max-w-md mx-auto">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <p className="text-xl text-gray-600 font-medium">
                  No current vacancies available
                </p>
                <p className="text-gray-500 mt-2">
                  Please check back later for new opportunities
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Open{" "}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                    Positions
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover exciting career opportunities across our production
                  facilities in Nigeria
                </p>
              </motion.div>

              {vacancies.map((vacancy, index) => (
                <motion.div
                  key={vacancy.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  {/* Modern glass card with hover effects */}
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/30 group-hover:border-orange-200/50 overflow-hidden">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600"></div>

                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                      <div className="flex-1 space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                                {vacancy.title}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span
                                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                                    vacancy.type === "full-time"
                                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                      : "bg-blue-50 text-blue-700 border-blue-200"
                                  }`}
                                >
                                  {vacancy.type.replace("-", " ").toUpperCase()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-lg leading-relaxed">
                            {vacancy.description}
                          </p>
                        </div>

                        {/* Info grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 font-medium">
                                Department
                              </div>
                              <div className="text-gray-900 font-semibold">
                                {vacancy.department}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 font-medium">
                                Location
                              </div>
                              <div className="text-gray-900 font-semibold">
                                {vacancy.location}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 font-medium">
                                Posted
                              </div>
                              <div className="text-gray-900 font-semibold">
                                {new Date(
                                  vacancy.postedDate,
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-gray-900 flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center mr-3">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            Requirements
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {vacancy.requirements.map((req, idx) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50/50 hover:bg-white/80 transition-colors duration-200"
                              >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm leading-relaxed">
                                  {req}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        {vacancy.responsibilities &&
                          vacancy.responsibilities.length > 0 && (
                            <div className="space-y-4">
                              <h4 className="text-xl font-bold text-gray-900 flex items-center">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center mr-3">
                                  <Briefcase className="w-4 h-4 text-white" />
                                </div>
                                Key Responsibilities
                              </h4>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {vacancy.responsibilities.map((resp, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-3 p-3 rounded-xl bg-blue-50/30 hover:bg-blue-50/60 transition-colors duration-200"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm leading-relaxed">
                                      {resp}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                      </div>

                      {/* Apply button */}
                      <div className="xl:ml-8 flex-shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedVacancy(vacancy)}
                          className="w-full xl:w-auto bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:via-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl group-hover:shadow-orange-200/50"
                        >
                          Apply Now
                          <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>

                        <div className="mt-4 text-center xl:text-left">
                          <p className="text-sm text-gray-500">
                            Send your application to
                          </p>
                          <p className="text-orange-600 font-semibold text-sm">
                            jonathanogbone@vijufamily.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modern Application Modal */}
      {selectedVacancy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVacancy(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Apply for Position
              </h3>
              <p className="text-lg font-semibold text-orange-600">
                {selectedVacancy.title}
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-8 border border-orange-100">
              <p className="text-gray-700 mb-4 leading-relaxed">
                To apply for this position, please send your resume and cover
                letter to our careers team:
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400"></div>
                  <p className="font-bold text-gray-900">
                    jonathanogbone@vijufamily.com
                  </p>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-400"></div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Subject: Application for {selectedVacancy.title}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setSelectedVacancy(null)}
                className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-semibold text-gray-700"
              >
                Close
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.location.href = `mailto:jonathanogbone@vijufamily.com?subject=Application for ${selectedVacancy.title}`;
                  setSelectedVacancy(null);
                }}
                className="flex-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white px-6 py-3 rounded-2xl hover:from-red-600 hover:via-orange-600 hover:to-red-700 transition-all duration-300 font-bold flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Email
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Vacancies;
