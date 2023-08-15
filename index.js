import { createRoot } from 'react-dom/client';

// Limpar o conteúdo HTML existente
document.body.innerHTML = '<div id="app"></div>';

// Em vez disso, renderize seu componente React
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
