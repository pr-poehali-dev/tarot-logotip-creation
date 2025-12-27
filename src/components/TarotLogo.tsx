import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function TarotLogo() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background pointer-events-none" />
      
      <Card className="relative z-10 max-w-2xl w-full bg-card/95 backdrop-blur border-accent/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative p-8 md:p-12 space-y-8">
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 blur-3xl animate-glow" />
              <img
                src="https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/24471fd1-4af5-4f7f-8dd1-d13224088c84.jpg"
                alt="Tarot Logo"
                className="relative w-full max-w-md rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-accent animate-glow">
                Tarot
              </h1>
              <p className="font-cormorant text-xl text-muted-foreground italic">
                Таро на ладони
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <Icon name="Sparkles" className="text-accent" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>

            <div className="space-y-3">
              <p className="font-cormorant text-lg text-foreground">
                Профессиональные гадания на картах Таро
              </p>
              <p className="font-cormorant text-base text-muted-foreground">
                Узнайте своё будущее, получите ответы на важные вопросы
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-6">
              <a 
                href="https://t.me/tarotladon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-sm"
              >
                <Button 
                  size="lg" 
                  className="w-full font-cinzel text-lg group hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <Icon name="Send" className="mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                  Связаться в Telegram
                </Button>
              </a>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MessageCircle" size={18} />
                <span className="font-cormorant">@tarotladon</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="text-center space-y-1">
                <Icon name="Star" className="mx-auto text-accent" size={24} />
                <p className="font-cinzel text-xs text-muted-foreground uppercase tracking-wider">
                  Опыт
                </p>
              </div>
              <div className="text-center space-y-1">
                <Icon name="Heart" className="mx-auto text-accent" size={24} />
                <p className="font-cinzel text-xs text-muted-foreground uppercase tracking-wider">
                  Точность
                </p>
              </div>
              <div className="text-center space-y-1">
                <Icon name="Shield" className="mx-auto text-accent" size={24} />
                <p className="font-cinzel text-xs text-muted-foreground uppercase tracking-wider">
                  Конфиденциальность
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-t from-primary/20 to-transparent px-8 py-6 text-center">
          <p className="font-cormorant text-sm text-muted-foreground italic">
            "Карты Таро открывают путь к истине и самопознанию"
          </p>
        </div>
      </Card>
    </div>
  );
}
