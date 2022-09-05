import Head from "next/head";
import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>最悪の世代</title>
      </Head>
      <h2>最初の投稿</h2>
      <Link href="/">ホームへ戻る</Link>
    </>
  );
};

export default FirstPost;
