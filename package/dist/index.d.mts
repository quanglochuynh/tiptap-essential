import * as React from 'react';
import React__default, { ChangeEvent } from 'react';
import { Editor } from '@tiptap/react';
import { Level } from '@tiptap/extension-heading';

type Props$2 = {
    placeholder?: string;
    initValue?: string;
    onChange?: (content: string) => void;
    uploadImage?: (file: File) => Promise<string>;
};
declare function useTipTap({ placeholder, initValue, onChange, uploadImage, }: Props$2): {
    editor: Editor;
    menuActions: {
        hasImageAPI: boolean;
        addImage: () => void;
        currentHeading: 0 | Level;
        fileRef: React.RefObject<HTMLInputElement>;
        handleSelectImg: ({ target }: ChangeEvent<HTMLInputElement>) => Promise<undefined>;
    };
    toggles: {
        splitListItem: () => void;
        toggleBold: () => void;
        toggleUnderline: () => void;
        toggleItalic: () => void;
        toggleStrike: () => void;
        toggleHeading: (level: Level) => void;
        toggleNormal: () => void;
        toggleCode: () => void;
        toggleBlockquote: () => void;
        toggleBulletList: () => void;
        toggleOrderedList: () => void;
        toggleTextAlign: (align: "left" | "center" | "right" | "justify") => void;
        toggleHighlight: () => void;
        toggleUndo: () => void;
        toggleRedo: () => void;
    };
};

type Props$1 = {
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
        fileRef: React__default.RefObject<HTMLInputElement>;
        handleSelectImg: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
        hasImageAPI: boolean;
    };
    boxStyle?: React__default.CSSProperties;
    buttonStyle?: React__default.CSSProperties;
    selectStyle?: React__default.CSSProperties;
};
declare function MenuBar({ toggles: { toggleHeading, toggleNormal, toggleBold, toggleItalic, toggleStrike, toggleUnderline, splitListItem, toggleBlockquote, toggleBulletList, toggleOrderedList, toggleCode, toggleTextAlign, toggleHighlight, toggleRedo, toggleUndo, }, menuActions: { currentHeading, addImage, fileRef, handleSelectImg, hasImageAPI, }, boxStyle, buttonStyle, selectStyle, }: Props$1): React__default.JSX.Element;

type Props = {
    editor?: Editor;
    boxStyle: React__default.CSSProperties;
    editorProps?: any;
};
declare function ContentEditor({ editor, boxStyle, editorProps, }: Props): React__default.JSX.Element;

export { ContentEditor, MenuBar, useTipTap };
