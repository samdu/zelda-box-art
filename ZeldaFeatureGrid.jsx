const ZeldaFeatureGrid = () => {
  const games = [
    { name: "The Legend of Zelda", year: 1986, abbr: "LoZ", boxArt: "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_samples%29_gold.png" },
    { name: "Zelda II: Adventure of Link", year: 1987, abbr: "AoL", boxArt: "https://upload.wikimedia.org/wikipedia/en/2/22/Zelda_II_The_Adventure_of_Link_box.jpg" },
    { name: "A Link to the Past", year: 1991, abbr: "ALttP", boxArt: "03-ALttP.jpg" },
    { name: "Link's Awakening", year: 1993, abbr: "LA", boxArt: "https://upload.wikimedia.org/wikipedia/en/a/a1/Link%27s_Awakening.png" },
    { name: "Ocarina of Time", year: 1998, abbr: "OoT", boxArt: "05-OoT.jpg" },
    { name: "Majora's Mask", year: 2000, abbr: "MM", boxArt: "06-MM.jpg" },
    { name: "Oracle of Seasons", year: 2001, abbr: "OoS", boxArt: "https://upload.wikimedia.org/wikipedia/en/c/c7/The_Legend_of_Zelda_Oracle_of_Seasons_and_Oracle_of_Ages_Game_Cover.jpg" },
    { name: "Oracle of Ages", year: 2001, abbr: "OoA", boxArt: "https://upload.wikimedia.org/wikipedia/en/c/c7/The_Legend_of_Zelda_Oracle_of_Seasons_and_Oracle_of_Ages_Game_Cover.jpg" },
    { name: "The Wind Waker", year: 2002, abbr: "WW", boxArt: "https://upload.wikimedia.org/wikipedia/en/1/14/The_Legend_of_Zelda_The_Wind_Waker.jpg" },
    { name: "Four Swords Adventures", year: 2004, abbr: "FSA", boxArt: "https://upload.wikimedia.org/wikipedia/en/b/bc/The_Legend_of_Zelda_Four_Swords_Adventures_Game_Cover.jpg" },
    { name: "The Minish Cap", year: 2004, abbr: "MC", boxArt: "https://upload.wikimedia.org/wikipedia/en/a/a5/The_Legend_of_Zelda_The_Minish_Cap_Game_Cover.jpg" },
    { name: "Twilight Princess", year: 2006, abbr: "TP", boxArt: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg" },
    { name: "Phantom Hourglass", year: 2007, abbr: "PH", boxArt: "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Legend_of_Zelda_Phantom_Hourglass_Game_Cover.jpg" },
    { name: "Spirit Tracks", year: 2009, abbr: "ST", boxArt: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Legend_of_Zelda_Spirit_Tracks_box_art.jpg" },
    { name: "Skyward Sword", year: 2011, abbr: "SS", boxArt: "https://upload.wikimedia.org/wikipedia/en/0/09/The_Legend_of_Zelda_Skyward_Sword_Boxart.png" },
    { name: "A Link Between Worlds", year: 2013, abbr: "ALBW", boxArt: "https://upload.wikimedia.org/wikipedia/en/6/6e/The_Legend_of_Zelda_A_Link_Between_Worlds_NA_cover.jpg" },
    { name: "Breath of the Wild", year: 2017, abbr: "BotW", boxArt: "16-BotW.jpg" },
    { name: "Tears of the Kingdom", year: 2023, abbr: "TotK", boxArt: "17-TotK.jpg" },
    { name: "Echoes of Wisdom", year: 2024, abbr: "EoW", boxArt: "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Legend_of_Zelda_Echoes_of_Wisdom_cover.jpg" },
  ];

  const features = [
    { name: "Hookshot", key: "hookshot", category: "items", emoji: "🪝" },
    { name: "Hammer", key: "hammer", category: "items", emoji: "🔨" },
    { name: "Boomerang", key: "boomerang", category: "items", emoji: "🪃" },
    { name: "Bow", key: "bow", category: "items", emoji: "🏹" },
    { name: "Bombs", key: "bombs", category: "items", emoji: "💣" },
    { name: "Moblins", key: "moblins", category: "enemies", emoji: "🧌" },
    { name: "Monster Parts", key: "monsterParts", category: "enemies", emoji: "🫁" },
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
    "LoZ": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, sleeping: false, fairyBottles: false, dungeons: true },
    "AoL": { hookshot: false, hammer: true, boomerang: false, bow: false, bombs: false, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: false, sleeping: true, fairyBottles: false, dungeons: true },
    "ALttP": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, sleeping: false, fairyBottles: true, dungeons: true },
    "LA": { hookshot: true, hammer: false, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: true, questChain: true, gerudo: false, gorons: false, zora: false, sleeping: false, fairyBottles: true, dungeons: true },
    "OoT": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: false, fairyBottles: true, dungeons: true },
    "MM": { hookshot: true, hammer: false, boomerang: false, bow: true, bombs: true, moblins: false, monsterParts: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
    "OoS": { hookshot: false, hammer: false, boomerang: true, bow: false, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
    "OoA": { hookshot: true, hammer: false, boomerang: false, bow: false, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
    "WW": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, sleeping: false, fairyBottles: true, dungeons: true },
    "FSA": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: true, gorons: false, zora: true, sleeping: false, fairyBottles: true, dungeons: true },
    "MC": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, sleeping: false, fairyBottles: true, dungeons: true },
    "TP": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: false, fairyBottles: true, dungeons: true },
    "PH": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: true, questChain: true, gerudo: false, gorons: true, zora: false, sleeping: false, fairyBottles: true, dungeons: true },
    "ST": { hookshot: false, hammer: false, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, sleeping: false, fairyBottles: true, dungeons: true },
    "SS": { hookshot: true, hammer: false, boomerang: false, bow: true, bombs: true, moblins: true, monsterParts: true, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: true, zora: false, sleeping: true, fairyBottles: true, dungeons: true },
    "ALBW": { hookshot: true, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: false, cooking: false, horse: false, fishing: false, questChain: true, gerudo: false, gorons: false, zora: true, sleeping: false, fairyBottles: true, dungeons: true },
    "BotW": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: true, cooking: true, horse: true, fishing: false, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
    "TotK": { hookshot: false, hammer: true, boomerang: true, bow: true, bombs: true, moblins: true, monsterParts: true, cooking: true, horse: true, fishing: false, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
    "EoW": { hookshot: false, hammer: false, boomerang: false, bow: false, bombs: true, moblins: true, monsterParts: true, cooking: false, horse: true, fishing: true, questChain: true, gerudo: true, gorons: true, zora: true, sleeping: true, fairyBottles: true, dungeons: true },
  };

  const getFeatureCount = (gameAbbr) => {
    const data = featureData[gameAbbr];
    return Object.values(data).filter(Boolean).length;
  };

  const getGameCount = (featureKey) => {
    return Object.values(featureData).filter(game => game[featureKey]).length;
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
                    <div className="flex items-center gap-2">
                      <img 
                        src={game.boxArt} 
                        alt={game.name}
                        className="w-8 h-10 object-cover rounded shadow-md"
                        style={{ minWidth: '32px', backgroundColor: '#1a1a1a' }}
                      />
                      <div className="flex flex-col">
                        <span className="text-amber-400 font-mono text-xs">{game.year}</span>
                        <span className="text-xs text-emerald-200">{game.abbr}</span>
                      </div>
                    </div>
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
          <span className="text-purple-300">Most features:</span> OoT, TP (15)
        </span>
      </div>
    </div>
  );
};
