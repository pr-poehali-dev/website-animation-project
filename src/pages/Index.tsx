import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`Спасибо за обращение, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Ducks Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img 
          src="https://cdn.poehali.dev/files/Гуси.PNG" 
          alt="" 
          className="absolute top-[10%] left-[5%] w-32 md:w-48 opacity-10 animate-float-slow"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src="https://cdn.poehali.dev/files/Гуси.PNG" 
          alt="" 
          className="absolute top-[60%] right-[10%] w-24 md:w-40 opacity-10 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src="https://cdn.poehali.dev/files/Гуси.PNG" 
          alt="" 
          className="absolute bottom-[20%] left-[15%] w-28 md:w-44 opacity-10 animate-float-slow"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center animate-fade-in">
          <div className="text-2xl font-bold">CompanyName</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Инновации для вашего бизнеса
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Создаём решения, которые помогают компаниям расти и развиваться в цифровой среде
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" className="group">
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "Rocket",
              title: "Стратегия",
              description: "Разработка комплексной стратегии цифрового развития"
            },
            {
              icon: "Code",
              title: "Разработка",
              description: "Создание современных веб и мобильных приложений"
            },
            {
              icon: "TrendingUp",
              title: "Рост",
              description: "Масштабирование бизнеса с помощью технологий"
            }
          ].map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-muted hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Icon name={service.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">О компании</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Мы — команда профессионалов с многолетним опытом в сфере цифровых технологий. 
            Наша миссия — делать бизнес наших клиентов более эффективным через инновационные решения.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: "150+", label: "Проектов" },
              { number: "50+", label: "Клиентов" },
              { number: "8", label: "Лет опыта" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-4 py-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами, чтобы обсудить ваш проект
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@company.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-muted animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    required
                    className="bg-background/50"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить сообщение
                      <Icon name="Send" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 CompanyName. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;