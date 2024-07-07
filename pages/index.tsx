import Head from "next/head";
import Header from "./based_h_f/header";
import Footer from "./based_h_f/footer";
import MainContent from "./subpages/main";
import { useState } from "react";
import AboutContent from "./subpages/about";
import AppsContent from "./subpages/apps";
import PrivacyPolicy from "./policy/policy";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("main");

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutContent />;
      case 'apps':
        return <AppsContent />;
      case 'policy':
        return <PrivacyPolicy />;
      default:
        return <MainContent />;
    }
  };

  return (
    // <div className="container mx-auto px-4">
    <div className="flex flex-col min-h-screen min-w-fit">
      <Head>
      <title>JiSaNoAi - Islamic Apps</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setCurrentPage={setCurrentPage}/>
      <main className="flex-grow flex overflow-y-auto">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
