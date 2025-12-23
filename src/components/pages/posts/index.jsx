import Container from "@/components/atoms/container";
import "./posts.css";
import React from "react";
import { API_URL } from "@/config/api";
import { API_PATHS } from "@/constants/posts";
import PostCard from "@/components/organism/postCard";

const PostsPage = async () => {
  const data = await fetch(API_URL + API_PATHS.getAllPosts);
  const { posts } = await data.json();
  console.log(posts);

  if (posts) {
    return (
      <section className="posts__page">
        <Container>
          <div className="posts__content">
            <div className="posts__page__title">
              <h1>All Posts</h1>
              <p>Explore our collection of 100 articles</p>
            </div>
            <div className="posts__page__cards">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
};

export default PostsPage;
