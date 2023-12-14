import { Editor, EditorContent } from "@tiptap/react";
import React from "react";

type Props = {
  editor?: Editor;
  boxStyle: React.CSSProperties;
};

export default function ContentEditor({ editor, boxStyle }: Props) {
  return (
    <div className="tiptap-editor" style={boxStyle}>
      {editor && <EditorContent editor={editor} />}
    </div>
  );
}
