import { useState } from 'react';
import { Button } from "@/components/ui/button";

const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

const menuItems = [
  {
    name: "Caesar Salad",
    category: "Starters",
    price: "$12",
    description: "Fresh romaine lettuce, parmesan cheese, croutons, and our house-made Caesar dressing",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    name: "Wagyu Steak",
    category: "Main Course",
    price: "$45",
    description: "Premium grade beef served with seasonal vegetables and red wine sauce",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d"
  },
  {
    name: "Chocolate Soufflé",
    category: "Desserts",
    price: "$14",
    description: "Warm chocolate soufflé served with vanilla ice cream",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814"
  },
  {
    name: "Craft Cocktail",
    category: "Drinks",
    price: "$16",
    description: "Seasonal craft cocktail made with premium spirits",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = menuItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 font-playfair">Our Menu</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;