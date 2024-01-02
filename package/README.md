
# Tiptap Essential

Tiptap Essential is a React component that provides a simple and easy to use WYSIWYG editor. It is built on top of [tiptap-rich-text-editor](https://www.tiptap.dev/). The implementation process to your project is expected not to take more than 5 minutes.

## License  

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  

# Table of contents  

1. [Screenshots](#screenshots)
2. [Installation](#installation)  
3. [Usage](#usage)  
    1. [Basic](#basic)
    2. [Customization](#customization)
4. [Example](#example)  

## Screenshots  

![App Screenshot](./Screenshot%202023-12-30%20at%2014.44.45.png)

## Installation

- Tiptap-essential

```bash  
  npm install tiptap-essential@latest
```

```bash  
  npm install tiptap-essential@latest --save
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

#### 1. Import the components

```javascript-react
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import "tiptap-essential/dist/index.css";
```

#### 2. Use the components

```javascript-react
const App = () => {
  const { editor, menuBar } = useTipTap();

  return (
    <div className="App">
      <MenuBar menuBar={menuBar} />
      <ContentEditor editor={editor} />
    </div>
  );
};
```

### Customization

#### 1. Declare a base button style

```javascript-react
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

```javascript-react
<MenuBar
  toggles={toggles}
  menuActions={menuActions}
  boxStyle={{
    border: "black 2px solid",
    padding: 8,
    display: "flex",
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

```javascript-react
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

```javascript-react
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

## Example

[CodeSandbox](https://codesandbox.io/p/sandbox/tiptap-essential-example-h3snqw)
