import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: 'Chinese (中文)' },
    { code: 'ar', name: 'Arabic (العربية)' },
    { code: 'hi', name: 'Hindi (हिन्दी)' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Russian (Русский)' },
    { code: 'ja', name: 'Japanese (日本語)' },
  ];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // Here you would typically handle the language change in your app
    console.log(`Language changed to: ${language}`);
  };

  return (
    <div className="min-h-screen">
      {/* Language Selector */}
      <div className="fixed top-20 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {currentLanguage}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.name)}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 font-playfair">
            Experience Fine Dining
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Indulge in an unforgettable culinary journey with our carefully crafted dishes
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                View Today's Menu
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Today's Special Menu</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-4">
                  <h3 className="font-semibold">Appetizers</h3>
                  <p>Fresh Garden Salad with House Dressing</p>
                  <p>Soup of the Day</p>
                  
                  <h3 className="font-semibold pt-4">Main Course</h3>
                  <p>Grilled Salmon with Lemon Butter</p>
                  <p>Braised Short Ribs</p>
                  
                  <h3 className="font-semibold pt-4">Dessert</h3>
                  <p>Chocolate Soufflé</p>
                  <p>Crème Brûlée</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 font-playfair">
            Our Signature Dishes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wagyu Steak",
                description: "Premium grade beef with truffle sauce",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Seafood Platter",
                description: "Fresh daily catch with signature sauce",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Dessert Collection",
                description: "Assortment of house-made desserts",
                image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            ].map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {dish.title}
                    </h3>
                    <p className="text-white/90">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;