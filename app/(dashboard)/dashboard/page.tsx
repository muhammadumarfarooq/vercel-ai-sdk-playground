"use client";

import { Plus } from "lucide-react";
import { DashboardColumns } from "./dashboard-column";
import { useState } from "react";
import {
  AddDashboardItemDialog,
  DashboardItem,
} from "./AddDashboardItemDialog";
import DashboardPageWrapper from "@/components/DashboardPageWrapper";
import { DataTable } from "@/components/data-table";
import AddressAutoComplete from "@/components/AddressAutoComplete/AddressAutoComplete";

export default function DashboardPage() {
  const [items, setItems] = useState<DashboardItem[]>([]);

  function handleAddItem(item: DashboardItem) {
    setItems((prev) => [...prev, item]);
  }

  return (
    <DashboardPageWrapper
      title="Dashboard"
      text="This is Dashboard page"
      buttonText={
        <AddDashboardItemDialog
          onSubmit={handleAddItem}
          trigger={
            <span className="flex items-center gap-2">
              <Plus size={16} />
              Add Item
            </span>
          }
        />
      }
    >
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <DataTable
          data={items}
          columns={DashboardColumns}
          // onRowClick={...}
        />
      </div>
      <div>
        <AddressAutoComplete />
      </div>
    </DashboardPageWrapper>
  );
}
