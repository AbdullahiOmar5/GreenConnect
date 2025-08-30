import React from "react";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Axmed Ali",
      role: "Beeraley",
      // location: "Afgoye, Shabeelada Dhexe",
      text: "Haddii madashan ay maanta jiri lahayd, waxaan heli lahaa talo khubaro iyo suuqyo aan si toos ah ula xiriiro. Waxay beddeli lahayd sida aan u beero oo waxay ii saamixi lahayd inaan qoyskeyga si fiican u taageero, beeraha aan hormarin ku sameeyo si loo kobciyo wax soo saarka.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Beeralay beeraha ka shaqeeya",
    },
    {
      id: 2,
      name: "Aamina Yusuf",
      role: "Ganacsato",
      // location: "Nairobi, Kenya",
      text: "Iyadoo la adeegsanayo qalabka qorsheynta maalgashiga, waxaan baran lahaa sida aan si xikmad leh lacagahayga ugu gelin karo beeraha. Taasi waxay igu kalifeysaa inaan si yar ku bilaabo, tallaabo tallaabo u koro, isla markaana aan si cad u ogaado khataraha iyo faa’iidooyinka.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Ka ganacsata beeraha",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Macalimad",
      // location: "Gujarat, India",
      text: "Iyada oo la adeegsanayo qalabka wadaagga aqoonta, waxaan si toos ah ugu keeni lahaa ardayda fasalka talooyin casri ah oo beeraley ah. Ardayda tuuladayda waxay baran lahaayeen habab cusub oo beeraha ah iyagoo da’yar, taasoo u diyaarinaysa mustaqbal wanaagsan.",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Macalimad cilmiga beeraha",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Codadka Bulshada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sheekooyin ka yimid bulshadeenna kuwaas oo noloshooda ay beddeli doonto xalalkayaga tiknoolajiyada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-[#76B947] opacity-60" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#76B947] text-[#76B947]"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-[#B1D8B7] shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#76B947] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#2F5233] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#76B947] font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {/* {testimonial.location} */}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-[#2F5233] to-[#76B947] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Diyaar ma u tahay inaad bulshadeena beddesho?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Ku biir kumanaan qof oo horey u sameeyay farqi
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2F5233] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B1D8B7] hover:text-[#2F5233] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Billow Safarkaaga
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
