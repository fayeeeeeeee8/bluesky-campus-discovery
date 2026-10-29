"use client";

import { useState } from "react";

const topics = ["Campus life", "Psychology", "Climate", "Startups"];

const conversations = [
  {
    avatar: "JL",
    name: "Jordan Lee",
    handle: "@jordan.bsky.social",
    meta: "Psychology · Rice University",
    text: "Anyone else exploring how short-form video affects attention during study breaks? I found a new paper worth discussing.",
    tag: "Psychology",
  },
  {
    avatar: "AK",
    name: "Avery Kim",
    handle: "@averyk.bsky.social",
    meta: "Campus Climate Coalition",
    text: "We’re mapping shaded walking routes around campus this Friday. Looking for two more volunteers who like field research.",
    tag: "Climate",
  },
  {
    avatar: "SM",
    name: "Sam Morgan",
    handle: "@sammorgan.bsky.social",
    meta: "Liu Idea Lab · Student founder",
    text: "Office hours for student builders are open this afternoon. Bring one problem you are stuck on and we’ll work through it together.",
    tag: "Startups",
  },
];

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState(["Campus life", "Psychology"]);
  const [isReady, setIsReady] = useState(false);

  function toggleTopic(topic: string) {
    setIsReady(false);
    setSelectedTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    );
  }

  function buildRecommendations() {
    if (selectedTopics.length === 0) return;
    setIsReady(true);
    window.setTimeout(() => {
      document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 30);
  }

  const visibleConversations = isReady
    ? conversations.filter((item) => selectedTopics.includes(item.tag)).slice(0, 3)
    : conversations.slice(0, 2);

  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Bluesky Campus home">
          <span className="brand-mark">B</span>
          <span>Bluesky Campus</span>
        </a>
        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#campus">My campus</a>
          <span className="profile">FW</span>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Your first week on Bluesky</p>
          <h1>Find your people without losing the calm.</h1>
          <p className="intro">
            Pick a few interests. We’ll surface active people, useful feeds, and
            campus conversations while you stay in control of what you follow.
          </p>
        </div>

        <aside className="campus-card" id="campus" aria-label="Campus profile">
          <div className="campus-icon">R</div>
          <div>
            <span className="card-label">YOUR CAMPUS</span>
            <h2>Rice University</h2>
            <p>2,184 students · 73 active topics</p>
          </div>
          <span className="verified">Verified</span>
        </aside>
      </section>

      <section id="discover" className="discovery-shell">
        <div className="interest-panel">
          <p className="step">01</p>
          <div>
            <p className="section-label">Choose what sounds like you</p>
            <h2>What do you want to find today?</h2>
          </div>
          <div className="topic-grid" aria-label="Interest options">
            {topics.map((topic) => (
              <button
                aria-pressed={selectedTopics.includes(topic)}
                className={selectedTopics.includes(topic) ? "topic selected" : "topic"}
                key={topic}
                onClick={() => toggleTopic(topic)}
                type="button"
              >
                <span className="topic-dot" />
                {topic}
                {selectedTopics.includes(topic) && <span className="check">✓</span>}
              </button>
            ))}
          </div>
          <p className="hint">You can change these anytime. No endless algorithm required.</p>
          <button
            className="recommend-button"
            disabled={selectedTopics.length === 0}
            onClick={buildRecommendations}
            type="button"
          >
            {isReady ? "Refresh my recommendations" : "Build my campus feed"}
            <span aria-hidden="true">→</span>
          </button>
          <p className="button-note" aria-live="polite">
            {selectedTopics.length === 0
              ? "Choose at least one interest to continue."
              : isReady
                ? `Ready: ${selectedTopics.join(", ")}`
                : `${selectedTopics.length} interests selected`}
          </p>
        </div>

        <div className={isReady ? "preview-panel ready" : "preview-panel"} id="recommendations">
          <div className="preview-heading">
            <div>
              <p className="section-label">{isReady ? "Your campus feed is ready" : "A quieter way to discover"}</p>
              <h2>{isReady ? "Recommended for you" : "Conversations near you"}</h2>
            </div>
            <span className="live"><i /> LIVE NOW</span>
          </div>

          {isReady && (
            <div className="success-message" role="status">
              <strong>Nice mix.</strong> These conversations match your interests. You still choose what to follow.
            </div>
          )}

          <div className="conversation-list">
            {visibleConversations.length > 0 ? visibleConversations.map((item) => (
              <article className="conversation" key={item.handle}>
                <div className="avatar">{item.avatar}</div>
                <div className="conversation-body">
                  <div className="author-line">
                    <strong>{item.name}</strong>
                    <span>{item.handle}</span>
                  </div>
                  <p className="meta">{item.meta}</p>
                  <p className="post-text">{item.text}</p>
                  <span className="post-tag">{item.tag}</span>
                </div>
              </article>
            )) : (
              <p className="empty-state">Try another interest to see active campus conversations.</p>
            )}
          </div>
        </div>
      </section>

      <footer>
        <span>Built for new college students on Bluesky</span>
        <span>You choose. Bluesky helps you find.</span>
      </footer>
    </main>
  );
}
