"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  EditorContent: () => import_react4.EditorContent,
  MenuBar: () => MenuBar,
  useTipTap: () => useTipTap
});
module.exports = __toCommonJS(src_exports);

// src/TipTapEssential/useTipTap.ts
var import_react = require("react");
var import_react2 = require("@tiptap/react");
var import_extension_document = __toESM(require("@tiptap/extension-document"));
var import_extension_paragraph = __toESM(require("@tiptap/extension-paragraph"));
var import_extension_text = __toESM(require("@tiptap/extension-text"));
var import_extension_link = __toESM(require("@tiptap/extension-link"));
var import_extension_bold = __toESM(require("@tiptap/extension-bold"));
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_extension_italic = __toESM(require("@tiptap/extension-italic"));
var import_extension_strike = __toESM(require("@tiptap/extension-strike"));
var import_extension_history = __toESM(require("@tiptap/extension-history"));
var import_extension_heading = __toESM(require("@tiptap/extension-heading"));
var import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder"));
var import_extension_code = __toESM(require("@tiptap/extension-code"));
var import_extension_blockquote = __toESM(require("@tiptap/extension-blockquote"));
var import_extension_list_item = __toESM(require("@tiptap/extension-list-item"));
var import_extension_bullet_list = __toESM(require("@tiptap/extension-bullet-list"));
var import_extension_ordered_list = __toESM(require("@tiptap/extension-ordered-list"));
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
function useTipTap({
  placeholder,
  content,
  setContent,
  uploadImage
}) {
  const editor = (0, import_react2.useEditor)({
    extensions: [
      import_extension_document.default,
      import_extension_history.default,
      import_extension_paragraph.default,
      import_extension_text.default,
      import_extension_link.default.configure({
        openOnClick: false
      }),
      import_extension_bold.default,
      import_extension_underline.default,
      import_extension_italic.default,
      import_extension_strike.default,
      import_extension_heading.default,
      import_extension_placeholder.default.configure({
        placeholder: placeholder || ""
      }),
      import_extension_code.default,
      import_extension_blockquote.default,
      import_extension_bullet_list.default,
      import_extension_ordered_list.default,
      import_extension_list_item.default,
      import_extension_image.default.configure({
        inline: true
      }),
      import_extension_highlight.default,
      import_extension_text_align.default.configure({
        types: ["heading", "paragraph"]
      })
    ],
    content
  });
  (0, import_react.useEffect)(() => {
    if (editor) {
      setContent(editor.getHTML());
    }
  }, [editor, setContent]);
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
        return;
      if (uploadImage === void 0)
        return;
      try {
        const ret = yield uploadImage();
        editor.chain().focus().setImage({ src: ret }).run();
      } catch (error) {
        alert(error.message);
        return;
      }
    }),
    [editor]
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
  menuActions: { currentHeading, addImage, fileRef, handleSelectImg }
}) {
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "tiptap-menu" }, /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleUndo }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuUndo, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleRedo }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuRedo, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleBold }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuBold, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleItalic }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuItalic, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleStrike }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuStrikethrough, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleUnderline }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuUnderline, null)), /* @__PURE__ */ import_react3.default.createElement(
    "select",
    {
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
  ), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleCode }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuCode, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleBlockquote }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuQuote, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleBulletList }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuList, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: toggleOrderedList }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuListOrdered, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: splitListItem }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuSplit, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: () => toggleTextAlign("left") }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignLeft, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: () => toggleTextAlign("center") }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignCenter, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: () => toggleTextAlign("right") }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuAlignRight, null)), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: () => toggleHighlight() }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuHighlighter, null)), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "file",
      id: "file",
      ref: fileRef,
      multiple: false,
      onChange: handleSelectImg
    }
  ), /* @__PURE__ */ import_react3.default.createElement("button", { onClick: addImage }, /* @__PURE__ */ import_react3.default.createElement(import_lu.LuImage, null)));
}

// src/index.ts
var import_react4 = require("@tiptap/react");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EditorContent,
  MenuBar,
  useTipTap
});
//# sourceMappingURL=index.js.map