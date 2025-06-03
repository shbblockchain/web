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

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

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

  const message = `Halo, saya ingin memesan paket ${tier} selama ${months} bulan dengan total ${formatRupiah(totalCost)}`;
  const whatsappLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full max-w-xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Biaya perhitungan</CardTitle>
          <CardDescription></CardDescription>
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
            {formatRupiah(monthlyCost)}{" "}
            <span className="text-muted-foreground">{unitLabel}</span>
          </div>

          <div className="text-lg font-bold">
            Total: {formatRupiah(totalCost)}
          </div>
        </CardContent>

        <CardFooter>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full">Order Sekarang</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
