import React, { useState, useEffect } from "react";
import { Check, MapPin, Star, Clock, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { getCategoryStyle, getPackageBadgeConfig, isProviderComplete } from "../lib/fallbackData";

const PackagesSection = () => {
  const navigate = useNavigate();
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(4); // Default to 'عروض أخرى' to show all providers

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("service_providers")
          .select("id, name, name_ar, description, description_ar, photo_url, package, avg_rating, provider_locations(*, areas(*)), categories(*)");
        
        const completeProviders = data ? data.filter(isProviderComplete) : [];

        if (error || !data) {
          if (error) console.error("Error fetching providers:", error);
          setProviders([]);
        } else {
          setProviders(completeProviders);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
  }, []);

  const packages = [
    {
      id: 1,
      name: "الباقة الفضية",
      duration: "٦ أشهر",
      price: "مجناً",
      accentColor: "bg-gray-400",
      features: ["الفائدة: 0%", "رسوم إدارية: 0%", "الدفعة المقدمة: 0%"],
    },
    {
      id: 2,
      name: "الباقة الذهبية",
      duration: "٦ و ١٢ شهراً",
      accentColor: "bg-amber-500",
      features: ["الفائدة: 0%", "رسوم إدارية: 0%", "الدفعة المقدمة: 0%"],
    },
    {
      id: 3,
      name: "الباقة البلاتينية",
      duration: "٦ و ١٢ و ١٨ شهراً",
      accentColor: "bg-slate-600",
      features: ["الفائدة: 0%", "رسوم إدارية: 0%", "الدفعة المقدمة: 0%"],
    },
    {
      id: 4,
      name: "عروض أخرى",
      duration: "خصم ١٥% على الكاش",
      accentColor: "bg-teal-500",
      features: ["خصومات حصرية", "عروض موسمية", "باقات مخصصة"],
    },
  ];

  const getFilteredProviders = () => {
    if (!selectedPackageId || selectedPackageId === 4) {
      return providers; // Show all providers
    }
    const packageMap: Record<number, string> = {
      1: "silver",
      2: "gold",
      3: "platinum",
    };
    const targetPkg = packageMap[selectedPackageId];
    return providers.filter(
      (p) =>
        p.package?.toLowerCase() === targetPkg ||
        (targetPkg === "silver" && p.package === "فضي") ||
        (targetPkg === "gold" && p.package === "ذهبي") ||
        (targetPkg === "platinum" && p.package === "بلاتيني"),
    );
  };

  const filteredProviders = getFilteredProviders();

  return (
    <section
      id="offers"
      className="py-20 lg:py-32 bg-muted/50 font-cairo"
      dir="rtl"
    >
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
              onClick={() => setSelectedPackageId(pkg.id)}
              className={`group relative bg-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border cursor-pointer ${
                selectedPackageId === pkg.id
                  ? "border-blue-600 ring-2 ring-blue-600/20 shadow-xl animate-pulse-subtle"
                  : "border-border/50"
              }`}
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
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <div
                        className={`w-6 h-6 rounded-full ${pkg.accentColor} bg-opacity-10 flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className={`w-3.5 h-3.5 text-foreground`} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button
                  className={`w-full rounded-xl h-12 text-md font-medium shadow-sm active:scale-95 transition-all ${
                    selectedPackageId === pkg.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-transparent hover:bg-muted"
                  }`}
                  variant={selectedPackageId === pkg.id ? "default" : "outline"}
                >
                  {selectedPackageId === pkg.id
                    ? "الباقة المختارة"
                    : "عرض الباقة"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Providers Section */}
        <div className="mt-24 pt-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              {selectedPackageId === 4
                ? "جميع شركاء الخدمة"
                : selectedPackageId === 1
                  ? "شركاء الباقة الفضية"
                  : selectedPackageId === 2
                    ? "شركاء الباقة الذهبية"
                    : selectedPackageId === 3
                      ? "شركاء الباقة البلاتينية"
                      : "شركاء الخدمة المتاحون"}
            </h3>
            <p className="text-muted-foreground">
              {selectedPackageId === 4
                ? "تصفح جميع الأطباء والعيادات المشتركة في شبكتنا"
                : `تصفح الأطباء والعيادات المتاحة في ${packages.find((p) => p.id === selectedPackageId)?.name || "هذه الباقة"}`}
            </p>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border/50 p-4 animate-pulse"
                >
                  <div className="h-48 bg-muted rounded-2xl mb-4" />
                  <div className="h-6 bg-muted rounded w-2/3 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-3xl border border-dashed border-border p-8">
              <p className="text-muted-foreground text-lg">
                لا يوجد مزودي خدمة متاحين حالياً لهذه الباقة.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="clinic-card group cursor-pointer bg-card rounded-3xl overflow-hidden shadow-soft border border-border/50"
                  onClick={() => navigate(`/provider/${provider.id}`)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        provider.photo_url ||
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                      }
                      alt={provider.name_ar || provider.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {provider.package && (() => {
                        const config = getPackageBadgeConfig(provider.package);
                        return (
                          <span className={`text-xs px-2.5 py-1 rounded-full font-bold shadow-md border flex items-center gap-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 ${config.className}`}>
                            {config.iconName === 'crown' && <Crown className="w-3 h-3 text-yellow-200 fill-yellow-200" />}
                            {config.iconName === 'shield' && <Shield className="w-3 h-3 text-slate-300 fill-slate-300/20" />}
                            {config.iconName === 'star' && <Star className="w-3 h-3 text-slate-600 fill-slate-600" />}
                            <span>{config.label}</span>
                          </span>
                        );
                      })()}
                      {(() => {
                        const activeLoc = provider.provider_locations?.find((loc: any) => loc.is_active !== false);
                        const fee = activeLoc?.booking_fee;
                        if (fee === undefined || fee === null) return null;
                        return (
                          <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-bold">
                            كشف: {fee} ج.م
                          </span>
                        );
                      })()}
                    </div>

                    {/* Status */}
                    <div className="absolute bottom-3 right-3">
                      <span
                        className={
                          (provider.status || "open") === "open"
                            ? "status-open"
                            : "status-closed"
                        }
                      >
                        <Clock className="w-3 h-3 inline ml-1" />
                        {(provider.status || "open") === "open"
                          ? "مفتوح الآن"
                          : "مغلق الان"}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-medium text-foreground">
                        {provider.avg_rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {provider.categories && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border mb-2 uppercase tracking-wide ${getCategoryStyle(provider.categories.name_ar || provider.categories.name)}`}>
                        {provider.categories.name_ar || provider.categories.name}
                      </span>
                    )}
                    <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-1">
                      {provider.name_ar || provider.name}
                    </h3>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground line-clamp-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                      {(() => {
                        const activeLocs = (provider.provider_locations || []).filter(
                          (loc: any) => loc.is_active !== false
                        );
                        if (activeLocs.length === 0) return "لا يوجد عنوان";
                        return activeLocs
                          .map((loc: any) => {
                            const areaName = loc.areas?.name_ar || loc.areas?.name_en || "";
                            const streetAddress = loc.address_line_ar || loc.address_line || "";
                            return areaName ? `${areaName} - ${streetAddress}` : streetAddress;
                          })
                          .join("، ");
                      })()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
