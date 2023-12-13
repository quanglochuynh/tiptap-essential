import { ChangeEvent, useCallback, useEffect, useMemo, useRef } from "react";
import React from "react";
import { useEditor, Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import History from "@tiptap/extension-history";
import Heading, { Level } from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Code from "@tiptap/extension-code";
import Blockquote from "@tiptap/extension-blockquote";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

type Props = {
  placeholder?: string;
  content?: string;
  setContent: (content: string) => void;
  uploadImage?: () => Promise<string>;
};

export default function useTipTap({
  placeholder,
  content,
  setContent,
  uploadImage,
}: Props) {
  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Text,
      Link.configure({
        openOnClick: false,
      }),
      Bold,
      Underline,
      Italic,
      Strike,
      Heading,
      Placeholder.configure({
        placeholder: placeholder || "",
      }),
      Code,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      Image.configure({
        inline: true,
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
  }) as Editor;

  useEffect(() => {
    if (editor) {
      setContent(editor.getHTML());
    }
  }, [editor, setContent]);

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleNormal = useCallback(() => {
    editor.chain().focus().setParagraph().run();
  }, [editor]);

  const toggleHeading = useCallback(
    (level: Level) => {
      editor.chain().focus().setHeading({ level }).run();
    },
    [editor]
  );

  const heading = editor ? editor.getAttributes("heading") : undefined;

  const currentHeading = useMemo((): Level | 0 => {
    if (heading) {
      return heading.level || 0;
    }
    return 0;
  }, [heading]);

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  const toggleBlockquote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);

  const splitListItem = useCallback(() => {
    editor.chain().focus().splitListItem("listItem").run();
  }, [editor]);

  const toggleTextAlign = useCallback(
    (align: "left" | "center" | "right") => {
      editor.chain().focus().setTextAlign(align).run();
    },
    [editor]
  );

  const toggleHighlight = useCallback(() => {
    editor.chain().focus().toggleHighlight().run();
  }, [editor]);

  const toggleUndo = useCallback(() => {
    editor.chain().focus().undo().run();
  }, [editor]);

  const toggleRedo = useCallback(() => {
    editor.chain().focus().redo().run();
  }, [editor]);

  const handleSelectImg = useCallback(
    async ({ target }: ChangeEvent<HTMLInputElement>) => {
      const files = target.files;
      if (!files) return;
      if (uploadImage === undefined) return;
      try {
        const ret = (await uploadImage()) as string;
        editor.chain().focus().setImage({ src: ret }).run();
      } catch (error) {
        alert((error as Error).message);
        return;
      }
    },
    [editor]
  );

  const addImage = useCallback(() => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }, []);

  const fileRef = useRef<HTMLInputElement>(null);

  return {
    editor,
    menuActions: {
      addImage,
      currentHeading,
      fileRef,
      handleSelectImg,
    },
    toggles: {
      splitListItem,
      toggleBold,
      toggleUnderline,
      toggleItalic,
      toggleStrike,
      toggleHeading,
      toggleNormal,
      toggleCode,
      toggleBlockquote,
      toggleBulletList,
      toggleOrderedList,
      toggleTextAlign,
      toggleHighlight,
      toggleUndo,
      toggleRedo,
    },
  };
}
