import { Leaf, Cpu, Sprout, TrendingUp, ShieldClose, Lightbulb } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  icon: any;
  featured: boolean;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Waraabinta Caqliga leh: Sida IoT u Beddelayo Beeraha Soomaaliyeed",
    slug: "smart-irrigation-iot-somali-farms",
    excerpt: "Ogow sida nidaamyada waraabinta IoT ay uga caawinayaan beeraleyda Soomaaliyeed inay keydsadaan biyaha, kordhiyaan wax-soosaarka, isla markaana uga adkaadaan abaarta.",
    content: [
      "Somalia, beeraha waa laf-dhabarta dhaqaalaha iyo nolosha malaayiin qof. Haddana caqabadda ugu weyn ee beeraleydu wajahaan waa yaraanta biyaha, taasoo yaraysa wax-soosaarka dalagyada isla markaana khatar gelinaysa sugnaanta cuntada qaranka.",
      "Halkaan ayay ka soo muuqataa waraabinta caqliga leh ee ku dhisan IoT. Adigoo adeegsanaya dareemayaal cabbira qoyaanka ciidda, beeraleydu waxay si toos ah u ogaan karaan heerka biyaha ee dhulkooda, iyagoo helaya xog waqtigeeda ah oo hagaajinaysa jadwalka waraabinta.",
      "Nidaamyada waraabinta caqliga leh ee ku xiran moobilada ayaa u oggolaanaya beeraleyda inay si fog u xakameeyaan bamamka biyaha, taas oo hubinaysa in dalagyadu helaan qaddarka saxda ah ee biyo waqtiga ku habboon. Taasi waxay badbaadisaa biyo, shaqo, iyo kharashka tamarta.",
      "Ka baxsan beero gaar ah, waraabinta caqliga leh waxay gacan ka geysataa maaraynta waara ee biyaha bulshada. Iyadoo laga fogaanayo khasaaraha, beeraleydu waxay ilaaliyaan kheyraadka biyaha ee la wadaago sida wabiyada, ceelasha, iyo biyaha dhulka hoostiisa.",
      "Intaas waxaa dheer, isku darka waraabinta caqliga leh iyo saadaasha cimilada iyo falanqaynta AI waxay abuurtaa waraabin saadaal leh, halkaasoo go’aamada biyaha lagu saleeyo cimilada soo socota, nooca dalagga, iyo baahida ciidda.",
      "Saamaynta mustaqbalka fog waxay ka sii weyn tahay wax-soosaarka oo kaliya. Bulshooyinka waxay yeelan karaan adkaysi ka dhan ah isbeddelka cimilada, waxayna yarayn karaan khilaafaadka biyaha, iyagoo ilaalinaya amniga cuntada jiilasha soo socda."
    ],
    category: "Beeraha",
    date: "Febraayo 28, 2025",
    readTime: "6 daqiiqo akhris",
    image: "https://images.pexels.com/photos/30733229/pexels-photo-30733229.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Leaf,
    featured: true,
    author: "Dr. Abdiqani Hassan",
    tags: ["IoT", "Waraabin Caqli leh", "Somalia", "GreenConnect", "Maaraynta Biyaha"]
  },
  {
    id: 2,
    title: "Xakamaynta Cayayaanka Dijitaalka ah: Ilaalinta Dalagyada iyada oo Teknoolojiyad la adeegsanayo",
    slug: "digital-pest-control-agriculture",
    excerpt: "Sida qalabka dijitaalka ah ee cayayaanka loogu dagaallamayo ay uga caawinayaan beeraleyda Soomaaliyeed si hufan oo waara.",
    content: [
      "Cayayaanka dalagga sida ayaxa, cayayaanka stem borer, iyo armyworm-ka ayaa muddo dheer khatar ku ahaa beeraleyda Soomaaliyeed, mararka qaarkoodna waxay burburiyaan goosashada oo dhan.",
      "Xalka cusub ayaa ah xakamaynta cayayaanka dijitaalka ah, taas oo ku shaqeysa dareemayaal IoT, moodallo saadaalinta AI, iyo shabakado digniino bulsho ku dhisan. Nidaamyadani waxay si waqtigeeda ah u raacaan tirada cayayaanka waxayna u diraan digniino degdeg ah beeraleyda marka halis la ogaado.",
      "Markaas kadib, beeraleydu waxay qaadan karaan tallaabooyin bartilmaameed sida isticmaalka bio-pesticides, dabinno farsamo, ama xitaa ugaarsadayaasha dabiiciga ah. Tani waxay yaraynaysaa sunta kiimikada isla markaana dhowraysa deegaanka.",
      "Qaarkood madalaha waxay ku daraan AI si ay u saadaaliyaan cudurada mustaqbalka ku saleysan isbeddelka cimilada, wareegga dalagga, iyo xogta hore ee cayayaanka. Saadaashani waxay ka caawisaa beeraleyda inay ka hortagaan ka hor inta aysan dhibaatadu weynaan.",
      "Mustaqbalka, Soomaaliya waxay qaadan kartaa shabakado qaran oo bulshada ku dhisan si cayayaanka loogu wargeliyo, taasoo abuuraysa khariidado waqtigeeda ah oo digniin ah.",
      "Xakamaynta cayayaanka dijitaalka ahi ma aha oo keliya teknoolojiyad—waxay awood siisaa beeraleyda, ilaalisaa sugnaanta cuntada, waxayna dhiirrigelisaa beeris waarta."
    ],
    category: "Beeraha",
    date: "March 28, 2025",
    readTime: "5 daqiiqo akhris",
    image: "https://www.relentless-digital.com/wp-content/uploads/2023/08/Pest-Control-1.jpg?auto=compress&cs=tinysrgb&w=800",
    icon: ShieldClose,
    featured: false,
    author: "Prof. Hassan Ali",
    tags: ["Cayayaanka", "Beeraha Dijitaalka ah", "IoT", "Amniga Cuntada", "Somalia"]
  },
  {
    id: 3,
    title: "Maalgashiga Beeraha: Fursadaha Mustaqbalka Cagaaran ee Soomaaliya",
    slug: "investment-agriculture-somalia",
    excerpt: "Sababta beeraha Soomaaliya ay u yihiin fursadaha maalgashi ee ugu aan la taaban ee qaaradda Afrika.",
    content: [
      "Qaybta beeraha ee Soomaaliya waxay matalaysaa fursad weyn oo aan weli la taaban, iyadoo leh dhul bacrin ah, qorax badan, iyo dad ku tiirsan beero.",
      "Waxay ka koobantahay dalagyada, xoolaha, kalluumaysiga, iyo farsamaynta cuntooyinka—kuwaas oo dhammaantood ka faa’iidaysan kara tiknoolajiyad iyo maalgelin.",
      "Beeraha dijitaalka ah sida app-yada mobilada, madalaha talo bixinta, iyo qalabka beerista saxda ah ayaa ah goob horumar leh oo maalgashadayaashu ku maalgelin karaan hal-abuurnimo.",
      "Maalgashiga kaydinta, farsamaynta, iyo kaabayaasha silsiladda sahaydu waxay yareyn karaan khasaaraha goosashada kadib waxayna kordhin karaan faa’iidada beeraleyda iyo ganacsatada.",
      "Ugu dambeyntii, maalgashiga beeraha Soomaaliya ma aha oo keliya faa’iido dhaqaale—wuxuu taageeraa horumar waara, adkaysi ka dhan ah cimilada, iyo sugnaanta cuntada qaranka."
    ],
    category: "Maalgashi",
    date: "April 28, 2025",
    readTime: "7 daqiiqo akhris",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: TrendingUp,
    featured: false,
    author: "Layla Mohamed",
    tags: ["Maalgashi", "Ganacsiga Beeraha", "Somalia", "Dhaqaalaha Cagaaran", "GreenConnect"]
  },
  {
    id: 4,
    title: "Ganacsiga Galleyda: Laga soo bilaabo Beer ilaa Suuq",
    slug: "business-of-maize-farm-to-market",
    excerpt: "Baadhid sida galleyda Soomaaliyeed looga dhigi karo mid ka baxda nolol ku tiirsanaan una gudubta ganacsi faa’iido leh.",
    content: [
      "Galleydu waa dalagga ugu muhiimsan ee Soomaaliya, waxayna bixisaa cunto iyo dhaqaale. Haddana caqabado sida abuur tayo liita, cayayaanka, iyo kaydinta oo liidata ayaa xaddidaya.",
      "Suuqyada ayaa muhiim ah. Beeraley badan ayaa ku iibsha galleyda qiime hoose dhexdhexaadiyeyaasha, iyagoo ka luminaya fursado fiican.",
      "Farsamaynta kadib goosashada—sida shiididda ama u beddelidda quudinta xoolaha—waxay kordhisaa qiimaha, abuurtaa shaqo, waxayna dhiirrigelisaa ganacsi maxalli ah.",
      "Haddii la isku daro tiknoolajiyada, maalgashiga, iyo awood-siinta beeraleyda, galleydu waxay isu beddeli kartaa tiir dhaqaale cagaaran iyo amniga cuntada dalka.",
      "Sidoo kale, waxay ka caawin kartaa beeraleyda inay helaan suuqyo cusub oo ay ku iibin karaan dalagooda, iyagoo lasocona qiimaha uu marayo dalagoodu maalinkasta."
    ],
    category: "Maalgashi",
    date: "May 21, 2025",
    readTime: "6 daqiiqo akhris",
    image: "https://images.pexels.com/photos/13168947/pexels-photo-13168947.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Sprout,
    featured: false,
    author: "Yusuf Abdi",
    tags: ["Galley", "Ganacsiga Beeraha", "Silsiladda Qiimaha", "Somalia", "GreenConnect"]
  },
  {
    id: 5,
    title: "Dhisidda Buundooyin Dijitaal ah: Isku xirka Beeraleyda iyo Khubarada",
    slug: "building-digital-bridges-farmers-experts",
    excerpt: "Sida madalaha dijitaalka ah u beddelayaan beeraha Soomaaliyeed iyagoo isku xira beeraleyda, khubarada, iyo maal-gashadayaasha.",
    content: [
      "Caqabadda ugu weyn ee beeraleyda Soomaaliyeed wajahan waa helitaanka talo khubaro oo joogto ah, taas oo xaddidaysa awooddooda ay ugu gudbaan beero waara.",
      "Madalaha dijitaalka ah waxay bixiyaan xal xoog leh iyagoo noqda buundooyin isku xidha beeraleyda iyo khubarada. App-yada mobilada, adeegyada SMS-ka, iyo khadadka taleefanka ayaa bixiya talo waqtigeeda ah oo la jaanqaadeysa baahida beeraleyda.",
      "Madalahan waxay fududeeyaan wadaagga aqoonta ku saabsan hababka ugu fiican ee beerista, xakamaynta cayayaanka, iyo helitaanka suuqyada, taasoo ka caawisa beeraleyda inay go’aanno sax ah qaataan.",
      "Mustaqbalka fog, dhisidda isku xirnaanta dijitaalka ah waxay awood siisaa beeraleyda, waxayna ka qayb qaadataa beeris waara iyo hal-abuurnimo bulsho.",
      "In la isku xiro beeraleyda, khubarada, iyo maal-gashadayaasha, ayadoo la adeegsanayo teknoolijiyada casriga ah waxay abuurayaan bulsho ka dhameystiran dhinac walba."
    ],
    category: "Beeraha",
    date: "June 25, 2025",
    readTime: "5 daqiiqo akhris",
    image: "https://img.freepik.com/premium-photo/indian-agronomist-officer-with-farmer-agriculture-field-holding-whiteboard_621325-20.jpg?auto=compress&cs=tinysrgb&w=800",
    icon: Lightbulb,
    featured: false,
    author: "Asha Nur",
    tags: ["Madalaha Dijitaalka ah", "Taageerada Beeraleyda", "Wadaagga Aqoonta", "Somalia", "GreenConnect"]
  },
  {
    id: 6,
    title: "Kordhinta Wax-soosaarka Beeraha: Teknoolojiyada Casriga ah ee Beeraha",
    slug: "Kordhinta-wax-soosaarka-beeraha-teknoolojiyada-casriga-ah",
    excerpt: "Sida teknoolojiyada casriga ah ay u beddelayso beeraha Soomaaliya, iyadoo kordhinaysa wax-soosaarka, yareynaysa khasaaraha, isla markaana dhiirrigelisa waara.",
    content: [
      "Teknoolojiyada casriga ah ayaa si weyn u beddeshay beeraha adduunka, Soomaaliya-na ma aha mid ka reeban isbeddelkan. Laga soo bilaabo qalabka beerista saxda ah ilaa madalaha dijitaalka ah, teknoolojiyadani waxay beeraleyda siinayaan qalab ay ku kordhiyaan wax-soosaarkooda oo ay u wanaajiyaan waara.",
      "Qalabka beerista saxda ah sida drones-ka iyo dareemayaasha IoT ayaa bixiya xog faahfaahsan oo ku saabsan xaaladda ciidda, heerka qoyaan, iyo caafimaadka dalagga. Tani waxay u oggolaanaysaa beeraleyda inay go'aanno xog ogaal ah ka gaaraan waraabinta, bacriminta, iyo maaraynta cayayaanka, taasoo kordhisa wax-soosaarka isla markaana yareysa khasaaraha.",
      "Madalaha dijitaalka ah waxay bixiyaan talo khubaro, saadaasha cimilada, iyo helitaanka suuqyada, taasoo ka caawisa beeraleyda inay la qabsadaan isbeddelka cimilada oo ay helaan fursado cusub oo ganacsi.",
      "Farsamaynta kadib goosashada iyo kaydinta casriga ah ayaa yareysa khasaaraha kadib goosashada waxayna kordhisaa nolosha shelf-ka ee dalagyada, taasoo beeraleyda ka caawisa inay helaan qiimo wanaagsan oo suuqa ah.",
      "Intaa waxaa dheer, teknoolojiyada casriga ah waxay dhiirrigelisaa beeris waara iyadoo yaraynaysa isticmaalka kheyraadka sida biyaha iyo bacriminta, isla markaana ilaalinaysa caafimaadka dhulka iyo deegaanka.",
      "Mustaqbalka, qaadashada joogta ah ee teknoolojiyada casriga ah waxay noqon doontaa mid muhiim u ah horumarinta beeraha Soomaaliya, iyadoo abuuraysa fursado dhaqaale oo cusub, taageeraysa sugnaanta cuntada, isla markaana dhiirrigelisa waara."
    ],
    category: "Beeraha",
    date: "June 10, 2025",
    readTime: "8 daqiiqo akhris",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Leaf,
    featured: false,
    author: "Asha Nur",
    tags: ["Madalaha Dijitaalka ah", "Taageerada Beeraleyda", "Wadaagga Aqoonta", "Somalia", "GreenConnect"]
  }
];
