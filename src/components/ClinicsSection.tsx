import { MapPin, Star, Clock, Shield, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { getCategoryStyle, getPackageBadgeConfig, isProviderComplete } from "../lib/fallbackData";

const ClinicsSection = () => {
  const navigate = useNavigate();
  const [providers, setProviders] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("service_providers")
        .select(
          "id, name, name_ar, photo_url, package, avg_rating, top_doctor, provider_locations(*, areas(*)), categories(*)",
        );
      console.log(data);
      if (error || !data) {
        if (error) console.log(error);
        setProviders([]);
      } else {
        const completeProviders = data.filter(isProviderComplete);
        const topDoctors = completeProviders.filter((p: any) => p.top_doctor === true);
        setProviders(topDoctors.slice(0, 4));
      }
    };
    fetchData();
  }, []);
  // const clinics = [

  //   {
  //     id: 1,
  //     name: "مستشفى كيور",
  //     address: "٢٥ حموده محمود المنطقه الثامنه امام شركه انبى مدينه نصر",
  //     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500",
  //     status: "open",
  //     rating: 4.8,
  //     featured: false,
  //   },
  //   {
  //     id: 2,
  //     name: "دار أمل للصحة النفسية",
  //     address: "فيلا ايمن شاكر, 7، مزارع استيلا دي ماري فيلا 699، الجيزه",
  //     image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500",
  //     status: "open",
  //     rating: 4.9,
  //     featured: true,
  //   },
  //   {
  //     id: 3,
  //     name: "د. زياد القاضى",
  //     address: "ميدان الجيزة برج النصر أعلى بنك مصر ٩ شارع التحرير",
  //     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
  //     status: "open",
  //     rating: 4.7,
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     name: "د. اسامة انور",
  //     address: "١٨٠ شارع النزهة ميدان سانت فاتيما الدور الاول مصر الجديدة",
  //     image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
  //     status: "closed",
  //     rating: 4.6,
  //     featured: true,
  //     price: "400 EGP",
  //   },
  //   {
  //     id: 5,
  //     name: "عيادات صفوة الحجاز",
  //     address: "٣٤ أ برج التجاريين شارع الحجاز ميدان المحكمة",
  //     image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500",
  //     status: "closed",
  //     rating: 4.5,
  //     featured: true,
  //   },
  //   {
  //     id: 6,
  //     name: "د. مصطفى الشريف",
  //     address: "64 ج حدايق الأهرام، حرام، محافظة الجيزة",
  //     image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500",
  //     status: "closed",
  //     rating: 4.4,
  //     featured: false,
  //   },
  // ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="text-right">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              الأكثر زيارة
            </h2>
            <p className="text-muted-foreground">أفضل العيادات</p>
          </div>
          <div className="flex gap-2">
            {/* <button className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center hover:bg-muted transition-colors">
              <svg className="w-5 h-5 text-foreground rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-primary shadow-soft flex items-center justify-center hover:bg-navy-dark transition-colors">
              <svg className="w-5 h-5 text-primary-foreground rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="clinic-card group cursor-pointer"
              onClick={() => navigate(`/provider/${provider.id}`)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={provider.photo_url}
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
                    {(provider.status || "open") === "open" ? "مفتوح الآن" : "مغلق الان"}
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
      </div>
    </section>
  );
};

export default ClinicsSection;
