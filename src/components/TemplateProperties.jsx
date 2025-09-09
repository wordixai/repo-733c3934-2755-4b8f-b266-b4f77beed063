import React from 'react';
import { Eye } from 'lucide-react';

const TemplateProperties = ({ formData, onFormChange }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Template Properties</h3>
        <p className="text-sm text-muted-foreground">Customize your image by changing the properties.</p>
      </div>
      <div className="p-6 pt-0">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="tag">
                Tag
              </label>
              <div className="flex space-x-2">
                <input 
                  id="tag"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1.5 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                  value={formData.tag}
                  onChange={(e) => onFormChange('tag', e.target.value)}
                />
                <button 
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="title">
                Title
              </label>
              <div className="flex space-x-2">
                <input 
                  id="title"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1.5 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                  value={formData.title}
                  onChange={(e) => onFormChange('title', e.target.value)}
                />
                <button 
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="logo">
                Logo
              </label>
              <input 
                id="logo"
                type="file" 
                accept=".png, .jpg, .jpeg, .svg"
                className="hidden"
              />
              <button 
                type="button"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start space-x-1 overflow-hidden"
              >
                <span>File:</span>
                <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                  {formData.logoFile}
                </span>
              </button>
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="image">
                Image
              </label>
              <input 
                id="image"
                type="file" 
                accept=".png, .jpg, .jpeg, .svg"
                className="hidden"
              />
              <button 
                type="button"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start space-x-1 overflow-hidden"
              >
                <span>File:</span>
                <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                  {formData.imageFile}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateProperties;