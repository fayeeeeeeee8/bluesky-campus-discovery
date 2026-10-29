const topics = ["Campus life", "Psychology", "Climate", "Startups"];

const conversations = [
  {
    avatar: "JL",
    name: "Jordan Lee",
    handle: "@jordan.bsky.social",
    meta: "Psychology · Northwestern",
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
];

export default function Home() {
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
          <div className="campus-icon">N</div>
          <div>
            <span className="card-label">YOUR CAMPUS</span>
            <h2>Northwestern University</h2>
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
            {topics.map((topic, index) => (
              <span className={index < 2 ? "topic selected" : "topic"} key={topic}>
                <span className="topic-dot" />
                {topic}
                {index < 2 && <span className="check">✓</span>}
              </span>
            ))}
          </div>
          <p className="hint">You can change these anytime. No endless algorithm required.</p>
        </div>

        <div className="preview-panel">
          <div className="preview-heading">
            <div>
              <p className="section-label">A quieter way to discover</p>
              <h2>Conversations near you</h2>
            </div>
            <span className="live"><i /> LIVE NOW</span>
          </div>

          <div className="conversation-list">
            {conversations.map((item) => (
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
            ))}
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
