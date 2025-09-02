import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Calendar, Award, GraduationCap, Users, Heart, Activity, Shield, Trophy, Music, Gift } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = 'Gallery - Viju Industries (Nigeria) Limited';
    return () => {
      document.title = 'Viju Industries (Nigeria) Limited - Premium Beverages & Dairy Products';
    };
  }, []);

  const galleryCategories = [
    {
      id: 'benevolence-talent-show',
      title: 'Benevolence Talent Show by NOKT Record',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      images: [
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3378.jpg',
          alt: 'Benevolence Talent Show Performance'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3388.jpg',
          alt: 'Talent Show Event'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3389.jpg',
          alt: 'NOKT Record Talent Show'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3391.jpg',
          alt: 'Talent Competition'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3632.jpg',
          alt: 'Talent Show Performance'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3728.jpg',
          alt: 'Musical Performance'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3730.jpg',
          alt: 'Talent Show Stage'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3740.jpg',
          alt: 'Performance Moment'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3887.jpg',
          alt: 'Show Participants'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3890.jpg',
          alt: 'Talent Competition Event'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3894.jpg',
          alt: 'Musical Talent Show'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_3923.jpg',
          alt: 'Performance Excellence'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4068.jpg',
          alt: 'Benevolence Event'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4188.jpg',
          alt: 'Talent Showcase'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4249.jpg',
          alt: 'Show Highlight'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4284.jpg',
          alt: 'Performance Art'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4286.jpg',
          alt: 'Talent Display'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4394.jpg',
          alt: 'Show Excellence'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4399.jpg',
          alt: 'Musical Moment'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4411.jpg',
          alt: 'Talent Competition Final'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4548.jpg',
          alt: 'Event Celebration'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4551.jpg',
          alt: 'Performance Victory'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4554.jpg',
          alt: 'Show Conclusion'
        },
        {
          src: '/assets/Gallery/Benevolence Talent Show by NOKT Record/DSC_4561.jpg',
          alt: 'Talent Show Finale'
        }
      ]
    },
    {
      id: 'childrens-day-2025',
      title: "Children's Day 2025",
      icon: Users,
      color: 'from-orange-500 to-red-500',
      images: [
        {
          src: '/assets/Gallery/childrens day 2025/ls-project-3-slide-12-495x400.jpg',
          alt: "Children's Day 2025 Celebration"
        },
        {
          src: '/assets/Gallery/childrens day 2025/WhatsApp-Image-2025-05-22-at-7.59.14-AM-3-495x400.jpeg',
          alt: "Children's Day Activities"
        },
        {
          src: '/assets/Gallery/childrens day 2025/WhatsApp-Image-2025-05-22-at-7.59.14-AM-495x400.jpeg',
          alt: "Children's Day Event"
        },
        {
          src: '/assets/Gallery/childrens day 2025/WhatsApp-Image-2025-05-22-at-7.59.16-AM-1-1-495x400.jpeg',
          alt: "Children's Day Program"
        },
        {
          src: '/assets/Gallery/childrens day 2025/WhatsApp-Image-2025-05-22-at-8.01.27-AM-495x400.jpeg',
          alt: "Children's Day Celebration"
        },
        {
          src: '/assets/Gallery/childrens day 2025/WhatsApp-Image-2025-05-22-at-8.01.34-AM-1-495x400.jpeg',
          alt: "Children's Day Fun"
        }
      ]
    },
    {
      id: 'covid-support',
      title: 'Covid19 Support',
      icon: Shield,
      color: 'from-green-500 to-blue-500',
      images: [
        
        
        {
          src: '/assets/Gallery/covid/WhatsApp Image 2020-05-06 at 10.50.20 AM.jpeg',
          alt: 'Covid Relief Efforts'
        },
        
        {
          src: '/assets/Gallery/covid/WhatsApp Image 2020-05-06 at 10.51.16 AM.jpeg',
          alt: 'Covid19 Community Aid'
        },
        {
          src: '/assets/Gallery/covid/WhatsApp Image 2020-05-06 at 10.51.53 AM.jpeg',
          alt: 'Health Support Program'
        },
       
        {
          src: '/assets/Gallery/Covid19 Support/viju-covid19-support-picture1.jpeg',
          alt: 'Covid19 Community Support'
        }
      ]
    },
    {
      id: 'distributors-party',
      title: 'Distributors End of the Year Party',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      images: [
        {
          src: '/assets/Gallery/Distributors End of the year Party/distributors-end-of-the-year-party-495x400.jpeg',
          alt: 'Distributors End of Year Party'
        },
        {
          src: '/assets/Gallery/Distributors End of the year Party/distributors-end-of-the-year-party1-495x400.jpeg',
          alt: 'Year End Celebration'
        },
        {
          src: '/assets/Gallery/Distributors End of the year Party/distributors-end-of-the-year-party2-495x400.jpeg',
          alt: 'Distributors Gathering'
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
          src: '/assets/Gallery/End of year Festive Support/12-1-495x400.jpeg',
          alt: 'Festive Support Program'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103336-1-495x400.jpg',
          alt: 'Community Support Initiative'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103346-1-495x400.jpg',
          alt: 'End of Year Support'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103557-495x400.jpg',
          alt: 'Festive Season Giving'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103623-495x400.jpg',
          alt: 'Community Outreach'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103643-1-495x400.jpg',
          alt: 'Festive Support Event'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_103714-1-495x400.jpg',
          alt: 'Festive Support Event'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_104024-495x400.jpg',
          alt: 'Festive Support Event'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/IMG_20231205_104422-495x400.jpg',
          alt: 'Festive Support Event'
        },
        {
          src: '/assets/Gallery/End of year Festive Support/WhatsApp-Image-2023-12-09-at-4.29.21-PM-2-495x400.jpeg',
          alt: 'Festive Support Event'
        },
      ]
    },
    {
      id: 'childrens-day',
      title: "Children's Day",
      icon: Users,
      color: 'from-orange-500 to-red-500',
      images: [
        {
          src: '/assets/Gallery/Childrens Day/1-1-495x400.jpg',
          alt: "Children's Day Celebration"
        },
        
        
      ]
    },
    {
      id: 'keep-fit',
      title: 'Keep Fit with Viju',
      icon: Activity,
      color: 'from-green-500 to-teal-500',
      images: [
        {
          src: '/assets/Gallery/Keep Fit with Viju/keeep-fit-with-Viju-495x400.jpg',
          alt: 'Keep Fit with Viju Program'
        },
        {
          src: '/assets/Gallery/Keep Fit with Viju/viju-keep-fit-495x400.jpeg',
          alt: 'Fitness Initiative'
        }
      ]
    },
    {
      id: 'scholarship-finale',
      title: 'Viju School Scholarship Grand Finale',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      images: [
        {
          src: '/assets/Gallery/Viju School Scholarship Grand Finale/viju-school-scholarship-grand-finale-495x400.jpg',
          alt: 'Scholarship Grand Finale Event'
        },
        {
          src: '/assets/Gallery/Viju School Scholarship Grand Finale/viju-school-scholarship-grand-finale1-495x400.jpg',
          alt: 'Scholarship Award Ceremony'
        },
        {
          src: '/assets/Gallery/Viju School Scholarship Grand Finale/viju-school-scholarship-grand-finale2-495x400.jpg',
          alt: 'Scholarship Recipients'
        }
      ]
    },
    {
      id: 'lagos-giveaway',
      title: 'Lagos Products Giveaway',
      icon: Gift,
      color: 'from-yellow-500 to-orange-500',
      images: [
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100701.jpg',
          alt: 'Lagos Products Giveaway'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100715.jpg',
          alt: 'Product Distribution Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100718.jpg',
          alt: 'Community Giveaway Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100756.jpg',
          alt: 'Lagos Products Distribution'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100806.jpg',
          alt: 'Community Support Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100812.jpg',
          alt: 'Lagos Giveaway Event'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100818.jpg',
          alt: 'Product Distribution Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100824.jpg',
          alt: 'Community Support Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100843.jpg',
          alt: 'Lagos Giveaway Program'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100856.jpg',
          alt: 'Products for Community'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100900.jpg',
          alt: 'Lagos Community Outreach'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100939.jpg',
          alt: 'Giveaway Distribution'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100943.jpg',
          alt: 'Community Engagement Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_100947.jpg',
          alt: 'Product Support Program'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101021.jpg',
          alt: 'Lagos Outreach Initiative'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101113.jpg',
          alt: 'Community Products Distribution'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101119.jpg',
          alt: 'Lagos Support Program'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101124.jpg',
          alt: 'Giveaway Event Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101630.jpg',
          alt: 'Product Distribution Activity'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101642.jpg',
          alt: 'Community Support Initiative'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101648.jpg',
          alt: 'Lagos Community Program'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101703.jpg',
          alt: 'Product Giveaway Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101725.jpg',
          alt: 'Community Outreach Lagos'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101728.jpg',
          alt: 'Lagos Distribution Event'
        },
        {
          src: '/assets/Gallery/Lagos Products giveaway/20250521_101735.jpg',
          alt: 'Product Support Lagos'
        }
      ]
    },
    {
      id: 'ogun-giveaway',
      title: 'Ogun Products Giveaway',
      icon: Gift,
      color: 'from-green-500 to-yellow-500',
      images: [
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_105503.jpg',
          alt: 'Ogun Products Giveaway'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_105512.jpg',
          alt: 'Product Distribution Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_105522.jpg',
          alt: 'Community Giveaway Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110158.jpg',
          alt: 'Ogun Products Distribution'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110214.jpg',
          alt: 'Community Support Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110218.jpg',
          alt: 'Ogun Giveaway Event'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110237.jpg',
          alt: 'Ogun Community Support'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110254.jpg',
          alt: 'Product Distribution Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110259.jpg',
          alt: 'Ogun Outreach Program'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110310.jpg',
          alt: 'Community Giveaway Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110314.jpg',
          alt: 'Ogun Support Initiative'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110322.jpg',
          alt: 'Product Support Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110337.jpg',
          alt: 'Ogun Community Program'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_110340.jpg',
          alt: 'Giveaway Distribution Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114639.jpg',
          alt: 'Ogun Products Event'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114643.jpg',
          alt: 'Community Engagement Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114653.jpg',
          alt: 'Ogun Distribution Activity'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114658.jpg',
          alt: 'Product Giveaway Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114700.jpg',
          alt: 'Ogun Community Outreach'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_114707.jpg',
          alt: 'Support Program Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_115225.jpg',
          alt: 'Ogun Giveaway Initiative'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_115231.jpg',
          alt: 'Community Support Ogun'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/20250522_115240.jpg',
          alt: 'Ogun Products Distribution'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.00 PM.jpeg',
          alt: 'Ogun Giveaway WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.01 PM (1).jpeg',
          alt: 'Ogun Community WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.01 PM (2).jpeg',
          alt: 'Ogun Products WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.01 PM (3).jpeg',
          alt: 'Ogun Support WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.01 PM (4).jpeg',
          alt: 'Ogun Distribution WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.01 PM.jpeg',
          alt: 'Ogun Giveaway WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.02 PM (1).jpeg',
          alt: 'Ogun Community Events WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.02 PM (2).jpeg',
          alt: 'Ogun Outreach WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.02 PM (3).jpeg',
          alt: 'Ogun Program WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.02 PM (4).jpeg',
          alt: 'Ogun Initiative WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.02 PM.jpeg',
          alt: 'Ogun Activities WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.03 PM (1).jpeg',
          alt: 'Ogun Support Activities WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.03 PM (2).jpeg',
          alt: 'Ogun Community Programs WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.03 PM (3).jpeg',
          alt: 'Ogun Distribution Programs WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.03 PM.jpeg',
          alt: 'Ogun Engagement WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.04 PM (1).jpeg',
          alt: 'Ogun Final Event WhatsApp'
        },
        {
          src: '/assets/Gallery/Ogun Products giveaway/WhatsApp Image 2025-05-22 at 12.19.04 PM.jpeg',
          alt: 'Ogun Completion WhatsApp'
        }
      ]
    },
    {
      id: 'educational-tour',
      title: 'Viju Educational Tour',
      icon: GraduationCap,
      color: 'from-blue-500 to-green-500',
      images: [
        {
          src: '/assets/Gallery/Viju Educational Tour/23-495x400.jpg',
          alt: 'Educational Tour'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/28-495x400.jpg',
          alt: 'School Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/BEF-school-495x400.jpg',
          alt: 'BEF School Tour'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/BEF2-495x400.jpg',
          alt: 'Educational Program'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/Befun-private-school-495x400.jpeg',
          alt: 'Befun Private School Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/De-Gods-own-495x400.jpeg',
          alt: 'De Gods Own School'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/Genuis-school-495x400.jpg',
          alt: 'Genius School Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_1526-495x400.jpeg',
          alt: 'Educational Tour Activity'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_1590-495x400.jpg',
          alt: 'School Program'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_1596-495x400.jpeg',
          alt: 'Educational Initiative'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230427_143442-495x400.jpg',
          alt: 'Educational Tour 2023'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230427_143442-495x400(1).jpg',
          alt: 'School Engagement'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230706_111949-495x400.jpg',
          alt: 'July Educational Tour'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230831_133651-495x400.jpg',
          alt: 'August School Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230831_133744-495x400.jpg',
          alt: 'Educational Outreach'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_20230831_142559-495x400.jpg',
          alt: 'School Tour Program'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_2092-495x400.jpeg',
          alt: 'Educational Support'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/IMG_2166-495x400.jpeg',
          alt: 'School Partnership'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/N1-495x400.jpeg',
          alt: 'Educational Tour N1'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/N2-495x400.jpeg',
          alt: 'Educational Tour N2'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-05-at-5.44.37-PM-495x400.jpeg',
          alt: 'April School Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-05-at-5.45.17-PM-495x400.jpeg',
          alt: 'Educational Engagement'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-05-at-5.45.26-PM-495x400.jpeg',
          alt: 'School Educational Program'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-05-at-6.11.02-PM-495x400.jpeg',
          alt: 'Educational Tour Evening'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-06-at-7.58.34-AM-495x400.jpeg',
          alt: 'Morning Educational Visit'
        },
        {
          src: '/assets/Gallery/Viju Educational Tour/WhatsApp-Image-2023-04-28-at-11.43.55-AM-495x400.jpeg',
          alt: 'Educational Tour April'
        }
      ]
    },
    {
      id: 'awards',
      title: 'Awards',
      icon: Award,
      color: 'from-yellow-500 to-red-500',
      images: [
        {
          src: '/assets/Gallery/awards/ABC-Award-cert-495x400.jpg',
          alt: 'ABC Award Certificate'
        },
        {
          src: '/assets/Gallery/awards/IMG-20231120-WA0008-495x400.jpg',
          alt: 'Company Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2022-05-09-at-11.01.08-AM-1-495x400.jpeg',
          alt: 'Recognition Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2022-05-09-at-11.01.21-AM-495x400.jpeg',
          alt: 'Excellence Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2022-05-09-at-11.03.30-AM-3-495x400.jpeg',
          alt: 'Industry Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2022-05-09-at-11.03.30-AM-495x400.jpeg',
          alt: 'Achievement Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2022-05-09-at-11.16.43-AM-495x400.jpeg',
          alt: 'Industry Recognition Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2023-07-16-at-6.44.36-PM-495x400.jpeg',
          alt: 'Business Excellence Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2023-07-16-at-6.44.43-PM-495x400.jpeg',
          alt: 'Corporate Achievement Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2023-09-18-at-09.21.27-495x400.jpg',
          alt: 'Performance Award'
        },
        {
          src: '/assets/Gallery/awards/WhatsApp-Image-2023-09-22-at-16.54.32-495x400.jpg',
          alt: 'Outstanding Service Award'
        }
      ]
    }
  ];

  const allImages = galleryCategories.flatMap(category => 
    category.images.map(image => ({ ...image, category: category.title }))
  );

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : galleryCategories.find(cat => cat.id === selectedCategory)?.images.map(image => ({ ...image, category: galleryCategories.find(cat => cat.id === selectedCategory)?.title || '' })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/5 to-red-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-gray-900 dark:text-white">Our</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-light leading-relaxed">
              Explore our journey through memorable moments, achievements, and community impact initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-700 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              All Categories
            </button>
            {galleryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-orange-300 text-sm font-medium mb-2">{image.category}</p>
                    <h3 className="text-white font-bold text-lg mb-3">{image.alt}</h3>
                    <button
                      onClick={() => setSelectedImage(image.src)}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No images found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different category or check back later for new content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-10 group"
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
