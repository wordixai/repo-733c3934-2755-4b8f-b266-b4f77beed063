import React from 'react';

const PreviewCard = ({ formData, selectedTemplate, backgroundColor, selectedGradient, gradientDirection, noise }) => {
  const generateBackground = () => {
    if (backgroundColor === 'gradient') {
      return `linear-gradient(${gradientDirection}, ${selectedGradient.join(', ')})`;
    }
    return selectedGradient[0] || '#17182b';
  };

  const renderTemplate = () => {
    const bgStyle = {
      background: generateBackground(),
      opacity: 1 - noise
    };

    switch (selectedTemplate) {
      case 'og:hero':
        return (
          <div className="aspect-video flex flex-col items-center justify-center text-white p-8 relative overflow-hidden" style={bgStyle}>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full mb-4">
              {formData.tag}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-tight">
              {formData.title}
            </h1>
          </div>
        );
        
      case 'og:logos':
        return (
          <div className="aspect-video flex flex-col items-center justify-center text-white p-8 relative overflow-hidden" style={bgStyle}>
            <div className="text-sm bg-white/20 px-3 py-1 rounded-full mb-4">
              {formData.tag}
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">
              {formData.title}
            </h1>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
              <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
              <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
            </div>
          </div>
        );
        
      case 'og:basic':
        return (
          <div className="aspect-video flex flex-col items-center justify-center text-white p-8 relative overflow-hidden" style={bgStyle}>
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4"></div>
            <h1 className="text-2xl font-bold text-center mb-2">
              {formData.title}
            </h1>
            <div className="text-sm opacity-75">{formData.tag}</div>
          </div>
        );
        
      case 'og:notice':
        return (
          <div className="aspect-video flex items-center justify-center text-white p-8 relative overflow-hidden" style={bgStyle}>
            <div className="w-16 h-16 bg-white/20 rounded-lg mr-6 flex-shrink-0"></div>
            <div>
              <h1 className="text-xl font-bold mb-2">
                {formData.title}
              </h1>
              <div className="text-sm opacity-75">{formData.tag}</div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="aspect-video flex text-white p-8 relative overflow-hidden" style={bgStyle}>
            <div className="flex-1 flex flex-col justify-center pr-8">
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full mb-4 inline-block w-fit">
                {formData.tag}
              </div>
              <h1 className="text-3xl font-bold mb-6 leading-tight">
                {formData.title}
              </h1>
            </div>
            <div className="w-64 h-40 bg-white/20 rounded-xl flex-shrink-0"></div>
          </div>
        );
    }
  };

  return (
    <div className="sticky top-0 grow-0 space-y-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow col-span-2 px-2 md:px-4">
        <div className="overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute top-0 right-0 bottom-0 left-0">
              <div className="h-full w-full object-contain bg-slate-100 rounded-lg overflow-hidden">
                {renderTemplate()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;