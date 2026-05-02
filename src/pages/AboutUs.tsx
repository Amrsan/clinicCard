import { Target, Heart, Shield, Users, Award, Clock } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background font-cairo text-right" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              من نحن
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              نحن في كلينك كارد نسعى لإحداث ثورة في إدارة الرعاية الصحية من خلال البساطة والاهتمام. هدفنا هو تقديم حلول رقمية مبتكرة تسهل حياة المرضى ومقدمي الخدمة على حد سواء.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
               <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-110" />
                <Target className="w-12 h-12 text-primary mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">مهمتنا</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  في كلينك كارد، نؤمن بأن إدارة السجلات الصحية يجب أن تكون سلسة بقدر الرعاية نفسها. مهمتنا هي سد الفجوة بين المرضى والعيادات من خلال حلول رقمية مبتكرة.
                  <br /><br />
                  نسعى جاهدين لتمكين الأفراد من التحكم في بياناتهم الصحية مع تمكين مقدمي الرعاية الصحية من تقديم خدمات تتسم بالكفاءة والشخصية.
                </p>
               </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-right">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">رؤيتنا</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                نحو مستقبل صحي أفضل وأسهل للجميع
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نطمح لأن نكون المنصة الرائدة في الشرق الأوسط التي تجمع بين التكنولوجيا المتطورة والرعاية الإنسانية، لضمان تجربة صحية متكاملة ومريحة لكل مريض.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">قيمنا الأساسية</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نحن نلتزم بمجموعة من القيم التي توجه عملنا وتحدد علاقتنا مع عملائنا وشركائنا.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'النزاهة', 
                desc: 'نلتزم بأعلى معايير الخصوصية والسلوك الأخلاقي في التعامل مع البيانات الصحية الحساسة.',
                icon: Shield
              },
              { 
                title: 'الابتكار', 
                desc: 'نتطور باستمرار ونحدث تقنياتنا لتلبية الاحتياجات المتغيرة للرعاية الصحية الحديثة.',
                icon: Award
              },
              { 
                title: 'الرحمة', 
                desc: 'نضع رفاهية المرضى واحتياجات مقدمي الرعاية الصحية في صميم كل ما نقوم به.',
                icon: Heart
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أرقام تتحدث عن إنجازاتنا</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              فخورون بثقة عملائنا وشراكاتنا المثمرة التي تساهم في تحسين جودة الحياة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50k+', label: 'مريض سعيد', icon: Users },
              { number: '100+', label: 'عيادة متخصصة', icon: Target },
              { number: '24/7', label: 'دعم فني', icon: Clock },
              { number: '4.9', label: 'متوسط التقييم', icon: Award },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white/90" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;