"use client";

import React, { useEffect } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePostsContext } from "@/context/PostsProvider";

const PostCard = ({ post }) => {
  const { favoriteStore, setFavoriteStore } = usePostsContext();

  useEffect(() => {
    console.log(favoriteStore);
  }, [favoriteStore]);

  return (
    <div className="card">
      <div className="card__header">
        <small>Post #{post.id}</small>
        <div
          className={`icon ${favoriteStore[`${post.id}`] && "active"}`}
          onClick={() =>
            setFavoriteStore((prev) => ({
              ...prev,
              [post.id]: !prev[post.id],
            }))
          }
        >
          <FontAwesomeIcon icon={faHeart} size="sm" />
        </div>
      </div>
      <div className="card__content">
        <div className="card__title">{post.title}</div>
        <div className="card__body">{post.body}</div>
      </div>
      <div className="card__footer">
        <Link href={`/posts/${post.id}`}>
          Read more
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ cursor: "pointer", color: "var(--primary-clr)" }}
            size="sm"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
