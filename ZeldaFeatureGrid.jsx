const ZeldaFeatureGrid = () => {
  // Games with their box art and title art
  // boxArt: retail box cover, titleArt: game logo
  const games = [
    { name: "The Legend of Zelda", year: 1986, abbr: "LoZ", boxArt: "box-art/01-LoZ.jpg", titleArt: "title-art/01-LoZ.jpg" },
    { name: "Zelda II: Adventure of Link", year: 1987, abbr: "AoL", boxArt: "box-art/02-AoL.jpg", titleArt: "title-art/02-AoL.jpg" },
    { name: "A Link to the Past", year: 1991, abbr: "ALttP", boxArt: "box-art/03-ALttP.jpg", titleArt: "title-art/03-ALttP.jpg" },
    { name: "Link's Awakening", year: 1993, abbr: "LA", boxArt: "box-art/04-LA.jpg", titleArt: "title-art/04-LA.jpg" },
    { name: "Ocarina of Time", year: 1998, abbr: "OoT", boxArt: "box-art/05-OoT.jpg", titleArt: "title-art/05-OoT.jpg" },
    { name: "Majora's Mask", year: 2000, abbr: "MM", boxArt: "box-art/06-MM.jpg", titleArt: "title-art/06-MM.jpg" },
    { name: "Oracle of Seasons", year: 2001, abbr: "OoS", boxArt: "box-art/07-OoS.jpg", titleArt: "title-art/07-OoS.jpg" },
    { name: "Oracle of Ages", year: 2001, abbr: "OoA", boxArt: "box-art/08-OoA.jpg", titleArt: "title-art/08-OoA.jpg" },
    { name: "The Wind Waker", year: 2002, abbr: "WW", boxArt: "box-art/09-WW.jpg", titleArt: "title-art/09-WW.jpg" },
    { name: "Four Swords Adventures", year: 2004, abbr: "FSA", boxArt: "box-art/10-FSA.jpg", titleArt: "title-art/10-FSA.jpg" },
    { name: "The Minish Cap", year: 2004, abbr: "MC", boxArt: "box-art/11-MC.jpg", titleArt: "title-art/11-MC.jpg" },
    { name: "Twilight Princess", year: 2006, abbr: "TP", boxArt: "box-art/12-TP.jpg", titleArt: "title-art/12-TP.jpg" },
    { name: "Phantom Hourglass", year: 2007, abbr: "PH", boxArt: "box-art/13-PH.jpg", titleArt: "title-art/13-PH.jpg" },
    { name: "Spirit Tracks", year: 2009, abbr: "ST", boxArt: "box-art/14-ST.jpg", titleArt: "title-art/14-ST.jpg" },
    { name: "Skyward Sword", year: 2011, abbr: "SS", boxArt: "box-art/15-SS.jpg", titleArt: "title-art/15-SS.jpg" },
    { name: "A Link Between Worlds", year: 2013, abbr: "ALBW", boxArt: "box-art/16-ALBW.jpg", titleArt: "title-art/16-ALBW.jpg" },
    { name: "Breath of the Wild", year: 2017, abbr: "BotW", boxArt: "box-art/17-BotW.jpg", titleArt: "title-art/17-BotW.jpg" },
    { name: "Tears of the Kingdom", year: 2023, abbr: "TotK", boxArt: "box-art/18-TotK.jpg", titleArt: "title-art/18-TotK.jpg" },
    { name: "Echoes of Wisdom", year: 2024, abbr: "EoW", boxArt: "box-art/19-EoW.jpg", titleArt: "title-art/19-EoW.jpg" },
  ];

  const features = [
    { name: "Hookshot", key: "hookshot", category: "items", emoji: "🪝" },
    { name: "Hammer", key: "hammer", category: "items", emoji: "🔨" },
    { name: "Boomerang", key: "boomerang", category: "items", emoji: "🪃" },
    { name: "Bow", key: "bow", category: "items", emoji: "🏹" },
    { name: "Bombs", key: "bombs", category: "items", emoji: "💣" },
    { name: "Instrument", key: "instrument", category: "items", emoji: "🪉" },
    { name: "Moblins", key: "moblins", category: "enemies", emoji: "🧌" },
    { name: "Monster Parts", key: "monsterParts", category: "enemies", emoji: "🫁" },
    { name: "Flying Tiles", key: "flyingTiles", category: "enemies", emoji: "🟫" },
    { name: "Shadow Link", key: "shadowLink", category: "enemies", emoji: "👤" },
    { name: "Lynels", key: "lynels", category: "enemies", emoji: "🦁" },
    { name: "Cooking", key: "cooking", category: "mechanics", emoji: "🍳" },
    { name: "Horse", key: "horse", category: "mechanics", emoji: "🐴" },
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

  // Render game row label with box art (left) and title art (right)
  const GameLabel = ({ game }) => {
    const imgStyle = {
      borderRadius: '3px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
      objectFit: 'cover',
    };
    
    return (
      <div className="flex items-center gap-1.5" title={`${game.name} (${game.year})`}>
        {/* Box Art - left */}
        <img 
          src={game.boxArt}
          alt={`${game.name} box`}
          style={{ 
            ...imgStyle,
            width: '32px', 
            height: '44px',
          }}
        />
        {/* Title Art - right */}
        <img 
          src={game.titleArt}
          alt={`${game.name} logo`}
          style={{ 
            ...imgStyle,
            width: '56px', 
            height: '32px',
            objectFit: 'contain',
            background: 'rgba(0,0,0,0.2)',
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-3 font-sans">
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
              <th className="sticky left-0 bg-green-900 z-10 p-1.5 text-left text-amber-300 font-bold min-w-[100px] border-b border-green-600">
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
                    <span style={{ fontSize: '24px', marginRight: '3px' }}>{feature.emoji}</span>
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
                    className="sticky left-0 z-10 p-1 text-emerald-100 border-r border-green-700"
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
                          <div className="w-7 h-7 mx-auto flex items-center justify-center" style={{ fontSize: '24px' }}>
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
