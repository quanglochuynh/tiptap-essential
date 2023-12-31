import { ChangeEvent, useCallback, useEffect, useMemo, useRef } from "react";
import { useEditor, Editor } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import { Level } from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  placeholder?: string;
  content?: string;
  setContent: (content: string) => void;
  uploadImage?: (file: File) => Promise<string>;
  test?: boolean;
};

export default function useTipTap({
  placeholder,
  content,
  setContent,
  uploadImage,
}: Props) {
  const editor = new Editor({
    content,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || "",
      }),
      Image.configure({
        inline: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Highlight,
    ],
  });

  useEffect(() => {
    if (editor) {
      setContent(editor.getHTML());
    }
  }, [editor]);

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
    (align: "left" | "center" | "right" | "justify") => {
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
      if (!files) return undefined;
      if (files.length === 0) return undefined;
      if (files[0].type.indexOf("image/") === -1) return undefined;
      if (!uploadImage) return undefined;
      try {
        const ret = (await uploadImage(files[0])) as string;
        editor.chain().focus().setImage({ src: ret }).run();
      } catch (error) {
        alert((error as Error).message);
        return;
      }
    },
    [editor, uploadImage]
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
      hasImageAPI: uploadImage !== undefined,
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
