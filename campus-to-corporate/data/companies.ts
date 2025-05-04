export interface CompanyData {
    id: string;
    name: string;
    logo: string;
    industry: string;
    description: string;
    founded: number;
    headquarters: string;
    employees: number;
    revenue: string;
    website: string;
    socialMedia: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
    };
    keyPeople: {
      name: string;
      position: string;
    }[];
    financials: {
      year: number;
      revenue: number;
      profit: number;
    }[];
    visitingInfo: {
      address: string;
      openingHours: string;
      contactEmail: string;
      contactPhone: string;
      visitingNotes?: string;
    };
  }
  
  export const companies: CompanyData[] = [
    {
      id: "1",
      name: "TechNova Systems",
      logo: "https://via.placeholder.com/150",
      industry: "Technology",
      description: "TechNova Systems is a leading technology company specializing in cloud computing solutions, AI-driven analytics, and enterprise software development. Founded in 2005, the company has grown to become a major player in the tech industry with innovative products and services.",
      founded: 2005,
      headquarters: "San Francisco, CA",
      employees: 5200,
      revenue: "$4.2 Billion (2023)",
      website: "https://www.technovasystems.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/technova",
        twitter: "https://twitter.com/technova",
      },
      keyPeople: [
        { name: "Sarah Johnson", position: "CEO" },
        { name: "Michael Chen", position: "CTO" },
        { name: "Elena Rodriguez", position: "CFO" }
      ],
      financials: [
        { year: 2021, revenue: 3200, profit: 780 },
        { year: 2022, revenue: 3800, profit: 920 },
        { year: 2023, revenue: 4200, profit: 1050 }
      ],
      visitingInfo: {
        address: "123 Innovation Drive, San Francisco, CA 94105",
        openingHours: "Monday-Friday: 9:00 AM - 6:00 PM",
        contactEmail: "visits@technovasystems.com",
        contactPhone: "+1 (415) 555-1234",
        visitingNotes: "Visitor parking available in the underground garage. Please check-in at the main reception on the ground floor."
      }
    },
    {
      id: "2",
      name: "GreenEarth Renewables",
      logo: "https://via.placeholder.com/150",
      industry: "Renewable Energy",
      description: "GreenEarth Renewables is dedicated to developing sustainable energy solutions including solar, wind, and hydroelectric power generation. The company focuses on reducing carbon footprints and promoting environmental sustainability.",
      founded: 2010,
      headquarters: "Portland, OR",
      employees: 1800,
      revenue: "$950 Million (2023)",
      website: "https://www.greenearthenergy.org",
      socialMedia: {
        linkedin: "https://linkedin.com/company/greenearth",
        twitter: "https://twitter.com/greenearth",
        facebook: "https://facebook.com/greenearth"
      },
      keyPeople: [
        { name: "David Wilson", position: "CEO" },
        { name: "Linda Park", position: "COO" },
        { name: "Robert Green", position: "Head of Research" }
      ],
      financials: [
        { year: 2021, revenue: 720, profit: 120 },
        { year: 2022, revenue: 850, profit: 160 },
        { year: 2023, revenue: 950, profit: 210 }
      ],
      visitingInfo: {
        address: "500 Sustainable Way, Portland, OR 97204",
        openingHours: "Monday-Thursday: 8:30 AM - 5:30 PM, Friday: 8:30 AM - 3:00 PM",
        contactEmail: "visitors@greenearthenergy.org",
        contactPhone: "+1 (503) 555-6789",
        visitingNotes: "Our headquarters features a self-guided sustainability tour. Please notify us in advance if you'd like to participate."
      }
    },
    {
      id: "3",
      name: "HealthPlus Medical",
      logo: "https://via.placeholder.com/150",
      industry: "Healthcare",
      description: "HealthPlus Medical is a healthcare provider and research organization focused on innovative medical solutions, telemedicine services, and patient care improvement through technology. They operate several clinics and research facilities across the country.",
      founded: 1998,
      headquarters: "Boston, MA",
      employees: 3500,
      revenue: "$2.8 Billion (2023)",
      website: "https://www.healthplusmedical.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/healthplus",
        twitter: "https://twitter.com/healthplus"
      },
      keyPeople: [
        { name: "Dr. James Smith", position: "CEO" },
        { name: "Dr. Amara Patel", position: "Medical Director" },
        { name: "Thomas Brown", position: "CFO" }
      ],
      financials: [
        { year: 2021, revenue: 2400, profit: 320 },
        { year: 2022, revenue: 2600, profit: 380 },
        { year: 2023, revenue: 2800, profit: 410 }
      ],
      visitingInfo: {
        address: "750 Wellness Boulevard, Boston, MA 02115",
        openingHours: "Monday-Friday: 8:00 AM - 7:00 PM",
        contactEmail: "visitors@healthplusmedical.com",
        contactPhone: "+1 (617) 555-4321",
        visitingNotes: "All visitors must check in at the security desk and obtain a visitor badge. Medical facility protocols must be observed at all times."
      }
    },
    {
      id: "4",
      name: "Global Finance Group",
      logo: "https://via.placeholder.com/150",
      industry: "Financial Services",
      description: "Global Finance Group provides comprehensive financial services including investment banking, asset management, and financial advisory. With a global presence in major financial centers, the company serves corporations, governments, and high-net-worth individuals.",
      founded: 1985,
      headquarters: "New York, NY",
      employees: 7800,
      revenue: "$8.5 Billion (2023)",
      website: "https://www.globalfinancegroup.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/globalfinance",
        twitter: "https://twitter.com/globalfinance"
      },
      keyPeople: [
        { name: "Richard Moore", position: "CEO" },
        { name: "Elizabeth Chang", position: "President" },
        { name: "Jonathan Black", position: "Chief Investment Officer" }
      ],
      financials: [
        { year: 2021, revenue: 7200, profit: 1800 },
        { year: 2022, revenue: 7900, profit: 1950 },
        { year: 2023, revenue: 8500, profit: 2100 }
      ],
      visitingInfo: {
        address: "1200 Wall Street, New York, NY 10005",
        openingHours: "Monday-Friday: 9:00 AM - 6:30 PM",
        contactEmail: "reception@globalfinancegroup.com",
        contactPhone: "+1 (212) 555-7890",
        visitingNotes: "Please bring government-issued ID for security clearance. Appointment required for all visits."
      }
    },
    {
      id: "5",
      name: "OceanWave Logistics",
      logo: "https://via.placeholder.com/150",
      industry: "Logistics & Transportation",
      description: "OceanWave Logistics specializes in global supply chain management, freight forwarding, and advanced logistics solutions. The company leverages technology to optimize shipping routes and provide real-time tracking for customers worldwide.",
      founded: 2003,
      headquarters: "Miami, FL",
      employees: 2600,
      revenue: "$1.7 Billion (2023)",
      website: "https://www.oceanwavelogistics.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/oceanwave",
        facebook: "https://facebook.com/oceanwavelogistics"
      },
      keyPeople: [
        { name: "Carlos Martinez", position: "CEO" },
        { name: "Sophia Lee", position: "COO" },
        { name: "Daniel Jackson", position: "VP of Global Operations" }
      ],
      financials: [
        { year: 2021, revenue: 1300, profit: 180 },
        { year: 2022, revenue: 1500, profit: 210 },
        { year: 2023, revenue: 1700, profit: 250 }
      ],
      visitingInfo: {
        address: "800 Harbor Drive, Miami, FL 33132",
        openingHours: "Monday-Friday: 8:00 AM - 5:00 PM",
        contactEmail: "visitors@oceanwavelogistics.com",
        contactPhone: "+1 (305) 555-2468",
        visitingNotes: "Our facility offers tours of the logistics command center by appointment. Please wear closed-toe shoes when visiting warehouse areas."
      }
    },
    {
      id: "6",
      name: "BioGenTech Innovations",
      logo: "https://via.placeholder.com/150",
      industry: "Biotechnology",
      description: "BioGenTech Innovations is at the forefront of biotechnology research, developing breakthrough medical treatments and genetic engineering solutions. Their innovative approach to genomics has led to several patented technologies with applications in healthcare and agriculture.",
      founded: 2009,
      headquarters: "Cambridge, MA",
      employees: 950,
      revenue: "$680 Million (2023)",
      website: "https://www.biogentechinnovations.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/biogentech",
        twitter: "https://twitter.com/biogentech"
      },
      keyPeople: [
        { name: "Dr. Emily Watson", position: "CEO" },
        { name: "Dr. Marcus Kim", position: "Chief Scientific Officer" },
        { name: "Jennifer Huang", position: "COO" }
      ],
      financials: [
        { year: 2021, revenue: 480, profit: 85 },
        { year: 2022, revenue: 560, profit: 110 },
        { year: 2023, revenue: 680, profit: 150 }
      ],
      visitingInfo: {
        address: "300 Innovation Park, Cambridge, MA 02142",
        openingHours: "Monday-Friday: 9:00 AM - 5:30 PM",
        contactEmail: "visits@biogentech.com",
        contactPhone: "+1 (617) 555-9876",
        visitingNotes: "Visitors must schedule appointments at least 48 hours in advance due to laboratory access protocols. Photo ID required for entry."
      }
    },
    {
      id: "7",
      name: "Alpine Construction Group",
      logo: "https://via.placeholder.com/150",
      industry: "Construction",
      description: "Alpine Construction Group specializes in sustainable building practices and large-scale commercial development projects. Their innovative approach to green construction has earned them recognition for environmental leadership while delivering high-quality infrastructure.",
      founded: 1992,
      headquarters: "Denver, CO",
      employees: 1750,
      revenue: "$1.2 Billion (2023)",
      website: "https://www.alpineconstructiongroup.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/alpine-construction",
        facebook: "https://facebook.com/alpineconstruction"
      },
      keyPeople: [
        { name: "Robert Montoya", position: "CEO" },
        { name: "Susan Reynolds", position: "Head of Operations" },
        { name: "Frank Williams", position: "Chief Engineer" }
      ],
      financials: [
        { year: 2021, revenue: 980, profit: 120 },
        { year: 2022, revenue: 1050, profit: 140 },
        { year: 2023, revenue: 1200, profit: 165 }
      ],
      visitingInfo: {
        address: "1500 Mountain View Drive, Denver, CO 80202",
        openingHours: "Monday-Friday: 8:00 AM - 5:00 PM",
        contactEmail: "reception@alpineconstruction.com",
        contactPhone: "+1 (303) 555-2345",
        visitingNotes: "Safety gear will be provided for site visits. Please wear closed-toe shoes and long pants if visiting construction sites."
      }
    },
    {
      id: "8",
      name: "Quantum Security Systems",
      logo: "https://via.placeholder.com/150",
      industry: "Cybersecurity",
      description: "Quantum Security Systems develops cutting-edge cybersecurity solutions utilizing quantum computing principles to create unbreakable encryption systems. Their products protect government agencies, financial institutions, and corporations from increasingly sophisticated cyber threats.",
      founded: 2015,
      headquarters: "Austin, TX",
      employees: 430,
      revenue: "$340 Million (2023)",
      website: "https://www.quantumsecuritysystems.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/quantum-security",
        twitter: "https://twitter.com/quantumsec"
      },
      keyPeople: [
        { name: "Alex Rivera", position: "CEO" },
        { name: "Dr. Samantha Wong", position: "Chief Technology Officer" },
        { name: "Nathan Parker", position: "Head of Client Services" }
      ],
      financials: [
        { year: 2021, revenue: 180, profit: 25 },
        { year: 2022, revenue: 260, profit: 45 },
        { year: 2023, revenue: 340, profit: 70 }
      ],
      visitingInfo: {
        address: "420 Tech Parkway, Austin, TX 78701",
        openingHours: "Monday-Thursday: 9:00 AM - 6:00 PM, Friday: 9:00 AM - 4:00 PM",
        contactEmail: "security@quantumsystems.com",
        contactPhone: "+1 (512) 555-8765",
        visitingNotes: "All visitors must register 24 hours in advance and sign an NDA before entering the facility. Electronic devices may be temporarily stored during your visit."
      }
    },
    {
      id: "9",
      name: "NovaStar Media",
      logo: "https://via.placeholder.com/150",
      industry: "Media & Entertainment",
      description: "NovaStar Media is a digital entertainment company specializing in streaming content, interactive media, and virtual reality experiences. Their platform delivers personalized entertainment to millions of subscribers worldwide with a focus on original content production.",
      founded: 2011,
      headquarters: "Los Angeles, CA",
      employees: 820,
      revenue: "$750 Million (2023)",
      website: "https://www.novastarmedia.com",
      socialMedia: {
        linkedin: "https://linkedin.com/company/novastar",
        twitter: "https://twitter.com/novastar",
        facebook: "https://facebook.com/novastarmedia"
      },
      keyPeople: [
        { name: "Lisa Rodriguez", position: "CEO" },
        { name: "Tyler Johnson", position: "Chief Content Officer" },
        { name: "Maya Patel", position: "Head of Technology" }
      ],
      financials: [
        { year: 2021, revenue: 520, profit: 90 },
        { year: 2022, revenue: 640, profit: 120 },
        { year: 2023, revenue: 750, profit: 160 }
      ],
      visitingInfo: {
        address: "8700 Sunset Boulevard, Los Angeles, CA 90069",
        openingHours: "Monday-Friday: 10:00 AM - 7:00 PM",
        contactEmail: "studio@novastarmedia.com",
        contactPhone: "+1 (323) 555-4321",
        visitingNotes: "Studio tours are available on Tuesdays and Thursdays by appointment. Photography is not permitted in certain areas."
      }
    },
    {
      id: "10",
      name: "EcoSmart Solutions",
      logo: "https://via.placeholder.com/150",
      industry: "Environmental Services",
      description: "EcoSmart Solutions provides innovative waste management and recycling services for businesses and municipalities. Their proprietary processing technologies convert waste materials into renewable energy and useful byproducts, significantly reducing landfill usage.",
      founded: 2007,
      headquarters: "Seattle, WA",
      employees: 580,
      revenue: "$420 Million (2023)",
      website: "https://www.ecosmartsolutions.org",
      socialMedia: {
        linkedin: "https://linkedin.com/company/ecosmart",
        twitter: "https://twitter.com/ecosmart",
        facebook: "https://facebook.com/ecosmartsolutions"
      },
      keyPeople: [
        { name: "Alan Schmidt", position: "CEO" },
        { name: "Dr. Grace Chen", position: "Director of Research" },
        { name: "Michael Thompson", position: "Operations Manager" }
      ],
      financials: [
        { year: 2021, revenue: 310, profit: 40 },
        { year: 2022, revenue: 360, profit: 55 },
        { year: 2023, revenue: 420, profit: 75 }
      ],
      visitingInfo: {
        address: "250 Greenway Road, Seattle, WA 98101",
        openingHours: "Monday-Friday: 8:30 AM - 5:00 PM",
        contactEmail: "info@ecosmartsolutions.org",
        contactPhone: "+1 (206) 555-6543",
        visitingNotes: "Facility tours showcase our recycling and processing operations. Please wear closed-toe shoes. Hard hats and safety vests will be provided."
      }
    }
  ];
  
  export const getCompanyById = (id: string): CompanyData | undefined => {
    return companies.find(company => company.id === id);
  };
  
  export const searchCompanies = (query: string): CompanyData[] => {
    const lowercaseQuery = query.toLowerCase();
    return companies.filter(company => 
      company.name.toLowerCase().includes(lowercaseQuery) || 
      company.industry.toLowerCase().includes(lowercaseQuery) ||
      company.description.toLowerCase().includes(lowercaseQuery)
    );
  };