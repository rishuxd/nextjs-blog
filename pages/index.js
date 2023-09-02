import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.removeListStyle}>
          <li>- 👋 Hi, I’m @rishuxd.</li>
          <li>- 👀 I'm a Developer and a Content Creator.</li>
          <li>- 🌱 I’m currently learning DSA & Web Development.</li>
          <li>- 💞️ I’m looking for people who are interested in these.</li>
          <li>- 📫 Reach me through : srivastavjyotiswaroop@gmail.com</li>
        </ul>
        <p>
          This is my blog page—the first Next.js app I built while learning from
          the <a href="https://nextjs.org/learn">tutorial.</a> 😊🚀
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
