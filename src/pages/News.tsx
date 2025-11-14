import Hero from "../components/Hero";
import BoardGameCard from "../components/BoardGameCard";
import titus from "../assets/warhammer-40k-titus.jpg";
import warhammerEvent from "../assets/warhammer-40k-event.jpg";
import boardgame from "../assets/boardgame.webp";
import "./news.css";

export default function News() {
  return (
    <div className="page scrollable-content">
      <Hero
        background={titus}
        title="Titus lead latest expansion of Terra"
        className="news-hero"
        alt="Titus faces danger one more time, his face is one of determination and tiredness"
      />
      <section className="article">
        <div className="section-content">
          <p>
            Games Workshop is continuing the story of Warhammer 40,000 and Titus,
            the main character of 2024's Space Marine II, in an upcoming set of
            books for its sci-fi wargame. Revealed during this weekend's Warhammer
            World Championship Preview, the four-book series, dubbed 500 Worlds:
            Titus, serve as the next major narrative expansion for Warhammer 40K.
            Set during the Ultramarian Reclamation, Titus—now promoted to the rank
            of Captain—leads the Ultramarines Second Company against a a Necron
            force "rife with the Destroyer curse."
          </p>
        </div>
      </section>
      <section className="happening-now">
        <div className="section-content">
          <h2>Happening Now</h2>
          <div className="happening-now-container">
            <div
              className="happening-now-image"
              aria-label="Hundreds of fans gathered around tables and computers, enjoying all kind of Warhammer 40K related games"
              style={{
                backgroundImage: `url(${warhammerEvent})`,
              }}
            />
            <div className="happening-now-content">
              <h3>European Open - Hamburg, DE</h3>
              <p>
                Prepare your armies and steel your nerves — the European Open:
                Siege of Hamburg is coming! This three-day Warhammer 40,000
                tabletop event will see commanders from across Europe descend upon
                the Hamburg Messe Hall for an epic clash worthy of the 41st
                Millennium. From May 16–18, 2025, players will battle through five
                rounds of intense matched play missions under the latest GT pack,
                testing tactical skill, strategic foresight, and painting prowess.
                Whether you're leading the Emperor's finest, the Xenos hordes, or
                the forces of Chaos, the fate of the sector lies in your hands.
                <br />
                <br />
                Hobby Showcase & Best Painted Competition
                <br />
                <br />
                Narrative Mini-Campaign Tables: "Shadows Over Vigilus"
                <br />
                <br />
                Exclusive Merch and Army Swag Packs
                <br />
                <br />
                Evening Socials and Open Play Zones
                <br />
                <br />
                Tickets go on sale February 1, 2025.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-releases">
        <div className="section-content">
          <h2>Latest Releases - Boardgames</h2>
          <div className="releases-grid">
          <BoardGameCard
            backgroundImage={boardgame}
            title="Risk: Warhammer 40K Edition"
            tags={["Tabletop", "Strategy", "Warhammer", "Longer Tag Test"]}
            description="Conquer the Warhammer 40K universe in this thrilling take on the classic Risk game. Command your forces across multiple worlds as you battle for supremacy."
            alt="Horus and his minions standing on a hill amidst the heresy, Risk like you've never seen before"
          />
          <BoardGameCard
            backgroundImage={boardgame}
            title="Risk: Warhammer 40K Edition"
            tags={["Tabletop", "Strategy", "Warhammer"]}
            description="Conquer the Warhammer 40K universe in this thrilling take on the classic Risk game. Command your forces across multiple worlds as you battle for supremacy."
            alt="Horus and his minions standing on a hill amidst the heresy, Risk like you've never seen before"
          />
          <BoardGameCard
            backgroundImage={boardgame}
            title="Risk: Warhammer 40K Edition"
            tags={["Tabletop", "Strategy", "Warhammer"]}
            description="Conquer the Warhammer 40K universe in this thrilling take on the classic Risk game. Command your forces across multiple worlds as you battle for supremacy."
            alt="Horus and his minions standing on a hill amidst the heresy, Risk like you've never seen before"
          />
          <BoardGameCard
            backgroundImage={boardgame}
            title="Risk: Warhammer 40K Edition"
            tags={["Tabletop", "Strategy", "Warhammer"]}
            description="Conquer the Warhammer 40K universe in this thrilling take on the classic Risk game. Command your forces across multiple worlds as you battle for supremacy."
            alt="Horus and his minions standing on a hill amidst the heresy, Risk like you've never seen before"
          />
          <BoardGameCard
            backgroundImage={boardgame}
            title="Risk: Warhammer 40K Edition"
            tags={["Tabletop", "Strategy", "Warhammer"]}
            description="Conquer the Warhammer 40K universe in this thrilling take on the classic Risk game. Command your forces across multiple worlds as you battle for supremacy."
            alt="Horus and his minions standing on a hill amidst the heresy, Risk like you've never seen before"
          />
          </div>
        </div>
      </section>
    </div>
  );
}
