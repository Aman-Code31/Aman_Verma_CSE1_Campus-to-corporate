import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchCompanies } from '@/data/companies';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{id: string, name: string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim()) {
      const searchResults = searchCompanies(query);
      if (searchResults.length > 0) {
        navigate(`/company/${searchResults[0].id}`);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length > 1) {
      setIsSearching(true);
      const searchResults = searchCompanies(value);
      setResults(searchResults.map(company => ({ id: company.id, name: company.name })));
    } else {
      setResults([]);
      setIsSearching(false);
    }
  };

  const handleResultClick = (id: string) => {
    setResults([]);
    setQuery('');
    navigate(`/company/${id}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex w-full">
        <Input
          type="text"
          placeholder="Search for companies..."
          value={query}
          onChange={handleChange}
          className="rounded-r-none focus-visible:ring-company-blue"
        />
        <Button type="submit" className="rounded-l-none bg-company-blue hover:bg-company-darkblue">
          Search
        </Button>
      </form>
      
      {results.length > 0 && isSearching && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 z-20 animate-fade-in">
          <ul className="py-2 max-h-60 overflow-auto">
            {results.map((result) => (
              <li key={result.id} className="px-4 py-2 hover:bg-company-gray cursor-pointer" onClick={() => handleResultClick(result.id)}>
                {result.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};