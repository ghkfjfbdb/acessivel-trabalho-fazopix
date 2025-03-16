
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

// Sample job data
const jobListings = [
  {
    id: 1,
    title: "Desenvolvedor Web Acessível",
    company: "TechInclusive",
    location: "São Paulo, SP",
    type: "Tempo Integral",
    postedAt: "Postado há 2 dias",
    description: "Desenvolvimento de aplicações web com foco em acessibilidade digital e experiência de usuário inclusiva.",
    accessibilityFeatures: ["Remoto", "Leitores de Tela", "Horário Flexível"],
  },
  {
    id: 2,
    title: "Atendente de SAC",
    company: "Atendi Inclusão",
    location: "Remoto",
    type: "Meio Período",
    postedAt: "Postado há 5 dias",
    description: "Atendimento ao cliente por telefone e chat com suporte a ferramentas de acessibilidade completas.",
    accessibilityFeatures: ["Treinamento Adaptado", "Software Assistivo", "Equipamentos Adaptados"],
  },
  {
    id: 3,
    title: "Analista de Recursos Humanos",
    company: "Incluir RH",
    location: "Rio de Janeiro, RJ",
    type: "Tempo Integral",
    postedAt: "Postado há 1 semana",
    description: "Recrutamento e seleção com foco em diversidade e inclusão, gestão de programas de acessibilidade.",
    accessibilityFeatures: ["Ambiente Adaptado", "Transporte Acessível", "Intérprete de Libras"],
  },
];

const JobSection = () => {
  return (
    <section className="py-16 bg-background" aria-labelledby="job-section-heading" id="main-content">
      <div className="accessible-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 
            id="job-section-heading" 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Vagas em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossas oportunidades de emprego selecionadas, todas com recursos de acessibilidade garantidos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <Card key={job.id} className="accessible-card flex flex-col h-full animate-slide-in">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                </div>
                <CardDescription>
                  <span className="font-medium">{job.company}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2" aria-hidden="true" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                    <span>{job.postedAt}</span>
                  </div>
                </div>
                
                <p className="mb-4">{job.description}</p>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Recursos de Acessibilidade:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.accessibilityFeatures.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/vagas/${job.id}`} className="flex items-center justify-center">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/vagas">Ver Todas as Vagas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
