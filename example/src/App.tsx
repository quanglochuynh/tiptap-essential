import "tiptap-essential/dist/index.css";
import "./styles.css";
import { useState } from "react";
import { useTipTap, EditorContent, MenuBar } from "tiptap-essential";

export default function App() {
  const [content, setContent] = useState("<p></p>");
  const { editor, menuActions, toggles } = useTipTap({
    content,
    setContent,
    placeholder: "Start typing...",
    uploadImage: async () => "https://picsum.photos/200/300",
  });
  return (
    <div className="container">
      <MenuBar menuActions={menuActions} toggles={toggles} />
      <EditorContent editor={editor} />
      <button onClick={() => console.log(editor.getHTML())}>log</button>
    </div>
  );
}
