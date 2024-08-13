"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DollarSignIcon } from "lucide-react";

const chartData = [
  { month: "Janeiro", online: 186, physical: 80 },
  { month: "Fevereiro", online: 305, physical: 200 },
  { month: "Março", online: 237, physical: 120 },
  { month: "Abril", online: 73, physical: 190 },
  { month: "Maio", online: 209, physical: 130 },
  { month: "Junho", online: 214, physical: 140 },
];

const chartConfig = {
  online: {
    label: "Online",
    color: "hsl(var(--chart-1))",
  },
  physical: {
    label: "Loja Física",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const ChartOverview = () => {
  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg text-muted-foreground sm:text-xl">
            Overview Vendas
          </CardTitle>
          <DollarSignIcon className="ml-auto size-4" />
        </div>
        <CardDescription>Vendas no primeiro semestre</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="online" fill="var(--color-online)" radius={4} />
            <Bar dataKey="physical" fill="var(--color-physical)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
