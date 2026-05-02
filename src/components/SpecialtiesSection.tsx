import { Eye, Heart, Stethoscope, Activity, Brain, Bone } from "lucide-react";

const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: Eye,
      name: "البصريات",
      count: 3,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Stethoscope,
      name: "الجلدية و التناسلية",
      count: 2,
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: Heart,
      name: "القلب و أوعية دموية",
      count: 1,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Activity,
      name: "الكبد و مناظير الجهاز الهضمي",
      count: 1,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: Brain,
      name: "النفسية و العصبية",
      count: 4,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Bone,
      name: "جراحة العظام",
      count: 2,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-right mb-12">
          <div className="inline-block">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              التخصصات
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mr-auto" />
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.name}
                className="specialty-card group"
              >
                <div
                  className={`w-14 h-14 ${specialty.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}
                >
                  <Icon className={`w-7 h-7 ${specialty.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">
                  {specialty.name}
                </h3>
                <span className="inline-flex items-center justify-center w-8 h-8 bg-muted rounded-full text-sm text-muted-foreground">
                  {specialty.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
