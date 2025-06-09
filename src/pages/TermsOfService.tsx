import React from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Clock } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conditions Générales
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conditions d'utilisation du site et des services du Cabinet Juridique Brazzaville
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
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Objet et Champ d'Application
              </h2>
              <p className="text-blue-800 mb-4">
                Les présentes conditions générales régissent l'utilisation du site internet du 
                Cabinet Juridique Brazzaville ainsi que les relations contractuelles entre le cabinet 
                et ses clients.
              </p>
              <p className="text-blue-800">
                L'utilisation de ce site implique l'acceptation pleine et entière de ces conditions générales.
              </p>
            </div>

            {/* Définitions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Définitions</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Le Cabinet</h3>
                  <p className="text-gray-700">Cabinet Juridique Brazzaville, cabinet d'avocats situé à Brazzaville, République du Congo.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Le Client</h3>
                  <p className="text-gray-700">Toute personne physique ou morale qui utilise les services du cabinet ou consulte le site internet.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Les Services</h3>
                  <p className="text-gray-700">L'ensemble des prestations juridiques proposées par le cabinet d'avocats.</p>
                </div>
              </div>
            </div>

            {/* Services Proposés */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 text-amber-600 mr-3" />
                Services Proposés
              </h2>
              
              <p className="text-gray-700 mb-6">
                Le Cabinet Juridique Brazzaville propose les services suivants :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Conseil juridique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Rédaction d'actes juridiques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Représentation en justice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Assistance juridique</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Négociation de contrats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Médiation et conciliation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Formation juridique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Audit de conformité</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                  Information Importante
                </h3>
                <p className="text-amber-800">
                  Les informations fournies sur ce site ont un caractère général et ne constituent pas 
                  un conseil juridique personnalisé. Pour tout conseil spécifique, une consultation 
                  avec nos avocats est nécessaire.
                </p>
              </div>
            </div>

            {/* Formation du Contrat */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation du Contrat</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">1. Consultation Initiale</h3>
                  <p className="text-gray-700">
                    Toute relation contractuelle débute par une consultation initiale permettant 
                    d'évaluer vos besoins et de définir les modalités d'intervention.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">2. Devis et Acceptation</h3>
                  <p className="text-gray-700">
                    Un devis détaillé vous sera remis précisant la nature des prestations, 
                    les honoraires et les modalités de paiement. Le contrat est formé par 
                    votre acceptation écrite du devis.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">3. Convention d'Honoraires</h3>
                  <p className="text-gray-700">
                    Conformément à la réglementation, une convention d'honoraires sera établie 
                    pour toute prestation d'un montant supérieur aux seuils légaux.
                  </p>
                </div>
              </div>
            </div>

            {/* Obligations du Cabinet */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Obligations du Cabinet</h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">Nos Engagements</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Respecter les règles déontologiques de la profession d'avocat</li>
                  <li>• Assurer la confidentialité absolue de vos informations</li>
                  <li>• Fournir des conseils compétents et diligents</li>
                  <li>• Vous tenir informé de l'évolution de votre dossier</li>
                  <li>• Respecter les délais convenus</li>
                  <li>• Agir dans votre intérêt exclusif</li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                Le cabinet s'engage à mettre en œuvre tous les moyens nécessaires pour atteindre 
                l'objectif défini, sans toutefois garantir un résultat spécifique, la justice 
                étant par nature aléatoire.
              </p>
            </div>

            {/* Obligations du Client */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Obligations du Client</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaboration Active</h3>
                    <p className="text-gray-700">Fournir toutes les informations et documents nécessaires au traitement du dossier.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sincérité</h3>
                    <p className="text-gray-700">Communiquer des informations exactes et complètes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Paiement des Honoraires</h3>
                    <p className="text-gray-700">Régler les honoraires selon les modalités convenues.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Respect des Conseils</h3>
                    <p className="text-gray-700">Suivre les conseils prodigués et respecter les échéances.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Honoraires */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-amber-600 mr-3" />
                Honoraires et Modalités de Paiement
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Modes de Facturation</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Honoraires au temps passé</li>
                    <li>• Forfait pour missions définies</li>
                    <li>• Honoraires de résultat (si autorisés)</li>
                    <li>• Provision sur honoraires</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">Modalités de Paiement</h3>
                  <ul className="space-y-2 text-amber-800">
                    <li>• Paiement à 30 jours</li>
                    <li>• Virement bancaire</li>
                    <li>• Chèque</li>
                    <li>• Espèces (dans les limites légales)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                  <XCircle className="h-5 w-5 text-red-600 mr-2" />
                  Retard de Paiement
                </h3>
                <p className="text-red-800">
                  Tout retard de paiement entraînera l'application d'intérêts de retard et pourra 
                  justifier la suspension de la mission ou la résiliation du contrat.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de Responsabilité</h2>
              
              <p className="text-gray-700 mb-4">
                La responsabilité du cabinet est limitée aux fautes professionnelles dans l'exercice 
                de sa mission. Le cabinet est couvert par une assurance responsabilité civile professionnelle.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Exclusions de Responsabilité</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Évolution imprévisible de la jurisprudence ou de la législation</li>
                  <li>• Décisions judiciaires défavorables</li>
                  <li>• Conséquences d'informations incomplètes ou inexactes fournies par le client</li>
                  <li>• Force majeure ou cas fortuit</li>
                </ul>
              </div>
            </div>

            {/* Résiliation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Résiliation</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Par le Client</h3>
                  <p className="text-gray-700">
                    Le client peut mettre fin à la mission à tout moment, sous réserve du paiement 
                    des honoraires pour les diligences accomplies.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Par le Cabinet</h3>
                  <p className="text-gray-700">
                    Le cabinet peut se retirer de la mission pour motif légitime, en respectant 
                    un préavis raisonnable et en évitant tout préjudice au client.
                  </p>
                </div>
              </div>
            </div>

            {/* Droit Applicable */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit Applicable et Juridiction</h2>
              
              <p className="text-gray-700 mb-4">
                Les présentes conditions générales sont régies par le droit congolais. 
                En cas de litige, les parties s'efforceront de trouver une solution amiable.
              </p>
              
              <p className="text-gray-700">
                À défaut d'accord amiable, tout litige sera porté devant les tribunaux compétents 
                de Brazzaville, République du Congo.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions et Contact</h2>
              <p className="text-blue-800 mb-4">
                Pour toute question concernant ces conditions générales, contactez-nous :
              </p>
              <div className="space-y-2 text-blue-800">
                <p><strong>Cabinet Juridique Brazzaville</strong></p>
                <p>Avenue Amilcar Cabral, Brazzaville</p>
                <p>Téléphone : +242 06 XXX XXXX</p>
                <p>Email : contact@cabinet-avocat-brazzaville.com</p>
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

export default TermsOfService;