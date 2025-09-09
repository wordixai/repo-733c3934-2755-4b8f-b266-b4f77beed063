import React from 'react';

const Footer = () => {
  return (
    <>
      <hr className="shrink-0 bg-border h-[1px] w-full" />
      <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-mono font-semibold">
              <a target="_blank" href="https://og.indiehub.best/" rel="noopener noreferrer">
                Free Open Graph Generator
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <a 
                target="_blank" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2" 
                href="https://indiehub.best/"
                rel="noopener noreferrer"
              >
                🎉 IndieHub - best directory for indie makers
              </a>
              <a 
                target="_blank" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2" 
                href="https://mkdirs.com/"
                rel="noopener noreferrer"
              >
                🔥 Mkdirs - best directory boilerplate
              </a>
            </div>
          </div>
          <div className="hidden items-center gap-x-2 md:inline-flex">
            <a 
              target="_blank" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2" 
              href="https://github.com/FadyMak/imgsrc-app"
              rel="noopener noreferrer"
            >
              all credits to imgsrc-app
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;