import { useState } from "react";
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import "tiptap-essential/dist/index.css";

const initContent = "<p></p>";

const baseButtonStyle = {
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
};

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

  return (
    <>
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
        buttonStyle={baseButtonStyle}
        selectStyle={{
          ...baseButtonStyle,
          width: 96,
          padding: 0,
          justifyContent: "flex-start",
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
