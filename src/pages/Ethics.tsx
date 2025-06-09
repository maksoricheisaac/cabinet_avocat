import React from 'react';
import { Scale, Shield, Heart, Eye, Users, BookOpen, Award, AlertTriangle } from 'lucide-react';

const Ethics: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Indépendance',
      description: 'L\'avocat exerce sa profession en toute indépendance, libre de toute pression extérieure.',
      details: [
        'Liberté de conseil et de défense',
        'Absence de conflit d\'intérêts',
        'Autonomie dans l\'exercice professionnel',
        'Résistance aux pressions externes'
      ]
    },
    {
      icon: Eye,
      title: 'Secret Professionnel',
      description: 'Obligation absolue de confidentialité sur toutes les informations confiées par le client.',
      details: [
        'Confidentialité des échanges',
        'Protection des documents',
        'Discrétion professionnelle',
        'Obligation perpétuelle'
      ]
    },
    {
      icon: Heart,
      title: 'Loyauté',
      description: 'Fidélité envers le client et respect des engagements pris dans l\'exercice de la profession.',
      details: [
        'Dévouement aux intérêts du client',
        'Respect des engagements',
        'Transparence dans les relations',
        'Évitement des conflits d\'intérêts'
      ]
    },
    {
      icon: Users,
      title: 'Confraternité',
      description: 'Respect mutuel entre avocats et collaboration dans l\'intérêt de la justice.',
      details: [
        'Courtoisie entre confrères',
        'Solidarité professionnelle',
        'Respect des règles de courtoisie',
        'Collaboration loyale'
      ]
    }
  ];

  const obligations = [
    {
      category: 'Envers le Client',
      items: [
        'Conseil éclairé et compétent',
        'Diligence dans le traitement des dossiers',
        'Information régulière sur l\'évolution des affaires',
        'Respect des délais et engagements',
        'Facturation transparente et justifiée'
      ]
    },
    {
      category: 'Envers la Justice',
      items: [
        'Respect des magistrats et institutions',
        'Loyauté dans les débats',
        'Sincérité dans les écritures',
        'Respect des délais de procédure',
        'Contribution à la bonne administration de la justice'
      ]
    },
    {
      category: 'Envers la Profession',
      items: [
        'Respect des règles déontologiques',
        'Formation continue',
        'Dignité dans l\'exercice professionnel',
        'Respect de l\'Ordre des Avocats',
        'Contribution au rayonnement de la profession'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Déontologie et Éthique
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Les principes déontologiques qui guident notre pratique professionnelle 
              et garantissent la qualité de nos services juridiques
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Engagement Déontologique
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En tant qu'avocats inscrits au Barreau de Brazzaville, nous sommes soumis à des règles 
                déontologiques strictes qui garantissent l'intégrité et la qualité de notre exercice professionnel.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ces principes fondamentaux constituent le socle de notre relation avec nos clients 
                et assurent la confiance nécessaire à l'exercice de notre mission.
              </p>
              
              <div className="bg-amber-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Scale className="h-6 w-6 text-amber-600" />
                  <h3 className="font-semibold text-amber-900">Serment de l'Avocat</h3>
                </div>
                <p className="text-amber-800 italic">
                  "Je jure, comme avocat, d'exercer mes fonctions avec dignité, conscience, 
                  indépendance, probité et humanité."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Déontologie avocat Brazzaville"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Respect déontologique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principes Fondamentaux */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Principes Fondamentaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les quatre piliers de la déontologie de l'avocat qui guident notre pratique quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{principle.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{principle.description}</p>
                  
                  <div className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Obligations Professionnelles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Obligations Professionnelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les devoirs qui encadrent notre exercice professionnel et garantissent 
              la qualité de nos services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {obligations.map((obligation, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {obligation.category}
                </h3>
                <div className="space-y-4">
                  {obligation.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrôle Déontologique */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contrôle et Sanctions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le respect des règles déontologiques fait l'objet d'un contrôle permanent 
                par les instances ordinales. Tout manquement peut faire l'objet de sanctions disciplinaires.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    Conseil de Discipline
                  </h3>
                  <p className="text-gray-700">
                    Instance chargée de juger les manquements aux règles déontologiques 
                    et de prononcer les sanctions appropriées.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="h-5 w-5 text-green-600 mr-2" />
                    Formation Continue
                  </h3>
                  <p className="text-gray-700">
                    Obligation de formation continue pour maintenir et actualiser 
                    nos compétences professionnelles.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                    Assurance Professionnelle
                  </h3>
                  <p className="text-gray-700">
                    Couverture obligatoire en responsabilité civile professionnelle 
                    pour garantir l'indemnisation des clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nos Certifications
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-3">
                    <Scale className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Barreau de Brazzaville</h4>
                  <p className="text-gray-600 text-sm">Inscription officielle</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Assurance Professionnelle</h4>
                  <p className="text-gray-600 text-sm">Couverture complète</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-3">
                    <BookOpen className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Formation Continue</h4>
                  <p className="text-gray-600 text-sm">Mise à jour régulière</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signalement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
              Signalement de Manquements
            </h2>
            <p className="text-red-800 mb-6">
              Si vous constatez un manquement aux règles déontologiques de la part d'un avocat, 
              vous pouvez le signaler aux instances ordinales compétentes.
            </p>
            <div className="space-y-2 text-red-800">
              <p><strong>Bâtonnier de l'Ordre des Avocats de Brazzaville</strong></p>
              <p>Palais de Justice de Brazzaville</p>
              <p>République du Congo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre Engagement Déontologique
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Le Cabinet Juridique Brazzaville s'engage à respecter scrupuleusement toutes les règles 
            déontologiques de la profession d'avocat pour vous garantir un service d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg"
            >
              Nous Consulter
            </a>
            <a
              href="/a-propos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
            >
              Notre Équipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;