import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface CoffeeFiltersProps {
  onFilterChange: (filters: {
    roastLevel: string;
    priceRange: number[];
    origin: string;
  }) => void;
}

export function CoffeeFilters({ onFilterChange }: CoffeeFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="size-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="roast-level">Roast Level</Label>
          <Select
            onValueChange={(value) =>
              onFilterChange({
                roastLevel: value,
                priceRange: [0, 100],
                origin: "all",
              })
            }
          >
            <SelectTrigger id="roast-level">
              <SelectValue placeholder="Select roast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label>Price Range</Label>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            onValueChange={(value) =>
              onFilterChange({
                roastLevel: "all",
                priceRange: value,
                origin: "all",
              })
            }
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="origin">Origin</Label>
          <Select
            onValueChange={(value) =>
              onFilterChange({
                roastLevel: "all",
                priceRange: [0, 100],
                origin: value,
              })
            }
          >
            <SelectTrigger id="origin">
              <SelectValue placeholder="Select origin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ethiopia">Ethiopia</SelectItem>
              <SelectItem value="colombia">Colombia</SelectItem>
              <SelectItem value="brazil">Brazil</SelectItem>
              <SelectItem value="kenya">Kenya</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" className="w-full text-foreground">
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}