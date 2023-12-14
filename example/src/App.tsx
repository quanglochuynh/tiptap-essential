import "tiptap-essential/dist/index.css";
import "./styles.css";
import { useState } from "react";
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import {} from "react";

export default function App() {
  const [content, setContent] = useState<string>("<p>Lorem ipsum</p>");
  const { editor, toggles, menuActions } = useTipTap({
    placeholder: "Start typing something...",
    initValue: content,
    // onChange: (content) => setContent(content),
    uploadImage: async (file: File) => {
      console.log(file);
      return "https://picsum.photos/200/300";
    },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: 8,
        maxWidth: "40rem",
        margin: "auto",
        marginTop: "2rem",
      }}
    >
      <MenuBar
        toggles={toggles}
        menuActions={menuActions}
        boxStyle={{
          border: "black 2px solid",
          padding: 8,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 4,
          borderRadius: 8,
          marginBottom: 8,
        }}
        buttonStyle={{
          backgroundColor: "white",
          border: "none",
          width: 32,
          height: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          marginInline: 4,
          boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: 4,
          color: "#222",
        }}
        selectStyle={{
          backgroundColor: "white",
          border: "none",
          height: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          marginInline: 4,
          paddingInline: 8,
          boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: 4,
          color: "#222",
        }}
      />
      <ContentEditor
        editor={editor}
        boxStyle={{ border: "black 2px solid", padding: 4, borderRadius: 8 }}
      />
      <p>{content}</p>
      <button onClick={() => setContent(editor.getHTML())}>Get HTML</button>
    </div>
  );
}
