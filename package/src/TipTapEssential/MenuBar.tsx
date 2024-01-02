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
    toggleTextAlign: (align: "left" | "center" | "right" | "justify") => void;
    toggleHighlight: () => void;
    toggleRedo: () => void;
    toggleUndo: () => void;
  };
  menuActions: {
    currentHeading: Level | 0;
    addImage: () => void;
    fileRef: React.RefObject<HTMLInputElement>;
    handleSelectImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasImageAPI: boolean;
  };
  isActive: {
    isBold: boolean;
    isItalic: boolean;
    isStrike: boolean;
    isUnderline: boolean;
    isBlockquote: boolean;
    isBulletList: boolean;
    isOrderedList: boolean;
    isCode: boolean;
    isHighlight: boolean;
  };
  boxStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  activeButtonStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
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
  menuActions: {
    currentHeading,
    addImage,
    fileRef,
    handleSelectImg,
    hasImageAPI,
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
    isHighlight,
  },
  boxStyle,
  activeButtonStyle,
  buttonStyle,
  selectStyle,
}: Props) {
  return (
    <div className="tiptap-menu" style={boxStyle}>
      <button onClick={toggleUndo} style={buttonStyle} title="Undo">
        <LuUndo />
      </button>
      <button onClick={toggleRedo} style={buttonStyle} title="Redo">
        <LuRedo />
      </button>
      <button
        onClick={toggleBold}
        style={!isBold ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }}
        title="Bold"
      >
        <LuBold />
      </button>
      <button
        onClick={toggleItalic}
        style={
          !isItalic ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Italic"
      >
        <LuItalic />
      </button>
      <button
        onClick={toggleStrike}
        style={
          !isStrike ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Strike"
      >
        <LuStrikethrough />
      </button>
      <button
        onClick={toggleUnderline}
        style={
          !isUnderline ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Underline"
      >
        <LuUnderline />
      </button>
      <select
        title="Heading"
        style={selectStyle}
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
      <button
        onClick={toggleCode}
        style={!isCode ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }}
        title="Code"
      >
        <LuCode />
      </button>
      <button
        onClick={toggleBlockquote}
        style={
          !isBlockquote ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Blockquote"
      >
        <LuQuote />
      </button>
      <button
        onClick={toggleBulletList}
        style={
          !isBulletList ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Bullet List"
      >
        <LuList />
      </button>
      <button
        onClick={toggleOrderedList}
        style={
          !isOrderedList
            ? buttonStyle
            : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Ordered List"
      >
        <LuListOrdered />
      </button>
      <button
        onClick={splitListItem}
        style={buttonStyle}
        title="Split List Item"
      >
        <LuSplit />
      </button>
      <button
        onClick={() => toggleTextAlign("left")}
        style={buttonStyle}
        title="Align Left"
      >
        <LuAlignLeft />
      </button>
      <button
        onClick={() => toggleTextAlign("center")}
        style={buttonStyle}
        title="Align Center"
      >
        <LuAlignCenter />
      </button>
      <button
        onClick={() => toggleTextAlign("right")}
        style={buttonStyle}
        title="Align Right"
      >
        <LuAlignRight />
      </button>
      <button
        onClick={() => toggleTextAlign("justify")}
        style={buttonStyle}
        title="Align Justify"
      >
        <LuAlignJustify />
      </button>
      <button
        onClick={() => toggleHighlight()}
        style={
          !isHighlight ? buttonStyle : { ...buttonStyle, ...activeButtonStyle }
        }
        title="Highlight"
      >
        <LuHighlighter />
      </button>
      {hasImageAPI && (
        <>
          <input
            type="file"
            id="file"
            ref={fileRef}
            multiple={false}
            onChange={handleSelectImg}
          />
          <button onClick={addImage} style={buttonStyle} title="Add Image">
            <LuImage />
          </button>
        </>
      )}
    </div>
  );
}
