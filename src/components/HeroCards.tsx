"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroCards = () => {
  const [users] = useState(1);
  const [months, setMonths] = useState(1);
  const [tier, setTier] = useState<"Value" | "Alloy" | "ZeroDam" | "SpaceCity">("Value");

  const pricing = {
    Value: 10000,
    Alloy: 13000,
    ZeroDam: 15000,
    SpaceCity: 20000,
  };

  const monthlyCost = users * pricing[tier];
  const totalCost = monthlyCost * months;
  const unitLabel = tier === "Value" || tier === "Alloy" ? "/ M" : "/ Match";

  return (
    <div className="w-full max-w-xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Biaya perhitungan</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="months" className="block text-sm font-medium">
              Tentukan Berapa jumlah yang di inginkan
            </label>
            <Input
              id="months"
              type="number"
              min={1}
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              {(["Value", "Alloy", "ZeroDam", "SpaceCity"] as const).map((option) => (
                <Badge
                  key={option}
                  variant={tier === option ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setTier(option)}
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-lg font-semibold">
            RP. {monthlyCost} <span className="text-muted-foreground">{unitLabel}</span>
          </div>

          <div className="text-lg font-bold">
            Total: RP. {totalCost}{" "}
            <span className="text-muted-foreground">
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Order Sekarang</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
