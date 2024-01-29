"use client";

import { ModalForm } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tag() {
  const [formTag, setFormTag] = useState({
    id: 0,
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
    let tagUrl = `${process.env.API_URL}/tags/`;
    const dataSend = {
      name: formTag.name,
    };

    if (formTag.id > 0) {
      tagUrl = `${process.env.API_URL}/tags/${formTag.id}`;
      axios.put(tagUrl, JSON.stringify(dataSend)).then((res) => {
        setTagList(
          tagList.map((tag: any) => {
            if (tag.id === formTag.id) {
              return res.data.data;
            }
            return tag;
          })
        );
      });
    } else {
      axios.post(tagUrl, JSON.stringify(dataSend)).then((res) => {
        setTagList([...tagList, ...[res.data.data]]);
      });
    }
    setFormTag({
      id: 0,
      name: "",
    });
  };

  const onEditForm = (id: number, name: string) => {
    setFormTag({
      id: id,
      name: name,
    });
    if (document) {
      (document.getElementById("my_modal") as HTMLFormElement).showModal();
    }
  };

  useEffect(() => {
    const tagUrl = `${process.env.API_URL}/tags/`;

    axios.get(tagUrl).then((res) => {
      setTagList(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          เพิ่มแท็ก
        </button>
        <ModalForm
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
                  <td>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => onEditForm(tag.id, tag.name)}
                    >
                      แก้ไข
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
