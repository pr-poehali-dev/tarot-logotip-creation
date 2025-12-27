import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background pointer-events-none" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <Card className="relative z-10 max-w-4xl w-full bg-card/95 backdrop-blur border-accent/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        
        <div className="relative">
          <div className="flex justify-center pt-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 blur-3xl animate-glow" />
              <img
                src="https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/51d4435a-066d-4b54-a19e-8d8ce3c4e173.jpg"
                alt="Tarot на ладони"
                className="relative w-full max-w-2xl rounded-lg shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <div className="px-8 md:px-12 py-8 space-y-8">
            <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-3">
                <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-accent animate-glow">
                  Tarot
                </h1>
                <p className="font-cormorant text-2xl md:text-3xl text-foreground italic">
                  на ладони
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 py-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <Icon name="Sparkles" className="text-accent animate-pulse" size={28} />
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <p className="font-cormorant text-xl md:text-2xl text-foreground leading-relaxed">
                  Профессиональные гадания на картах Таро
                </p>
                <p className="font-cormorant text-lg text-muted-foreground leading-relaxed">
                  Узнайте своё будущее, получите ответы на важные вопросы жизни, любви и карьеры
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 pt-8">
                <a 
                  href="https://t.me/tarotladon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button 
                    size="lg" 
                    className="w-full font-cinzel text-xl py-7 group hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                  >
                    <Icon name="Send" className="mr-3 group-hover:translate-x-1 transition-transform" size={24} />
                    Связаться в Telegram
                  </Button>
                </a>

                <div className="flex items-center gap-3 text-accent/80 bg-accent/5 px-6 py-3 rounded-full border border-accent/20">
                  <Icon name="AtSign" size={22} />
                  <span className="font-cinzel text-lg tracking-wider">tarotladon</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
                <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-colors">
                  <Icon name="Star" className="mx-auto text-accent" size={32} />
                  <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                    Многолетний опыт
                  </p>
                  <p className="font-cormorant text-xs text-muted-foreground">
                    Профессиональное чтение карт
                  </p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-colors">
                  <Icon name="Heart" className="mx-auto text-accent" size={32} />
                  <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                    Точные предсказания
                  </p>
                  <p className="font-cormorant text-xs text-muted-foreground">
                    Проверенные методики
                  </p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-b from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-colors">
                  <Icon name="Shield" className="mx-auto text-accent" size={32} />
                  <p className="font-cinzel text-sm uppercase tracking-widest text-foreground">
                    Конфиденциальность
                  </p>
                  <p className="font-cormorant text-xs text-muted-foreground">
                    Полная анонимность
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-t from-primary/20 via-primary/10 to-transparent px-8 py-8 text-center border-t border-accent/10">
            <p className="font-cormorant text-base md:text-lg text-muted-foreground italic leading-relaxed">
              "Карты Таро открывают путь к истине и самопознанию.<br />
              Позвольте древней мудрости направить вас к правильным решениям"
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
