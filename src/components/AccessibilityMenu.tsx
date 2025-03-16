
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, Sun, Moon, Type, ZoomIn } from "lucide-react";

const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
    
    // Retrieve saved preferences from localStorage
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast');
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion');
    
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedReducedMotion) setReducedMotion(savedReducedMotion === 'true');
  }, [fontSize, highContrast, reducedMotion]);

  // Save preferences to localStorage
  const saveFontSize = (size: number) => {
    setFontSize(size);
    localStorage.setItem('accessibility-font-size', size.toString());
  };

  const saveHighContrast = (value: boolean) => {
    setHighContrast(value);
    localStorage.setItem('accessibility-high-contrast', value.toString());
  };

  const saveReducedMotion = (value: boolean) => {
    setReducedMotion(value);
    localStorage.setItem('accessibility-reduced-motion', value.toString());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          aria-label="Abrir menu de acessibilidade"
          className="relative"
        >
          <Eye className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h2 className="font-semibold text-lg" tabIndex={0}>Opções de Acessibilidade</h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4" />
                <Label htmlFor="font-size">Tamanho da Fonte: {fontSize}px</Label>
              </div>
              <span className="text-sm text-muted-foreground">{fontSize}px</span>
            </div>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => saveFontSize(value[0])}
              aria-label="Ajustar tamanho da fonte"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Label htmlFor="high-contrast">Alto Contraste</Label>
            </div>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={saveHighContrast}
              aria-label="Ativar alto contraste"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ZoomIn className="h-4 w-4" />
              <Label htmlFor="reduced-motion">Reduzir Animações</Label>
            </div>
            <Switch
              id="reduced-motion"
              checked={reducedMotion}
              onCheckedChange={saveReducedMotion}
              aria-label="Reduzir animações"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityMenu;
