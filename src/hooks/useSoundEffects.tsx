
import { useEffect } from 'react';
import { addSoundToInteractiveElements } from '@/utils/soundService';

export function useSoundEffects() {
  useEffect(() => {
    // Initialize sound effects for interactive elements
    addSoundToInteractiveElements();
    
    // No cleanup needed for this global event listener
    // It's intentionally kept for the entire app lifecycle
  }, []);
}

export default useSoundEffects;
