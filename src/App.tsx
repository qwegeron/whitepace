import "./app.css";
import { Route, Routes } from "react-router-dom";
import { MainPage, PostPage } from "./pages";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
