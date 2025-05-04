import CompanyCard from '@/components/CompanyCard';
import { companies } from '@/data/companies';

const CompaniesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">All Companies</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage; 