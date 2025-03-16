
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="py-4 px-4 border-b">
        <Button variant="outline" size="sm" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl aspect-video bg-muted mb-6 rounded-lg overflow-hidden">
          {/* Video placeholder - replace the src with your actual video */}
          <video 
            className="w-full h-full object-cover"
            controls
            poster="/placeholder.svg"
          >
            <source src="/seu-video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
        
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Título do Vídeo</h1>
          <p className="text-muted-foreground mb-6">
            Descrição do vídeo. Substitua este texto com informações sobre o conteúdo do vídeo.
          </p>
          <p className="text-sm text-muted-foreground">
            Créditos: MESTRE R
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
