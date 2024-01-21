"use client";
import SocialLinks from "@/app/(shared)/SocialLinks";
import EditorMenuBar from "@/app/post/[id]/EditorMenuBar";
import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { EditorContent, EditorEvents, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type ContentProps = {
  post: FormattedPost;
};

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const handleSubmit = () => console.log(`submit`);
  const handleChangeContent = ({ editor }: EditorEvents["update"]) => {
    if (!editor?.isEmpty) {
      setContentError("");
    }
    setContent(editor?.getHTML());
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };
  const toggleIsEditable = () => {
    editor?.setEditable(!isEditable);
    setIsEditable((prev) => !prev);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleChangeContent,
    content,
    editable: isEditable,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="prose w-full max-w-full">
      {/* BREADCRUMS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* CATEGORY ICON AND EDIT BUTTON */}
      <div className="flex justify-between items-center mt-6">
        <div className="uppercase font-bold text-sm bg-accent-orange px-8 py-2">
          {post.category}
        </div>
        <button type="button" onClick={toggleIsEditable}>
          {isEditable ? (
            <XMarkIcon className="h-6 w-6 text-accent-red" />
          ) : (
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          )}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        {/* TITLE */}
        <h4
          className={`font-bold text-3xl py-2 border-2 rounded-md ${
            isEditable ? "border-inherit bg-wh-50 px-3" : "border-transparent"
          }`}
        >
          {isEditable ? (
            <input
              className="w-full"
              placeholder={title || "title"}
              onChange={handleChangeTitle}
              value={title}
            />
          ) : (
            <div>{title}</div>
          )}
        </h4>
        {/* AUTHOR */}
        <div className="flex gap-3 items-center">
          <div className="font-semibold text-sm">{post.author}</div>
          <div className="text-wh-300 text-sm">{post.updatedAt}</div>
        </div>
        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            alt={post.title}
            src={post.image}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 85vw, (max-width: 1060px) 75vw, 60vw"
          />
        </div>
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
        {/* BUTTON SUBMIT */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="uppercase bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold px-4 py-2 my-8"
              onClick={toggleIsEditable}
            >
              submit
            </button>
          </div>
        )}
      </form>
      {/* SOCIAL LINKS */}
      <div className="hidden md:block w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
