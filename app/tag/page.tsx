"use client";

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormTag((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const onEditForm = (id: number, name: string) => {
    setFormTag({
      id: id,
      name: name,
    });
  };

  const onDeleteForm = (id: number) => {
    const tagUrl = `${process.env.API_URL}/tags/${id}`;
    axios.delete(tagUrl).then((res) => {
      setTagList(tagList.filter((tag: any) => tag.id !== id));
    });
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

  useEffect(() => {
    const tagUrl = `${process.env.API_URL}/tags/`;

    axios.get(tagUrl).then((res) => {
      setTagList(res.data.data);
    });
  }, []);

  return (
    <>
      <h1>tag page</h1>
      <div>
        <div>
          <label>idแท็ก</label>
          <input
            type="text"
            name="id"
            placeholder="idแท็ก"
            onChange={(e) => handleInput(e)}
            value={formTag.id}
            className="border border-gray-300"
          />
        </div>
        <div>
          <label>ชื่อแท็ก</label>
          <input
            type="text"
            name="name"
            placeholder="ชื่อแท็ก"
            onChange={(e) => handleInput(e)}
            value={formTag.name}
            className="border border-gray-300"
          />
        </div>
        <button className="border border-gray-300" onClick={onSubmitForm}>
          บันทึก
        </button>
      </div>
      <div>
        <table>
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
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{tag.name}</td>
                  <td>
                    <button
                      className="border border-gray-300"
                      onClick={() => onEditForm(tag.id, tag.name)}
                    >
                      แก้ไข
                    </button>
                    <button
                      className="border border-gray-300"
                      onClick={() => onDeleteForm(tag.id)}
                    >
                      ลบ
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
