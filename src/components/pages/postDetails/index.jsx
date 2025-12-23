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

  const data = await fetch(
    API_URL + API_PATHS.getById.replace(":id", Number(id))
  );
  const post = await data.json();

  const userFetch = await fetch(`https://dummyjson.com/users/${post.userId}`);
  const user = await userFetch.json();

  if (user) {
    return (
      <div className="post__details">
        <Container>
          <div className="post__details__content">
            <Link href={"/posts"}>
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />
              Back to posts
            </Link>
            <small className="hash__id">Post #{post.id}</small>
            <h1 className="title">{post.title}</h1>
            <div className="post__details__details">
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <p className="date">Nov 23, 2025</p>
              <FontAwesomeIcon icon={faUser} size="sm" />
              <p className="username">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="post__details__post">
              <div className="profile">
                <div className="img">
                  {`${user.firstName} ${user.lastName}`
                    .split(" ")
                    .map((str) => str[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="profile__username">
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                  <small>
                    <FontAwesomeIcon icon={faAt} /> Bret
                  </small>
                </div>
              </div>
              <p>{post.body}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default PostDetailsPage;
