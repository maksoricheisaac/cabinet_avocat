import React from 'react';
import { Users, Award, MapPin, Clock, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Maître Jean-Baptiste KONGO',
      position: 'Avocat Associé Principal',
      specialization: 'Droit des Affaires & Droit Commercial',
      experience: '18 ans d\'expérience',
      education: 'Université Marien Ngouabi, Master en Droit des Affaires',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maître Marie-Claire MASSAMBA',
      position: 'Avocate Associée',
      specialization: 'Droit Civil & Droit de la Famille',
      experience: '12 ans d\'expérience',
      education: 'Université Omar Bongo (Gabon), Spécialisation Droit Civil',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maître Paul MOUANDA',
      position: 'Avocat Senior',
      specialization: 'Droit Pénal & Procédure',
      experience: '15 ans d\'expérience',
      education: 'Université de Brazzaville, Doctorat en Droit Pénal',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque dossier que nous traitons, avec une attention particulière aux détails et une expertise reconnue.'
    },
    {
      icon: Users,
      title: 'Intégrité',
      description: 'L\'éthique et l\'intégrité sont au cœur de notre pratique. Nous respectons la déontologie de notre profession avec rigueur.'
    },
    {
      icon: Briefcase,
      title: 'Professionnalisme',
      description: 'Notre approche professionnelle garantit un service de qualité adapté aux besoins spécifiques de chaque client.'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              À Propos de Notre Cabinet
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Découvrez l'équipe d'avocats expérimentés qui forme le Cabinet Juridique de Brazzaville, 
              votre partenaire de confiance pour tous vos besoins juridiques au Congo.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire du Cabinet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondé en 2009 à Brazzaville, notre cabinet d'avocats s'est rapidement imposé comme 
                une référence dans le conseil juridique au Congo. Nous avons bâti notre réputation 
                sur l'excellence de nos services et notre connaissance approfondie du droit congolais.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Aujourd'hui, notre équipe multidisciplinaire accompagne particuliers et entreprises 
                dans tous leurs défis juridiques, de la consultation simple aux affaires les plus complexes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-amber-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-gray-700">Dossiers traités</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700">Taux de satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bureau cabinet avocat Brazzaville"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Brazzaville</div>
                    <div className="text-sm text-gray-600">Congo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre pratique juridique et notre relation avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6 hover:bg-amber-200 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe d'Avocats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les avocats expérimentés qui composent notre cabinet juridique à Brazzaville
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`${member.name} avocat Brazzaville`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{member.position}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Briefcase className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{member.specialization}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{member.experience}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <GraduationCap className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{member.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications et Affiliations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Affiliations
            </h2>
            <p className="text-xl text-gray-600">
              Nos accréditations et appartenances professionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Barreau de Brazzaville</h3>
              <p className="text-gray-600 text-sm">Inscription officielle</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ordre des Avocats</h3>
              <p className="text-gray-600 text-sm">Membre actif</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Formation Continue</h3>
              <p className="text-gray-600 text-sm">Mise à jour régulière</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assurance Prof.</h3>
              <p className="text-gray-600 text-sm">Couverture complète</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;