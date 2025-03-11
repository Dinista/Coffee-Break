import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CardMetricProps {
  value: number;
  title: string;
  description: string;
  content?: string;
}

export function CardMetric({
  value,
  title,
  description,
  content,
}: CardMetricProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <Card className="w-full flex items-center justify-center px-5">
      <div className="text-3xl pr-3 font-extrabold text-blue-700 border-r-2 border-gray-300">
        ${formatNumber(value)}
      </div>
      <div>
        <div className="flex flex-col p-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {content && <CardContent className="p-0">{content}</CardContent>}
        </div>
      </div>
    </Card>
  );
}
