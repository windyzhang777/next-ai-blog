"use client";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { FormattedPost } from "@/app/types";
import { EditorEvents, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Article from "./Article";
import CategoryAndEdit from "./CategoryAndEdit";

type ContentProps = {
  post: FormattedPost;
};

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [tmpTitle, setTmpTitle] = useState<string>(title);
  const [titleError, setTitleError] = useState<string>("");
  const [content, setContent] = useState<string>(post.content);
  const [tmpContent, setTmpContent] = useState<string>(content);
  const [contentError, setContentError] = useState<string>("");

  const handleSubmit = () => {
    console.log(`submit`);
    toggleIsEditable();
  };
  const handleChangeContent = ({ editor }: EditorEvents["update"]) => {
    if (!editor?.isEmpty) {
      setContentError("");
    }
    setContent(editor?.getHTML() || "");
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };
  const toggleIsEditable = () => {
    editor?.setEditable(!isEditable);
    setIsEditable((prev) => {
      console.log(`prev :`, prev);
      if (prev) {
        setTitle(tmpTitle);
        editor?.commands.setContent(tmpContent);
      }
      return !prev;
    });
    setTmpTitle(title);
    setTmpContent(editor?.getHTML() || "");
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleChangeContent,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    content,
    editable: isEditable,
  });

  return (
    <div className="prose w-full max-w-full">
      {/* BREADCRUMS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* CATEGORY ICON AND EDIT BUTTON */}
      <CategoryAndEdit
        isEditable={isEditable}
        post={post}
        toggleIsEditable={toggleIsEditable}
      />
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
          <div className="text-wh-300 text-sm">
            {new Date(post.updatedAt).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
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
        {editor && (
          <Article
            contentError={contentError}
            editor={editor}
            isEditable={isEditable}
          />
        )}
        {/* BUTTON SUBMIT */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="uppercase bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold px-4 py-2 my-8"
              onClick={handleSubmit}
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
