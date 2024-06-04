import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CustomEditor = ({ content, setContent }) => {
  return (
    <ReactQuill
      theme="snow"
      value={content}
      style={{
        backgroundColor: "white",
        color: "black",
        height: "100%",
      }}
      onChange={setContent}
    ></ReactQuill>
  );
};

export default CustomEditor;
