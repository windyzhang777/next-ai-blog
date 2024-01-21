import { Editor } from "@tiptap/react";

type EditorMenuBarProps = {
  editor: Editor;
};

const EditorMenuBar = ({ editor }: EditorMenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-1 flex-wrap items-center">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-1 ${
          editor.isActive("bold") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        <b>bold</b>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-1 ${
          editor.isActive("italic") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        <i>italic</i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-1 ${
          editor.isActive("strike") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        strike
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-1 ${
          editor.isActive("code") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        code
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`p-1 ${
          editor.isActive("paragraph") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        paragraph
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 1 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">1</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 2 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">2</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 3 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">3</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 4 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">4</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 5 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">5</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`p-1 ${
          editor.isActive("heading", { level: 6 }) &&
          "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        H<span className="text-xs">6</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 ${
          editor.isActive("bulletList") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        bullet list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 ${
          editor.isActive("orderedList") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        ordered list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-1 ${
          editor.isActive("codeBlock") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        code block
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-1 ${
          editor.isActive("blockquote") && "bg-wh-500 text-wh-50 rounded-md"
        }`}
      >
        blockquote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </div>
  );
};

export default EditorMenuBar;
