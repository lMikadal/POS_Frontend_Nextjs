"use client";

import { ModalForm } from "@/components";

export default function Tag() {
  const inputs = [
    {
      label: "ชื่อแท็ก",
      type: "text",
      name: "name",
    },
  ];
  return (
    <>
      <div className="flex justify-end">
        <ModalForm
          nameButton="เพิ่มแท็ก"
          FormHeader="เพิ่มแท็ก"
          inputForm={inputs}
        />
      </div>
      <h1>tag</h1>
    </>
  );
}
