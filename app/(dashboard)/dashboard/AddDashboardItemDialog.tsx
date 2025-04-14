"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputField from "@/components/InputField";

export interface DashboardItem {
  title: string;
  category: string;
  amount: number;
}

export function AddDashboardItemDialog({
  trigger,
  onSubmit,
}: {
  trigger: React.ReactNode;
  onSubmit: (item: DashboardItem) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DashboardItem>();

  function handleFormSubmit(data: DashboardItem) {
    onSubmit(data);
    reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Dashboard Item</DialogTitle>
          <DialogDescription>Fill in the information below.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <InputField
              id="title"
              placeholder="Example Metric"
              label="Title"
              {...register("title")}
            />
            {errors.title && <p className="text-red-500 text-sm">Required</p>}
          </div>
          <div>
            <Label className="block text-sm font-medium">Category</Label>
            <Input
              {...register("category", { required: true })}
              className="input w-full"
              placeholder="Earnings / Clients / Sales"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium">Amount</Label>
            <Input
              type="number"
              step="0.01"
              {...register("amount", { required: true, min: 0 })}
              className="input w-full"
              placeholder="e.g. 1000"
            />
            {errors.amount && <p className="text-red-500 text-sm">Invalid</p>}
          </div>

          <div className="flex justify-end">
            <Button type="submit">Add</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
