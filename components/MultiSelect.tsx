import * as React from "react";
import { Check, X, ChevronsUpDown, Loader } from "lucide-react";

import { CommandList } from "cmdk";
import { cn } from "../lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Command, CommandEmpty, CommandInput, CommandItem } from "./ui/command";
import { LoadingSpinner } from "./LoadingSpinner";

export type OptionType = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: OptionType[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
  isLoading?: boolean;
  label: string;
}

function MultiSelect({
  options,
  selected,
  onChange,
  className,
  isLoading,
  label,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  const selectedOptions = options.filter((option) =>
    selected.includes(option.value)
  );

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)} modal {...props}>
      <PopoverTrigger asChild>
        <div>
          <Label>{label}</Label>

          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`mt-2.5 w-full justify-between ${
              selected.length > 1 ? "h-full" : "h-10"
            }`}
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-wrap gap-1">
              {selectedOptions.map((item) => (
                <Badge
                  variant="secondary"
                  key={item.value}
                  className="mb-1 mr-1"
                  onClick={() => handleUnselect(item.value)}
                >
                  {item.label}
                  <button
                    type="button"
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item.value);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(item.value)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))}
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>
              {isLoading ? (
                <div className="flex justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                "No items found"
              )}
            </CommandEmpty>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onChange(
                    selected.includes(option.value)
                      ? selected.filter((item) => item !== option.value)
                      : [...selected, option.value]
                  );
                  setOpen(true);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
