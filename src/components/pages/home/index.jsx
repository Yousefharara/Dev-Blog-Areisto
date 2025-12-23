"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookOpen,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "./home.css";
import Container from "@/components/atoms/container";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <main>
      <section className="main__section">
        <Container>
          <div className="main__section__content">
            <div className="artifact">
              <FontAwesomeIcon
                icon={faJira}
                style={{ color: "var(--primary-clr)" }}
                size="sm"
              />
              <small>Next.js Learning Project</small>
            </div>
            <h1>Welcome to DevBlog</h1>
            <p>
              A Complete Next.js 16 learning project featuring App Router,
              Typescript, server-side data fetching, and modern React patterns
            </p>
            <button onClick={() => router.push("/posts")}>
              <p>Explore Posts</p>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ cursor: "pointer", color: "#fff" }}
                size="sm"
              />
            </button>
          </div>
        </Container>
      </section>
      <section className="learn__section">
        <Container>
          <div className="learn__section__content">
            <h2>What You&apos;ll Learn </h2>
            <article>
              <div className="card__list">
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ cursor: "pointer", color: "var(--primary-clr)" }}
                      size="lg"
                    />
                  </div>
                  <h3>App Router</h3>
                  <p>
                    Learn Next.js 16 App Router with server components, loading
                    states, and error handling.
                  </p>
                </div>
                <div className="card">
                  <div className="icon data__fetching">
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      style={{ cursor: "pointer", color: "#00B48D" }}
                      size="lg"
                    />
                  </div>
                  <h3>Data Fetching</h3>
                  <p>
                    Master server-side data fetching with dynamic routes and
                    slug-based pages.
                  </p>
                </div>
                <div className="card">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faJira}
                      style={{ cursor: "pointer", color: "var(--primary-clr)" }}
                      size="lg"
                    />
                  </div>
                  <h3>React Context</h3>
                  <p>
                    Implement theme switching with React Context for global
                    state management.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
