import React from 'react';
import * as Slider from '@radix-ui/react-slider';

const GridOverlay = ({ noise, onNoiseChange }) => {
  return (
    <div className="grid gap-2 pt-2">
      <div className="flex justify-between">
        <div className="text-sm font-medium">Grid Overlay</div>
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
          New
        </div>
      </div>
      
      <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start">
        Grid
      </button>
      
      <div className="grid gap-2">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="noise">
              Noise
            </label>
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {noise}
            </span>
          </div>
          
          <Slider.Root 
            value={[noise]}
            onValueChange={(value) => onNoiseChange(value[0])}
            max={1}
            min={0}
            step={0.01}
            className="relative flex w-full touch-none select-none items-center"
          >
            <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
              <Slider.Range className="absolute h-full bg-primary" />
            </Slider.Track>
            <Slider.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};

export default GridOverlay;