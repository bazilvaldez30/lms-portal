import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAssets } from "@/lib/hooks";
import { convertKeysToSnakeCase } from "@/lib/utils";

import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export default function AssetForm({ record }: { record?: Asset }) {
  const { addAssetMutation } = useAssets();

  const [formData, setFormData] = React.useState<Asset>(
    convertKeysToSnakeCase(record) || {
      id: "",
      borrower: "",
      borrowed_at: "",
      description: "",
      name: "",
      serial_number: "",
      status: "",
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {record ? (
          <button className="button-primary m-0 bg-white p-0 hover:scale-125">
            <FiEdit className="icon text-blue-600" />
          </button>
        ) : (
          <button className="button-primary mb-5 ms-auto rounded-lg bg-custom-1 px-8 py-3 pe-6">
            Add Asset <FaPlus className="text-xl" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="serial_number" className="text-right">
              Serial Number
            </Label>
            <Input
              onChange={handleChange}
              id="serial_number"
              placeholder="D-1234567890"
              className="col-span-3"
              value={formData?.serial_number}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              onChange={handleChange}
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3"
              value={formData?.name}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onChange={handleChange}
              id="description"
              placeholder="ROG Strix G153RC"
              className="col-span-3"
              value={formData?.description}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="borrower" className="text-right">
              Borrower
            </Label>
            <Input
              onChange={handleChange}
              id="borrower"
              placeholder={record ? "" : "John Doe"}
              className="col-span-3"
              value={formData?.borrower}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="borrowed_at" className="text-right">
              Borrowed At
            </Label>
            <Input
              onChange={handleChange}
              id="borrowed_at"
              placeholder={record ? "" : "February 14, 2022"}
              className="col-span-3"
              value={formData?.borrowed_at}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              onChange={handleChange}
              id="status"
              placeholder="Available"
              className="col-span-3"
              value={formData?.status}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={async () => await addAssetMutation(formData)}
              className=" bg-custom-3"
            >
              {record ? "Save changes" : "Add Asset"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
