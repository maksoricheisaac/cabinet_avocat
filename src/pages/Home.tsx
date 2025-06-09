import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Phone, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expertise Reconnue',
      description: 'Plus de 15 ans d\'expérience dans le conseil juridique à Brazzaville et au Congo.'
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Avocats diplômés et spécialisés dans différents domaines du droit congolais.'
    },
    {
      icon: Award,
      title: 'Excellence Professionnelle',
      description: 'Approche personnalisée et résultats probants pour chaque dossier confié.'
    }
  ];

  const services = [
    'Droit des Affaires',
    'Droit Civil et Commercial',
    'Droit Pénal',
    'Droit Immobilier',
    'Droit du Travail',
    'Droit Familial'
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+24206XXXXXXX';
    const message = encodeURIComponent('Bonjour, je souhaiterais prendre rendez-vous pour une consultation juridique.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in-left">
                Votre Cabinet d'<span className="text-amber-400 animate-pulse">Avocats</span> à Brazzaville
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Excellence juridique et conseil professionnel au cœur du Congo. 
                Nous défendons vos droits avec expertise et intégrité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center group hover:scale-105 transform active:scale-95"
                >
                  Consultation WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+24206XXXXXXX"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg flex items-center justify-center hover:scale-105 transform active:scale-95"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler Maintenant
                </a>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h3>
                <div className="space-y-4">
                  {['Consultation personnalisée', 'Réactivité et disponibilité', 'Tarifs transparents', 'Résultats prouvés'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                      <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un Cabinet Juridique de Confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis plus de 15 ans, notre cabinet d'avocats accompagne particuliers et entreprises 
              à Brazzaville avec un service juridique d'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in-up hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-amber-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-amber-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nos Domaines d'Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe d'avocats spécialisés couvre tous les aspects du droit congolais 
                pour répondre à vos besoins juridiques.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/domaines-de-droit"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg group transition-all duration-300 hover:scale-105"
              >
                Découvrir tous nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Avocat cabinet juridique Brazzaville"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl animate-bounce hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-800"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Besoin d'un Conseil Juridique ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contactez notre cabinet d'avocats à Brazzaville pour une consultation personnalisée. 
            Nous vous accompagnons dans toutes vos démarches juridiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleWhatsAppClick}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg hover:scale-105 transform active:scale-95"
            >
              Consultation WhatsApp
            </button>
            <a
              href="tel:+24206XXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg hover:scale-105 transform active:scale-95"
            >
              Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;