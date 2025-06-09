import React from 'react';
import { Scale, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Informations légales obligatoires concernant le Cabinet Juridique Brazzaville
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Identification du Cabinet */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-6 w-6 text-amber-600 mr-3" />
                Identification du Cabinet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dénomination</h3>
                  <p className="text-gray-700">Cabinet Juridique Brazzaville</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Forme juridique</h3>
                  <p className="text-gray-700">Cabinet d'avocats</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">Avenue Amilcar Cabral<br />Brazzaville, République du Congo</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Tél : +242 06 XXX XXXX<br />
                    Email : contact@cabinet-avocat-brazzaville.com
                  </p>
                </div>
              </div>
            </div>

            {/* Directeur de Publication */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de Publication</h2>
              <p className="text-gray-700 mb-4">
                Le directeur de la publication du site internet est <strong>Maître Jean-Baptiste KONGO</strong>, 
                Avocat Associé Principal du Cabinet Juridique Brazzaville.
              </p>
            </div>

            {/* Inscription au Barreau */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inscription au Barreau</h2>
              <p className="text-gray-700 mb-4">
                Les avocats du Cabinet Juridique Brazzaville sont inscrits au Barreau de Brazzaville, 
                République du Congo, et sont soumis aux règles déontologiques de la profession d'avocat.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Ordre des Avocats du Congo</h3>
                <p className="text-blue-800">
                  Tous nos avocats sont membres en règle de l'Ordre des Avocats du Congo et respectent 
                  strictement les règles déontologiques de la profession.
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement du Site</h2>
              <p className="text-gray-700 mb-4">
                Ce site internet est hébergé par des services d'hébergement web professionnels 
                garantissant la sécurité et la disponibilité des données.
              </p>
            </div>

            {/* Propriété Intellectuelle */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété Intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par 
                les droits de propriété intellectuelle. Toute reproduction, même partielle, est interdite 
                sans autorisation préalable écrite du Cabinet Juridique Brazzaville.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-2">Utilisation du Contenu</h3>
                <p className="text-amber-800">
                  Le contenu de ce site est fourni à titre informatif uniquement et ne constitue pas 
                  un conseil juridique personnalisé. Pour tout conseil spécifique, veuillez consulter 
                  nos avocats.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Le Cabinet Juridique Brazzaville s'efforce de maintenir les informations de ce site 
                à jour et exactes. Cependant, nous ne pouvons garantir l'exactitude, la complétude 
                ou l'actualité de toutes les informations présentées.
              </p>
              <p className="text-gray-700 mb-4">
                L'utilisation des informations contenues sur ce site se fait sous votre entière responsabilité. 
                Le cabinet ne saurait être tenu responsable des dommages directs ou indirects résultant 
                de l'utilisation de ce site.
              </p>
            </div>

            {/* Liens Externes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens Externes</h2>
              <p className="text-gray-700 mb-4">
                Ce site peut contenir des liens vers des sites externes. Le Cabinet Juridique Brazzaville 
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu 
                ou leur politique de confidentialité.
              </p>
            </div>

            {/* Droit Applicable */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit Applicable</h2>
              <p className="text-gray-700 mb-4">
                Les présentes mentions légales sont régies par le droit congolais. Tout litige relatif 
                à l'utilisation de ce site sera de la compétence exclusive des tribunaux de Brazzaville, 
                République du Congo.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact</h2>
              <p className="text-blue-800 mb-6">
                Pour toute question concernant ces mentions légales ou l'utilisation de ce site, 
                vous pouvez nous contacter :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">+242 06 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">contact@cabinet-avocat-brazzaville.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Avenue Amilcar Cabral, Brazzaville</span>
                </div>
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

export default LegalNotice;