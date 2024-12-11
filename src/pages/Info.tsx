import { Clock, MapPin, Phone } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 font-playfair">About Us</h1>
        
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, our restaurant has been serving exceptional cuisine
                that combines traditional flavors with modern techniques. Our passionate
                team of chefs creates unforgettable dining experiences using only the
                finest ingredients.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in sustainable practices and work closely with local
                farmers and suppliers to ensure the highest quality ingredients
                while supporting our community.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-muted-foreground">Mon - Fri: 11am - 10pm</p>
            <p className="text-muted-foreground">Sat - Sun: 10am - 11pm</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">123 Dining Street</p>
            <p className="text-muted-foreground">Foodville, FD 12345</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-muted-foreground">Phone: (555) 123-4567</p>
            <p className="text-muted-foreground">Email: info@restaurant.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;