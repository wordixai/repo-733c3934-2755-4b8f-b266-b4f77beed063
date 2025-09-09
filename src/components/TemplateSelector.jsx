import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const TemplateSelector = ({ selectedTemplate, onTemplateChange }) => {
  const templates = [
    {
      id: 'og:image-right',
      name: 'Image Right',
      preview: (
        <div className="h-full w-full">
          <div className="bg-primary/10 mt-2 h-3 w-3 rounded-full"></div>
          <div className="flex aspect-video h-full w-full justify-center space-x-2 md:space-x-4">
            <div className="flex h-full w-1/2 flex-col space-y-2 pt-2 md:pt-4">
              <div className="rounded-md bg-primary/10 h-1 w-1/3 md:h-2"></div>
              <div className="rounded-md bg-primary/10 h-2 w-full md:h-4"></div>
            </div>
            <div className="rounded-md bg-primary/10 flex h-2/3 w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'og:hero',
      name: 'Hero',
      preview: (
        <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1">
          <div className="rounded-md bg-primary/10 min-h-1 w-1/6 md:min-h-2"></div>
          <div className="rounded-md bg-primary/10 min-h-2 w-1/2 md:min-h-3"></div>
          <div className="rounded-md bg-primary/10 min-h-8 w-3/4 md:h-16"></div>
        </div>
      )
    },
    {
      id: 'og:logos',
      name: 'Logos',
      preview: (
        <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1 md:space-y-2">
          <div className="rounded-md bg-primary/10 h-1 w-1/6 md:h-2"></div>
          <div className="rounded-md bg-primary/10 h-2 w-1/2 md:h-4"></div>
          <div className="flex space-x-2">
            <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
            <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
            <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
          </div>
        </div>
      )
    },
    {
      id: 'og:basic',
      name: 'Basic',
      preview: (
        <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
          <div className="bg-primary/10 h-4 w-4 rounded-full md:h-8 md:w-8"></div>
          <div className="rounded-md bg-primary/10 mt-2 h-3 w-1/2 md:mt-3 md:h-4"></div>
          <div className="rounded-md bg-primary/10 mt-1 h-2 w-3/4 md:mt-2 md:h-3"></div>
        </div>
      )
    },
    {
      id: 'og:notice',
      name: 'Notice',
      preview: (
        <div className="flex aspect-video h-full w-full items-center justify-center space-x-2 md:space-x-4">
          <div className="bg-primary/10 h-6 w-6 shrink-0 rounded-md md:h-10 md:w-10"></div>
          <div className="w-1/4">
            <div className="rounded-md bg-primary/10 h-2 w-full md:h-3"></div>
            <div className="rounded-md bg-primary/10 mt-1 h-1 w-full md:mt-2 md:h-2"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="sr-only text-sm font-medium">Choose a template</h2>
        <div className="flex gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1 size-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            Open Graph
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1 size-4">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            Twitter/X
          </button>
        </div>
      </div>
      
      <div className="relative">
        <RadioGroup.Root 
          value={selectedTemplate} 
          onValueChange={onTemplateChange}
          className="grid gap-2"
        >
          <div className="overflow-hidden">
            <div className="flex -ml-4">
              {templates.map((template) => (
                <div key={template.id} className="min-w-0 shrink-0 grow-0 pl-4 basis-40 md:basis-64 lg:basis-1/5">
                  <RadioGroup.Item 
                    value={template.id}
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-primary">
                        <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </RadioGroup.Indicator>
                  </RadioGroup.Item>
                  
                  <label 
                    htmlFor={template.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex aspect-video max-h-24 items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:max-h-32 [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    {template.preview}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </RadioGroup.Root>
        
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2 lg:hidden" disabled>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </button>
        
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2 lg:hidden" disabled>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;