const ZeldaFeatureGrid = () => {
  const { useState } = React;
  // Games with box art, title art, and release info
  // releases: array of { year, system } - original + remakes/remasters only (no Virtual Console)
  const games = [
    { name: "The Legend of Zelda", abbr: "LoZ", boxArt: "box-art/01-LoZ.jpg", titleArt: "title-art/01-LoZ.jpg",
      releases: [{ year: 1986, system: "NES" }] },
    { name: "Zelda II: The Adventure of Link", abbr: "AoL", boxArt: "box-art/02-AoL.jpg", titleArt: "title-art/02-AoL.jpg",
      releases: [{ year: 1987, system: "NES" }] },
    { name: "A Link to the Past", abbr: "ALttP", boxArt: "box-art/03-ALttP.jpg", titleArt: "title-art/03-ALttP.png",
      releases: [{ year: 1991, system: "SNES" }, { year: 2002, system: "GBA" }] },
    { name: "Link's Awakening", abbr: "LA", boxArt: "box-art/04-LA.jpg", titleArt: "title-art/04-LA.jpg",
      releases: [{ year: 1993, system: "Game Boy" }, { year: 1998, system: "GBC (DX)" }, { year: 2019, system: "Switch" }] },
    { name: "Ocarina of Time", abbr: "OoT", boxArt: "box-art/05-OoT.jpg", titleArt: "title-art/05-OoT.png",
      releases: [{ year: 1998, system: "N64" }, { year: 2011, system: "3DS" }] },
    { name: "Majora's Mask", abbr: "MM", boxArt: "box-art/06-MM.jpg", titleArt: "title-art/06-MM.png",
      releases: [{ year: 2000, system: "N64" }, { year: 2015, system: "3DS" }] },
    { name: "Oracle of Seasons", abbr: "OoS", boxArt: "box-art/07-OoS.jpg", titleArt: "title-art/07-OoS.jpg",
      releases: [{ year: 2001, system: "GBC" }] },
    { name: "Oracle of Ages", abbr: "OoA", boxArt: "box-art/08-OoA.jpg", titleArt: "title-art/08-OoA.jpg",
      releases: [{ year: 2001, system: "GBC" }] },
    { name: "The Wind Waker", abbr: "WW", boxArt: "box-art/09-WW.jpg", titleArt: "title-art/09-WW.jpg",
      releases: [{ year: 2002, system: "GameCube" }, { year: 2013, system: "Wii U HD" }] },
    { name: "Four Swords Adventures", abbr: "FSA", boxArt: "box-art/10-FSA.jpg", titleArt: "title-art/10-FSA.jpg",
      releases: [{ year: 2004, system: "GameCube" }] },
    { name: "The Minish Cap", abbr: "MC", boxArt: "box-art/11-MC.jpg", titleArt: "title-art/11-MC.jpg",
      releases: [{ year: 2004, system: "GBA" }] },
    { name: "Twilight Princess", abbr: "TP", boxArt: "box-art/12-TP.jpg", titleArt: "title-art/12-TP.jpg",
      releases: [{ year: 2006, system: "GameCube/Wii" }, { year: 2016, system: "Wii U HD" }] },
    { name: "Phantom Hourglass", abbr: "PH", boxArt: "box-art/13-PH.jpg", titleArt: "title-art/13-PH.jpg",
      releases: [{ year: 2007, system: "DS" }] },
    { name: "Spirit Tracks", abbr: "ST", boxArt: "box-art/14-ST.jpg", titleArt: "title-art/14-ST.jpg",
      releases: [{ year: 2009, system: "DS" }] },
    { name: "Skyward Sword", abbr: "SS", boxArt: "box-art/15-SS.jpg", titleArt: "title-art/15-SS.jpg",
      releases: [{ year: 2011, system: "Wii" }, { year: 2021, system: "Switch HD" }] },
    { name: "A Link Between Worlds", abbr: "ALBW", boxArt: "box-art/16-ALBW.jpg", titleArt: "title-art/16-ALBW.jpg",
      releases: [{ year: 2013, system: "3DS" }] },
    { name: "Breath of the Wild", abbr: "BotW", boxArt: "box-art/17-BotW.jpg", titleArt: "title-art/17-BotW.png",
      releases: [{ year: 2017, system: "Switch/Wii U" }] },
    { name: "Tears of the Kingdom", abbr: "TotK", boxArt: "box-art/18-TotK.jpg", titleArt: "title-art/18-TotK.png",
      releases: [{ year: 2023, system: "Switch" }] },
    { name: "Echoes of Wisdom", abbr: "EoW", boxArt: "box-art/19-EoW.jpg", titleArt: "title-art/19-EoW.png",
      releases: [{ year: 2024, system: "Switch" }] },
  ];

  const features = [
    { name: "Hookshot", key: "hookshot", category: "items", emoji: "🪝" },
    { name: "Hammer", key: "hammer", category: "items", emoji: "🔨" },
    { name: "Boomerang", key: "boomerang", category: "items", emoji: "🪃" },
    { name: "Bow", key: "bow", category: "items", emoji: "🏹" },
    { name: "Bombs", key: "bombs", category: "items", emoji: "💣" },
    { name: "Instrument", key: "instrument", category: "items", emoji: "🪉" },
    { name: "Moblins", key: "moblins", category: "enemies", emoji: "🧌" },
    { name: "Flying Tiles", key: "flyingTiles", category: "enemies", emoji: "🧱" },
    { name: "Shadow Link", key: "shadowLink", category: "enemies", emoji: "👤" },
    { name: "Lynels", key: "lynels", category: "enemies", emoji: "🦁" },
    { name: "Cooking", key: "cooking", category: "mechanics", emoji: "🍳" },
    { name: "Horse", key: "horse", category: "mechanics", emoji: "🐴" },
    { name: "Monster Parts", key: "monsterParts", category: "mechanics", emoji: "🫁" },
    { name: "Fishing", key: "fishing", category: "mechanics", emoji: "🎣" },
    { name: "Sleep/Rest", key: "sleeping", category: "mechanics", emoji: "🛌" },
    { name: "Quest Chain", key: "questChain", category: "mechanics", emoji: "📜" },
    { name: "Dungeons", key: "dungeons", category: "mechanics", emoji: "🏰" },
    { name: "Fairy Bottle", key: "fairyBottles", category: "mechanics", emoji: "🧚" },
    { name: "Gerudo", key: "gerudo", category: "races", emoji: "🏜️" },
    { name: "Gorons", key: "gorons", category: "races", emoji: "🌋" },
    { name: "Zora", key: "zora", category: "races", emoji: "🧜🏽" },
    { name: "Koroks", key: "koroks", category: "races", emoji: "🌱" },
  ];

  const categoryStyles = {
    items: { 
      headerBg: 'rgba(180, 83, 9, 0.35)', 
      text: 'text-amber-300',
      colLight: 'rgba(245, 158, 11, 0.12)',
      colDark: 'rgba(245, 158, 11, 0.06)'
    },
    enemies: { 
      headerBg: 'rgba(153, 27, 27, 0.35)', 
      text: 'text-red-300',
      colLight: 'rgba(239, 68, 68, 0.12)',
      colDark: 'rgba(239, 68, 68, 0.06)'
    },
    mechanics: { 
      headerBg: 'rgba(7, 89, 133, 0.35)', 
      text: 'text-sky-300',
      colLight: 'rgba(14, 165, 233, 0.12)',
      colDark: 'rgba(14, 165, 233, 0.06)'
    },
    races: { 
      headerBg: 'rgba(88, 28, 135, 0.35)', 
      text: 'text-purple-300',
      colLight: 'rgba(168, 85, 247, 0.12)',
      colDark: 'rgba(168, 85, 247, 0.06)'
    },
  };

  const featureData = {
    "LoZ": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: false, shadowLink: false, lynels: true, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, koroks: false, sleeping: false, fairyBottles: false, dungeons: true },
    "AoL": { hookshot: false, hammer: true, boomerang: false, bow: false, bombs: false, instrument: true, moblins: true, monsterParts: false, flyingTiles: false, shadowLink: true, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: false, koroks: false, sleeping: true, fairyBottles: false, dungeons: true },
    "ALttP": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: true, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "LA": { hookshot: true, hammer: false, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: false, cooking: false, horse: false, fishing: true, questChain: true, gerudo: false, gorons: false, zora: false, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "OoT": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "MM": { hookshot: true, hammer: false, boomerang: false, bow: true, bombs: true, instrument: true, moblins: false, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, koroks: false, sleeping: true, fairyBottles: true, dungeons: true },
    "OoS": { hookshot: false, hammer: false, boomerang: true, bow: false, bombs: true, instrument: false, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: true, koroks: false, sleeping: true, fairyBottles: true, dungeons: true },
    "OoA": { hookshot: true, hammer: false, boomerang: false, bow: false, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: true, koroks: false, sleeping: true, fairyBottles: true, dungeons: true },
    "WW": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, koroks: true, sleeping: false, fairyBottles: true, dungeons: true },
    "FSA": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, instrument: false, moblins: true, monsterParts: false, flyingTiles: false, shadowLink: true, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: true, gorons: false, zora: true, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "MC": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "TP": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "PH": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, instrument: false, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: true, questChain: true, gerudo: false, gorons: true, zora: false, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "ST": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "SS": { hookshot: true, hammer: false, boomerang: false, bow: true, bombs: true, instrument: true, moblins: true, monsterParts: true, flyingTiles: true, shadowLink: false, lynels: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, koroks: false, sleeping: true, fairyBottles: true, dungeons: true },
    "ALBW": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, instrument: false, moblins: true, monsterParts: false, flyingTiles: true, shadowLink: true, lynels: true, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, koroks: false, sleeping: false, fairyBottles: true, dungeons: true },
    "BotW": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, instrument: false, moblins: true, monsterParts: true, flyingTiles: false, shadowLink: false, lynels: true, cooking: true, horse: true, fishing: false, questChain: true, gerudo: true, gorons: true, zora: true, koroks: true, sleeping: true, fairyBottles: true, dungeons: true },
    "TotK": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, instrument: false, moblins: true, monsterParts: true, flyingTiles: false, shadowLink: false, lynels: true, cooking: true, horse: true, fishing: false, questChain: true, gerudo: true, gorons: true, zora: true, koroks: true, sleeping: true, fairyBottles: true, dungeons: true },
    "EoW": { hookshot: false, hammer: false, boomerang: false, bow: false, bombs: true, instrument: false, moblins: true, monsterParts: true, flyingTiles: false, shadowLink: false, lynels: true, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, koroks: true, sleeping: true, fairyBottles: true, dungeons: true },
  };

  const getFeatureCount = (gameAbbr) => {
    const data = featureData[gameAbbr];
    return Object.values(data).filter(Boolean).length;
  };

  const getGameCount = (featureKey) => {
    return Object.values(featureData).filter(game => game[featureKey]).length;
  };

  // Custom tooltip state
  const [tooltip, setTooltip] = useState({ visible: false, game: null, x: 0, y: 0 });

  const showTooltip = (e, game) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      game,
      x: rect.right + 8,
      y: rect.top + rect.height / 2,
    });
  };

  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false, game: null }));
  };

  const toggleTooltip = (e, game) => {
    e.stopPropagation();
    setTooltip(prev => {
      if (prev.visible && prev.game?.abbr === game.abbr) {
        return { ...prev, visible: false, game: null };
      }
      const rect = e.currentTarget.getBoundingClientRect();
      return {
        visible: true,
        game,
        x: rect.right + 8,
        y: rect.top + rect.height / 2,
      };
    });
  };

  // Tooltip component
  const GameTooltip = () => {
    if (!tooltip.visible || !tooltip.game) return null;
    const game = tooltip.game;
    
    return (
      <div 
        className="fixed z-50 pointer-events-none"
        style={{ 
          left: `${tooltip.x}px`, 
          top: `${tooltip.y}px`,
          transform: 'translateY(-50%)',
        }}
      >
        <div className="bg-gray-900/95 border border-emerald-700 rounded-lg shadow-xl p-3 flex gap-4 backdrop-blur-sm">
          {/* Box Art - supports portrait, landscape, and square */}
          <div className="flex items-center justify-center" style={{ width: '140px', height: '160px' }}>
            <img 
              src={game.boxArt}
              alt={`${game.name} box`}
              className="rounded shadow-md"
              style={{ 
                maxWidth: '140px', 
                maxHeight: '160px', 
                objectFit: 'contain',
              }}
            />
          </div>
          {/* Info */}
          <div className="flex flex-col justify-center min-w-[150px]">
            <div className="text-amber-300 font-bold text-sm mb-2">{game.name}</div>
            <div className="space-y-1">
              {game.releases.map((rel, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400 font-mono w-10">{rel.year}</span>
                  <span className="text-gray-300">{rel.system}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render game row label with title art only + custom tooltip
  const GameLabel = ({ game }) => (
    <div 
      className="cursor-pointer inline-block"
      onMouseEnter={(e) => showTooltip(e, game)}
      onMouseLeave={hideTooltip}
      onClick={(e) => toggleTooltip(e, game)}
    >
      <img 
        src={game.titleArt}
        alt={game.name}
        className="rounded block"
        style={{ 
          width: '128px', 
          height: '48px',
          objectFit: 'contain',
        }}
      />
    </div>
  );

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-3 font-sans"
      onClick={hideTooltip}
    >
      <GameTooltip />
      <h1 className="text-xl font-bold text-amber-300 mb-1 text-center">
        The Legend of Zelda: Feature Timeline
      </h1>
      <p className="text-emerald-200 text-xs mb-2 text-center">
        19 mainline games in release order (1986–2024)
      </p>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center mb-3 text-xs">
        <span className="flex items-center gap-1 bg-amber-900/30 px-2 py-0.5 rounded">
          <span className="text-amber-300">Items</span>
        </span>
        <span className="flex items-center gap-1 bg-red-900/30 px-2 py-0.5 rounded">
          <span className="text-red-300">Enemies</span>
        </span>
        <span className="flex items-center gap-1 bg-sky-900/30 px-2 py-0.5 rounded">
          <span className="text-sky-300">Mechanics</span>
        </span>
        <span className="flex items-center gap-1 bg-purple-900/30 px-2 py-0.5 rounded">
          <span className="text-purple-300">Races</span>
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs rounded" style={{ marginTop: '70px' }}>
          <thead>
            <tr>
              <th className="sticky left-0 bg-green-900 z-10 p-1.5 text-left text-amber-300 font-bold border-b border-green-600 whitespace-nowrap" style={{ width: '136px' }}>
                Game
              </th>
              {features.map((feature, idx) => (
                <th 
                  key={idx} 
                  className="border-b border-green-600 p-0 h-8 relative"
                  style={{ 
                    backgroundColor: categoryStyles[feature.category].headerBg,
                    minWidth: '36px'
                  }}
                >
                  <div 
                    className={`absolute bottom-1 left-1/2 origin-bottom-left whitespace-nowrap font-medium ${categoryStyles[feature.category].text}`}
                    style={{ 
                      transform: 'rotate(-45deg)',
                      transformOrigin: 'bottom left',
                      fontSize: '13px'
                    }}
                  >
                    <span style={{ 
                      fontSize: '24px', 
                      marginRight: '3px',
                      filter: feature.key === 'shadowLink' ? 'brightness(0)' : undefined,
                    }}>{feature.emoji}</span>
                    {feature.name}
                  </div>
                </th>
              ))}
              <th className="p-1.5 text-amber-300 font-bold border-b border-green-600 border-l border-green-500 text-center bg-green-900 min-w-[32px]">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, gameIdx) => {
              const isEvenRow = gameIdx % 2 === 0;
              return (
                <tr key={gameIdx} className="hover:brightness-125 transition-all">
                  <td 
                    className="sticky left-0 z-10 px-1 py-0.5 text-emerald-100 border-r border-green-700"
                    style={{ backgroundColor: isEvenRow ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.1)' }}
                  >
                    <GameLabel game={game} />
                  </td>
                  {features.map((feature, featureIdx) => {
                    const hasFeature = featureData[game.abbr]?.[feature.key];
                    const styles = categoryStyles[feature.category];
                    return (
                      <td 
                        key={featureIdx} 
                        className="p-0.5 text-center"
                        style={{ 
                          backgroundColor: isEvenRow ? styles.colLight : styles.colDark
                        }}
                      >
                        {hasFeature ? (
                          <div 
                            className="w-7 h-7 mx-auto flex items-center justify-center" 
                            style={{ 
                              fontSize: '24px',
                              filter: feature.key === 'shadowLink' ? 'brightness(0)' : undefined,
                            }}
                          >
                            {feature.emoji}
                          </div>
                        ) : (
                          <div className="w-7 h-7 mx-auto rounded-sm bg-black/15 flex items-center justify-center">
                            <span className="text-white/10">·</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                  <td 
                    className="p-1.5 text-center text-amber-300 font-bold border-l border-green-500"
                    style={{ backgroundColor: 'rgba(20, 83, 45, 0.7)' }}
                  >
                    {getFeatureCount(game.abbr)}
                  </td>
                </tr>
              );
            })}
            <tr className="border-t-2 border-green-500" style={{ backgroundColor: 'rgba(20, 83, 45, 0.9)' }}>
              <td className="sticky left-0 z-10 p-1.5 text-amber-300 font-bold text-xs" style={{ backgroundColor: 'rgb(20, 83, 45)' }}>
                Total
              </td>
              {features.map((feature, idx) => (
                <td key={idx} className={`p-1 text-center font-bold text-xs ${categoryStyles[feature.category].text}`}>
                  {getGameCount(feature.key)}
                </td>
              ))}
              <td className="p-1.5 border-l border-green-500"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs text-emerald-200 justify-center">
        <span className="bg-black/30 rounded px-2 py-1">
          <span className="text-amber-300">Universal:</span> 💣 Bombs, 🏰 Dungeons, 📜 Quest Chain
        </span>
        <span className="bg-black/30 rounded px-2 py-1">
          <span className="text-sky-300">Rarest:</span> 🍳 Cooking (2 games)
        </span>
        <span className="bg-black/30 rounded px-2 py-1">
          <span className="text-purple-300">Most features:</span> OoT, TP (17)
        </span>
      </div>
    </div>
  );
};
