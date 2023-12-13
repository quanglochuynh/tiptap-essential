import React, { ChangeEvent } from 'react';
import { Editor } from '@tiptap/react';
export { EditorContent } from '@tiptap/react';
import { Level } from '@tiptap/extension-heading';

type Props$1 = {
    placeholder?: string;
    content?: string;
    setContent: (content: string) => void;
    uploadImage?: () => Promise<string>;
};
declare function useTipTap({ placeholder, content, setContent, uploadImage, }: Props$1): {
    editor: Editor;
    menuActions: {
        addImage: () => void;
        currentHeading: 0 | Level;
        fileRef: React.RefObject<HTMLInputElement>;
        handleSelectImg: ({ target }: ChangeEvent<HTMLInputElement>) => Promise<void>;
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
        toggleTextAlign: (align: "left" | "center" | "right") => void;
        toggleHighlight: () => void;
        toggleUndo: () => void;
        toggleRedo: () => void;
    };
};

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
declare function MenuBar({ toggles: { toggleHeading, toggleNormal, toggleBold, toggleItalic, toggleStrike, toggleUnderline, splitListItem, toggleBlockquote, toggleBulletList, toggleOrderedList, toggleCode, toggleTextAlign, toggleHighlight, toggleRedo, toggleUndo, }, menuActions: { currentHeading, addImage, fileRef, handleSelectImg }, }: Props): React.JSX.Element;

export { MenuBar, useTipTap };
