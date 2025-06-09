import React from 'react';
import { Scale, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cabinet Juridique Brazzaville</h3>
                <p className="text-gray-400 text-sm">Excellence et Intégrité</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Notre cabinet d'avocats à Brazzaville vous accompagne avec expertise et professionnalisme 
              dans tous vos défis juridiques. Nous offrons des conseils personnalisés et une représentation 
              de qualité pour particuliers et entreprises.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Avenue Amilcar Cabral<br />
                  Brazzaville, Congo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+242 06 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@cabinet-avocat-brazzaville.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Lun - Ven: 8h00 - 18h00<br />
                  Sam: 9h00 - 13h00
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              <Link to="/a-propos" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                À Propos
              </Link>
              <Link to="/domaines-de-droit" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Domaines de Droit
              </Link>
              <Link to="/témoignages" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Témoignages
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Contact
              </Link>
              <Link to="/mentions-legales" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Mentions Légales
              </Link>
              <Link to="/politique-confidentialite" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Politique de Confidentialité
              </Link>
              <Link to="/conditions-generales" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Conditions Générales
              </Link>
              <Link to="/deontologie" className="block text-gray-300 hover:text-amber-600 transition-colors text-sm">
                Déontologie
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Cabinet Juridique Brazzaville. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Avocat Brazzaville • Cabinet Juridique Congo • Conseil Juridique Professionnel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;