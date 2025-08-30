import React from 'react';
import { Calendar, ArrowRight, Leaf, Cpu, Sprout, TrendingUp } from 'lucide-react';

const Insights = () => {
  const articles = [
  {
    id: 1,
    title: "Smart Irrigation: How IoT is Transforming Somali Farms",
    slug: "smart-irrigation-iot-somali-farms",
    excerpt: "Discover how IoT-based irrigation systems are helping Somali farmers save water, improve yields, and build resilience against drought.",
    content: [
      "In Somalia, agriculture is both the backbone of the economy and the livelihood of millions. Yet, one of the biggest challenges farmers face is water scarcity...",
      "This is where IoT-based smart irrigation comes in. Using soil-moisture sensors, farmers can monitor the exact level of water in their fields...",
      "The long-term impact of smart irrigation goes beyond individual farms. By saving water, communities can protect shared resources..."
    ],
    category: "Agriculture",
    date: "February 28, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800", // farmer using irrigation system
    icon: Cpu,
    featured: true,
    author: "Dr. Amina Warsame",
    tags: ["IoT", "Smart Irrigation", "Somalia", "Agritech", "Water Management"]
  },
  {
    id: 2,
    title: "Digital Pest Control: Protecting Crops with Technology",
    slug: "digital-pest-control-agriculture",
    excerpt: "How digital pest control tools are helping Somali farmers fight pests efficiently and sustainably.",
    content: [
      "Crop pests like locusts, stem borers, and armyworms have long threatened Somali farmers...",
      "Enter digital pest control, an emerging solution powered by sensors, AI, and community networks...",
      "In the future, Somalia could adopt community-based pest surveillance networks..."
    ],
    category: "Agriculture",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800", // pest inspection
    icon: Cpu,
    featured: false,
    author: "Prof. Hassan Ali",
    tags: ["Pest Control", "Digital Agriculture", "IoT", "Food Security", "Somalia"]
  },
  {
    id: 3,
    title: "Investment in Agriculture: Opportunities in Somalia’s Green Future",
    slug: "investment-agriculture-somalia",
    excerpt: "Why Somalia’s agricultural sector offers one of the biggest untapped opportunities for investors and innovators.",
    content: [
      "Somalia’s agriculture sector represents one of the greatest untapped opportunities in Africa...",
      "Digital agriculture is another frontier for investors...",
      "In conclusion, investing in Somalia’s agriculture is not just about profit..."
    ],
    category: "Investment",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800", // finance/investment meeting
    icon: Cpu,
    featured: false,
    author: "Layla Mohamed",
    tags: ["Investment", "Agribusiness", "Somalia", "Green Economy", "AgriTech"]
  },
  {
    id: 4,
    title: "The Business of Maize: From Farm to Market",
    slug: "business-of-maize-farm-to-market",
    excerpt: "Exploring how Somali maize can shift from a survival crop to a profitable agribusiness driver.",
    content: [
      "Maize is one of the most important staple crops in Somalia...",
      "Market access is equally important. Many farmers sell their maize at low prices...",
      "With the right mix of technology, investment, and farmer empowerment..."
    ],
    category: "Investment",
    date: "February 28, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/13168947/pexels-photo-13168947.jpeg?auto=compress&cs=tinysrgb&w=800", // maize market photo
    icon: Cpu,
    featured: false,
    author: "Yusuf Abdi",
    tags: ["Maize", "Agribusiness", "Value Chain", "Somalia", "AgriTech"]
  },
  {
    id: 5,
    title: "Building Digital Bridges: Connecting Farmers and Experts",
    slug: "building-digital-bridges-farmers-experts",
    excerpt: "How digital platforms are transforming Somali agriculture by connecting farmers, experts, and investors.",
    content: [
      "One of the biggest challenges Somali farmers face is the lack of access to expert guidance...",
      "Digital platforms offer a powerful solution by acting as bridges...",
      "In the long run, building strong digital connections will not only empower farmers..."
    ],
    category: "Agriculture",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "https://img.freepik.com/premium-photo/indian-agronomist-officer-with-farmer-agriculture-field-holding-whiteboard_621325-20.jpg?auto=compress&cs=tinysrgb&w=800", // farmer and expert using phone
    icon: Cpu,
    featured: false,
    author: "Asha Nur",
    tags: ["Digital Platforms", "Farmer Support", "Knowledge Sharing", "Somalia", "AgriTech"]
  }
];

  const categories = ["All", "Agriculture", "Investment"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section className="py-20 bg-gray-50" id="insights">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Fikradaha & Maqaallada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in agricultural technology and digital innovation
            Hel xogtii u dambaysay ee ku saabsan beeraha 
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#76B947] text-white shadow-md'
                    : 'text-[#2F5233] hover:bg-[#B1D8B7] hover:bg-opacity-30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "All" && (
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <featuredArticle.icon className="w-5 h-5 text-[#76B947]" />
                    <span className="text-[#76B947] font-medium">{featuredArticle.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">Featured</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2F5233] mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </div>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <button className="group flex items-center gap-2 text-[#76B947] font-semibold hover:text-[#2F5233] transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === "All" ? regularArticles : filteredArticles).map((article, index) => (
            <div 
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
                    <article.icon className="w-4 h-4 text-[#76B947]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#76B947] font-medium text-sm">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2F5233] mb-3 leading-tight line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <button className="group flex items-center gap-1 text-[#76B947] font-semibold hover:text-[#2F5233] transition-colors duration-300 text-sm">
                    Read
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <button className="bg-gradient-to-r from-[#76B947] to-[#94C973] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#2F5233] hover:to-[#76B947] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;