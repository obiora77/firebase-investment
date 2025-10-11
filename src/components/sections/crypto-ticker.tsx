"use client";

import { cryptoData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CryptoTicker() {
  const extendedCryptoData = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto overflow-hidden py-2">
        <div className="relative w-full">
          <div className="flex animate-marquee">
            {extendedCryptoData.map((crypto, index) => (
              <div
                key={index}
                className="mx-4 flex flex-shrink-0 items-center space-x-4"
              >
                <span className="font-semibold">{crypto.name}</span>
                <span className="text-sm">${crypto.price.toLocaleString()}</span>
                <div className="flex items-center">
                  <crypto.Icon
                    className={cn(
                      "h-4 w-4",
                      crypto.change > 0 ? "text-green-500" : "text-red-500"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      crypto.change > 0 ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {crypto.change > 0 ? "+" : ""}
                    {crypto.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
