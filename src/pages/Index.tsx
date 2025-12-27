import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface TarotLogo {
  id: number;
  title: string;
  style: string;
  imageUrl: string;
  description: string;
}

const tarotLogos: TarotLogo[] = [
  {
    id: 1,
    title: "Веер Судьбы",
    style: "Классический",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/519847e4-0f53-41ba-8399-f767063ed78f.jpg",
    description: "Три карты Таро в веерном раскладе символизируют прошлое, настоящее и будущее"
  },
  {
    id: 2,
    title: "Лунный Круг",
    style: "Мистический",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/d1b19178-7bf1-4252-b0ed-dbdeef4c5a8c.jpg",
    description: "Круговой расклад под луной и звездами для глубоких предсказаний"
  },
  {
    id: 3,
    title: "Ладонь Провидца",
    style: "Элегантный",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/5e63fc67-d29f-4fa2-8201-34a1370e8190.jpg",
    description: "Светящиеся карты на открытой ладони — символ дара предвидения"
  },
  {
    id: 4,
    title: "Пентаграмма Истины",
    style: "Оккультный",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/44ba60c6-3cb5-4858-8cf9-c68e88d718a2.jpg",
    description: "Пять карт на точках пентаграммы раскрывают тайны бытия"
  },
  {
    id: 5,
    title: "Хрустальный Шар",
    style: "Мистический",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/ce9f46b9-a5c8-401a-a33a-148824083a28.jpg",
    description: "Карты, парящие вокруг хрустального шара с мистическим дымом"
  }
];

export default function Index() {
  const [selectedLogo, setSelectedLogo] = useState<TarotLogo | null>(null);
  const [filter, setFilter] = useState<string>('Все');

  const styles = ['Все', 'Классический', 'Мистический', 'Элегантный', 'Оккультный'];

  const filteredLogos = tarotLogos.filter(logo => 
    filter === 'Все' || logo.style === filter
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-accent/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in space-y-6">
          <div className="space-y-3">
            <h1 className="font-cinzel text-6xl md:text-7xl font-bold text-accent animate-glow">
              Tarot на ладони
            </h1>
            <p className="font-cormorant text-2xl text-foreground italic">
              Коллекция профессиональных логотипов
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <Icon name="Sparkles" className="text-accent" size={28} />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-3 text-accent/80 bg-accent/5 px-8 py-4 rounded-full border border-accent/20 inline-flex">
            <Icon name="Send" size={24} />
            <a 
              href="https://t.me/tarotladon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cinzel text-xl tracking-wider hover:text-accent transition-colors"
            >
              @tarotladon
            </a>
          </div>
        </header>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-cinzel text-sm text-accent uppercase tracking-wider">Стиль:</span>
            {styles.map(style => (
              <Button
                key={style}
                variant={filter === style ? 'default' : 'outline'}
                onClick={() => setFilter(style)}
                className="font-cormorant hover:scale-105 transition-transform"
              >
                {style}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {filteredLogos.map((logo, index) => (
            <Card
              key={logo.id}
              className="group cursor-pointer overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedLogo(logo)}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={logo.imageUrl}
                  alt={logo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-xl font-semibold text-foreground">
                    {logo.title}
                  </h3>
                  <Badge variant="secondary" className="font-cormorant">
                    {logo.style}
                  </Badge>
                </div>
                <p className="font-cormorant text-sm text-muted-foreground leading-relaxed">
                  {logo.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10">
              <Icon name="Star" className="mx-auto text-accent" size={36} />
              <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                Профессионализм
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10">
              <Icon name="Heart" className="mx-auto text-accent" size={36} />
              <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                Точность
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10">
              <Icon name="Shield" className="mx-auto text-accent" size={36} />
              <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                Конфиденциальность
              </p>
            </div>
          </div>

          <a 
            href="https://t.me/tarotladon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              size="lg" 
              className="font-cinzel text-xl px-12 py-7 group hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <Icon name="MessageCircle" className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              Записаться на расклад
            </Button>
          </a>

          <p className="font-cormorant text-base text-muted-foreground italic">
            "Карты Таро — древний инструмент познания судьбы и самопознания"
          </p>
        </footer>
      </div>

      <Dialog open={!!selectedLogo} onOpenChange={() => setSelectedLogo(null)}>
        <DialogContent className="max-w-4xl bg-card border-accent">
          {selectedLogo && (
            <>
              <DialogHeader>
                <DialogTitle className="font-cinzel text-3xl text-accent flex items-center gap-3">
                  {selectedLogo.title}
                  <Badge variant="secondary" className="font-cormorant text-base">
                    {selectedLogo.style}
                  </Badge>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedLogo.imageUrl}
                    alt={selectedLogo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="font-cormorant text-lg text-foreground leading-relaxed">
                    {selectedLogo.description}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1 font-cinzel text-lg py-6">
                      <Icon name="Download" className="mr-2" size={20} />
                      Скачать логотип
                    </Button>
                    <a 
                      href="https://t.me/tarotladon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full font-cinzel text-lg py-6">
                        <Icon name="Send" className="mr-2" size={20} />
                        Связаться
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
