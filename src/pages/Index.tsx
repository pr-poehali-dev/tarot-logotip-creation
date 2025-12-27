import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Logo {
  id: number;
  title: string;
  category: string;
  format: string;
  imageUrl: string;
  description: string;
}

const logos: Logo[] = [
  {
    id: 1,
    title: "Crimson Circle",
    category: "Magic Circles",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/79c895e1-9449-4e72-8b8f-3878443dc049.jpg",
    description: "Intricate magic circle with sacred geometry and ancient runes"
  },
  {
    id: 2,
    title: "Alchemical Seal",
    category: "Occult Symbols",
    format: "Circle",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/aeae0f26-b980-4f6a-bbc7-8e34b8ece2ce.jpg",
    description: "Pentagram surrounded by runic inscriptions and alchemical symbols"
  },
  {
    id: 3,
    title: "Sacred Geometry",
    category: "Ancient Patterns",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/eaac7751-7be7-4977-b5c2-6bde136cce44.jpg",
    description: "Overlapping circles with elder futhark runes and mystical patterns"
  },
  {
    id: 4,
    title: "Dark Sigil",
    category: "Runes",
    format: "Circle",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/79c895e1-9449-4e72-8b8f-3878443dc049.jpg",
    description: "Nordic runes arranged in mystical formation with golden accents"
  },
  {
    id: 5,
    title: "Mystic Mandala",
    category: "Magic Circles",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/aeae0f26-b980-4f6a-bbc7-8e34b8ece2ce.jpg",
    description: "Mandala with esoteric symbols and ancient power glyphs"
  },
  {
    id: 6,
    title: "Occult Gateway",
    category: "Occult Symbols",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/eaac7751-7be7-4977-b5c2-6bde136cce44.jpg",
    description: "Portal design with layered mystical symbols and protective runes"
  },
  {
    id: 7,
    title: "Blood Moon Seal",
    category: "Ancient Patterns",
    format: "Circle",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/79c895e1-9449-4e72-8b8f-3878443dc049.jpg",
    description: "Lunar phases integrated with arcane symbols and blood red tones"
  },
  {
    id: 8,
    title: "Rune Matrix",
    category: "Runes",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/aeae0f26-b980-4f6a-bbc7-8e34b8ece2ce.jpg",
    description: "Complex grid of interconnected runes with golden energy flows"
  },
  {
    id: 9,
    title: "Arcane Emblem",
    category: "Magic Circles",
    format: "Circle",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/eaac7751-7be7-4977-b5c2-6bde136cce44.jpg",
    description: "Ancient emblem with concentric circles and mystical inscriptions"
  },
  {
    id: 10,
    title: "Shadow Cipher",
    category: "Occult Symbols",
    format: "Square",
    imageUrl: "https://cdn.poehali.dev/projects/ba5270d4-ee9e-4e81-a3ef-0227425f3e39/files/79c895e1-9449-4e72-8b8f-3878443dc049.jpg",
    description: "Cryptic symbols arranged in dark ritual pattern with gold illumination"
  }
];

export default function Index() {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Magic Circles', 'Occult Symbols', 'Runes', 'Ancient Patterns'];
  const formats = ['All', 'Square', 'Circle'];
  const [formatFilter, setFormatFilter] = useState<string>('All');

  const filteredLogos = logos.filter(logo => {
    const categoryMatch = filter === 'All' || logo.category === filter;
    const formatMatch = formatFilter === 'All' || logo.format === formatFilter;
    return categoryMatch && formatMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="font-cinzel text-6xl md:text-7xl font-bold text-accent mb-4 animate-glow">
            Arcane Logos
          </h1>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция из 10 уникальных эзотерических логотипов с древними символами силы
          </p>
        </header>

        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-cinzel text-sm text-accent uppercase tracking-wider">Категория:</span>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                onClick={() => setFilter(cat)}
                className="font-cormorant hover:scale-105 transition-transform"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-cinzel text-sm text-accent uppercase tracking-wider">Формат:</span>
            {formats.map(fmt => (
              <Button
                key={fmt}
                variant={formatFilter === fmt ? 'default' : 'outline'}
                onClick={() => setFormatFilter(fmt)}
                className="font-cormorant hover:scale-105 transition-transform"
              >
                {fmt}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredLogos.map((logo, index) => (
            <Card
              key={logo.id}
              className="group cursor-pointer overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedLogo(logo)}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={logo.imageUrl}
                  alt={logo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-lg font-semibold text-foreground">
                    {logo.title}
                  </h3>
                  <Badge variant="secondary" className="font-cormorant text-xs">
                    {logo.format}
                  </Badge>
                </div>
                <p className="font-cormorant text-sm text-muted-foreground line-clamp-2">
                  {logo.description}
                </p>
                <Badge variant="outline" className="font-cormorant">
                  {logo.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="font-cinzel group">
              Скачать все логотипы
              <Icon name="Download" className="ml-2 group-hover:animate-bounce" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="font-cinzel">
              Заказать индивидуальный дизайн
            </Button>
          </div>
          <p className="font-cormorant text-sm text-muted-foreground">
            Все логотипы оптимизированы для веб, печати и мобильных приложений
          </p>
        </footer>
      </div>

      <Dialog open={!!selectedLogo} onOpenChange={() => setSelectedLogo(null)}>
        <DialogContent className="max-w-3xl bg-card border-accent">
          {selectedLogo && (
            <>
              <DialogHeader>
                <DialogTitle className="font-cinzel text-2xl text-accent flex items-center gap-3">
                  {selectedLogo.title}
                  <Badge variant="secondary" className="font-cormorant">
                    {selectedLogo.format}
                  </Badge>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedLogo.imageUrl}
                    alt={selectedLogo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Tag" className="text-accent" size={20} />
                    <span className="font-cinzel text-sm text-muted-foreground">Категория:</span>
                    <Badge variant="outline" className="font-cormorant">
                      {selectedLogo.category}
                    </Badge>
                  </div>
                  <p className="font-cormorant text-base text-foreground">
                    {selectedLogo.description}
                  </p>
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 font-cinzel">
                      <Icon name="Download" className="mr-2" size={18} />
                      Скачать PNG
                    </Button>
                    <Button variant="outline" className="flex-1 font-cinzel">
                      <Icon name="FileText" className="mr-2" size={18} />
                      Скачать SVG
                    </Button>
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
