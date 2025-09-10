import React from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Handshake,
  Award,
  Globe,
  Leaf,
} from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Abdifitah Elmi",
      role: "Hogaamiye",
      expertise: "Bartay cilmiga Tiknoolajiyada",
      bio: "Hoggaamiya qorsheynta istiraatiijiga ah iyo la macaamilka maalgashadayaasha.",
      image: "./public/abdifatah.png?auto=compress&cs=tinysrgb&w=400",
      education:
        "Studies Computer Science and Information Technology at Somali National University of Mogadishu",
    },
    {
      name: "Shuayb Abdirashiid",
      role: "La-taliye Beeraha",
      expertise: "Wax ka bartay cilmiga beeraha",
      bio: "Hoggaamiya qorsheynta beeraha iyo qiimeynta goobaha beeraleyda.",
      image: "./public/shuayb.png?auto=compress&cs=tinysrgb&w=400",
      education:
        "Studies Agriculture Science at Banaadir University of Mogadishu",
    },
    {
      name: "Abdullahi Omar",
      role: "Hoggaamiyaha Farsamada",
      expertise: "Bartay cilmiga Tiknoolajiyada",
      bio: "Kormeera howlaha xarunta wicitaanka iyo habraacyada shaqo.",
      image: "./public/abdullahi_1.png?auto=compress&cs=tinysrgb&w=400",
      education:
        "Studies Computer Science and Information Technology at Somali National University of Mogadishu",
    },
    {
      name: "Abdiqani Hassan",
      role: "Madaxa Dhexgalka Beeraleyda",
      expertise: "Horumarinta Beeralayda & Tababarada",
      bio: "Naqshadeeya Qorshayaal Beereed oo Fudud oo loogu talagalay Maalgashadayaasha Cusub.",
      image: "./public/abdiqani.png?auto=compress&cs=tinysrgb&w=400",
      education:
        "Studies Agriculture Science at Somali National University of Mogadishu",
    },
    {
      name: "Fatima Abdullahi",
      role: "Taageerada Beeraleyda & Faafinta Macluumaadka",
      expertise: "Bararida Beeraleyda & Xalinta Dhibaatooyinka",
      bio: "Waxa ay bixiyaa talooyin khubaro oo si cad loo fahmi karo, isla markaana si toos ah loo adeegsan karo si loo gaaro natiijooyin la taaban karo.",
      image: "./public/faadumo.png?auto=compress&cs=tinysrgb&w=400",
      education: "Baratay Cilmiga Beeraha Jaamacadda Ummadda ee Muqdisho",
    },
  ];

  const partners = [
    {
      name: "Wasaaradda Beeraha",
      type: "Government Partner",
      description:
        "Strategic partnership for policy development and farmer outreach programs",
      logo: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Agricultural Development Bank",
      type: "Financial Partner",
      description:
        "Providing financial services and investment opportunities for farmers",
      logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "International Food Organization",
      type: "NGO Partner",
      description:
        "Collaborative programs for food security and sustainable agriculture",
      logo: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Agricultural Universities & Research",
      type: "Technology Partner",
      description:
        "Innovation support and technology infrastructure development",
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Farmers Cooperative Union",
      type: "Community Partner",
      description:
        "Direct connection with farming communities and cooperative networks",
      logo: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Green Investment Fund",
      type: "Investment Partner",
      description:
        "Sustainable agriculture investment and funding opportunities",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2F5233] to-[#76B947] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">GreenConnect</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Isku xidhka beeraha iyo tignoolajiyada casriga ah si loo abuuro
            xalal waara oo beeraleyda ah
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[#2F5233] mb-6">
                Taariikhdeena
              </h2>
              <div className="space-y-6 text-lg text-[#2F5233] leading-relaxed">
                <p>
                  waxaa la aasaasay 2025, GreenConnect waxa ay kasoo farcantay
                  aragti fudud balse awood leh: in la balaariyo ama la xoojiyo
                  helitaanka tignoolajiyada iyo khibradda beeraha gudaha somalia
                  iyo meelaha ka baxsan. Waxaan garwaaqsanay in bulshooyinka
                  beeraleydu ay lahaayeen xikmad jiilal badan ah, balse inta
                  badan ay ka maqnaayeen qalabka casriga ah iyo suuqyada kordhin
                  lahaa saamayntooda.
                </p>
                <p>
                  Mareegteennu waxa ay ku xidhaa beeraleyda khubaro dhinaca
                  beeraha ah, maalqashadayaal, iyo suuqyo iyada oo loo marayo
                  xalal tignoolaji oo hal-abuur leh...
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <img
                src="https://www.agriplast.co.in/uploads/blogs/18.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Agricultural technology in action"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 bg-[#76B947] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#2F5233] mb-6">
              Himiladeenna
            </h3>
            <p className="text-lg text-[#2F5233] leading-relaxed mb-6">
              Inaga oo adeegsanayna xalal tiknoolajiyadeed oo sahlan lana heli
              karo, waxaan awood siinaynaa bulshooyinka beeraleyda si loo
              kordhiyo wax-soosaarka iyo Badqabka loona yareeyo khataraha ay
              wajahaan beeralayda soomaliyeed.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-[#76B947] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#2F5233] mb-6">
              Hammigeenna
            </h3>
            <p className="text-lg text-[#2F5233] leading-relaxed mb-6">
              GreenConnect waxay xallinaysaa caqabadaha beeraleyda Soomaaliyeed
              iyada oo la adeegsanayo tiknoolajiyad la heli karo, la-talin
              khubaro, iyo isku-xir wax-ku-ool ah oo u dhexeeya beeraleyda,
              maalgeliyeyaasha, iyo khubarada.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
              La kulan Kooxdeena GreenConnect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#B1D8B7] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#B1D8B7] shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-[#2F5233] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#76B947] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    {member.education}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Xulufadeenna
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#B1D8B7] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-3 border-[#B1D8B7] shadow-md"
                />
                <div className="text-[#76B947] font-medium mb-2">
                  {partner.type}
                </div>
                <h3 className="text-lg font-bold text-[#2F5233] mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up rounded-2xl">
          <Award className="w-16 h-16 mx-auto mb-6 text-[#76B947]" />
          <h3 className="text-3xl md:text-4xl font-bold text-[#2F5233] mb-6">
            Diyaar Ma U Tahay Inaad Ku Biirto Hadafkeenna?
          </h3>
          <p className="text-xl mb-8 text-[#2F5233] opacity-90 max-w-2xl mx-auto">
            Haddii aad tahay beeraley doonaya talo khubaro, maalgaliye raadinaya
            fursado — waan ku farxi lahayn inaan kula xiriirno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Green-Tech/#/contact"
              className="bg-[#76B947] text-[#F7F7F7] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2F5233] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nala Soo Xiriir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
