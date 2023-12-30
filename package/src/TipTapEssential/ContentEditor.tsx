import { Editor, EditorContent, EditorContentProps } from "@tiptap/react";
import React from "react";

type Props = {
  editor?: Editor;
  boxStyle: React.CSSProperties;
  editorProps?: any;
};

export default function ContentEditor({
  editor,
  boxStyle,
  editorProps,
}: Props) {
  return (
    <div className="tiptap-editor" style={boxStyle}>
      {editor && <EditorContent {...editorProps} editor={editor} />}
    </div>
  );
}
