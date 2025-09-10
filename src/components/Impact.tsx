import React, { useState } from 'react';
import { MessageSquare, Lightbulb, TrendingUp, X, Phone, MessageCircle } from 'lucide-react';

const Impact = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: MessageSquare,
      title: "Ma u baahan tahay latain joogto ah",
      description: "Helitaanka Degdegga ah ee Khubarada Beeraha iyada oo loo marayo madalsheenna. Ku xidhnow si toos ah, chat, wicitaanno muuqaal ah, ama telefoon si aad u hesho talooyin gaar ah oo ku habboon baahiyahaaga beereed.",
      details: [
        "Helitaan 24/7 ah oo lala yeesho khubaro beereed oo shahaado leh",
        "Kajawaabid degdeg ah oo loogu talagalay su’aalaha beeraleyda ee muhiimka ah",
        "Wicitaanno muuqaal ah oo lagu qiimeeyo dalagga si faahfaahsan",
        "Taageero telefoon oo lagu bixiyo luqado badan oo maxalli ah",
        "Isku xidhka khubaro ku takhasusay nooca dalaggaaga",
        "Daba-gal iyo la socodka horumarka la sameeyay"
      ]
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Makaa haysataa caqabad beertaada.",
      description: "Shabakaddeenna khubarada beeraha waxay bixisaa talooyin gaar ah oo ku saabsan maaraynta dalagga, xakamaynta cayayaanka, caafimaadka ciidda, iyo hababka beereed ee casriga ah ayadoo la adeegsanayo teknoolijiyada.",
      details: [
        "Istaraatijiyado gaar ah oo lagu maareeyo dalagga",
        "Xalal isku dhafan oo lagu xakameeyo cayayaanka",
        "Qiimeyn caafimaadka ciidda iyo qorsheyaal lagu hagaajinayo",
        "Talooyin ku saabsan hababka beereed ee waara",
        "Hagitaan ku saleysan saadaasha cimilada",
        "Talooyin ku saabsan waqtiga suuq-geynta iyo qiimeynta",
        "Taageero lagu helo shahaadada beeraleyda dabiiciga ah"
      ]
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Tabco beer adoon wax ka aqoon.",
      description: "Waxaad heli kartaa talooyin istiraatiiji ah oo ku saabsan sida ugu fiican ee loo maalgashado beeraha, tignoolajiyada casriga ah, iyo beeraleyda waarta—ha ahaato adiga oo ku cusub beeraha ama horay u lahaa beer.",
      details: [
        "Falanqeyn suuqyada beeraha iyo isbeddellada ganacsi",
        "Qiimeyn khatarta maalgashiga beeraleyda",
        "Xisaabinta faa’iidada teknoolojiyada cusub ee beeraha",
        "Fursado maalgashi oo ku saleysan beeraleyda waara",
        "Istaraatijiyado kala-duwanaansho ee faylalka maalgashiga",
        "Taageero baaritaan iyo hubin (due diligence) maalgashiga beeraha",
        "Qorsheynta iyo fulinta istaraatijiyada ka bixitaanka maalgashiga"
      ]
    }
  ];

const experts = [
  {
    name: "Dr. Abdiqani Hassan",
    role: "Khabiir Teknoolojiyada Beeraha",
    expertise: "AI & Beeraleyda Saxda ah",
    text: "Waxaan leeyahay in ka badan 15 sano oo khibrad ah oo ku saabsan teknoolojiyada beeraha. Waxaan beeraleyda ka caawiyaa hirgelinta xalal casri ah oo kor u qaada wax-soosaarka isla markaana yareeya saameynta deegaanka.",
    image: "./public/abdiqani.png?auto=compress&cs=tinysrgb&w=400",
    credentials: "PhD Injineernimada Beeraha, SNU, 15+ sano oo khibrad ah"
  },
  {
    name: "Dr. Shuayb Abdirashiid",
    role: "La-taliye Maalgashi",
    expertise: "Maalgashiga Beeraha & Maaliyadda",
    text: "Waxaan ku takhasusay isku xirka maalgeliyeyaasha iyo fursadaha faa’iidada leh ee beeraleyda. Khibradaydu waxay daboolaysaa maalgashiyada beeraleyda yaryar ilaa mashaariicda waaweyn ee ganacsiga beeraha.",
    image: "./public/shuayb.png?auto=compress&cs=tinysrgb&w=800",
    credentials: "MBA Maaliyadda, 12+ sano oo khibrad ah"
  },
  {
    name: "Dr. Fatima Abdullahi",
    role: "La-taliye Beeraleyda Waara",
    expertise: "Beeraleyda Dabiiciga ah & Waarta",
    text: "Waxaan beeraleyda ku hago sidii ay ugu gudbi lahaayeen hab-beereed waara oo dabiici ah. Diiraddaydu waa dhisidda nidaamyo beereed adkaysi leh oo faa’iido u leh beeraleyda iyo deegaanka labadaba.",
    image: "./public/faadumo.png?auto=compress&cs=tinysrgb&w=400",
    credentials: "PhD Beeraha Waara, 10+ sano oo la-talin ah"
  }
];


  const whatsappNumber = "+252619559755";
  
  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Hi! I'm interested in learning more about your "${serviceName}" service. Could you please provide more information?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Adeegeena
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Xalal dhamaystiran oo isku xira beeraleyda, khubarada, iyo maalgashadayaasha si loo horumariyo nidaamka beeraha.
          </p>
        </div>
        
        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#76B947] to-[#94C973] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-bold text-[#2F5233] mb-4">
                {service.title}
              </div>
              <div className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </div>
              <div className="text-[#76B947] font-semibold group-hover:text-[#2F5233] transition-colors duration-300">
                Riix halkaan →
              </div>
            </div>
          ))}
        </div>
        
        {/* Experts */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-[#2F5233] text-center mb-12">
            La kulan Khubaradayada
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#B1D8B7] shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-[#2F5233] mb-1">
                    {expert.name}
                  </h4>
                  <p className="text-[#76B947] font-semibold mb-1">
                    {expert.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {expert.expertise}
                  </p>
                  <p className="text-xs text-gray-400">
                    {expert.credentials}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-center italic">
                  "{expert.text}"
                </p>
                <div className="text-center mt-6">
                  <button 
                    onClick={() => handleWhatsAppClick(`consultation with ${expert.name}`)}
                    className="bg-[#76B947] text-white px-6 py-2 rounded-full font-medium hover:bg-[#2F5233] transition-colors duration-300"
                  >
                    Connect with {expert.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#76B947] to-[#94C973] rounded-full flex items-center justify-center">
                    {React.createElement(services.find(s => s.id === selectedService)?.icon || MessageSquare, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2F5233]">
                    {services.find(s => s.id === selectedService)?.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {services.find(s => s.id === selectedService)?.description}
              </p>

              {/* Service Details */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#2F5233] mb-4">Adeegyada aad helayso:</h4>
                <ul className="space-y-3">
                  {services.find(s => s.id === selectedService)?.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#76B947] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsAppClick(services.find(s => s.id === selectedService)?.title || '')}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Nagala soo xiriir WhatsApp
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    // Scroll to contact section or navigate to contact page
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/Green-Tech/#/contact';
                    }
                  }}
                  className="flex-1 bg-[#76B947] hover:bg-[#2F5233] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Halkaan nagala soo xiriir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Impact;