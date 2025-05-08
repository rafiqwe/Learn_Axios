import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/postApi";
import { Form } from "./Form";

export const Post = () => {
  const [data, setData] = useState("");
  const getPostData = async () => {
    try {
      const response = await getPosts();
      setData(response.data);
      console.log("Posts data:", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    getPostData();
  }, []);
  // Delete post function
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPosts = data.filter((post) => post.id !== id);
        setData(updatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <Form  data={data} setData={setData}/>
      </section>
      <ul>
        {data &&
          data.map((post) => {
            return (
              <>
                <li key={post.id} className="list">
                  <h3>ID: {post.id}</h3>
                  <h3>Title: {post.title}</h3>
                  <p>Body: {post.body}</p>
                  <button class="button-4" role="button">
                    Edit
                  </button>
                  <button
                    className="button-4"
                    role="button"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};
