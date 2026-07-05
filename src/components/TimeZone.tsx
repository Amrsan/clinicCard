import { supabase } from "@/supabaseClient"; // Use named import to match your client file
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fallbackProviders } from "../lib/fallbackData";

interface OpeningHour {
  id: number;
  from_time: string;
  to_time: string;
  day_of_week: number;
}

interface ProviderLocation {
  provider_location_opening_hours: OpeningHour[];
}

const TimeZone = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const [openingHours, setOpeningHours] = useState<OpeningHour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("service_providers")
          .select(
            `
            id,
            provider_locations (
              provider_location_opening_hours (*)
            )
          `,
          )
          .eq("id", id)
          .maybeSingle();

        if (error || !data || !data.provider_locations || data.provider_locations.length === 0) {
          if (error) console.error("Supabase error:", error);
          const found = fallbackProviders.find(p => String(p.id) === String(id));
          const hours = found?.provider_locations_opening_hours || [];
          setOpeningHours(hours as any);
        } else {
          // Flatten the nested opening hours from all locations
          const hours =
            data.provider_locations?.flatMap(
              (loc: any) => loc.provider_location_opening_hours || [],
            ) || [];
          setOpeningHours(hours);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        const found = fallbackProviders.find(p => String(p.id) === String(id));
        const hours = found?.provider_locations_opening_hours || [];
        setOpeningHours(hours as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="p-4 text-muted-foreground">جاري تحميل المواعيد...</div>
    );
  if (openingHours.length === 0)
    return (
      <div className="p-4 text-muted-foreground">لا توجد مواعيد متاحة.</div>
    );

  return (
    <div className="bg-card rounded-xl p-6 border border-border mt-6">
      <h3 className="font-bold text-lg mb-4 text-foreground">مواعيد العمل</h3>
      <div className="space-y-3">
        {openingHours.map((hour) => (
          <div
            key={hour.id}
            className="flex justify-between items-center text-sm border-b border-border/50 pb-2"
          >
            <span className="text-muted-foreground">
              اليوم {hour.day_of_week}
            </span>
            <span className="font-medium text-foreground dir-ltr">
              من {hour.from_time} - الى {hour.to_time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeZone;
