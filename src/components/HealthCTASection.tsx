import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, CreditCard } from "lucide-react";

const HealthCTASection = () => {
  const features = [
    {
      icon: Shield,
      title: "سجلات صحية آمنة",
      description: "احتفظ بنسخة من سجلاتك الصحية المهمة",
    },
    {
      icon: Clock,
      title: "وصول سريع",
      description: "سجلاتك في متناول يدك دائماً",
    },
    {
      icon: CreditCard,
      title: "بطاقة صحية ذكية",
      description: "احصل على بطاقتك من مقدمي الرعاية المعتمدين",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-right text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-red-300" />
              <span className="text-sm font-medium">كلينك كارد</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              تبسيط صحتك
            </h2>

            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              تتيح لك كلينك كارد الاحتفاظ بنسخة من سجلاتك الصحية المهمة في متناول يدك ومشاركتها مع الآخرين إذا اخترت ذلك. يمكنك الحصول على نسخة من بطاقة الصحة الذكية الخاصة بك من خلال جهة إصدار مؤهلة.
            </p>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-xl px-8"
            >
              سجل الآن
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-start gap-4 hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-primary-foreground text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCTASection;
