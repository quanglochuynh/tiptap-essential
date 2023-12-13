import { useState } from "react";
import { useTipTap, EditorContent, MenuBar } from "tiptap-essential";

export default function Editor() {
  const [content, setContent] = useState("<p></p>");
  const { editor, menuActions, toggles } = useTipTap({
    content,
    setContent,
    placeholder: "Start typing...",
    uploadImage: async () => "https://picsum.photos/200/300",
  });
  return (
    <div className="flex flex-col">
      <MenuBar menuActions={menuActions} toggles={toggles} />
      <EditorContent editor={editor} />
    </div>
  );
}
