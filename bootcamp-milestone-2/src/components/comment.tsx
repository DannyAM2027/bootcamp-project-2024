import React from "react";
import type { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment?: { user?: string; comment?: string; time?: string };
  };
  
  export default function Comment({ comment }: CommentProps) {
    if (!comment) {
      return <div>Error: Comment data is missing!</div>;
    }
  
    const { user = "Anonymous", comment: content = "No comment provided", time } = comment;
  
    const parseCommentTime = (time: string | undefined) => {
      return time ? new Date(time).toLocaleString() : "Unknown time";
    };
  
    return (
      <div>
        <h4>{user}</h4>
        <p>{content}</p>
        <span>{parseCommentTime(time)}</span>
      </div>
    );
  }
  
  