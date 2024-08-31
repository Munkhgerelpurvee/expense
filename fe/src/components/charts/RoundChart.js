"use client";
import * as Icons from "react-icons/fa";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import Categories from "../Categories";
const chartData = [
  { browser: "bus", visitors: 275, fill: "var(--color-bus)" },
  { browser: "food", visitors: 200, fill: "var(--color-food)" },
  { browser: "shopping", visitors: 187, fill: "var(--color-shopping)" },
  { browser: "travell", visitors: 173, fill: "var(--color-travell)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  Categories: {
    label: "Categories",
  },
  bus: {
    label: "bus",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "food",
    color: "hsl(var(--chart-2))",
  },
  shopping: {
    label: "shopping",
    color: "hsl(var(--chart-3))",
  },
  travell: {
    label: "travell",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export const RoundChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Income - Expense</CardTitle>
        <CardDescription>Jun 1 - Nov 30</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="Categories" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
