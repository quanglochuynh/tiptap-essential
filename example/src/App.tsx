import { useState } from "react";
import { useTipTap, MenuBar, EditorContent } from "tiptap-essential";
import {} from "react";

function App() {
  const [content, setContent] = useState<string>("<p></p>");
  const { editor, menuActions, toggles } = useTipTap({
    setContent,
  });
  console.log(editor);

  // if (!editor) return <></>;
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
      />
      {/* {editor && <ContentEditor editor={editor} />} */}
      {/* <ContentEditor
        // editor={editor}
        boxStyle={{ border: "black 2px solid", padding: 4, borderRadius: 8 }}
      /> */}
      {editor && <EditorContent editor={editor} />}
      <p>{content}</p>
    </>
  );
}

export default App;
