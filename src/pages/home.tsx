import { Coffee } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { CoffeeQuiz } from "@/components/coffee-quiz";
import { CoffeeCard } from "@/components/coffee-card";
import { CoffeeFilters } from "@/components/coffee-filters";
import { Typography } from "@/components/ui/typography";

const coffeeData = [
  {
    name: "Ethiopian Yirgacheffe",
    description:
      "A light-bodied coffee with complex floral and citrus notes, featuring a bright acidity and wine-like finish.",
    roastLevel: "Light",
    origin: "Ethiopia",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800",
    price: "$18.99",
  },
  {
    name: "Colombian Supremo",
    description:
      "A well-balanced coffee with caramel sweetness, subtle notes of toasted nuts, and a smooth chocolate finish.",
    roastLevel: "Medium",
    origin: "Colombia",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800",
    price: "$16.99",
  },
  {
    name: "Sumatra Mandheling",
    description:
      "A full-bodied coffee with earthy flavors, hints of dark chocolate, and a rich, spicy finish.",
    roastLevel: "Dark",
    origin: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800",
    price: "$19.99",
  },
];

export function Home() {
  const handleFilterChange = (filters: {
    roastLevel: string;
    priceRange: number[];
    origin: string;
  }) => {
    console.log("Filters changed:", filters);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="size-6 text-primary" />
            <Typography.H3>AI Coffee Recommender</Typography.H3>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 text-center md:py-16">
        <Typography.H1 className="mb-6">
          Discover Your Perfect Coffee Match
        </Typography.H1>
        <Typography.Lead className="mx-auto max-w-[800px]">
          Let our AI-powered system find the ideal coffee for your taste buds.
          Take our quick quiz or browse our curated selection of premium coffees.
        </Typography.Lead>
      </section>

      {/* Quiz Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-[800px]">
          <CoffeeQuiz />
        </div>
      </section>

      {/* Coffee Selection Section */}
      <section className="container py-12">
        <Typography.H2 className="mb-8">Featured Coffees</Typography.H2>
        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <aside className="w-full md:w-60">
            <CoffeeFilters onFilterChange={handleFilterChange} />
          </aside>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coffeeData.map((coffee) => (
              <CoffeeCard
                key={coffee.name}
                {...coffee}
                onFavorite={() => console.log(`Favorited: ${coffee.name}`)}
                onOrder={() => console.log(`Ordered: ${coffee.name}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8">
          <Typography.Small className="text-center text-muted-foreground">
            © 2024 AI Coffee Recommender. All rights reserved.
          </Typography.Small>
        </div>
      </footer>
    </div>
  );
}