import { useParams } from "react-router-dom"
import { companies } from "@/data/companies"
import { Calendar, User } from "lucide-react"
import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { toast } from "@/hooks/use-toast"

const mockKeyPeople: Record<string, { name: string; role: string }[]> = {
  "1": [
    { name: "Natarajan Chandrasekaran", role: "Chairman" },
    { name: "T. V. Narendran", role: "CEO & MD" },
  ],
  "2": [
    { name: "Nandan Nilekani", role: "Chairman" },
    { name: "Salil Parekh", role: "CEO & MD" },
  ],
  "3": [
    { name: "Mukesh Ambani", role: "Chairman & MD" },
    { name: "P.M.S. Prasad", role: "Executive Director" },
  ],
  "4": [
    { name: "Rishad Premji", role: "Chairman" },
    { name: "Thierry Delaporte", role: "CEO & MD" },
  ],
  "5": [
    { name: "Shiv Nadar", role: "Founder & Chairman" },
    { name: "C Vijayakumar", role: "CEO & MD" },
  ],
  "6": [
    { name: "A. M. Naik", role: "Group Chairman" },
    { name: "S. N. Subrahmanyan", role: "CEO & MD" },
  ],
  "7": [
    { name: "Anand Mahindra", role: "Chairman" },
    { name: "Dr. Anish Shah", role: "MD & CEO" },
  ],
  "8": [
    { name: "Sunil Bharti Mittal", role: "Founder & Chairman" },
    { name: "Gopal Vittal", role: "CEO & MD (India & South Asia)" },
    { name: "Soumen Ray", role: "CFO" },
  ],
  "9": [
    { name: "Dinesh Kumar Khara", role: "Chairman" },
    { name: "Challa Sreenivasulu Setty", role: "MD" },
  ],
  "10": [
    { name: "Girish Chandra Chaturvedi", role: "Chairman" },
    { name: "Sandeep Bakhshi", role: "MD & CEO" },
  ],
  "11": [
    { name: "Gautam Adani", role: "Chairman & Founder" },
    { name: "Rajesh Adani", role: "MD" },
  ],
}

const mockVisitingInfo: Record<string, {
  address: string;
  hours: string;
  contact: string;
  phone: string;
  notes: string;
}> = {
  "1": {
    address: "Bombay House, 24 Homi Mody Street, Fort, Mumbai 400001",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "contactus@tatasteel.com",
    phone: "+91 22 6665 8282",
    notes: "Visits by appointment only. Contact PR for scheduling."
  },
  "2": {
    address: "Electronics City, Hosur Road, Bengaluru 560100",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "infosys.pr@infosys.com",
    phone: "+91 80 2852 0261",
    notes: "Corporate visits require prior approval."
  },
  "3": {
    address: "Maker Chambers IV, Nariman Point, Mumbai 400021",
    hours: "Monday-Friday: 9:30 AM - 6:30 PM",
    contact: "ril@ril.com",
    phone: "+91 22 3555 5000",
    notes: "Visits are subject to security clearance."
  },
  "4": {
    address: "Doddakannelli, Sarjapur Road, Bengaluru 560035",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "info@wipro.com",
    phone: "+91 80 2844 0011",
    notes: "Visits by prior appointment only."
  },
  "5": {
    address: "A-10/11, Sector-3, Noida 201301",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "contact@hcl.com",
    phone: "+91 120 430 6000",
    notes: "Visits require prior scheduling with HR."
  },
  "6": {
    address: "L&T House, Ballard Estate, Mumbai 400001",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "info@larsentoubro.com",
    phone: "+91 22 6752 5656",
    notes: "Visits are allowed for business purposes only."
  },
  "7": {
    address: "Gateway Building, Apollo Bunder, Mumbai 400001",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "group.communications@mahindra.com",
    phone: "+91 22 2202 1031",
    notes: "Visits require prior approval from admin."
  },
  "8": {
    address: "Bharti Crescent, 1 Nelson Mandela Road, Vasant Kunj Phase II, New Delhi 110070",
    hours: "Monday-Friday: 9:30 AM - 6:00 PM",
    contact: "corporate@in.airtel.com",
    phone: "+91 11 4666 6100",
    notes: "Corporate visits can be scheduled through the PR department with at least one week's notice."
  },
  "9": {
    address: "State Bank Bhavan, Madame Cama Road, Mumbai 400021",
    hours: "Monday-Friday: 10:00 AM - 5:00 PM",
    contact: "contactcentre@sbi.co.in",
    phone: "+91 22 2202 1401",
    notes: "Visits for educational purposes only."
  },
  "10": {
    address: "ICICI Bank Towers, Bandra Kurla Complex, Mumbai 400051",
    hours: "Monday-Friday: 9:30 AM - 6:00 PM",
    contact: "corporate.communications@icicibank.com",
    phone: "+91 22 3366 7777",
    notes: "Visits require prior scheduling with PR."
  },
  "11": {
    address: "Adani House, Near Mithakhali Six Roads, Navrangpura, Ahmedabad 380009",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM",
    contact: "info@adani.com",
    phone: "+91 79 2555 5555",
    notes: "Visits by appointment only."
  },
}

const mockFinancials: Record<string, { year: number; revenue: number; profit: number }[]> = {
  "1": [
    { year: 2021, revenue: 1900, profit: 900 },
    { year: 2022, revenue: 2100, profit: 1100 },
    { year: 2023, revenue: 2200, profit: 1200 },
  ],
  "2": [
    { year: 2021, revenue: 1040, profit: 210 },
    { year: 2022, revenue: 1200, profit: 250 },
    { year: 2023, revenue: 1350, profit: 300 },
  ],
  "3": [
    { year: 2021, revenue: 5400, profit: 450 },
    { year: 2022, revenue: 6500, profit: 600 },
    { year: 2023, revenue: 8000, profit: 900 },
  ],
  "4": [
    { year: 2021, revenue: 750, profit: 120 },
    { year: 2022, revenue: 900, profit: 150 },
    { year: 2023, revenue: 1100, profit: 200 },
  ],
  "5": [
    { year: 2021, revenue: 800, profit: 140 },
    { year: 2022, revenue: 950, profit: 180 },
    { year: 2023, revenue: 1200, profit: 220 },
  ],
  "6": [
    { year: 2021, revenue: 1400, profit: 200 },
    { year: 2022, revenue: 1600, profit: 250 },
    { year: 2023, revenue: 1800, profit: 300 },
  ],
  "7": [
    { year: 2021, revenue: 1100, profit: 100 },
    { year: 2022, revenue: 1300, profit: 150 },
    { year: 2023, revenue: 1500, profit: 180 },
  ],
  "8": [
    { year: 2021, revenue: 1160, profit: 80 },
    { year: 2022, revenue: 1300, profit: 120 },
    { year: 2023, revenue: 1400, profit: 150 },
  ],
  "9": [
    { year: 2021, revenue: 3200, profit: 400 },
    { year: 2022, revenue: 3500, profit: 500 },
    { year: 2023, revenue: 3700, profit: 600 },
  ],
  "10": [
    { year: 2021, revenue: 2100, profit: 300 },
    { year: 2022, revenue: 2300, profit: 350 },
    { year: 2023, revenue: 2500, profit: 400 },
  ],
  "11": [
    { year: 2021, revenue: 1800, profit: 250 },
    { year: 2022, revenue: 2000, profit: 300 },
    { year: 2023, revenue: 2200, profit: 350 },
  ],
}

const CompanyPage = () => {
  const { id } = useParams()
  const company = companies.find((c) => c.id === id)
  const keyPeople = mockKeyPeople[id || ""] || []
  const visiting = mockVisitingInfo[id || ""]
  const financials = mockFinancials[id || ""] || []

  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" })
  const [submitting, setSubmitting] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setShowModal(false)
      setForm({ name: "", email: "", date: "", message: "" })
      toast({ title: "Visit Scheduled!", description: "Your visit request has been submitted." })
    }, 1200)
  }

  if (!company) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Company Not Found</h1>
        <p className="text-muted-foreground">The company you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Main Company Card */}
        <div className="md:col-span-2 bg-gray-900/80 dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-16 h-16 object-contain rounded-lg bg-white p-2"
            />
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{company.name}</h1>
              <div className="text-company-blue font-medium">{company.industry}</div>
            </div>
          </div>
          {/* About */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">About</h2>
            <p className="text-gray-300 mb-4">{company.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Founded</div>
                <div className="font-bold text-white">{company.founded}</div>
              </div>
              <div>
                <div className="text-gray-400">Headquarters</div>
                <div className="font-bold text-white">{company.location}</div>
              </div>
              <div>
                <div className="text-gray-400">Employees</div>
                <div className="font-bold text-white">{company.employees}</div>
              </div>
              <div>
                <div className="text-gray-400">Revenue</div>
                <div className="font-bold text-white">{company.revenue}</div>
              </div>
            </div>
          </div>
          {/* Key People */}
          {keyPeople.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">Key People</h2>
              <div className="flex flex-col md:flex-row gap-4">
                {keyPeople.map((person) => (
                  <div key={person.name} className="bg-gray-800 rounded-lg p-4 flex-1 flex items-center gap-3">
                    <div className="bg-company-blue/20 rounded-full p-2">
                      <User className="text-company-blue w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{person.name}</div>
                      <div className="text-gray-400 text-sm">{person.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Financial Performance */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Financial Performance</h2>
            {financials.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={financials} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `₹${value.toLocaleString()} Cr`} labelFormatter={(label) => `Year: ${label}`} />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#0EA5E9" />
                  <Bar dataKey="profit" name="Profit" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-gray-400">No financial data available.</div>
            )}
          </div>
          {/* Online Presence */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Online Presence</h2>
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-company-blue underline">
              {company.website}
            </a>
          </div>
        </div>
        {/* Right: Visiting Information Card */}
        <div className="bg-gray-900/80 dark:bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-company-blue" /> Visiting Information
            </h2>
            {visiting ? (
              <>
                <div className="mb-2">
                  <div className="text-gray-400">Address</div>
                  <div className="font-semibold text-white">{visiting.address}</div>
                </div>
                <div className="mb-2">
                  <div className="text-gray-400">Opening Hours</div>
                  <div className="font-semibold text-white">{visiting.hours}</div>
                </div>
                <div className="mb-2">
                  <div className="text-gray-400">Contact Information</div>
                  <div className="font-semibold text-white">{visiting.contact}</div>
                  <div className="font-semibold text-white">{visiting.phone}</div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-400">Notes for Visitors</div>
                  <div className="text-white text-sm">{visiting.notes}</div>
                </div>
              </>
            ) : (
              <div className="text-gray-400">No visiting information available.</div>
            )}
            <button
              className="w-full mt-2 bg-company-blue hover:bg-company-darkblue text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
              onClick={() => setShowModal(true)}
            >
              <Calendar className="w-5 h-5" /> Schedule a Visit
            </button>
          </div>
        </div>
      </div>
      {/* Modal Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Schedule a Visit</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Any specific requests or questions?"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-company-blue hover:bg-company-darkblue text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompanyPage