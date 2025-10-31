import React from "react";
import "./TechnologyArticles.css";

const articles = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    category: "React",
    readTime: "5 min read",
    date: "2024",
  },
  {
    id: 2,
    title: "Mastering JavaScript Async/Await",
    category: "JavaScript",
    readTime: "7 min read",
    date: "2024",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    category: "CSS",
    readTime: "6 min read",
    date: "2024",
  },
  {
    id: 4,
    title: "Node.js Performance Optimization Tips",
    category: "Node.js",
    readTime: "8 min read",
    date: "2024",
  },
  {
    id: 5,
    title: "Building Responsive Web Apps",
    category: "Web Design",
    readTime: "10 min read",
    date: "2024",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    category: "TypeScript",
    readTime: "12 min read",
    date: "2024",
  },
  {
    id: 7,
    title: "RESTful API Best Practices",
    category: "Backend",
    readTime: "9 min read",
    date: "2024",
  },
  {
    id: 8,
    title: "Database Design Principles",
    category: "Database",
    readTime: "11 min read",
    date: "2024",
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
          <div key={article.id} className="article-card">
            <div className="article-category">{article.category}</div>
            <h4 className="article-title">{article.title}</h4>
            <div className="article-meta">
              <span className="article-read-time">{article.readTime}</span>
              <span className="article-date">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="articles-footer">
        <button className="view-all-btn">View All Articles</button>
      </div>
    </div>
  );
}

