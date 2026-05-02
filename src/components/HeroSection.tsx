import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "./FloatingShapes";
import heroDoctor from "@/assets/hero-doctor.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  const specialties = [
    "كل التخصصات",
    "البصريات",
    "الجلدية و التناسلية",
    "القلب و أوعية دموية",
    "الكبد و مناظير الجهاز الهضمي",
    "المستشفيات",
    "النفسية و العصبية",
    "جراحة العظام",
    "جراحة الفم و الاسنان",
    "طب وجراحة العيون",
  ];

  const regions = [
    "كل المناطق",
    "القاهره",
    "الجيزة",
    "الاسكندرية",
    "المنصورة",
    "الاسماعيلية",
    "السويس",
    "بورسعيد",
    "الغردقة",
  ];

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Floating Decorative Shapes */}
      <FloatingShapes />

      {/* Medical Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Content */}
          <div className="text-right order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 animate-slide-up">
              ابحث عن اقرب المستشفيات
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              اكتشف أفضل عروض المستشفيات والعيادات
            </p>

            {/* Search Box */}
            <div 
              className="bg-card rounded-2xl shadow-elevated p-2 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Specialty Dropdown */}
                <div className="flex-1 relative">
                  <Select dir="rtl">
                    <SelectTrigger className="w-full h-12 px-4 bg-transparent border-none text-foreground text-sm focus:ring-0 focus:ring-offset-0 shadow-none">
                      <SelectValue placeholder="كل التخصصات" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px bg-border my-2" />

                {/* Region Dropdown */}
                <div className="flex-1 relative">
                  <Select dir="rtl">
                    <SelectTrigger className="w-full h-12 px-4 bg-transparent border-none text-foreground text-sm focus:ring-0 focus:ring-offset-0 shadow-none">
                      <SelectValue placeholder="كل المناطق" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <Button className="h-12 px-8 rounded-xl bg-primary hover:bg-navy-dark gap-2">
                  <Search className="w-4 h-4" />
                  بحث
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroDoctor}
                alt="طبيب محترف"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">+100</p>
                  <p className="text-xs text-muted-foreground">عيادة ومستشفى</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === 0 ? "bg-foreground" : "bg-foreground/30"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroSection;
