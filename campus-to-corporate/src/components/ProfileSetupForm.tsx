import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { Check, UserRound } from 'lucide-react';

interface ProfileSetupFormProps {
  onClose: () => void;
}

const ProfileSetupForm = ({ onClose }: ProfileSetupFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
    experienceLevel: 'student',
    preferredCompanies: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, experienceLevel: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database via an API
    // For now, we'll just store in localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData));
    
    toast({
      title: "Profile Created Successfully!",
      description: "Your personalized experience is now ready.",
    });
    
    onClose();
  };

  return (
    <Card className="w-full max-w-lg mx-auto border-gray-200 dark:border-gray-700 shadow-lg">
      <CardHeader className="bg-company-blue/10 dark:bg-company-blue/20">
        <div className="mb-2 flex justify-center">
          <div className="p-3 rounded-full bg-company-blue/20 dark:bg-company-blue/30">
            <UserRound className="h-8 w-8 text-company-blue dark:text-company-blue/90" />
          </div>
        </div>
        <CardTitle className="text-center text-2xl">Create Your Profile</CardTitle>
        <CardDescription className="text-center">
          Set up your personalized experience to receive tailored company recommendations
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name"
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Interests</Label>
            <Textarea 
              id="interests" 
              name="interests"
              placeholder="What industry sectors are you interested in?" 
              value={formData.interests}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label>Experience Level</Label>
            <RadioGroup 
              value={formData.experienceLevel} 
              onValueChange={handleRadioChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="cursor-pointer">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fresh-graduate" id="fresh-graduate" />
                <Label htmlFor="fresh-graduate" className="cursor-pointer">Fresh Graduate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="professional" />
                <Label htmlFor="professional" className="cursor-pointer">Working Professional</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredCompanies">Preferred Companies</Label>
            <Textarea 
              id="preferredCompanies" 
              name="preferredCompanies"
              placeholder="List companies you're interested in visiting" 
              value={formData.preferredCompanies}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-company-blue hover:bg-company-darkblue">
            <Check className="mr-2 h-4 w-4" /> Create Profile
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProfileSetupForm;