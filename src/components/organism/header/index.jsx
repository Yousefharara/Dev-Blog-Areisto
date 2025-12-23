"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/atoms/container";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { usePostsContext } from "@/context/PostsProvider";

const Header = () => {
  const { getAllFavorite } = usePostsContext();

  return (
    <header>
      <Container>
        <nav>
          <div className="hero">
            <span>D</span>
            <p>DevBlog</p>
          </div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/posts "}>Posts</Link>
            </li>
            <li>
              <Link className="icon" href={"/cart__favorite"}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "var(--primary-clr)" }}
                  size="lg"
                />
                {getAllFavorite() > 0 && <span>{getAllFavorite()}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
