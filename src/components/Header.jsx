import React from 'react';
import { Moon, Menu } from 'lucide-react';

const Header = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div>
          <img 
            alt="Free Open Graph Generator Logo" 
            loading="lazy" 
            width="36" 
            height="36" 
            className="block dark:hidden"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNCIgZmlsbD0iIzAwMCIvPgo8dGV4dCB4PSIxOCIgeT0iMjQiIGZpbGw9IiNGRkYiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5PRzwvdGV4dD4KPC9zdmc+"
          />
          <img 
            alt="Free Open Graph Generator Logo" 
            loading="lazy" 
            width="36" 
            height="36" 
            className="hidden dark:block"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNCIgZmlsbD0iI0ZGRiIvPgo8dGV4dCB4PSIxOCIgeT0iMjQiIGZpbGw9IiMwMDAiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5PRzwvdGV4dD4KPC9zdmc+"
          />
        </div>
        <h1 className="text font-semibold">Free Open Graph Generator</h1>
      </div>
      
      <div className="hidden space-x-2 sm:flex">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2">
          <a target="_blank" href="https://indiehub.best/">🎉 IndieHub</a>
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2">
          <a target="_blank" href="https://mkdirs.com/">🔥 Mkdirs</a>
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2">
          <a target="_blank" href="https://x.com/javay_hu" className="flex items-center space-x-4">
            👨‍💻 @javay_hu
          </a>
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
          <Moon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
      
      <div className="flex space-x-2 sm:hidden">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
          <Moon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Header;