class GameWordle {
  constructor(boardEl, keyboardEl, msgEl) {
    this.WORDS = [
      "AARGH", "ABACK", "ABASE", "ABATE", "ABBEY", "ABBOT", "ABHOR", "ABIDE", "ABLED", "ABODE", "ABORT", "ABOUT", "ABOVE", "ABUSE", "ACORN", "ACRID", "ACTED", "ACTOR", "ACUTE", "ADAGE", "ADAPT", "ADDED", "ADEPT", "ADIEU", "ADMIN", "ADMIT", "ADOBE", "ADOPT", "ADORE", "ADORN", "ADULT", "AFFIX", "AFIRE", "AFOOT", "AFOUL", "AFTER", "AGAIN", "AGAPE", "AGATE", "AGENT", "AGGIE", "AGILE", "AGING", "AGLOW", "AGONY", "AGORA", "AGREE", "AHEAD", "AHOLD", "AIDER", "AIMED", "AIRED", "AISLE", "ALAMO", "ALARM", "ALBUM", "ALERT", "ALGAE", "ALIBI", "ALIEN", "ALIGN", "ALIKE", "ALIVE", "ALLAY", "ALLEY", "ALLOT", "ALLOW", "ALLOY", "ALOFT", "ALOHA", "ALONE", "ALONG", "ALOOF", "ALOUD", "ALPHA", "ALTAR", "ALTER", "AMAZE", "AMBER", "AMBLE", "AMEND", "AMIGO", "AMITY", "AMONG", "AMPLE", "AMPLY", "AMUSE", "ANGEL", "ANGER", "ANGLE", "ANGRY", "ANGST", "ANIME", "ANKLE", "ANNEX", "ANNOY", "ANNUL", "ANODE", "ANTIC", "ANVIL", "AORTA", "APART", "APHID", "APING", "APNEA", "APPLE", "APPLY", "APRON", "APTLY", "ARBOR", "ARDOR", "ARENA", "ARGUE", "ARIEL", "ARISE", "ARMED", "ARMOR", "AROMA", "AROSE", "ARRAY", "ARROW", "ARSON", "ARTSY", "ASCOT", "ASHEN", "ASIDE", "ASKED", "ASKEW", "ASPEN", "ASSAY", "ASSET", "ATOLL", "ATONE", "ATTIC", "AUDIO", "AUDIT", "AUGUR", "AUNTY", "AVAIL", "AVERT", "AVIAN", "AVOID", "AWAIT", "AWAKE", "AWARD", "AWARE", "AWASH", "AWFUL", "AWOKE", "AXIAL", "AXIOM", "AXION", "AZURE", 
      "BACON", "BADGE", "BADLY", "BAGEL", "BAGGY", "BAKED", "BAKER", "BALDY", "BALER", "BALMY", "BANAL", "BANJO", "BARGE", "BARON", "BARRY", "BASAL", "BASED", "BASIC", "BASIL", "BASIN", "BASTE", "BATCH", "BATHE", "BATON", "BATTY", "BAWDY", "BAYOU", "BEACH", "BEADY", "BEARD", "BEAST", "BEECH", "BEEFY", "BEFIT", "BEGAN", "BEGAT", "BEGET", "BEGIN", "BEGUN", "BEIGE", "BEING", "BELCH", "BELIE", "BELLE", "BELLY", "BELOW", "BENCH", "BENNY", "BERET", "BERRY", "BERTH", "BESET", "BETEL", "BEVEL", "BEZEL", "BIBLE", "BICEP", "BIDDY", "BIGOT", "BIKER", "BILGE", "BILLY", "BIMBO", "BINGE", "BINGO", "BIOME", "BIRCH", "BIRTH", "BISON", "BITTY", "BLACK", "BLADE", "BLAME", "BLAND", "BLANK", "BLARE", "BLAST", "BLAZE", "BLEAK", "BLEAT", "BLEED", "BLEEP", "BLEND", "BLIMP", "BLIND", "BLING", "BLINK", "BLITZ", "BLOAT", "BLOCK", "BLOKE", "BLOND", "BLOOD", "BLOOM", "BLOWN", "BLUER", "BLUFF", "BLUNT", "BLURB", "BLURT", "BLUSH", "BOARD", "BOAST", "BOBBY", "BOGEY", "BONER", "BONEY", "BONGO", "BONNY", "BOOBY", "BOOST", "BOOTH", "BOOTY", "BOOZE", "BOOZY", "BORAX", "BORED", "BORNE", "BOSOM", "BOSSY", "BOTCH", "BOUGH", "BOULE", "BOUND", "BOWED", "BOWEL", "BOXED", "BOXER", "BRACE", "BRAID", "BRAIN", "BRAKE", "BRAND", "BRASH", "BRAVE", "BRAVO", "BRAWL", "BRAWNY", "BREAD", "BREAK", "BREED", "BRENT", "BRIAR", "BRIBE", "BRICK", "BRIDE", "BRIEF", "BRINE", "BRING", "BRINK", "BRINY", "BRISK", "BRITT", 
      "BROAD", "BROCK", "BROIL", "BROKE", "BROOD", "BROOK", "BROOM", "BROTH", "BROWN", "BRUNT", "BRUSH", "BRUTE", "BUBBA", "BUDDY", "BUDGE", "BUFFY", "BUGGY", "BUGLE", "BUILD", "BUILT", "BULGE", "BULKY", "BULLY", "BUMPY", "BUNCH", "BUNNY", "BURKE", "BURLY", "BURNT", "BURST", "BUSED", "BUSHY", "BUTCH", "BUTTE", "BUXOM", "BUYER", "BYLAW",
      "CABAL", "CABBY", "CABIN", "CABLE", "CACAO", "CACHE", "CACTI", "CADDY", "CADET", "CAGED", "CAGEY", "CAIRN", "CAMEL", "CAMEO", "CANAL", "CANDY", "CANNY", "CANOE", "CANON", "CAPER", "CAPRI", "CAPUT", "CARAT", "CARED", "CARGO", "CAROL", "CARRY", "CARVE", "CASTE", "CATCH", "CATER", "CATTY", "CAULK", "CAUSE", "CAVED", "CAVIL", "CEASE", "CEDAR", "CELLO", "CHAFE", "CHAFF", "CHAIN", "CHAIR", "CHALK", "CHAMP", "CHANG", "CHANT", "CHARD", "CHARM", "CHART", "CHASE", "CHASM", "CHEAP", "CHEAT", "CHECK", "CHEEK", "CHEER", "CHEMO", "CHEST", "CHEVY", "CHICK", "CHICO", "CHIDE", "CHIEF", "CHILD", "CHILE", "CHILI", "CHILL", "CHIME", "CHIMP", "CHINA", "CHING", "CHINK", "CHINO", "CHIRP", "CHOCK", "CHOIR", "CHOKE", "CHORD", "CHORE", "CHOSE", "CHUCK", "CHUMP", "CHUNK", "CHURN", "CHUTE", "CIDER", "CIGAR", "CINCH", "CIRCA", "CISCO", "CIVIC", "CIVIL", "CLACK", "CLAIM", "CLAMP", "CLANG", "CLANK", "CLARY", "CLASH", "CLASP", "CLEAN", "CLEAR", "CLEAT", "CLEFT", "CLERK", "CLICK", "CLIFF", "CLIMB", "CLING", "CLINK", "CLOAK", "CLOCK", "CLONE", "CLOSE", "CLOTH", "CLOUD", "CLOUT", "CLOVE", "CLOWN", "CLUCK", "CLUED", "CLUMP", "CLUNG", "COACH", "COAST", "COBRA", "COCKY", "COCOA", "CODED", "COLBY", "COLIN", "COLON", "COLOR", "COMBO", "COMET", "COMFY", "COMIC", "COMMA", "CONCH", "CONDO", "CONEY", "CONGO", "CONIC", "COPSE", "CORAL", "CORER", "CORKY", "CORNY", "COSTA", "COUGH", "COULD", "COUNT", "COUPE", "COURT", "COVEN", "COVER", "COVET", "COVEY", "COWER", "COYLY", "CRACK", "CRAFT", "CRAMP", "CRANE", "CRANK", "CRASH", "CRATE", "CRAVE", "CRAWL", "CRAZE", "CRAZY", "CREAK", "CREAM", "CREDO", "CREED", "CREEK", "CREEP", "CREME", "CREPE", "CREPT", "CREST", "CRICK", "CRIED", "CRIER", "CRIME", "CRIMP", "CRISP", "CROAK", "CROCK", "CROFT", "CRONE", "CRONY", "CROOK", "CRORE", "CROUP", "CROWD", "CROWN", "CRUDE", "CRUEL", "CRUMB", "CRUMP", "CRUSH", "CRUST", "CRYPT", "CUBIC", "CUDDY", "CUMIN", "CUPID", "CURED", "CURIO", "CURLY", "CURRY", "CURSE", "CURVE", "CURVY", "CUTER", "CUTIE", "CYBER", "CYCLE", "CYNIC",
      "DADDY", "DAFFY", "DAILY", "DAIRY", "DAISY", "DALLY", "DANCE", "DANDY", "DARED", "DATED", "DATUM", "DAUNT", "DEALT", "DEATH", "DEBAR", "DEBIT", "DEBUT", "DECAF", "DECAL", "DECAY", "DECOR", "DECOY", "DECRY", "DEFER", "DEIGN", "DEITY", "DELAY", "DELTA", "DELVE", "DEMON", "DEMUR", "DENIM", "DENSE", "DEPOT", "DEPTH", "DERBY", "DETER", "DETOX", "DEUCE", "DEVIL", "DEVON", "DIARY", "DICEY", "DICKY", "DIGIT", "DILDO", "DILLY", "DIMLY", "DINED", "DINER", "DINGO", "DINGY", "DINKY", "DIODE", "DIRGE", "DIRTY", "DISCO", "DITCH", "DITTO", "DITTY", "DIVER", "DIZZY", "DODGE", "DODGY", "DOGGY", "DOGMA", "DOING", "DOLLY", "DONNA", "DONOR", "DONUT", "DOPEY", "DOTTY", "DOUBT", "DOUGH", "DOWDY", "DOWEL", "DOWNY", "DOWRY", "DOZEN", "DRAFT", "DRAIN", "DRAKE", "DRAMA", "DRANK", "DRAPE", "DRAWL", "DRAWN", "DREAD", "DREAM", "DRIED", "DRIER", "DRIFT", "DRILL", "DRINK", "DRIVE", "DROID", "DROIT", "DROLL", "DRONE", "DROOL", "DROOP", "DROVE", "DROWN", "DRUID", "DRUNK", "DRYER", "DRYLY", "DUCHY", "DUCKY", "DULLY", "DUMBO", "DUMMY", "DUMPY", "DUNCE", "DUNNO", "DUPED", "DUSKY", "DUSTY", "DUTCH", "DUVET", "DWARF", "DWELL", "DWELT", "DYING", 
      "EAGER", "EAGLE", "EAGRE", "EARED", "EARLY", "EARTH", "EASED", "EASEL", "EASER", "EATEN", "EATER", "EAVED", "EBBED", "EBBET", "EBONY", "EBOOK", "ECHED", "ECLAT", "EDEMA", "EDGED", "EDGER", "EDICT", "EDIFY", "EDILE", "EDUCE", "EDUCT", "EEJIT", "EENSY", "EERIE", "EGEST", "EGGAR", "EGGED", "EGGER", "EGRET", "EIDER", "EIGHT", "EIKON", "EJECT", "EJIDO", "EKING", "ELAIN", "ELAND", "ELATE", "ELBOW", "ELDER", "ELECT", "ELEGY", "ELEMI", "ELFIN", "ELIDE", "ELINT", "ELITE", "ELOIN", "ELOPE", "ELUDE", "ELUTE", "ELVEN", "ELVER", "EMAIL", "EMBAR", "EMBAY", "EMBED", "EMBER", "EMBOW", "EMCEE", "EMEER", "EMEND", "EMERG", "EMERY", "EMMER", "EMMET", "EMOTE", "EMPTY", "EMYDE", "ENACT", "ENATE", "ENDED", "ENDER", "ENDOW", "ENDUE", "ENEMA", "ENEMY", "ENJOY", "ENNUI", "ENOKI", "ENORM", "ENROL", "ENSKY", "ENSUE", "ENTER", "ENTIA", "ENTRY", "ENURE", "ENVOI", "ENVOY", "ENZYM", "EOSIN", "EPACT", "EPHAH", "EPHOD", "EPHOR", "EPOCH", "EPODE", "EPOXY", "EQUAL", "EQUID", "EQUIP", "ERASE", "ERECT", "ERGOT", "ERICA", "ERODE", "EROSE", "ERRED", "ERROR", "ERUCT", "ERUGO", "ERUPT", "ERVIL", "ESCAR", "ESCOT", "ESKAR", "ESKER", "ESSAY", "ESTER", "ESTOP", "ETAPE", "ETHER", "ETHIC", "ETHYL", "ETUDE", "ETWEE", "ETYMA", "EVADE", "EVENT", "EVERT", "EVERY", "EVICT", "EVITE", "EVOKE", "EXACT", "EXALT", "EXCEL", "EXERT", "EXILE", "EXINE", "EXING", "EXIST", "EXPAT", "EXPEL", "EXTOL", "EXTRA", "EXUDE", "EXULT", "EXURB", "EYING", "EYRIE", "EYRIR", 
      "FABLE", "FAKED", "FACED", "FACET", "FADED", "FAINT", "FAIRY", "FAITH", "FAKES", "FALSE", "FANCY", "FANNY", "FARCE", "FATAL", "FATED", "FATSO", "FATTY", "FAULT", "FAUNA", "FAVOR", "FEAST", "FECAL", "FEIGN", "FELLA", "FELON", "FEMME", "FEMUR", "FENCE", "FERAL", "FERRY", "FETAL", "FETCH", "FETID", "FEVER", "FEWER", "FIBER", "FIBRE", "FIELD", "FIEND", "FIERY", "FIFTH", "FIFTY", "FIGHT", "FILED", "FILER", "FILET", "FILLY", "FILMY", "FILTH", "FINAL", "FINCH", "FINED", "FINER", "FIRED", "FIRST", "FISHY", "FITCH", "FIVER", "FIXED", "FIXER", "FIZZY", "FJORD", "FLACK", "FLAIL", "FLAIR", "FLAKE", "FLAKY", "FLAME", "FLANK", "FLARE", "FLASH", "FLASK", "FLECK", "FLEET", "FLESH", "FLICK", "FLIER", "FLING", "FLINT", "FLIRT", "FLOAT", "FLOCK", "FLOOD", "FLOOR", "FLORA", "FLOUR", "FLOUT", "FLOWN", "FLUFF", "FLUID", "FLUKE", "FLUME", "FLUNG", "FLUNK", "FLUSH", "FLUTE", "FLYER", "FOAMY", "FOCAL", "FOGGY", "FOIST", "FOLEY", "FOLIO", "FOLLY", "FORAY", "FORCE", "FORGE", "FORGO", "FORTE", "FORTH", "FORTY", "FORUM", "FOUND", "FOYER", "FRAIL", "FRAME", "FRANK", "FRAUD", "FREAK", "FREED", "FREER", "FRESH", "FRIAR", "FRIED", "FRILL", "FRISK", "FRITZ", "FROCK", "FROND", "FRONT", "FROST", "FROTH", "FROWN", "FROZE", "FRUIT", "FUDGE", "FUGUE", "FULLY", "FUNGI", "FUNKY", "FUNNY", "FUROR", "FURRY", "FUSED", "FUSSY", "FUZZY", 
      "GABBY", "GABLE", "GAFFE", "GAILY", "GAMER", "GAMMA", "GAMUT", "GARTH", "GASSY", "GATOR", "GAUDY", "GAUGE", "GAUNT", "GAUZE", "GAVEL", "GAWKY", "GAYER", "GAYLY", "GAZER", "GECKO", "GEEKY", "GEESE", "GEMMA", "GENIE", "GENOA", "GENRE", "GHOST", "GHOUL", "GIANT", "GIDDY", "GIMME", "GINNY", "GIPSY", "GIRLY", "GIRTH", "GIVEN", "GIVER", "GIZMO", "GLADE", "GLAND", "GLARE", "GLAZE", "GLEAM", "GLEAN", "GLIDE", "GLINT", "GLOAT", "GLOBE", "GLOOM", "GLORY", "GLOVE", "GLUED", "GLYPH", "GNASH", "GNOME", "GODLY", "GOING", "GOLEM", "GOLLY", "GONAD", "GONER", "GONZO", "GOODY", "GOOEY", "GOOFY", "GOOSE", "GORGE", "GOUGE", "GOURD", "GRACE", "GRADE", "GRAFT", "GRAIL", "GRAIN", "GRAND", "GRANT", "GRAPE", "GRAPH", "GRASP", "GRATE", "GRAVE", "GRAVY", "GRAZE", "GREAT", "GREED", "GREEK", "GREEN", "GREET", "GRIEF", "GRIFF", "GRILL", "GRIME", "GRIMY", "GRIND", "GRIPE", "GROAN", "GROIN", "GROOM", "GROPE", "GROUP", "GROUT", "GROVE", "GROWL", "GROWN", "GRUEL", "GRUFF", "GRUNT", "GUARD", "GUAVA", "GUEST", "GUIDE", "GUILD", "GUILE", "GUILT", "GUISE", "GULCH", "GULLY", "GUMBO", "GUMMY", "GUNNY", "GUPPY", "GUSTO", "GUSTY", "GYPSY", 
      "HABIT", "HAIRY", "HALLO", "HALVE", "HANDY", "HAPPY", "HARDY", "HAREM", "HARPY", "HARRY", "HARSH", "HASTE", "HASTY", "HATCH", "HATED", "HATER", "HAUNT", "HAUTE", "HAVEN", "HAVOC", "HAZEL", "HEADY", "HEARD", "HEART", "HEATH", "HEAVE", "HEAVY", "HEDGE", "HEFTY", "HEIST", "HELIX", "HELLO", "HENCE", "HENNA", "HENRY", "HERON", "HILLY", "HINGE", "HIPPO", "HIPPY", "HIRED", "HITCH", "HOARD", "HOBBY", "HOGAN", "HOIST", "HOLED", "HOLLY", "HOMER", "HOMEY", "HOMIE", "HONDA", "HONEY", "HONOR", "HOOCH", "HOOKY", "HOPED", "HORDE", "HORNY", "HORSE", "HORST", "HOTCH", "HOTEL", "HOTLY", "HOUND", "HOUSE", "HOVEL", "HOVER", "HOWDY", "HUBBY", "HUMAN", "HUMID", "HUMOR", "HUMPH", "HUNCH", "HUNKY", "HURRY", "HUSKY", "HUSSY", "HUTCH", "HYDRA", "HYDRO", "HYENA", "HYMEN", "HYPER", 
      "ICILY", "ICING", "IDEAL", "IDIOM", "IDIOT", "IDLER", "IDYLL", "IGLOO", "ILIAC", "IMAGE", "IMBUE", "IMPEL", "IMPLY", "INANE", "INBOX", "INCUR", "INDEX", "INDIE", "INEPT", "INERT", "INFER", "INGOT", "INLAY", "INLET", "INNER", "INPUT", "INTEL", "INTER", "INTRO", "IONIC", "IRATE", "IRONY", "ISLET", "ISSUE", "ITCHY", "IVORY", 
      "JABOT", "JACAL", "JACKY", "JADED", "JAGER", "JAGGY", "JAGRA", "JAKER", "JALAP", "JALOP", "JAMBE", "JAMMY", "JANNY", "JANTY", "JAPAN", "JAPED", "JAPER", "JAUNT", "JAWAN", "JAWED", "JAZZY", "JEBEL", "JEEZE", "JEHAD", "JELLO", "JELLY", "JEMMY", "JENNY", "JERID", "JERKY", "JERRY", "JESSE", "JETON", "JETTY", "JEWED", "JEWEL", "JIBBA", "JIBED", "JIBER", "JIFFY", "JIGGY", "JIHAD", "JIMMY", "JIMPY", "JINGO", "JINNI", "JIVED", "JIVER", "JIVEY", "JNANA", "JOCKO", "JOCKY", "JOINT", "JOIST", "JOKED", "JOKER", "JOKEY", "JOLLY", "JOLTY", "JOMON", "JORAM", "JORUM", "JOTTY", "JOUAL", "JOULE", "JOUST", "JOWAR", "JOWED", "JOWLY", "JOYED", "JUDGE", "JUGAL", "JUGUM", "JUICE", "JUICY", "JUKED", "JULEP", "JUMAR", "JUMBO", "JUMPY", "JUNCO", "JUNKY", "JUNTA", "JUNTO", "JUPON", "JURAL", "JURAT", "JUREL", "JUROR", "JUTTY", "JUVIE", 
      "KAPPA", "KARMA", "KAYAK", "KEBAB", "KELLY", "KERRY", "KHAKI", "KIDDO", "KINDA", "KINKY", "KIOSK", "KITTY", "KNACK", "KNAVE", "KNEAD", "KNEED", "KNEEL", "KNELT", "KNIFE", "KNOCK", "KNOLL", "KNOWN", "KOALA", "KRAFT", "KRAUT", "KRILL", 
      "LABEL", "LABOR", "LACED", "LACEY", "LADEN", "LADLE", "LAGER", "LAIRD", "LANCE", "LANKY", "LAPEL", "LAPSE", "LARGE", "LARVA", "LASER", "LASSO", "LATCH", "LATER", "LATEX", "LATHE", "LATTE", "LAUGH", "LAURA", "LAYER", "LEACH", "LEAFY", "LEAKY", "LEANT", "LEAPT", "LEARN", "LEASE", "LEASH", "LEAST", "LEAVE", "LEDGE", "LEECH", "LEERY", "LEFTY", "LEGAL", "LEGGY", "LEGIT", "LEMON", "LEMUR", "LEONE", "LEPER", "LEVEL", "LEVER", "LIANG", "LIBEL", "LIEGE", "LIGHT", "LIKED", "LIKEN", "LILAC", "LIMBO", "LIMIT", "LINED", "LINEN", "LINER", "LINGO", "LIPID", "LITER", "LITHE", "LIVED", "LIVER", "LIVID", "LLAMA", "LOAMY", "LOATH", "LOBBY", "LOCAL", "LODGE", "LOFTY", "LOGAN", "LOGIC", "LOGIN", "LOLLY", "LONER", "LOOKY", "LOONY", "LOOPY", "LOOSE", "LORRY", "LOSER", "LOTTA", "LOTTE", "LOTTO", "LOUIE", "LOUSE", "LOUSY", "LOVED", "LOVER", "LOWER", "LOWLY", "LOYAL", "LUCID", "LUCKY", "LUMEN", "LUMPY", "LUNAR", "LUNCH", "LUNGE", "LUPIN", "LURCH", "LURED", "LURID", "LUSTY", "LYING", "LYMPH", "LYNCH", "LYRIC",
      "MONEY", "MACAW", "MACHO", "MACRO", "MADAM", "MADLY", "MAFIA", "MAGIC", "MAGMA", "MAIZE", "MAJOR", "MAKER", "MAMBO", "MAMMA", "MAMMY", "MANGA", "MANGE", "MANGO", "MANGY", "MANIA", "MANIC", "MANLY", "MANOR", "MAPLE", "MARCH", "MARGE", "MARIA", "MARRY", "MARSH", "MASON", "MASSA", "MASSE", "MATCH", "MATER", "MATEY", "MAUVE", "MAXIM", "MAYAN", "MAYBE", "MAYOR", "MEALY", "MEANT", "MEATY", "MECCA", "MEDAL", "MEDIA", "MEDIC", "MELEE", "MELON", "MERCY", "MERGE", "MERIT", "MERLE", "MERRY", "MESSY", "METAL", "METER", "METRE", "METRO", "MICKY", "MICRO", "MIDGE", "MIDST", "MIGHT", "MILKY", "MIMIC", "MINCE", "MINED", "MINER", "MINIM", "MINOR", "MINTY", "MIRTH", "MISER", "MISSY", "MISTY", "MIXED", "MIXER", "MOCHA", "MODAL", "MODEL", "MODEM", "MOGUL", "MOIRA", "MOIST", "MOLAR", "MOLDY", "MOLLY", "MOMMA", "MOMMY", "MONDO", "MONKEY", "MONTE", "MONTH", "MONTY", "MOODY", "MOOSE", "MOPED", "MORAL", "MORAY", "MORON", "MORPH", "MORSE", "MOSSY", "MOTEL", "MOTIF", "MOTOR", "MOTTO", "MOULD", "MOULT", "MOUND", "MOUNT", "MOURN", "MOUSE", "MOUTH", "MOVED", "MOVER", "MOVIE", "MOWER", "MUCHO", "MUCKY", "MUDDY", "MULCH", "MUMMY", "MUNCH", "MURAL", "MURKY", "MUSHY", "MUSIC", "MUSKY", "MUSTY", "MYRRH", 
      "NIGGA", "NACHO", "NADIR", "NAIVE", "NAKED", "NAMED", "NANCE", "NANCY", "NANNY", "NASAL", "NASTY", "NATAL", "NAVAL", "NAVEL", "NEEDY", "NEIGH", "NELLY", "NERDY", "NERVE", "NEVER", "NEWER", "NEWLY", "NICER", "NICHE", "NIECE", "NIGHT", "NINJA", "NINNY", "NINTH", "NITRO", "NOBLE", "NOBLY", "NOISE", "NOISY", "NOMAD", "NOOSE", "NORTH", "NOSEY", "NOTCH", "NOTED", "NOVEL", "NUDGE", "NURSE", "NUTTY", "NYLON", "NYMPH", 
      "OAKEN", "ODDLY", "OLLIE", "OPIUM", "OTTER", "OVARY", "OWNER", "OBESE", "OFFAL", "OMBRE", "OPTIC", "OUGHT", "OVATE", "OXIDE", "OCCUR", "OFFER", "OMEGA", "ORBIT", "OUNCE", "OVERT", "OZONE", "OCEAN", "OFFEN", "ONION", "ORDER", "OUTDO", "OVINE", "OCTET", "OLDEN", "ONSET", "ORGAN", "OUTDO", "OVOID", "OCTAL", "OLDEN", "OPERA", "OSCAR", "OUTGO", "OWING", "OTHER", "OUTTA", "OWNED", 
      "PACEY", "PADDY", "PADRE", "PAGAN", "PAGED", "PAGER", "PAINT", "PALER", "PALSY", "PANDA", "PANEL", "PANIC", "PANSY", "PANTY", "PAPAL", "PAPER", "PAPPY", "PARKA", "PARRY", "PARSE", "PARTY", "PASHA", "PASTA", "PASTE", "PASTY", "PATCH", "PATIO", "PATSY", "PATTY", "PAUSE", "PAVED", "PAYEE", "PAYER", "PEACE", "PEACH", "PEARL", "PECAN", "PEDAL", "PEDRO", "PENAL", "PENCE", "PENNE", "PENNY", "PEPSI", "PERCH", "PERIL", "PERKY", "PERRY", "PESKY", "PESTO", "PETAL", "PETER", "PETIT", "PETTY", "PHASE", "PHONE", "PHONY", "PHOTO", "PIANO", "PICKY", "PIECE", "PIETY", "PIGGY", "PILAR", "PILED", "PILOT", "PINCH", "PINEY", "PINKY", "PINOT", "PINTO", "PIPER", "PIQUE", "PITCH", "PITHY", "PIVOT", "PIXEL", "PIXIE", "PIZZA", "PLACE", "PLAID", "PLAIN", "PLAIT", "PLANE", "PLANK", "PLANT", "PLATE", "PLAZA", "PLEAD", "PLEAT", "PLIED", "PLIER", "PLUCK", "PLUMB", "PLUME", "PLUMP", "PLUNK", "PLUSH", "POESY", "POINT", "POISE", "POKED", "POKER", "POLAR", "POLIO", "POLKA", "POLYP", "POOCH", "POOJA", "POPPY", "PORCH", "PORKY", "PORNO", "POSED", "POSER", "POSIT", "POSSE", "POTTY", "POUCH", "POUND", "POUTY", "POWER", "PRANK", "PRAWN", "PREEN", "PRICE", "PRICK", "PRIDE", "PRIED", "PRIMA", "PRIME", "PRIMO", "PRINT", "PRIOR", "PRISM", "PRIVY", "PRIZE", "PROBE", "PRONE", "PRONG", "PROOF", "PROSE", "PROUD", "PROVE", "PROWL", "PROXY", "PRUDE", "PRUNE", "PSALM", "PSYCH", "PUBIC", "PUDGY", "PUFFY", "PUKED", "PULPY", "PULSE", "PUNCH", "PUPAL", "PUPIL", "PUPPY", "PUREE", "PURER", "PURGE", "PURSE", "PUSHY", "PUSSY", "PUTTY", "PYGMY", 
      "QUACK", "QUAIL", "QUAKE", "QUALM", "QUARK", "QUART", "QUASH", "QUASI", "QUEEN", "QUEER", "QUELL", "QUERY", "QUEST", "QUEUE", "QUICK", "QUIET", "QUILL", "QUILT", "QUIRK", "QUITE", "QUOTA", "QUOTE", "QUOTH", 
      "RABBI", "RABID", "RACED", "RACER", "RADAR", "RADII", "RADIO", "RAINY", "RAISE", "RAJAH", "RALLY", "RALPH", "RAMEN", "RANCH", "RANDY", "RANGE", "RAPED", "RAPID", "RARER", "RASPY", "RATED", "RATIO", "RATTY", "RAVEN", "RAYON", "RAZOR", "REACH", "REACT", "READY", "REALM", "REARM", "REBAR", "REBEL", "REBUT", "RECAP", "RECON", "RECUR", "RECUT", "REDDY", "REEDY", "REFER", "REFIT", "REGAL", "REHAB", "REIGN", "RELAX", "RELAY", "RELIC", "REMIT", "RENAL", "RENEW", "REPAY", "REPEL", "REPLY", "RERUN", "RESET", "RESIN", "RETCH", "RETRO", "RETRY", "REUSE", "REVEL", "REVUE", "RHINO", "RHYME", "RIDER", "RIDGE", "RIFLE", "RIGHT", "RIGID", "RIGOR", "RILED", "RILEY", "RINSE", "RIPEN", "RIPER", "RISEN", "RISER", "RISHI", "RISKY", "RIVAL", "RIVER", "RIVET", "ROACH", "ROAST", "ROBIN", "ROBOT", "ROCKY", "RODEO", "ROGER", "ROGUE", "ROMAN", "ROMEO", "RONIN", "ROOMY", "ROOST", "ROPER", "ROTOR", "ROUGE", "ROUGH", "ROUND", "ROUSE", "ROUTE", "ROVER", "ROWAN", "ROWDY", "ROWER", "ROYAL", "RUDDY", "RUDER", "RUGBY", "RULED", "RULER", "RUMBA", "RUMOR", "RUPEE", "RURAL", "RUSTY", 
      "SABER", "SABLE", "SACKS", "SADLY", "SAFER", "SAHIB", "SAILS", "SAINT", "SAKES", "SALAD", "SALES", "SALLY", "SALON", "SALSA", "SALTS", "SALTY", "SALVE", "SALVO", "SAMBA", "SANDS", "SANDY", "SANER", "SANTO", "SAPPY", "SARGE", "SASSY", "SATIN", "SATYR", "SAUCE", "SAUCY", "SAUNA", "SAUTE", "SAVED", "SAVES", "SAVOR", "SAVOY", "SAVVY", "SAYID", "SCALD", "SCALE", "SCALP", "SCALY", "SCAMP", "SCAMS", "SCANS", "SCANT", "SCARE", "SCARF", "SCARS", "SCARY", "SCENE", "SCENT", "SCION", "SCOFF", "SCOLD", "SCONE", "SCOOP", "SCOOT", "SCOPE", "SCORE", "SCORN", "SCOTS", "SCOUR", "SCOUT", "SCOWL", "SCRAM", "SCRAP", "SCREE", "SCREW", "SCRUB", "SCRUM", "SCUBA", "SEALS", "SEAMS", "SEARS", "SEATS", "SEDAN", "SEEDS", "SEEDY", "SEEKS", "SEEMS", "SEGUE", "SEINE", "SEIZE", "SELLS", "SEMEN", "SENDS", "SENOR", "SENSE", "SEPIA", "SERGE", "SERIF", "SERUM", "SERVE", "SETUP", "SEVEN", "SEVER", "SEWED", "SEWER", "SHACK", "SHADE", 
      "SHADY", "SHAFT", "SHAKE", "SHAKY", "SHALE", "SHALL", "SHALT", "SHAME", "SHANK", "SHAPE", "SHARD", "SHARE", "SHARK", "SHARP", "SHAVE", "SHAWL", "SHAWN", "SHEAR", "SHEDS", "SHEEN", "SHEEP", "SHEER", "SHEET", "SHEIK", "SHELF", "SHELL", "SHIED", "SHIFT", "SHINE", "SHINY", "SHIPS", "SHIRE", "SHIRK", "SHIRT", "SHITE", "SHITS", "SHIVA", "SHOAL", "SHOCK", "SHOES", "SHONE", "SHOOK", "SHOOT", "SHOPS", "SHORE", "SHORN", "SHORT", "SHOTS", "SHOUT", "SHOVE", "SHOWN", "SHOWS", "SHOWY", "SHRED", "SHREW", "SHRUB", "SHRUG", "SHUCK", "SHUNT", "SHUSH", "SHUTS", "SHYLY", "SIDES", "SIEGE", "SIEVE", "SIGHS", "SIGHT", "SIGMA", "SIGNS", "SILKY", "SILLY", "SILVA", "SINCE", "SINEW", "SINGE", "SINGS", "SINKS", "SINUS", "SIREN", "SISSY", "SITES", "SIXTH", "SIXTY", "SIZES", "SKANK", "SKATE", "SKIER", "SKIES", "SKIFF", "SKILL", "SKIMP", "SKINS", "SKIPS", "SKIRT", "SKULK", "SKULL", "SKUNK", "SLACK", "SLAIN", "SLAMS", "SLANG", 
      "SLANT", "SLAPS", "SLASH", "SLATE", "SLAVE", "SLEEK", "SLEEP", "SLEET", "SLEPT", "SLICE", "SLICK", "SLIDE", "SLIME", "SLIMY", "SLING", "SLINK", "SLIPS", "SLOOP", "SLOPE", "SLOSH", "SLOTH", "SLOTS", "SLOWS", "SLUGS", "SLUMP", "SLUMS", "SLUNG", "SLUNK", "SLURP", "SLUSH", "SLUTS", "SLYLY", "SMACK", "SMALL", "SMART", "SMASH", "SMEAR", "SMELL", "SMELT", "SMILE", "SMIRK", "SMITE", "SMITH", "SMOCK", "SMOKE", "SMOKY", "SMOTE", "SNACK", "SNAIL", "SNAKE", "SNAKY", "SNAPS", "SNARE", "SNARL", "SNEAK", "SNEER", "SNIDE", "SNIFF", "SNIPE", "SNOOP", "SNORE", "SNORT", "SNOUT", "SNOWS", "SNOWY", "SNUCK", "SNUFF", "SOAPY", "SOBER", "SOCKS", "SODAS", "SODOM", "SOGGY", "SOLAR", "SOLES", "SOLID", "SOLVE", "SONAR", "SONGS", "SONIC", "SONNY", "SOOTH", "SOOTY", "SORES", "SORRY", "SORTA", "SORTS", "SOULS", "SOUND", "SOUTH", "SOWER", "SPACE", "SPADE", "SPANK", "SPARE", "SPARK", "SPASM", "SPAWN", "SPEAK", "SPEAR", "SPECK", "SPECS", "SPEED", "SPELL", "SPELT", "SPEND", "SPENT", "SPERM", "SPICE", "SPICY", "SPIED", "SPIEL", "SPIES", "SPIKE", "SPIKY", "SPILL", "SPILT", "SPINE", "SPINS", "SPINY", "SPIRE", "SPITE", "SPITS", "SPLAT", "SPLIT", "SPOIL", "SPOKE", "SPOOF", "SPOOK", "SPOOL", "SPOON", "SPORE", "SPORK", "SPORT", "SPOTS", "SPOUT", "SPRAY", "SPREE", "SPRIG", "SPUNK", "SPURN", "SPURS", "SPURT", "SQUAD", "SQUAT", "SQUIB", "SQUID", "STACK", "STAFF", "STAGE", "STAID", "STAIN", "STAIR", "STAKE", "STALE", "STALK", "STALL", "STAMP", "STAND", "STANK", "STARE", "STARK", "STARS", "START", "STASH", "STATE", "STATS", "STAVE", "STAYS", "STEAD", "STEAK", "STEAL", "STEAM", "STEED", "STEEL", "STEEP", "STEER", "STEIN", "STEMS", "STEPS", "STERN", "STICK", "STIFF", "STILL", "STILT", "STING", "STINK", "STINT", "STOCK", "STOIC", "STOKE", "STOLE", "STOMP", "STONE", "STONY", "STOOD", "STOOL", "STOOP", "STOPS", "STORE", "STORK", "STORM", "STORY", "STOUT", "STOVE", "STRAP", "STRAW", "STRAY", "STRIP", "STRUT", "STUCK", "STUDS", "STUDY", "STUFF", "STUMP", "STUNG", "STUNK", "STUNT", "STYLE", "SUAVE", "SUCKS", "SUEDE", "SUGAR", "SUING", "SUITE", "SUITS", "SULKY", "SULLY", "SUMAC", "SUNNY", "SUPER", "SURER", "SURGE", "SURLY", "SUSHI", "SWAIN", "SWAMI", "SWAMP", "SWANS", "SWARM", "SWASH", "SWATH", "SWEAR", "SWEAT", "SWEDE", "SWEEP", "SWEET", "SWELL", "SWEPT", "SWIFT", "SWILL", "SWIMS", "SWINE", "SWING", "SWIPE", "SWIRL", "SWISH", "SWISS", "SWOON", "SWOOP", "SWORD", "SWORE", "SWORN", "SWUNG", "SYKES", "SYNOD", "SYRUP", 
      "TABBY", "TABLE", "TABOO", "TACIT", "TACKY", "TAFFY", "TAINT", "TAKEN", "TAKER", "TAKIN", "TALLY", "TALON", "TAMED", "TAMER", "TAMMY", "TANGO", "TANGY", "TAPED", "TAPER", "TAPIR", "TARDY", "TAROT", "TASER", "TASTE", "TASTY", "TATTY", "TAUNT", "TAWNY", "TEACH", "TEARY", "TEASE", "TEDDY", "TEENY", "TEETH", "TELLY", "TEMPO", "TEMPT", "TENET", "TENOR", "TENSE", "TENTH", "TEPEE", "TEPID", "TERRA", "TERRY", "TERSE", "TESLA", "TESTY", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THETA", "THICK", "THIEF", "THIGH", "THINE", "THING", "THINK", "THIRD", "THONG", "THORN", "THOSE", "THREE", "THREW", "THROB", "THROW", "THRUM", "THUMB", "THUMP", "THUNK", "THYME", "TIARA", "TIBIA", "TIDAL", "TIGER", "TIGHT", "TILDE", "TIMED", "TIMER", "TIMID", "TIPSY", "TIRED", "TITAN", "TITLE", "TITTY", "TOAST", "TODAY", "TODDY", "TOKEN", "TOMMY", "TONAL", "TONGA", "TONIC", "TOOTH", "TOPAZ", "TOPIC", "TORAH", "TORCH", "TORSO", "TOTAL", "TOTEM", "TOUCH", "TOUGH", "TOWED", "TOWEL", "TOWER", "TOXIC", "TOXIN", "TRACE", "TRACK", "TRACT", "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRAMP", "TRASH", "TRAWL", "TREAD", "TREAT", "TREND", "TRIAD", "TRIAL", "TRIBE", "TRICE", "TRICK", "TRIED", "TRIPE", "TRITE", "TROLL", "TROOP", "TROPE", "TROUT", "TROVE", "TRUCE", "TRUCK", "TRUER", "TRULY", "TRUMP", "TRUNK", "TRUST", "TRUTH", "TRYST", "TUBAL", "TUBBY", "TUBER", "TULIP", "TULLE", "TUMMY", "TUMOR", "TUNED", "TUNIC", "TURBO", "TUTOR", "TWAIN", "TWANG", "TWEAK", "TWEED", "TWEET", "TWICE", "TWINE", "TWIRL", "TWIST", "TWIXT", "TYING", "TYPED", 
      "UDDER", "UHLAN", "UKASE", "LLAMA", "ULCER", "ULEMA", "ULNAD", "ULNAE", "ULNAR", "ULPAN", "ULTRA", "UMAMI", "UMBEL", "UMBER", "UMBRA", "UMIAC", "UMIAK", "UMIAQ", "UMMAH", "UMMED", "UMPED", "UMPTY", "UNAPT", "UNARM", "UNARY", "UNBAN", "UNBAR", "UNBID", "UNBOX", "UNCAP", "UNCIA", "UNCLE", "UNCOY", "UNCUT", "UNDEE", "UNDER", "UNDID", "UNDUE", "UNFED", "UNFIT", "UNFIX", "UNGOT", "UNHAT", "UNHIP", "UNICA", "UNIFY", "UNION", "UNITE", "UNITY", "UNJAM", "UNLAY", "UNLED", "UNLET", "UNLIT", "UNMAN", "UNMET", "UNMEW", "UNMIX", "UNPEG", "UNPEN", "UNPIN", "UNRIG", "UNRIP", "UNSAY", "UNSEE", "UNSET", "UNSEW", "UNSEX", "UNTIE", "UNTIL", "UNWED", "UNWET", "UNWIT", "UNWON", "UNZIP", "UPBOW", "UPBYE", "UPDRY", "UPEND", "UPLIT", "UPPED", "UPPER", "UPSET", "URAEI", "URARE", "URARI", "URASE", "URATE", "URBAN", "URBIA", "UREAL", "UREDO", "UREIC", "URGED", "URGER", "URIAL", "URINE", "URPED", "URSAE", "URSID", "USAGE", "USHER", "USING", "USNEA", "USQUE", "USUAL", "USURP", "USURY", "UTERI", "UTILE", "UTTER", "UVEAL", "UVULA", 
      "VAGUE", "VALET", "VALID", "VALOR", "VALUE", "VALVE", "VAPID", "VAPOR", "VAULT", "VAUNT", "VEGAN", "VENOM", "VENUE", "VERGE", "VERSE", "VERSO", "VERVE", "VICAR", "VIDEO", "VIGIL", "VIGOR", "VILLA", "VINYL", "VIOLA", "VIPER", "VIRAL", "VISIT", "VISOR", "VISTA", "VITAL", "VIVID", "VIXEN", "VOCAL", "VODKA", "VOGUE", "VOICE", "VOILA", "VOMIT", "VOTED", "VOTER", "VOUCH", "VOWED", "VOWEL", "VROOM", "VYING", 
      "WACKE", "WACKO", "WACKY", "WADDY", "WADED", "WADER", "WAFER", "WAGED", "WAGER", "WAGON", "WAHOO", "WAIST", "WAIVE", "WAKED", "WAKEN", "WAKER", "WALED", "WALER", "WALLA", "WALLY", "WALTZ", "WANED", "WANEY", "WANLY", "WARED", "WAREZ", "WARTY", "WASHY", "WASPY", "WASTE", "WATAP", "WATCH", "WATER", "WAUGH", "WAVED", "WAVER", "WAVEY", "WAXED", "WAXEN", "WAXER", "WAZOO", "WEALD", "WEARY", "WEAVE", "WEBBY", "WEBER", "WECHT", "WEDEL", "WEDGE", "WEDGY", "WEEDY", "WEENY", "WEEPY", "WEEST", "WEIGH", "WEIRD", "WELCH", "WELLY", "WELSH", "WENCH", "WENNY", "WETLY", "WHACK", "WHALE", "WHAMO", "WHANG", "WHARF", "WHAUP", "WHEAL", "WHEAT", "WHEEL", "WHEEN", "WHEEP", "WHELK", "WHELM", "WHELP", "WHERE", "WHICH", "WHIFF", "WHILE", "WHINE", "WHINY", "WHIPT", "WHIRL", "WHIRR", "WHISH", "WHISK", "WHIST", "WHITE", "WHITY", "WHIZZ", "WHOLE", "WHOM", "WHOOOF", "WHOOP", "WHORE", "WHORL", "WHORT", "WHOSE", "WHOSO", "WHUMP", "WHYDA", "WICCA", "WIDDY", "WIDEN", "WIDER", "WIDOW", "WIDTH", "WIELD", "WIFED", "WIFEY", "WIFTY", "WIGAN", "WIGGY", "WIGHT", "WILCO", "WILED", "WILLY", "WIMPY", "WINCE", "WINCH", "WINDY", "WINED", "WINEY", "WINGY", "WINZE", "WIPED", "WIPER", "WIRED", "WIRER", "WIRRA", "WISED", "WISER", "WISHA", "WISPY", "WITAN", "WITCH", "WITED", "WITHE", "WITHY", "WITTY", "WIVED", "WIVER", "WIZEN", "WOALD", "WODGE", "WOFUL", "WOKEN", "WOMAN", "WOMBY", "WOMEN", "WOMYN", "WONKY", "WOODY", "WOOD", "WOOER", "WOOLY", "WOOZY", "WOOSH", "WOOZZY", "WORDY", "WORLD", "WORMY", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WOVEN", "WOWED", "WOWEE", "WRACK", "WRANG", "WRAPT", "WRATH", "WREAK", "WRECK", "WREST", "WRICK", "WRIED", "WRIER", "WRING", "WRIST", "WRITE", "WRONG", "WROTE", "WROTH", "WRUNG", "WRYER", "WRYLY", "WURST", "WUSHU", "WUSSY", "WYLED", "WYTED", 
      "XEBEC", "XENIA", "XENIC", "XENON", "XERIC", "XEROX", "XYLAN", "XYLEM", "XYLOL", "XYLYL", "XYSTI", 
      "YACHT", "YAHOO", "YEARN", "YEAST", "YIELD", "YOUNG", "YOUSE", "YOUTH", "YUMMY", 
      "ZEBRA", "ZESTY", "ZONAL",
    ];
    this.inputLockedUntil = 0;
    this.gameVersion = 0;
    this.ROWS = 6;
    this.COLS = 5;
    this.boardEl = boardEl;
    this.keyboardEl = keyboardEl;
    this.msgEl = msgEl;

    this.solution = "";
    this.grid = [];
    this.curRow = 0;
    this.curCol = 0;
    this.gameOver = false;
    this.keyState = {};

    this.handleKeyDown = (e) => this.onKeyDown(e);
    window.addEventListener("keydown", this.handleKeyDown);
  }

  init() {
    this.gameVersion++;
    this.boardEl.innerHTML = "";
    this.keyboardEl.innerHTML = "";
    this.msgEl.textContent = "";
    this.msgEl.className = "";

    this.solution = this.WORDS[Math.floor(Math.random() * this.WORDS.length)].toUpperCase();
    this.grid = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(""));
    this.curRow = 0;
    this.curCol = 0;
    this.gameOver = false;
    this.keyState = {};

    for (let r = 0; r < this.ROWS; r++) {
      const row = document.createElement("div");
      row.className = "row";
      for (let c = 0; c < this.COLS; c++) {
        const t = document.createElement("div");
        t.className = "tile";
        t.dataset.r = r;
        t.dataset.c = c;
        row.appendChild(t);
      }
      this.boardEl.appendChild(row);
    }

    const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    rows.forEach((keys, idx) => {
      const row = document.createElement("div");
      row.className = "keys";
      if (idx === 2) row.appendChild(this.mkKey("Enter", "Enter", "wide"));
      for (const ch of keys) row.appendChild(this.mkKey(ch));
      if (idx === 2) row.appendChild(this.mkKey("Back", "Back", "wide"));
      this.keyboardEl.appendChild(row);
    });
  }

  mkKey(label, action = label, extraClass = "") {
    const k = document.createElement("div");
    k.className = "key " + extraClass;
    k.textContent = label;
    k.dataset.key = action;
    k.addEventListener("click", () => this.handleInput(action));
    return k;
  }

  onKeyDown(e) {
    if (this.gameOver) return;
    let k = e.key;
    if (k === "Enter") this.handleInput("Enter");
    else if (k === "Backspace") this.handleInput("Back");
    else {
      k = k.toUpperCase();
      if (/^[A-Z]$/.test(k)) this.handleInput(k);
    }
  }

  handleInput(key) {
  if (this.gameOver || Date.now() < this.inputLockedUntil) return;

  if (key === "Enter") return this.submitRow();
  if (key === "Back") return this.backspace();

  if (key.length === 1 && this.curCol < this.COLS) {
    this.grid[this.curRow][this.curCol] = key;
    this.updateTile(this.curRow, this.curCol, key);
    this.curCol++;
  }
}

  updateTile(r, c, val) {
    const tile = this.boardEl.querySelector(`.tile[data-r="${r}"][data-c="${c}"]`);
    tile.textContent = val;
    tile.classList.toggle("filled", !!val);
  }

  backspace() {
    if (this.curCol > 0) {
      this.curCol--;
      this.grid[this.curRow][this.curCol] = "";
      this.updateTile(this.curRow, this.curCol, "");
    }
  }

  submitRow() {
    if (this.curCol < this.COLS) return this.showMessage("Chưa đủ 5 chữ!", 2000);
    const guess = this.grid[this.curRow].join("");
    
    if (!this.WORDS.includes(guess)) {
      this.showMessage("Từ không hợp lệ", 1500);
      for (let i = 0; i < this.COLS; i++) {
        this.grid[this.curRow][i] = "";
        this.updateTile(this.curRow, i, "");
      }
      this.curCol = 0;
      return;
    }
    this.inputLockedUntil = Date.now() + 1200;
    const solArr = this.solution.split("");
    const guessArr = guess.split("");
    const result = Array(this.COLS).fill("absent");

    for (let i = 0; i < this.COLS; i++) {
      if (guessArr[i] === solArr[i]) {
        result[i] = "correct";
        solArr[i] = null;
      }
    }

    for (let i = 0; i < this.COLS; i++) {
      if (result[i] === "correct") continue;
      const idx = solArr.indexOf(guessArr[i]);
      if (idx !== -1) {
        result[i] = "present";
        solArr[idx] = null;
      }
    }

    this.revealRow(this.curRow, guessArr, result).then(() => {
      for (let i = 0; i < this.COLS; i++) {
        const ch = guessArr[i];
        const prev = this.keyState[ch];
        const state = result[i];
        if (!prev || prev === "absent" && state !== "absent" || prev === "present" && state === "correct") {
          this.keyState[ch] = state;
          const keyEl = [...document.querySelectorAll('.key')].find(k => k.dataset.key === ch);
          if (keyEl) {
            keyEl.classList.remove("absent", "present", "correct");
            keyEl.classList.add(state);
          }
        }
      }

      if (guess === this.solution) {
        this.gameOver = true;
        const word = this.solution;
        const url = `https://www.google.com/search?q=${encodeURIComponent(word + " là gì ?")}`;

        this.showMessage(
          `Đáp án đúng: <a href="${url}" target="_blank" class="answer-link">${word +" (Nghĩa là gì?"}</a>`,
          0,
          "win"
        );
      } else if (++this.curRow >= this.ROWS) {
        this.gameOver = true;
        const word = this.solution;
        const url = `https://www.google.com/search?q=${encodeURIComponent(word + " là gì ?")}`;
        this.showMessage(
          `Thua! Đáp án: <a href="${url}" target="_blank" class="answer-link">${word + " (Nghĩa là gì?)"}</a>`,
          0,
          "lose"
        );
      } else {
        this.curCol = 0;
      }
    });
  }

  revealRow(r, guessArr, resultArr) {
    const version = this.gameVersion;
    return new Promise((resolve) => {
      for (let i = 0; i < this.COLS; i++) {
        setTimeout(() => {
          if (this.gameVersion !== version) return;
          const tile = this.boardEl.querySelector(`.tile[data-r="${r}"][data-c="${i}"]`);
          tile.classList.add("revealed", resultArr[i]);
          if (tile) {
          tile.classList.add("revealed", resultArr[i]);
        }

        if (i === this.COLS - 1) resolve();

      }, i * 250);
    }
  });
}

  showMessage(text, time = 1500, cls = "") {
    this.msgEl.innerHTML = text;
    this.msgEl.className = cls;
    if (time > 0) setTimeout(() => {
      this.msgEl.textContent = "";
      this.msgEl.className = "";
    }, time);
  }

}
window.GameWordle = GameWordle;