
import "./globals.css";
import Header from "@/components/organism/header";
import Footer from "@/components/organism/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import PostsProvider from "@/context/PostsProvider";

config.autoAddCss = false;

export const metadata = {
  title: "Dev Blog Areisto",
  description: "Creating a Dev Blog for learing more about Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PostsProvider>
          <Header />
          {children}
          <Footer />
        </PostsProvider>
      </body>
    </html>
  );
}
