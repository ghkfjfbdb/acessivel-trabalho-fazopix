
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = createRoot(rootElement);
  try {
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render app:", error);
  }
}
