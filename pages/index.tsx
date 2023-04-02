import Head from "next/head";
import { Header } from "@/components/Header";
import { AppContextProvider } from "@/state/AppContextProvider";
import { HeroSection } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Dauda Olushola Benedict</title>
        <meta
          name="description"
          content="Experienced software engineer, with a wide range of skillset, I enjoy building and contributing to products that improve people's lives."
        />
        <meta
          name="twitter:description"
          content="Experienced software engineer, with a wide range of skillset, I enjoy building and contributing to products that improve people's lives."
        />
        <meta
          name="og:description"
          content="Experienced software engineer, with a wide range of skillset, I enjoy building and contributing to products that improve people's lives."
        />
        <meta
          name="keywords"
          content="fullstack, frontend, backend, software development"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBTK7V6');`,
          }}
        ></script>
      </Head>
      <AppContextProvider>
        <Header />
        <HeroSection />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </AppContextProvider>
    </>
  );
}
