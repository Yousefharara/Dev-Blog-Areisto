import React from "react";
import "./postDetails.css";
import Container from "@/components/atoms/container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { API_URL } from "@/config/api";
import { API_PATHS } from "@/constants/posts";

const PostDetailsPage = async ({ params }) => {
  const { id } = await params;
  let result = {
    post: null,
    user: null,
  };
  let error = null;

  try {
    const data = await fetch(
      API_URL + API_PATHS.getById.replace(":id", Number(id))
    );
    const post = await data.json();

    const userFetch = await fetch(`https://dummyjson.com/users/${post.userId}`);
    const user = await userFetch.json();
    result.user = user;
    result.post = post;
  } catch (err) {
    console.log(err.message);
    error = err.message;
  }

  if (result.user) {
    return (
      <div className="post__details">
        <Container>
          <div className="post__details__content">
            <Link href={"/posts"}>
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />
              Back to posts
            </Link>
            <small className="hash__id">Post #{result.post.id}</small>
            <h1 className="title">{result.post.title}</h1>
            <div className="post__details__details">
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <p className="date">Nov 23, 2025</p>
              <FontAwesomeIcon icon={faUser} size="sm" />
              <p className="username">
                {result.user.firstName} {result.user.lastName}
              </p>
            </div>
            <div className="post__details__post">
              <div className="profile">
                <div className="img">
                  {`${result.user.firstName} ${result.user.lastName}`
                    .split(" ")
                    .map((str) => str[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="profile__username">
                  <p>
                    {result.user.firstName} {result.user.lastName}
                  </p>
                  <small>
                    <FontAwesomeIcon icon={faAt} /> Bret
                  </small>
                </div>
              </div>
              <p>{result.post.body}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <p>Error Connection</p>
        <p>message error: {error}</p>
      </div>
    );
  }
};

export default PostDetailsPage;
