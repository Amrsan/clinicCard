import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Clock,
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";
import { supabase } from "../supabaseClient";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import TimeZone from "@/components/TimeZone";

interface ProviderLocation {
  id: string;
  address_line: string;
  city?: string;
}

interface ProviderLocationOpeningHour {
  id: number;
  location_id: number;
  day_of_week: number;
  from_time: string;
  to_time: string;
}

interface Provider {
  id: string;
  name: string;
  photo_url: string;
  package: string;
  price: string;
  status: string;
  avg_rating: number;
  description?: string;
  provider_locations: ProviderLocation[];
  provider_locations_opening_hours: ProviderLocationOpeningHour[];
}

const ProviderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);

    const fetchProviderData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("service_providers")
          .select("*,provider_locations(*)")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching provider:", error);
        } else {
          setProvider(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProviderData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 bg-muted/30 p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <Skeleton className="h-10 w-32" />
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-soft grid md:grid-cols-3 gap-8">
            <Skeleton className="h-64 w-full rounded-2xl" />
            <div className="md:col-span-2 space-y-4">
              <Skeleton className="h-10 w-2/3" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-24 w-full" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-muted/30">
        <h2 className="text-2xl font-bold mb-4">
          لم يتم العثور على مزود الخدمة
        </h2>
        <Button onClick={() => navigate(-1)} variant="outline">
          <ArrowRight className="w-4 h-4 ml-2" />
          العودة
        </Button>
      </div>
    );
  }

  // Determine badge colors based on package
  const packageColor =
    provider.package?.toLowerCase().includes("gold") ||
    provider.package === "ذهبي"
      ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-amber-500"
      : provider.package?.toLowerCase().includes("silver") ||
          provider.package === "فضي"
        ? "bg-gradient-to-r from-gray-200 to-gray-400 text-gray-800 border-gray-400"
        : provider.package?.toLowerCase().includes("platinum") ||
            provider.package === "بلاتيني"
          ? "bg-gradient-to-r from-slate-100 to-slate-300 text-slate-800 border-slate-400"
          : "bg-primary text-primary-foreground border-primary";

  return (
    <div className="min-h-screen bg-muted/30 py-24 px-4 sm:px-6 lg:px-8 font-cairo">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowRight className="w-5 h-5" />
          <span>العودة للعيادات</span>
        </button>

        <div className="bg-card rounded-[2rem] shadow-xl overflow-hidden border border-border/50">
          <div className="grid md:grid-cols-5 g-0">
            {/* Image Hero Section */}
            <div className="md:col-span-2 relative h-72 md:h-auto">
              <img
                src={
                  provider.photo_url ||
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                }
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute top-4 right-4 flex gap-2">
                {provider.package && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-md border ${packageColor}`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold">{provider.package}</span>
                  </span>
                )}
                {provider.price && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm shadow-md font-bold">
                    {provider.price}
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 p-8 lg:p-12 relative flex flex-col justify-center">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  {provider.name}
                </h1>

                <div className="flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-full">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-lg">
                    {provider.avg_rating}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-muted p-2 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">الموقع</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.provider_locations
                        ?.map((loc) => loc.address_line)
                        .join(", ") || "العنوان غير متوفر"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-muted p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      حالة العمل
                    </h3>
                    <p
                      className={`font-semibold flex items-center gap-2 ${provider.status === "open" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
                    >
                      <span className="relative flex h-3 w-3">
                        {provider.status === "open" && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        )}
                        <span
                          className={`relative inline-flex rounded-full h-3 w-3 ${provider.status === "open" ? "bg-emerald-500" : "bg-rose-500"}`}
                        ></span>
                      </span>
                      {provider.status === "open" ? "مفتوح الآن" : "مغلق الان"}
                      <Clock className="w-3 h-3 inline ml-1" />
                      {provider.status === "open" ? "مفتوح الآن" : "مغلق الان"}
                      {provider?.provider_locations_opening_hours?.map(
                        (schedule) => (
                          <p key={schedule.id}>
                            <span>
                              {schedule.day_of_week} : {schedule.from_time} -{" "}
                              {schedule.to_time}
                            </span>
                          </p>
                        ),
                      )}
                    </p>
                  </div>
                </div>

                {provider.description && (
                  <div className="pt-4 border-t border-border mt-4">
                    <h3 className="font-bold text-foreground mb-2">
                      عن الطبيب / العيادة
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6">
                <Button className="flex-1 h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 ml-2 rtl-flip" />
                  احجز موعدك الآن
                </Button>
                <Button
                  variant="outline"
                  className="flex-[0.5] h-14 text-lg font-bold rounded-xl border-2"
                >
                  <Mail className="w-5 h-5 ml-2" />
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeZone />
    </div>
  );
};

export default ProviderDetails;
