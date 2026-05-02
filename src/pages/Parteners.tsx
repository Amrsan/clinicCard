import React, { useState } from "react";

const specialties = [
  "الكل",
  "القلب والأوعية الدموية",
  "المخ والأعصاب",
  "طب الأطفال",
  "جراحة العظام",
  "الجلدية",
];

const providers = [
  {
    name: "د. سارة أحمد",
    logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop",
    specialty: "القلب والأوعية الدموية",
    description:
      "خبير في صحة القلب والأوعية الدموية والرعاية الوقائية للقلب مع أكثر من 15 عامًا من الخبرة.",
  },
  {
    name: "عيادة المدينة الطبية",
    logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop",
    specialty: "طب الأطفال",
    description:
      "خدمات رعاية صحية شاملة للرضع والأطفال والمراهقين في بيئة ودية.",
  },
  {
    name: "د. محمد علي",
    logo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    specialty: "المخ والأعصاب",
    description:
      "متخصص في الاضطرابات العصبية المعقدة وعلاجات صحة الدماغ المتقدمة.",
  },
  {
    name: "نخبة العظام",
    logo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=150&h=150&fit=crop",
    specialty: "جراحة العظام",
    description: "مركز رائد في الطب الرياضي واستبدال المفاصل بأحدث المرافق.",
  },
  {
    name: "د. إيمان حسن",
    logo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop",
    specialty: "الجلدية",
    description:
      "أخصائي في الأمراض الجلدية السريرية والتجميلية، مع التركيز على صحة الجلد وتجديد شبابه.",
  },
];

const Providers: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("الكل");

  const filteredProviders =
    selectedSpecialty === "الكل"
      ? providers
      : providers.filter((p) => p.specialty === selectedSpecialty);

  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 mt-20 font-cairo"
      dir="rtl"
    >
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            شركاؤنا في الرعاية الصحية
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            تواصل مع أطباء وعيادات عالمية المستوى مكرسة لصحتك ورفاهيتك.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                selectedSpecialty === specialty
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider) => (
              <div key={provider.name} className="pt-6 group">
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-xl px-6 pb-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-1 bg-white rounded-xl shadow-lg transition-colors overflow-hidden h-20 w-20">
                      <img
                        className="h-full w-full object-cover rounded-lg"
                        src={provider.logo}
                        alt={provider.name}
                      />
                    </div>
                    <span className="mr-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {provider.specialty}
                    </span>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                      {provider.name}
                    </h3>
                    <p className="mt-4 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                      {provider.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <section className="mt-24 rounded-2xl bg-blue-600 py-12 px-6 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white">انضم إلى شبكتنا</h2>
          <p className="mt-4 text-xl text-blue-100">
            هل أنت متخصص في الرعاية الصحية؟ كن شريكًا معنا للوصول إلى المزيد من
            المرضى وتنمية عيادتك.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              سجل كمقدم خدمة
            </a>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Providers;
