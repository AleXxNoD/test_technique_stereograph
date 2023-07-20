import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModelsProvider } from './hooks/useModels.tsx'
import { SceneProvider } from './hooks/useScene.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SceneProvider>
      <ModelsProvider>
        <App />
      </ModelsProvider>
    </SceneProvider>
  </React.StrictMode>,
)
