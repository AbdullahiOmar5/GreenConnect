import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, MessageCircle, Leaf, Award, Shield } from 'lucide-react';

const Products = () => {
  const whatsappNumber = "+252619559755";
  
  const handleWhatsAppClick = (productName: string) => {
    const message = `Hi! I'm interested in purchasing the ${productName} for $20. Could you please provide more information about availability and delivery?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    {
      id: 1,
      name: "AgriBoost Premium Fertilizer",
      price: 20,
      originalPrice: 35,
      rating: 4.8,
      reviews: 127,
      image: "https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium organic fertilizer blend designed to boost crop yields and improve soil health. Perfect for all types of crops and farming conditions.",
      features: [
        "100% Organic ingredients",
        "Increases yield by up to 40%",
        "Improves soil structure",
        "Slow-release formula"
      ],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "NutriGrow Plant Supplement",
      price: 20,
      originalPrice: 30,
      rating: 4.7,
      reviews: 89,
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced plant nutritional supplement with essential micronutrients for healthy plant growth and development.",
      features: [
        "Essential micronutrients",
        "Fast absorption formula",
        "Suitable for all plants",
        "Eco-friendly composition"
      ],
      badge: "NEW"
    },
    {
      id: 3,
      name: "GreenMax Soil Enhancer",
      price: 20,
      originalPrice: 28,
      rating: 4.9,
      reviews: 156,
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Soil conditioning supplement that improves soil structure, water retention, and nutrient availability for optimal plant growth.",
      features: [
        "Improves soil structure",
        "Enhances water retention",
        "Increases nutrient uptake",
        "Long-lasting effects"
      ],
      badge: "TOP RATED"
    },
    {
      id: 4,
      name: "CropVital Nutrition Booster",
      price: 20,
      originalPrice: 32,
      rating: 4.6,
      reviews: 73,
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive nutrition booster that provides essential vitamins and minerals for stronger, healthier crops.",
      features: [
        "Complete vitamin complex",
        "Mineral enriched formula",
        "Strengthens plant immunity",
        "Weather resistant"
      ],
      badge: "PREMIUM"
    },
    {
      id: 5,
      name: "EcoFert Organic Blend",
      price: 20,
      originalPrice: 26,
      rating: 4.8,
      reviews: 112,
      image: "https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "100% organic fertilizer blend made from natural ingredients, perfect for sustainable farming practices.",
      features: [
        "Certified organic",
        "Natural ingredients only",
        "Sustainable farming",
        "Chemical-free formula"
      ],
      badge: "ORGANIC"
    },
    {
      id: 6,
      name: "HarvestMax Growth Formula",
      price: 20,
      originalPrice: 29,
      rating: 4.7,
      reviews: 94,
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized growth formula designed to maximize harvest yields and improve crop quality during critical growth phases.",
      features: [
        "Maximizes harvest yields",
        "Improves crop quality",
        "Growth phase specific",
        "Easy application"
      ],
      badge: "EFFECTIVE"
    },
    {
      id: 7,
      name: "PlantPower Complete Nutrition",
      price: 20,
      originalPrice: 33,
      rating: 4.9,
      reviews: 168,
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "All-in-one complete nutrition solution providing everything plants need for optimal growth, health, and productivity.",
      features: [
        "Complete nutrition solution",
        "All-in-one formula",
        "Optimal plant health",
        "Maximum productivity"
      ],
      badge: "COMPLETE"
    }
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#006838] mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium agricultural products designed to enhance your farming success and maximize crop yields
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-[#ffd600] text-[#006838] px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-4 h-4 text-[#038f00]" />
                  <span className="text-[#038f00] font-medium text-sm">ORGANIC CERTIFIED</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#006838] mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#ffd600] text-[#ffd600]' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#006838]">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <div className="w-1 h-1 bg-[#038f00] rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    to="/contact"
                    className="w-full bg-[#006838] hover:bg-[#038f00] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now - ${product.price}
                  </Link>
                  
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-8 mb-12 animate-fade-in-up">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-[#038f00]" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award className="w-5 h-5 text-[#038f00]" />
            <span>Quality Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Leaf className="w-5 h-5 text-[#038f00]" />
            <span>Organic Certified</span>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-[#006838] to-[#038f00] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Boost Your Harvest?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of satisfied farmers who have increased their yields with our premium products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-[#ffd600] text-[#006838] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop All Products
              </Link>
              <button 
                onClick={() => handleWhatsAppClick("product consultation")}
                className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white border-opacity-30"
              >
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;