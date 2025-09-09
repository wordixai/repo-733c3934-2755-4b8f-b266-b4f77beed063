import React, { useState } from 'react';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import TemplateProperties from './components/TemplateProperties';
import BackgroundSettings from './components/BackgroundSettings';
import GridOverlay from './components/GridOverlay';
import PreviewCard from './components/PreviewCard';
import ExportTabs from './components/ExportTabs';
import Footer from './components/Footer';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('og:image-right');
  const [formData, setFormData] = useState({
    tag: 'mkdirs.com',
    title: 'Launch profitable directory websites in minutes',
    logoFile: 'mkdirs-logo.png',
    imageFile: 'mkdirs1.png'
  });
  
  const [backgroundColor, setBackgroundColor] = useState('gradient');
  const [selectedGradient, setSelectedGradient] = useState(['rgb(17, 24, 39)', 'rgb(75, 85, 99)']);
  const [gradientDirection, setGradientDirection] = useState('to top right');
  const [noise, setNoise] = useState(0.15);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
          />
          
          <hr className="shrink-0 bg-border h-[1px] w-full" />
          
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
            <div className="order-last col-span-1 space-y-4 lg:order-first">
              <TemplateProperties 
                formData={formData}
                onFormChange={handleFormChange}
              />
              
              <BackgroundSettings 
                selectedBackground={backgroundColor}
                onBackgroundChange={setBackgroundColor}
                selectedGradient={selectedGradient}
                onGradientChange={setSelectedGradient}
                gradientDirection={gradientDirection}
                onDirectionChange={setGradientDirection}
              />
              
              <GridOverlay 
                noise={noise}
                onNoiseChange={setNoise}
              />
            </div>
            
            <div className="order-first lg:order-last lg:col-span-2">
              <PreviewCard 
                formData={formData}
                selectedTemplate={selectedTemplate}
                backgroundColor={backgroundColor}
                selectedGradient={selectedGradient}
                gradientDirection={gradientDirection}
                noise={noise}
              />
              
              <ExportTabs />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;