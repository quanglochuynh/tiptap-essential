import { CodeBlockOptions } from '@tiptap/extension-code-block';
export interface CodeBlockLowlightOptions extends CodeBlockOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
}
export declare const CodeBlockLowlight: import("@tiptap/core").Node<CodeBlockLowlightOptions, any>;
