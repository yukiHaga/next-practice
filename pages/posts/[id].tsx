import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

// params.idでurlに含まれたidの部分の文字列を取得できる
export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

// ページコンポーネントはルートコンポーネントなので、getStaticPropsなどを使って、propsでデータを渡す。
export default function Post({ postData }: { postData: any }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
