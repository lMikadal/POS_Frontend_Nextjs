"use client";

import { ModalForm } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tag() {
  const [formTag, setFormTag] = useState({
    name: "",
  });
  const [tagList, setTagList] = useState([
    {
      id: 0,
      name: "",
      goods: [],
    },
  ]);

  const inputs = [
    {
      label: "ชื่อแท็ก",
      type: "text",
      name: "name",
      value: formTag.name,
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
      setTagList([...tagList, ...[res.data.data]]);
      setFormTag({
        name: "",
      });
    });
  };

  useEffect(() => {
    const url = process.env.API_URL;
    const tagUrl = `${url}/tags/`;

    axios.get(tagUrl).then((res) => {
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
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อแท็ก</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tagList.map((tag: any, idx) => {
              return (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <th>{tag.name}</th>
                  <td>action</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
