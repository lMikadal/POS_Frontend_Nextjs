"use client";

import { ModalForm } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tag() {
  const [formTag, setFormTag] = useState({
    name: "",
  });
  const [tagList, setTagList] = useState([]);

  const inputs = [
    {
      label: "ชื่อแท็ก",
      type: "text",
      name: "name",
    },
  ];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormTag((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const onSubmitForm = () => {
    const url = process.env.API_URL;
    const tagUrl = `${url}/tags/`;

    axios.post(tagUrl, JSON.stringify(formTag)).then((res) => {
      //   console.log(res);
    });
  };

  useEffect(() => {
    const url = process.env.API_URL;
    const tagUrl = `${url}/tags/`;

    axios.get(tagUrl).then((res) => {
      console.log(res.data.data);
      setTagList(res.data.data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <ModalForm
          nameButton="เพิ่มแท็ก"
          FormHeader="เพิ่มแท็ก"
          inputForm={inputs}
          funcHandleInput={handleInput}
          funcOnSubmit={onSubmitForm}
        />
      </div>
      <h1>tag</h1>
      {tagList.map((tag: any, idx) => {
        return (
          <div key={idx}>
            <p>{tag.id}</p>
            <p>{tag.name}</p>
          </div>
        );
      })}
    </>
  );
}
