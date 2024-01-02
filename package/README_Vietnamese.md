# Tiptap Essential

English version: [README.md](./README.md)

Tiptap Essential là một thư viện cung cấp Component trình soạn thảo văn bản giống như MS Word, được dev dựa trên thư viện [tiptap-rich-text-editor](https://www.tiptap.dev/). Quá trình triển khai vào dự án của bạn dự kiến sẽ không mất nhiều hơn 5 phút, thay vì phải mất vài giờ đồng hồ tìm hiểu TipTap và cài đặt các thư viện extension khác của Tiptap.

## Giấy phép

[![Giấy phép MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  

## Mục lục  

1. [Ví dụ](#example)  
2. [Ảnh chụp màn hình](#screenshots)
3. [Cài đặt](#installation)  
4. [Sử dụng](#usage)  
    1. [Mì ăn liền](#basic)
    2. [Tùy chỉnh style](#customization)

## Example

[CodeSandbox](https://codesandbox.io/p/sandbox/tiptap-essential-example-h3snqw)

## Screenshots

![App Screenshot](./Screenshot%202023-12-30%20at%2014.44.45.png)

## Installation

- Các bạn cài đặt tiptap-essential và các peer dependencies:

```bash  
  npm install tiptap-essential
```

```bash  
  npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-text-align @tiptap/extension-underline @tiptap/extension-placeholder @tiptap/extension-heading @tiptap/extension-highlight @tiptap/extension-image @tiptap/pm
```

## Usage

### Basic

Sau khi cài đặt gói và các peer dependencies, bạn có thể sử dụng các component như sau:

#### 1. Import các component và CSS

```js
import { useTipTap, MenuBar, ContentEditor } from "tiptap-essential";
import "tiptap-essential/dist/index.css";
```

Các bạn có thể bấm xem file index.css và copy nội dung vào file CSS của bạn. Các bạn có thể tùy chỉnh CSS tuỳ theo ý thích.

#### 2. Sử dụng các component

Sử dụng các component như sau:

- MenuBar: thanh menu chứa các nút chức năng
- ContentEditor: trình soạn thảo văn bản
- useTipTap: hook để sử dụng các chức năng của trình soạn thảo văn bản:
  - editor: đối tượng editor của tiptap
  - menuActions, isActive và toggles: các giá trị cần thiết để hiển thị trên thanh menu

Mỗi khi người dùng thay đổi nội dung trình soạn thảo văn bản, hàm onChange sẽ được gọi. Hàm này nhận vào một tham số là nội dung trình soạn thảo văn bản dưới dạng HTML.

```js
const App = () => {
  const [content, setContent] = useState<string>(initContent);
  const { editor, toggles, menuActions, isActive } = useTipTap({
    placeholder: "Start typing something...",             // optional
    initContent: `<p></p>`,                               // optional
    onChange: (content: string) => setContent(content),   // REQUIRED
    uploadImage: async (file: File) => {                  // optional     
      // Viết hàm upload ảnh (async) của bạn ở đây.
      // Hàm này cần trả về URL của ảnh.
      console.log(file);
      return "https://picsum.photos/200/300";
    },
  });

  return (
    <div className="App">
      <MenuBar 
        toggles={toggles} 
        menuActions={menuActions} 
        isActive={isActive} />
      <ContentEditor editor={editor} />
      <p>{content}<p/>
    </div>
  );
};
```

### Customization

#### 1. Khai báo style cơ bản cho các nút chức năng

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

#### 2. Tuỳ chỉnh biến style của các component

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

#### 3. Tuỳ chỉnh style của trình soạn thảo văn bản

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

#### 4. Tuỳ chỉnh hàm upload ảnh (Optional)

Nếu bạn không cung cấp hàm upload ảnh, nút chức năng upload ảnh sẽ không hiển thị.

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

#### 5. Tuỳ chỉnh CSS cho nội dung trình soạn thảo văn bản (Optional)

Thay vì sử dụng CSS mặc định, bạn có thể import file CSS của bạn.

Ví dụ:

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

### Các tính năng sẽ được thêm vào trong tương lai

- [ ] Thêm chức năng chọn màu chữ
- [ ] Thêm chức năng chọn màu nền chữ
- [ ] Thêm chức năng chọn kích thước chữ
- [ ] Thêm chức năng chọn font chữ

## Authors

Loc Q. Huynh

[Personal website](https://locqhuynh.tech)

Contact for work:

- [ ] Email: <contact@locqhuynh.tech>
- [ ] Facebook: <https://www.facebook.com/locqhuynh/>
