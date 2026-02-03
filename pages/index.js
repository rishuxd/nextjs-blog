import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const experience = [
  {
    company: "YARS Enterprises Private Limited",
    location: "New Delhi",
    period: "2024 — Present",
    role: "Software Developer",
    projects: [
      {
        name: "CSC Compass",
        points: [
          "Built an Admin Web Portal, enabling administrators to visualize user submissions from mobile apps, developed its backend to support analytics, handling 1000+ daily active users.",
          "Optimized queries with indexing and aggregation, and implemented CSV data streaming, reducing query execution time by 40%.",
          "Architected a centralized logging pipeline using Grafana, Loki, and Promtail, improving debugging of external API failures by 95%.",
          "Deployed containerized applications in an air-gapped environment using Podman.",
        ],
        tags: ["NestJS", "Grafana", "Loki", "Promtail", "Podman"],
      },
      {
        name: "Harit India",
        points: [
          "Developed a scalable backend architecture using Node.js, implementing RESTful APIs with bulk data upload capabilities through files.",
          "Integrated Easebuzz payment gateway with secure tokenization and encryption standards, enabling seamless transaction processing using webhooks.",
          "Built a dynamic B2B marketplace with negotiation workflows, order management, and invoice generation modules.",
          "Engineered role-based access controls (RBAC) and JWT authentication for AWS S3 media assets, fortifying user authorization and reducing unauthorized data access incidents to zero.",
        ],
        tags: ["Node.js", "REST APIs", "Easebuzz", "AWS S3", "JWT"],
      },
      {
        name: "Carbon Credit",
        points: [
          "Designed a microservice-based backend using NestJS, leveraging gRPC and Kafka for efficient communication between services.",
          "Developed a task module with threaded comments similar to GitHub pull requests, enabling real-time updates through Server-Sent Events (SSE).",
          "Built a notification module with WebSockets + Firebase Cloud Messaging (FCM), ensuring instant push alerts across devices.",
        ],
        tags: ["NestJS", "gRPC", "Kafka", "SSE", "WebSockets", "FCM"],
      },
    ],
  },
];

const projects = [
  {
    name: "RemoteOffice",
    icon: "code",
    description:
      "Developed an interactive virtual space platform inspired by Gather.town, enabling real-time collaboration, events, and social interaction through 2D environments.",
    points: [
      "Implemented multiplayer relative movement using a WebSocket server for seamless real-time interactions.",
      "Integrated proximity-based video/audio conferencing via WebRTC, enabling high-quality, peer-to-peer conferencing within the platform.",
    ],
    link: "https://spaces.rishuffled.in",
    github: "https://github.com/rishuxd/metaverse.git",
    tags: ["Canvas", "Next.js", "Node.js", "Websockets", "WebRTC"],
  },
];

const education = [
  {
    institution: "University of Delhi, Atma Ram Sanatan Dharma College",
    period: "2021 — 2024",
    degree: "Bachelor of Science, Honours, Computer Science",
    score: "8.42 CGPA",
  },
  {
    institution: "Kendriya Vidyalaya, Azamgarh, India",
    period: "2009 — 2021",
    degree: "Senior School Certificate Examination",
    score: "96.6%",
  },
];

function SectionHeader({ number, title }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNumber}>{number}</span>
      <span className={styles.sectionTitle}>{title}</span>
      <div className={styles.sectionLine} />
    </div>
  );
}

export default function Home({ allPostsData, githubStats, leetcodeStats }) {
  const sidebarData = {
    githubStats,
    leetcodeStats,
    posts: allPostsData,
  };

  return (
    <Layout home sidebarData={sidebarData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section id="about" className={utilStyles.fadeInUp}>
        <SectionHeader number="00" title="ABOUT" />
        <div style={{ maxWidth: "48rem" }}>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.625",
              fontWeight: "300",
              marginBottom: "2rem",
              color: "var(--text-main)",
            }}
            className={utilStyles.aboutText}
          >
            I'm a software developer specializing in backend engineering with{" "}
            <span style={{ fontWeight: "500", color: "var(--text-heading)" }}>
              Node.js, NestJS
            </span>
            , and microservices architecture. I build scalable systems that
            handle real-world complexity — from payment integrations and
            real-time updates to containerized deployments in air-gapped
            environments.
          </p>
          <div className={utilStyles.skillsList}>
            <div className={utilStyles.skillRow}>
              <span className={utilStyles.skillsLabel}>Languages:</span>
              <span className={utilStyles.skillsText}>
                JavaScript, TypeScript, C++, Python, Java, SQL
              </span>
            </div>
            <div className={utilStyles.skillRow}>
              <span className={utilStyles.skillsLabel}>Backend:</span>
              <span className={utilStyles.skillsText}>
                Node.js, NestJS, Express.js, gRPC, Kafka, WebSockets, REST APIs
              </span>
            </div>
            <div className={utilStyles.skillRow}>
              <span className={utilStyles.skillsLabel}>Frontend:</span>
              <span className={utilStyles.skillsText}>
                Next.js, React.js, React Native, TailwindCSS, Redux, Zustand,
                WebRTC
              </span>
            </div>
            <div className={utilStyles.skillRow}>
              <span className={utilStyles.skillsLabel}>Databases:</span>
              <span className={utilStyles.skillsText}>
                MongoDB, PostgreSQL, MySQL, Redis, Firebase
              </span>
            </div>
            <div className={utilStyles.skillRow}>
              <span className={utilStyles.skillsLabel}>DevOps & Tools:</span>
              <span className={utilStyles.skillsText}>
                Docker, Podman, Kubernetes, AWS (S3, EC2), Nginx, Git, GitHub
                Actions, CI/CD, Grafana, Loki, Promtail, Prometheus, Postman,
                Linux, Shell Scripting
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={utilStyles.statsGrid}>
        <div className={utilStyles.statItem}>
          <span className={utilStyles.statValue}>
            {githubStats?.repos || "53"}
          </span>
          <span className={utilStyles.statLabel}>Repos</span>
        </div>
        <div className={utilStyles.statItem}>
          <span className={utilStyles.statValue}>
            {githubStats?.contributions || "4+"}
          </span>
          <span className={utilStyles.statLabel}>Stars</span>
        </div>
        <div className={utilStyles.statItem}>
          <span className={utilStyles.statValue}>
            {leetcodeStats?.solved || "17"}
          </span>
          <span className={utilStyles.statLabel}>LeetCode</span>
        </div>
        <div className={utilStyles.statItem}>
          <span className={utilStyles.statValue}>1+</span>
          <span className={utilStyles.statLabel}>Years</span>
        </div>
      </section>

      <section id="experience" className={utilStyles.fadeInUp}>
        <SectionHeader number="01" title="EXPERIENCE" />
        <div className={utilStyles.expGrid}>
          {experience.map((exp, i) => (
            <div key={i} className={utilStyles.expCard}>
              <div className={utilStyles.expHeader}>
                <h3 className={utilStyles.expRole}>{exp.role}</h3>
                <span className={utilStyles.expPeriod}>{exp.period}</span>
              </div>
              <div className={utilStyles.expCompany}>{exp.company}</div>
              {exp.projects.map((project, j) => (
                <div key={j} className={utilStyles.expProject}>
                  <h4 className={utilStyles.expProjectName}>{project.name}</h4>
                  <ul className={utilStyles.expList}>
                    {project.points.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                  <div className={utilStyles.expTags}>
                    {project.tags.map((tag, k) => (
                      <span key={k} className={utilStyles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className={utilStyles.fadeInUp}>
        <SectionHeader number="02" title="PROJECTS" />
        <div className={utilStyles.projectsGrid}>
          {projects.map((project, i) => (
            <div key={i} className={utilStyles.projectCard}>
              <div className={utilStyles.projectContent}>
                <div className={utilStyles.projectHeader}>
                  <h3 className={utilStyles.projectTitle}>{project.name}</h3>
                  <div className={utilStyles.projectLinks}>
                    <a href={project.link}>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "1.25rem" }}
                      >
                        link
                      </span>
                    </a>
                    <a href={project.github}>
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.75rem",
                        }}
                      >
                        GH
                      </span>
                    </a>
                  </div>
                </div>
                <p className={utilStyles.projectDesc}>{project.description}</p>
                <ul className={utilStyles.projectList}>
                  {project.points.map((point, k) => (
                    <li key={k}>{point}</li>
                  ))}
                </ul>
                <div className={utilStyles.expTags}>
                  {project.tags.map((tag, k) => (
                    <span key={k} className={utilStyles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className={utilStyles.fadeInUp}>
        <SectionHeader number="03" title="EDUCATION" />
        <div className={utilStyles.eduGrid}>
          {education.map((edu, i) => (
            <div key={i} className={utilStyles.eduCard}>
              <div className={utilStyles.eduHeader}>
                <h3 className={utilStyles.eduInstitution}>{edu.institution}</h3>
                <span className={utilStyles.eduPeriod}>{edu.period}</span>
              </div>
              <div className={utilStyles.eduDegree}>{edu.degree}</div>
              <div className={utilStyles.eduScore}>{edu.score}</div>
            </div>
          ))}
        </div>
      </section>

      {allPostsData.length > 0 && (
        <section id="blog">
          <SectionHeader number="04" title="RECENT POSTS" />
          <div className={utilStyles.blogGrid}>
            {allPostsData.map(({ id, date, title }) => (
              <Link
                key={id}
                href={`/posts/${id}`}
                className={utilStyles.blogItem}
              >
                <span className={utilStyles.blogTitle}>{title}</span>
                <span className={utilStyles.blogDate}>
                  <Date dateString={date} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

async function getGitHubStats(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
    );
    const repos = await reposRes.json();

    return {
      repos: data.public_repos || 0,
      contributions:
        repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0) +
        "+",
    };
  } catch {
    return { repos: "20+", contributions: "500+" };
  }
}

async function getLeetCodeStats(username) {
  try {
    const res = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`,
    );
    const data = await res.json();
    return {
      solved: data.totalSolved || 0,
    };
  } catch {
    return { solved: "100+" };
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const githubStats = await getGitHubStats("rishuxd");
  const leetcodeStats = await getLeetCodeStats("rishuxd");

  return {
    props: {
      allPostsData,
      githubStats,
      leetcodeStats,
    },
    revalidate: 86400,
  };
}
