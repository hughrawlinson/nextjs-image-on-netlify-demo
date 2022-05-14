import Head from "next/head";
import Image from "next/image";
import demoImage from "../public/demoImage.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Image on Netlify Demo</title>
        <meta name="description" content="NextJS Image on Netlify Demo" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: 1000, margin: 80 }}>
        <h1>NextJS Image on Netlify Demo</h1>
        <p>
          This is a demo of the NextJS Image component on Netlify. At the time
          of implementation, it seems that the image is only transcoded to a
          modern image format if Netlify Edge Functions (which are in Beta) are
          enabled.
        </p>
        <p>
          This site is deployed to Netlify twice, once with Edge Functions
          disabled, and again with them enabled.
        </p>
        {process.env.NEXT_PUBLIC_NEXT_USE_NETLIFY_EDGE ? (
          <p>
            You are looking at the deploy WITH Netlify Edge Functions. If you
            inspect the network traffic, you should expect to see the below
            image downloaded in AVIF or WebP format.
          </p>
        ) : (
          <p>
            You are looking at the deploy WITHOUT Netlify Edge Functions. If you
            inspect the network traffic, you should expect to see the below
            image downloaded in the outdated original jpg format.
          </p>
        )}
        <p>The following image is rendered with the NextJS Image component.</p>
        <Image
          src={demoImage}
          alt="A landscape image of a verdent maritime setting for demo purposes"
          width={400 * 1.77}
          height={400}
          priority
        />
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@nilsnedel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Nils Nedel
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/west-cork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
