import { useState } from "react";
import Header from "./components/Header";
import HeroBlock from "./components/heroBlock";
import Blockquote from "./components/Blockquote";
import Intro from "./components/Intro";
import TabsSection from "./components/TabsSection";
import Post from "./components/Post";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("main");
  return (
    <>
      <Header />

      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <Intro />
            <Blockquote />
            <HeroBlock />
          </>
        )}

        {tab == "post" && <Post />}
        {tab == "user" && <EffectSection />}
      </main>
    </>
  );
}
