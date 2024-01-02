import { useState } from "react";
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import {} from "react";
import "tiptap-essential/dist/index.css";

const initContent = "<p></p>";
function App() {
  const [content, setContent] = useState<string>(initContent);
  const { editor, toggles, menuActions, isActive } = useTipTap({
    placeholder: "Start typing something...",
    initContent,
    onChange: (content: string) => setContent(content),
    uploadImage: async (file: File) => {
      console.log(file);
      return "https://picsum.photos/200/300";
    },
  });
  console.log(isActive);

  return (
    <>
      <MenuBar
        toggles={toggles}
        menuActions={menuActions}
        boxStyle={{
          border: "black 2px solid",
          padding: 8,
          display: "flex",
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
        isActive={isActive}
        activeButtonStyle={{
          backgroundColor: "#222",
          color: "white",
        }}
      />
      <ContentEditor
        editor={editor}
        boxStyle={{ border: "black 2px solid", padding: 4, borderRadius: 8 }}
      />
      <p>{content}</p>
    </>
  );
}

export default App;
