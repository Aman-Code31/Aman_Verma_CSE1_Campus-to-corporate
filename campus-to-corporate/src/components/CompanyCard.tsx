import { Link } from 'react-router-dom';
import { Company } from '@/data/companies';
import { Building, MapPin, Users } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link to={`/company/${company.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {company.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {company.industry}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {company.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            {company.location}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4 mr-2" />
            {company.employees} employees
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Building className="w-4 h-4 mr-2" />
            Founded {company.founded}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;