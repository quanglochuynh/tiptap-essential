import {
  LuAlignCenter,
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
  LuUndo,
} from "react-icons/lu";
import React from "react";

import { Level } from "@tiptap/extension-heading";
type Props = {
  toggles: {
    toggleHeading: (level: Level) => void;
    toggleNormal: () => void;
    toggleBold: () => void;
    toggleItalic: () => void;
    toggleStrike: () => void;
    toggleUnderline: () => void;
    splitListItem: () => void;
    toggleBlockquote: () => void;
    toggleBulletList: () => void;
    toggleOrderedList: () => void;
    toggleCode: () => void;
    toggleTextAlign: (align: "left" | "center" | "right") => void;
    toggleHighlight: () => void;
    toggleRedo: () => void;
    toggleUndo: () => void;
  };
  menuActions: {
    currentHeading: Level | 0;
    addImage: () => void;
    fileRef: React.RefObject<HTMLInputElement>;
    handleSelectImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

export default function MenuBar({
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
    toggleUndo,
  },
  menuActions: { currentHeading, addImage, fileRef, handleSelectImg },
}: Props) {
  return (
    <div className="tiptap-menu">
      <button onClick={toggleUndo}>
        <LuUndo />
      </button>
      <button onClick={toggleRedo}>
        <LuRedo />
      </button>
      <button onClick={toggleBold}>
        <LuBold />
      </button>
      <button onClick={toggleItalic}>
        <LuItalic />
      </button>
      <button onClick={toggleStrike}>
        <LuStrikethrough />
      </button>
      <button onClick={toggleUnderline}>
        <LuUnderline />
      </button>
      <select
        value={currentHeading.toString()}
        onChange={(e) => {
          if (parseInt(e.target.value) === 0) {
            toggleNormal();
            return;
          }
          toggleHeading(parseInt(e.target.value) as Level);
        }}
      >
        <option value={0}>Normal</option>
        {Array.from(Array(6).keys()).map((_, index) => (
          <option key={index} value={index + 1}>
            Heading {index + 1}
          </option>
        ))}
      </select>
      <button onClick={toggleCode}>
        <LuCode />
      </button>
      <button onClick={toggleBlockquote}>
        <LuQuote />
      </button>
      <button onClick={toggleBulletList}>
        <LuList />
      </button>
      <button onClick={toggleOrderedList}>
        <LuListOrdered />
      </button>
      <button onClick={splitListItem}>
        <LuSplit />
      </button>
      <button onClick={() => toggleTextAlign("left")}>
        <LuAlignLeft />
      </button>
      <button onClick={() => toggleTextAlign("center")}>
        <LuAlignCenter />
      </button>
      <button onClick={() => toggleTextAlign("right")}>
        <LuAlignRight />
      </button>
      <button onClick={() => toggleHighlight()}>
        <LuHighlighter />
      </button>
      <input
        type="file"
        id="file"
        ref={fileRef}
        multiple={false}
        onChange={handleSelectImg}
      />
      <button onClick={addImage}>
        <LuImage />
      </button>
    </div>
  );
}
