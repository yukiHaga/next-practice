import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilsStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// ssgの場合
// ビルド時に外部から一回だけデータを取ってくる
// getStaticPropsは、Next.jsが用意している関数
// getStaticPropsは、外部から一度だけデータを取得する関数
// getStaticPropsは、SSGの場合に使う
// Propsの部分はNext.js特有の書き方
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// getStaticPropsで取得したデータを渡すことができる
const Home = ({ allPostsData }: { allPostsData: any }) => {
  console.log({ allPostsData });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilsStyle.headingMd}>
          フロントエンドエンジニア兼個人開発者をやっています。
        </p>
      </section>
      <section>
        <h2>最新ポスト</h2>
        <div className={styles.grid}>
          {allPostsData.map(
            ({
              id,
              title,
              date,
              thumbnail,
            }: {
              id: string;
              title: string;
              date: string;
              thumbnail: string;
            }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utilsStyle.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilsStyle.lightText}>{date}</small>
              </article>
            )
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
