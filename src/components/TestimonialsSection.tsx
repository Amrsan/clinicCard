import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد هاني",
      role: "مطور برمجيات",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      text: "تجربة رائعة مع كلينك كارد! سهلت علي إيجاد أفضل الأطباء في منطقتي بسرعة وسهولة.",
    },
    {
      id: 2,
      name: "محمد عمران",
      role: "مريض",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      text: "خدمة ممتازة وأسعار تنافسية. أنصح الجميع بتجربة كلينك كارد للحصول على أفضل الرعاية الصحية.",
    },
    {
      id: 3,
      name: "مصطفى حسن",
      role: "صاحب شركة",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      text: "منصة احترافية توفر الوقت والجهد في البحث عن العيادات والمستشفيات المناسبة.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            ماذا يقولون عملائنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            آراء عملائنا الكرام حول تجربتهم مع كلينك كارد
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="pt-8">
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    {/* <p className="text-sm text-muted-foreground">{testimonial.role}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === 0 ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
