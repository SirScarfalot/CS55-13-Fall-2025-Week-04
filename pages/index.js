//imports libraries and styles
import Head from 'next/head';
//imports the layout file
import Layout, { siteTitle } from '../components/layout';
//imports the style for the intro blurb
import utilStyles from '../styles/utils.module.css';
 
//begins the function definition
export default function Home() {
//defines what the function will pass to its caller
  return (
// Renders the Layout component with the home prop set to true
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my site! I'm Anton and I'm learning a lot here.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}