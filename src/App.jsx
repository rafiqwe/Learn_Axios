import { Post } from "./components/Post";

function App() {
  return (
    <>
      <div className="container  ">
        <div className="head">
          <h1>Hello Axios Operations </h1>
          <h2>Posts</h2>
        </div>
        <Post />
      </div>
    </>
  );
}

export default App;
