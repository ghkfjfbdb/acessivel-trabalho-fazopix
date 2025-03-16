
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-background to-secondary"
      aria-labelledby="hero-heading"
    >
      <div className="accessible-container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span 
            className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
            aria-hidden="true"
          >
            Trabalho para Todos
          </span>
          
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Encontre oportunidades de trabalho acessíveis para todos
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uma plataforma dedicada a conectar pessoas com deficiência visual a 
            oportunidades de emprego inclusivas e empresas comprometidas com a acessibilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto animate-slide-in" as={Link} to="/vagas">
              Explorar Vagas
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto animate-slide-in" as={Link} to="/cadastrar">
              Cadastrar Currículo
            </Button>
          </div>
          
          <div className="relative max-w-2xl mx-auto animate-slide-in">
            <div className="flex items-center bg-background rounded-lg border p-2 focus-within:ring-2 focus-within:ring-primary">
              <Search className="h-5 w-5 text-muted-foreground mx-2" aria-hidden="true" />
              <input
                type="text"
                placeholder="Buscar vagas, empresas ou palavras-chave..."
                className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none py-2 px-1"
                aria-label="Buscar vagas de emprego"
              />
              <Button type="submit">Buscar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
