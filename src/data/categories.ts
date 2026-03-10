export type Category = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  promptContext: string;
};

export const categories: Category[] = [
  // --- Game-specific ---
  {
    slug: "pubg-nickname-generator",
    title: "PUBG Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate unique PUBG nicknames with AI. Cool, dark, and tactical names inspired by battle royale culture. Free PUBG name generator.",
    h1: "AI PUBG Nickname Generator",
    intro:
      "Find the perfect name for your PUBG journey. Our AI generates tactical, intimidating, and battle-hardened nicknames inspired by the survival culture of PlayerUnknown's Battlegrounds. Drop in with a name that strikes fear before the first shot.",
    promptContext:
      "PUBG PlayerUnknown's Battlegrounds battle royale game. Theme: military survival, chicken dinner, Erangel, Miramar, loot, snipers, squad tactics, drop zones. Names should feel tactical, gritty, survivalist.",
  },
  {
    slug: "minecraft-nickname-generator",
    title: "Minecraft Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate creative Minecraft nicknames with AI. Builder, crafter, and survival themed names for your Minecraft username. Free generator.",
    h1: "AI Minecraft Nickname Generator",
    intro:
      "Whether you're a master builder, a redstone genius, or a hardcore survivalist, your Minecraft name should reflect your craft. Our AI generates creative, punny, and block-world inspired nicknames perfect for servers and multiplayer.",
    promptContext:
      "Minecraft sandbox game. Theme: crafting, building, creepers, diamonds, redstone, Nether, Ender Dragon, biomes, survival, Steve and Alex. Names can be punny, creative, or reference iconic Minecraft elements.",
  },
  {
    slug: "valorant-nickname-generator",
    title: "Valorant Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate sharp Valorant nicknames with AI. Tactical FPS inspired names for agents like Jett, Reyna, and Sage. Free Valorant name generator.",
    h1: "AI Valorant Nickname Generator",
    intro:
      "Your Valorant nickname is your identity on the battlefield. Our AI crafts sharp, agent-inspired names that capture the precision and style of Riot's tactical FPS. From Radiant to Iron, find a name that belongs on the leaderboard.",
    promptContext:
      "Valorant tactical FPS by Riot Games. Theme: agents like Jett, Reyna, Sage, Phoenix, Omen, Cypher, precision aim, Radiant rank, spike defuse, abilities, clutch plays. Names should sound sharp, futuristic, and tactical.",
  },
  {
    slug: "fortnite-nickname-generator",
    title: "Fortnite Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate Fortnite nicknames with AI. Creative, funny, and Victory Royale inspired names for Fortnite players. Free generator.",
    h1: "AI Fortnite Nickname Generator",
    intro:
      "From building skyscrapers in seconds to landing the perfect headshot, Fortnite players deserve a name as bold as their play style. Our AI generates nicknames that capture the chaotic, colorful energy of the island.",
    promptContext:
      "Fortnite battle royale by Epic Games. Theme: building, Victory Royale, skins, dance emotes, island, loot llamas, Chapter themes, Zero Point, colorful chaotic style. Names can be bold, playful, or reference iconic Fortnite moments.",
  },
  {
    slug: "league-of-legends-nickname-generator",
    title: "League of Legends Nickname Generator — AI LoL Names",
    metaDescription:
      "Generate League of Legends nicknames with AI. Champion-inspired, lore-rich names for LoL players. Free summoner name generator.",
    h1: "AI League of Legends Nickname Generator",
    intro:
      "The Rift demands a name worthy of its champions. Our AI draws from the deep lore of Runeterra, champion abilities, and the competitive spirit of ranked play to generate summoner names that feel legendary.",
    promptContext:
      "League of Legends MOBA by Riot Games. Theme: Runeterra lore, champions like Yasuo, Zed, Jinx, Lux, Thresh, ranked climb, Summoner's Rift, pentakill, Baron Nashor. Names should feel epic, lore-rich, or reference champion culture.",
  },
  {
    slug: "cs2-nickname-generator",
    title: "CS2 Nickname Generator — Counter-Strike 2 Names",
    metaDescription:
      "Generate Counter-Strike 2 (CS2) nicknames with AI. Competitive, sharp FPS names inspired by pro CS culture. Free CS2 name generator.",
    h1: "AI CS2 Nickname Generator",
    intro:
      "Counter-Strike is built on legacy. Our AI generates nicknames rooted in the no-nonsense, high-precision culture of professional Counter-Strike — from spray-and-pray chaos to crisp one-taps on the A site.",
    promptContext:
      "Counter-Strike 2 (CS2) tactical FPS. Theme: pro players, maps like Dust2 and Mirage, AWP sniping, eco rounds, CT and T sides, clutch situations, pro teams and tournaments, headshots. Names should feel sharp, gritty, or reference CS culture.",
  },
  {
    slug: "roblox-nickname-generator",
    title: "Roblox Nickname Generator — AI Username Ideas",
    metaDescription:
      "Generate fun Roblox usernames with AI. Creative, unique, and cool name ideas for Roblox players of all ages. Free generator.",
    h1: "AI Roblox Nickname Generator",
    intro:
      "Your Roblox username is the first thing other players see. Our AI generates fun, creative, and unique names that stand out across any game on the platform — from obby champions to Adopt Me traders.",
    promptContext:
      "Roblox online gaming platform. Theme: Robux, obby, Adopt Me, Blox Fruits, Brookhaven, avatar customization, game creation, young creative community. Names should be fun, creative, sometimes playful or punny.",
  },
  {
    slug: "apex-legends-nickname-generator",
    title: "Apex Legends Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate Apex Legends nicknames with AI. Fast, aggressive, and legend-inspired names for Apex players. Free Apex name generator.",
    h1: "AI Apex Legends Nickname Generator",
    intro:
      "The Apex Games reward speed, aggression, and flair. Our AI generates legend-worthy names inspired by the Outlands, Apex's diverse cast of legends, and the fast-paced chaos of ranked play.",
    promptContext:
      "Apex Legends battle royale by Respawn/EA. Theme: legends like Wraith, Pathfinder, Bloodhound, Octane, Lifeline, Outlands lore, Titanfall universe, fast movement, Champions queue, aggressive plays. Names should feel dynamic, fast, or legend-inspired.",
  },
  {
    slug: "free-fire-nickname-generator",
    title: "Free Fire Nickname Generator — AI Gaming Names",
    metaDescription:
      "Generate Free Fire nicknames with AI. Bold, stylish names for Free Fire players. Free FF name generator with special styles.",
    h1: "AI Free Fire Nickname Generator",
    intro:
      "Free Fire is a game of bold plays and bolder identities. Our AI generates fierce, stylish nicknames that fit the high-energy, mobile-first culture of one of the world's most popular battle royale games.",
    promptContext:
      "Free Fire (Garena Free Fire) mobile battle royale. Theme: Bold aggressive style, popular in Southeast Asia, Latin America, and South Asia, characters like DJ Alok and Chrono, fast mobile gameplay, guild culture. Names should sound bold and fierce.",
  },
  {
    slug: "gta-nickname-generator",
    title: "GTA Nickname Generator — Grand Theft Auto Names",
    metaDescription:
      "Generate GTA Online nicknames with AI. Street-smart, crime-world inspired names for GTA Online players. Free GTA name generator.",
    h1: "AI GTA Nickname Generator",
    intro:
      "Los Santos rewards those with the right reputation — and that starts with the right name. Our AI generates street-smart, crime-culture inspired nicknames fit for a GTA Online kingpin or a Heist mastermind.",
    promptContext:
      "Grand Theft Auto / GTA Online by Rockstar Games. Theme: street crime, heists, Los Santos, San Andreas, gang culture, car culture, money, wanted level, Los Santos underworld. Names should have a street-smart, crime-world, or urban edge.",
  },
  {
    slug: "call-of-duty-nickname-generator",
    title: "Call of Duty Nickname Generator — AI COD Names",
    metaDescription:
      "Generate Call of Duty nicknames with AI. Military, tactical, and Warzone inspired names for COD players. Free COD name generator.",
    h1: "AI Call of Duty Nickname Generator",
    intro:
      "Whether you're dropping into Warzone, grinding ranked in Modern Warfare, or playing classic multiplayer, your COD callsign should command respect. Our AI generates military-grade nicknames worthy of the battlefield.",
    promptContext:
      "Call of Duty franchise including Warzone, Modern Warfare, and Black Ops. Theme: military operations, killstreaks, Warzone Verdansk/Caldera, tactical gear, prestige ranks, pro COD players, military callsigns. Names should sound tactical and military.",
  },
  {
    slug: "mobile-legends-nickname-generator",
    title: "Mobile Legends Nickname Generator — AI MLBB Names",
    metaDescription:
      "Generate Mobile Legends Bang Bang nicknames with AI. Hero-inspired, epic MLBB names for rank climbing. Free Mobile Legends name generator.",
    h1: "AI Mobile Legends Nickname Generator",
    intro:
      "Mobile Legends is Southeast Asia's premier MOBA, and your nickname needs to match the intensity of Mythic rank. Our AI generates hero-inspired, powerful names drawn from the Land of Dawn's lore and competitive culture.",
    promptContext:
      "Mobile Legends Bang Bang (MLBB) mobile MOBA. Theme: heroes, Land of Dawn lore, Mythic rank, popular in Southeast Asia and the Philippines, epic team fights, roles like marksman/mage/tank. Names should sound epic and heroic.",
  },

  // --- Style-specific ---
  {
    slug: "anime-nickname-generator",
    title: "Anime Nickname Generator — AI Anime Gaming Names",
    metaDescription:
      "Generate anime-inspired gaming nicknames with AI. Names rooted in anime culture, characters, and Japanese internet slang. Free generator.",
    h1: "AI Anime Nickname Generator",
    intro:
      "Level up your username with the spirit of your favorite anime. Our AI generates nicknames inspired by iconic anime tropes, character archetypes, Japanese internet culture, and the passion of the global anime community.",
    promptContext:
      "Anime and manga culture. Theme: popular anime series like Naruto, Attack on Titan, One Piece, Demon Slayer, Dragon Ball, My Hero Academia, anime tropes like protagonist energy, overpowered characters, Japanese words with meaning. Mix Japanese words with English playfully.",
  },
  {
    slug: "dark-nickname-generator",
    title: "Dark Nickname Generator — Evil & Edgy Gaming Names",
    metaDescription:
      "Generate dark, edgy, and menacing gaming nicknames with AI. Villain-inspired, sinister names for gamers who prefer the dark side. Free generator.",
    h1: "AI Dark Nickname Generator",
    intro:
      "Some players prefer the shadows. Our AI generates dark, menacing, and villain-worthy nicknames that carry an aura of dread — perfect for players who want to be the final boss of every lobby.",
    promptContext:
      "Dark, evil, and edgy gaming nickname style. Theme: shadows, darkness, void, chaos, corruption, demons, death, horror, villain archetypes, gothic aesthetic, ominous imagery. Names should feel sinister, menacing, and powerful.",
  },
  {
    slug: "funny-gaming-nickname-generator",
    title: "Funny Gaming Nickname Generator — AI Humor Names",
    metaDescription:
      "Generate hilarious gaming nicknames with AI. Funny, meme-worthy, and absurd names that will make your teammates laugh. Free generator.",
    h1: "AI Funny Gaming Nickname Generator",
    intro:
      "Life's too short for a boring username. Our AI generates gaming nicknames that are genuinely funny — from clever wordplay and absurd concepts to gaming meme references that make lobbies instantly more entertaining.",
    promptContext:
      "Funny and humorous gaming nicknames. Theme: gaming memes, internet humor, absurdist wordplay, self-deprecating gamer jokes, ironic names, references to gaming fails (like 'teamkiller' or 'always last place'), puns. Names should make people laugh or smile.",
  },
  {
    slug: "cool-gaming-nickname-generator",
    title: "Cool Gaming Nickname Generator — AI Stylish Names",
    metaDescription:
      "Generate cool and stylish gaming nicknames with AI. Sleek, memorable, and impressive names for serious gamers. Free generator.",
    h1: "AI Cool Gaming Nickname Generator",
    intro:
      "A cool nickname is effortless — it looks good on a scoreboard, rolls off the tongue, and sticks in your opponent's memory. Our AI generates sleek, modern gaming names with the right balance of edge and swagger.",
    promptContext:
      "Cool and stylish gaming nicknames. Theme: sleek modern aesthetics, short impactful words, powerful imagery, cyberpunk or futuristic vibes, elements like speed, precision, dominance. Names should sound impressive and effortlessly cool.",
  },
  {
    slug: "cute-nickname-generator",
    title: "Cute Nickname Generator — Kawaii Gaming Names",
    metaDescription:
      "Generate cute and kawaii gaming nicknames with AI. Adorable, sweet names inspired by kawaii culture for gamers. Free cute name generator.",
    h1: "AI Cute Nickname Generator",
    intro:
      "Cute names can still dominate the leaderboard. Our AI generates adorable, kawaii-inspired gaming nicknames that blend sweetness with personality — perfect for players who bring charm to every match.",
    promptContext:
      "Cute and kawaii gaming nicknames. Theme: kawaii culture, pastel aesthetics, soft animals like bunnies and cats, sweet food names, Japanese cute words, innocent and playful vibes. Names should feel adorable and wholesome.",
  },
  {
    slug: "pro-gamer-nickname-generator",
    title: "Pro Gamer Nickname Generator — Esports Names",
    metaDescription:
      "Generate professional esports-ready gaming nicknames with AI. Clean, competitive, and sponsor-friendly names for serious players. Free generator.",
    h1: "AI Pro Gamer Nickname Generator",
    intro:
      "Pro players need a name that works on a jersey, a broadcast overlay, and a fan's lips. Our AI generates clean, competitive, and memorable esports names — the kind that end up on tournament brackets.",
    promptContext:
      "Professional esports and competitive gaming nicknames. Theme: short 1-2 word names, clean and memorable, inspired by pro player naming conventions (like s1mple, shroud, Faker, Ninja), sponsor-friendly, conveys skill and professionalism.",
  },

  // --- Culture/language ---
  {
    slug: "arabic-nickname-generator",
    title: "Arabic Nickname Generator — AI Arabic Gaming Names",
    metaDescription:
      "Generate Arabic gaming nicknames with AI. Names rooted in Arab culture, history, internet slang, and gaming memes. Free Arabic name generator.",
    h1: "AI Arabic Nickname Generator",
    intro:
      "From the streets of Cairo to the gaming cafes of Riyadh, Arab gamers have built a vibrant online culture. Our AI generates nicknames steeped in Arabic internet slang, mythology, and the memes that unite the Arab gaming community.",
    promptContext:
      "Arabic culture and Arab gaming community. Theme: Arabic internet slang, Egyptian meme culture, Gulf gamer culture, Arab mythology and history, popular Arab gaming content creators, romanized Arabic words, desert imagery. Make names feel authentically Arab.",
  },
  {
    slug: "japanese-nickname-generator",
    title: "Japanese Nickname Generator — AI Japanese Gaming Names",
    metaDescription:
      "Generate Japanese gaming nicknames with AI. Names rooted in Japanese culture, kanji meanings, anime, and internet slang. Free generator.",
    h1: "AI Japanese Nickname Generator",
    intro:
      "Japan is the birthplace of modern gaming culture. Our AI generates nicknames inspired by Japanese internet culture, iconic gaming franchises, samurai tradition, and the aesthetic sensibility that defines Japanese online identity.",
    promptContext:
      "Japanese culture and gaming. Theme: Japanese internet slang (2ch culture), samurai and ninja mythology, anime references, J-pop culture, iconic Japanese game franchises, romanized Japanese words with cool meanings, Tokyo street culture. Names should feel distinctly Japanese.",
  },
  {
    slug: "russian-nickname-generator",
    title: "Russian Nickname Generator — AI Russian Gaming Names",
    metaDescription:
      "Generate Russian gaming nicknames with AI. Names rooted in Russian internet culture, Slavic mythology, and CIS gaming memes. Free generator.",
    h1: "AI Russian Nickname Generator",
    intro:
      "Russian-speaking gamers have a legendary presence in online gaming — from CS pros to the unique humor of Runet. Our AI generates nicknames rooted in Slavic culture, Russian internet memes, and the gritty identity of CIS gaming.",
    promptContext:
      "Russian culture and CIS gaming community. Theme: Slavic mythology, Russian internet (Runet) memes and slang, famous Russian CS:GO players, bears and cold imagery, Russian dark humor, romanized Russian words, gopnik culture. Names should feel authentically Russian.",
  },
  {
    slug: "spanish-nickname-generator",
    title: "Spanish Nickname Generator — AI Spanish Gaming Names",
    metaDescription:
      "Generate Spanish gaming nicknames with AI. Names rooted in Spanish and Latin American culture, memes, and internet slang. Free generator.",
    h1: "AI Spanish Nickname Generator",
    intro:
      "Spanish-speaking gamers span two continents, from Spain to Latin America, with a rich and passionate gaming culture. Our AI generates nicknames that draw from both the European and Latin American Spanish internet worlds.",
    promptContext:
      "Spanish language gaming culture spanning Spain and Latin America. Theme: Spanish internet memes and slang, Latin American gaming culture (especially Argentina, Mexico, Colombia), Spanish football culture, famous Spanish-speaking streamers, romanized Spanish words with gaming edge.",
  },
  {
    slug: "korean-nickname-generator",
    title: "Korean Nickname Generator — AI Korean Gaming Names",
    metaDescription:
      "Generate Korean gaming nicknames with AI. Names inspired by K-culture, PC bang culture, Korean esports legends, and Korean internet slang. Free generator.",
    h1: "AI Korean Nickname Generator",
    intro:
      "South Korea is the cradle of esports — home to legendary players, packed PC bangs, and a gaming culture unlike any other. Our AI generates nicknames inspired by Korean gaming icons, K-internet slang, and the intensity of Korean competitive culture.",
    promptContext:
      "Korean culture and gaming. Theme: PC bang culture, Korean esports legends (Faker, Flash, Jaedong), K-pop and K-drama references, Korean internet slang, StarCraft legacy, romanized Korean words, intense competitive spirit. Names should feel authentically Korean.",
  },
  {
    slug: "turkish-nickname-generator",
    title: "Turkish Nickname Generator — AI Turkish Gaming Names",
    metaDescription:
      "Generate Turkish gaming nicknames with AI. Names rooted in Turkish internet culture, Ottoman history, and Turkish gaming memes. Free generator.",
    h1: "AI Turkish Nickname Generator",
    intro:
      "Turkish gamers are a passionate and massive community with a rich internet culture all their own. Our AI generates nicknames drawing from Ottoman history, Turkish internet humor, and the unique slang of Turkey's gaming scene.",
    promptContext:
      "Turkish culture and gaming community. Theme: Ottoman history and imagery, Turkish internet memes and slang, popular Turkish games and streamers, Anatolian folklore, romanized Turkish words, Turkish football culture, tea (çay) and kebab humor. Names should feel distinctly Turkish.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
