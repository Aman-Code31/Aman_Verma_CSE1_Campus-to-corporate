export interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
  industry: string;
  location: string;
  website: string;
  founded: number;
  employees: string;
  revenue: string;
}

export const companies: Company[] = [
  {
    id: "1",
    name: "Tata Steel",
    description: "One of the world's largest steel companies, part of the Tata Group.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tata_Steel_Logo.svg",
    industry: "Steel",
    location: "Mumbai, India",
    website: "https://www.tatasteel.com",
    founded: 1907,
    employees: "32,000+",
    revenue: "$30B+"
  },
  {
    id: "2",
    name: "Infosys",
    description: "A global leader in next-generation digital services and consulting.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg",
    industry: "Information Technology",
    location: "Bengaluru, India",
    website: "https://www.infosys.com",
    founded: 1981,
    employees: "300,000+",
    revenue: "$18B+"
  },
  {
    id: "3",
    name: "Reliance Industries",
    description: "India's largest private sector company with businesses in energy, petrochemicals, textiles, natural resources, retail, and telecommunications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Reliance_Industries_Logo.svg",
    industry: "Conglomerate",
    location: "Mumbai, India",
    website: "https://www.ril.com",
    founded: 1966,
    employees: "340,000+",
    revenue: "$100B+"
  },
  {
    id: "4",
    name: "Wipro",
    description: "A leading global information technology, consulting and business process services company.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Wipro_Primary_Logo_Color_RGB.svg",
    industry: "Information Technology",
    location: "Bengaluru, India",
    website: "https://www.wipro.com",
    founded: 1945,
    employees: "250,000+",
    revenue: "$11B+"
  },
  {
    id: "5",
    name: "HCL Technologies",
    description: "A next-generation global technology company that helps enterprises reimagine their businesses.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/HCL_Technologies_Logo.svg",
    industry: "Information Technology",
    location: "Noida, India",
    website: "https://www.hcltech.com",
    founded: 1976,
    employees: "225,000+",
    revenue: "$12B+"
  },
  {
    id: "6",
    name: "Larsen & Toubro (L&T)",
    description: "A major technology, engineering, construction, manufacturing and financial services conglomerate.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Larsen_%26_Toubro_logo.svg",
    industry: "Engineering & Construction",
    location: "Mumbai, India",
    website: "https://www.larsentoubro.com",
    founded: 1938,
    employees: "50,000+",
    revenue: "$21B+"
  },
  {
    id: "7",
    name: "Mahindra & Mahindra",
    description: "A leading multinational automotive manufacturing corporation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Mahindra_%26_Mahindra_logo.svg",
    industry: "Automotive",
    location: "Mumbai, India",
    website: "https://www.mahindra.com",
    founded: 1945,
    employees: "42,000+",
    revenue: "$15B+"
  },
  {
    id: "8",
    name: "Bharti Airtel",
    description: "A leading global telecommunications company with operations in 18 countries across Asia and Africa.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bharti_Airtel_Logo.svg",
    industry: "Telecommunications",
    location: "New Delhi, India",
    website: "https://www.airtel.in",
    founded: 1995,
    employees: "17,000+",
    revenue: "$15B+"
  },
  {
    id: "9",
    name: "State Bank of India (SBI)",
    description: "The largest public sector bank in India.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/State_Bank_of_India_logo.svg",
    industry: "Banking & Financial Services",
    location: "Mumbai, India",
    website: "https://www.sbi.co.in",
    founded: 1955,
    employees: "245,000+",
    revenue: "$52B+"
  },
  {
    id: "10",
    name: "ICICI Bank",
    description: "A leading private sector bank in India.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg",
    industry: "Banking & Financial Services",
    location: "Mumbai, India",
    website: "https://www.icicibank.com",
    founded: 1994,
    employees: "97,000+",
    revenue: "$21B+"
  },
  {
    id: "11",
    name: "Adani Group",
    description: "A diversified organization in India with market leadership in transport logistics and energy utility sectors.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Adani_Group_Logo.svg",
    industry: "Conglomerate",
    location: "Ahmedabad, India",
    website: "https://www.adani.com",
    founded: 1988,
    employees: "23,000+",
    revenue: "$25B+"
  }
]; 