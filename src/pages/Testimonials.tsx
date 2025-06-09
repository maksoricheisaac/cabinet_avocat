import React from 'react';
import { Star, Quote, User, Building, Calendar } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Monsieur DIBAMBA Jean-Claude',
      position: 'Directeur Général',
      company: 'SARL CONGO IMPORT',
      rating: 5,
      date: 'Novembre 2024',
      content: 'Excellent cabinet d\'avocats ! Maître KONGO nous a accompagnés dans la création de notre société et la rédaction de nos contrats commerciaux. Service professionnel et conseils très pertinents. Je recommande vivement ce cabinet juridique à Brazzaville.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Création d\'entreprise et conseil commercial'
    },
    {
      name: 'Madame NZABA Marie-Paule',
      position: 'Propriétaire',
      company: 'Résidence Les Palmiers',
      rating: 5,
      date: 'Octobre 2024',
      content: 'Nous avons fait appel au cabinet pour un contentieux immobilier complexe. Maître MASSAMBA a géré notre dossier avec une grande expertise. Résolution rapide et efficace de notre problème. Un grand merci à toute l\'équipe !',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Contentieux immobilier'
    },
    {
      name: 'Monsieur OKEMBA Paul',
      position: 'Chef d\'Entreprise',
      company: 'OKEMBA & Associés SARL',
      rating: 5,
      date: 'Septembre 2024',
      content: 'Cabinet très professionnel ! J\'ai été assisté par Maître MOUANDA dans une affaire pénale délicate. Défense remarquable et résultats à la hauteur de mes attentes. Je recommande ce cabinet d\'avocats sans hésitation.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Défense pénale'
    },
    {
      name: 'Madame MBEMBA Sylvie',
      position: 'Directrice RH',
      company: 'CONGO TELECOM',
      rating: 5,
      date: 'Août 2024',
      content: 'Notre entreprise fait régulièrement appel à ce cabinet pour nos questions de droit du travail. Conseils toujours avisés et intervention rapide. L\'équipe maîtrise parfaitement le droit social congolais.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Conseil en droit du travail'
    },
    {
      name: 'Monsieur LOUBAKI André',
      position: 'Particulier',
      company: 'Succession familiale',
      rating: 5,
      date: 'Juillet 2024',
      content: 'Famille très satisfaite de l\'accompagnement du cabinet dans le règlement de notre succession. Procédures bien expliquées, démarches simplifiées. Maître MASSAMBA a su nous rassurer et nous guider efficacement.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Droit des successions'
    },
    {
      name: 'Madame KOUKA Béatrice',
      position: 'Commerçante',
      company: 'Marché Total de Bacongo',
      rating: 5,
      date: 'Juin 2024',
      content: 'J\'ai consulté le cabinet pour un litige commercial. Service impeccable, tarifs raisonnables et résolution rapide de mon problème. Les avocats sont à l\'écoute et très compétents. Cabinet à recommander à Brazzaville !',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      case: 'Litige commercial'
    }
  ];

  const stats = [
    {
      icon: User,
      number: '500+',
      label: 'Clients Satisfaits'
    },
    {
      icon: Building,
      number: '95%',
      label: 'Taux de Réussite'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Note Moyenne'
    },
    {
      icon: Calendar,
      number: '15+',
      label: 'Années d\'Expérience'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez les retours de nos clients sur les services de notre cabinet d'avocats 
              à Brazzaville. Leur satisfaction est notre priorité.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retours authentiques de particuliers et entreprises ayant fait appel 
              à notre cabinet juridique à Brazzaville
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} client avocat Brazzaville`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-amber-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex space-x-1 mr-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>

                <div className="mb-4">
                  <Quote className="h-8 w-8 text-amber-600 opacity-50 mb-2" />
                  <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                </div>

                <div className="border-t pt-4">
                  <span className="text-sm text-gray-600 font-medium">
                    Affaire : {testimonial.case}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Notre Engagement Satisfaction
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Votre satisfaction est notre priorité absolue. Nous nous engageons à vous fournir 
                  un service juridique d'excellence adapté à vos besoins spécifiques.
                </p>
                <div className="space-y-4">
                  {[
                    'Consultation initiale gratuite',
                    'Devis transparent et détaillé',
                    'Suivi personnalisé de votre dossier',
                    'Disponibilité et réactivité garanties'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-amber-600 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl font-bold text-amber-400 mb-2">95%</div>
                  <div className="text-2xl font-semibold mb-4">Taux de Satisfaction</div>
                  <p className="text-blue-100">
                    Nos clients recommandent massivement notre cabinet juridique à Brazzaville
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Confiez-nous votre dossier juridique et bénéficiez de l'expertise 
            de notre cabinet d'avocats reconnu à Brazzaville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              Prendre Rendez-vous
            </a>
            <a
              href="tel:+24206XXXXXXX"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors font-semibold text-lg"
            >
              Nous Appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;