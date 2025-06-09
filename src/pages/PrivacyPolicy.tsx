import React from 'react';
import { Shield, Eye, Lock, UserCheck, Database, AlertTriangle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protection et traitement de vos données personnelles par le Cabinet Juridique Brazzaville
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Notre Engagement
              </h2>
              <p className="text-blue-800 mb-4">
                Le Cabinet Juridique Brazzaville s'engage à protéger la confidentialité et la sécurité 
                de vos données personnelles. Cette politique explique comment nous collectons, utilisons 
                et protégeons vos informations.
              </p>
              <p className="text-blue-800">
                En tant que cabinet d'avocats, nous sommes soumis au secret professionnel et appliquons 
                les plus hauts standards de confidentialité.
              </p>
            </div>

            {/* Données Collectées */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="h-6 w-6 text-amber-600 mr-3" />
                Données Collectées
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Données d'Identification</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresse postale</li>
                    <li>• Entreprise/Organisation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Données de Navigation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Pages visitées</li>
                    <li>• Durée de visite</li>
                    <li>• Cookies techniques</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-3">Données Juridiques Sensibles</h3>
                <p className="text-amber-800">
                  Les informations relatives à vos affaires juridiques sont protégées par le secret 
                  professionnel de l'avocat et font l'objet de mesures de sécurité renforcées.
                </p>
              </div>
            </div>

            {/* Finalités du Traitement */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 text-amber-600 mr-3" />
                Utilisation de vos Données
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Gestion des Consultations</h3>
                  <p className="text-gray-700">
                    Traitement de vos demandes de consultation, prise de rendez-vous et suivi de vos dossiers juridiques.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-700">
                    Envoi d'informations relatives à vos affaires, confirmations de rendez-vous et communications professionnelles.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Amélioration des Services</h3>
                  <p className="text-gray-700">
                    Analyse anonymisée pour améliorer la qualité de nos services et l'expérience utilisateur de notre site.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Obligations Légales</h3>
                  <p className="text-gray-700">
                    Respect des obligations légales et réglementaires applicables à la profession d'avocat.
                  </p>
                </div>
              </div>
            </div>

            {/* Base Légale */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Base Légale du Traitement</h2>
              <p className="text-gray-700 mb-4">
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• <strong>Votre consentement</strong> pour les communications marketing (newsletter)</li>
                <li>• <strong>L'exécution du contrat</strong> pour la prestation de services juridiques</li>
                <li>• <strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
                <li>• <strong>Les obligations légales</strong> de la profession d'avocat</li>
              </ul>
            </div>

            {/* Partage des Données */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partage des Données</h2>
              <div className="bg-red-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  Principe de Non-Divulgation
                </h3>
                <p className="text-red-800">
                  Vos données ne sont jamais vendues, louées ou partagées à des fins commerciales. 
                  Le secret professionnel de l'avocat garantit la confidentialité absolue de vos informations.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                Vos données peuvent être partagées uniquement dans les cas suivants :
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Avec votre consentement explicite</li>
                <li>• Avec nos prestataires techniques (hébergement sécurisé)</li>
                <li>• En cas d'obligation légale ou judiciaire</li>
                <li>• Avec d'autres avocats dans le cadre de votre dossier (avec votre accord)</li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-6 w-6 text-amber-600 mr-3" />
                Sécurité des Données
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Mesures Techniques</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Chiffrement SSL/TLS</li>
                    <li>• Serveurs sécurisés</li>
                    <li>• Sauvegardes régulières</li>
                    <li>• Accès restreint</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Mesures Organisationnelles</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Formation du personnel</li>
                    <li>• Politique de confidentialité</li>
                    <li>• Contrôles d'accès</li>
                    <li>• Audit de sécurité</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vos Droits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="h-6 w-6 text-amber-600 mr-3" />
                Vos Droits
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit d'Accès</h3>
                  <p className="text-gray-700">Vous pouvez demander l'accès à vos données personnelles.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit de Rectification</h3>
                  <p className="text-gray-700">Vous pouvez demander la correction de données inexactes.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit à l'Effacement</h3>
                  <p className="text-gray-700">Vous pouvez demander la suppression de vos données (sous réserve des obligations légales).</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit d'Opposition</h3>
                  <p className="text-gray-700">Vous pouvez vous opposer au traitement de vos données à des fins de marketing.</p>
                </div>
              </div>
            </div>

            {/* Conservation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de Conservation</h2>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-amber-800 mb-4">
                  Conformément aux obligations déontologiques de la profession d'avocat :
                </p>
                <ul className="space-y-2 text-amber-800">
                  <li>• <strong>Dossiers clients :</strong> Conservation pendant 30 ans minimum</li>
                  <li>• <strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                  <li>• <strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li>• <strong>Newsletter :</strong> Jusqu'à désinscription</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Exercer vos Droits</h2>
              <p className="text-blue-800 mb-4">
                Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, 
                contactez-nous :
              </p>
              <div className="space-y-2 text-blue-800">
                <p><strong>Email :</strong> contact@cabinet-avocat-brazzaville.com</p>
                <p><strong>Téléphone :</strong> +242 06 XXX XXXX</p>
                <p><strong>Courrier :</strong> Cabinet Juridique Brazzaville, Avenue Amilcar Cabral, Brazzaville</p>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-500">
              <p>Dernière mise à jour : Décembre 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;