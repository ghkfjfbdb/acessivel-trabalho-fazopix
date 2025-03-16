
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JobSection from '@/components/JobSection';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, BookOpen, Building, Users } from 'lucide-react';

const Index = () => {
  // Set page title for screen readers
  useEffect(() => {
    document.title = "Trabalho Acessível - Oportunidades inclusivas para todos";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Feature Section */}
        <section className="py-16 bg-muted">
          <div className="accessible-container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que escolher nossa plataforma?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos recursos exclusivos para tornar sua busca por emprego mais acessível e eficiente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="accessible-card animate-slide-in">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Vagas Inclusivas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Todas as vagas são verificadas quanto à acessibilidade e adaptações disponíveis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="accessible-card animate-slide-in">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Cursos Adaptados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Capacitação profissional com materiais totalmente acessíveis para deficientes visuais.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="accessible-card animate-slide-in">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Building className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Empresas Parceiras</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Organizações comprometidas com a inclusão e diversidade no ambiente de trabalho.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="accessible-card animate-slide-in">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Comunidade Ativa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Troca de experiências e networking entre profissionais com deficiência visual.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <JobSection />
        
        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary">
          <div className="accessible-container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Histórias de Sucesso
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça quem já encontrou oportunidades através da nossa plataforma.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <blockquote className="bg-card border rounded-lg p-8 animate-fade-in">
                <p className="text-lg mb-6 font-medium">
                  "Com os recursos de acessibilidade da plataforma, consegui encontrar uma vaga que realmente valoriza minhas habilidades. O processo foi totalmente acessível, desde a inscrição até a entrevista."
                </p>
                <footer className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    MC
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Marina Costa</p>
                    <p className="text-sm text-muted-foreground">Desenvolvedora de Software, São Paulo</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="accessible-container">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para encontrar sua próxima oportunidade?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Cadastre-se gratuitamente e tenha acesso a vagas inclusivas, cursos e uma comunidade que entende suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/cadastrar" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors w-full sm:w-auto text-center">
                  Criar Conta Gratuita
                </a>
                <a href="/empresas" className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto text-center">
                  Para Empresas
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
