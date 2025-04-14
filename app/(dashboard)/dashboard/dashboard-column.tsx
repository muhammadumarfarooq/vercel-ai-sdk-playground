import { ColumnDef } from "@tanstack/react-table";
import { DashboardItem } from "./AddDashboardItemDialog";

export const DashboardColumns: ColumnDef<DashboardItem>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => {
      const value = Number(getValue());
      return <span>${value.toFixed(2)}</span>;
    },
  },
];
