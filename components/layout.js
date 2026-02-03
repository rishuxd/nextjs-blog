import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const name = "Jyotiswaroop Srivastava";
export const siteTitle = "Jyotiswaroop Srivastava — Software Developer";

export default function Layout({ children, home, sidebarData }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Software Developer specializing in backend development with Node.js, NestJS, and microservices architecture."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="theme-color" content="#d1e231" />
      </Head>

      <div className={styles.wrapper}>
        {home && sidebarData && (
          <aside className={styles.sidebar}>
            <div>
              <div className={styles.sidebarProfile}>
                <div className={styles.sidebarImage}>
                  <Image
                    src="/images/pic.jpeg"
                    alt="Jyotiswaroop Srivastava portrait"
                    fill
                    priority
                  />
                </div>
              </div>
              <h1 className={styles.sidebarName}>{name}</h1>
              <p className={styles.sidebarRole}>Software Developer</p>
              <p className={styles.sidebarLocation}>New Delhi, India</p>

              <div className={styles.sidebarDivider} />

              <nav className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Recent Posts</h3>
                <ul className={styles.sidebarBlog}>
                  {sidebarData.posts &&
                    sidebarData.posts.slice(0, 2).map(({ id, title }) => (
                      <li key={id}>
                        <Link
                          href={`/posts/${id}`}
                          className={styles.sidebarBlogItem}
                        >
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  <li className={styles.sidebarComingSoon}>
                    <span>Understanding Hydration (Coming Soon)</span>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <div className={styles.sidebarLinks}>
                <a
                  href="https://github.com/rishuxd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jyotiswaroop-srivastava"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/rishaboraa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>

              <button className={styles.sidebarCta}>Get in Touch</button>
            </div>
          </aside>
        )}

        <main className={styles.main}>
          <div className={styles.mainInner}>
            <header className={styles.navbar}>
              <div className={styles.navBrand}>jyotiswaroop.</div>
              <nav className={styles.navLinks}>
                <Link href="/#about">About</Link>
                <Link href="/#experience">Experience</Link>
                <Link href="/#projects">Projects</Link>
                <Link href="/#blog">Blog</Link>
                <ThemeToggle />
              </nav>
              <div className={styles.mobileNav}>
                <ThemeToggle />
                <button className={styles.menuButton}>
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </header>

            {children}

            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
              </div>
            )}
            {home && (
              <div className={styles.footer}>
                <span>© 2024 Jyotiswaroop.</span>
                <span className={styles.footerDesigned}>
                  Designed & Built in New Delhi
                </span>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
