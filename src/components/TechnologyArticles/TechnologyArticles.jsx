import React from "react";
import "./TechnologyArticles.css";

const articles = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    category: "React",
    readTime: "5 min read",
    date: "2024",
    url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
  },
  {
    id: 2,
    title: "Mastering JavaScript Async/Await",
    category: "JavaScript",
    readTime: "7 min read",
    date: "2024",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    category: "CSS",
    readTime: "6 min read",
    date: "2024",
    url: "https://css-tricks.com/css-grid-replace-flexbox/",
  },
  {
    id: 4,
    title: "Node.js Performance Optimization Tips",
    category: "Node.js",
    readTime: "8 min read",
    date: "2024",
    url: "https://nodejs.org/en/learn/getting-started/nodejs-with-node-core-performance",
  },
  {
    id: 5,
    title: "Building Responsive Web Apps",
    category: "Web Design",
    readTime: "10 min read",
    date: "2024",
    url: "https://web.dev/learn/design/",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    category: "TypeScript",
    readTime: "12 min read",
    date: "2024",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    id: 7,
    title: "RESTful API Best Practices",
    category: "Backend",
    readTime: "9 min read",
    date: "2024",
    url: "https://restfulapi.net/",
  },
  {
    id: 8,
    title: "Database Design Principles",
    category: "Database",
    readTime: "11 min read",
    date: "2024",
    url: "https://www.digitalocean.com/community/tutorial_series/database-design",
  },
];

export default function TechnologyArticles() {
  return (
    <div className="tech-articles-sidebar">
      <div className="articles-header">
        <h3>📚 Tech Articles</h3>
        <p className="articles-subtitle">Popular Technology Reads</p>
      </div>
      <div className="articles-list">
        {articles.map((article) => (
          <a
            key={article.id}
            className="article-card"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Read: ${article.title}`}
          >
            <div className="article-category">{article.category}</div>
            <h4 className="article-title">{article.title}</h4>
            <div className="article-meta">
              <span className="article-read-time">{article.readTime}</span>
              <span className="article-date">{article.date}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="articles-footer">
        <a
          className="view-all-btn"
          href="https://dev.to/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Articles
        </a>
      </div>
    </div>
  );
}

