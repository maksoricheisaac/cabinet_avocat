import React from 'react';
import { 
  Briefcase, 
  Home, 
  Shield, 
  Users, 
  Building, 
  FileText,
  Scale,
  Heart,
  Car,
  Gavel
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Droit des Affaires',
      description: 'Conseil juridique pour entreprises, création de sociétés, contrats commerciaux, fusions-acquisitions.',
      details: [
        'Création et structuration d\'entreprises',
        'Rédaction de contrats commerciaux',
        'Conseil en gouvernance d\'entreprise',
        'Accompagnement dans les opérations de M&A',
        'Résolution de conflits commerciaux'
      ],
      image: 'https://images.pexels.com/photos/7415065/pexels-photo-7415065.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Droit Immobilier',
      description: 'Transactions immobilières, baux commerciaux et d\'habitation, copropriété, contentieux immobilier.',
      details: [
        'Vente et acquisition de biens immobiliers',
        'Rédaction et négociation de baux',
        'Droit de la copropriété',
        'Contentieux immobilier',
        'Conseil en investissement immobilier'
      ],
      image: 'https://images.pexels.com/photos/7641850/pexels-photo-7641850.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Droit Pénal',
      description: 'Défense pénale, assistance lors des gardes à vue, représentation devant les tribunaux pénaux.',
      details: [
        'Défense en matière pénale',
        'Assistance lors des gardes à vue',
        'Représentation devant les tribunaux',
        'Procédures d\'appel',
        'Droit pénal des affaires'
      ],
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Droit du Travail',
      description: 'Conseils RH, contrats de travail, licenciements, conventions collectives, prud\'hommes.',
      details: [
        'Rédaction de contrats de travail',
        'Conseil en droit social',
        'Procédures de licenciement',
        'Représentation aux prud\'hommes',
        'Négociation collective'
      ],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Droit de la Famille',
      description: 'Divorce, garde d\'enfants, pension alimentaire, adoption, succession, régimes matrimoniaux.',
      details: [
        'Procédures de divorce',
        'Garde et droit de visite des enfants',
        'Pensions alimentaires',
        'Successions et héritages',
        'Régimes matrimoniaux'
      ],
      image: 'https://images.pexels.com/photos/7815767/pexels-photo-7815767.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Scale,
      title: 'Droit Civil',
      description: 'Responsabilité civile, dommages-intérêts, recouvrement de créances, médiation.',
      details: [
        'Actions en responsabilité civile',
        'Évaluation et réclamation de dommages',
        'Recouvrement de créances',
        'Médiation et conciliation',
        'Droit des personnes et des biens'
      ],
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation Initiale',
      description: 'Analyse de votre situation et évaluation de vos besoins juridiques.'
    },
    {
      number: '02',
      title: 'Stratégie Juridique',
      description: 'Élaboration d\'une stratégie personnalisée adaptée à votre cas.'
    },
    {
      number: '03',
      title: 'Mise en Œuvre',
      description: 'Exécution des actions juridiques avec suivi régulier.'
    },
    {
      number: '04',
      title: 'Suivi & Support',
      description: 'Accompagnement continu jusqu\'à la résolution de votre affaire.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Domaines d'Expertise
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cabinet d'avocats spécialisé à Brazzaville offrant des services juridiques complets 
              pour particuliers et entreprises au Congo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Juridiques Complets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe d'avocats expérimentés couvre tous les domaines du droit congolais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} avocat Brazzaville`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-amber-600 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Nos services incluent :</h4>
                      <ul className="space-y-1">
                        {service.details.slice(0, 3).map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Méthode de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir les meilleurs résultats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'Activité */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Secteurs d'Activité
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre cabinet accompagne des clients dans de nombreux secteurs d'activité, 
                nous permettant d'acquérir une expertise sectorielle précieuse.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Banques & Finance',
                  'Immobilier & Construction',
                  'Énergie & Mines',
                  'Télécommunications',
                  'Commerce & Distribution',
                  'Industrie & Manufacturing',
                  'Services & Consulting',
                  'Secteur Public'
                ].map((sector, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Building className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Secteurs d'activité cabinet avocat Brazzaville"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">Tous</div>
                <div className="text-sm opacity-90">Secteurs couverts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un Conseil Juridique Spécialisé ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez notre cabinet d'avocats à Brazzaville pour discuter de votre situation. 
            Nous vous proposons une consultation personnalisée adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              Demander une Consultation
            </a>
            <a
              href="tel:+24206XXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
            >
              Appel d'Urgence
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;