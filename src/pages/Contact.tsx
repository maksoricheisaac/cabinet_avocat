import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building,
  Calendar,
  CheckCircle,
  Loader,
  ExternalLink,
  Navigation
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    domaine: '',
    message: '',
    urgence: false,
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const domainesJuridiques = [
    'Droit des Affaires',
    'Droit Immobilier',
    'Droit Pénal',
    'Droit du Travail',
    'Droit de la Famille',
    'Droit Civil',
    'Autre'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi avec délai réaliste
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulation d'envoi réussi
      console.log('Données du formulaire envoyées:', formData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowNotification(true);
      
      // Scroll vers le haut pour voir la notification
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset form après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setShowNotification(false);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          entreprise: '',
          sujet: '',
          domaine: '',
          message: '',
          urgence: false,
          newsletter: false
        });
      }, 5000);
      
    } catch (error) {
      setIsSubmitting(false);
      console.error('Erreur lors de l\'envoi:', error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Avenue Amilcar Cabral\nCentre-ville, Brazzaville\nRépublique du Congo',
      action: 'Voir sur la carte'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+242 06 XXX XXXX\n+242 05 XXX XXXX',
      action: 'Appeler maintenant'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@cabinet-avocat-brazzaville.com\ninfo@cabinet-juridique-congo.com',
      action: 'Envoyer un email'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lundi - Vendredi: 8h00 - 18h00\nSamedi: 9h00 - 13h00\nDimanche: Fermé',
      action: 'Prendre RDV'
    }
  ];

  // Coordonnées précises pour Brazzaville, Avenue Amilcar Cabral
  const cabinetLocation = {
    lat: -4.2634,
    lng: 15.2429,
    address: "Avenue Amilcar Cabral, Brazzaville, République du Congo"
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${cabinetLocation.lat},${cabinetLocation.lng}`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${cabinetLocation.lat},${cabinetLocation.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* Notification de succès */}
      {showNotification && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white py-4 px-4 shadow-lg animate-slide-in-down">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Message envoyé avec succès !</h3>
                <p className="text-sm opacity-90">Nous vous recontacterons dans les 24 heures.</p>
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
              Contactez Notre Cabinet
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Besoin d'un conseil juridique à Brazzaville ? Notre équipe d'avocats expérimentés 
              est à votre disposition pour vous accompagner dans vos démarches juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{info.content}</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                    {info.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demande de Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire pour nous faire part de votre demande. 
                Nous vous recontacterons dans les plus brefs délais.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-green-700 mb-6">
                    Merci pour votre demande. Notre équipe d'avocats va examiner votre dossier 
                    et vous recontacter dans les 24 heures.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Prochaines étapes :</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Analyse de votre demande par notre équipe</li>
                      <li>• Contact téléphonique dans les 24h</li>
                      <li>• Proposition de rendez-vous si nécessaire</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+242 06 XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise/Organisation
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Nom de votre entreprise (optionnel)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="domaine" className="block text-sm font-medium text-gray-700 mb-2">
                        Domaine juridique *
                      </label>
                      <select
                        id="domaine"
                        name="domaine"
                        required
                        value={formData.domaine}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Sélectionnez un domaine</option>
                        {domainesJuridiques.map((domaine, index) => (
                          <option key={index} value={domaine}>{domaine}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                        Objet de la demande *
                      </label>
                      <input
                        type="text"
                        id="sujet"
                        name="sujet"
                        required
                        value={formData.sujet}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Résumé de votre demande"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message détaillé *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Décrivez votre situation et vos besoins juridiques en détail..."
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="urgence"
                        checked={formData.urgence}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 disabled:cursor-not-allowed"
                      />
                      <span className="ml-2 text-sm text-gray-700">Demande urgente</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 disabled:cursor-not-allowed"
                      />
                      <span className="ml-2 text-sm text-gray-700">Newsletter juridique</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center group disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Envoyer la Demande
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                    pour traiter votre demande de consultation juridique.
                  </p>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Consultation Gratuite
                </h3>
                <p className="text-gray-600 mb-4">
                  Nous offrons une première consultation gratuite de 30 minutes pour évaluer 
                  votre situation et vous orienter vers la meilleure solution juridique.
                </p>
                <div className="flex items-center space-x-2 text-amber-600">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Sur rendez-vous uniquement</span>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Urgences Juridiques
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les situations urgentes (garde à vue, référés, etc.), 
                  contactez-nous directement par téléphone.
                </p>
                <a
                  href="tel:+24206XXXXXXX"
                  className="flex items-center space-x-2 text-amber-600 font-medium hover:text-amber-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+242 06 XXX XXXX</span>
                </a>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Confidentialité Garantie
                </h3>
                <p className="text-gray-600">
                  Toutes vos communications avec notre cabinet sont protégées par le secret 
                  professionnel de l'avocat. Vos informations restent strictement confidentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Où Nous Trouver
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Notre cabinet est situé au cœur de Brazzaville, facilement accessible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openInGoogleMaps}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ouvrir dans Google Maps
              </button>
              <button
                onClick={getDirections}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Obtenir l'itinéraire
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 relative">
              {/* Carte Google Maps améliorée */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d${cabinetLocation.lng}!3d${cabinetLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTUnNDguMiJTIDE1wrAxNCczMC40IkU!5e0!3m2!1sfr!2scg!4v1703123456789!5m2!1sfr!2scg`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Cabinet Juridique Brazzaville - Avenue Amilcar Cabral"
                className="w-full h-full"
              ></iframe>
              
              {/* Overlay avec informations du cabinet */}
              <div className="absolute bottom-4 left-4 bg-white p-6 rounded-xl shadow-xl max-w-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-600 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Cabinet Juridique Brazzaville</h3>
                    <p className="text-sm text-gray-600">Avocat • Conseil Juridique</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Adresse :</strong><br />
                    Avenue Amilcar Cabral<br />
                    Centre-ville, Brazzaville<br />
                    République du Congo
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Coordonnées :</strong> {cabinetLocation.lat}, {cabinetLocation.lng}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href="tel:+24206XXXXXXX"
                    className="flex-1 bg-amber-600 text-white px-3 py-2 rounded text-sm text-center hover:bg-amber-700 transition-colors font-medium"
                  >
                    Appeler
                  </a>
                  <button
                    onClick={getDirections}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors font-medium"
                  >
                    Itinéraire
                  </button>
                  <button
                    onClick={openInGoogleMaps}
                    className="flex-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors font-medium"
                  >
                    Voir plus
                  </button>
                </div>
              </div>

              {/* Indicateur de localisation */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Cabinet d'Avocats</span>
                </div>
              </div>
            </div>
          </div>

          {/* Informations d'accès */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Car className="h-5 w-5 text-blue-600 mr-2" />
                En Voiture
              </h3>
              <p className="text-gray-600 text-sm">
                Parking disponible à proximité. Accès facile depuis le centre-ville 
                via l'Avenue Amilcar Cabral.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Building className="h-5 w-5 text-green-600 mr-2" />
                Transports
              </h3>
              <p className="text-gray-600 text-sm">
                Accessible en transport en commun. Arrêts de bus à proximité 
                du cabinet juridique.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Clock className="h-5 w-5 text-amber-600 mr-2" />
                Horaires
              </h3>
              <p className="text-gray-600 text-sm">
                Lun-Ven: 8h00-18h00<br />
                Sam: 9h00-13h00<br />
                Dim: Fermé
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;