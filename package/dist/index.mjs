var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/TipTapEssential/useTipTap.ts
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useEditor } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
function useTipTap({
  placeholder,
  initContent,
  onChange,
  uploadImage
}) {
  const editor = useEditor({
    content: initContent || "",
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      Placeholder.configure({
        placeholder: placeholder || ""
      }),
      Image.configure({
        inline: true
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Underline,
      Highlight
    ]
  });
  useEffect(() => {
    if (editor && onChange) {
      onChange(editor.getHTML());
    }
  }, [editor, onChange]);
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
    (level) => {
      editor.chain().focus().setHeading({ level }).run();
    },
    [editor]
  );
  const heading = editor ? editor.getAttributes("heading") : void 0;
  const currentHeading = useMemo(() => {
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
    (align) => {
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
    (_0) => __async(this, [_0], function* ({ target }) {
      const files = target.files;
      if (!files)
        return void 0;
      if (files.length === 0)
        return void 0;
      if (files[0].type.indexOf("image/") === -1)
        return void 0;
      if (!uploadImage)
        return void 0;
      try {
        const ret = yield uploadImage(files[0]);
        editor.chain().focus().setImage({ src: ret }).run();
      } catch (error) {
        alert(error.message);
        return;
      }
    }),
    [editor, uploadImage]
  );
  const addImage = useCallback(() => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }, []);
  const fileRef = useRef(null);
  return {
    editor,
    menuActions: {
      hasImageAPI: uploadImage !== void 0,
      addImage,
      currentHeading,
      fileRef,
      handleSelectImg
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
      toggleRedo
    },
    isActive: {
      isBold: editor ? editor.isActive("bold") : false,
      isUnderline: editor ? editor.isActive("underline") : false,
      isItalic: editor ? editor.isActive("italic") : false,
      isStrike: editor ? editor.isActive("strike") : false,
      isCode: editor ? editor.isActive("code") : false,
      isBlockquote: editor ? editor.isActive("blockquote") : false,
      isBulletList: editor ? editor.isActive("bulletList") : false,
      isOrderedList: editor ? editor.isActive("orderedList") : false,
      isHighlight: editor ? editor.isActive("highlight") : false,
      isLeftAlign: editor ? editor.isActive("textAlign", { align: "left" }) : false,
      isCenterAlign: editor ? editor.isActive("textAlign", { align: "center" }) : false,
      isRightAlign: editor ? editor.isActive("textAlign", { align: "right" }) : false,
      isJustifyAlign: editor ? editor.isActive("textAlign", { align: "justify" }) : false
    }
  };
}

// src/TipTapEssential/MenuBar.tsx
import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuCode,
  LuHighlighter,
  LuImage,
  LuItalic,
  LuList,
  LuListOrdered,
  LuQuote,
  LuRedo,
  LuSplit,
  LuStrikethrough,
  LuUnderline,
  LuUndo
} from "react-icons/lu";
import React from "react";
function MenuBar({
  toggles: {
    toggleHeading,
    toggleNormal,
    toggleBold,
    toggleItalic,
    toggleStrike,
    toggleUnderline,
    splitListItem,
    toggleBlockquote,
    toggleBulletList,
    toggleOrderedList,
    toggleCode,
    toggleTextAlign,
    toggleHighlight,
    toggleRedo,
    toggleUndo
  },
  menuActions: {
    currentHeading,
    addImage,
    fileRef,
    handleSelectImg,
    hasImageAPI
  },
  isActive: {
    isBold,
    isItalic,
    isStrike,
    isUnderline,
    isBlockquote,
    isBulletList,
    isOrderedList,
    isCode,
    isHighlight
  },
  boxStyle,
  activeButtonStyle,
  buttonStyle,
  selectStyle
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "tiptap-menu", style: boxStyle }, /* @__PURE__ */ React.createElement("button", { onClick: toggleUndo, style: buttonStyle, title: "Undo" }, /* @__PURE__ */ React.createElement(LuUndo, null)), /* @__PURE__ */ React.createElement("button", { onClick: toggleRedo, style: buttonStyle, title: "Redo" }, /* @__PURE__ */ React.createElement(LuRedo, null)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleBold,
      style: !isBold ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Bold"
    },
    /* @__PURE__ */ React.createElement(LuBold, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleItalic,
      style: !isItalic ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Italic"
    },
    /* @__PURE__ */ React.createElement(LuItalic, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleStrike,
      style: !isStrike ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Strike"
    },
    /* @__PURE__ */ React.createElement(LuStrikethrough, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleUnderline,
      style: !isUnderline ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Underline"
    },
    /* @__PURE__ */ React.createElement(LuUnderline, null)
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      title: "Heading",
      style: selectStyle,
      value: currentHeading.toString(),
      onChange: (e) => {
        if (parseInt(e.target.value) === 0) {
          toggleNormal();
          return;
        }
        toggleHeading(parseInt(e.target.value));
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: 0 }, "Normal"),
    Array.from(Array(6).keys()).map((_, index) => /* @__PURE__ */ React.createElement("option", { key: index, value: index + 1 }, "Heading ", index + 1))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleCode,
      style: !isCode ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Code"
    },
    /* @__PURE__ */ React.createElement(LuCode, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleBlockquote,
      style: !isBlockquote ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Blockquote"
    },
    /* @__PURE__ */ React.createElement(LuQuote, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleBulletList,
      style: !isBulletList ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Bullet List"
    },
    /* @__PURE__ */ React.createElement(LuList, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleOrderedList,
      style: !isOrderedList ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Ordered List"
    },
    /* @__PURE__ */ React.createElement(LuListOrdered, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: splitListItem,
      style: buttonStyle,
      title: "Split List Item"
    },
    /* @__PURE__ */ React.createElement(LuSplit, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("left"),
      style: buttonStyle,
      title: "Align Left"
    },
    /* @__PURE__ */ React.createElement(LuAlignLeft, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("center"),
      style: buttonStyle,
      title: "Align Center"
    },
    /* @__PURE__ */ React.createElement(LuAlignCenter, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("right"),
      style: buttonStyle,
      title: "Align Right"
    },
    /* @__PURE__ */ React.createElement(LuAlignRight, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("justify"),
      style: buttonStyle,
      title: "Align Justify"
    },
    /* @__PURE__ */ React.createElement(LuAlignJustify, null)
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleHighlight(),
      style: !isHighlight ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Highlight"
    },
    /* @__PURE__ */ React.createElement(LuHighlighter, null)
  ), hasImageAPI && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "file",
      id: "file",
      ref: fileRef,
      multiple: false,
      onChange: handleSelectImg
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: addImage, style: buttonStyle, title: "Add Image" }, /* @__PURE__ */ React.createElement(LuImage, null))));
}

// src/TipTapEssential/ContentEditor.tsx
import React2 from "react";
import { EditorContent } from "@tiptap/react";
function ContentEditor({ editor, boxStyle }) {
  return /* @__PURE__ */ React2.createElement("div", { className: "tiptap-editor", style: boxStyle }, editor && /* @__PURE__ */ React2.createElement(EditorContent, { editor }));
}
export {
  ContentEditor,
  MenuBar,
  useTipTap
};
//# sourceMappingURL=index.mjs.map