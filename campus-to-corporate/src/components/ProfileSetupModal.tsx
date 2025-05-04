'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import ProfileSetupForm from './ProfileSetupForm';

interface ProfileSetupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileSetupModal = ({ open, onOpenChange }: ProfileSetupModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <ProfileSetupForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSetupModal;