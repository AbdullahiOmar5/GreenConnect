import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <CheckCircle className="w-20 h-20 text-[#76B947] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#2F5233] mb-4">
              Mahadsanid!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fariintaada waa la helay, waxaana laguu soo jawaabi doonaa 24
              saacadood gudahood.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#76B947] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2F5233] transition-colors duration-300"
            >
              Dir Fariin Kale
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-6">
            Nala Soo Xidhiidh Maantaba
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diyaar ma u tahay inaad farqi sameyso? Aan ka wada hadalno sida aan
            iskaashi ugu samayn karno isbeddel wanaagsan oo bulsheed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#2F5233] mb-2"
                >
                  Magacaaga *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#76B947] focus:border-transparent transition-colors duration-300 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Magacaaga oo dhamaystiran geli"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2F5233] mb-2"
                >
                  Cinwaanka Emailka *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#76B947] focus:border-transparent transition-colors duration-300 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="emailkaaga.tusaale@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#2F5233] mb-2"
                >
                  Telefoonka
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#76B947] focus:border-transparent transition-colors duration-300"
                  placeholder="+252 61 195-9704"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2F5233] mb-2"
                >
                  Fariin *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#76B947] focus:border-transparent transition-colors duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Noo sheeg mashruucaaga ama su'aashaada..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#76B947] to-[#94C973] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#2F5233] hover:to-[#76B947] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Diraya...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Dir Fariinta
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-[#2F5233] to-[#76B947] rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Xogta Xiriirka</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cinwaanka Emailka</h4>
                    <p className="opacity-90">hello@yourcompany.com</p>
                    <p className="opacity-90">support@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefoon</h4>
                    <p className="opacity-90">+252 61 195-9704</p>
                    <p className="opacity-90">+252 61 195-9704</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Xafiiska</h4>
                    <p className="opacity-90">123 Waddada Maka al Mukarama</p>
                    <p className="opacity-90">
                      Degmada Hodan, TCC 12345
                    </p>
                    <p className="opacity-90">Mogadishu</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <h4 className="font-semibold mb-4">Saacadaha Shaqada</h4>
                <div className="space-y-2 opacity-90">
                  <p>Sabti - Khamiis: 8:00 AM - 6:00 PM</p>
                  <p>Jimco: Mashaqayno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
