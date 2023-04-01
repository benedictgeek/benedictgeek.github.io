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
