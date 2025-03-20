import Hero from "./Hero";
import { ways } from "../data";

export default function HeroBlock() {
  return (
    <section>
      <h1>Герои</h1>

      {/*  

<ul>
{ways.map((way) => (
  <Hero key = {way.title} {...way} />
))
  
</ul>
*/}

      <div className="BlockHero">
        <Hero {...ways[0]} />
      </div>

      <div className="BlockHero">
        <Hero {...ways[1]} />
      </div>

      <div className="BlockHero">
        <Hero {...ways[2]} />
      </div>
    </section>
  );
}
