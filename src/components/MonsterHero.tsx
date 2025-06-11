
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MonsterHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 floating">
        <div className="w-4 h-4 bg-green-500 rounded-full monster-glow"></div>
      </div>
      <div className="absolute top-40 right-20 floating" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-orange-500 rounded-full monster-glow"></div>
      </div>
      <div className="absolute bottom-40 left-1/4 floating" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-5 bg-purple-500 rounded-full monster-glow"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="creepy-text text-6xl md:text-8xl font-bold text-green-400 mb-6 floating">
          МОНСТРЫ 👹
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Добро пожаловать в мрачный мир жутких существ и таинственных созданий
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg monster-hover pulse-glow"
          >
            <Icon name="Eye" className="mr-2" />
            Исследовать
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg monster-hover"
          >
            <Icon name="Skull" className="mr-2" />
            Галерея
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonsterHero;
