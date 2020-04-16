import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";

import api from "~/services/api";
import { AvatarContainer } from "./styles";

export default function AvatarInput({ name }) {
  const inputRef = useRef();
  const { registerField, defaultValue } = useField("avatar");
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    registerField({
      name: name,
      ref: inputRef.current,
      path: "dataset.file",
    });
  }, [name, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <AvatarContainer>
      <label htmlFor="avatar">
        <img
          src={
            preview || "https://api.adorable.io/avatars/50/abott@adorable.png"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={inputRef}
        />
      </label>
    </AvatarContainer>
  );
}
