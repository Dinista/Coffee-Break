import { PageTemplate } from "@/template/PageTemplate";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useReactTable } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const data: Payment[] = [
    { id: "1", amount: 13, status: "pending", email: "example@example.com" },
    { id: "2", amount: 13, status: "pending", email: "example@example.com" },
    { id: "3", amount: 13, status: "pending", email: "example@example.com" },
    { id: "4", amount: 13, status: "pending", email: "example@example.com" },
  ];

  return (
    <PageTemplate>
      <div className="mb-5">
        <h1 className="text-lg font-bold">List of Clients</h1>
        <p>
          Track all your sales in one place. <b>View details</b>,{" "}
          <b>filter by date</b>, and <b>manage transactions</b> easily.
        </p>
      </div>
      <Card>
        <CardHeader>
          <Input
            placeholder="Filter emails..."
            value={""}
            className="max-w-sm"
          />
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={columns} />
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="space-x-2 text-white">
            <Button
              variant="secondary"
              size="sm"

              // onClick={}
              // disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"

              // onClick={() => table.nextPage()}
              // disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </PageTemplate>
  );
}
