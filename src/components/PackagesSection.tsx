import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: "الباقة الفضية",
      duration: "٦ أشهر",
      price: "مجناً", // Adding placeholder price or description if needed, or keeping duration focus
      accentColor: "bg-gray-400",
      features: [
        "الفائدة: 0%",
        "رسوم إدارية: 0%",
        "الدفعة المقدمة: 0%",
      ],
    },
    {
      id: 2,
      name: "الباقة الذهبية",
      duration: "٦ و ١٢ شهراً",
      accentColor: "bg-amber-500",
      features: [
        "الفائدة: 0%",
        "رسوم إدارية: 0%",
        "الدفعة المقدمة: 0%",
      ],
    },
    {
      id: 3,
      name: "الباقة البلاتينية",
      duration: "٦ و ١٢ و ١٨ شهراً",
      accentColor: "bg-slate-600",
      features: [
        "الفائدة: 0%",
        "رسوم إدارية: 0%",
        "الدفعة المقدمة: 0%",
      ],
    },
    {
      id: 4,
      name: "عروض أخرى",
      duration: "خصم ١٥% على الكاش",
      accentColor: "bg-teal-500",
      features: [
        "خصومات حصرية",
        "عروض موسمية",
        "باقات مخصصة",
      ],
    },
  ];

  return (
    <section id="offers" className="py-20 lg:py-32 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              باقات وعروض حصرية
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              اختر الباقة المناسبة لاحتياجاتك واستمتع بأفضل الخدمات الطبية
            </p>
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Top Accent Line */}
              <div className={`h-2 w-full ${pkg.accentColor}`} />

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="inline-block bg-muted px-3 py-1 rounded-full">
                    <p className="text-sm font-medium text-muted-foreground">
                      {pkg.duration}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className={`w-6 h-6 rounded-full ${pkg.accentColor} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-3.5 h-3.5 text-foreground`} /> 
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button 
                  className="w-full rounded-xl h-12 text-md font-medium shadow-sm active:scale-95 transition-transform"
                  variant="outline"
                >
                  تفاصيل الباقة
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
