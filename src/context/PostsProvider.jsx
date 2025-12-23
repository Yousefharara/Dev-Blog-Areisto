"use client";
import { API_URL } from "@/config/api";
import { API_PATHS } from "@/constants/posts";
import React, { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext({});

const PostsProvider = ({ children }) => {
  const [favoriteStore, setFavoriteStore] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(API_URL + API_PATHS.getAllPosts);
        const { posts } = await data.json();
        posts.map((post) =>
          setFavoriteStore((prev) => ({ ...prev, [post.id]: false }))
        );
      } catch (err) {}
    })();
  }, []);

  const getAllFavorite = () => {
    let total = 0;
    for (const key in favoriteStore) {
      if (favoriteStore[key]) {
        total += 1;
      }
    }
    return total;
  };

  return (
    <PostsContext.Provider
      value={{ favoriteStore, setFavoriteStore, getAllFavorite }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export default PostsProvider;
