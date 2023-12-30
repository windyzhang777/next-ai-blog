"use client";
import { FormattedPost } from "@/app/types";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

type ContentProps = {
  post: FormattedPost;
};

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  return <>{post.title}</>;
};

export default Content;
