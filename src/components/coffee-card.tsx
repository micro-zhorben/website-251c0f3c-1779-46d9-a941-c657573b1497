import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  imageUrl: string;
  price: string;
  onFavorite?: () => void;
  onOrder?: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  imageUrl,
  price,
  onFavorite,
  onOrder,
}: CoffeeCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>{origin}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onFavorite}
            className="text-foreground"
          >
            <Heart className="size-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Typography.P>{description}</Typography.P>
          <div className="flex items-center justify-between">
            <div>
              <Typography.Small className="text-muted-foreground">
                Roast Level
              </Typography.Small>
              <Typography.P className="font-medium">{roastLevel}</Typography.P>
            </div>
            <div className="text-right">
              <Typography.Small className="text-muted-foreground">
                Price
              </Typography.Small>
              <Typography.P className="font-medium">{price}</Typography.P>
            </div>
          </div>
          <Button onClick={onOrder} className="w-full">
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}