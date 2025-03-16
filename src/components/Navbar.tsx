
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AccessibilityMenu from './AccessibilityMenu';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      
      <div className="accessible-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight focus:outline-none focus-visible:outline-offset-4" 
              aria-label="Trabalho Acessível, página inicial"
            >
              Trabalho<span className="text-primary">Acessível</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
            <Link to="/" className="accessible-link font-medium">
              Início
            </Link>
            <Link to="/vagas" className="accessible-link font-medium">
              Vagas
            </Link>
            <Link to="/cursos" className="accessible-link font-medium">
              Cursos
            </Link>
            <Link to="/sobre" className="accessible-link font-medium">
              Sobre
            </Link>
            <Link to="/contato" className="accessible-link font-medium">
              Contato
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <AccessibilityMenu />
            
            <div className="hidden md:block">
              <Button as={Link} to="/cadastrar" variant="default">
                Cadastrar
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <nav className="accessible-container py-4 flex flex-col space-y-4" aria-label="Navegação móvel">
            <Link to="/" className="accessible-link font-medium py-2">
              Início
            </Link>
            <Link to="/vagas" className="accessible-link font-medium py-2">
              Vagas
            </Link>
            <Link to="/cursos" className="accessible-link font-medium py-2">
              Cursos
            </Link>
            <Link to="/sobre" className="accessible-link font-medium py-2">
              Sobre
            </Link>
            <Link to="/contato" className="accessible-link font-medium py-2">
              Contato
            </Link>
            <Button as={Link} to="/cadastrar" variant="default" className="w-full">
              Cadastrar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
