import React, { useState } from 'react';
import { X, ZoomIn, Calendar, Award, GraduationCap, Users, Heart, Activity, Shield, Trophy } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryCategories = [
    {
      id: 'childrens-day-2025',
      title: "Children's Day 2025",
      icon: Calendar,
      color: 'from-red-500 to-orange-500',
      images: [
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-7.59.11-AM-2-495x400.jpeg',
          alt: "Children's Day 2025 Celebration"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-7.59.14-AM-3-495x400.jpeg',
          alt: "Children's Day Activities"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-7.59.14-AM-495x400.jpeg',
          alt: "Children's Day Event"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-7.59.16-AM-1-1-495x400.jpeg',
          alt: "Children's Day Program"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-8.01.27-AM-495x400.jpeg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2025-05-22-at-8.01.34-AM-1-495x400.jpeg',
          alt: "Children's Day Fun"
        },
        {
          src: '/assets/Viju_gallery/480538583_948790244031206_3757108767301438657_n.jpg',
          alt: "Children's Day 2025 Special"
        }
      ]
    },
    {
      id: 'festive-support',
      title: 'End of Year Festive Support',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      images: [
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-12-09-at-4.29.21-PM-2-495x400.jpeg',
          alt: 'Festive Support Program'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103336-1-495x400.jpg',
          alt: 'Community Support Initiative'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103346-1-495x400.jpg',
          alt: 'End of Year Support'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103557-495x400.jpg',
          alt: 'Festive Season Giving'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103623-495x400.jpg',
          alt: 'Community Outreach'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103643-1-495x400.jpg',
          alt: 'Festive Support Event'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_103714-1-495x400.jpg',
          alt: 'Year End Giving'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_104024-495x400.jpg',
          alt: 'Community Support'
        },
        {
          src: '/assets/Viju_gallery/IMG_20231205_104422-495x400.jpg',
          alt: 'Festive Outreach'
        },
        {
          src: '/assets/Viju_gallery/480575687_952349447008619_7827350740320657393_n.png',
          alt: 'End of Year Support Program'
        }
      ]
    },
    {
      id: 'childrens-day',
      title: "Children's Day",
      icon: Users,
      color: 'from-orange-500 to-red-500',
      images: [
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0016-495x400.jpg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0053-495x400.jpg',
          alt: "Children's Day Activities"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0057-495x400.jpg',
          alt: "Children's Day Event"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0104-495x400.jpg',
          alt: "Children's Day Program"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0106-495x400.jpg',
          alt: "Children's Day Fun"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0142-495x400.jpg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230530-WA0168-495x400.jpg',
          alt: "Children's Day Special"
        },
        {
          src: '/assets/Viju_gallery/IMG-20230601-WA0006-495x400.jpg',
          alt: "Children's Day Event"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-09-at-11.01.08-AM-1-495x400.jpeg',
          alt: "Children's Day Program"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-09-at-11.01.21-AM-495x400.jpeg',
          alt: "Children's Day Activities"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-09-at-11.03.30-AM-3-495x400.jpeg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-09-at-11.03.30-AM-495x400.jpeg',
          alt: "Children's Day Fun"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-09-at-11.16.43-AM-495x400.jpeg',
          alt: "Children's Day Event"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-25-at-6.00.49-PM-4-1-495x400.jpeg',
          alt: "Children's Day Program"
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2022-05-25-at-6.00.49-PM-495x400.jpeg',
          alt: "Children's Day Special"
        },
        {
          src: '/assets/Viju_gallery/1-1-495x400.jpg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Viju_gallery/6-495x400.jpg',
          alt: "Children's Day Activities"
        },
        {
          src: '/assets/Viju_gallery/23-495x400.jpg',
          alt: "Children's Day Event"
        }
      ]
    },
    {
      id: 'educational-tour',
      title: 'Viju Educational Tour',
      icon: GraduationCap,
      color: 'from-red-600 to-orange-400',
      images: [
        {
          src: '/assets/Viju_gallery/BEF-school-495x400.jpg',
          alt: 'Educational Tour - BEF School'
        },
        {
          src: '/assets/Viju_gallery/BEF2-495x400.jpg',
          alt: 'Educational Tour - BEF School Visit'
        },
        {
          src: '/assets/Viju_gallery/Befun-private-school-495x400.jpeg',
          alt: 'Educational Tour - Befun Private School'
        },
        {
          src: '/assets/Viju_gallery/De-Gods-own-495x400.jpeg',
          alt: 'Educational Tour - De Gods Own School'
        },
        {
          src: '/assets/Viju_gallery/Genuis-school-495x400.jpg',
          alt: 'Educational Tour - Genius School'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-05-at-5.44.37-PM-495x400.jpeg',
          alt: 'Educational Tour Program'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-05-at-5.45.17-PM-495x400.jpeg',
          alt: 'Educational Tour Activities'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-05-at-5.45.26-PM-495x400.jpeg',
          alt: 'Educational Tour Visit'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-05-at-6.11.02-PM-495x400.jpeg',
          alt: 'Educational Tour Experience'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-06-at-7.58.34-AM-495x400.jpeg',
          alt: 'Educational Tour Learning'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-04-28-at-11.43.55-AM-495x400.jpeg',
          alt: 'Educational Tour Session'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230427_143442-495x400(1).jpg',
          alt: 'Educational Tour Event'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230427_143442-495x400.jpg',
          alt: 'Educational Tour Program'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230706_111949-495x400.jpg',
          alt: 'Educational Tour Activity'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-05-12-at-10.19.36-495x400.jpg',
          alt: 'Educational Tour Visit'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-05-27-at-11.41.45-495x400.jpg',
          alt: 'Educational Tour Experience'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-05-27-at-17.03.16-495x400.jpg',
          alt: 'Educational Tour Learning'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-07-16-at-6.44.36-PM-495x400.jpeg',
          alt: 'Educational Tour Session'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-07-16-at-6.44.43-PM-495x400.jpeg',
          alt: 'Educational Tour Program'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-09-18-at-09.21.27-495x400.jpg',
          alt: 'Educational Tour Activity'
        },
        {
          src: '/assets/Viju_gallery/WhatsApp-Image-2023-09-22-at-16.54.32-495x400.jpg',
          alt: 'Educational Tour Event'
        },
        {
          src: '/assets/Viju_gallery/IMG-20231120-WA0008-495x400.jpg',
          alt: 'Educational Tour Visit'
        },
        {
          src: '/assets/Viju_gallery/IMG_1526-495x400.jpeg',
          alt: 'Educational Tour Experience'
        },
        {
          src: '/assets/Viju_gallery/IMG_1590-495x400.jpg',
          alt: 'Educational Tour Learning'
        },
        {
          src: '/assets/Viju_gallery/IMG_1596-495x400.jpeg',
          alt: 'Educational Tour Session'
        },
        {
          src: '/assets/Viju_gallery/ls-project-3-slide-12-495x400.jpg',
          alt: 'Educational Tour Project'
        }
      ]
    },
    {
      id: 'awards',
      title: 'Awards',
      icon: Award,
      color: 'from-orange-600 to-red-400',
      images: [
        {
          src: '/assets/Viju_gallery/ABC-Award-cert-495x400.jpg',
          alt: 'ABC Award Certificate'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230831_133651-495x400.jpg',
          alt: 'Award Recognition'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230831_133744-495x400.jpg',
          alt: 'Award Ceremony'
        },
        {
          src: '/assets/Viju_gallery/IMG_20230831_142559-495x400.jpg',
          alt: 'Award Presentation'
        },
        {
          src: '/assets/Viju_gallery/IMG_2092-495x400.jpeg',
          alt: 'Award Achievement'
        },
        {
          src: '/assets/Viju_gallery/IMG_2166-495x400.jpeg',
          alt: 'Award Recognition'
        },
        {
          src: '/assets/Viju_gallery/N1-495x400.jpeg',
          alt: 'Award Certificate'
        },
        {
          src: '/assets/Viju_gallery/N2-495x400.jpeg',
          alt: 'Award Honor'
        },
        {
          src: '/assets/Viju_gallery/12-1-495x400.jpeg',
          alt: 'Award Excellence'
        },
        {
          src: '/assets/Viju_gallery/28-495x400.jpg',
          alt: 'Award Success'
        },
        {
          src: '/assets/Viju_gallery/viju_logo-removebg-preview-300x247.png',
          alt: 'Viju Excellence Award'
        }
      ]
    },
    {
      id: 'distributors-party',
      title: 'Distributors End of Year Party',
      icon: Users,
      color: 'from-red-400 to-orange-600',
      images: [
        {
          src: '/assets/Viju_gallery/distributors-end-of-the-year-party-495x400.jpeg',
          alt: 'Distributors End of Year Party'
        },
        {
          src: '/assets/Viju_gallery/distributors-end-of-the-year-party1-495x400.jpeg',
          alt: 'Distributors Party Celebration'
        },
        {
          src: '/assets/Viju_gallery/distributors-end-of-the-year-party2-495x400.jpeg',
          alt: 'Distributors Year End Event'
        }
      ]
    },
    {
      id: 'keep-fit',
      title: 'Keep Fit with Viju',
      icon: Activity,
      color: 'from-orange-400 to-red-600',
      images: [
        {
          src: '/assets/Viju_gallery/keeep-fit-with-Viju-495x400.jpg',
          alt: 'Keep Fit with Viju Program'
        },
        {
          src: '/assets/Viju_gallery/viju-keep-fit-495x400.jpeg',
          alt: 'Viju Keep Fit Initiative'
        }
      ]
    },
    {
      id: 'covid-support',
      title: 'Covid19 Support',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      images: [
        {
          src: '/assets/Viju_gallery/viju-covid19-support-picture-495x400.jpeg',
          alt: 'Viju Covid19 Support Initiative'
        },
        {
          src: '/assets/Viju_gallery/viju-covid19-support-picture1.jpeg',
          alt: 'Covid19 Community Support'
        }
      ]
    },
    {
      id: 'scholarship-finale',
      title: 'Viju School Scholarship Grand Finale',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
      images: [
        {
          src: '/assets/Viju_gallery/viju-school-scholarship-grand-finale-495x400.jpg',
          alt: 'Viju School Scholarship Grand Finale'
        },
        {
          src: '/assets/Viju_gallery/viju-school-scholarship-grand-finale1-495x400.jpg',
          alt: 'Scholarship Grand Finale Event'
        },
        {
          src: '/assets/Viju_gallery/viju-school-scholarship-grand-finale2-495x400.jpg',
          alt: 'Scholarship Awards Ceremony'
        }
      ]
    }
  ];

  const allImages = galleryCategories.flatMap(category => 
    category.images.map(image => ({ ...image, category: category.title, categoryId: category.id }))
  );

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(image => image.categoryId === selectedCategory);

  return (
    <div className="pt-16 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      {/* Ultra-Modern Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with brand gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-orange-50/60 to-red-100/70 dark:from-red-900/20 dark:via-orange-900/10 dark:to-red-800/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-100/50 via-transparent to-red-100/40 dark:from-orange-900/10 dark:via-transparent dark:to-red-900/10"></div>
        
        {/* Floating brand elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-200/30 to-orange-200/30 dark:from-red-400/20 dark:to-orange-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-red-200/20 dark:from-orange-400/15 dark:to-red-400/15 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/90 backdrop-blur-sm border border-orange-200/50 dark:bg-slate-800/90 dark:border-slate-700/50 text-orange-700 dark:text-orange-300 font-bold text-sm shadow-lg mb-10">
              <Award className="w-5 h-5 text-red-500" />
              <span>Our Journey Through Pictures</span>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-none">
              <span className="block">Gallery</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Discover our impactful journey through community initiatives, educational programs, and corporate achievements
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-y border-gray-200/20 dark:border-slate-700/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Explore by 
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"> Category</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Navigate through our organized collection of memorable moments and achievements
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-xl shadow-red-500/25'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600'
              }`}
            >
              <span>All Categories</span>
              <span className="ml-2 px-2 py-1 rounded-full bg-black/10 text-sm">
                {allImages.length}
              </span>
            </button>
            
            {galleryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                      : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden lg:inline">{category.title}</span>
                  <span className="lg:hidden text-sm font-medium">{category.title.split(' ')[0]}</span>
                  <span className="px-2 py-1 rounded-full bg-black/10 text-xs font-bold">
                    {category.images.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {selectedCategory === 'all' ? (
            /* All Categories - Organized by Section */
            <div className="space-y-24">
              {galleryCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="relative">
                    {/* Category Header */}
                    <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-lg">
                            {category.images.length} images
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Category Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {category.images.map((image, imageIndex) => (
                        <div
                          key={`${category.id}-${imageIndex}`}
                          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.log(`Failed to load image: ${image.src}`);
                                target.src = 'https://via.placeholder.com/400x400/f3f4f6/6b7280?text=Image+Not+Available';
                              }}
                              onLoad={() => {
                                console.log(`Successfully loaded: ${image.src}`);
                              }}
                            />
                          </div>
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="text-white font-bold text-lg mb-2 leading-tight">{image.alt}</h4>
                              <p className="text-orange-200 text-sm font-medium">{category.title}</p>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <ZoomIn className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <div className={`px-3 py-2 bg-gradient-to-r ${category.color} rounded-xl text-white text-xs font-bold shadow-lg`}>
                              <IconComponent className="w-3 h-3 inline mr-1" />
                              {category.title.split(' ')[0]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Section Divider */}
                    {categoryIndex < galleryCategories.length - 1 && (
                      <div className="mt-20 flex items-center justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-full max-w-md"></div>
                        <div className="mx-8 text-gray-400 dark:text-gray-600">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400"></div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-full max-w-md"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Single Category View */
            <div>
              {(() => {
                const category = galleryCategories.find(cat => cat.id === selectedCategory);
                if (!category) return null;
                
                const IconComponent = category.icon;
                return (
                  <div>
                    {/* Single Category Header */}
                    <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-6 mb-8">
                        <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center shadow-xl`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-left">
                          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                            {category.title}
                          </h2>
                          <p className="text-xl text-gray-600 dark:text-gray-400">
                            Explore {category.images.length} memorable moments
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Single Category Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {category.images.map((image, index) => (
                        <div
                          key={`${category.id}-${index}`}
                          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.log(`Failed to load image: ${image.src}`);
                                target.src = 'https://via.placeholder.com/400x400/f3f4f6/6b7280?text=Image+Not+Available';
                              }}
                              onLoad={() => {
                                console.log(`Successfully loaded: ${image.src}`);
                              }}
                            />
                          </div>
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="text-white font-bold text-lg mb-2 leading-tight">{image.alt}</h4>
                              <p className="text-orange-200 text-sm font-medium">{category.title}</p>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <ZoomIn className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>

                          {/* Image Number Badge */}
                          <div className="absolute top-4 left-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                              {index + 1}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* No Images State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-32">
              <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="text-6xl">📷</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
                No images found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-lg">
                Try selecting a different category to explore our gallery
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-16 right-0 w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-xl z-10 group"
            >
              <X className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
            </button>
            
            {/* Image Container */}
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="text-white">
                  <p className="text-sm font-medium text-orange-300 mb-2">Gallery Image</p>
                  <h3 className="text-2xl font-bold mb-2">High Quality View</h3>
                  <p className="text-gray-300">Click outside to close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;