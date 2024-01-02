
# Tiptap Essential

Vietnamese version: [README_Vietnamese.md](./README_Vietnamese.md)

Tiptap Essential is an instant React component that provides a simple and easy to customize Rich-text editor. It is built on top of [tiptap-rich-text-editor](https://www.tiptap.dev/). The implementation process to your project is expected not to take more than 5 minutes.

## License  

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  

# Table of contents  

1. [Example](#example)  
2. [Screenshots](#screenshots)
3. [Installation](#installation)  
4. [Usage](#usage)  
    1. [Basic](#basic)
    2. [Customization](#customization)

## Example

[CodeSandbox](https://codesandbox.io/p/sandbox/tiptap-essential-example-h3snqw)

## Screenshots  

![App Screenshot](./Screenshot%202023-12-30%20at%2014.44.45.png)

## Installation

- Tiptap-essential

```bash  
  npm install tiptap-essential
```

- Peer dependencies:

1. @tiptap/react
2. @tiptap/starter-kit
3. @tiptap/extension-text-align
4. @tiptap/extension-underline
5. @tiptap/extension-placeholder
6. @tiptap/extension-heading
7. @tiptap/extension-highlight
8. @tiptap/extension-image
9. @tiptap/pm

```bash  
  npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-text-align @tiptap/extension-underline @tiptap/extension-placeholder @tiptap/extension-heading @tiptap/extension-highlight @tiptap/extension-image @tiptap/pm
```

## Usage

### Basic

After install the package and its peer dependencies, you can use the components as below:

#### 1. Import the components

```js
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import "tiptap-essential/dist/index.css";
```

Open the index.css file and copy the content to your own CSS file. Feel free to customize the CSS.

#### 2. Use the components

Conponents:

- MenuBar: the menu bar that contains the menu buttons
- ContentEditor: the rich-text editor
- useTipTap: the hook to use the editor functionalities:
  - editor: the tiptap editor object
  - menuActions, isActive and toggles: the values to be displayed on the menu bar

The onChange function is called every time the user changes the content of the editor. It takes a parameter which is the HTML content of the editor.

```js
const App = () => {
  const [content, setContent] = useState<string>(initContent);
  const { editor, menuBar } = useTipTap({
    placeholder: "Start typing something...",             // optional
    initContent: `<p></p>`,                               // optional
    onChange: (content: string) => setContent(content),   // required
    uploadImage: async (file: File) => {                  // optional     
      // Write your own async image upload function here. 
      // The function is expected to return the image URL.
      console.log(file);
      return "https://picsum.photos/200/300";
    },
  });

  return (
    <div className="App">
      <MenuBar menuBar={menuBar} />
      <ContentEditor editor={editor} />
      <p>{content}<p/>
    </div>
  );
};
```

### Customization

#### 1. Declare a base button style

```js
const baseButtonStyle = {
  backgroundColor: "white",
  border: "none",
  width: 32,
  height: 32,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginInline: 4,
  boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: 4,
  color: "#222",
};
```

#### 2. Apply the style to the toggles and menu actions

```js
<MenuBar
  toggles={toggles}
  menuActions={menuActions}
  boxStyle={{
    border: "black 2px solid",
    padding: 8,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 4,
    borderRadius: 8,
    marginBottom: 8,
  }}
  buttonStyle={baseButtonStyle}
  selectStyle={{
    ...baseButtonStyle,
    width: 96,
    padding: 0,
    justifyContent: "flex-start",
  }}
  isActive={isActive}
  activeButtonStyle={{
    backgroundColor: "#222",
    color: "white",
  }}
/>
```

#### 3. Apply the style to the editor

```js
<ContentEditor
  editor={editor}
  editorStyle={{
    border: "black 2px solid",
    padding: 8,
    borderRadius: 8,
    minHeight: 200,
  }}
/>
```

#### 4. Customize the image upload function (optional)

If the image upload function is not provided, the image button will not be visible.

```js
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "preset_name");
  const response = await fetch(
    "https://you_server_domain.com/your-image-upload-route/",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();
  return data.url;
};
```

#### 5. Customize the editor content CSS (optional)

Instead of using the default CSS, you can import your own CSS file.

e.g.

```css
.ProseMirror {
  min-height: 6rem;
}

.editor-mini .ProseMirror {
  padding-top: 8px;
}

.ProseMirror-focused {
  border: 2px solid #222;
}
```

### Features to be added in the future

- [ ] Add text color picker
- [ ] Add text background color picker
- [ ] Add text font size picker
- [ ] Add text font family picker

## Authors

Loc Q. Huynh
[Personal website](https://locqhuynh.tech)
Contact for work:

- [ ] Email: <contact@locqhuynh.tech>
- [ ] Facebook: <https://www.facebook.com/locqhuynh/>
