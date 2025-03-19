
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Função para lidar com erros não capturados
window.addEventListener('error', (event) => {
  console.error('Erro global capturado:', event.error);
});

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = createRoot(rootElement);
  try {
    root.render(<App />);
    console.log("App renderizado com sucesso");
  } catch (error) {
    console.error("Falha ao renderizar o aplicativo:", error);
    // Tenta renderizar uma mensagem de erro simples
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Ocorreu um erro ao carregar o aplicativo</h1>
        <p>Por favor, atualize a página ou tente novamente mais tarde.</p>
        <p>Créditos: MESTRE R</p>
      </div>
    `;
  }
}
