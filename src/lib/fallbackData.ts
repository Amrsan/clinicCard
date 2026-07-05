export interface FallbackCategory {
  id: number;
  name: string;
  name_ar: string;
  name_en?: string;
}

export interface FallbackLocation {
  id: number | string;
  address_line: string;
  city?: string;
}

export interface FallbackOpeningHour {
  id: number;
  location_id: number | string;
  day_of_week: number;
  from_time: string;
  to_time: string;
}

export interface FallbackProvider {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  photo_url: string;
  package: string;
  price: string;
  status: string;
  avg_rating: number;
  categories?: FallbackCategory;
  provider_locations?: FallbackLocation[];
  provider_locations_opening_hours?: FallbackOpeningHour[];
}

export const fallbackProviders: FallbackProvider[] = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    name_ar: "د. سارة أحمد",
    description: "Expert in cardiovascular health and preventive cardiology with over 15 years of experience.",
    description_ar: "خبير في صحة القلب والأوعية الدموية والرعاية الوقائية للقلب مع أكثر من 15 عامًا من الخبرة.",
    photo_url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
    package: "gold",
    price: "كشف: ٣٠٠ ج.م",
    status: "open",
    avg_rating: 4.8,
    categories: {
      id: 1,
      name: "Cardiology",
      name_ar: "القلب والأوعية الدموية",
      name_en: "Cardiology"
    },
    provider_locations: [
      {
        id: 101,
        address_line: "٢٥ حموده محمود المنطقه الثامنه امام شركه انبى مدينه نصر",
        city: "القاهرة"
      }
    ],
    provider_locations_opening_hours: [
      {
        id: 201,
        location_id: 101,
        day_of_week: 1,
        from_time: "09:00",
        to_time: "17:00"
      }
    ]
  },
  {
    id: 2,
    name: "Medical City Clinic",
    name_ar: "عيادة المدينة الطبية",
    description: "Comprehensive healthcare services for infants, children, and adolescents in a friendly environment.",
    description_ar: "خدمات رعاية صحية شاملة للرضع والأطفال والمراهقين في بيئة ودية.",
    photo_url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500",
    package: "silver",
    price: "كشف: ٢٠٠ ج.م",
    status: "open",
    avg_rating: 4.5,
    categories: {
      id: 2,
      name: "Pediatrics",
      name_ar: "طب الأطفال",
      name_en: "Pediatrics"
    },
    provider_locations: [
      {
        id: 102,
        address_line: "فيلا ايمن شاكر, 7، مزارع استيلا دي ماري فيلا 699، الجيزه",
        city: "الجيزة"
      }
    ],
    provider_locations_opening_hours: [
      {
        id: 202,
        location_id: 102,
        day_of_week: 2,
        from_time: "10:00",
        to_time: "18:00"
      }
    ]
  },
  {
    id: 3,
    name: "Dr. Mohamed Ali",
    name_ar: "د. محمد علي",
    description: "Specialist in complex neurological disorders and advanced brain health treatments.",
    description_ar: "متخصص في الاضطرابات العصبية المعقدة وعلاجات صحة الدماغ المتقدمة.",
    photo_url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
    package: "platinum",
    price: "كشف: ٤٠٠ ج.م",
    status: "open",
    avg_rating: 4.9,
    categories: {
      id: 3,
      name: "Neurology",
      name_ar: "المخ والأعصاب",
      name_en: "Neurology"
    },
    provider_locations: [
      {
        id: 103,
        address_line: "ميدان الجيزة برج النصر أعلى بنك مصر ٩ شارع التحرير",
        city: "الجيزة"
      }
    ],
    provider_locations_opening_hours: [
      {
        id: 203,
        location_id: 103,
        day_of_week: 3,
        from_time: "11:00",
        to_time: "19:00"
      }
    ]
  },
  {
    id: 4,
    name: "Orthopedic Elite",
    name_ar: "نخبة العظام",
    description: "Leading center for sports medicine and joint replacement with state-of-the-art facilities.",
    description_ar: "مركز رائد في الطب الرياضي واستبدال المفاصل بأحدث المرافق.",
    photo_url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500",
    package: "platinum",
    price: "كشف: ٤٥٠ ج.م",
    status: "closed",
    avg_rating: 4.7,
    categories: {
      id: 4,
      name: "Orthopedics",
      name_ar: "جراحة العظام",
      name_en: "Orthopedics"
    },
    provider_locations: [
      {
        id: 104,
        address_line: "١٨٠ شارع النزهة ميدان سانت فاتيما الدور الاول مصر الجديدة",
        city: "القاهرة"
      }
    ],
    provider_locations_opening_hours: [
      {
        id: 204,
        location_id: 104,
        day_of_week: 4,
        from_time: "12:00",
        to_time: "20:00"
      }
    ]
  },
  {
    id: 5,
    name: "Dr. Eman Hassan",
    name_ar: "د. إيمان حسن",
    description: "Specialist in clinical and cosmetic dermatology, focusing on skin health and rejuvenation.",
    description_ar: "أخصائي في الأمراض الجلدية السريرية والتجميلية، مع التركيز على صحة الجلد وتجديد شبابه.",
    photo_url: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
    package: "silver",
    price: "كشف: ٢٥٠ ج.م",
    status: "open",
    avg_rating: 4.6,
    categories: {
      id: 5,
      name: "Dermatology",
      name_ar: "الجلدية",
      name_en: "Dermatology"
    },
    provider_locations: [
      {
        id: 105,
        address_line: "٣٤ أ برج التجاريين شارع الحجاز ميدان المحكمة",
        city: "القاهرة"
      }
    ],
    provider_locations_opening_hours: [
      {
        id: 205,
        location_id: 105,
        day_of_week: 5,
        from_time: "13:00",
        to_time: "21:00"
      }
    ]
  }
];

export const getCategoryStyle = (categoryName: string) => {
  const name = categoryName?.toLowerCase() || "";
  if (name.includes("قلب") || name.includes("cardio")) {
    return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900/50";
  }
  if (name.includes("أطفال") || name.includes("pediat")) {
    return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50";
  }
  if (name.includes("مخ") || name.includes("أعصاب") || name.includes("neuro")) {
    return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/50";
  }
  if (name.includes("عظام") || name.includes("ortho")) {
    return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/50";
  }
  if (name.includes("جلد") || name.includes("derm")) {
    return "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-400 dark:border-pink-900/50";
  }
  return "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/30 dark:text-teal-400 dark:border-teal-900/50";
};

export interface PackageBadgeConfig {
  label: string;
  className: string;
  iconName: "crown" | "shield" | "star" | "default";
}

export const getPackageBadgeConfig = (pkgName: string): PackageBadgeConfig => {
  const name = pkgName?.toLowerCase() || "";
  if (name.includes("gold") || name === "ذهبي") {
    return {
      label: "باقة ذهبية",
      className: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white border-amber-400/50 shadow-sm shadow-amber-500/10",
      iconName: "crown"
    };
  }
  if (name.includes("silver") || name === "فضي") {
    return {
      label: "باقة فضية",
      className: "bg-gradient-to-r from-slate-300 via-gray-100 to-slate-400 text-slate-800 border-slate-200 shadow-sm",
      iconName: "star"
    };
  }
  if (name.includes("platinum") || name === "بلاتيني") {
    return {
      label: "باقة بلاتينية",
      className: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-slate-100 border-slate-700/80 shadow-md shadow-slate-950/20",
      iconName: "shield"
    };
  }
  return {
    label: pkgName,
    className: "bg-primary text-primary-foreground border-primary",
    iconName: "default"
  };
};


