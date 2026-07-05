import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, useLocation } from "react-router-dom";
import { fallbackProviders, getCategoryStyle, getPackageBadgeConfig } from "../lib/fallbackData";
import { Crown, Shield, Star } from "lucide-react";

interface Category {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
}

interface Provider {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  photo_url: string;
  package: string;
  avg_rating: number;
  categories?: Category;
}

const Providers: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [specialties, setSpecialties] = useState<string[]>(["الكل"]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    location.state?.specialty || "الكل"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state?.specialty) {
      setSelectedSpecialty(location.state.specialty);
    } else {
      setSelectedSpecialty("الكل");
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("service_providers")
          .select("id, name, name_ar, description, description_ar, photo_url, package, avg_rating, categories(*)");

        if (error || !data || data.length === 0) {
          if (error) console.error("Error fetching providers:", error);
          setProviders(fallbackProviders as any);
          const uniqueSpecialties = Array.from(
            new Set(
              fallbackProviders
                .map((p: any) => p.categories?.name_ar || p.categories?.name)
                .filter(Boolean),
            ),
          ) as string[];
          setSpecialties(["الكل", ...uniqueSpecialties]);
        } else {
          setProviders(data as any);
          const uniqueSpecialties = Array.from(
            new Set(
              data
                .map((p: any) => p.categories?.name_ar || p.categories?.name)
                .filter(Boolean),
            ),
          ) as string[];
          setSpecialties(["الكل", ...uniqueSpecialties]);
        }
      } catch (err) {
        console.error("Unexpected error fetching providers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProviders =
    selectedSpecialty === "الكل"
      ? providers
      : providers.filter(
          (p) =>
            (p.categories?.name_ar || p.categories?.name) === selectedSpecialty,
        );

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

        {loading ? (
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="pt-6 animate-pulse">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-xl px-6 pb-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-1 bg-gray-200 dark:bg-gray-700 rounded-xl h-20 w-20" />
                      <div className="mr-4 inline-flex items-center px-8 py-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <div className="mt-8 h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                      <div className="mt-4 space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProviders.map((provider) => (
                <div
                  key={provider.id}
                  onClick={() => navigate(`/provider/${provider.id}`)}
                  className="pt-6 group cursor-pointer"
                >
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-xl px-6 pb-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-1 bg-white rounded-xl shadow-lg transition-colors overflow-hidden h-20 w-20">
                        <img
                          className="h-full w-full object-cover rounded-lg"
                          src={
                            provider.photo_url ||
                            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop"
                          }
                          alt={provider.name_ar || provider.name}
                        />
                      </div>
                      {provider.categories && (
                        <span className={`mr-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border shadow-sm transition-all duration-300 ${getCategoryStyle(provider.categories.name_ar || provider.categories.name)}`}>
                          {provider.categories.name_ar ||
                            provider.categories.name}
                        </span>
                      )}
                      {provider.package && (() => {
                        const config = getPackageBadgeConfig(provider.package);
                        return (
                          <span className={`mr-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border shadow-sm gap-1 transition-all duration-300 ${config.className}`}>
                            {config.iconName === 'crown' && <Crown className="w-2.5 h-2.5 text-yellow-200 fill-yellow-200" />}
                            {config.iconName === 'shield' && <Shield className="w-2.5 h-2.5 text-slate-300 fill-slate-300/20" />}
                            {config.iconName === 'star' && <Star className="w-2.5 h-2.5 text-slate-600 fill-slate-600" />}
                            <span>{config.label}</span>
                          </span>
                        );
                      })()}
                      <h3 className="mt-8 text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                        {provider.name_ar || provider.name}
                      </h3>
                      <p className="mt-4 text-base text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {provider.description_ar || provider.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Providers;
