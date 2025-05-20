"use client";

import { CardMetric } from "@/components/card-metric";
import { TableMetric } from "@/components/table-metric";
import { GraphComponent } from "@/components/ui/graph";
import { ChartPieComponent } from "@/components/ui/pie-chart";
import { waitlistsApiCreateEntry } from "@/services/api/waitlist/waitlist";
import { PageTemplate } from "@/template/PageTemplate";

export default function Dashboard() {
  const upload = async () => {
    await waitlistsApiCreateEntry({ email: "teste1@teste.com" });
  };
  return (
    <PageTemplate>
      {/* <button onClick={upload}>fdasfsdfasd</button> */}
      <div className="">
        <div className="w-full flex flex-col gap-2 font-bold">
          <h1>Your statics, all in one place.</h1>
          <div className="flex gap-4">
            <ChartPieComponent />
            <GraphComponent />
          </div>
          <div className="flex w-full justify-center gap-3">
            <CardMetric
              value={20000}
              description="Example 1"
              title="Introduction"
            />
            <CardMetric
              value={200000}
              description="Example 2"
              title="Sales Count"
            />
            <CardMetric
              value={50000000}
              description="Last month"
              title="Revanue"
            />
          </div>
          <div>
            <TableMetric />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
