import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Download, Lightbulb, ExternalLink } from 'lucide-react';

const ExportTabs = () => {
  const handleSaveImage = () => {
    // In a real implementation, this would generate and download the image
    console.log('Saving image...');
  };

  return (
    <Tabs.Root defaultValue="save" className="w-full">
      <Tabs.List className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid grid-cols-2">
        <Tabs.Trigger 
          value="save"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
        >
          Save Image
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="api"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
        >
          API Request
        </Tabs.Trigger>
      </Tabs.List>
      
      <Tabs.Content value="save" className="mt-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Save Image</h3>
            <p className="text-sm text-muted-foreground">Export the image as a PNG.</p>
          </div>
          <div className="p-6 pt-0 flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm">
                  <a 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto p-0 underline"
                    href="https://indiehub.best/blog/the-free-open-gragh-image-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                  {' '}about Open Graph meta tags.
                </p>
              </div>
              
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm">
                  <a 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto p-0 underline"
                    href="https://mkdirs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mkdirs
                  </a>
                  {' '}- The best directory boilerplate.
                </p>
              </div>
              
              <div className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                <p className="text-sm">
                  <a 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto p-0 underline"
                    href="https://indiehub.best/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IndieHub
                  </a>
                  {' '}- The best directory for indie makers.
                </p>
              </div>
            </div>
            
            <button 
              onClick={handleSaveImage}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Save Image</span>
            </button>
          </div>
        </div>
      </Tabs.Content>
      
      <Tabs.Content value="api" className="mt-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">API Request</h3>
            <p className="text-sm text-muted-foreground">Use our API to generate images programmatically.</p>
          </div>
          <div className="p-6 pt-0">
            <div className="bg-muted rounded-md p-4">
              <code className="text-sm">
                {`curl -X POST "https://api.og-generator.com/generate" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template": "og:image-right",
    "tag": "mkdirs.com",
    "title": "Launch profitable directory websites in minutes"
  }'`}
              </code>
            </div>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default ExportTabs;