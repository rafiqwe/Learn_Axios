import { useState } from "react";
import { createPost } from "../api/postApi";

export const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const handleAddData = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({ ...prev, [name]: value }));
  };
  const addPostData = async () => {
    const res = await createPost(addData);
    console.log("response", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({
        title: "",
        body: "",
      });
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  return (
    <>
      <form onSubmit={handelSubmit} method="POST">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={addData.title}
          onChange={handleAddData}
          required
        />
        <label for="post">Post:</label>
        <input
          id="post"
          name="body"
          rows="5"
          value={addData.body}
          onChange={handleAddData}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
