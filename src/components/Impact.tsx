import React from 'react';
import { MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';

const Impact = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Isku Xirka & Wadahadalka Khubarada",
      description: "La xiriir khubarada beeraha isla markiiba. Si aad u hesho La talin shaqsiyeed oo ku habboon beerataada iyo baahiyahaaga."
    },
    {
      icon: Lightbulb,
     title: "Talooyin Gaar ah oo Beeraleyda",
      description: "Khubaradeena waxay bixiyaan talooyin la taaban karo oo ku saabsan dalagyada, cayayaanka, ciidda, waraabka iyo wax soosaarka."
    },
    {
      icon: TrendingUp,
      title: "Qorsheynta Maalgashiga Beeraha",
      description: "Hagid maalgashi oo fudud oo loogu talagalay dadka raba inay maal gashadaan beeraha si faa’iido la hubiyo ay u sameeyaan."
  }
  ];

  const experts = [
    {
      name: "Dr. Amina Yusuf",
      role: "Cilmibaare Beeraha",
      expertise: "Khabiir ku takhasusay waraabka",
      text: "Waxaan leeyahay in ka badan 15 sano oo waayo-aragnimo ah oo ku saabsan waraabka iyo maaraynta biyaha. Waxaan caawiya beeraleyda sidii ay u naqshadeyn lahaayeen uguna hirgelin lahaayeen nidaamyo waraab oo hufan, kuwaas oo badbaadiya biyaha, dhimaya kharashaadka, isla markaana kordhiya wax-soosaarka dalagyada.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "PhD Injineernimada Beeraha, SNU"
    },
    {
      name: "Abdi Bile",
      role: "La-taliye Maalgashi",
      expertise: "Maalgashiga & Maaliyadda Beeraha",
      text: "Waxaan ku takhasusay isku xirka maal-gashadayaasha iyo fursadaha faa’iidada leh ee beeraha. Khibradeydu waxay u dhaxaysaa maalgashiga beeraha yaryar ilaa ganacsiyada waaweyn ee beeraha. Waxaan xiise gaar ah u leeyahay dhisidda iskaashi waara oo soo saara dakhli beeraleyda iyo qiime waara oo maal-gashadayaasha ah.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "MBA Finance, SNU"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "La-taliye Beeraha",
      expertise: "Beeraha Waara & Joogtaynta",
      text: "Waxaan beeraleyda ku hago sidii ay ugu gudbi lahaayeen beer-fal waara iyo organic. Diiradeydu waa dhisidda nidaamyo adkaysi leh oo faa’iido u leh beeraleyda iyo deegaanka labadaba. Waxaan ka go’an tahay inaan bulshooyinka ku taageero xalal deegaanka u wanaagsan oo xaqiijiya amniga cuntada jiilalka soo socda.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "PhD Beeraha Waara"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Adeegyadeena
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Xalal dhameystiran oo isku xira beeraleyda, khubarada, iyo maal-gashadayaasha beeraha.
          </p>
        </div>
        
        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#76B947] to-[#94C973] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-bold text-[#2F5233] mb-4">
                {service.title}
              </div>
              <div className="text-gray-600 leading-relaxed">
                {service.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* Experts */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-[#2F5233] text-center mb-12">
            Lakalun Khubaradeena
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
                  <button className="bg-[#76B947] text-white px-6 py-2 rounded-full font-medium hover:bg-[#2F5233] transition-colors duration-300">
                    La xiriir {expert.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;