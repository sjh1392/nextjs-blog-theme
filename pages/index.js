import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 font-bold">
          SEO Tamworth
        </h1>
        <p className="m-10">Working with small and local businesses, we understand the unique challenges faced by local entrepreneurs. Our expert team specialise in optimising your online presence, helping you grow your business and reach profitably.</p>
        <p className="m-10">From strategic keyword targeting to compelling content creation, our services align with your business goals. Let us drive targeted traffic to your website, increase your visibility, and amplify your brand in the Tamworth community.</p>

        <h2 className="text-3xl lg:text-2xl text-center mb-12 font-bold">Book Services Online</h2>
        <p className="m-10 text-center">You can pre-book marketing services below.</p>
        <p className="text-sm text-center bg-blue-300 p-2 font-bold block mx-auto w-1/2 rounded-lg">Current delivery time: 14 days</p>

        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="m-10 backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition border border-gray-800 border-opacity-10"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-3xl lg:text-2xl text-center mb-12 font-bold">Clients</h2>
        <p className="text-center m-10">Reviews</p>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
