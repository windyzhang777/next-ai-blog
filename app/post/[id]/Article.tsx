import { Editor, EditorContent } from "@tiptap/react";
import EditorMenuBar from "./EditorMenuBar";

type ArticleProps = {
  contentError: string;
  editor: Editor;
  isEditable: boolean;
};

const Article = ({ contentError, editor, isEditable }: ArticleProps) => {
  return (
    <>
      {/* EDITABLE CONTENT */}
      <div
        className={`py-2 border-2 rounded-md  ${
          isEditable ? "border-inherit bg-wh-50 px-3" : "border-transparent"
        }`}
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {/* CONTENT ERROR */}
      {contentError && (
        <p className="w-auto inline-block px-2 bg-red-500 text-wh-10">
          {contentError}
        </p>
      )}
    </>
  );
};

export default Article;
