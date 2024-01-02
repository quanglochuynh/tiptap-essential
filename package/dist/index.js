"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ContentEditor: () => ContentEditor,
  MenuBar: () => MenuBar,
  useTipTap: () => useTipTap
});
module.exports = __toCommonJS(src_exports);

// src/TipTapEssential/useTipTap.ts
var import_react = require("react");
var import_react2 = require("@tiptap/react");
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder"));
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
function useTipTap({
  placeholder,
  initContent,
  onChange,
  uploadImage
}) {
  const editor = (0, import_react2.useEditor)({
    content: initContent || "",
    extensions: [
      import_starter_kit.default.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      import_extension_placeholder.default.configure({
        placeholder: placeholder || ""
      }),
      import_extension_image.default.configure({
        inline: true
      }),
      import_extension_text_align.default.configure({
        types: ["heading", "paragraph"]
      }),
      import_extension_underline.default,
      import_extension_highlight.default
    ]
  });
  (0, import_react.useEffect)(() => {
    if (editor && onChange) {
      onChange(editor.getHTML());
    }
  }, [editor, onChange]);
  const toggleBold = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);
  const toggleUnderline = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);
  const toggleItalic = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);
  const toggleStrike = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);
  const toggleNormal = (0, import_react.useCallback)(() => {
    editor.chain().focus().setParagraph().run();
  }, [editor]);
  const toggleHeading = (0, import_react.useCallback)(
    (level) => {
      editor.chain().focus().setHeading({ level }).run();
    },
    [editor]
  );
  const heading = editor ? editor.getAttributes("heading") : void 0;
  const currentHeading = (0, import_react.useMemo)(() => {
    if (heading) {
      return heading.level || 0;
    }
    return 0;
  }, [heading]);
  const toggleCode = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);
  const toggleBlockquote = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);
  const toggleBulletList = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);
  const toggleOrderedList = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);
  const splitListItem = (0, import_react.useCallback)(() => {
    editor.chain().focus().splitListItem("listItem").run();
  }, [editor]);
  const toggleTextAlign = (0, import_react.useCallback)(
    (align) => {
      editor.chain().focus().setTextAlign(align).run();
    },
    [editor]
  );
  const toggleHighlight = (0, import_react.useCallback)(() => {
    editor.chain().focus().toggleHighlight().run();
  }, [editor]);
  const toggleUndo = (0, import_react.useCallback)(() => {
    editor.chain().focus().undo().run();
  }, [editor]);
  const toggleRedo = (0, import_react.useCallback)(() => {
    editor.chain().focus().redo().run();
  }, [editor]);
  const handleSelectImg = (0, import_react.useCallback)(
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
  const addImage = (0, import_react.useCallback)(() => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }, []);
  const fileRef = (0, import_react.useRef)(null);
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
var import_lu = require("react-icons/lu");
var import_react3 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "tiptap-menu", style: boxStyle }, /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleUndo, style: buttonStyle, title: "Undo" }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuUndo, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleRedo, style: buttonStyle, title: "Redo" }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuRedo, null)), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleBold,
      style: !isBold ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Bold"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuBold, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleItalic,
      style: !isItalic ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Italic"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuItalic, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleStrike,
      style: !isStrike ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Strike"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuStrikethrough, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleUnderline,
      style: !isUnderline ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Underline"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuUnderline, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
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
    /* @__PURE__ */ import_react3.default.createElement("option", { value: 0 }, "Normal"),
    Array.from(Array(6).keys()).map((_, index) => /* @__PURE__ */ import_react3.default.createElement("option", { key: index, value: index + 1 }, "Heading ", index + 1))
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleCode,
      style: !isCode ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Code"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuCode, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleBlockquote,
      style: !isBlockquote ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Blockquote"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuQuote, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleBulletList,
      style: !isBulletList ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Bullet List"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuList, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: toggleOrderedList,
      style: !isOrderedList ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Ordered List"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuListOrdered, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: splitListItem,
      style: buttonStyle,
      title: "Split List Item"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuSplit, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("left"),
      style: buttonStyle,
      title: "Align Left"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignLeft, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("center"),
      style: buttonStyle,
      title: "Align Center"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignCenter, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("right"),
      style: buttonStyle,
      title: "Align Right"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignRight, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => toggleTextAlign("justify"),
      style: buttonStyle,
      title: "Align Justify"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignJustify, null)
  ), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => toggleHighlight(),
      style: !isHighlight ? buttonStyle : __spreadValues(__spreadValues({}, buttonStyle), activeButtonStyle),
      title: "Highlight"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lu.LuHighlighter, null)
  ), hasImageAPI && /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "file",
      id: "file",
      ref: fileRef,
      multiple: false,
      onChange: handleSelectImg
    }
  ), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: addImage, style: buttonStyle, title: "Add Image" }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuImage, null))));
}

// src/TipTapEssential/ContentEditor.tsx
var import_react4 = __toESM(require("react"));
var import_react5 = require("@tiptap/react");
function ContentEditor({ editor, boxStyle }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "tiptap-editor", style: boxStyle }, editor && /* @__PURE__ */ import_react4.default.createElement(import_react5.EditorContent, { editor }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContentEditor,
  MenuBar,
  useTipTap
});
//# sourceMappingURL=index.js.map