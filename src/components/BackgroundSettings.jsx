import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, CornerRightUp, CornerRightDown, CornerLeftDown, CornerLeftUp } from 'lucide-react';

const BackgroundSettings = ({ 
  selectedBackground, 
  onBackgroundChange, 
  selectedGradient, 
  onGradientChange, 
  gradientDirection, 
  onDirectionChange 
}) => {
  const gradients = [
    ['rgb(236, 72, 153)', 'rgb(239, 68, 68)', 'rgb(234, 179, 8)'],
    ['rgb(202, 138, 4)', 'rgb(220, 38, 38)'],
    ['rgb(244, 63, 94)', 'rgb(248, 113, 113)', 'rgb(239, 68, 68)'],
    ['rgb(253, 164, 175)', 'rgb(244, 63, 94)'],
    ['rgb(251, 146, 60)', 'rgb(251, 113, 133)'],
    ['rgb(251, 113, 133)', 'rgb(253, 186, 116)'],
    ['rgb(254, 202, 202)', 'rgb(252, 165, 165)', 'rgb(254, 240, 138)'],
    ['rgb(199, 210, 254)', 'rgb(254, 202, 202)', 'rgb(254, 249, 195)'],
    ['rgb(134, 239, 172)', 'rgb(59, 130, 246)', 'rgb(147, 51, 234)'],
    ['rgb(134, 239, 172)', 'rgb(192, 132, 252)'],
    ['rgb(192, 132, 252)', 'rgb(250, 204, 21)'],
    ['rgb(165, 180, 252)', 'rgb(192, 132, 252)'],
    ['rgb(249, 168, 212)', 'rgb(216, 180, 254)', 'rgb(129, 140, 248)'],
    ['rgb(233, 213, 255)', 'rgb(192, 132, 252)', 'rgb(107, 33, 168)'],
    ['rgb(219, 234, 254)', 'rgb(147, 197, 253)', 'rgb(59, 130, 246)'],
    ['rgb(165, 243, 252)', 'rgb(34, 211, 238)'],
    ['rgb(34, 197, 94)', 'rgb(21, 128, 61)'],
    ['rgb(16, 185, 129)', 'rgb(101, 163, 13)'],
    ['rgb(96, 165, 250)', 'rgb(52, 211, 153)'],
    ['rgb(187, 247, 208)', 'rgb(74, 222, 128)', 'rgb(34, 197, 94)'],
    ['rgb(187, 247, 208)', 'rgb(34, 197, 94)'],
    ['rgb(187, 247, 208)', 'rgb(134, 239, 172)', 'rgb(59, 130, 246)'],
    ['rgb(153, 246, 228)', 'rgb(217, 249, 157)'],
    ['rgb(254, 240, 138)', 'rgb(187, 247, 208)', 'rgb(134, 239, 172)'],
    ['#434343 0%', 'black 100%'],
    ['rgb(17, 24, 39)', 'rgb(75, 85, 99)'],
    ['#868f96 0%', '#596164 100%'],
    ['#d7d2cc 0%', '#304352 100%'],
    ['#8baaaa 0%', '#ae8b9c 100%'],
    ['rgb(229, 231, 235)', 'rgb(156, 163, 175)', 'rgb(75, 85, 99)'],
    ['#f5f7fa 0%', '#c3cfe2 100%'],
    ['#d5d4d0 0%', '#d5d4d0 1%', '#eeeeec 31%', '#efeeec 75%', '#e9e9e7 100%']
  ];

  const directions = [
    { value: 'to top', icon: <ChevronUp className="h-4 w-4" /> },
    { value: 'to top right', icon: <CornerRightUp className="h-4 w-4" /> },
    { value: 'to right', icon: <ChevronRight className="h-4 w-4" /> },
    { value: 'to bottom right', icon: <CornerRightDown className="h-4 w-4" /> },
    { value: 'to bottom', icon: <ChevronDown className="h-4 w-4" /> },
    { value: 'to bottom left', icon: <CornerLeftDown className="h-4 w-4" /> },
    { value: 'to left', icon: <ChevronLeft className="h-4 w-4" /> },
    { value: 'to top left', icon: <CornerLeftUp className="h-4 w-4" /> }
  ];

  const getGradientKey = (colors) => JSON.stringify(colors);
  
  const getGradientStyle = (colors) => {
    if (colors.length === 1) return { backgroundColor: colors[0] };
    return {
      background: `linear-gradient(${gradientDirection}, ${colors.join(', ')})`
    };
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Background</h3>
        <p className="text-sm text-muted-foreground">Set a custom background for your image.</p>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-2">
          <Tabs.Root value={selectedBackground} onValueChange={onBackgroundChange}>
            <Tabs.List className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
              <Tabs.Trigger 
                value="gradient"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                Gradient
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="solid"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                Solid Color
              </Tabs.Trigger>
            </Tabs.List>
            
            <Tabs.Content value="gradient" className="space-y-4">
              <div className="rounded-xl border bg-card text-card-foreground shadow p-2">
                <RadioGroup.Root 
                  value={getGradientKey(selectedGradient)}
                  onValueChange={(value) => onGradientChange(JSON.parse(value))}
                  className="grid gap-2"
                >
                  <div className="flex flex-wrap gap-1">
                    {gradients.map((colors, index) => (
                      <div key={index} className="size-9 min-h-9 min-w-9">
                        <RadioGroup.Item 
                          value={getGradientKey(colors)}
                          className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-primary">
                              <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                          </RadioGroup.Indicator>
                        </RadioGroup.Item>
                        <label 
                          htmlFor={getGradientKey(colors)}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          style={getGradientStyle(colors)}
                        />
                      </div>
                    ))}
                  </div>
                </RadioGroup.Root>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Gradient Direction</div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-2">
                  <RadioGroup.Root 
                    value={gradientDirection}
                    onValueChange={onDirectionChange}
                    className="grid gap-2"
                  >
                    <div className="grid grid-cols-8 gap-2">
                      {directions.map((direction) => (
                        <div key={direction.value}>
                          <RadioGroup.Item 
                            value={direction.value}
                            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                          >
                            <RadioGroup.Indicator className="flex items-center justify-center">
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-primary">
                                <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                              </svg>
                            </RadioGroup.Indicator>
                          </RadioGroup.Item>
                          <label 
                            htmlFor={direction.value}
                            className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            {direction.icon}
                          </label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup.Root>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSettings;