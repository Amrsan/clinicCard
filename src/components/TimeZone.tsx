import { supabase } from "@/supabaseClient"; // Use named import to match your client file
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArabicDayName } from "../lib/fallbackData";

interface OpeningHour {
  id: number;
  from_time: string;
  to_time: string;
  day_of_week: number;
  is_closed?: boolean;
}

interface ProviderLocation {
  is_active?: boolean;
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
              is_active,
              provider_location_opening_hours (*)
            )
          `,
          )
          .eq("id", id)
          .maybeSingle();

        if (error || !data || !data.provider_locations || data.provider_locations.length === 0) {
          if (error) console.error("Supabase error:", error);
          setOpeningHours([]);
        } else {
          // Filter out inactive locations and flatten the nested opening hours
          const activeLocs = data.provider_locations.filter((loc: any) => loc.is_active !== false);
          const hours: OpeningHour[] = activeLocs.flatMap(
            (loc: any) => loc.provider_location_opening_hours || [],
          );
          // Sort opening hours by day of week asc
          hours.sort((a, b) => a.day_of_week - b.day_of_week);
          setOpeningHours(hours);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setOpeningHours([]);
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
              {getArabicDayName(hour.day_of_week)}
            </span>
            {hour.is_closed ? (
              <span className="font-bold text-rose-500">مغلق</span>
            ) : (
              <span className="font-medium text-foreground dir-ltr">
                من {hour.from_time ? hour.from_time.slice(0, 5) : ""} - الى {hour.to_time ? hour.to_time.slice(0, 5) : ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeZone;
