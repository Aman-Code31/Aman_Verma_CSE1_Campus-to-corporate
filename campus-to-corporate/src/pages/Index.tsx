import { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from '@/components/CompanyCard';
import { companies } from '@/data/companies';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building, BarChart, Globe } from 'lucide-react';

const Index = () => {
  const featuredCompanies = companies.slice(0, 3);
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-company-blue to-company-darkblue dark:from-gray-800 dark:to-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Everything You Need to Know Before Your Visit</h1>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Access comprehensive data about companies you plan to visit. Make your business interactions more effective with Campus to Corporate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-company-darkblue hover:bg-gray-100 border-0 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                    <a href="#companies">Explore Companies</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Set Up Profile
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="https://via.placeholder.com/600x400/e2e8f0/0369a1?text=Company+Insights" 
                  alt="Company Insights Dashboard" 
                  className="rounded-lg shadow-xl" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Why Choose Campus to Corporate?</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive company information to help you prepare for your visits and make informed decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 dark:bg-gray-700/50 dark:rounded-lg">
                <div className="bg-company-blue/10 dark:bg-company-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-company-blue" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Company Profiles</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access detailed company profiles including key people, founding history, and contact information.
                </p>
              </div>
              
              <div className="text-center p-6 dark:bg-gray-700/50 dark:rounded-lg">
                <div className="bg-company-blue/10 dark:bg-company-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="text-company-blue" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Financial Data</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore financial performance with interactive charts and key metrics for each company.
                </p>
              </div>
              
              <div className="text-center p-6 dark:bg-gray-700/50 dark:rounded-lg">
                <div className="bg-company-blue/10 dark:bg-company-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-company-blue" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Visit Information</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find everything you need for your visit from opening hours to special instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies */}
        <section id="companies" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Featured Companies</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore these top companies and access comprehensive information before your visit.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-company-blue hover:bg-company-darkblue">
                <Link to="/companies">View All Companies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-company-gray dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Stay Updated</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to our newsletter for the latest company updates and industry news.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow focus-visible:ring-company-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <Button type="submit" className="bg-company-blue hover:bg-company-darkblue">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;