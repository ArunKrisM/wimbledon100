/* ==========================================================================
   BBC Sport · Interactive Live Experiences prototype
   Content model. Everything the app renders comes from here.

   Four events across four sports, each with its own lifecycle states and its
   own tab set. Home ranks them against each other.

   Opta field names follow the F24 spec as documented in
   github.com/withqwerty/football-docs. Cricket, tennis and rugby schemas are
   extrapolated from the same patterns and need validating against real feeds.

   Scores, votes, ratings and fan counts are illustrative.
   ========================================================================== */

/* =========================================================================
   FOOTBALL — England v Netherlands, UEFA Nations League, Wembley
   ========================================================================= */

const MOMENTS = [
  {
    id: "live", chip: "Live",
    label: "Netherlands in possession",
    sub: "De Jong carries the ball through midfield",
    attacking: "ENGLAND ATTACKING",
    ball: [50, 32], path: "M 62 30 L 56 31 L 50 32",
    home: [[7,32],[24,12],[22,25],[22,39],[24,52],[40,20],[44,32],[40,44],[58,14],[60,32],[58,50]],
    away: [[93,32],[74,13],[72,26],[72,38],[74,51],[56,22],[50,32],[56,42],[36,15],[34,32],[36,49]]
  },
  {
    id: "goal", chip: "52' Goal",
    label: "Saka fires England ahead",
    sub: "Cuts inside from the right and finds the far corner",
    attacking: "ENGLAND ATTACKING",
    ball: [88, 22], path: "M 62 48 L 71 40 L 80 30 L 88 22",
    home: [[10,32],[45,12],[43,25],[43,39],[45,52],[62,20],[64,34],[66,46],[82,16],[88,22],[84,44]],
    away: [[96,32],[88,18],[87,28],[87,38],[88,48],[74,20],[72,32],[74,44],[56,22],[54,32],[56,42]]
  },
  {
    id: "chance", chip: "64' Chance",
    label: "Pickford denies Simons",
    sub: "Netherlands' best opening of the half",
    attacking: "NETHERLANDS ATTACKING",
    ball: [16, 36], path: "M 34 26 L 26 30 L 16 36",
    home: [[6,32],[15,14],[14,26],[14,38],[15,50],[28,20],[30,33],[28,46],[44,18],[46,34],[44,48]],
    away: [[90,32],[40,12],[38,26],[38,40],[40,52],[26,20],[24,44],[30,32],[18,20],[16,36],[20,46]]
  }
];


/* =========================================================================
   Your daily drop — the shorts deck. Every rail is a window onto this.
   ========================================================================= */

const DROP = [
  /* ten cards, all made for the vertical feed. Match photography lives on
     Home, where a still picture is doing the work; these are the things
     people actually swipe through. 0-1 cricket, 2-4 tennis, 5-7 football,
     8-9 rugby */
  { t: "England given hope for Lord's", dur: "0:48", sport: "Cricket", chan: "BBC Cricket", handle: "bbccricket",
    cap: "An Australian who has seen a lot of England sides thinks this one has turned a corner since Perth.",
    tags: ["Ashes", "Build-up"], likes: "5.2k", comments: "731", img: "ck-hope", baked: true, motif: "oval", g: ["#1B3A22", "#08170E"] },
  { t: "It has been a while", dur: "0:41", sport: "Cricket", chan: "Test Match Special", handle: "bbctms",
    cap: "The moment the TMS box stopped pretending to be neutral. Listen to the full call on Sounds.",
    tags: ["Ashes", "TMS"], likes: "14k", comments: "2.2k", img: "ck-tms", baked: true, motif: "oval", g: ["#1F3A4A", "#0A1319"], audio: true },

  { t: "Secret talent?", dur: "0:34", sport: "Tennis", chan: "BBC Sport", handle: "bbcsport",
    cap: "Not the answer anyone in the room was expecting.",
    tags: ["Wimbledon", "Off court"], likes: "11k", comments: "1.6k", img: "tn-secret", baked: true, motif: "court", g: ["#22461F", "#0C1A0B"] },
  { t: "The challenge that did not go to plan", dur: "0:36", sport: "Tennis", chan: "BBC Sport", handle: "bbcsport",
    cap: "She has beaten the best in the world. This, she could not do.",
    tags: ["Wimbledon", "Off court"], likes: "7.4k", comments: "988", img: "tn-challenge", baked: true, motif: "court", g: ["#2A3A22", "#101608"] },
  { t: "What she is reading this fortnight", dur: "0:52", sport: "Tennis", chan: "BBC Sport", handle: "bbcsport",
    cap: "Three books, two weeks, and a straight face throughout.",
    tags: ["Wimbledon", "Off court"], likes: "5.6k", comments: "744", img: "tn-books", baked: true, motif: "court", g: ["#3A2A14", "#170F06"] },

  { t: "Palmer or Trent: who starts tonight?", dur: "0:58", sport: "Football", chan: "BBC Sport", handle: "bbcsport",
    cap: "One shape needs a right-back who can cross. The other needs a ten who can finish.",
    tags: ["England", "Team news"], likes: "9.4k", comments: "3.3k", img: "fb-debate", motif: "pitch", g: ["#1B3A22", "#08170E"] },
  { t: "Why Tuchel fits England", dur: "1:41", sport: "Football", chan: "BBC Sport", handle: "bbcsport",
    cap: "Two years in, and the argument that seemed strange in 2025 looks obvious now.",
    tags: ["England", "Analysis"], likes: "11k", comments: "2.6k", img: "fb-tuchel", baked: true, motif: "pitch", g: ["#24384B", "#0B1219"] },
  { t: "Bellingham owned the second half", dur: "1:12", sport: "Football", chan: "BBC Sport", handle: "bbcsport",
    cap: "Eleven touches in the box after the break. Nobody else managed four.",
    tags: ["England", "Player of the match"], likes: "21k", comments: "4.2k", img: "fb-bellingham", motif: "pitch", g: ["#123D22", "#071A0E"] },

  { t: "Wales, three days out", dur: "0:44", sport: "Rugby Union", chan: "BBC Sport Wales", handle: "bbcsportwales",
    cap: "One win in five since the autumn. Cardiff has been quiet all week.",
    tags: ["Six Nations", "Wales"], likes: "3.9k", comments: "870", img: "rg-wales", motif: "pitch", g: ["#22314A", "#0C121C"] },
  { t: "The fourth try, with a minute left", dur: "0:33", sport: "Rugby Union", chan: "BBC Sport", handle: "bbcsport",
    cap: "Held up twice, then over. The bonus point and the title race both turn on it.",
    tags: ["Six Nations", "Bonus point"], likes: "8.1k", comments: "1.5k", img: "rg-roar", motif: "pitch", g: ["#22314A", "#0C121C"] },

  /* 10: cricket, after the close. 11: the archive, for the centenary */
  { t: "The captain on the batting order", dur: "0:39", sport: "Cricket", chan: "BBC Cricket", handle: "bbccricket",
    cap: "The morning after, on the call that everyone had an opinion about. Listen to the full interview on Sounds.",
    tags: ["Ashes", "Interview"], likes: "9.8k", comments: "1.9k", img: "ck-carse", baked: true, motif: "oval", g: ["#1B3A22", "#08170E"], audio: true },
  { t: "1937: the first pictures from Wimbledon", dur: "1:05", sport: "Tennis", chan: "BBC Archive", handle: "bbcarchive",
    cap: "Three outside broadcast vans, one camera, and about twenty-five minutes of tennis a day. The start of the habit.",
    tags: ["Wimbledon", "100 years"], likes: "6.1k", comments: "402", img: "ar-debut", baked: true, motif: "court", g: ["#2A3A22", "#101608"] }
];

const SHORTS_LIVE = { t: "shorts", label: "Your daily drop", deck: [1, 2, 11, 9, 5, 3] };

const FEED_FOOTBALL = { t: "feed", author: "Written by Emma Sanders and Phil McNulty at Wembley", posts: [
  ["67 mins", "Saka goes close again", "Drifts inside off the right and curls one towards the far corner. Verbruggen tips it over.", false],
  ["66 mins", "England seeing more of the ball", "The hosts are beginning to control the tempo. Rice switches play towards Saka on the right.", false],
  ["64 mins", "GREAT SAVE", "Xavi Simons finds space inside the area, but Pickford gets down sharply to his left.", true],
  ["61 mins", "Corner count climbing", "Six England corners in twelve minutes. Netherlands cannot get out.", false],
  ["52 mins", "GOAL! England 1-0 Netherlands", "Saka cuts in from the right and bends it beyond Verbruggen. Wembley is up.", true]
]};

const XI_ENG = [
  [1, "Pickford", "GK"], [2, "Walker", "RB"], [5, "Stones", "CB"], [6, "Guéhi", "CB"],
  [3, "Lewis-Skelly", "LB"], [4, "Rice", "CM"], [8, "Mainoo", "CM"], [7, "Saka", "RW"],
  [10, "Bellingham", "AM"], [11, "Foden", "LW"], [9, "Kane", "ST"]
];
const XI_NED = [
  [1, "Verbruggen", "GK"], [2, "Geertruida", "RB"], [4, "Van Dijk", "CB"], [3, "De Vrij", "CB"],
  [5, "Aké", "LB"], [6, "De Jong", "CM"], [8, "Reijnders", "CM"], [7, "Xavi Simons", "AM"],
  [11, "Gakpo", "LW"], [10, "Malen", "RW"], [9, "Weghorst", "ST"]
];

/* =========================================================================
   The events
   ========================================================================= */

const EVENTS = [

  /* ------------------------------------------------------------------ */
  /* FOOTBALL                                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "football",
    audio: { station: "BBC Radio 5 Live", prog: "England v Netherlands - Nations League" },
    sport: "Football",
    photo: { motif: "pitch", g: ["#123D22", "#071A0E"] },
    comp: "UEFA Nations League",
    title: "England v Netherlands",
    venue: "Wembley",
    accent: "#FFD230",

    /* the immersive Home takeover: a scoreline and three comparisons,
       one set per lifecycle state */
    takeover: {
      a: "England", b: "Netherlands", ca: "#C8102E", cb: "#F26D1B",
      buildup: { img: "fb-palmer", tvimg: "bb-ball", line: "19:45", sub: "Wembley · live on BBC One",
        stats: [["Wins in last 5", 3, 2], ["Goals scored", 11, 9], ["Clean sheets", 2, 1]],
        cta: "Open the build-up" },
      live: { img: "fb-kane", line: "1 – 0", sub: "67:57 · Saka 52'",
        stats: [["Shots", 14, 6], ["Possession %", 58, 42], ["Expected goals", 1.9, 0.7]],
        cta: "Open the live experience" },
      companion: { img: "fb-celebrate", line: "1 – 0", sub: "Paired with BBC One · held back 23s",
        stats: [["Shots", 14, 6], ["Possession %", 58, 42], ["Expected goals", 1.9, 0.7]],
        cta: "Follow it on your phone" },
      fulltime: { img: "fb-highlights", line: "2 – 1", sub: "Full time · Saka 52', Kane 79'",
        stats: [["Shots", 19, 11], ["Possession %", 55, 45], ["Expected goals", 2.4, 1.3]],
        cta: "Highlights and how your night went" }
    },

    states: {

      buildup: {
        chip: "Today 19:45", state: "Team news at 18:45. England unchanged from Thursday.",
        card: { status: "soon", when: "19:45 · BBC One", line1: "England v Netherlands", line2: "Nations League · Wembley",
          ctx: "England have scored first in 4 of the last 5 meetings and won 2", sig: 0.41 },
        head: { kind: "teams", status: { kind: "pre", text: "Kick-off tonight", beat: true },
          centre: { big: "19:45", sub: "Wembley", small: true },
          home: { code: "ENG", name: "England", sub: "W W D W L" },
          away: { code: "NED", name: "Netherlands", sub: "" } },
        tabs: [
          { id: "preview", label: "Preview", sections: [
            { panels: [
              { t: "countdown", h: 1, m: 58, s: 42 },
              { t: "toggle", id: "remind", label: "Remind me at kick-off", on: "Reminder set",
                off: "One notification, 10 minutes before. Nothing else.",
                onNote: "We'll nudge you at 19:35. 612,000 fans have a reminder on this fixture." }
            ]},
            { h: "One thing to watch for", meta: "BBC Sport", panels: [
              { t: "storyline", kicker: "The tactical angle",
                body: "Netherlands have conceded six of their last nine goals from crosses into the six-yard box. Saka has delivered more of those than any England player this cycle. Watch the far post." }
            ]},
            { h: "Watch: Build-up", meta: "Swipe for more", panels: [{ t: "shorts", label: "Build-up", deck: [5, 6, 0] }]},
            { h: "The numbers", meta: "Opta", panels: [
              { t: "kv", items: [["At Wembley", "W4", "of last 5"], ["Both scored", "7", "of last 8"], ["Avg goals", "3.1", "this fixture"]] },
              { t: "note", body: "England have scored first in four of the last five meetings and won only two of them." }
            ]}
          ]},
          { id: "predict", label: "Predict", sections: [
            { h: "Predict the score", meta: "41,882 in", ruleY: true, panels: [{ t: "predict" }] },
            { h: "First goalscorer", panels: [{ t: "poll", id: "fb-scorer", q: "Who opens the scoring?",
              opts: ["Kane", "Saka", "Gakpo", "No-one"], split: [44, 23, 19, 14],
              tally: "Tap to see how the country has voted.",
              after: "Result lands the moment the first goal goes in." }]},
            { h: "Your Predictor season", meta: "Week 6", panels: [{ t: "league" }] }
          ]},
          { id: "form", label: "Form", sections: [
            { h: "Last five meetings", meta: "England result first", panels: [{ t: "h2h", results: ["W", "D", "L", "W", "D"] }] },
            { h: "This qualifying cycle", meta: "Opta", panels: [{ t: "stats", rows: [
              ["8", "Matches won", "7", 53], ["21", "Goals scored", "19", 53], ["6", "Goals conceded", "9", 40],
              ["58%", "Average possession", "55%", 51], ["1.71", "xG per match", "1.44", 54]
            ]}]},
            { h: "The shape of it", panels: [{ t: "note", body: "England create more and concede less, and have still drawn three of the last five against sides in the top ten. The gap in this fixture has never been the chances. It has been the finishing." }] }
          ]},
          { id: "lineups", label: "Line-ups", sections: [
            { h: "Predicted line-ups", meta: "Confirmed at 18:45", panels: [
              { t: "formation", shape: "4-2-3-1", team: "eng", label: "England", sub: "Unchanged from Thursday" },
              { t: "xi", team: "eng", list: XI_ENG, highlight: 7, hint: "Most crosses this cycle" }
            ]},
            { h: "Netherlands", meta: "4-3-3", panels: [
              { t: "formation", shape: "4-3-3", team: "ned", label: "Netherlands", sub: "Two changes expected" },
              { t: "xi", team: "ned", list: XI_NED, highlight: 4, hint: "Blocks more shots than anyone" }
            ]}
          ]}
        ]
      },

      live: {
        chip: "In Play", state: "England lead by one with 22 minutes left", watching: "62,140",
        summary: ["England 1-0 up through Saka", "Seven corners in the second half", "Netherlands yet to have a shot on target since the break", "Rice booked, 69 mins"],
        card: { status: "live", when: "LIVE · 68 mins", line1: "England 1 - 0 Netherlands", line2: "Saka 52'",
          ctx: "England 1.42 xG to 0.38 and have not conceded halfway in six minutes", sig: 0.72 },
        head: { kind: "teams", status: { kind: "live", text: "LIVE", beat: true },
          centre: { big: "1 – 0", sub: "67:57" },
          home: { code: "ENG", name: "England", sub: "Saka 52'" },
          away: { code: "NED", name: "Netherlands", sub: "" } },
        clock: "football",
        tabs: [
          { id: "summary", label: "Summary", sections: [
            { panels: [{ t: "involve", title: "Send us your views",
              body: "What did you make of Saka's opener? Tell us and we'll publish the best.",
              cta: "Get involved", toast: "Thanks. Your view goes to the live page team." }]},
            { h: "Watch: Match shorts", meta: "Swipe for more", panels: [SHORTS_LIVE] },
            { h: "Key moments", meta: "Auto updates", panels: [
              { t: "kv", items: [["Score", "1-0", "Saka 52'"], ["Shots", "14", "v 6"], ["xG", "1.42", "v 0.38"]] },
              { t: "note", body: "England have not let Netherlands past halfway in six minutes." }
            ]},
            { h: "Pundit verdict", meta: "Live from the gantry", panels: [{ t: "pundit", initials: "BBC", who: "The studio", when: "66'",
              quote: "England are winning this comfortably and playing like a side that doesn't believe it.",
              opts: ["He's right", "Harsh"], split: [64, 36], after: "Close enough to go on air. Counted in the last 90 seconds." }]}
          ]},
          { id: "livetab", label: "Live", sections: [
            { h: "Live reporting", meta: "Auto updates", metaLive: true, panels: [{ t: "opta" }] },
            { h: "Get involved", meta: "Closes at the next moment", panels: [{ t: "poll", id: "fb-moment", kind: "alert", tag: "BIG CHANCE · 67:24",
              q: "Should Saka have squared it to Kane?", opts: ["Square it", "Right to shoot"], split: [61, 39],
              tally: "Closes before the next chance.",
              after: "Counted inside the window. 3,110 fans answered." }]},
            { h: "Momentum", meta: "Last 15 minutes", panels: [{ t: "momentum" }] },
            { h: "Live Reporting", ruleY: true, panels: [{ t: "sortrow" }, FEED_FOOTBALL] }
          ]},
          { id: "stats", label: "Stats", sections: [
            { h: "Match stats", meta: "Opta", panels: [{ t: "stats", rows: [
              ["62%", "Possession", "38%", 62], ["14", "Shots", "6", 70], ["6", "On target", "2", 75],
              ["1.42", "Expected goals", "0.38", 79], ["7", "Corners", "1", 88],
              ["31", "Final third entries", "12", 72], ["8.4", "PPDA", "14.1", 63]
            ]}]},
            { h: "What the numbers say", panels: [{ t: "note", body: "PPDA is passes allowed per defensive action: the lower the number, the harder a side is pressing. England at 8.4 are pressing about as hard as they have all cycle, and it is why Netherlands cannot get out." }] },
            { h: "Rate the performance", meta: "Live average", panels: [{ t: "rating", who: "Bukayo Saka", avg: 7.6, count: "41,220 ratings" }] }
          ]},
          { id: "lineups", label: "Line-ups", sections: [
            { h: "England", meta: "4-2-3-1", panels: [
              { t: "formation", shape: "4-2-3-1", team: "eng", label: "England", sub: "Saka 52'" },
              { t: "xi", team: "eng", list: XI_ENG, highlight: 7, hint: "8.4 fan rating" }
            ]},
            { h: "Netherlands", meta: "4-3-3 · 1 change", panels: [
              { t: "formation", shape: "4-3-3", team: "ned", label: "Netherlands", sub: "Reijnders on for De Jong, 64'" },
              { t: "xi", team: "ned", list: XI_NED, highlight: 1, hint: "6 saves" }
            ]}
          ]}
        ]
      },

      companion: {
        chip: "In Play", state: "Held back 23 seconds to match BBC One", watching: "62,140",
        card: { status: "live", when: "LIVE on BBC One", line1: "England 1 - 0 Netherlands", line2: "Paired with your telly",
          ctx: "Companion mode. Held back 23 seconds to match the broadcast", sig: 0.72 },
        paired: "Paired with BBC One",
        head: { kind: "teams", status: { kind: "paired", text: "FOLLOWING YOUR TELLY", beat: true },
          centre: { big: "1 – 0", sub: "67:34" },
          home: { code: "ENG", name: "England", sub: "Saka 52'" },
          away: { code: "NED", name: "Netherlands", sub: "" } },
        clock: "football", sofa: true,
        tabs: [
          { id: "watch", label: "Watch", sections: [
            { h: "In step with your TV", meta: "Paired", panels: [{ t: "sync" }] },
            { h: "From the gantry", meta: "Live", panels: [{ t: "pundit", initials: "BBC", who: "The studio", when: "66'",
              quote: "England are winning this comfortably and playing like a side that doesn't believe it.",
              opts: ["He's right", "Harsh"], split: [64, 36], after: "The split goes on air if it stays this close." }]}
          ]},
          { id: "playalong", label: "Play along", sections: [
            { h: "Play along", meta: "Only in the gaps", ruleY: true, panels: [{ t: "quiz", id: "fb",
              q: "Last England player to score from outside the box at Wembley?",
              opts: ["Rice", "Foden", "Bellingham", "Maddison"], correct: 1,
              why: "Foden, against Bosnia, June 2024. 68% of fans got it.", seconds: 20 }]},
            { h: "The big call", meta: "88,402 voted", panels: [{ t: "poll", id: "fb-bigcall", big: true,
              q: "Tuchel has 20 minutes and one change left. What would you do?",
              opts: ["Go again, bring on Gordon", "Shut it down, Guéhi on"], split: [57, 43],
              tally: "Results go to the studio at 75 minutes.", after: "Counted. The studio sees this at 75 minutes." }]},
            { h: "Keep your night", meta: "30 seconds", panels: [{ t: "signin" }] }
          ]},
          { id: "livetab", label: "Live", sections: [
            { h: "Live match view", meta: "Held back to match your telly", panels: [{ t: "opta" }] },
            { h: "Live Reporting", ruleY: true, panels: [FEED_FOOTBALL] }
          ]}
        ]
      },

      fulltime: {
        chip: "Result", state: "England win 2-1", watching: "18,400",
        summary: ["England win 2-1 at Wembley", "Saka 52, Kane 79, Gakpo 88", "First win over the Netherlands here since 2018", "Saka is your player of the match on 8.4"],
        card: { status: "done", when: "FT · 21:42", line1: "England 2 - 1 Netherlands", line2: "Saka 52', Kane 79' · Gakpo 88'",
          ctx: "England finished on 2.31 xG. Closer than the first eighty minutes suggested", sig: 0.30 },
        head: { kind: "teams", status: { kind: "ft", text: "FULL TIME", beat: false },
          centre: { big: "2 – 1", sub: "Full time" },
          home: { code: "ENG", name: "England", sub: "Saka 52', Kane 79'" },
          away: { code: "NED", name: "Netherlands", sub: "Gakpo 88'" } },
        tabs: [
          { id: "report", label: "Report", sections: [
            { ruleY: true, panels: [{ t: "storyline", kicker: "Full-time report",
              body: "England held on. Two goals of real quality, a nervous last ten minutes after Gakpo's header, and a first win over the Netherlands at Wembley since 2018." }]},
            { h: "Watch: The best of it", meta: "Swipe for more", panels: [{ t: "shorts", label: "The best of it", deck: [7, 6, 1] }]},
            { h: "Pundit verdict", meta: "Full time", panels: [{ t: "pundit", initials: "BBC", who: "The studio", when: "FT",
              quote: "Better. Still made the last ten minutes harder than they needed to be.",
              opts: ["Fair", "Too kind"], split: [51, 49], after: "The country is genuinely split on this one." }]}
          ]},
          { id: "yournight", label: "Your night", sections: [
            { h: "Your night", meta: "Scored at the whistle", ruleY: true, panels: [{ t: "scored", total: 49, max: 60, rows: [
              [true, "Exact score, 2-1", "14% of 41,883 got it", 25],
              [true, "First scorer, Saka", "You were with 23% of the country", 15],
              [false, "Play-along quiz", "One of three", 4],
              [true, "The big call, go again", "Kane scored six minutes later", 5]
            ], note: "Your best night of the season. Previous best: 31." }]},
            { h: "Predictor league", meta: "Week 6 settled", panels: [{ t: "leagueft" }] },
            { h: "Your streak", meta: "3 weeks", panels: [{ t: "streak", weeks: ["W3","W4","W5","W6","W7"], on: [1,2,3], next: 4,
              note: "Three Saturdays running. One more keeps it alive." }]},
            { h: "Next up", meta: "Saturday", panels: [{ t: "nextfix", fixture: "Wales v Ireland", when: "Sat 17:30 · BBC One",
              sub: "Your Predictor week 7 opens Thursday", cta: "Remind me and open my Predictor", on: "Set for Saturday",
              off: "One notification on Thursday. One on Saturday. Nothing else.",
              onNote: "Week 7 opens Thursday. Your streak survives if you play before kick-off." }]}
          ]},
          { id: "stats", label: "Stats", sections: [
            { h: "Final stats", meta: "Opta", panels: [{ t: "stats", rows: [
              ["58%", "Possession", "42%", 58], ["19", "Shots", "11", 63], ["8", "On target", "4", 67],
              ["2.31", "Expected goals", "1.04", 69], ["9", "Corners", "3", 75], ["9.8", "PPDA", "13.2", 57]
            ]}]},
            { h: "The story in one number", panels: [{ t: "note", body: "England finished on 2.31 xG and scored twice, which is about par. Netherlands finished on 1.04 and scored once. On the balance of chances this was closer than the eighty minutes before Gakpo's header suggested." }] }
          ]},
          { id: "ratings", label: "Ratings", sections: [
            { h: "Player of the match", meta: "41,220 fan ratings", panels: [{ t: "potm", name: "Bukayo Saka", score: "8.4",
              sub: "You rated him 8.1, just under the country",
              rows: [["Saka", 8.4, true], ["Kane", 7.9, false], ["Rice", 7.2, false], ["Pickford", 7.1, false], ["Stones", 6.8, false]] }]}
          ]}
        ]
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* CRICKET — The Ashes 2027, 2nd Test, Lord's                          */
  /* ------------------------------------------------------------------ */
  {
    id: "cricket",
    audioOnly: true,
    audio: { station: "BBC Test Match Special", short: "TMS", prog: "England v Australia - 2nd Test" },
    sport: "Cricket",
    photo: { motif: "oval", sport: "Cricket", g: ["#1B2E3F", "#0A1219"] },
    comp: "The Ashes · 2nd Test · Lord's",
    title: "England v Australia",
    venue: "Lord's",
    accent: "#4ADE80",

    takeover: {
      a: "England", b: "Australia", ca: "#1A3A6B", cb: "#F1B434",
      buildup: { img: "ck-ball", tvimg: "ck-squad", line: "148-3", sub: "Day 3 · England trail by 224",
        stats: [["Runs", 148, 372], ["Overs faced", 51, 118.4], ["Wickets down", 3, 10]],
        cta: "Open day three" },
      live: { img: "ck-starc", line: "284-6", sub: "89.2 overs · trail by 88",
        stats: [["Runs", 284, 372], ["Overs faced", 89.2, 118.4], ["Wickets down", 6, 10]],
        cta: "Open the live experience" },
      companion: { img: "ck-mic", line: "284-6", sub: "Following Test Match Special",
        stats: [["Runs", 284, 372], ["Overs faced", 89.2, 118.4], ["Wickets down", 6, 10]],
        cta: "Follow along with the radio" },
      fulltime: { img: "ck-root", line: "361-8", sub: "Stumps · England trail by 11",
        stats: [["Runs", 361, 372], ["Overs faced", 114, 118.4], ["Wickets down", 8, 10]],
        cta: "The day in eleven balls" }
    },

    states: {

      buildup: {
        headline: "England resume 224 behind as Lord's waits for the new ball", date: "Saturday · Day 3 of 5", chip: "Day 3", state: "England trail by 224 with seven wickets standing", watching: "9,120",
        card: { status: "soon", when: "Day 3 · 11:00 start", line1: "England v Australia", line2: "2nd Test, Lord's · ENG 148-3, trail by 224",
          ctx: "Overcast with the Lord's slope. The first hour decides this Test", sig: 0.55 },
        head: { kind: "stack", status: { kind: "pre", text: "DAY 3 · PLAY AT 11:00", beat: true },
          rows: [["Australia", "372", "(118.4 ov)", false], ["England", "148-3", "(51.0 ov) · trail by 224", true]],
          strap: "Root 62*, Brook 11* · Live on Test Match Special" },
        tabs: [
          { id: "preview", label: "Live Reporting", sections: [
            { panels: [{ t: "involvecta", h: "Have your say on England this summer", ctx: "cricket" }] },
            { panels: [
              { t: "countdown", h: 0, m: 41, s: 12 },
              { t: "toggle", id: "tms", label: "Alert me at the first wicket", on: "Wicket alerts on",
                off: "One notification per wicket. Nothing else, and nothing before play.",
                onNote: "We'll nudge you at every wicket. 214,000 fans have wicket alerts on this Test." }
            ]},
            { h: "Listen live", meta: "Test Match Special", panels: [{ t: "audio",
              title: "Test Match Special", sub: "Aggers, Tuffers and Ebony Rainford-Brent · Lord's",
              note: "" }]},
            { h: "Live Reporting", ruleY: true, panels: [{ t: "feed", author: "by Stephan Shemilt at Lord's", posts: [
              ["10:15 BST", "Good morning from Lord's", "Cloud over St John's Wood and the covers are off. England resume on 148-3, 224 behind. Root and Brook are out on the outfield doing their throw-downs.", false, null, null, "bb-lordsview", "BBC SPORT"],
              ["10:02 BST", "How's stat?!", "Root has batted through a full day of a Lord's Test three times. England will want a fourth.", false],
              ["09:45 BST", "The day ahead", "The second new ball is due in the first hour. Test Match Special is on from 10:30 on Radio 5 Sports Extra and BBC Sounds.", false]
            ]}]},
            { h: "The state of it", meta: "Session by session", panels: [
              { t: "sessionbar", sessions: [
                ["Day 2, eve", "England 148-3", 62, "AUS"],
                ["Day 3, morning", "To come", 50, ""],
                ["Day 3, afternoon", "To come", 50, ""]
              ]},
              { t: "note", body: "England need 223 to avoid the follow-on with seven wickets standing. On this pitch, 300 has been par in the third innings for the last four Tests here." }
            ]},
            { h: "One thing to watch for", meta: "BBC Sport", panels: [{ t: "storyline", kicker: "The tactical angle",
              body: "The Lord's slope brings the ball back into the right-hander from the Pavilion End. Root has been beaten on the inside edge four times in this innings and has not been out to it. Australia will keep coming from that end for the first hour." }]},
            { h: "Watch: Build-up", meta: "Swipe for more", panels: [{ t: "shorts", label: "Build-up", deck: [0, 1, 5] }]}
          ]},
          { id: "predict", label: "Predict", sections: [
            { h: "Predict the morning session", meta: "28,104 in", ruleY: true, panels: [
              { t: "poll", id: "ck-session", q: "How many wickets fall before lunch?",
                opts: ["None", "One", "Two", "Three or more"], split: [21, 34, 29, 16],
                tally: "Locks at the first ball. Counts towards your Ashes Predictor.",
                after: "Settles at 13:00. You'll get a notification either way." }
            ]},
            { h: "Where does England's innings end?", panels: [{ t: "poll", id: "ck-total",
              q: "England's first-innings total", opts: ["Under 250", "250 to 320", "320 to 372", "Past 372"],
              split: [18, 37, 28, 17], tally: "Australia made 372.",
              after: "Par here is 300. The crowd is more optimistic than the pitch." }]},
            { h: "Your Ashes Predictor", meta: "Test 2 of 5", panels: [{ t: "league" }] }
          ]},
          { id: "scorecard", label: "Scorecard", sections: [
            { h: "England, 1st innings", meta: "148-3 (51.0 ov)", panels: [{ t: "battinglist", rows: [
              ["Crawley", "c Carey b Hazlewood", "24", "41"],
              ["Duckett", "lbw b Starc", "9", "12"],
              ["Pope", "c Smith b Cummins", "38", "72"],
              ["Root", "not out", "62", "118"],
              ["Brook", "not out", "11", "19"]
            ], extras: "Extras 4 (b2 lb2)", total: "148-3 (51.0 ov)" }]},
            { h: "Australia bowling", panels: [{ t: "bowlinglist", rows: [
              ["Starc", "14-3-41-1"], ["Hazlewood", "13-5-28-1"], ["Cummins", "15-4-39-1"], ["Lyon", "9-2-36-0"]
            ]}]},
            { h: "Fall of wickets", panels: [{ t: "fow", rows: [["18-1", "5.2", "Duckett"], ["47-2", "14.1", "Crawley"], ["121-3", "38.4", "Pope"]] }] },
            { h: "The teams", panels: [{ t: "teams", a: "England", b: "Australia",
              la: ["Zak Crawley", "Ben Duckett", "Ollie Pope", "Joe Root", "Harry Brook", "Ben Stokes (c)", "Jamie Smith (wk)", "Chris Woakes", "Brydon Carse", "Josh Tongue", "Shoaib Bashir"],
              lb: ["Usman Khawaja", "Travis Head", "Marnus Labuschagne", "Steve Smith", "Cameron Green", "Beau Webster", "Alex Carey (wk)", "Pat Cummins (c)", "Mitchell Starc", "Nathan Lyon", "Josh Hazlewood"] }] },
            { h: "Australia, 1st innings", meta: "372 all out", panels: [{ t: "note", body: "Labuschagne 118, Smith 91, Carey 54. Stokes 4-88, Tongue 3-71." }] }
          ]}
        ]
      },

      live: {
        headline: "Root reaches second Ashes hundred at Lord's as England chip away", date: "Saturday · Day 3 of 5", chip: "In Play", state: "England trail by 88 with four wickets standing", watching: "24,730",
        summary: ["Root unbeaten on 121, his second Ashes hundred at Lord's", "England 284-6, trailing by 88", "New ball available in eight overs", "Stokes caught behind off Starc for 43"],
        card: { status: "live", when: "LIVE · Day 3, afternoon", line1: "England 284-6", line2: "89.2 ov · trail by 88",
          ctx: "Root 121*. England 34% to win, 41% to draw, and the new ball is eight overs away", sig: 0.81, badge: "TMS" },
        head: { kind: "stack", status: { kind: "live", text: "LIVE · DAY 3", beat: true },
          rows: [["Australia", "372", "(118.4 ov)", false], ["England", "284-6", "(89.2 ov) · trail by 88", true]],
          strap: "Root 121*, Woakes 14* · New ball in 8 overs" },
        clock: "cricket",
        tabs: [
          { id: "live", label: "Live Reporting", sections: [
            { panels: [{ t: "involvecta", h: "Have your say on England this summer", ctx: "cricket" }] },
            { h: "This over", meta: "Bowling: Cummins", metaLive: true, panels: [
              { t: "over", balls: [["1", ""], ["4", "four"], ["•", ""], ["W", "wkt"], ["2", ""], ["4", "four now"]],
                caption: "Root drives Cummins through cover for four.",
                sub: "" },
              { t: "wagon", shots: [
                [291, 0.88, "four"], [45, 0.6, "two"], [120, 0.35, "one"], [200, 0.9, "four"],
                [330, 0.5, "one"], [15, 0.8, "six"], [250, 0.4, "one"], [170, 0.7, "three"]
              ], caption: "Root's scoring shots this innings. Two-thirds square of the wicket on the off side." }
            ]},
            { h: "Get involved", meta: "Closes at the over", panels: [{ t: "poll", id: "ck-moment", kind: "alert",
              tag: "NEW BALL DUE · 8 OVERS",
              q: "Australia take the new ball immediately, or wait for Root?",
              opts: ["Take it now", "Wait for the change"], split: [46, 54],
              tally: "Closes when the new ball is taken.",
              after: "Counted. 9,211 fans answered before the over ended." }]},
            { h: "Win predictor", meta: "Updated every ball", panels: [{ t: "winpred",
              a: "England", b: "Australia", draw: true, values: [34, 25, 41],
              series: [18, 20, 19, 24, 26, 25, 30, 28, 33, 31, 34],
              note: "England have climbed from 18% to 34% since lunch. The draw is still the most likely result." }]},
            { h: "Live Reporting", ruleY: true, panels: [{ t: "sortrow" }, { t: "feed",
              author: "by Stephan Shemilt at Lord's", posts: [
                ["89.2 overs", "FOUR", "Root drives on the up through extra cover. That is his fourteenth boundary and his second Ashes hundred at Lord's.", true, "ENG 284-6", "four"],
                ["88.4 overs", "Cummins around the wicket", "Going for the rough outside off. Root leaves three in a row and the crowd starts up.", false],
                ["82.1 overs", "WICKET", "Loose drive at a wide one. Australia are back in it, and the follow-on is not quite gone.", true, "Stokes c Carey b Starc 43 (ENG 253-6)", "wicket"],
                ["75.0 overs", "How's stat?!", "Root has faced 62% of the balls since lunch. Stokes has scored at nearly twice his rate, which is exactly how the pair planned it.", false],
                ["Tea", "Tea at Lord's", "England 238-5. Root 104 not out, Stokes 38 not out. The follow-on is saved and the ground has filled up for the evening.", false, null, null, "bb-lordsview", "BBC SPORT"],
                ["81.0 overs", "Partnership of 88", "Root and Stokes have taken England from 165-5 to within sight of the follow-on mark.", false]
              ]}]}
          ]},
          { id: "listen", label: "Watch & listen", sections: [
            { h: "Watch & listen", meta: "On BBC Sounds", panels: [{ t: "streams", rows: [
              ["cricket", "England v Australia", "BBC Test Match Special", "live"],
              ["cricket", "Surrey v Somerset", "BBC Radio 5 Sports Extra 2", "live"],
              ["local", "Surrey v Somerset", "BBC Radio London", "live", "RADIO", "LONDON"],
              ["local", "Surrey v Somerset", "BBC Radio Somerset", "live", "RADIO", "SOMERSET"],
              ["cricket", "England v India, 2nd ODI", "BBC Sounds", "live"],
              ["cricket", "Warwickshire v Leicestershire", "BBC Radio 5 Sports Extra", "live"],
              ["local", "Warwickshire v Leicestershire", "BBC Radio WM", "live", "RADIO", "WM"],
              ["wales", "Glamorgan v Essex", "BBC Radio Wales", "live"]
            ]}]}
          ]},
          { id: "situation", label: "Situation", sections: [
            { h: "The partnership", meta: "Root and Woakes", panels: [{ t: "partnership",
              a: ["Root", "121", "204", "14x4 1x6"], b: ["Woakes", "14", "38", "2x4"],
              runs: 31, balls: 62, note: "Fourth partnership of fifty or more in this innings. Root has faced 62% of it." }]},
            { h: "Session tracker", meta: "Day 3", panels: [
              { t: "sessionbar", sessions: [
                ["Morning", "68-1 in 27 ov", 68, "ENG"],
                ["Afternoon", "84-3 in 29 ov", 55, "AUS"],
                ["Evening", "In progress · 42-2", 45, "AUS"]
              ]},
              { t: "note", body: "Australia have taken six wickets today and still trail the run rate. That is the shape of a drawn Test unless the new ball changes it." }
            ]},
            { h: "The ball", meta: "Kookaburra · 72 overs old", panels: [
              { t: "kv", items: [["Swing", "0.4°", "was 1.9° new"], ["Seam", "0.6°", "flattening"], ["New ball", "8 ov", "available"]] },
              { t: "note", body: "Swing has halved since the 40th over. The hard new ball at 80 overs is the last real chance Australia have of bowling England out today." }
            ]},
            { h: "Reviews", panels: [{ t: "kv", items: [["England", "2", "remaining"], ["Australia", "1", "remaining"], ["Used today", "3", "all unsuccessful"]] }] }
          ]},
          { id: "scorecard", label: "Scorecard", sections: [
            { h: "England, 1st innings", meta: "284-6 (89.2 ov)", panels: [{ t: "battinglist", rows: [
              ["Crawley", "c Carey b Hazlewood", "24", "41"],
              ["Duckett", "lbw b Starc", "9", "12"],
              ["Pope", "c Smith b Cummins", "38", "72"],
              ["Root", "not out", "121", "204"],
              ["Brook", "b Lyon", "29", "44"],
              ["Stokes", "c Carey b Starc", "43", "61"],
              ["Smith", "lbw b Cummins", "6", "18"],
              ["Woakes", "not out", "14", "38"]
            ], extras: "Extras 0", total: "284-6 (89.2 ov)" }]},
            { h: "Australia bowling", panels: [{ t: "bowlinglist", rows: [
              ["Starc", "22-4-71-2"], ["Hazlewood", "21-7-48-1"], ["Cummins", "24-6-79-2"], ["Lyon", "22-3-86-1"]
            ], now: "Cummins"}]},
            { h: "Fall of wickets", panels: [{ t: "fow", rows: [["18-1", "5.2", "Duckett"], ["47-2", "14.1", "Crawley"], ["121-3", "38.4", "Pope"], ["151-4", "56.3", "Brook"], ["165-5", "61.2", "Smith"], ["253-6", "82.1", "Stokes"]] }] },
            { h: "The teams", panels: [{ t: "teams", a: "England", b: "Australia",
              la: ["Zak Crawley", "Ben Duckett", "Ollie Pope", "Joe Root", "Harry Brook", "Ben Stokes (c)", "Jamie Smith (wk)", "Chris Woakes", "Brydon Carse", "Josh Tongue", "Shoaib Bashir"],
              lb: ["Usman Khawaja", "Travis Head", "Marnus Labuschagne", "Steve Smith", "Cameron Green", "Beau Webster", "Alex Carey (wk)", "Pat Cummins (c)", "Mitchell Starc", "Nathan Lyon", "Josh Hazlewood"] }] }
          ]},
          { id: "stats", label: "Stats", sections: [
            { h: "This Test", meta: "Both innings", panels: [{ t: "stats", rows: [
              ["3.17", "Run rate", "3.14", 50], ["48%", "Dot-ball rate", "53%", 48],
              ["14", "Boundaries", "39", 26], ["6", "Wickets today", "0", 100], ["72", "Balls per wicket", "53", 58]
            ]}]},
            { h: "What the numbers say", panels: [{ t: "note", body: "England are scoring at the same rate as Australia off far fewer boundaries, which means more of their runs are coming in ones and twos. That is a slower, safer innings, and it is the right one if the plan is to bat out the draw." }] },
            { h: "Rate the innings", meta: "Live average", panels: [{ t: "rating", who: "Joe Root", avg: 9.1, count: "62,880 ratings" }] }
          ]}
        ]
      },

      companion: {
        headline: "Root reaches second Ashes hundred at Lord's as England chip away", date: "Saturday · Day 3 of 5", chip: "In Play", state: "England trail by 88", watching: "24,762",
        card: { status: "live", when: "LIVE · with TMS", line1: "England 284-6", line2: "Following Test Match Special",
          ctx: "No live pictures on the BBC, so the second screen is the only screen", sig: 0.81 },
        paired: "Following Test Match Special",
        head: { kind: "stack", status: { kind: "paired", text: "FOLLOWING TMS", beat: true },
          rows: [["Australia", "372", "(118.4 ov)", false], ["England", "284-6", "(89.2 ov) · trail by 88", true]],
          strap: "Root 121*, Woakes 14*" },
        clock: "cricket", sofa: true,
        tabs: [
          { id: "listen", label: "Listen", sections: [
            { h: "Test Match Special", meta: "Live", panels: [{ t: "audio",
              title: "Test Match Special", sub: "Aggers and Tuffers · Lord's, Day 3 evening",
              note: "" }]},
            { h: "In step with your radio", meta: "Digital radio runs behind", panels: [{ t: "sync" }] },
            { h: "From the commentary box", meta: "Live", panels: [{ t: "pundit", initials: "TMS", who: "The TMS box", when: "89 ov",
              quote: "Root is batting as though the result has already been decided and he is simply making sure of it.",
              opts: ["Agreed", "Too soon"], split: [72, 28], after: "The box is more relaxed than the dressing room." }]}
          ]},
          { id: "playalong", label: "Play along", sections: [
            { h: "Play along", meta: "Between overs only", ruleY: true, panels: [{ t: "quiz", id: "ck",
              q: "Who was the last England batter to score an Ashes hundred at Lord's?",
              opts: ["Stokes", "Root", "Bairstow", "Cook"], correct: 1,
              why: "Root, in 2023. Only the fourth in thirty years.", seconds: 20 }]},
            { h: "The big call", meta: "44,120 voted", panels: [{ t: "poll", id: "ck-bigcall", big: true,
              q: "England are 88 behind with four wickets left. What is the plan?",
              opts: ["Bat out the draw", "Go for the lead"], split: [63, 37],
              tally: "Results go to TMS at the close.", after: "Counted. TMS sees this at stumps." }]},
            { h: "Match-up of the day", meta: "Changeovers only", panels: [{ t: "w100cta", variant: "motd", m: "wade1977,raducanu2027,1980,era", kicker: "Wimbledon 100 · Match-up of the day", sub: "Play it at the changeover. 1980s grass, rackets as they played." }] },
            { h: "Keep your day", meta: "30 seconds", panels: [{ t: "signin" }] }
          ]}
        ]
      },

      fulltime: {
        headline: "Root unbeaten on 148 as England close to within 11", hiddenHeadline: "Day three at Lord's: the whole day on Test Match Special", date: "Saturday · Day 3 of 5", chip: "Stumps", state: "England trail by 11 with two wickets standing", watching: "11,900",
        summary: ["Root 148 not out at the close", "England 361-8, eleven behind", "Cummins takes 3-98 in 31 overs", "Day 4 starts at 11:00"],
        card: { status: "done", when: "STUMPS · Day 3", line1: "England 361-8", line2: "trail by 11 · Root 148*",
          ctx: "Root unbeaten on 148. England within touching distance and two days to survive", sig: 0.34 },
        head: { kind: "stack", status: { kind: "ft", text: "STUMPS · DAY 3", beat: false },
          rows: [["Australia", "372", "(118.4 ov)", false], ["England", "361-8", "(114.0 ov) · trail by 11", true]],
          strap: "Root 148*, Tongue 3* · Day 4 at 11:00" },
        tabs: [
          { id: "report", label: "Live Reporting", sections: [
            { panels: [{ t: "involvecta", h: "Have your say on England this summer", ctx: "cricket" }] },
            { ruleY: true, panels: [{ t: "storyline", kicker: "Close of play",
              body: "Root's 148 not out dragged England from 168-5 to within eleven of Australia's total. Two days left, a flattening pitch and a bowling attack that looked tired for the last hour. This Test is drifting towards a draw, and England will take it." }]},
            { h: "Watch: The day", meta: "Swipe for more", panels: [{ t: "shorts", label: "The day", deck: [1, 0, 2] }]},
            { h: "Live Reporting", panels: [{ t: "feed", author: "by Stephan Shemilt at Lord's", posts: [
              ["114.0 overs", "STUMPS", "Root walks off unbeaten on 148. England 361-8, eleven behind, with two days to go.", true, "ENG 361-8", "four"],
              ["109.5 overs", "WICKET", "Through the gate with the new ball. Cummins' third.", true, "Carse b Cummins 18 (ENG 352-8)", "wicket"],
              ["97.4 overs", "WICKET", "Pushed at one outside off and taken at slip.", true, "Woakes c Head b Lyon 31 (ENG 315-7)", "wicket"],
              ["80.0 overs", "New ball taken", "Australia go straight to it. Starc and Cummins to bowl the last session.", false]
            ]}]},
            { h: "From the box", meta: "Stumps", panels: [{ t: "pundit", initials: "TMS", who: "The TMS box", when: "Stumps",
              quote: "The best innings he has played in this country. It has changed nothing about the pitch and everything about the series.",
              opts: ["Right", "Overstated"], split: [77, 23], after: "Not much argument in the country on this one." }]}
          ]},
          { id: "yourday", label: "Your day", sections: [
            { h: "Your day", meta: "Scored at stumps", ruleY: true, panels: [{ t: "scored", total: 36, max: 50, rows: [
              [true, "Wickets before lunch: one", "34% of 28,104 got it", 15],
              [false, "England's total: 250 to 320", "They passed 320 at 108 overs", 0],
              [true, "The big call: bat out the draw", "They did exactly that", 15],
              [true, "Play-along quiz", "Two of three", 6]
            ], note: "Your best day of the series so far." }]},
            { h: "Your Ashes Predictor", meta: "Test 2 of 5", panels: [{ t: "leagueft" }] },
            { h: "Your streak", meta: "5 days", panels: [{ t: "streak", weeks: ["D1","D2","D3","D4","D5"], on: [0,1,2], next: 3,
              note: "Three days of this Test running. Day 4 starts at 11:00." }]},
            { h: "Tomorrow", meta: "Day 4", panels: [{ t: "nextfix", fixture: "Day 4 at Lord's", when: "Thu 11:00 · TMS",
              sub: "England 11 behind with two wickets standing", cta: "Wake me for the first ball", on: "Set for 11:00",
              off: "One notification at the start of play. Nothing before it.",
              onNote: "We'll nudge you at 10:55. Wicket alerts stay on through the day." }]}
          ]},
          { id: "scorecard", label: "Scorecard", sections: [
            { h: "England, 1st innings", meta: "361-8 (114.0 ov)", panels: [{ t: "battinglist", rows: [
              ["Crawley", "c Carey b Hazlewood", "24", "41"],
              ["Duckett", "lbw b Starc", "9", "12"],
              ["Pope", "c Smith b Cummins", "38", "72"],
              ["Root", "not out", "148", "261"],
              ["Brook", "b Lyon", "29", "44"],
              ["Stokes", "c Carey b Starc", "43", "61"],
              ["Smith", "lbw b Cummins", "6", "18"],
              ["Woakes", "c Head b Lyon", "31", "68"],
              ["Carse", "b Cummins", "18", "24"],
              ["Tongue", "not out", "3", "11"]
            ], extras: "Extras 12 (b4 lb6 nb2)", total: "361-8 (114.0 ov)" }]},
            { h: "Australia bowling", panels: [{ t: "bowlinglist", rows: [
              ["Starc", "28-5-89-2"], ["Hazlewood", "27-9-61-1"], ["Cummins", "31-7-98-3"], ["Lyon", "28-4-103-2"]
            ]}]},
            { h: "Fall of wickets", panels: [{ t: "fow", rows: [["18-1", "5.2", "Duckett"], ["47-2", "14.1", "Crawley"], ["121-3", "38.4", "Pope"], ["151-4", "56.3", "Brook"], ["165-5", "61.2", "Smith"], ["253-6", "82.1", "Stokes"], ["315-7", "97.4", "Woakes"], ["352-8", "109.5", "Carse"]] }] },
            { h: "The teams", panels: [{ t: "teams", a: "England", b: "Australia",
              la: ["Zak Crawley", "Ben Duckett", "Ollie Pope", "Joe Root", "Harry Brook", "Ben Stokes (c)", "Jamie Smith (wk)", "Chris Woakes", "Brydon Carse", "Josh Tongue", "Shoaib Bashir"],
              lb: ["Usman Khawaja", "Travis Head", "Marnus Labuschagne", "Steve Smith", "Cameron Green", "Beau Webster", "Alex Carey (wk)", "Pat Cummins (c)", "Mitchell Starc", "Nathan Lyon", "Josh Hazlewood"] }] }
          ]}
        ]
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* TENNIS — Wimbledon 2027, 100 years of BBC at Wimbledon              */
  /* ------------------------------------------------------------------ */
  {
    id: "tennis",
    audio: { station: "BBC Radio 5 Sports Extra", prog: "Wimbledon - Centre Court commentary" },
    sport: "Tennis",
    photo: { motif: "court", g: ["#1D3A1F", "#0B1A0D"] },
    comp: "Wimbledon 2027 · Day 6",
    title: "The Championships",
    venue: "All England Club",
    accent: "#9ADFA0",

    takeover: {
      a: "Raducanu", b: "Vondroušová", ca: "#BB1919", cb: "#9C8BD9",
      buildup: { img: "tn-smile", tvimg: "bb-balls", line: "Day 6", sub: "18 courts in play from 11:00",
        stats: [["Career meetings won", 3, 1], ["Grass win %", 71, 58], ["Aces last round", 6, 2]],
        cta: "See what is coming on" },
      live: { img: "tn-stretch", line: "6-4, 4-5", sub: "0-40 · Court 2 · three break points",
        stats: [["Break points won", 4, 1], ["First serve %", 68, 55], ["Winners", 22, 15]],
        cta: "Open the live experience" },
      companion: { img: "tn-tracking", line: "6-4, 4-5", sub: "Court 2 · while your TV shows Centre Court",
        stats: [["Break points won", 4, 1], ["First serve %", 68, 55], ["Winners", 22, 15]],
        cta: "Watch the better match" },
      fulltime: { img: "tn-best", line: "6-4, 7-5", sub: "Raducanu through in straight sets",
        stats: [["Winners", 31, 22], ["First serve %", 66, 57], ["Break points won", 5, 2]],
        cta: "How Court 2 was won" }
    },

    states: {

      buildup: {
        chip: "Today 11:00", state: "18 courts in play from 11:00, Centre Court from 13:30", watching: "6,300",
        card: { status: "soon", when: "Play at 11:00", line1: "Wimbledon · Day 6", line2: "18 courts · third round",
          ctx: "100 years since the BBC first broadcast from Wimbledon", sig: 0.48, badge: "100" },
        head: { kind: "stack", status: { kind: "pre", text: "PLAY AT 11:00", beat: true },
          rows: [["The Championships", "Day 6", "Third round", true], ["Courts in play", "18", "Order of play below", false]],
          strap: "Centre Court from 13:30 · BBC One and iPlayer" },
        tabs: [
          { id: "today", label: "Today", sections: [
            { panels: [
              { t: "countdown", h: 1, m: 12, s: 30 },
              { t: "toggle", id: "wimb-remind", label: "Follow Raducanu today", on: "Following Raducanu",
                off: "One notification when she walks on, one at every set point.",
                onNote: "On court 2, not before 13:00. 1.1m fans are following her today." }
            ]},
            { h: "100 years of the BBC at Wimbledon", meta: "1927 to 2027", ruleY: true, panels: [{ t: "centenary",
              years: [
                ["1927", "First radio commentary", "Teddy Wakelam calls the Championships from a hut beside Centre Court."],
                ["1937", "First television pictures", "A single camera, a handful of London sets, and the beginning of the habit."],
                ["1967", "Colour", "Wimbledon is the first colour broadcast on BBC Two, and the grass turns green."],
                ["2027", "The centenary", "Every one of those hundred years is in the archive. This is the year to open it."]
              ],
              note: "" }, { t: "feature", img: "ar-debut", compact: true, kicker: "Read",
              title: "From a hut beside Centre Court to eighteen courts in your pocket", sub: "6 min read", article: "w100" }]},
            { h: "Centre Court, any year", meta: "Wimbledon 100", panels: [{ t: "w100cta" }] },
            { h: "Order of play", meta: "From 11:00", panels: [{ t: "oop", rows: [
              ["Centre", "13:30", "Alcaraz v Musetti", "then Raducanu v Vondroušová"],
              ["No.1", "13:00", "Sinner v Fils", "then Świątek v Paolini"],
              ["Court 2", "11:00", "Boulter v Kalinskaya", "then Draper v Shelton"],
              ["Court 18", "11:00", "Fearnley v Rune", "then two more"]
            ]}]},
            { h: "Watch: Build-up", meta: "Swipe for more", panels: [{ t: "shorts", label: "Build-up", deck: [2, 3, 4] }]}
          ]},
          { id: "predict", label: "Predict", sections: [
            { h: "Predict the day", meta: "62,400 in", ruleY: true, panels: [
              { t: "poll", id: "tn-upset", q: "Which seed goes out today?",
                opts: ["Musetti", "Rune", "Paolini", "None of them"], split: [31, 24, 27, 18],
                tally: "Locks at the first serve on Centre.",
                after: "Settles at the last ball of the day." }
            ]},
            { h: "Your bracket", meta: "Third round", panels: [{ t: "poll", id: "tn-winner",
              q: "Who lifts it a week on Sunday?", opts: ["Alcaraz", "Sinner", "Draper", "The field"],
              split: [38, 34, 11, 17], tally: "You can change this until the quarter-finals.",
              after: "Locked in. You can still change it until the quarters." }]},
            { h: "Match-up of the day", meta: "Wimbledon 100", panels: [{ t: "w100cta", variant: "motd", m: "wade1977,raducanu2027,1980,era", kicker: "Wimbledon 100 · Match-up of the day", sub: "Britain's champion in the centenary year against Britain's player on Court 2 today. 1980s grass, rackets as they played." }] },
            { h: "Your Wimbledon", meta: "Day 6", panels: [{ t: "league" }] }
          ]},
          { id: "draw", label: "Draw", sections: [
            { h: "Third round, bottom half", panels: [{ t: "oop", rows: [
              ["Court 2", "1st", "Raducanu (18)", "v Vondroušová (12)"],
              ["Court 18", "1st", "Boulter (24)", "v Kalinskaya"],
              ["No.1", "1st", "Świątek (2)", "v Paolini (7)"],
              ["Centre", "1st", "Sabalenka (1)", "v Andreeva (15)"]
            ]}]},
            { h: "How the draw opened up", panels: [{ t: "note", body: "Three of the top eight seeds in this quarter have gone out in the first week. Whoever comes through Court 2 this afternoon has the kindest route to the semi-finals of anyone left in the draw." }] }
          ]}
        ]
      },

      live: {
        chip: "In Play", state: "Raducanu has three break points at 4-5", watching: "41,880",
        summary: ["Raducanu leads by a set and has three break points", "Vondroušová has won nine points on her second serve all set", "Boulter on Court 18 is 5-5 in the decider", "Sinner is serving for the match on No.1"],
        card: { status: "live", when: "LIVE · 18 courts", line1: "Raducanu 6-4, 4-5", line2: "Court 2 · 0-40, three break points",
          ctx: "Three break points on Court 2, and the busiest match on the BBC right now", sig: 0.93, badge: "WATCH NOW" },
        head: { kind: "stack", status: { kind: "live", text: "LIVE · COURT 2", beat: true },
          rows: [["Raducanu", "6 4", "", true], ["Vondroušová", "4 5", "0-40", false]],
          strap: "Second set · Vondroušová serving · three break points", serve: 1 },
        clock: "tennis",
        tabs: [
          { id: "watchnow", label: "Watch now", sections: [
            { h: "Every court", meta: "Updated every point", metaLive: true, panels: [
              { t: "courts", rows: [
                ["Court 2", "Raducanu v Vondroušová", "6-4, 4-5 · 0-40 · three break points", 0.93, "Break point"],
                ["Court 18", "Boulter v Kalinskaya", "3-6, 6-4, 5-5 · deuce", 0.71, "Deciding set"],
                ["No.1", "Sinner v Fils", "6-2, 5-2 · serving for the match", 0.66, "Serving for the match"],
                ["Centre", "Alcaraz v Musetti", "7-6, 6-3, 2-1 · on serve", 0.41, "On serve"],
                ["Court 12", "Draper v Shelton", "4-6, 2-1 · new balls", 0.22, "Second set"]
              ]},
            ]},
            { h: "Get involved", meta: "Closes at the game", panels: [{ t: "poll", id: "tn-moment", kind: "alert",
              tag: "THREE BREAK POINTS · COURT 2",
              q: "Does Raducanu break here?", opts: ["She breaks", "Vondroušová holds"], split: [68, 32],
              tally: "Closes when the game ends.",
              after: "Counted. 18,440 fans answered inside the game." }]},
            { h: "Serving through the eras", meta: "Wimbledon 100", panels: [{ t: "w100cta", variant: "moment", m: "navratilova1987,raducanu2027,today,era", kicker: "Wimbledon 100 · Put her on court", title: "Three break points on Court 2. How would Raducanu fare against a nine-time champion?", sub: "Today's grass, rackets as they played.", cta: "Raducanu v Navratilova" }] },
            { h: "Clips from Court 2", meta: "iPlayer", panels: [{ t: "clips", items: [
              ["The 22-shot rally at 3-3", "0:48", "tn-stretch"],
              ["The first-set break, at 2-1", "0:36", "tn-tracking"],
              ["Vondroušová's lob, from three angles", "0:29", "tn-dejected"]
            ]}]},
            { h: "5 Live on Court 2", meta: "Radio 5 Sports Extra", panels: [{ t: "soundbites", items: [
              ["The call at 0-40", "0:22", "Commentary as Raducanu earns three break points, with the crowd noise building behind it."],
              ["Why her second serve is the story", "0:41", "The summariser on Vondroušová winning fewer than a third of her second-serve points."],
              ["The walk over from Centre", "0:18", "Courtside reporter on the crowd arriving at Court 2 as word gets round the grounds."]
            ]}]}
          ]},
          { id: "match", label: "This match", sections: [
            { h: "Point by point", meta: "Second set", panels: [
              { t: "pointgrid", games: [
                ["R", [1,1,0,1]], ["V", [0,1,1,1,0,1]], ["R", [1,0,1,1]], ["V", [1,1,0,0,1,1]],
                ["R", [0,1,1,0,1,1]], ["V", [1,0,1,1]], ["R", [1,1,1,0]], ["V", [0,1,0,1,1,1]],
                ["R", [1,0,0,1,1,1]], ["V", [0,0,0]]
              ], note: "One column a game, one block a point. Raducanu in yellow." }
            ]},
            { h: "Serve", meta: "This match", panels: [{ t: "stats", rows: [
              ["64%", "First serves in", "58%", 52],
              ["78%", "First-serve points won", "61%", 56],
              ["54%", "Second-serve points won", "31%", 64],
              ["4", "Aces", "2", 67],
              ["1", "Double faults", "5", 17],
              ["3 of 4", "Break points converted", "1 of 6", 71]
            ]}]},
            { h: "What the numbers say", panels: [{ t: "note", body: "The match is being decided on second serve. Vondroušová is winning fewer than a third of hers, which is why every one of her service games has gone to deuce or worse since the first set." }] }
          ]},
          { id: "hundred", label: "100 years", sections: [
            { ruleY: true, panels: [{ t: "feature", img: "ar-court", kicker: "Wimbledon · 100 years on the BBC",
              title: "From a hut beside Centre Court to eighteen courts in your pocket", sub: "6 min read · with pictures from the archive", article: "w100" }]},
            { h: "Centre Court, any year", meta: "Wimbledon 100", panels: [{ t: "w100cta" }] },
            { h: "Archive clips", meta: "From 1937", panels: [{ t: "clips", archive: true, items: [
              ["1937: the first pictures", "1:05", "ar-debut"],
              ["BBC Television presents", "0:40", "ar-ident"],
              ["An afternoon at Wimbledon and Lord's", "0:31", "ar-lords"],
              ["Before Centre Court had a roof", "0:57", "ar-court"]
            ]}]},
            { h: "Read the programmes", meta: "Six pages", panels: [{ t: "reader" }] },
            { h: "On this day", meta: "From the archive", panels: [{ t: "centenary",
              years: [
                ["1977", "Virginia Wade wins", "The last British woman to take the singles title, in the Centenary Championships, with the Queen watching."],
                ["1991", "The People's Sunday", "Rain forces an unseeded middle Sunday. 24,000 fans get in for a fiver and never sit down."],
                ["2013", "Murray ends the wait", "77 years, and the BBC audience peaks at 17.3 million."]
              ],
              note: "" }]},
            { h: "Watch: Beyond the court", meta: "Swipe for more", panels: [{ t: "shorts", label: "Off court", deck: [3, 4, 2] }]}
          ]}
        ]
      },

      companion: {
        chip: "In Play", state: "Centre Court on BBC One, Court 2 on this screen", watching: "41,880",
        card: { status: "live", when: "LIVE on BBC One", line1: "Centre Court", line2: "Paired with your telly",
          ctx: "Centre Court on your TV. We will say if another court is worth a switch", sig: 0.93 },
        paired: "Paired with BBC One · Centre Court",
        head: { kind: "stack", status: { kind: "paired", text: "FOLLOWING YOUR TELLY", beat: true },
          rows: [["Alcaraz", "7 6 2", "", true], ["Musetti", "6 3 1", "", false]],
          strap: "Third set · on serve · you are watching Centre Court" },
        clock: "tennis", sofa: true,
        tabs: [
          { id: "watch", label: "Watch", sections: [
            { h: "Worth a switch", meta: "Court 2", ruleY: true, panels: [
              { t: "courts", rows: [
                ["Court 2", "Raducanu v Vondroušová", "6-4, 4-5 · 0-40 · three break points", 0.93, "Break point"],
                ["Centre", "Alcaraz v Musetti (on your telly)", "7-6, 6-3, 2-1 · on serve", 0.41, "On serve"]
              ]},
              { t: "btnrow", label: "Follow Court 2 on this screen", toast: "Court 2 on your phone, Centre on your telly. Both scores stay pinned." }
            ]},
            { h: "In step with your TV", meta: "Paired", panels: [{ t: "sync" }] }
          ]},
          { id: "playalong", label: "Play along", sections: [
            { h: "Play along", meta: "Changeovers only", ruleY: true, panels: [{ t: "quiz", id: "tn",
              q: "Who was the last British woman to win the Wimbledon singles title?",
              opts: ["Ann Jones", "Virginia Wade", "Sue Barker", "Johanna Konta"], correct: 1,
              why: "Virginia Wade, 1977, in the Centenary Championships.", seconds: 25 }]},
            { h: "The big call", meta: "52,880 voted", panels: [{ t: "poll", id: "tn-bigcall", big: true,
              q: "Should BBC One stay on Centre or switch to Court 2?",
              opts: ["Stay on Centre", "Switch to Court 2"], split: [41, 59],
              tally: "Results go to the gallery at the next changeover.",
              after: "Counted. The gallery sees this at the changeover." }]},
            { h: "Keep your day", meta: "30 seconds", panels: [{ t: "signin" }] }
          ]}
        ]
      },

      fulltime: {
        chip: "Result", state: "Raducanu into the fourth round", watching: "12,400",
        summary: ["Raducanu wins 6-4, 7-5 in 1 hour 48", "Broke at 4-5 in the second and never looked back", "Musetti and Boulter go out", "Fourth round on the middle Sunday"],
        card: { status: "done", when: "Day 6 done · 20:14", line1: "Raducanu wins 6-4, 7-5", line2: "Into the fourth round",
          ctx: "Two seeds out. 6.2m watched the Court 2 switch, the biggest of the Championships", sig: 0.28 },
        head: { kind: "stack", status: { kind: "ft", text: "MATCH OVER", beat: false },
          rows: [["Raducanu", "6 7", "wins", true], ["Vondroušová", "4 5", "", false]],
          strap: "Third round · 1 hour 48 minutes · into the fourth round" },
        tabs: [
          { id: "report", label: "Report", sections: [
            { ruleY: true, panels: [{ t: "storyline", kicker: "Match report",
              body: "Raducanu broke at 4-5 in the second and never looked like losing it from there. A performance built on returning a second serve that was not good enough, in front of a Court 2 crowd that grew by the game as the rest of the grounds worked out where to be." }]},
            { h: "Day 6 results", meta: "Third round", panels: [{ t: "oop", rows: [
              ["Court 2", "Raducanu", "def Vondroušová", "6-4, 7-5"],
              ["Centre", "Alcaraz", "def Musetti", "7-6, 6-3, 6-4"],
              ["No.1", "Sinner", "def Fils", "6-2, 6-2, 6-3"],
              ["Court 18", "Kalinskaya", "def Boulter", "6-3, 4-6, 7-5"]
            ]}]},
            { h: "Watch: The day", meta: "Swipe for more", panels: [{ t: "shorts", label: "The day", deck: [2, 4, 3] }]}
          ]},
          { id: "yourday", label: "Your day", sections: [
            { h: "Your day", meta: "Scored at the last ball", ruleY: true, panels: [{ t: "scored", total: 41, max: 55, rows: [
              [true, "She breaks at 0-40", "68% of 18,440 agreed", 20],
              [true, "Seed out today: Musetti", "31% got it", 15],
              [false, "Play-along quiz", "One of two", 6],
              [false, "Winner: still open", "Settles a week on Sunday", 0]
            ], note: "Your best day of the Championships." }]},
            { h: "Your Wimbledon", meta: "Day 6 settled", panels: [{ t: "leagueft" }] },
            { h: "Your streak", meta: "6 days", panels: [{ t: "streak", weeks: ["D3","D4","D5","D6","D7"], on: [0,1,2,3], next: 4,
              note: "Four days running. The middle Sunday is the one that breaks most streaks." }]},
            { h: "Rewrite it", meta: "Wimbledon 100", panels: [{ t: "w100cta", variant: "rewrite", m: "raducanu2027,vondrousova2027,1980,wood", kicker: "Wimbledon 100 · Rewrite it", title: "Play today's Court 2 match again in 1980", sub: "Same two players, 1980s grass, everyone on wooden rackets. Does it go the same way?", cta: "Replay it in 1980" }] },
            { h: "Tomorrow", meta: "Day 7", panels: [{ t: "nextfix", fixture: "Middle Sunday", when: "Sun 11:00 · BBC One",
              sub: "Raducanu in the fourth round, not before 14:00", cta: "Remind me when she's on",
              on: "Set for Sunday", off: "One notification when she walks on. Nothing else.",
              onNote: "We'll nudge you when she's called. Your streak needs one match watched." }]}
          ]},
          { id: "hundred", label: "100 years", sections: [
            { ruleY: true, panels: [{ t: "feature", img: "ar-mag93", kicker: "Wimbledon · 100 years on the BBC",
              title: "From a hut beside Centre Court to eighteen courts in your pocket", sub: "6 min read · with pictures from the archive", article: "w100" }]},
            { h: "Centre Court, any year", meta: "Wimbledon 100", panels: [{ t: "w100cta" }] },
            { h: "The centenary, in numbers", meta: "1927 to 2027", panels: [
              { t: "kv", items: [["Broadcasts", "2,304", "on BBC television, 1937 to 2021"], ["All-time rank", "38th", "most broadcast BBC programme"], ["Peak audience", "17.3m", "Murray, 2013"]] }
            ]},
            { h: "Read the programmes", meta: "Six pages", panels: [{ t: "reader" }] },
            { h: "On this day", meta: "From the archive", ruleY: true, panels: [{ t: "centenary",
              years: [
                ["1977", "Virginia Wade wins", "The last British woman to take the singles title, in the Centenary Championships."],
                ["2013", "Murray ends the wait", "77 years, and a BBC audience peaking at 17.3 million."]
              ], note: "" }]}
          ]}
        ]
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* RUGBY — Six Nations 2027, Wales v Ireland                           */
  /* ------------------------------------------------------------------ */
  {
    id: "rugby",
    audio: { station: "BBC Radio 5 Live", prog: "Wales v Ireland - Six Nations" },
    sport: "Rugby Union",
    photo: { motif: "pitch", g: ["#22314A", "#0C121C"] },
    comp: "Guinness Six Nations",
    title: "Wales v Ireland",
    venue: "Principality Stadium",
    accent: "#7FB2FF",

    takeover: {
      a: "Wales", b: "Ireland", ca: "#C8102E", cb: "#128D51",
      buildup: { img: "rg-wales", tvimg: "rg-flyhalves", line: "17:15", sub: "Principality Stadium · roof closed",
        stats: [["Wins in last 5", 1, 4], ["Points scored", 68, 131], ["Tries", 7, 17]],
        cta: "Open the build-up" },
      live: { img: "rg-maul", line: "13 – 16", sub: "64:12 · TMO reviewing a grounding",
        stats: [["Territory %", 44, 56], ["Possession %", 47, 53], ["Tackles made", 118, 96]],
        cta: "Open the live experience" },
      companion: { img: "rg-run", line: "13 – 16", sub: "Following your telly · held back 18s",
        stats: [["Territory %", 44, 56], ["Possession %", 47, 53], ["Tackles made", 118, 96]],
        cta: "See why the whistle went" },
      fulltime: { img: "rg-roar", line: "16 – 28", sub: "Full time · Ireland take the bonus point",
        stats: [["Territory %", 42, 58], ["Possession %", 45, 55], ["Tries", 1, 4]],
        cta: "The four tries and the table" }
    },

    states: {

      buildup: {
        chip: "Today 17:15", state: "Ireland need a bonus point to stay in the title race", watching: "8,400",
        card: { status: "soon", when: "17:15 · BBC One", line1: "Wales v Ireland", line2: "Six Nations · Principality Stadium",
          ctx: "Roof closed. Ireland need a bonus point to stay in the title race", sig: 0.44 },
        head: { kind: "teams", status: { kind: "pre", text: "Kick-off 17:15", beat: true },
          centre: { big: "17:15", sub: "Principality", small: true },
          home: { code: "WAL", name: "Wales", sub: "L L W L L" },
          away: { code: "IRE", name: "Ireland", sub: "W W W D W" } },
        tabs: [
          { id: "preview", label: "Preview", sections: [
            { panels: [
              { t: "countdown", h: 0, m: 52, s: 18 },
              { t: "toggle", id: "rg-remind", label: "Remind me at kick-off", on: "Reminder set",
                off: "One notification, 10 minutes before. Nothing else.",
                onNote: "We'll nudge you at 17:05. 402,000 fans have a reminder on this match." }
            ]},
            { h: "One thing to watch for", meta: "BBC Sport", panels: [{ t: "storyline", kicker: "The tactical angle",
              body: "Ireland have won 71% of their attacking lineouts inside the 22 this championship, the best in the tournament. Wales have conceded a try from a driving maul in four of their last five. The first penalty to the corner will tell you how this goes." }]},
            { h: "The championship", meta: "After four rounds", panels: [
              { t: "kv", items: [["Ireland", "2nd", "17 pts"], ["Wales", "6th", "2 pts"], ["Bonus point", "4 tries", "Ireland need it"]] },
              { t: "note", body: "Ireland need a bonus-point win and France to slip. Wales need a performance more than a result, which is a different match to watch." }
            ]},
            { h: "Watch: Build-up", meta: "Swipe for more", panels: [{ t: "shorts", label: "Build-up", deck: [8, 0, 2] }]}
          ]},
          { id: "predict", label: "Predict", sections: [
            { h: "Predict the match", meta: "52,220 in", ruleY: true, panels: [{ t: "predict" }] },
            { h: "Bonus point", panels: [{ t: "poll", id: "rg-bp", q: "Do Ireland get their four tries?",
              opts: ["Yes, comfortably", "Yes, late on", "No"], split: [37, 34, 29],
              tally: "Locks at kick-off.", after: "Settles at the final whistle." }]},
            { h: "Your Six Nations", meta: "Round 5", panels: [{ t: "league" }] }
          ]},
          { id: "lineups", label: "Line-ups", sections: [
            { h: "The laws, before you start", meta: "New this season", ruleY: true, panels: [{ t: "law",
              ref: "LAW 19 · LINEOUT · MAUL",
              body: "A maul from a lineout may not be pulled down, and the defending side may not join from the side. If you have wondered why a driving maul so often ends in a penalty rather than a try, it is almost always one of those two.",
              meta: "Checked by the BBC Sport rugby team" }]},
            { h: "Wales", meta: "Two changes", panels: [{ t: "xi", team: "wal", list: [
              [15, "Winnett", "FB"], [14, "Rogers", "W"], [13, "Llewellyn", "C"], [12, "Edwards", "C"], [11, "Adams", "W"],
              [10, "Anscombe", "FH"], [9, "Hardy", "SH"], [1, "Thomas", "LP"], [2, "Lake", "H"], [3, "Assiratti", "TP"],
              [4, "Rowlands", "L"], [5, "Beard", "L"], [6, "Morgan", "BF"], [7, "Reffell", "OF"], [8, "Faletau", "N8"]
            ], highlight: 7, hint: "Most turnovers this championship" }]},
            { h: "Ireland", meta: "Unchanged", panels: [{ t: "xi", team: "ire", list: [
              [15, "Keenan", "FB"], [14, "Hansen", "W"], [13, "Ringrose", "C"], [12, "Aki", "C"], [11, "Lowe", "W"],
              [10, "Crowley", "FH"], [9, "Gibson-Park", "SH"], [1, "Porter", "LP"], [2, "Sheehan", "H"], [3, "Furlong", "TP"],
              [4, "Baird", "L"], [5, "McCarthy", "L"], [6, "Conan", "BF"], [7, "van der Flier", "OF"], [8, "Doris", "N8"]
            ], highlight: 2, hint: "Lineout throw 94%" }]}
          ]}
        ]
      },

      live: {
        chip: "In Play", state: "Wales trail by three, TMO reviewing", watching: "38,210",
        summary: ["Wales 13-16 Ireland with 16 minutes left", "Penalty Wales at 22 metres, TMO checking the build-up", "Wales have 71% territory in the last ten minutes", "Sheehan try from the driving maul, 58 mins"],
        card: { status: "live", when: "LIVE · 64 mins", line1: "Wales 13 - 16 Ireland", line2: "TMO review in progress",
          ctx: "Wales 71% territory in the last ten. A penalty at 22 metres takes them within one score", sig: 0.69 },
        head: { kind: "teams", status: { kind: "live", text: "LIVE · TMO REVIEW", beat: true },
          centre: { big: "13 – 16", sub: "64:12" },
          home: { code: "WAL", name: "Wales", sub: "1T 1C 2P" },
          away: { code: "IRE", name: "Ireland", sub: "2T 2P" } },
        clock: "rugby",
        tabs: [
          { id: "live", label: "Live", sections: [
            { h: "Why the whistle went", meta: "Explained in 12 seconds", metaLive: true, ruleY: true, panels: [
              { t: "law", ref: "LAW 15.6(c) · RUCK · OFFSIDE LINE",
                body: "Ireland's number 7 joined the ruck from the side rather than through the gate. The offside line at a ruck is the hindmost foot, and arriving from any other angle is a penalty regardless of whether there was contact.",
                meta: "Under review by the BBC Sport rugby team" },
            ]},
            { h: "TMO", meta: "Under review", panels: [{ t: "tmo",
              q: "Was there a knock-on in the build-up?", elapsed: 48,
              note: "Average review this championship: 1 minute 42." }]},
            { h: "Get involved", meta: "Closes when play restarts", panels: [{ t: "poll", id: "rg-moment", kind: "alert",
              tag: "PENALTY WALES · 22 METRES",
              q: "Kick at goal, or go to the corner?", opts: ["Take the three", "Corner"], split: [58, 42],
              tally: "Kick success from this position: 84% this season.",
              after: "Counted. 11,330 fans answered before the restart." }]},
            { h: "Territory and possession", meta: "Last 10 minutes", panels: [{ t: "territory",
              rows: [["Territory", 71, 29], ["Possession", 63, 37], ["Time in the 22", 78, 22]],
              a: "Wales", b: "Ireland",
              note: "Wales have had the ball and the field position for ten minutes and are still three behind. That is the story of their championship." }]},
            { h: "Phase play", meta: "This possession", panels: [{ t: "phases", count: 14, max: 18,
              note: "Fourteen phases is the longest of the match. Ireland have not conceded a penalty in a phase sequence this long all championship, until now." }]},
            { h: "Live Reporting", ruleY: true, panels: [{ t: "sortrow" }, { t: "feed",
              author: "Written by Gareth Griffiths at the Principality Stadium", posts: [
                ["64 mins", "PENALTY WALES", "Advantage over. Ireland's 7 comes in from the side and Wales have a shot at the posts from 22 metres.", true],
                ["63 mins", "Fourteen phases", "Wales going nowhere fast but going nowhere very patiently. Ireland's defence is starting to fold at the edges.", false],
                ["58 mins", "TRY IRELAND", "Sheehan from the back of a driving maul. The fourth of those Wales have conceded in five matches.", true],
                ["52 mins", "Anscombe penalty", "Straightforward from in front. Three points and a two-score game again.", false]
              ]}]}
          ]},
          { id: "stats", label: "Stats", sections: [
            { h: "Match stats", meta: "Opta", panels: [{ t: "stats", rows: [
              ["54%", "Possession", "46%", 54], ["61%", "Territory", "39%", 61],
              ["112", "Carries", "98", 53], ["14", "Turnovers conceded", "9", 61],
              ["92%", "Lineout won", "94%", 49], ["7", "Penalties conceded", "11", 39],
              ["3 of 4", "Kicks at goal", "1 of 1", 75]
            ]}]},
            { h: "What the numbers say", panels: [{ t: "note", body: "Wales are winning almost every column except the one that counts. Eleven penalties from Ireland would normally be a losing number, and the difference is that four of them came inside their own 22 where Wales kicked for the corner and lost the lineout." }] },
            { h: "Rate the performance", meta: "Live average", panels: [{ t: "rating", who: "Taulupe Faletau", avg: 7.8, count: "28,110 ratings" }] }
          ]},
          { id: "lineups", label: "Line-ups", sections: [
            { h: "Wales", meta: "2 replacements used", panels: [{ t: "xi", team: "wal", list: [
              [15, "Winnett", "FB"], [14, "Rogers", "W"], [13, "Llewellyn", "C"], [12, "Edwards", "C"], [11, "Adams", "W"],
              [10, "Anscombe", "FH"], [9, "Hardy", "SH"], [1, "Thomas", "LP"], [2, "Lake", "H"], [3, "Assiratti", "TP"],
              [4, "Rowlands", "L"], [5, "Beard", "L"], [6, "Morgan", "BF"], [7, "Reffell", "OF"], [8, "Faletau", "N8"]
            ], highlight: 8, hint: "7.8 fan rating" }]},
            { h: "Ireland", meta: "3 replacements used", panels: [{ t: "xi", team: "ire", list: [
              [15, "Keenan", "FB"], [14, "Hansen", "W"], [13, "Ringrose", "C"], [12, "Aki", "C"], [11, "Lowe", "W"],
              [10, "Crowley", "FH"], [9, "Gibson-Park", "SH"], [1, "Porter", "LP"], [2, "Sheehan", "H"], [3, "Furlong", "TP"],
              [4, "Baird", "L"], [5, "McCarthy", "L"], [6, "Conan", "BF"], [7, "van der Flier", "OF"], [8, "Doris", "N8"]
            ], highlight: 2, hint: "Try, 58'" }]}
          ]}
        ]
      },

      companion: {
        chip: "In Play", state: "Wales trail by three", watching: "38,210",
        card: { status: "live", when: "LIVE on BBC One", line1: "Wales 13 - 16 Ireland", line2: "Paired with your telly",
          ctx: "Law explainers during the TMO, which is exactly when you want them", sig: 0.69 },
        paired: "Paired with BBC One",
        head: { kind: "teams", status: { kind: "paired", text: "FOLLOWING YOUR TELLY", beat: true },
          centre: { big: "13 – 16", sub: "63:41" },
          home: { code: "WAL", name: "Wales", sub: "1T 1C 2P" },
          away: { code: "IRE", name: "Ireland", sub: "2T 2P" } },
        clock: "rugby", sofa: true,
        tabs: [
          { id: "watch", label: "Watch", sections: [
            { h: "Why the whistle went", meta: "While the TMO looks", ruleY: true, panels: [
              { t: "law", ref: "LAW 15.6(c) · RUCK · OFFSIDE LINE",
                body: "Ireland's number 7 joined the ruck from the side rather than through the gate. The offside line at a ruck is the hindmost foot.",
                meta: "Under review by the BBC Sport rugby team" },
              { t: "tmo", q: "Was there a knock-on in the build-up?", elapsed: 48,
                note: "" }
            ]},
            { h: "In step with your TV", meta: "Paired", panels: [{ t: "sync" }] }
          ]},
          { id: "playalong", label: "Play along", sections: [
            { h: "Play along", meta: "Stoppages only", ruleY: true, panels: [{ t: "quiz", id: "rg",
              q: "At a ruck, where is the offside line?", opts: ["The ball", "The hindmost foot", "Five metres back", "The referee's mark"],
              correct: 1, why: "The hindmost foot of the last player in the ruck. 44% of fans got this.", seconds: 25 }]},
            { h: "The big call", meta: "71,400 voted", panels: [{ t: "poll", id: "rg-bigcall", big: true,
              q: "Wales, 22 metres out, three behind with 16 minutes left", opts: ["Take the three", "Go to the corner"],
              split: [58, 42], tally: "Results go to the studio at the restart.",
              after: "Counted. The studio sees this at the restart." }]},
            { h: "Keep your afternoon", meta: "30 seconds", panels: [{ t: "signin" }] }
          ]}
        ]
      },

      fulltime: {
        chip: "Result", state: "Ireland win 28-16 with a bonus point", watching: "9,800",
        summary: ["Ireland 28-16 Wales, bonus point secured", "Fourth try with a minute left", "Wales won territory and lost the try count 4-1", "France v Ireland decides it on Super Saturday"],
        card: { status: "done", when: "FT · 19:08", line1: "Wales 16 - 28 Ireland", line2: "Ireland get the bonus point",
          ctx: "Ireland's fourth try in the 79th minute keeps them in the title race", sig: 0.26 },
        head: { kind: "teams", status: { kind: "ft", text: "FULL TIME", beat: false },
          centre: { big: "16 – 28", sub: "Full time" },
          home: { code: "WAL", name: "Wales", sub: "1T 1C 3P" },
          away: { code: "IRE", name: "Ireland", sub: "4T 3C 1P" } },
        tabs: [
          { id: "report", label: "Report", sections: [
            { ruleY: true, panels: [{ t: "storyline", kicker: "Full-time report",
              body: "Ireland got the fourth try with a minute left and a bonus point that keeps the championship alive. Wales had the territory, the possession and the crowd, and lost the two moments that mattered: a lineout on the Irish line and a ruck penalty at 64 minutes." }]},
            { h: "The decisions that decided it", meta: "Explained", ruleY: true, panels: [{ t: "law",
              ref: "LAW 15.6(c) · THE 64TH-MINUTE PENALTY",
              body: "Wales kicked the three and drew within one score. The alternative was the corner, where they had already lost two lineouts. 58% of fans said take the three, and on the night it was the right call that still lost.",
              meta: "Checked by the BBC Sport rugby team" }]},
            { h: "Watch: The best of it", meta: "Swipe for more", panels: [{ t: "shorts", label: "The best of it", deck: [9, 8, 7] }]}
          ]},
          { id: "yourday", label: "Your afternoon", sections: [
            { h: "Your afternoon", meta: "Scored at the whistle", ruleY: true, panels: [{ t: "scored", total: 33, max: 55, rows: [
              [true, "Ireland get the bonus point", "Late on, as 34% predicted", 15],
              [false, "Exact score, 13-20", "Finished 16-28", 0],
              [true, "The big call: take the three", "With 58% of the country", 12],
              [true, "Play-along quiz", "Two of two", 6]
            ], note: "Your best round of the championship." }]},
            { h: "Your Six Nations", meta: "Round 5 settled", panels: [{ t: "leagueft" }] },
            { h: "Your streak", meta: "4 rounds", panels: [{ t: "streak", weeks: ["R2","R3","R4","R5","R1"], on: [0,1,2,3], next: 4,
              note: "Four rounds running. The autumn internationals restart it in November." }]},
            { h: "Next up", meta: "Super Saturday", panels: [{ t: "nextfix", fixture: "France v Ireland", when: "Sat 20:00 · BBC One",
              sub: "The championship decider, and your round 6 opens Thursday", cta: "Remind me and open my Predictor",
              on: "Set for Saturday", off: "One notification on Thursday. One on Saturday. Nothing else.",
              onNote: "Round 6 opens Thursday. Your streak survives if you play before kick-off." }]}
          ]},
          { id: "stats", label: "Stats", sections: [
            { h: "Final stats", meta: "Opta", panels: [{ t: "stats", rows: [
              ["56%", "Possession", "44%", 56], ["59%", "Territory", "41%", 59],
              ["1", "Tries", "4", 20], ["16", "Turnovers conceded", "11", 59],
              ["88%", "Lineout won", "96%", 48], ["9", "Penalties conceded", "13", 41]
            ]}]},
            { h: "The story in one number", panels: [{ t: "note", body: "Wales won territory by eighteen points and lost the try count four to one. Ireland scored three of their four from set piece inside the 22, which is the thing Wales knew was coming and could not stop." }] }
          ]}
        ]
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* FORMULA 1 — Azerbaijan Grand Prix, first practice. The BBC holds    */
  /* the live audio rights and no pictures, so, like cricket, this is a  */
  /* radio-led experience: 5 Sports Extra, live timing and live text.    */
  /* Times and positions are invented for the prototype.                  */
  /* ------------------------------------------------------------------ */
  {
    id: "f1",
    audioOnly: true,
    audio: { station: "BBC Radio 5 Sports Extra", short: "5 Sports Extra", prog: "Azerbaijan Grand Prix - First practice",
      img: "bb-f1city", note: "Radio, live timing and live text. The BBC holds the audio rights to Formula 1, and no pictures.",
      transcript: [
        ["22:10", "Norris across the line, and that is purple in the first sector and purple in the last."],
        ["22:40", "A 1:42.918. Two tenths clear of Leclerc, and he has not used the soft tyre yet."],
        ["23:05", "Russell locks up at turn 15 and takes the escape road. No harm done."],
        ["23:30", "Verstappen on a push lap now, and the Red Bull looks a handful through the castle section."],
        ["24:02", "He finishes fourth, three tenths down. The long straight is where he is losing it."],
        ["24:30", "Thirty-six minutes to go, and the track is still getting quicker with every lap."]
      ] },
    sport: "Formula 1",
    photo: { motif: "track", sport: "Formula 1", g: ["#2A2A2A", "#0B0B0B"] },
    comp: "Azerbaijan Grand Prix · Baku",
    title: "Azerbaijan Grand Prix",
    venue: "Baku City Circuit",
    accent: "#FF8000",

    takeover: {
      ca: "#FF8000", cb: "#DC0000",
      buildup: { img: "bb-f1city", line: "FP1", sub: "First practice at 09:30 · 5 Sports Extra", stats: [], cta: "Open first practice" },
      live: { img: "bb-f1lead", line: "FP1", sub: "First practice · 38 minutes to go", stats: [], cta: "Open the live experience" },
      fulltime: { img: "bb-f1lead", line: "FP1", sub: "First practice finished", stats: [], cta: "See the times" }
    },

    states: {

      buildup: {
        headline: "First practice in Baku: the cars go out at 09:30", chip: "FP1", state: "First practice starts at 09:30", watching: "3,410",
        card: { status: "soon", when: "FP1 · 09:30", line1: "Azerbaijan Grand Prix", line2: "First practice · Baku",
          ctx: "The first of three practice sessions on the street circuit, live on 5 Sports Extra", sig: 0.15 },
        head: { kind: "stack", status: { kind: "pre", text: "FIRST PRACTICE · 09:30", beat: true },
          rows: [["Baku City Circuit", "6.003 km", "51 laps on Sunday", false]],
          strap: "Live on BBC Radio 5 Sports Extra and BBC Sounds" },
        tabs: [
          { id: "preview", label: "Preview", sections: [
            { panels: [
              { t: "countdown", h: 0, m: 52, s: 30 },
              { t: "toggle", id: "f1go", label: "Tell me when the cars go out", on: "Alert on",
                off: "One notification when the session starts. Nothing else.",
                onNote: "We'll nudge you at 09:30." }
            ]},
            { h: "Listen live", meta: "5 Sports Extra", panels: [{ t: "audio",
              title: "5 Sports Extra: first practice", sub: "Live from Baku · BBC Sounds",
              note: "The BBC holds the audio rights to Formula 1, so every session is live on radio and BBC Sounds. There are no pictures on the BBC." }]},
            { h: "The weekend", meta: "All on 5 Sports Extra", panels: [{ t: "kv", items: [["FP1", "Fri", "09:30"], ["Qualifying", "Sat", "13:00"], ["Race", "Sun", "12:00"]] }]},
            { h: "One thing to watch for", meta: "BBC Sport", panels: [{ t: "storyline", kicker: "The street circuit",
              body: "Baku has the longest flat-out run of the season, more than two kilometres from the last corner to the first, and one of the tightest corners on the calendar through the old town. Teams arrive with low-drag rear wings and spend first practice deciding how much they dare to take off." }]}
          ]},
          { id: "predict", label: "Predict", sections: [
            { h: "Who tops first practice?", meta: "12,040 in", ruleY: true, panels: [
              { t: "poll", id: "f1-fp1", q: "Fastest team in first practice",
                opts: ["McLaren", "Ferrari", "Mercedes", "Red Bull"], split: [38, 24, 22, 16],
                tally: "Locks when the session starts.",
                after: "Settles at 10:30. You'll get a notification either way." }
            ]}
          ]}
        ]
      },

      live: {
        headline: "Norris quickest as first practice passes halfway", chip: "FP1", state: "38 minutes to go", watching: "8,960",
        summary: ["Norris fastest after 14 laps", "Leclerc and Russell within three tenths", "An early red flag for debris at turn 15", "Most of the field still on medium tyres"],
        card: { status: "live", when: "LIVE · FP1", line1: "Norris fastest", line2: "First practice · 38 mins to go",
          ctx: "Listen on 5 Sports Extra, with live timing and text on the BBC Sport app", sig: 0.3, badge: "5SX" },
        head: { kind: "stack", status: { kind: "live", text: "LIVE · FIRST PRACTICE", beat: true },
          rows: [["Norris", "1:42.918", "P1 · McLaren", true], ["Leclerc", "+0.204", "P2 · Ferrari", false], ["Russell", "+0.287", "P3 · Mercedes", false]],
          strap: "38 minutes to go · Live on 5 Sports Extra" },
        tabs: [
          { id: "live", label: "Live", sections: [
            { h: "Listen live", meta: "5 Sports Extra", metaLive: true, panels: [{ t: "audio",
              title: "5 Sports Extra: first practice", sub: "Live from Baku", note: "" }]},
            { h: "Timing", meta: "After 22 minutes", panels: [{ t: "timing", rows: [
              ["Norris", "#FF8000", "NOR", ["1:42.918", "14"]],
              ["Leclerc", "#DC0000", "LEC", ["+0.204", "12"]],
              ["Russell", "#27F4D2", "RUS", ["+0.287", "15"]],
              ["Verstappen", "#1E41FF", "VER", ["+0.341", "11"]],
              ["Piastri", "#FF8000", "PIA", ["+0.402", "13"]],
              ["Hamilton", "#DC0000", "HAM", ["+0.518", "12"]]
            ], note: "Times from this session only. Most teams are still on their first set of medium tyres." }]},
            { h: "Get involved", meta: "Closes at the flag", panels: [{ t: "poll", id: "f1-flag", kind: "alert",
              tag: "38 MINUTES TO GO", q: "Does anyone beat Norris's time before the flag?",
              opts: ["Yes", "No"], split: [64, 36], tally: "Closes at the chequered flag.",
              after: "Counted. 4,120 fans answered before the flag." }]},
            { h: "Live Reporting", ruleY: true, panels: [{ t: "sortrow" }, { t: "feed",
              author: "BBC Sport, with 5 Sports Extra commentary", posts: [
                ["22 mins", "Norris goes quickest", "A 1:42.918 on his second run, fastest in the first and last sectors.", true],
                ["18 mins", "Leclerc improves", "Up to second, two tenths off. Ferrari are running more wing than the others at the front.", false],
                ["11 mins", "Red flag", "Debris at turn 15. The session restarted after four minutes.", true],
                ["0 mins", "Green light", "The pit lane is open for the first practice of the weekend.", false]
              ]}]}
          ]},
          { id: "weekend", label: "Weekend", sections: [
            { h: "The weekend", meta: "All on 5 Sports Extra", panels: [{ t: "kv", items: [["FP2", "Fri", "13:00"], ["Qualifying", "Sat", "13:00"], ["Race", "Sun", "12:00"]] }]},
            { h: "Tyres", meta: "This weekend", panels: [{ t: "kv", items: [["Hard", "C3", "white"], ["Medium", "C4", "yellow"], ["Soft", "C5", "red"]] }]}
          ]}
        ]
      },

      fulltime: {
        headline: "Norris fastest in first practice, Leclerc second", hiddenHeadline: "First practice in Baku: the times and the reaction", chip: "FP1 done", state: "First practice finished", watching: "2,110",
        summary: ["Norris fastest in first practice", "Leclerc second, Russell third", "One red flag, for debris", "Second practice at 13:00"],
        card: { status: "done", when: "FP1 · done", line1: "Norris fastest in FP1", line2: "Leclerc second, Russell third",
          ctx: "Second practice at 13:00, live on 5 Sports Extra", sig: 0.1 },
        head: { kind: "stack", status: { kind: "ft", text: "FIRST PRACTICE · FINISHED", beat: false },
          rows: [["Norris", "1:42.611", "P1 · McLaren", true], ["Leclerc", "+0.166", "P2 · Ferrari", false], ["Russell", "+0.240", "P3 · Mercedes", false]],
          strap: "Second practice at 13:00 on 5 Sports Extra" },
        tabs: [
          { id: "report", label: "Report", sections: [
            { ruleY: true, panels: [{ t: "storyline", kicker: "First practice",
              body: "Norris finished first practice fastest, a tenth and a half clear of Leclerc, after improving on his final run on soft tyres. Most of the front-runners spent the hour on long runs rather than one-lap pace, so the order will change before qualifying." }]},
            { h: "Timing", meta: "Final classification", panels: [{ t: "timing", rows: [
              ["Norris", "#FF8000", "NOR", ["1:42.611", "24"]],
              ["Leclerc", "#DC0000", "LEC", ["+0.166", "23"]],
              ["Russell", "#27F4D2", "RUS", ["+0.240", "26"]],
              ["Piastri", "#FF8000", "PIA", ["+0.301", "25"]],
              ["Verstappen", "#1E41FF", "VER", ["+0.355", "22"]],
              ["Hamilton", "#DC0000", "HAM", ["+0.470", "24"]]
            ], note: "Times from first practice only." }]}
          ]},
          { id: "next", label: "Next", sections: [
            { h: "Second practice", meta: "Today", panels: [{ t: "nextfix", fixture: "Second practice", when: "Fri 13:00 · 5 Sports Extra",
              sub: "Live on radio and BBC Sounds", cta: "Tell me when it starts", on: "Set for 13:00",
              off: "One notification at the start. Nothing before it.",
              onNote: "We'll nudge you at 12:55." }]}
          ]}
        ]
      }
    }
  }
];

/* =========================================================================
   Global lifecycle states
   ========================================================================= */

const LIFECYCLE = [
  { id: "buildup", label: "Build-up", blurb: "before it starts" },
  { id: "live", label: "Live", blurb: "while it's happening" },
  { id: "fulltime", label: "Near-live", blurb: "highlights, clips and catch-up, straight after" }
];

/* =========================================================================
   Home copy per lifecycle state
   ========================================================================= */

const HOMECOPY = {
  buildup: { strap: "Saturday 26 June 2027" },
  live: { strap: "Saturday 26 June 2027 · 16:42" },
  companion: { strap: "Saturday 26 June 2027 · on the sofa" },
  fulltime: { strap: "Saturday 26 June 2027 · the evening after" }
};

/* =========================================================================
   Bottom-nav screens other than Home
   ========================================================================= */

const NAVSCREENS = {
  shorts: {
    title: "Shorts",
    sections: [
      { h: "Today on Shorts", meta: "All sports", panels: [{ t: "shortsgrid", deck: [1, 2, 7, 9, 5, 0, 3, 8, 6, 4] }]}
    ]
  },
  mysport: {
    title: "My Sport",
    sections: [
      { flush: true, panels: [{ t: "mysport" }] },
      { h: "Your Predictor", meta: "Across four sports", panels: [{ t: "league" }] },
      { h: "Your streak", meta: "3 weeks", panels: [{ t: "streak", weeks: ["W3","W4","W5","W6","W7"], on: [1,2,3], next: 4,
        note: "Three weeks running. One more keeps it alive." }] }
    ]
  },
  scores: {
    title: "Scores & Fixtures",
    sections: [
      { h: "Live now", meta: "Saturday 26 June", panels: [{ t: "scorelist", items: [
        ["England 284-6", "", "Australia 372", "", "Day 3", true],
        ["Raducanu", "6 4", "Vondroušová", "4 5", "Set 2", true],
        ["Wales", "13", "Ireland", "16", "64'", true]
      ]}]},
      { h: "Later today", meta: "Kick-off times BST", panels: [{ t: "scorelist", items: [
        ["England", "", "Netherlands", "", "19:45", false],
        ["Scotland", "", "Italy", "", "20:00", false]
      ]}]},
      { h: "Earlier", panels: [{ t: "scorelist", items: [
        ["Alcaraz", "3", "Musetti", "0", "FT", false],
        ["Sinner", "3", "Fils", "0", "FT", false]
      ]}]}
    ]
  },
  search: {
    title: "Search",
    sections: [
      { panels: [{ t: "searchbox" }] },
      { h: "Trending", panels: [{ t: "chips", items: ["Ashes Lord's", "Wimbledon order of play", "Root", "100 years of BBC Wimbledon", "Six Nations table", "Predictor"] }] }
    ]
  }
};


/* =========================================================================
   Home feed — the modules around the live rail
   ========================================================================= */

const HOMEFEED = {

  hero: {
    buildup: {
      kicker: "Ashes · Day 3",
      head: "England start day three 224 behind at Lord's",
      stand: "Root and Brook resume with seven wickets standing and a forecast that favours the bowlers",
      photo: { img: "ck-squad", cap: "The England Test squad" }, sport: "cricket", article: "st-buildup",
      comments: "418", likes: "5k", shares: "204",
      poll: { id: "hero-buildup", imgs: ["ck-stokes", "ck-starc"],  q: "Have your say: Can England avoid the follow-on?",
        opts: ["They will", "No chance"], split: [61, 39],
        after: "The country is more optimistic than the forecast." }
    },
    live: {
      kicker: "Wimbledon · Court 2",
      head: "Raducanu has three break points and the grounds are emptying towards Court 2",
      stand: "Of everything live across four sports this afternoon, this is the one people are switching to",
      photo: { img: "tn-tracking", cap: "Raducanu on the baseline, Court 2" }, sport: "tennis", article: "st-live",
      comments: "262", likes: "3k", shares: "123",
      poll: { id: "hero-live", imgs: ["tn-stretch", "tn-dejected"],  q: "Have your say: Does she break here?",
        opts: ["She breaks", "Vondroušová holds"], split: [68, 32],
        after: "68% of 18,440 fans backed the break." }
    },
    companion: {
      kicker: "Wimbledon · Court 2",
      head: "Raducanu three points from levelling it, and Court 2 is filling up",
      stand: "Vondroušová has won nine points on her second serve all set. The crowd has worked out where to be",
      photo: { img: "tn-smile", cap: "Raducanu at the All England Club" }, sport: "tennis", article: "st-companion",
      comments: "188", likes: "2k", shares: "96",
      poll: { id: "hero-companion", imgs: ["tn-stretch", "tn-plan"],  q: "Have your say: Should BBC One switch to Court 2?",
        opts: ["Switch it", "Stay on Centre"], split: [59, 41],
        after: "The gallery sees this at the next changeover." }
    },
    fulltime: {
      kicker: "The day in one line",
      head: "Root unbeaten on 148, Raducanu through, and Ireland get the bonus point with a minute left",
      stand: "Four sports, four results, and everything you predicted this afternoon settled within the hour",
      photo: { img: "ck-lords", cap: "England celebrate at Lord's" }, sport: "cricket", article: "st-fulltime",
      comments: "902", likes: "11k", shares: "477",
      poll: { id: "hero-fulltime", imgs: ["ck-huddle", "tn-best", "rg-roar"],  q: "Have your say: Performance of the day?",
        opts: ["Root", "Raducanu", "Ireland"], split: [52, 31, 17],
        after: "Root takes it, and it was not close." }
    }
  },

  /* a standings module, F1-style, with abstract badges */
  standings: {
    title: "Six Nations table",
    cols: ["P", "W", "PD", "Pts"],
    rows: [
      ["France", "#2B4C9B", "FR", ["4", "4", "+61", "19"]],
      ["Ireland", "#1E7A45", "IE", ["4", "3", "+44", "17"]],
      ["England", "#B9BEC6", "EN", ["4", "3", "+22", "14"]],
      ["Scotland", "#2E5F86", "SC", ["4", "2", "+3", "10"]],
      ["Italy", "#3E6DB5", "IT", ["4", "1", "-38", "6"]],
      ["Wales", "#9E2B2B", "WA", ["4", "0", "-92", "2"]]
    ],
    note: "Ireland need a bonus-point win this afternoon and France to slip."
  },

  comps: {
    title: "Football competitions",
    tabs: [
      { name: "Premiership", colour: "#1E7A45", initials: "SP", cols: ["P", "W", "D", "L", "GD", "Pts"], rows: [
        ["Celtic", "#1E7A45", "CE", ["1", "1", "0", "0", "3", "3"]],
        ["Rangers", "#2B4C9B", "RA", ["1", "1", "0", "0", "2", "3"]],
        ["Aberdeen", "#9E2B2B", "AB", ["1", "1", "0", "0", "1", "3"]],
        ["Hearts", "#7A1F2B", "HE", ["1", "0", "1", "0", "0", "1"]]
      ]},
      { name: "Premier League", colour: "#4B2E83", initials: "PL", cols: ["P", "W", "D", "L", "GD", "Pts"], rows: [
        ["Arsenal", "#B23A3A", "AR", ["31", "22", "5", "4", "41", "71"]],
        ["Liverpool", "#9E2B2B", "LI", ["31", "21", "6", "4", "38", "69"]],
        ["Man City", "#4E9ECF", "MC", ["31", "20", "5", "6", "35", "65"]],
        ["Chelsea", "#2B4C9B", "CH", ["31", "17", "7", "7", "19", "58"]]
      ]}
    ]
  },

  bbcrail: {
    title: "Sport on the BBC",
    items: [
      { badge: "", title: "Sports Personality", sub: "Voting opens Monday", motif: "crowd", sport: "Football", g: ["#2A2438", "#100C18"] },
      { badge: "LIVE", title: "Test Match Special", sub: "Lord's, day 3 evening", motif: "oval", sport: "Cricket", g: ["#1B3A22", "#08170E"] },
      { badge: "LIVE", title: "Boxing", sub: "Thompson v Ramirez", motif: "ring", g: ["#3A1622", "#170A0F"] },
      { badge: "", title: "Match of the Day", sub: "Tonight, 22:30", motif: "pitch", g: ["#123D22", "#071A0E"] }
    ]
  },

  rumours: {
    title: "Transfer rumour latest",
    items: [
      ["Official bid for Arne Engels", "21k views", "#1E7A45", "CE"],
      ["Ipswich open talks for star Maeda", "21k views", "#2B4C9B", "IP"],
      ["Rangers weigh up move for Tavernier replacement", "17k views", "#7A1F2B", "RA"]
    ]
  },

  videos: { title: "Watch: Today's best", deck: [1, 2, 6, 11, 8, 3, 5, 4],
    decks: {
      buildup: [0, 5, 8, 11, 6, 2, 3, 4],
      live: [1, 2, 6, 11, 8, 3, 5, 0],
      companion: [11, 4, 1, 3, 6, 0, 2, 8],
      fulltime: [10, 7, 9, 1, 11, 2, 6, 4]
    } }
};

/* ---------------------------------------------------------------------------
   The story so far. One per event, shown at the top of the live and
   second-screen states. Three ways into the same story: watch the moments
   as a rapid recap, listen to it read, or read it. Moments with no picture
   render as a graphic card rather than borrowing a photo that shows the
   wrong side celebrating.
   ------------------------------------------------------------------------- */
const RECAPS = {
  f1: {
    after: [
      ["41'", "Soft tyres on", "The front-runners switch for a qualifying-style run.", null, "chance"],
      ["55'", "Norris improves", "A 1:42.611, fastest of the session.", null, "milestone"],
      ["60'", "Chequered flag", "Norris fastest, Leclerc second, Russell third.", null, "break"]
    ],
    ftSynopsis: [
      "Lando Norris finished first practice in Baku fastest, a tenth and a half clear of Charles Leclerc.",
      "Most of the front-runners spent the hour on long runs rather than one-lap pace, so the order may change before qualifying."
    ],
    listen: "0:50", read: "1 min", voice: "Read by BBC Radio 5 Sports Extra",
    synopsis: [
      "Lando Norris leads first practice in Baku with 38 minutes to go, two tenths clear of Charles Leclerc and George Russell.",
      "An early red flag for debris at turn 15 cost everyone a run. Since the restart, most teams have stayed on medium tyres and worked on how much rear wing they can take off for the long straight."
    ],
    moments: [
      ["0'", "Green light", "The pit lane opens for the first practice of the weekend.", "bb-f1city", "start"],
      ["11'", "Red flag", "Debris at turn 15. Cleared in four minutes.", null, "card"],
      ["18'", "Leclerc goes second", "Two tenths off the pace with more wing on.", null, "chance"],
      ["22'", "Norris fastest", "A 1:42.918 on his second run.", "bb-f1lead", "milestone"]
    ]
  },
  football: {
    after: [
      ["79'", "Goal: Kane", "Saka's cross, Kane's header, back across Verbruggen. 2-0.", "fb-highlights", "goal"],
      ["88'", "Goal: Gakpo", "A header from a corner. A nervous last few minutes. 2-1.", null, "goal"],
      ["FT", "Full time: England 2-1 Netherlands", "England's first win over the Netherlands here since 2018.", null, "break"]
    ],
    ftSynopsis: [
      "England beat the Netherlands 2-1 at Wembley. Bukayo Saka scored seven minutes after half-time and Harry Kane headed a second on 79 minutes.",
      "The Netherlands had the better of the first half and hit the bar through Cody Gakpo, who pulled one back with a header two minutes from time. England held on through the last ten minutes."
    ],
    listen: "1:40", read: "1 min", voice: "Read by BBC Radio 5 Live",
    synopsis: [
      "England lead through Bukayo Saka's goal seven minutes after half-time, and have looked more comfortable since than at any point before it.",
      "The Netherlands had the better of the first half. They pressed high, won the ball back in England's third eleven times, and Cody Gakpo hit the bar on 24 minutes. England's best chance before the break fell to Harry Kane, whose shot from the edge of the area was tipped round the post.",
      "Since the goal England have sat deeper and let the Netherlands have the ball. Jordan Pickford has had one save to make, from Xavi Simons on 64 minutes."
    ],
    moments: [
      ["12'", "Kane tests Verbruggen", "Low shot from the edge of the area, tipped round the post.", "fb-kane", "chance"],
      ["24'", "Gakpo hits the bar", "Curled from the corner of the box with Pickford beaten.", null, "chance"],
      ["38'", "Rice booked", "Late on Reijnders. One more yellow and he misses the next match.", null, "card"],
      ["HT", "Half-time: 0-0", "Netherlands 58% of the ball. England two shots on target to one.", null, "break"],
      ["52'", "Goal: Saka", "Kane's pass inside the full-back, one touch past Van Dijk, near post.", "fb-celebrate", "goal"],
      ["64'", "Pickford saves from Simons", "The Netherlands' only shot on target. Parried and cleared.", null, "chance"]
    ]
  },
  cricket: {
    after: [
      ["17:52", "New ball taken", "Australia take it straight away at 80 overs.", null, "chance"],
      ["18:20", "Woakes c Head b Lyon 31", "A stand of 62 with Root ends at slip.", null, "wicket"],
      ["18:44", "Carse b Cummins 18", "Through the gate with the new ball.", null, "wicket"],
      ["Stumps", "England 361-8, eleven behind", "Root unbeaten on 148 after batting through the whole day.", null, "break"]
    ],
    ftSynopsis: [
      "Joe Root batted through day three to finish 148 not out, and England closed on 361-8, eleven behind Australia's 372.",
      "Australia took five wickets across the day, three of them with the new ball, but Root's stands with Stokes and Woakes saved the follow-on and put a draw in view."
    ],
    listen: "2:05", read: "1 min", voice: "Read by Test Match Special",
    synopsis: [
      "Joe Root is 121 not out and England are 284-6, 88 behind Australia's 372. He started the day on 62 and has batted through every session.",
      "The morning belonged to Australia. Harry Brook was bowled by Nathan Lyon for 29, two more wickets followed before lunch, and England went in at 168-5 with the follow-on still five runs away.",
      "Root and Ben Stokes then put on 88 across the afternoon. Root reached his second Ashes hundred at Lord's after tea, Stokes fell for 43 caught behind off Mitchell Starc, and the new ball is due in eight overs."
    ],
    moments: [
      ["11:00", "Play resumes on 148-3", "Root 62, Brook 11. England 224 behind.", "ck-bat", "start"],
      ["11:48", "Brook b Lyon 29", "Went back to one that skidded on. Australia's first breakthrough of the day.", null, "wicket"],
      ["12:55", "Lunch: 168-5", "Two more gone in the last half-hour. The follow-on is five runs away.", null, "break"],
      ["13:41", "Follow-on saved", "Stokes drives Cummins through the covers.", null, "milestone"],
      ["16:42", "Root's hundred", "His second Ashes century at Lord's, from 243 balls. The slowest of his career and the most needed.", "ck-root", "milestone"],
      ["17:31", "Stokes c Carey b Starc 43", "Loose drive at a wide one. The stand ends on 88.", null, "wicket"]
    ]
  },
  tennis: {
    after: [
      ["Set 2 · 5-5", "Raducanu breaks back", "Third break point taken with a forehand pass down the line.", "tn-best", "score"],
      ["Set 2 · 6-5", "A hold to love", "Four first serves in. Court 2 is on its feet.", null, "chance"],
      ["Set 2 · 7-5", "Raducanu wins 6-4, 7-5", "Breaks again to close it out. Into the fourth round.", null, "goal"]
    ],
    ftSynopsis: [
      "Emma Raducanu beat Markéta Vondroušová 6-4, 7-5 to reach the fourth round.",
      "She took the first set with a late break, trailed 4-5 in the second, and won the last three games in a row from three break points down on the Vondroušová serve."
    ],
    listen: "1:15", read: "1 min", voice: "Read by BBC Radio 5 Sports Extra",
    synopsis: [
      "Emma Raducanu won the first set 6-4 and has three break points to level the second at 5-5, with Markéta Vondroušová serving for the set.",
      "She broke early in the first, was broken straight back, then broke again at 4-4 and served it out to love. Her first serve has been the difference: 68% in, and four of five break points taken.",
      "Vondroušová found her range at the start of the second, broke to lead 3-2 and has held every time since. The crowd walking over from the outside courts tells you what the next point is worth."
    ],
    moments: [
      ["Set 1 · 2-1", "Early break", "Backhand return down the line on the first break point of the match.", "tn-tracking", "score"],
      ["Set 1 · 3-3", "Broken straight back", "Two double faults in one game. The only loose one she has played.", "tn-dejected", "chance"],
      ["Set 1 · 6-4", "First set Raducanu", "Broke at 4-4 and served it out to love.", "tn-stretch", "goal"],
      ["Set 2 · 2-3", "Vondroušová breaks", "A lob off the frame lands on the baseline.", null, "chance"],
      ["Set 2 · 4-5", "0-40 on the Vondroušová serve", "Serving for the set, three break points down. Court 2 is filling up.", null, "milestone"]
    ]
  },
  rugby: {
    after: [
      ["65'", "Try given: Ireland", "The TMO confirms the grounding. Converted. 13-23.", "rg-roar", "goal"],
      ["71'", "Penalty: Wales", "From in front of the posts. 16-23.", null, "score"],
      ["79'", "Try: Ireland, the fourth", "Off a lineout maul with a minute left. The bonus point. 16-28.", null, "goal"]
    ],
    ftSynopsis: [
      "Ireland beat Wales 28-16 in Cardiff and took the bonus point with their fourth try a minute from time.",
      "Wales led at half-time and had most of the territory, but Ireland scored three second-half tries, the third of them after a long TMO review on 64 minutes."
    ],
    listen: "1:50", read: "1 min", voice: "Read by BBC Radio 5 Live",
    synopsis: [
      "Ireland lead 16-13 with a quarter of an hour left, and the TMO is looking at what would be their third try.",
      "They have scored the only two tries from open play but missed both conversions, which is why Wales are still within a score. Wales' try came from a driving maul after 33 minutes and put them 10-8 up at half-time.",
      "The second half has been a kicking contest. Ireland need two more tries for the bonus point that keeps them in the title race."
    ],
    moments: [
      ["6'", "Try: Keenan", "Eleven phases, finished in the right corner. Conversion missed. 0-5.", "rg-run", "goal"],
      ["33'", "Try: Wales, converted", "Driving maul from a lineout fifteen metres out. 10-8.", "rg-maul", "goal"],
      ["HT", "Wales 10-8 Ireland", "Ireland have had 61% of the territory and not 61% of the scoreboard.", null, "break"],
      ["47'", "Try: Ireland", "Over from a scrum on the Wales line. Conversion hits the post. 10-13.", null, "goal"],
      ["61'", "Penalty: Ireland", "Wales offside at the ruck, 35 metres out. 13-16.", null, "score"],
      ["64'", "TMO: grounding in the corner", "A third try would put the bonus point back in reach.", null, "milestone"]
    ]
  }
};

/* what is said in each short, for anyone watching with the sound off.
   Written as a summary rather than as quotation: these are real people and
   the prototype does not put words in their mouths. Where the frame itself
   carries a subtitle, that line is used as it appears. */
const TRANSCRIPTS = {
  "ck-hope": "A former Australia captain on England's chances going into Lord's. Subtitle on screen: \u201cI know everyone judged the English boys really harshly in Perth.\u201d He goes on to say the conditions at Lord's should suit England's seamers better.",
  "ck-tms": "The Test Match Special box as a wicket falls. The commentators are out of their seats, one with both arms up, and the call is drowned out by the ground. The full passage is on BBC Sounds.",
  "tn-secret": "Raducanu is asked for a secret talent and laughs before answering. Subtitle on screen: \u201cspeak a few languages\u201d.",
  "tn-challenge": "A trick-shot challenge filmed off court. Several attempts, one near miss, and a lot of laughing at the result.",
  "tn-books": "At a press conference Raducanu is asked what she is reading during the fortnight and talks through the books she has on the go.",
  "fb-debate": "A pundit sets out the selection question for tonight: which of the two starts depends on whether England line up with a back four or a back three.",
  "fb-tuchel": "A studio piece on why the England head coach has suited this squad, looking back at how the appointment was received and what has changed since.",
  "fb-bellingham": "A short on the second-half performance, built around the number of touches in the opposition box after the break.",
  "rg-wales": "Wales players leave the field after the autumn defeat, with the coaching team's week in Cardiff as the backdrop to Saturday.",
  "rg-roar": "The fourth Ireland try from two angles: held up twice on the line, then grounded, and the celebration that followed.",
  "ck-carse": "The England captain is interviewed pitchside with a BBC Sport microphone, talking through the decision on the batting order. The full interview is on BBC Sounds.",
  "ar-debut": "Archive material from June 1937: the outside broadcast vans at the All England Club and the first television pictures of the Championships."
};

/* ---------------------------------------------------------------------------
   Other screens. The same events, told for the website and for iPlayer on a
   television. What differs is not the data but what each screen is for.
   ------------------------------------------------------------------------- */

/* the conversation: lives on the phone and the website, never on the telly */
const COMMENTS = {
  f1: [
    ["KT", "Kai T", "1m", "Two kilometres flat out and they still find time in the old town. Baku never gets old.", "212"],
    ["RS", "Rhi S", "4m", "5 Sports Extra on, live timing open. Better than half the TV coverage I have paid for.", "96"],
    ["OM", "Omar M", "7m", "Red flag in the first quarter of an hour. Of course it was turn 15.", "54"]
  ],
  football: [
    ["JM", "Jess M", "2m", "Saka's goal came from Kane dropping deep. Nobody tracked him. Twice now.", "412"],
    ["RK", "Rav K", "4m", "We have been sitting too deep since 55. Asking for trouble.", "287"],
    ["TO", "Tom O", "7m", "Rice one booking from missing the next match and still going into every tackle.", "166"],
    ["AB", "Aisha B", "9m", "Netherlands have had the ball and done nothing with it. Happy with that.", "98"]
  ],
  cricket: [
    ["DP", "Dave P", "1m", "Root at Lord's with the new ball eight overs away. This is the session.", "644"],
    ["SH", "Sarah H", "3m", "Stokes drive was the only loose shot all afternoon and it cost him.", "309"],
    ["NC", "Neil C", "6m", "TMS on, telly off, scorecard open. Perfect Saturday.", "251"],
    ["PL", "Priya L", "11m", "Follow-on saved. Now bat all of tomorrow please.", "120"]
  ],
  tennis: [
    ["EW", "Ellie W", "30s", "Three break points and Court 2 has never been this full.", "902"],
    ["MJ", "Marcus J", "2m", "Her first serve percentage is the whole story of this match.", "344"],
    ["KF", "Kat F", "5m", "Switched from Centre for this. Right call.", "217"],
    ["OB", "Olly B", "8m", "Vondroušová's lob at 2-3 was absurd. Credit where it is due.", "133"]
  ],
  rugby: [
    ["GW", "Gareth W", "40s", "If that is given it is 23-13 and the bonus point is on.", "518"],
    ["CN", "Ciara N", "3m", "Two missed conversions. That is the only reason Wales are in this.", "402"],
    ["HR", "Huw R", "6m", "Our maul is the one thing working. Keep kicking to the corner.", "190"],
    ["LD", "Liam D", "10m", "Territory 56% and a three-point lead. Should be out of sight.", "141"]
  ]
};

/* what the telly shows as it happens, one line at a time */
const TVMOMENTS = {
  f1: [["22'", "Fastest lap", "Norris goes top with a 1:42.918", "bb-f1lead"], ["23'", "Lock-up", "Russell takes the escape road at turn 15", null], ["24'", "Verstappen fourth", "Three tenths down after his push lap", null]],
  football: [["70'", "Chance", "Kane's shot is blocked on the line", "fb-kane"], ["72'", "Corner", "England's seventh of the half", null], ["74'", "Save", "Pickford tips over from Simons", null]],
  cricket: [["89.3", "FOUR", "Root drives Starc through extra cover", "ck-bat"], ["89.5", "Appeal", "Not out. Australia have no reviews left", null], ["90.0", "Drinks", "England 288-6, trail by 84", null]],
  tennis: [["0-40", "Break point", "Vondroušová saves the first with an ace", "tn-stretch"], ["15-40", "Break point", "Second saved at the net", "tn-dejected"], ["Break", "Raducanu breaks", "Five games all in the second set", "tn-best"]],
  rugby: [["64'", "TMO", "Checking the grounding in the corner", "rg-run"], ["65'", "Try given", "Ireland 21-13. Conversion to come", "rg-roar"], ["67'", "Penalty", "Wales kick to the corner", "rg-maul"]]
};

/* the next things on, for the reminders rail */
const COMINGUP = [
  { t: "Wales v Ireland", s: "Six Nations", when: "17:15", ch: "BBC One", img: "rg-wales", id: "rg-ko" },
  { t: "England v Netherlands", s: "Nations League", when: "19:45", ch: "BBC One", img: "fb-debate", id: "fb-ko" },
  { t: "Match of the Day", s: "Nations League special", when: "22:30", ch: "BBC One", img: "fb-celebrate", id: "motd" },
  { t: "The Ashes, day 4", s: "Test Match Special", when: "Sun 10:30", ch: "Radio 5 Sports Extra", img: "ck-squad", id: "ck-d4" },
  { t: "Wimbledon, day 7", s: "Middle Sunday", when: "Sun 11:00", ch: "BBC Two", img: "tn-smile", id: "tn-d7" }
];


/* ---------------------------------------------------------------------------
   Articles. Tapping a story opens it; reactions, comments and share stay as
   overlays so nobody loses the live page to leave a heart.
   ------------------------------------------------------------------------- */
const ARTICLES = {
  w100: {
    kicker: "Wimbledon · 100 years on the BBC", title: "From a hut beside Centre Court to eighteen courts in your pocket",
    byline: "BBC Sport · from the archive", read: "6 min read", hero: "ar-court",
    heroCap: "A men's singles match on an early Wimbledon grass court, in front of a packed stand",
    sport: "tennis", comments: "1.2k", likes: "8.4k", shares: "640",
    blocks: [
      ["p", "In 1927 the BBC put a commentator in a small hut beside Centre Court and let him describe what he saw. A hundred years later you can watch any of eighteen courts on a phone, pick your commentary, and be told when the match you are not watching becomes the one to see."],
      ["p", "Television followed ten years after radio. On 21 June 1937 a single camera sent pictures of Centre Court to the few thousand London homes that owned a set. The coverage was short, a matter of minutes, and it was not even listed in that week's schedule. By the next summer it ran for hours."],
      ["img", "ar-debut", "A poster marking the first televised Championships in June 1937: three outside broadcast vans for about twenty-five minutes of tennis a day"],
      ["h", "Moving the camera"],
      ["p", "Outside broadcasting was new enough that the distance from the transmitter decided what could be shown at all. In 1939 the cameras moved to the end of the court, which is where the main camera still sits. Then the war stopped television altogether, and Wimbledon came back with it in 1946."],
      ["img", "ar-notice", "A listing from the late 1930s, announcing that the experiment of televising Centre Court would carry on through the week"],
      ["p", "The tennis had to share. In 1948 and 1949 the Test at Lord's took priority on the same afternoons, which meant very little Wimbledon on screen in those two summers. It is not the last time the two have wanted the same Saturday."],
      ["img", "ar-lords", "Wimbledon and Lord's on the same afternoon, as the papers put it"],
      ["h", "Colour, and after"],
      ["p", "In July 1967 Wimbledon was chosen to launch colour television in Britain on BBC Two, and the grass turned green. Dan Maskell's commentary carried the next three decades. In 2011 the final was used for the BBC's first attempt at a 3D broadcast."],
      ["img", "ar-ident", "BBC Television presents: the opening titles viewers knew for years"],
      ["p", "Counted by the number of times it has been on air, the Championships are the 38th most broadcast programme in the BBC's history: 2,304 broadcasts between 1937 and 2021, across BBC One, BBC Two and the pre-war television service."],
      ["img", "ar-table", "Wimbledon on BBC television by timeslot, day, channel and year, 1937 to 2021"],
      ["h", "The programmes"],
      ["p", "For the fans who could not get a ticket, the official magazine was the next best thing: previews, player profiles and the order of play, with a cover star who would be the talk of the fortnight."],
      ["img", "ar-mag93", "The official BBC Sports magazine for Wimbledon 1993"],
      ["img", "ar-mag99", "Wimbledon 99, with the home favourites on the cover"],
      ["p", "What a hundred years of coverage adds up to is a habit. The first radio listeners tuned in because they could not be there. The job now is the same, with more courts, more choice, and fewer reasons to miss the moment that matters."]
    ]
  },
  "st-buildup": {
    kicker: "Ashes · Day 3", title: "England start day three 224 behind at Lord's", byline: "BBC Sport", read: "3 min read",
    hero: "ck-squad", heroCap: "The England Test squad", sport: "cricket", comments: "418", likes: "5k", shares: "204",
    blocks: [
      ["p", "England resume on 148-3, still 224 runs short of Australia's 372, and 25 short of saving the follow-on. Root and Brook are the not-out batters, and both got through the last hour of day two without much alarm."],
      ["p", "The forecast is the complication. Cloud is expected over St John's Wood until lunch, and the second new ball is due in the first hour. If England are still batting at tea, the draw comes into view."],
      ["img", "ck-ashsquad", "The England squad named for the series"],
      ["p", "Test Match Special is on from 10:30 on Radio 5 Sports Extra and BBC Sounds, with ball-by-ball text on this page."]
    ]
  },
  "st-live": {
    kicker: "Wimbledon · Court 2", title: "Raducanu has three break points and the grounds are emptying towards Court 2", byline: "BBC Sport", read: "2 min read",
    hero: "tn-tracking", heroCap: "Raducanu on the baseline, Court 2", sport: "tennis", comments: "262", likes: "3k", shares: "123",
    blocks: [
      ["p", "Raducanu took the first set 6-4 and is 0-40 up on Vondroušová's serve at 4-5 in the second. Win any one of the next three points and the set is level at five games all."],
      ["p", "The story of the match has been second serve. Vondroušová has won nine points on hers all set, and every one of her service games since the opener has gone to deuce or worse."],
      ["img", "tn-stretch", "Raducanu stretches for a backhand"],
      ["p", "Court 2 is live on BBC iPlayer and the BBC Sport app, with commentary on Radio 5 Sports Extra."]
    ]
  },
  "st-companion": {
    kicker: "Wimbledon · Court 2", title: "Raducanu three points from levelling it, and Court 2 is filling up", byline: "BBC Sport", read: "2 min read",
    hero: "tn-smile", heroCap: "Raducanu at the All England Club", sport: "tennis", comments: "188", likes: "2k", shares: "96",
    blocks: [
      ["p", "While BBC One stays with Alcaraz and Musetti on Centre Court, the match of the afternoon has moved to Court 2. Raducanu has three break points at 4-5 in the second set."],
      ["p", "Vondroušová has won nine points on her second serve all set. The stands on Court 2 were half empty at the start of the set and are full now."],
      ["img", "tn-plan", "Raducanu on her Wimbledon plans"]
    ]
  },
  "st-fulltime": {
    kicker: "The day in one line", title: "Root unbeaten on 148, Raducanu through, and Ireland get the bonus point with a minute left",
    byline: "BBC Sport", read: "4 min read", hero: "ck-lords", heroCap: "England celebrate at Lord's", sport: "cricket", comments: "902", likes: "11k", shares: "477",
    blocks: [
      ["p", "At Lord's, Root batted through the day to finish unbeaten on 148 and England saved the follow-on with eleven runs to spare. They trail by 11 going into day four."],
      ["img", "ck-root", "Root celebrates his century"],
      ["p", "At Wimbledon, Raducanu broke at 4-5 in the second set and won in straight sets, 6-4, 7-5, to reach the fourth round on the middle Sunday."],
      ["img", "tn-best", "Raducanu after match point"],
      ["p", "In Cardiff, Ireland's fourth try came with a minute left and took the bonus point, keeping their title hopes alive into the final round. And at Wembley, England beat the Netherlands 2-1."],
      ["img", "rg-roar", "Ireland at the final whistle"]
    ]
  },
  "sp-fb-explain": {
    kicker: "Nations League", title: "What tonight at Wembley decides", byline: "BBC Sport", read: "3 min read",
    hero: "fb-kane", heroCap: "England and the Netherlands in their last meeting", sport: "football", comments: "344", likes: "2.9k", shares: "150",
    blocks: [
      ["p", "England go into the last round of the group level on points with the Netherlands. The group winner goes through to the finals next June, and the runner-up plays off to stay in League A."],
      ["p", "Goal difference is close enough that a draw leaves both sides depending on Spain and Italy, who kick off at the same time in Madrid."],
      ["h", "Where to follow it"],
      ["p", "The match is on BBC One and iPlayer from 19:00, with commentary on 5 Live. The live page has the stats, the conversation and a catch-up if you arrive late."]
    ]
  },
  "sp-fb-press": {
    kicker: "Football · Analysis", title: "How England have changed the way they play out from the back", byline: "BBC Sport", read: "4 min read",
    hero: "fb-xi", heroCap: "England line up before kick-off", sport: "football", comments: "512", likes: "4.1k", shares: "230",
    blocks: [
      ["p", "England start more of their attacks from the goalkeeper than they did a year ago. The centre-backs split wide, a midfielder drops between them, and the full-backs push on."],
      ["p", "It asks a lot of the midfielder who drops. Against a side that presses as high as the Netherlands, one loose pass there is a chance for the other team."],
      ["p", "Watch where Rice picks the ball up in the first ten minutes. If it is on the edge of his own area, the plan is on."]
    ]
  },
  "sp-ck-slope": {
    kicker: "The Ashes · Explainer", title: "How the Lord's slope changes the way England bowl", byline: "BBC Sport", read: "3 min read",
    hero: "ck-ball", heroCap: "A new ball at Lord's", sport: "cricket", comments: "281", likes: "3.3k", shares: "190",
    blocks: [
      ["p", "The ground at Lord's falls about two and a half metres from one side to the other. From the Pavilion End the slope takes the ball away from a right-handed batter; from the Nursery End it brings it back in."],
      ["p", "Bowlers who move the ball away from the bat usually want the Pavilion End, and bowlers who bring it back prefer the Nursery End. Captains plan their spells around it."],
      ["p", "Listen out for which end the second new ball is taken from. Test Match Special will tell you, and why."]
    ]
  },
  "sp-tn-grass": {
    kicker: "Wimbledon · Analysis", title: "What the first week's grass tells you about the second", byline: "BBC Sport", read: "3 min read",
    hero: "tn-stretch", heroCap: "Stretching for a backhand on worn grass", sport: "tennis", comments: "197", likes: "2.2k", shares: "88",
    blocks: [
      ["p", "By the middle weekend the baselines on the outside courts are worn to bare earth. The ball sits up a little more there and skids a little less, which suits players who like to rally."],
      ["p", "The middle of the court stays green for longer, so serve and volley still has its moments. In the second week, watch where the returners stand: usually further back."],
      ["p", "Every court is live on BBC iPlayer and the BBC Sport app."]
    ]
  },
  "sp-rg-maul": {
    kicker: "Six Nations · Analysis", title: "Why the Wales maul keeps winning penalties", byline: "BBC Sport", read: "3 min read",
    hero: "rg-maul", heroCap: "The Wales pack drive a maul", sport: "rugby", comments: "366", likes: "3.8k", shares: "171",
    blocks: [
      ["p", "Wales have won more penalties from mauls than any other side in this Six Nations. The drive starts at the line-out, but the work happens in the second before the ball is caught, when the lifters and the players behind them bind."],
      ["p", "Ireland defend mauls by getting a player through the middle before it forms. Referees watch that moment closely, and it tends to decide whose penalty it is."],
      ["p", "Scrum V has the full breakdown, with the line-out calls, on BBC iPlayer."]
    ]
  },
  "sp-rg-fly": {
    kicker: "Six Nations", title: "Two fly-halves and a title race", byline: "BBC Sport", read: "2 min read",
    hero: "rg-flyhalves", heroCap: "The two fly-halves in Cardiff", sport: "rugby", comments: "140", likes: "1.6k", shares: "64",
    blocks: [
      ["p", "The last two rounds could come down to goal-kicking. Both fly-halves in Cardiff have landed better than eight kicks in ten this championship."],
      ["p", "With the roof closed there is no wind to allow for, which usually favours the kickers and punishes indiscipline."],
      ["p", "Follow it on BBC One, with commentary on 5 Live and in Welsh on Radio Cymru."]
    ]
  }
};

/* the programme reader, a page at a time */
const READER = [
  ["ar-mag93", "1993", "The official BBC Sports magazine for the Championships, on sale at £2.95"],
  ["ar-mag99", "1999", "Wimbledon 99, in association with the All England Club"],
  ["ar-debut", "1937", "A poster marking the first live television pictures from Wimbledon, 21 June 1937"],
  ["ar-notice", "1930s", "Televising the Centre Court: the listing for the second week of the experiment"],
  ["ar-lords", "From the papers", "You can spend the day at Wimbledon and Lord's"],
  ["ar-table", "1937 to 2021", "Every year of Wimbledon on BBC television, counted"]
];

/* the notifications a fan would actually get today, newest first */
const NOTIFS = {
  buildup: [
    ["remind", "Wimbledon starts at 11:00", "18 courts in play. Raducanu is on Court 2, not before 13:00.", "Now", "tennis"],
    ["cricket", "TMS is on air", "Day 3 from Lord's. England 148-3, 224 behind.", "10:30", "cricket"],
    ["poll", "Your prediction is locked in", "England to avoid the follow-on. Settles today.", "Yesterday", null]
  ],
  live: [
    ["spark", "Court 2 is the one to watch", "Raducanu has three break points at 4-5.", "Now", "tennis"],
    ["goal", "England 1-0 Netherlands", "Saka, 52 minutes.", "16m", "football"],
    ["cricket", "Root reaches 100", "His second Ashes hundred at Lord's.", "34m", "cricket"],
    ["chat", "Kat F replied to you", "Switched from Centre for this. Right call.", "41m", null]
  ],
  companion: [
    ["tv", "Your TV and phone are paired", "Following BBC One on Living room TV. Your phone waits for the picture.", "Now", null],
    ["spark", "Worth a switch: Court 2", "Raducanu has three break points while your TV is on Centre Court.", "1m", "tennis"],
    ["poll", "The big call closes at the changeover", "Should BBC One switch to Court 2?", "3m", "tennis"]
  ],
  fulltime: [
    ["tick", "Your day is scored", "41 of 55. Your best day of the Championships.", "Now", null],
    ["play", "Highlights are ready", "England v Netherlands, and the match in 60 seconds.", "12m", "football"],
    ["remind", "Tomorrow: the middle Sunday", "Raducanu in the fourth round, not before 14:00.", "20m", "tennis"]
  ]
};

const NOTIFTYPES = [
  ["start", "When a match starts", "One nudge, for things you follow", true],
  ["key", "Goals, wickets, breaks and tries", "Held back to match your TV when paired", true],
  ["switch", "Worth switching to", "When something you are not watching gets good", true],
  ["settle", "When your predictions settle", "", true],
  ["reply", "Replies to your comments", "", false]
];

/* ---------------------------------------------------------------------------
   Who you watch with. The picture is the same; the voice over it is a
   choice. BBC commentary, the radio call synced to the picture, a presenter
   or creator watching along, or no voice at all.
   [id, short label, name, line, group, initials, colour]
   ------------------------------------------------------------------------- */
const VOICES = {
  f1: [
    ["radio", "5 Sports Extra", "5 Sports Extra commentary", "Live from Baku, with live timing", "BBC commentary", "", ""]
  ],
  football: [
    ["bbc", "BBC One", "BBC One commentary", "The match commentary team, as broadcast", "BBC commentary", "", ""],
    ["radio", "5 Live", "5 Live commentary", "The radio call, held back to match your picture", "BBC commentary", "", ""],
    ["host", "Chapman", "Mark Chapman watchalong", "5 Live Sport, reacting live and reading your messages", "Watch with", "MC", "#E4002B"],
    ["creator", "The Terrace", "The Terrace", "Fan channel watchalong · 410k followers", "Watch with", "TT", "#7A3FD1"],
    ["crowd", "Crowd", "Crowd only", "No commentary. Just Wembley", "No voice", "", ""],
    ["ad", "Described", "Audio described", "Commentary that says what is on screen", "No voice", "", ""]
  ],
  tennis: [
    ["bbc", "BBC", "BBC commentary", "The Court 2 commentary team", "BBC commentary", "", ""],
    ["radio", "5 Sports Extra", "5 Sports Extra", "The radio call, held back to match your picture", "BBC commentary", "", ""],
    ["creator", "Baseline Club", "Baseline Club", "Creator watchalong · 180k followers", "Watch with", "BC", "#1E8C5A"],
    ["crowd", "Court 2", "Court sound only", "Ball, strings and the crowd", "No voice", "", ""],
    ["ad", "Described", "Audio described", "Commentary that says what is on screen", "No voice", "", ""]
  ],
  rugby: [
    ["bbc", "BBC One", "BBC One commentary", "The match commentary team, as broadcast", "BBC commentary", "", ""],
    ["radio", "5 Live", "5 Live commentary", "The radio call, held back to match your picture", "BBC commentary", "", ""],
    ["host", "Scrum V", "Scrum V watchalong", "BBC Wales, in Welsh and English", "Watch with", "SV", "#C8102E"],
    ["creator", "Ruck & Maul", "Ruck & Maul", "Creator watchalong · 95k followers", "Watch with", "RM", "#128D51"],
    ["crowd", "Crowd", "Crowd only", "No commentary. The roof is closed", "No voice", "", ""],
    ["ad", "Described", "Audio described", "Commentary that says what is on screen", "No voice", "", ""]
  ],
  cricket: [
    ["bbc", "TMS", "Test Match Special", "Ball by ball, with the chat", "BBC commentary", "", ""],
    ["radio", "Ball by ball", "TMS, ball by ball only", "The call on each delivery, none of the cake", "BBC commentary", "", ""],
    ["creator", "Third Man", "Third Man Pod", "Creator listen-along · 60k followers", "Listen with", "3M", "#1A3A6B"]
  ]
};

/* the experts and the voices around a match. Answers are summarised by
   topic and played as audio from the show, never written up as quotes */
const PUNDITS = {
  football: {
    hosts: [
      ["MC", "Mark Chapman", "5 Live Sport", "On air now", "#E4002B", "host"],
      ["DR", "Dan Roan", "BBC Sports Editor", "Answering after the match", "#3B3B3B", null],
      ["TT", "The Terrace", "Fan channel · 410k", "Watching along", "#7A3FD1", "creator"]
    ],
    qs: [["Why has Palmer come off with twenty to go?", "Rav K", "1.2k"], ["If England hold on, is this the Euros side?", "Jess M", "860"], ["Who is on penalties if Kane goes off?", "Tom O", "402"]],
    answered: [["Mark Chapman", "On whether England should sit on a one-goal lead", "0:48"], ["Dan Roan", "On Wembley ticket prices and the empty seats", "1:12"]]
  },
  tennis: {
    hosts: [
      ["5S", "5 Sports Extra", "Court 2 commentary", "On air now", "#007A78", null],
      ["DR", "Dan Roan", "BBC Sports Editor", "Q&A at 18:00", "#3B3B3B", null],
      ["BC", "Baseline Club", "Creator · 180k", "Watching along", "#1E8C5A", "creator"]
    ],
    qs: [["Why is her second serve so much stronger this year?", "Kat F", "940"], ["Can Court 2 get a roof before the centenary?", "Olly B", "512"], ["Who does the winner play on Sunday?", "Ellie W", "301"]],
    answered: [["5 Sports Extra", "On why Court 2 fills up faster than Centre on a day like this", "0:36"], ["Dan Roan", "On the BBC's 100 years at the Championships", "1:40"]]
  },
  rugby: {
    hosts: [
      ["SV", "Scrum V", "BBC Wales", "Watching along", "#C8102E", "host"],
      ["DR", "Dan Roan", "BBC Sports Editor", "Answering after the match", "#3B3B3B", null],
      ["RM", "Ruck & Maul", "Creator · 95k", "Watching along", "#128D51", "creator"]
    ],
    qs: [["How long can a TMO review actually take?", "Ciara N", "780"], ["Does a losing bonus point still matter for Wales?", "Huw R", "455"], ["Why kick to the corner and not the posts?", "Liam D", "260"]],
    answered: [["Scrum V", "On the Wales maul and why it keeps winning penalties", "0:52"]]
  },
  cricket: {
    hosts: [
      ["TM", "Test Match Special", "Your messages on air", "On air now", "#1A3A6B", null],
      ["DR", "Dan Roan", "BBC Sports Editor", "At stumps", "#3B3B3B", null],
      ["3M", "Third Man Pod", "Creator · 60k", "Listening along", "#1A3A6B", "creator"]
    ],
    qs: [["Should England take the new ball straight away?", "Dave P", "1.1k"], ["Is this Root's best Ashes innings?", "Neil C", "730"], ["What does a draw do to the series?", "Priya L", "290"]],
    answered: [["Test Match Special", "On the second new ball and who takes it", "1:05"]]
  }
};

/* ---------------------------------------------------------------------------
   My Sport: the people and teams you follow along the top, then one feed
   of everything they touch, articles, live games, shorts, quizzes and
   the experts, ranked for you. Tap a face to narrow the feed to them.
   follows: [id, name, kind, img or initials, colour, new items]
   ------------------------------------------------------------------------- */
const MYSPORT = {
  follows: [
    ["eng-cricket", "England Cricket", "Team", "cr-eng-ck", "#1A3A6B", 4],
    ["raducanu", "Emma Raducanu", "Player", "tn-smile", "#BB1919", 3],
    ["england", "England", "Team", "cr-eng-fb", "#E8F0FC", 2],
    ["root", "Joe Root", "Player", "ck-root", "#1A3A6B", 2],
    ["wales", "Wales", "Team", "cr-wal", "#C8102E", 1],
    ["chapman", "Mark Chapman", "Presenter", "MC", "#E4002B", 1],
    ["roan", "Dan Roan", "Sports Editor", "DR", "#3B3B3B", 0],
    ["terrace", "The Terrace", "Creator", "TT", "#7A3FD1", 2],
    ["wimbledon", "Wimbledon", "Event", "ar-court", "#1E6B3A", 3]
  ],
  /* kind, tags, and what each card needs. "open" is an event id, "article" an
     ARTICLES key, "play" an index into DROP */
  feed: [
    { k: "article", tags: ["raducanu", "wimbledon"], article: "st-live", img: "tn-tracking", title: "Raducanu has three break points and the grounds are emptying towards Court 2", tag: "Tennis", ago: "12m ago", hero: true },
    { k: "live", tags: ["eng-cricket", "root"], open: "cricket" },
    { k: "article", tags: ["eng-cricket", "root"], article: "st-buildup", img: "ck-squad", title: "England start day three 224 behind at Lord's", tag: "Cricket", ago: "5h ago" },
    { k: "short", tags: ["england"], play: 6 },
    { k: "quiz", tags: ["eng-cricket", "root"], open: "cricket", title: "Who was the last England batter to score an Ashes hundred at Lord's?", tag: "Ashes quiz", ago: "Play along" },
    { k: "qa", tags: ["chapman", "england"], open: "football", who: "Mark Chapman", title: "On whether England should sit on a one-goal lead", dur: "0:48", tag: "Answered on air" },
    { k: "live", tags: ["england", "chapman", "terrace"], open: "football" },
    { k: "short", tags: ["eng-cricket"], play: 1 },
    { k: "article", tags: ["wimbledon", "raducanu"], article: "w100", img: "ar-court", title: "From a hut beside Centre Court to eighteen courts in your pocket", tag: "Wimbledon · 100 years", ago: "1d ago" },
    { k: "live", tags: ["wales"], open: "rugby" },
    { k: "qa", tags: ["roan", "wimbledon"], open: "tennis", who: "Dan Roan", title: "On the BBC's 100 years at the Championships", dur: "1:40", tag: "Answered on air" },
    { k: "short", tags: ["raducanu", "wimbledon"], play: 4 },
    { k: "watchwith", tags: ["terrace", "england"], open: "football", who: "The Terrace", title: "Watching England v Netherlands along with 18,200 others", tag: "Creator watchalong" },
    { k: "short", tags: ["wales"], play: 8 },
    { k: "short", tags: ["eng-cricket"], play: 10 }
  ]
};

/* iPlayer on the TV: more to watch around the match. Titles are placeholders */
const TVMORE = [
  { t: "Road to Wembley", s: "Documentary · England's qualifying campaign", img: "fb-xi", k: "Sport" },
  { t: "The Ashes: Lord's Stories", s: "Ten great Tests at the home of cricket", img: "ck-lords", k: "Sport" },
  { t: "Wimbledon: 100 Years on the BBC", s: "From the archive", img: "ar-court", k: "Sport" },
  { t: "Six Nations Rewind", s: "Every try from the last round", img: "rg-run", k: "Sport" },
  { t: "Match of the Day", s: "Tonight, 22:30", img: "fb-celebrate", k: "Sport" }
];


/* ---------------------------------------------------------------------------
   The sport pages on the website, laid out like BBC Sport today: the sport
   nav, a grey sub-nav, the title and Follow, then a compact strip of the
   day's scores and fixtures above the stories, so the stories are still
   the first thing you see.
   fixtures: the featured match comes from EVENTS (feat holds its scores per
     lifecycle state); the rest are [status, score a, score b, note] per state,
     or "all" for every state.
   Stories marked real are headlines and pictures from the BBC Sport site
   in September 2026, used to show the page as it looks now; the prototype
   does not reproduce the articles themselves. Posts are credited to a role,
   not a named journalist.
   ------------------------------------------------------------------------- */
const SPORTPAGES = {
  football: {
    name: "Football", nav: "Football", follow: true,
    tabs: ["Scores & Fixtures", "Tables", "Predictor", "Champions League", "Women's Football", "Teams", "Leagues & Cups", "Gossip", "Top Scorers", "Quizzes", "Fantasy"],
    feat: { buildup: ["", "", "19:45"], live: ["1", "0", "68'"], fulltime: ["2", "1", "FT"] },
    fixtures: [
      { a: "Chelsea", b: "Arsenal", comp: "Women's Super League", st: { all: ["done", "3", "1", "FT"] } },
      { a: "Scotland", b: "Norway", comp: "Nations League", st: { buildup: ["live", "1", "0", "61'"], live: ["done", "2", "0", "FT"], fulltime: ["done", "2", "0", "FT"] } },
      { a: "Spain", b: "Italy", comp: "Nations League", st: { buildup: ["soon", "", "", "19:45"], live: ["live", "0", "0", "68'"], fulltime: ["done", "1", "1", "FT"] } },
      { a: "Wales", b: "Iceland", comp: "Nations League", st: { buildup: ["soon", "", "", "19:45"], live: ["live", "1", "1", "67'"], fulltime: ["done", "2", "1", "FT"] } },
      { a: "Northern Ireland", b: "Denmark", comp: "Nations League", st: { all: ["soon", "", "", "Tomorrow 17:00"] } }
    ],
    listen: ["5 Live Sport", "Build-up, commentary and the phone-in on BBC Radio 5 Live"],
    mostRead: [["What tonight at Wembley decides", "sp-fb-explain"], ["England should stop trying to replicate Spain - Gordon", "bb-gordon"],
      ["Man Utd selling Old Trafford turf cubes for £125", "bb-oldtrafford"], ["How England have changed the way they play out from the back", "sp-fb-press"], ["Chelsea win Champions League opener but Walsh injured", "bb-chelseaw"]],
    top: [
      { article: "sp-fb-explain", img: "fb-kane", title: "What tonight at Wembley decides", stand: "Level on points with the Netherlands, with Spain and Italy playing at the same time in Madrid", tag: "Nations League", ago: "1h", comments: "344" },
      { real: true, id: "bb-gordon", img: "bb-gordon", title: "England should stop trying to replicate Spain - Gordon", tag: "England Men", ago: "3h", comments: "242",
        stand: "Anthony Gordon says that controlling games is not in the \"English DNA\" but the Three Lions could still win major tournaments if they stop \"trying to replicate Spain\"." },
      { article: "sp-fb-press", img: "fb-xi", title: "How England have changed the way they play out from the back", tag: "Analysis", ago: "4h", comments: "512" },
      { real: true, id: "bb-mcburnie", img: "bb-mcburnie", title: "'Eternally grateful' McBurnie ready to show what Scotland have missed", tag: "Scotland Men", ago: "1h", comments: "33" },
      { real: true, id: "bb-chelseaw", img: "bb-chelseaw", title: "Chelsea win Champions League opener but Walsh injured", tag: "Women's Football", ago: "11h", comments: "123" },
      { real: true, id: "bb-oldtrafford", img: "bb-oldtrafford", title: "Man Utd selling Old Trafford turf cubes for £125", tag: "Man Utd", ago: "1h", comments: "508" },
      { real: true, id: "bb-dezerbi", img: "bb-dezerbi", title: "Why this break has come at the worst time for De Zerbi & Spurs", tag: "Tottenham", ago: "3h", comments: "" }
    ],
    more: [
      { k: "post", who: "Football correspondent", org: "BBC Sport", text: "Team news is due an hour before kick-off. Palmer or Trent on the right of midfield is still the question, and the answer will say a lot about how England want to handle the Dutch press.", ago: "2h", likes: "1.4k", comments: "212", ev: "football" },
      { k: "short", play: 5 },
      { k: "bite", who: "Dan Roan", org: "BBC Sports Editor", title: "On Wembley ticket prices and the empty seats", dur: "1:12", sub: "5 Live Sport · clip" },
      { k: "creator", who: "The Terrace", org: "Fan channel · 410k followers", av: "TT", col: "#7A3FD1", text: "Our watchalong goes live 30 minutes before kick-off. Bring your predicted XI. We will read out the worst ones.", ago: "3h", likes: "3.3k", comments: "480", ev: "football" },
      { k: "post", who: "Women's football reporter", org: "BBC Sport", text: "Stamford Bridge sold out for a WSL game again today. The move to bigger grounds is starting to look less like a gamble.", ago: "3h", likes: "2.1k", comments: "164", ev: "football" },
      { k: "short", play: 6 }
    ]
  },
  cricket: {
    name: "Cricket", nav: "Cricket", follow: true,
    tabs: ["Scores & Fixtures", "Results", "Video", "Counties", "Women's Cricket", "Teams", "The Hundred"],
    feat: { buildup: ["148-3", "372", "Day 3 · 11:00"], live: ["284-6", "372", "Day 3"], fulltime: ["361-8", "372", "Stumps"] },
    fixtures: [
      { a: "Lancashire", b: "Yorkshire", comp: "County Championship", st: { all: ["done", "241", "242-4", "Yorks won by 6 wkts"] } },
      { a: "England", b: "India", comp: "Women's ODI · Bristol", st: { buildup: ["soon", "", "", "13:00"], live: ["live", "261-7", "187-4", "38 ov"], fulltime: ["done", "261-7", "227", "Eng won by 34 runs"] } },
      { a: "Surrey", b: "Somerset", comp: "County Championship", st: { buildup: ["soon", "", "", "Day 3 · 11:00"], live: ["live", "312", "214-5", "Day 3"], fulltime: ["done", "312", "301-7", "Stumps"] } },
      { a: "Scotland", b: "Netherlands", comp: "One-day international", st: { all: ["soon", "", "", "Tomorrow 10:30"] } }
    ],
    listen: ["Test Match Special", "Ball by ball on Radio 5 Sports Extra and BBC Sounds"],
    mostRead: [["How the Lord's slope changes the way England bowl", "sp-ck-slope"], ["England start day three 224 behind at Lord's", "st-buildup"],
      ["County Championship: the title race after nine rounds", ""], ["Inside the Test Match Special box", ""], ["The Hundred: next summer's dates", ""]],
    top: [
      { article: "sp-ck-slope", img: "ck-ball", title: "How the Lord's slope changes the way England bowl", stand: "Why captains care which end the second new ball is taken from", tag: "The Ashes", ago: "2h", comments: "281" },
      { article: "st-buildup", img: "ck-squad", title: "England start day three 224 behind at Lord's", tag: "The Ashes", ago: "5h", comments: "418" },
      { article: "", img: "bb-woakes", title: "County Championship final round, day one: Bears bowl out Leics for 125", tag: "County cricket", ago: "1h", comments: "64" },
      { article: "", img: "ck-mic", title: "Inside the Test Match Special box", tag: "Test Match Special", ago: "1d", comments: "" },
      { article: "", img: "ck-lords", title: "Lord's in ten Ashes Tests", tag: "The Ashes", ago: "1d", comments: "92" },
      { article: "", img: "ck-wicket", title: "The series so far, in numbers", tag: "The Ashes", ago: "1d", comments: "" },
      { article: "", img: "ck-bat", title: "The Hundred: next summer's dates", tag: "The Hundred", ago: "2d", comments: "" }
    ],
    more: [
      { k: "post", who: "Cricket correspondent", org: "BBC Sport", text: "The second new ball is due in the first hour. At Lord's, that is usually when a day decides which way it is going.", ago: "5h", likes: "980", comments: "131", ev: "cricket" },
      { k: "short", play: 0 },
      { k: "bite", who: "Test Match Special", org: "Radio 5 Sports Extra", title: "On the second new ball and who takes it", dur: "1:05", sub: "Test Match Special · clip" },
      { k: "creator", who: "Third Man Pod", org: "Creator · 60k followers", av: "3M", col: "#1A3A6B", text: "New episode: every Lord's Test since 2000, ranked by how nervous it made us. Recorded before play, so no spoilers.", ago: "7h", likes: "1.1k", comments: "96", ev: "cricket" },
      { k: "post", who: "County cricket reporter", org: "BBC Sport", text: "Somerset have two spinners in at The Oval for the first time this season. On a dry pitch, it may be the right call.", ago: "5h", likes: "410", comments: "58", ev: "cricket" },
      { k: "short", play: 10 }
    ]
  },
  tennis: {
    name: "Tennis", nav: "Tennis", follow: true,
    tabs: ["Scores & Schedule", "Video", "Quizzes", "Calendar"],
    feat: { buildup: ["", "", "Court 2 · 3rd on"], live: ["6 4", "4 5", "Set 2"], fulltime: ["6 7", "4 5", "Won"] },
    fixtures: [
      { a: "Draper", b: "Rune", comp: "Men's singles · No.1 Court", st: { buildup: ["live", "7 2", "6 1", "Set 2"], live: ["done", "7 6 6", "6 4 3", "Won"], fulltime: ["done", "7 6 6", "6 4 3", "Won"] } },
      { a: "Alcaraz", b: "Musetti", comp: "Men's singles · Centre Court", st: { buildup: ["soon", "", "", "13:30"], live: ["live", "6 3", "3 2", "Set 2"], fulltime: ["done", "6 6 6", "3 4 2", "Won"] } },
      { a: "Sabalenka", b: "Andreeva", comp: "Women's singles · Centre Court", st: { buildup: ["soon", "", "", "Third on"], live: ["soon", "", "", "Next on"], fulltime: ["done", "6 6", "2 4", "Won"] } }
    ],
    listen: ["5 Sports Extra at Wimbledon", "Commentary from Court 2 and Centre Court"],
    mostRead: [["From a hut beside Centre Court to eighteen courts in your pocket", "w100"], ["Alcaraz on late finishes, missing Sinner and Laver Cup return", "bb-alcaraz"],
      ["What the first week's grass tells you about the second", "sp-tn-grass"], ["'Be comfortable in your own identity' - Agassi's advice to Raducanu", "bb-agassi"], ["GB dominate Ecuador to reach Davis Cup Finals", "bb-daviscup"]],
    top: [
      { article: "w100", img: "ar-court", title: "From a hut beside Centre Court to eighteen courts in your pocket", stand: "A hundred years of Wimbledon on the BBC, from the archive", tag: "Wimbledon · 100 years", ago: "1d", comments: "1.2k" },
      { real: true, id: "bb-alcaraz", img: "bb-alcaraz", title: "Alcaraz on late finishes, missing Sinner and Laver Cup return", tag: "Tennis", ago: "1h", comments: "31",
        stand: "Carlos Alcaraz discusses his US Open return, why he \"misses\" rival Jannik Sinner and his excitement for this year's Laver Cup." },
      { article: "sp-tn-grass", img: "tn-stretch", title: "What the first week's grass tells you about the second", tag: "Analysis", ago: "3h", comments: "197" },
      { real: true, id: "bb-agassi", img: "bb-agassi", title: "'Be comfortable in your own identity' - Agassi's advice to Raducanu", tag: "Tennis", ago: "1d", comments: "" },
      { real: true, id: "bb-keothavong", img: "bb-keothavong", title: "Keothavong 'can't fault' GB after BJK Cup loss to Czechs", tag: "Tennis", ago: "1d", comments: "353" },
      { real: true, id: "bb-daviscup", img: "bb-daviscup", title: "GB dominate Ecuador to reach Davis Cup Finals", tag: "Tennis", ago: "1d", comments: "" },
      { real: true, id: "bb-wheelchair", img: "bb-wheelchair", title: "Hewett & Reid star as GB win fifth World Team Cup", tag: "Tennis", ago: "1d", comments: "" }
    ],
    more: [
      { k: "post", who: "Tennis correspondent", org: "BBC Sport", text: "Three British players on show courts today. By mid-afternoon, Court 2 looks like the place to be.", ago: "5h", likes: "1.2k", comments: "140", ev: "tennis" },
      { k: "short", play: 2 },
      { k: "bite", who: "5 Sports Extra", org: "Court 2 commentary", title: "On why Court 2 fills up faster than Centre on a day like this", dur: "0:36", sub: "Radio 5 Sports Extra · clip" },
      { k: "creator", who: "Baseline Club", org: "Creator · 180k followers", av: "BC", col: "#1E8C5A", text: "We are watching Court 2 along with you from 14:00. Questions about second serves welcome. We have charts.", ago: "4h", likes: "890", comments: "77", ev: "tennis" },
      { k: "post", who: "Wimbledon reporter", org: "BBC Sport", text: "The queue in Wimbledon Park was past the golf course by 7am. Grounds passes went quickly, and there is still room on the Hill.", ago: "8h", likes: "760", comments: "92", ev: "tennis" },
      { k: "short", play: 11 }
    ]
  },
  rugby: {
    name: "Rugby Union", nav: "Rugby U", follow: false,
    tabs: ["Scores & Fixtures", "Tables", "Video", "All Teams", "English", "Scottish", "Welsh", "Irish"],
    feat: { buildup: ["", "", "17:15"], live: ["13", "16", "64'"], fulltime: ["16", "28", "FT"] },
    fixtures: [
      { a: "Italy", b: "Scotland", comp: "Six Nations", st: { buildup: ["live", "10", "17", "52'"], live: ["done", "16", "27", "FT"], fulltime: ["done", "16", "27", "FT"] } },
      { a: "France", b: "England", comp: "Six Nations", st: { buildup: ["soon", "", "", "20:00"], live: ["soon", "", "", "20:00"], fulltime: ["live", "13", "10", "48'"] } },
      { a: "Wales", b: "Ireland", comp: "Women's Six Nations", st: { all: ["soon", "", "", "Tomorrow 15:00"] } }
    ],
    listen: ["5 Live Rugby", "Commentary on BBC Radio 5 Live, and in Welsh on Radio Cymru"],
    mostRead: [["Why the Wales maul keeps winning penalties", "sp-rg-maul"], ["Will Saints reign again or new winners rise? - Prem Rugby club guide", "bb-saints"],
      ["Two fly-halves and a title race", "sp-rg-fly"], ["'Tragic but avoidable' - how serious is heat-death risk in sport?", "bb-heat"], ["What are Welsh sides' chances for new URC season?", "bb-welsh"]],
    top: [
      { article: "sp-rg-maul", img: "rg-maul", title: "Why the Wales maul keeps winning penalties", stand: "The work happens in the second before the ball is caught", tag: "Six Nations", ago: "2h", comments: "366" },
      { real: true, id: "bb-saints", img: "bb-saints", title: "Will Saints reign again or new winners rise? - Prem Rugby club guide", tag: "Premiership", ago: "2h", comments: "",
        stand: "BBC Sport commentators and reporters analyse how the 10 Prem Rugby clubs will fare ahead of the start of the 2026-27 season." },
      { article: "sp-rg-fly", img: "rg-flyhalves", title: "Two fly-halves and a title race", tag: "Six Nations", ago: "5h", comments: "140" },
      { real: true, id: "bb-irish", img: "bb-irish", title: "How Irish provinces are shaping up for new season", tag: "Irish Rugby", ago: "1h", comments: "" },
      { real: true, id: "bb-welsh", img: "bb-welsh", title: "What are Welsh sides' chances for new URC season?", tag: "Welsh Rugby", ago: "5h", comments: "9" },
      { real: true, id: "bb-edwards", img: "bb-edwards", title: "Edwards' Red Roses move inspired by late mother", tag: "England", ago: "23h", comments: "" },
      { real: true, id: "bb-baxter", img: "bb-baxter", title: "Baxter targeting Prem title win with Exeter", tag: "Premiership", ago: "6h", comments: "" }
    ],
    more: [
      { k: "post", who: "Rugby union correspondent", org: "BBC Sport", text: "The roof is closed at the Principality. Expect a quicker game, and plenty of the Wales maul.", ago: "3h", likes: "870", comments: "118", ev: "rugby" },
      { k: "short", play: 8 },
      { k: "bite", who: "Scrum V", org: "BBC Wales", title: "On the Wales maul and why it keeps winning penalties", dur: "0:52", sub: "Scrum V · clip" },
      { k: "creator", who: "Ruck & Maul", org: "Creator · 95k followers", av: "RM", col: "#128D51", text: "Watchalong starts at 16:45. We have a whiteboard and we are not afraid to use it.", ago: "4h", likes: "640", comments: "71", ev: "rugby" },
      { k: "story", real: true, id: "bb-heat", img: "bb-heat", title: "'Tragic but avoidable' - how serious is heat-death risk in sport?", tag: "Rugby Union", ago: "47min", comments: "" },
      { k: "post", who: "Welsh rugby reporter", org: "BBC Sport Wales", text: "Two changes to the Wales pack from last week, both in the back row. The line-out stays as it was.", ago: "6h", likes: "520", comments: "83", ev: "rugby" }
    ]
  }
};

/* ---------------------------------------------------------------------------
   More sports on the website, for breadth. Formula 1 has a live experience
   (first practice, radio only); Golf, Boxing and Athletics are story pages
   built from BBC Sport as it looks today.
   ------------------------------------------------------------------------- */
SPORTPAGES.f1 = {
  name: "Formula 1", nav: "Formula 1", follow: true, url: "formula1",
  tabs: ["Latest", "Results", "Standings", "Calendar", "Teams & Drivers", "Send us a question"],
  sessions: true,
  fixtures: [
    { a: "Second practice", comp: "Azerbaijan Grand Prix", st: { buildup: ["soon", "", "", "13:00"], live: ["soon", "", "", "13:00"], fulltime: ["soon", "", "", "13:00"] } },
    { a: "Qualifying", comp: "Azerbaijan Grand Prix", st: { all: ["soon", "", "", "Sat 13:00"] } },
    { a: "Race", comp: "Azerbaijan Grand Prix", st: { all: ["soon", "", "", "Sun 12:00"] } },
    { a: "Italian Grand Prix", comp: "Race · last time out", st: { all: ["done", "", "", "Result"] } }
  ],
  listen: ["5 Sports Extra", "Every session live on radio and BBC Sounds"],
  mostRead: [["The moment Antonelli knew he had been transformed as an F1 driver", "bb-antonelli"], ["Red Bull retain Hadjar for 2027 season", "bb-hadjar"],
    ["How to follow Azerbaijan Grand Prix on the BBC", "bb-f1city"], ["Why is Monaco staging a sprint race? F1 Q&A", "bb-monaco"], ["Red Bull's Hadjar to return at Azerbaijan Grand Prix", "bb-hadjar2"]],
  top: [
    { live: true, open: "f1", img: "bb-f1lead", title: "Azerbaijan Grand Prix first practice", tag: "Formula 1", ago: "", comments: "",
      stand: "Follow live text updates and listen to BBC Radio 5 Sports Extra commentary of first practice for the Azerbaijan Grand Prix." },
    { real: true, id: "bb-antonelli", img: "bb-antonelli", title: "The moment Antonelli knew he had been transformed as an F1 driver", tag: "Formula 1", ago: "18h", comments: "254" },
    { real: true, id: "bb-hadjar", img: "bb-hadjar", title: "Red Bull retain Hadjar for 2027 season", tag: "Formula 1", ago: "1d", comments: "187" },
    { real: true, id: "bb-f1city", img: "bb-f1city", title: "How to follow Azerbaijan Grand Prix on the BBC", tag: "Formula 1", ago: "20h", comments: "" },
    { real: true, id: "bb-chequered", img: "bb-chequered", title: "Azerbaijan GP Preview: Can Kimi Conquer Baku?", tag: "Chequered Flag", ago: "1d", comments: "", audio: "47 mins" },
    { real: true, id: "bb-monaco", img: "bb-monaco", title: "Why is Monaco staging a sprint race? F1 Q&A", tag: "Formula 1", ago: "2d", comments: "" },
    { real: true, id: "bb-hadjar2", img: "bb-hadjar2", title: "Red Bull's Hadjar to return at Azerbaijan Grand Prix", tag: "Formula 1", ago: "2d", comments: "" }
  ],
  more: [
    { k: "post", who: "F1 correspondent", org: "BBC Sport", text: "Low-drag wings everywhere in the pit lane this morning. Baku rewards straight-line speed more than anywhere since Monza.", ago: "2h", likes: "640", comments: "88", ev: "f1" },
    { k: "bite", who: "5 Sports Extra", org: "Live from Baku", title: "On why the castle section decides a lap here", dur: "0:44", sub: "5 Sports Extra · clip" },
    { k: "post", who: "F1 reporter", org: "BBC Sport", text: "Second practice at 13:00 is the one that matters for race pace. First practice is mostly about wing levels.", ago: "3h", likes: "310", comments: "41", ev: "f1" }
  ]
};

SPORTPAGES.golf = {
  name: "Golf", nav: "Golf", follow: false, noEvent: true,
  tabs: ["Leaderboards", "Calendar", "Video"],
  mostRead: [["Scotland's Scott promoted to PGA Tour with Ohio win", "bb-scott"], ["Elvira loses nerve as Spaun triumphs at Wentworth", "bb-elvira"],
    ["Eagle leaves McIlroy two off Wentworth lead", "bb-mcilroy1"], ["McIlroy in mix heading into weekend at Wentworth", "bb-mcilroy2"], ["Spaun wins PGA Championship after final round of 67", "bb-spaun"]],
  top: [
    { real: true, id: "bb-scott", img: "bb-scott", title: "Scotland's Scott promoted to PGA Tour with Ohio win", tag: "Golf", ago: "1d", comments: "",
      stand: "Scotland's Sandy Scott puts a career-threatening wrist injury behind him to earn promotion to the main PGA Tour for the first time after winning the Nationwide Children's Hospital Championship in Columbus, Ohio." },
    { real: true, id: "bb-elvira", img: "bb-elvira", title: "Elvira loses nerve as Spaun triumphs at Wentworth", tag: "Golf", ago: "3d", comments: "157" },
    { real: true, id: "bb-spaun", img: "bb-spaun", title: "Spaun wins PGA Championship after final round of 67", tag: "Golf", ago: "3d", comments: "", video: "2:53" },
    { real: true, id: "bb-relive", img: "bb-relive", title: "Relive final round of PGA Championship as Spaun wins after Elvira cracks", tag: "Golf", ago: "3d", comments: "" },
    { real: true, id: "bb-mcilroy1", img: "bb-mcilroy1", title: "Eagle leaves McIlroy two off Wentworth lead", tag: "Golf", ago: "4d", comments: "" },
    { real: true, id: "bb-mcilroy2", img: "bb-mcilroy2", title: "McIlroy in mix heading into weekend at Wentworth", tag: "Golf", ago: "5d", comments: "" }
  ],
  more: []
};

SPORTPAGES.boxing = {
  name: "Boxing", nav: "Boxing", follow: false, noEvent: true,
  tabs: ["Results & Schedule", "Calendar"],
  mostRead: [["Itauma 'humiliated' but may never lose again - Hrgovic", "bb-itauma"], ["GB boxers guaranteed three medals at Europeans", "bb-gbboxers"],
    ["O'Rourke sisters seal medals in Bulgaria", "bb-orourke"], ["Lopez ordered to defend world title v Catterall", "bb-lopez"], ["Why Cardiff is set to win race to host Fury-Joshua", "bb-furyaj"]],
  top: [
    { real: true, id: "bb-itauma", img: "bb-itauma", title: "Itauma 'humiliated' but may never lose again - Hrgovic", tag: "Boxing", ago: "6h", comments: "",
      stand: "Moses Itauma may never lose again if he can get over the \"humiliation\" of his IBF heavyweight title defeat, says Filip Hrgovic, who stunned the Briton in August." },
    { real: true, id: "bb-walsh", img: "bb-walsh", title: "Walsh and O'Rourkes advance but McConnell and Gallagher out", tag: "Boxing", ago: "15h", comments: "" },
    { real: true, id: "bb-gbboxers", img: "bb-gbboxers", title: "GB boxers guaranteed three medals at Europeans", tag: "Boxing", ago: "1d", comments: "" },
    { real: true, id: "bb-orourke", img: "bb-orourke", title: "O'Rourke sisters seal medals in Bulgaria", tag: "Boxing", ago: "1d", comments: "" },
    { real: true, id: "bb-lopez", img: "bb-lopez", title: "Lopez ordered to defend world title v Catterall", tag: "Boxing", ago: "2d", comments: "" },
    { real: true, id: "bb-furyaj", img: "bb-furyaj", title: "Why Cardiff is set to win race to host Fury-Joshua", tag: "Boxing", ago: "2d", comments: "" }
  ],
  more: []
};

SPORTPAGES.athletics = {
  name: "Athletics", nav: "Athletics", follow: false, noEvent: true,
  tabs: ["Results", "Calendar"],
  mostRead: [["Record prize fund for 2028 European Championships", "bb-hunter"], ["Ngetich breaks women-only half-marathon record", "bb-ngetich"],
    ["Hodgkinson dazzles to win Athlos 800m", "bb-hodgkinson"], ["Ingebrigtsen pipped to 5km road gold in Copenhagen", "bb-ingebrigtsen"], ["How the race they said women couldn't run took centre stage", "bb-womenrace"]],
  top: [
    { real: true, id: "bb-hunter", img: "bb-hunter", title: "Record prize fund for 2028 European Championships", tag: "Athletics", ago: "1d", comments: "",
      stand: "The European Athletics Championships will have a total record prize fund worth £3m when it takes place in Poland in 2028." },
    { real: true, id: "bb-ngetich", img: "bb-ngetich", title: "Ngetich breaks women-only half-marathon record", tag: "Athletics", ago: "3d", comments: "" },
    { real: true, id: "bb-hodgkinson", img: "bb-hodgkinson", title: "Hodgkinson dazzles to win Athlos 800m", tag: "Athletics", ago: "5d", comments: "", video: "3:14" },
    { real: true, id: "bb-ingebrigtsen", img: "bb-ingebrigtsen", title: "Ingebrigtsen pipped to 5km road gold in Copenhagen", tag: "Athletics", ago: "4d", comments: "" },
    { real: true, id: "bb-kenya", img: "bb-kenya", title: "The World Athletics Championships come to Kenya", tag: "More Than The Ore", ago: "5d", comments: "", audio: "25 mins" },
    { real: true, id: "bb-speedsuit", img: "bb-speedsuit", title: "Hodgkinson powers to Athlos win in speed suit", tag: "Athletics", ago: "5d", comments: "" },
    { real: true, id: "bb-womenrace", img: "bb-womenrace", title: "How the race they said women couldn't run took centre stage", tag: "Athletics", ago: "6d", comments: "" }
  ],
  more: []
};

/* the web My Sport page: what you follow, then a row for each */
const WEBMYSPORT = {
  chips: [["football", "Football"], ["cricket", "Cricket"], ["f1", "Formula 1"], ["rugby", "Rugby Union"], ["rugbyl", "Rugby League"],
    ["tennis", "Tennis"], ["golf", "Golf"], ["boxing", "Boxing"], ["athletics", "Athletics"], ["fbquiz", "Football Quizzes"], ["wc26", "FIFA World Cup 2026"]],
  extra: { rugbyl: { name: "Rugby League", follow: false }, fbquiz: { name: "Football Quizzes", follow: true }, wc26: { name: "FIFA World Cup 2026", follow: true } },
  rows: {
    football: [
      { article: "sp-fb-explain", img: "fb-kane", title: "What tonight at Wembley decides", tag: "Nations League", ago: "1h", comments: "344" },
      { real: true, id: "bb-ball", img: "bb-ball", title: "Portugal v Wales in Nations League", tag: "Football", ago: "19:00", comments: "" },
      { real: true, id: "bb-fulham", img: "bb-fulham", title: "'It has looked like we've turned a corner'", tag: "Fulham", ago: "4 minutes ago", comments: "" },
      { real: true, id: "bb-kaptein", img: "bb-kaptein", title: "Kaptein scores stunning winner for Chelsea", tag: "Women's Football", ago: "7 minutes ago", comments: "", video: "0:33" },
      { real: true, id: "bb-westham", img: "bb-westham", title: "'Break comes at the perfect time for West Ham'", tag: "West Ham", ago: "13 minutes ago", comments: "" }
    ],
    fbquiz: [
      { real: true, id: "bb-quiz66", img: "bb-quiz66", title: "Who am I? Guess Premier League star No 66", tag: "Premier League", ago: "3 hours ago", comments: "" },
      { real: true, id: "bb-quiz65", img: "bb-quiz65", title: "Who am I? Guess Premier League star No 65", tag: "Premier League", ago: "1 day ago", comments: "" },
      { real: true, id: "bb-quiz64", img: "bb-quiz64", title: "Who am I? Guess Premier League star No 64", tag: "Premier League", ago: "2 days ago", comments: "" },
      { real: true, id: "bb-quiz63", img: "bb-quiz63", title: "Who am I? Guess Premier League star No 63", tag: "Premier League", ago: "3 days ago", comments: "" },
      { real: true, id: "bb-quizwsl", img: "bb-quizwsl", title: "Who am I? Guess WSL star No 5", tag: "Women's Football", ago: "4 days ago", comments: "" }
    ],
    wc26: [
      { real: true, id: "bb-tuchel", img: "bb-tuchel", title: "FA to canvass England players in World Cup review", tag: "England Men", ago: "4 September", comments: "395" },
      { real: true, id: "bb-balogun", img: "bb-balogun", title: "Belgian FA still wants Balogun ban answers", tag: "Football", ago: "7 September", comments: "" },
      { real: true, id: "bb-infantino", img: "bb-infantino", title: "Uefa set to drop Fifa tournament boycott threat", tag: "World Cup", ago: "26 August", comments: "" },
      { real: true, id: "bb-paredes", img: "bb-paredes", title: "Argentina's Paredes banned for 10 games", tag: "World Cup", ago: "21 August", comments: "" },
      { real: true, id: "bb-wctransfers", img: "bb-wctransfers", title: "Players who turned World Cup heroics into big transfers", tag: "World Cup", ago: "6 August", comments: "141" }
    ]
  },
  fixturesTitle: { football: "UEFA Nations League Scores & Fixtures", cricket: "Cricket Scores & Fixtures", f1: "Azerbaijan Grand Prix sessions",
    rugby: "Six Nations Scores & Fixtures", tennis: "Wimbledon order of play" }
};

/* the website's sub-nav on the Sport home page */
const WEBHOMESUB = ["MOTD Predictor", "Quizzes", "Get BBC Sport App"];

/* more from around BBC Sport on the website home, as the site looks now */
const HOMEMORE = [
  { real: true, id: "bb-gordon", img: "bb-gordon", title: "England should stop trying to replicate Spain - Gordon", tag: "England Men", ago: "3h", comments: "242" },
  { real: true, id: "bb-oldtrafford", img: "bb-oldtrafford", title: "Man Utd selling Old Trafford turf cubes for £125", tag: "Man Utd", ago: "1h", comments: "502" },
  { real: true, id: "bb-alcaraz", img: "bb-alcaraz", title: "Alcaraz on late finishes, missing Sinner and Laver Cup return", tag: "Tennis", ago: "1h", comments: "31" },
  { real: true, id: "bb-dezerbi", img: "bb-dezerbi", title: "Why this break has come at the worst time for De Zerbi & Spurs", tag: "Tottenham", ago: "3h", comments: "" },
  { live: true, open: "f1", img: "bb-f1lead", title: "Azerbaijan Grand Prix first practice", tag: "Formula 1", ago: "", comments: "" },
  { real: true, id: "bb-heat", img: "bb-heat", title: "'Tragic but avoidable' - how serious is heat-death risk in sport?", tag: "Rugby Union", ago: "47min", comments: "" },
  { real: true, id: "bb-saints", img: "bb-saints", title: "Will Saints reign again or new winners rise? - Prem Rugby club guide", tag: "Premiership", ago: "2h", comments: "" },
  { real: true, id: "bb-chelseaw", img: "bb-chelseaw", title: "Chelsea win Champions League opener but Walsh injured", tag: "Women's Football", ago: "11h", comments: "123" }
];

/* ---------------------------------------------------------------------------
   Football in the live page's current design: Live Reporting, Scores,
   Tables, Line-ups, Match Stats, Watch & listen and Head-to-head, the same
   set through build-up, live and near-live. The group is invented for the
   prototype and adds up: England and the Netherlands go into the last round
   level on points and goal difference.
   ------------------------------------------------------------------------- */
(function () {
  var fb = EVENTS[0], B = fb.states.buildup, L = fb.states.live, C = fb.states.companion, F = fb.states.fulltime;
  var GROUP = "UEFA Nations League - League A - Group 3";

  B.headline = "Nations League: England unchanged for the Netherlands decider";
  B.watching = "4,210"; B.date = "Thu 24 Sep 2026"; B.group = GROUP;
  B.summary = ["England host the Netherlands in the last round of League A Group 3", "Level on points and goal difference: the winner tops the group",
    "Watch on BBC One and iPlayer from 19:00, or listen on 5 Live"];
  L.headline = "Saka strikes as England lead the Netherlands at Wembley"; L.date = B.date; L.group = GROUP;
  C.headline = L.headline; C.date = B.date; C.group = GROUP;
  F.headline = "England beat Netherlands 2-1 to top Nations League group"; F.hiddenHeadline = "England v Netherlands: highlights and reaction";
  F.date = B.date; F.group = GROUP;
  B.head.home.sub = ""; B.head.away.sub = "";
  B.head.venue = L.head.venue = C.head.venue = F.head.venue = "Wembley Stadium";
  B.prog = "Pre-match: England v Netherlands";
  L.prog = C.prog = "England v Netherlands"; F.prog = "Post-match: England v Netherlands";

  var tableBefore = { title: "League A Group 3", note: "Before tonight", rows: [
    ["Netherlands", 5, 5, 10, 3, 1, 1, 9, 4], ["England", 5, 5, 10, 3, 1, 1, 8, 3], ["Belgium", 5, -5, 4, 1, 1, 3, 4, 9], ["Hungary", 5, -5, 4, 1, 1, 3, 3, 8]] };
  var tableLive = { title: "League A Group 3", note: "As it stands", rows: [
    ["England", 6, 6, 13, 4, 1, 1, 9, 3], ["Netherlands", 6, 4, 10, 3, 1, 2, 9, 5], ["Belgium", 6, -5, 5, 1, 2, 3, 5, 10], ["Hungary", 6, -5, 5, 1, 2, 3, 4, 9]] };
  var tableFt = { title: "League A Group 3", note: "Final table", rows: [
    ["England", 6, 6, 13, 4, 1, 1, 10, 4], ["Netherlands", 6, 4, 10, 3, 1, 2, 10, 6], ["Belgium", 6, -4, 7, 2, 1, 3, 6, 10], ["Hungary", 6, -6, 4, 1, 1, 4, 4, 10]] };

  function scores(k) {
    return { id: "scores", label: "Scores", sections: [{ h: "UEFA Nations League Scores & Fixtures", panels: [{ t: "fixlist", ev: "football", date: "Thursday 24th September", state: k }] }] };
  }
  function tables(t) {
    return { id: "tables", label: "Tables", sections: [{ h: "UEFA Nations League Table", meta: "On Thursday 24th September", panels: [{ t: "gtable", groups: [t] }] }] };
  }
  var MGR = { England: "Thomas Tuchel", Netherlands: "Ronald Koeman" };
  function lineups(sub) {
    return { id: "lineups", label: "Line-ups", sections: [{ panels: [{ t: "pitch", sub: sub, teams: [
      { name: "England", manager: MGR.England, shape: "4-2-3-1", xi: XI_ENG },
      { name: "Netherlands", manager: MGR.Netherlands, shape: "4-3-3", xi: XI_NED }] }] }] };
  }
  function mstats(poss, rows) {
    return { id: "mstats", label: "Match Stats", sections: [{ h: "Match Stats", panels: [{ t: "mstats", a: "England", b: "Netherlands", ca: "ENG", cb: "NED", poss: poss, rows: rows }] }] };
  }
  var STREAMS_PRE = [["5live", "Pre-match: England v Netherlands", "BBC Radio 5 Live", "live"], ["5sx", "England v Netherlands: the Terrace watchalong", "BBC Sounds", "live"]];
  function watchlisten(streams, coming) {
    return { id: "watchlisten", label: "Watch & listen", sections: [
      { h: "Watch & listen", panels: [{ t: "streams", rows: streams }] },
      coming ? { h: "Coming up", panels: [{ t: "comingup", rows: coming }] } : null].filter(Boolean) };
  }
  var H2H = { id: "h2h", label: "Head-to-head", sections: [{ h: "Head to Head", panels: [{ t: "formguide", a: "England", b: "Netherlands",
    comp: "UEFA Nations League",
    la: [["W", "Hungary", "England", 2, "Hungary", 0, "Nations League"], ["W", "Belgium", "Belgium", 0, "England", 2, "Nations League"],
      ["D", "Netherlands", "Netherlands", 1, "England", 1, "Nations League"], ["W", "Belgium", "England", 3, "Belgium", 1, "Nations League"],
      ["L", "Hungary", "Hungary", 1, "England", 0, "Nations League"]],
    lb: [["W", "Hungary", "Netherlands", 2, "Hungary", 0, "Nations League"], ["L", "Belgium", "Belgium", 2, "Netherlands", 1, "Nations League"],
      ["D", "England", "Netherlands", 1, "England", 1, "Nations League"], ["W", "Belgium", "Netherlands", 2, "Belgium", 0, "Nations League"],
      ["W", "Hungary", "Hungary", 1, "Netherlands", 3, "Nations League"]],
    meet: [["Nations League", "Netherlands 1-1 England", "Amsterdam, last autumn"], ["Euro 2024 semi-final", "Netherlands 1-2 England", "Dortmund"]] }] }] };

  function reporting(extra, feed, clips, inv) {
    var s = [{ panels: [{ t: "involvecta", h: "Send us your views", ctx: "football", cta: "Contact form" }] }];
    if (clips) { s.push({ panels: [{ t: "cliprail", deck: clips }] }); }
    s = s.concat(extra || []);
    s.push({ h: "Live Reporting", ruleY: true, panels: [{ t: "sortrow" }, feed] });
    return { id: "live", label: "Live Reporting", sections: s };
  }

  var FEED_PRE = { t: "feed", author: "Gareth Vincent", posts: [
    ["18:47 BST", "Team news - England unchanged", ["Thomas Tuchel names the same XI that won in Hungary, with Palmer on the bench again and Saka on the right.",
      "The Netherlands make two changes. Weghorst leads the line and Aké returns at left-back.",
      "**England:** Pickford, Walker, Stones, Guéhi, Lewis-Skelly, Rice, Mainoo, Saka, Bellingham, Foden, Kane.",
      "**Netherlands:** Verbruggen, Geertruida, Van Dijk, De Vrij, Aké, De Jong, Reijnders, Xavi Simons, Gakpo, Malen, Weghorst."],
      false, null, null, null, null, "England v Netherlands (19:45 BST)", "England"],
    ["18:30 BST", "Good evening", ["Welcome along to our coverage of England's final Nations League group game against the Netherlands at Wembley.",
      "The two sides are level on points and goal difference, so tonight decides who tops League A Group 3 and goes through to next June's finals.",
      "We'll take you through all the build-up, action and reaction, but let's start with a look at the teams."],
      false, null, null, "bb-ball", "GETTY IMAGES", "England v Netherlands (19:45 BST)"]
  ]};

  B.tabs = [
    reporting(B.tabs[0].sections.filter(function (x) { return x.panels && x.panels[0].t === "countdown"; }), FEED_PRE, [[5, "fb-debate"], [6, "fb-palmer"], [7, "fb-celebrate", "The last time at Wembley"]]),
    B.tabs[1],
    scores("buildup"), tables(tableBefore), lineups("Confirmed at 18:45"),
    mstats([0, 0], [["Shots", 0, 0], ["Shots on target", 0, 0], ["Goalkeeper saves", 0, 0], ["Fouls committed", 0, 0], ["Corners", 0, 0]]),
    watchlisten(STREAMS_PRE, [["England v Netherlands, followed by post-match extra", "BBC One", "Watch here at 19:00"], ["England v Netherlands", "BBC Radio 5 Live", "Listen here at 19:45"],
      ["Match of the Day: Nations League special", "BBC One", "Watch here at 22:30"]]),
    H2H
  ];

  var liveFeed = { t: "feed", author: "Emma Sanders and Phil McNulty at Wembley", posts: FEED_FOOTBALL.posts };
  var liveSum = L.tabs[0].sections.filter(function (x) { return x.panels && (x.panels[0].t === "pundit" || x.h === "Key moments"); });
  L.tabs = [
    reporting([L.tabs[1].sections[1], L.tabs[1].sections[2]].concat(liveSum), liveFeed, [[7, "fb-kane", "Saka's opener, and the build-up to it"], [5, "fb-debate"], [6, "fb-palmer"]]),
    scores("live"), tables(tableLive), lineups("Saka 52'"),
    mstats([62, 38], [["Shots", 14, 6], ["Shots on target", 6, 2], ["Goalkeeper saves", 2, 5], ["Fouls committed", 9, 12], ["Corners", 7, 1]]),
    watchlisten([["5live", "England v Netherlands", "BBC Radio 5 Live", "live"], ["5sx", "England v Netherlands: the Terrace watchalong", "BBC Sounds", "live"]],
      [["Match of the Day: Nations League special", "BBC One", "Watch here at 22:30"]]),
    H2H
  ];

  var ftFeed = { t: "feed", author: "Emma Sanders and Phil McNulty at Wembley", posts: [
    ["21:42 BST", "FULL TIME: England 2-1 Netherlands", "England top the group and go through to next June's finals. A nervous last few minutes after Gakpo's header, but they held on.", true],
    ["88 mins", "GOAL! England 2-1 Netherlands", "Gakpo rises highest from a corner. Game on.", true],
    ["79 mins", "GOAL! England 2-0 Netherlands", "Saka's cross, Kane's header, back across Verbruggen.", true]
  ].concat(FEED_FOOTBALL.posts) };
  F.tabs = [
    reporting(F.tabs[0].sections, ftFeed, [[7, "fb-bellingham"], [7, "fb-celebrate", "The goals: Saka, Kane and Gakpo"], [5, "fb-debate"]]),
    F.tabs[1], F.tabs.filter(function (t) { return t.id === "ratings"; })[0],
    scores("fulltime"), tables(tableFt), lineups("Saka 52', Kane 79'"),
    mstats([55, 45], [["Shots", 19, 11], ["Shots on target", 8, 4], ["Goalkeeper saves", 3, 6], ["Fouls committed", 11, 14], ["Corners", 9, 3]]),
    watchlisten([["5live", "Post-match: England v Netherlands", "BBC Radio 5 Live", "live"]], [["Match of the Day: Nations League special", "BBC One", "Watch here at 22:30"]]),
    H2H
  ];

  /* the sport page fixture list gains tonight's other group game */
  SPORTPAGES.football.fixtures.splice(1, 0, { a: "Belgium", b: "Hungary", comp: "Nations League",
    st: { buildup: ["soon", "", "", "19:45"], live: ["live", "1", "1", "67'"], fulltime: ["done", "2", "1", "FT"] } });
})();


/* ---------------------------------------------------------------------------
   Football while it is on: the watch line, match stats in depth, the live
   text feed, and what each player has done so far.
   ------------------------------------------------------------------------- */
(function () {
  var fb = EVENTS[0], B = fb.states.buildup, L = fb.states.live, C = fb.states.companion, F = fb.states.fulltime;
  L.watch = C.watch = ["England v Netherlands, followed by post-match extra", "BBC One"];
  F.watch = ["Match of the Day: Nations League special", "BBC One"];
  L.summary = ["England 1-0 up through Saka's goal seven minutes after half-time", "Use the 'Watch live' button at the top of the page to watch BBC One coverage",
    "5 Live commentary is also available in the Watch & listen tab", "Get involved: use the yellow button on the page",
    "Netherlands yet to have a shot on target since the break"];

  function tab(id) { return function (t) { return t.id === id; }; }
  var ms = { live: L.tabs.filter(tab("mstats"))[0], ft: F.tabs.filter(tab("mstats"))[0], pre: B.tabs.filter(tab("mstats"))[0] };
  var p = ms.live.sections[0].panels[0];
  p.poss = [61.8, 38.2]; p.touches = [23, 7];
  p.deep = [["Attack", [["Shots", 14, 6], ["Shots on target", 6, 2], ["Big chances", 3, 1], ["Expected goals", 1.42, 0.38]]],
    ["Distribution", [["Total passes", 412, 251], ["Passing accuracy (%)", 89, 82], ["Crosses", 17, 6]]],
    ["Defence", [["Tackles", 11, 16], ["Interceptions", 7, 9], ["Clearances", 8, 21]]]];
  var q = ms.ft.sections[0].panels[0];
  q.poss = [55.3, 44.7]; q.touches = [31, 15];
  q.deep = [["Attack", [["Shots", 19, 11], ["Shots on target", 8, 4], ["Big chances", 5, 2], ["Expected goals", 2.31, 1.04]]],
    ["Distribution", [["Total passes", 588, 402], ["Passing accuracy (%)", 88, 83], ["Crosses", 24, 13]]],
    ["Defence", [["Tackles", 17, 22], ["Interceptions", 10, 12], ["Clearances", 14, 27]]]];
  ms.pre.sections[0].panels[0].touches = [0, 0];

  /* the automated live text, as the page carries it under the reporting */
  var TEXT_LIVE = [
    ["67'", "", "Attempt saved. Bukayo Saka (England) left footed shot from outside the box is saved in the top right corner by Bart Verbruggen (Netherlands). Assisted by Declan Rice."],
    ["64'", "", "Attempt saved. Xavi Simons (Netherlands) right footed shot from the centre of the box is saved in the bottom left corner by Jordan Pickford (England)."],
    ["61'", "", "Corner, England. Conceded by Virgil van Dijk."],
    ["52'", "Goal!", "Goal! England 1, Netherlands 0. Bukayo Saka (England) left footed shot from the right side of the box to the near post. Assisted by Harry Kane."],
    ["46'", "", "Second half begins England 0, Netherlands 0."],
    ["45'+2", "", "First half ends, England 0, Netherlands 0."],
    ["38'", "", "Declan Rice (England) is shown the yellow card for a bad foul."],
    ["24'", "", "Cody Gakpo (Netherlands) hits the bar with a right footed shot from outside the box. Assisted by Tijjani Reijnders."],
    ["12'", "", "Attempt saved. Harry Kane (England) right footed shot from outside the box is saved in the bottom right corner by Bart Verbruggen (Netherlands). Assisted by Jude Bellingham."],
    ["1'", "", "First half begins."]
  ];
  var TEXT_FT = [
    ["90'+4", "", "Match ends, England 2, Netherlands 1."],
    ["88'", "Goal!", "Goal! England 2, Netherlands 1. Cody Gakpo (Netherlands) header from the centre of the box to the top right corner following a corner."],
    ["79'", "Goal!", "Goal! England 2, Netherlands 0. Harry Kane (England) header from the centre of the box to the bottom left corner. Assisted by Bukayo Saka with a cross."],
    ["72'", "", "Substitution, Netherlands. Joshua Zirkzee replaces Wout Weghorst."]
  ].concat(TEXT_LIVE);
  L.tabs.push({ id: "livetext", label: "Live Text", sections: [{ h: "Live Text", panels: [{ t: "livetext", rows: TEXT_LIVE }] }] });
  F.tabs.push({ id: "livetext", label: "Live Text", sections: [{ h: "Live Text", panels: [{ t: "livetext", rows: TEXT_FT }] }] });

  /* the reporting from before kick-off stays at the bottom of the live feed */
  var rep = L.tabs[0].sections.filter(function (s) { return s.h === "Live Reporting"; })[0];
  var feed = rep.panels[1];
  feed.posts = feed.posts.concat([
    ["1 min", "KICK-OFF", ["We are off and running at Wembley.", "Win, and England top the group. Anything less and the Netherlands go into the draw for the finals ahead of them."],
      false, null, null, null, null, "England 0-0 Netherlands"],
    ["19:42 BST", "Anthems done", ["Wembley is full, and loud. Can England put in a performance to match?", "Kick-off shortly."], false]
  ]);

  /* what each player has done: goals, assists and cards by state */
  fb.events = {
    live: { goals: { Saka: 1 }, assists: { Kane: 1 }, cards: { Rice: "y" } },
    fulltime: { goals: { Saka: 1, Kane: 1, Gakpo: 1 }, assists: { Kane: 1, Saka: 1 }, cards: { Rice: "y" } }
  };
})();

/* the real stories open as a card-sized article: headline, picture and the
   standfirst as published, and nothing written on anyone's behalf */
(function () {
  var seen = {};
  function add(it, sport) {
    if (!it.real || seen[it.id]) { return; }
    seen[it.id] = true;
    ARTICLES[it.id] = {
      kicker: it.tag, title: it.title, byline: "BBC Sport", read: "From bbc.co.uk/sport",
      hero: it.img, heroCap: "", sport: sport, comments: it.comments || "0", likes: "", shares: "",
      blocks: (it.stand ? [["p", it.stand]] : []).concat([["p", "A story from the BBC Sport website as it looks today, placed here to show where the live experiences sit among everything else on the page. The article itself is not reproduced in the prototype."]])
    };
  }
  Object.keys(SPORTPAGES).forEach(function (k) {
    SPORTPAGES[k].top.concat(SPORTPAGES[k].more).forEach(function (it) { add(it, k); });
  });
  HOMEMORE.forEach(function (it) { add(it, ""); });
  Object.keys(WEBMYSPORT.rows).forEach(function (k) { WEBMYSPORT.rows[k].forEach(function (it) { add(it, k); }); });
})();

/* Before the start there are no moments yet. The match page leads with
   what is worth knowing beforehand, and ways into the rest of the page.
   rows: [label, main line, detail]. go: [label, tab id or action]. */
const PREMATCH = {
  football: { title: "Before kick-off", rows: [
      ["Form", "England W W D W L", "Three wins from the last five"],
      ["Form", "Netherlands W L D W L", "Two wins from the last five"],
      ["Last meeting", "England 2-1 Netherlands", "Euro 2024 semi-final, Dortmund"],
      ["Where it stands", "Level on points in the group", "The winner goes to the finals"]
    ], go: [["Team news and line-ups", "lineups"], ["Predict the score", "predict"], ["Form and head to head", "form"], ["Listen to the build-up", "listen"]] },
  cricket: { title: "Days one and two", rows: [
      ["Day 1", "Labuschagne 118", "Australia's top score in their 372"],
      ["Day 1", "Stokes 4-88", "Two of them in the evening session"],
      ["Day 2", "Australia 372 all out", "Smith 91, Carey 54, Tongue 3-71"],
      ["Day 2, close", "England 148-3", "Root 62*, Brook 11*, 224 behind"]
    ], go: [["Predict the morning session", "predict"], ["The scorecard so far", "scorecard"], ["Listen from 10:30 on TMS", "listen"]] },
  tennis: { title: "Before play", rows: [
      ["First round", "Raducanu won in straight sets", "Under an hour and a half"],
      ["Second round", "Raducanu won in three sets", "Came from a set down"],
      ["Today", "Court 2, third match on", "v Vondroušová, not before 15:00"]
    ], go: [["Today's order of play", "today"], ["Predict the match", "predict"], ["Her half of the draw", "draw"]] },
  rugby: { title: "Before kick-off", rows: [
      ["Ireland", "Played 4, won 3", "Need a bonus-point win and France to slip"],
      ["Wales", "Played 4, won 0", "Looking for a first win of the championship"],
      ["The roof", "Closed", "A quicker, drier game"]
    ], go: [["Team news and line-ups", "lineups"], ["Predict the result", "predict"], ["Listen on 5 Live", "listen"]] },
  f1: { title: "Before the session", rows: [
      ["Last time out", "Italian Grand Prix", "Monza, the other low-downforce circuit"],
      ["This weekend", "FP1 today, race on Sunday", "Every session on 5 Sports Extra"],
      ["The circuit", "Baku City Circuit, 6.003 km", "Two kilometres flat out to turn one"]
    ], go: [["Predict the fastest team", "predict"], ["Listen on 5 Sports Extra", "listen"]] }
};

/* the conversation before the start: what fans say when nothing has happened yet */
const COMMENTS_PRE = {
  football: [
    ["JM", "Jess M", "2m", "Palmer on the right or I riot. Politely.", "388"],
    ["RK", "Rav K", "6m", "The Dutch press high. If we play out from the back, first ten minutes will tell us everything.", "241"],
    ["TO", "Tom O", "11m", "Wembley sold out on a Thursday. Nice to see.", "96"]
  ],
  cricket: [
    ["DP", "Dave P", "4m", "Cloud over St John's Wood and the new ball due in the first hour. Nervous.", "310"],
    ["PL", "Priya L", "9m", "Root and Brook to bat the whole morning. That's all I'm asking.", "188"],
    ["NC", "Neil C", "15m", "TMS on from 10:30. Tea made for 10:29.", "122"]
  ],
  tennis: [
    ["EW", "Ellie W", "3m", "Court 2 third on. Getting there early for this one.", "204"],
    ["KF", "Kat F", "8m", "Her second serve has looked much stronger this fortnight.", "140"],
    ["OB", "Olly B", "14m", "Queue report: past the golf course by seven.", "77"]
  ],
  rugby: [
    ["HR", "Huw R", "2m", "Roof closed, crowd in early. Just want a performance.", "256"],
    ["CN", "Ciara N", "7m", "Bonus point or bust for Ireland. Four tries in Cardiff is a big ask.", "198"],
    ["LD", "Liam D", "12m", "Kick to the corner every time today please.", "91"]
  ],
  f1: [
    ["KT", "Kai T", "3m", "Low-drag wings everywhere. Monza all over again.", "120"],
    ["OM", "Omar M", "9m", "Turn 15 red flag within the first twenty minutes. Calling it.", "84"]
  ]
};

/* the More menu on the website: every sport, then more from BBC Sport */
const WEBMORE = {
  az: ["American Football", "Athletics", "Basketball", "Boxing", "Cricket", "Cycling", "Darts", "Disability Sport", "Football", "Formula 1", "Gaelic Games", "Golf",
    "Gymnastics", "Horse Racing", "Mixed Martial Arts", "Motorsport", "Netball", "Rugby League", "Rugby Union", "Snooker", "Swimming", "Tennis", "Full Sports A-Z"],
  more: ["England", "Scotland", "Wales", "Northern Ireland", "My Sport", "Match of the Day", "Quizzes", "5 Live Sport", "News Feeds", "Help & FAQs"]
};

/* the form lines, consistent with the group */
EVENTS[0].states.buildup.head.home.sub = "";
PREMATCH.football.rows = [
  ["Form", "England W W D W L", "Unbeaten in four"],
  ["Form", "Netherlands W L D W W", "Three wins from five"],
  ["Last meeting", "Netherlands 1-1 England", "Nations League, Amsterdam"],
  ["Where it stands", "Level on points and goal difference", "The winner tops the group"]
];


/* ---------------------------------------------------------------------------
   Football on the website, in the live page's current design: a Report tab
   with the player rater, fans' messages in the reporting, the match on
   BBC One in Watch & listen, and what 5 Live is saying for the transcript.
   ------------------------------------------------------------------------- */
(function () {
  var fb = EVENTS[0], B = fb.states.buildup, L = fb.states.live, F = fb.states.fulltime;
  fb.assists = { live: ["Kane (52')", ""], fulltime: ["Kane (52'), Saka (79')", ""] };
  fb.audio.transcript = [
    ["67'", "Saka again, cutting inside on to that left foot. Verbruggen at full stretch to tip it over."],
    ["66'", "Rice picks it up in the middle, turns away from Reijnders and switches it out to the right."],
    ["64'", "Simons finds a yard in the box, and Pickford is down quickly to his left to push it away."],
    ["61'", "Another England corner. Van Dijk heads the last one clear, but they keep coming."]
  ];
  L.summary = ["England lead through [[Saka's goal seven minutes after half-time]]",
    "Use the 'Watch live' button at the top of the page to watch BBC One coverage",
    "5 Live commentary is also available in the Watch & listen tab",
    "Get involved: use the yellow button on the page",
    "[[Pickford denies Xavi Simons]] as the Netherlands look for a way back"];

  function report(text) {
    return { id: "report", label: "Report", webOnly: true, sections: [{ panels: [{ t: "report", text: text }, { t: "rater" }] }] };
  }
  L.tabs.splice(1, 0, report(["Match report to appear here."]));
  F.tabs.forEach(function (t) { if (t.id === "ratings") { t.appOnly = true; } });
  F.tabs.splice(1, 0, report(["England top Nations League Group 3 after beating the Netherlands at Wembley.",
    "Saka put England ahead seven minutes after half-time, cutting in from the right and finding the near post. Kane headed in Saka's cross to make it 2-0 with 11 minutes left.",
    "Gakpo's header from a corner made for a nervous finish, but England held on to reach next June's finals."]));

  /* Watch & listen: the match on BBC One leads, then the radio */
  function streams(t) { return t.sections[0].panels[0].rows; }
  var wl = L.tabs.filter(function (t) { return t.id === "watchlisten"; })[0];
  streams(wl).unshift(["video", "England v Netherlands, followed by post-match extra", "BBC One", "watch"]);
  streams(wl).push(["5live", "Pre-match: England v Netherlands", "BBC Radio 5 Live", "45:00"]);

  /* the reporting carries fans' messages and posts from the ground */
  var rep = L.tabs[0].sections.filter(function (s) { return s.h === "Live Reporting"; })[0];
  var feed = rep.panels[1];
  feed.posts.splice(1, 0,
    ["21:05 BST", "Get Involved", "", false, null, null, null, null, "England 1-0 Netherlands", null,
      [["Rice has run this midfield since the break. Every loose ball seems to end up at his feet.", "Priya, Leicester"],
       ["Still nervous. One goal against this Dutch side never feels like enough.", "Tom, Hartlepool"]]]);
  feed.posts.splice(3, 0,
    ["21:03 BST", "Noise at Wembley", ["The lower tier behind the goal has been on its feet for most of this spell.",
      "The away end, so loud before kick-off, has gone quiet for the first time tonight."],
      false, null, null, "fb-celebrate", "GETTY IMAGES", "England 1-0 Netherlands", null, null,
      ["BBC Sport", "Football reporter at Wembley"]]);
})();


/* ---------------------------------------------------------------------------
   Habit posts: short, timestamped updates from the clubs, teams and people
   you follow, newest first, with what's new since your last visit marked.
   Chelsea is followed as a club: its posts sit alongside its fixtures.
   Posts are credited to a role, never a named journalist, and nothing here
   is a quote from a real person. The two club pictures are agency images
   from the live BBC Sport site, used as placeholders.
   ------------------------------------------------------------------------- */
MYSPORT.follows.unshift(["chelsea", "Chelsea", "Club", "cr-chelsea", "#034694", 4]);
WEBMYSPORT.chips.splice(1, 0, ["chelsea", "Chelsea"]);
WEBMYSPORT.extra.chelsea = { name: "Chelsea", follow: true, club: true };

const CLUBS = {
  chelsea: {
    name: "Chelsea", comp: "Premier League", crest: "cr-chelsea",
    sub: ["Scores & Fixtures", "Table", "Predictor", "Live Match Updates", "Transfers", "Who Am I? Quiz", "Ask Me Anything"],
    fixtures: [
      { comp: "Premier League", a: "Brentford", b: "Chelsea", sa: "3", sb: "0", st: "done", note: "FT" },
      { comp: "Premier League", a: "Chelsea", b: "Bournemouth", st: "soon", note: "15:00", day: "Sat 26 Sep" },
      { comp: "Premier League", a: "Everton", b: "Chelsea", st: "soon", note: "12:30", day: "Sat 3 Oct" },
      { comp: "Premier League", a: "Chelsea", b: "Spurs", st: "soon", note: "17:30", day: "Sat 17 Oct" }
    ]
  }
};

/* newest first. seen: false marks what arrived since the last visit */
const HABIT = [
  { f: "chelsea", ts: "12:40 BST", k: "news", title: "Midfield stays the priority when the window reopens",
    by: ["BBC Sport", "Chelsea reporter"], img: "cl-training", credit: "GETTY IMAGES",
    body: ["Chelsea's search for a midfielder carries on into January after a summer bid was turned down.",
      "The club are expected to go back to the same shortlist, and are prepared to wait for the right player rather than spend for the sake of it."] },
  { f: "chelsea", ts: "11:05 BST", k: "poll", title: "Back three or back four on Saturday?",
    body: ["Three goals conceded at Brentford. What would you do against Bournemouth?"],
    opts: ["Stick with a back three", "Switch to a back four"], split: [38, 62], votes: "4,120 votes" },
  { f: "eng-cricket", ts: "10:05 BST", k: "news", title: "Day three: England resume 224 behind at Lord's",
    by: ["BBC Sport", "Cricket correspondent"], body: ["A bright morning at Lord's, and a new ball due after eight overs. Test Match Special is on from 10:30."], open: "cricket" },
  { f: "chelsea", ts: "09:17 BST", k: "column", title: "Boxed into a corner?", by: ["BBC Sport", "Weekly columnist"], img: "cl-trophy", credit: "GETTY IMAGES",
    body: ["The league's new spending rules were meant to settle things down. So far they have mostly started arguments.",
      "**The big question:** whatever the verdicts, will anyone ask the fans what they think?"], seen: true },
  { f: "chelsea", ts: "08:00 BST", k: "quiz", title: "Who Am I? Today's Chelsea player", body: ["Five clues, one guess each. Keep your streak going."], streak: 4, seen: true },
  { f: "england", ts: "07:30 BST", k: "news", title: "England train at St George's Park before the Netherlands decider",
    by: ["BBC Sport", "Football correspondent"], body: ["The squad trained in full. Team news is due at 18:45, an hour before kick-off."], open: "football", seen: true },
  { f: "chelsea", ts: "Yesterday 16:21", k: "qa", title: "Your questions: back four, and minutes for the youngsters",
    by: ["BBC Sport", "Chelsea reporter"], qa: [["Will asked", "Will the manager switch to a back four, given how many goals we are conceding?"],
      ["Reporter", "It's a fair question. The system has suited the attackers more than the defenders so far, and a back four would make room for another forward. Expect it to be tried in training this week before anyone commits to it."]], seen: true },
  { f: "chelsea", ts: "Yesterday 09:00", k: "predict", title: "Predictor: Chelsea v Bournemouth", body: ["Saturday 26 September, 15:00. Locks at kick-off."], seen: true }
];

;
/* ==========================================================================
   BBC Sport · Interactive Live Experiences prototype
   Rendering and interaction. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- icons */

  var I = {
    burger: '<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><g stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M2 5h18"/><path d="M2 11h18"/><path d="M2 17h18"/></g></svg>',
    bell: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-1.5 3h15L18 13V9a6 6 0 0 0-6-6z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 19a2 2 0 0 0 4 0" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
    share: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="18" cy="5.5" r="2.6" stroke="#fff" stroke-width="1.8"/><circle cx="6" cy="12" r="2.6" stroke="#fff" stroke-width="1.8"/><circle cx="18" cy="18.5" r="2.6" stroke="#fff" stroke-width="1.8"/><path d="M8.4 10.8 15.6 6.7M8.4 13.2l7.2 4.1" stroke="#fff" stroke-width="1.8"/></svg>',
    back: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 5 8 12l7 7" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    star: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3.6 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.9l6-.8z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    gear: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.2" stroke="#fff" stroke-width="1.8"/><path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
    tickplain: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke="#0B0E12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
    chat: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" stroke="#FFD230" stroke-width="1.8"/><path d="M7 20l3-3" stroke="#FFD230" stroke-width="1.8" stroke-linecap="round"/><path d="M7 8.5h10M7 12h6" stroke="#FFD230" stroke-width="1.6" stroke-linecap="round"/></svg>',
    optabars: '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="9" width="3.4" height="7" rx="1" fill="#4ADE80"/><rect x="7.3" y="4" width="3.4" height="12" rx="1" fill="#4ADE80"/><rect x="12.6" y="6.5" width="3.4" height="9.5" rx="1" fill="#4ADE80"/></svg>',
    pause: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="#fff"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="#fff"/></svg>',
    play: '<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5 13 8l-9 5.5z" fill="#fff"/></svg>',
    refresh: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6" stroke="#C4C4C4" stroke-width="1.9" stroke-linecap="round"/><path d="M20 4v4h-4" stroke="#C4C4C4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    expand: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" stroke="#C4C4C4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    playtri: '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M4 2.5 11 7l-7 4.5z" fill="#fff"/></svg>',
    phone: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 18.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    qr: '<svg width="24" height="24" viewBox="0 0 22 22" aria-hidden="true"><rect x="1" y="1" width="8" height="8" rx="1.5" fill="none" stroke="#B79CFF" stroke-width="1.7"/><rect x="13" y="1" width="8" height="8" rx="1.5" fill="none" stroke="#B79CFF" stroke-width="1.7"/><rect x="1" y="13" width="8" height="8" rx="1.5" fill="none" stroke="#B79CFF" stroke-width="1.7"/><rect x="14" y="14" width="3" height="3" fill="#B79CFF"/><rect x="18" y="18" width="3" height="3" fill="#B79CFF"/></svg>',
    back2: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 5 8 12l7 7" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heartbig: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.5s-8-5-8-10.1A4.4 4.4 0 0 1 12 7.8a4.4 4.4 0 0 1 8 2.6c0 5.1-8 10.1-8 10.1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" fill="var(--heartfill, none)"/></svg>',
    commentbig: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="4" width="19" height="14" rx="2.4" stroke="currentColor" stroke-width="1.8"/><path d="M7 21.5 10.5 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6.5 9h11M6.5 13h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    sharebig: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18.5 5.5M9 5.5h9.5V15" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    livedot: '<svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="6" r="2.4" fill="currentColor"/></svg>',
    speaker: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13L7.5 14.5H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    thumbup: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10.5 11.5 3a2 2 0 0 1 2.7 2.5L13 9.5h5.3a2 2 0 0 1 2 2.4l-1.3 6A2 2 0 0 1 17 19.5H7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="3" y="10" width="4" height="9.5" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>',
    thumbdown: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 13.5 12.5 21a2 2 0 0 1-2.7-2.5L11 14.5H5.7a2 2 0 0 1-2-2.4l1.3-6A2 2 0 0 1 7 4.5h10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="17" y="4.5" width="4" height="9.5" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>',
    shareflat: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="18" cy="5.5" r="2.4" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.4" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="18.5" r="2.4" stroke="currentColor" stroke-width="1.7"/><path d="M8.3 10.9 15.7 6.6M8.3 13.1l7.4 4.3" stroke="currentColor" stroke-width="1.7"/></svg>',
    bat: '<svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 9.5 6.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="m9 6 2.5-2.5L14 6l-2.5 2.5z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/></svg>',
    flame: '<svg width="14" height="15" viewBox="0 0 14 15" aria-hidden="true"><path d="M7 .8s.9 2.5-.6 4.2C4.6 7.3 3 8.3 3 10.6A4.2 4.2 0 0 0 7 14.8a4.2 4.2 0 0 0 4-4.2c0-2-1.1-3-1.9-4.3-.5 1-1.2 1.4-1.2 1.4S9 5.1 7 .8z" fill="#FF7A2F"/></svg>',
    stack: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="6" y="2.5" width="11.5" height="11.5" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M13.5 17.5H4.5A2 2 0 0 1 2.5 15.5V6.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    tick: '<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 .9 9.8 2.5l2.4-.2.5 2.3 2 1.3L13.6 8l1.1 2.1-2 1.3-.5 2.3-2.4-.2L8 15.1l-1.8-1.6-2.4.2-.5-2.3-2-1.3L2.4 8 1.3 5.9l2-1.3.5-2.3 2.4.2z" fill="#B7BEC7"/><path d="m5.4 8 1.9 1.9 3.4-3.6" stroke="#101010" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    comment: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.9"/><path d="M7 20.5l3-3" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M7 9h10M7 13h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    heart: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
    send: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 12 20.5 4.5 15 20l-3.2-6.2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    playsm: '<svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"><path d="M2.5 1.5 8 5l-5.5 3.5z" fill="#fff"/></svg>',
    chevron: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="#8E8E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    nav: {
      home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10.2 12 3.8l8 6.4V20a1 1 0 0 1-1 1h-4.5v-6.2h-5V21H5a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
      shorts: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5.5 3.5h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.8"/><path d="M10 8.3v7.4l5.8-3.7z" fill="currentColor"/></svg>',
      mysport: '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path class="navfill" d="M4 7.5h16v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 5h12M8 2.8h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle class="navcut" cx="12" cy="12.2" r="2.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path class="navcut" d="M8.2 18.3a3.8 3.8 0 0 1 7.6 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
      scores: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.8" stroke="currentColor" stroke-width="1.8"/><path d="m12 7.4 3.6 2.6-1.4 4.2H9.8L8.4 10z" fill="currentColor"/><path d="M12 7.4V3.4M15.6 10l3.8-1.3M14.2 14.2l2.3 3.3M9.8 14.2l-2.3 3.3M8.4 10 4.6 8.7" stroke="currentColor" stroke-width="1.5"/></svg>',
      search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
    },
    sport: {
      Football: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="m12 7 4 3-1.5 4.7h-5L8 10z" fill="currentColor"/></svg>',
      Cricket: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18 15 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="m14.5 6.5 3-3 3 3-3 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="6.5" cy="7" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>',
      Tennis: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M5 5a10 10 0 0 0 14 14M19 5A10 10 0 0 1 5 19" stroke="currentColor" stroke-width="1.5"/></svg>',
      "Formula 1": '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 20V5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 5h13l-2.5 3.5L18 12H5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 5v7M11 5v7M14 5v7" stroke="currentColor" stroke-width="1.2" opacity=".6"/></svg>',
      "Rugby Union": '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(-40 12 12)" stroke="currentColor" stroke-width="1.7"/><path d="m9 15 6-6M10.5 13l1.5 1.5M13 10.5l1.5 1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>'
    }
  };

  var NAVITEMS = [
    ["home", "Home"], ["shorts", "Shorts"], ["mysport", "My Sport"],
    ["scores", "Scores"], ["search", "Search"]
  ];

  var SPORTS = ["Football", "Cricket", "Tennis", "Rugby Union", "Formula 1", "Golf", "Athletics", "Boxing"];

  /* ---------------------------------------------------------------- state */

  var S = {
    view: "home",
    eventIx: 0,
    lcIx: 1,
    tabIx: {},
    nav: "home",
    moment: "live",
    votes: {},
    toggles: {},
    predict: { h: 2, a: 1, locked: false },
    ratings: {},
    offset: 23,
    dataSecs: 67 * 60 + 57,
    rugbySecs: 64 * 60 + 12,
    overBall: 2,
    overNum: 89,
    feedNewest: true,
    compTab: 0,
    optaOpen: true,
    player: null,
    liked: {},
    quiz: {},
    tmo: 48,
    answered: 0,
    signedIn: false,
    playing: true,
    theme: "dark", hide: null, revealed: {}, sheet: null, likes: {}, myComments: {},
    article: null, reader: null, vid: null, push: null, ntypes: {}, csort: "top", shareAsCard: false, reminders: {}, myQs: {}
  };

  /* three parts of the day. Paired with a TV, the live part becomes the
     second-screen experience: same match, the phone playing a different role */
  function lc() {
    var id = LIFECYCLE[S.lcIx].id;
    return id === "live" && S.surface === "together" ? "companion" : id;
  }
  function ev() { return EVENTS[S.eventIx]; }
  function evState(e, id) { return (e || ev()).states[id || lc()] || (e || ev()).states.live; }
  function tabKey() { return ev().id + ":" + lc(); }
  function visTabs(tabs) {
    var w = S.surface === "web";
    return (tabs || []).filter(function (t) { return !(t.webOnly && !w) && !(t.appOnly && w); });
  }
  function curTabs() { return visTabs(evState().tabs); }
  function curTab() {
    var k = tabKey();
    if (S.tabIx[k] === undefined || S.tabIx[k] >= curTabs().length) { S.tabIx[k] = 0; }
    return curTabs()[S.tabIx[k]];
  }

  /* ------------------------------------------------------------- utilities */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function mmss(s) { return pad(Math.floor(s / 60)) + ":" + pad(s % 60); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    if (!t) { return; }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  /* ------------------------------------------------------------- SVG parts */

  function pitchSVG(m) {
    var out = "";
    for (var i = 0; i < 8; i++) {
      out += '<rect x="' + (i * 12.5) + '" y="0" width="12.5" height="64" fill="' + (i % 2 ? "#35893F" : "#2F7D3A") + '"/>';
    }
    out += '<g stroke="rgba(255,255,255,.42)" stroke-width="0.5" fill="none">' +
      '<rect x="2" y="2" width="96" height="60"/><line x1="50" y1="2" x2="50" y2="62"/>' +
      '<circle cx="50" cy="32" r="8.5"/><circle cx="50" cy="32" r="0.9" fill="rgba(255,255,255,.6)" stroke="none"/>' +
      '<rect x="2" y="14" width="13" height="36"/><rect x="85" y="14" width="13" height="36"/>' +
      '<rect x="2" y="24" width="5" height="16"/><rect x="93" y="24" width="5" height="16"/></g>';

    var ay = 6.8, bw = m.attacking.length * 2.35 + 5;
    out += '<rect x="3.5" y="3.2" width="' + bw.toFixed(1) + '" height="7.2" rx="1" fill="rgba(0,0,0,.6)"/>' +
      '<text x="6" y="8.4" fill="#EDEDED" font-size="4" font-family="ReithSans, Arial" font-weight="700" letter-spacing="0.22">' + esc(m.attacking) + '</text>' +
      '<line x1="' + (bw + 7).toFixed(1) + '" y1="' + ay + '" x2="89" y2="' + ay + '" stroke="rgba(255,255,255,.6)" stroke-width="0.55" stroke-dasharray="2 1.6"/>' +
      '<path d="M 89 ' + (ay - 1.5) + ' L 92.5 ' + ay + ' L 89 ' + (ay + 1.5) + '" fill="rgba(255,255,255,.7)"/>';

    if (m.path) {
      out += '<path d="' + m.path + '" stroke="#FFD230" stroke-width="0.8" fill="none" stroke-dasharray="2 1.4" stroke-linecap="round"/>';
    }
    function dots(list, home) {
      return list.map(function (p) {
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.1" fill="' + (home ? "#F3F6FA" : "#F26522") +
          '" stroke="rgba(0,0,0,.55)" stroke-width="0.45"/>';
      }).join("");
    }
    out += dots(m.home, true) + dots(m.away, false);
    out += '<circle cx="' + m.ball[0] + '" cy="' + m.ball[1] + '" r="3.4" fill="none" stroke="#FFD230" stroke-width="0.7" opacity="0.8"' +
      (reduce ? "" : '><animate attributeName="r" values="2.6;5;2.6" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0;0.9" dur="2s" repeatCount="indefinite"/') +
      '/><circle cx="' + m.ball[0] + '" cy="' + m.ball[1] + '" r="1.5" fill="#FFD230"/>';

    return '<svg class="pitchsvg" viewBox="0 0 100 64" role="img" aria-label="' + esc(m.label + ". " + m.sub) + '">' + out + '</svg>';
  }

  var FORMATIONS = {
    "4-2-3-1": [[50,92],[18,74],[39,76],[61,76],[82,74],[36,57],[64,57],[20,38],[50,40],[80,38],[50,20]],
    "4-3-3": [[50,92],[18,74],[39,76],[61,76],[82,74],[30,55],[50,58],[70,55],[20,32],[50,24],[80,32]]
  };

  function formationSVG(shape, team) {
    var pts = FORMATIONS[shape] || FORMATIONS["4-2-3-1"];
    var out = "";
    for (var i = 0; i < 6; i++) {
      out += '<rect x="0" y="' + (i * 16.67) + '" width="100" height="16.67" fill="' + (i % 2 ? "#35893F" : "#2F7D3A") + '"/>';
    }
    out += '<g stroke="rgba(255,255,255,.4)" stroke-width="0.4" fill="none">' +
      '<rect x="2" y="2" width="96" height="96"/><line x1="2" y1="50" x2="98" y2="50"/>' +
      '<circle cx="50" cy="50" r="10"/><rect x="24" y="84" width="52" height="14"/><rect x="24" y="2" width="52" height="14"/></g>';
    var fill = team === "eng" ? "#F3F6FA" : "#F26522";
    var ink = team === "eng" ? "#16296B" : "#fff";
    var list = team === "eng" ? XI_ENG : XI_NED;
    out += pts.map(function (p, i) {
      var n = list[i] ? list[i][0] : i + 1, nm = list[i] ? list[i][1] : "";
      return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.4" fill="' + fill + '" stroke="rgba(0,0,0,.5)" stroke-width="0.5"/>' +
        '<text x="' + p[0] + '" y="' + (p[1] + 1.6) + '" text-anchor="middle" font-size="4.2" font-weight="700" fill="' + ink + '" font-family="ReithSans, Arial">' + n + '</text>' +
        '<text x="' + p[0] + '" y="' + (p[1] + 9) + '" text-anchor="middle" font-size="3.6" fill="rgba(255,255,255,.92)" font-family="ReithSans, Arial">' + esc(nm) + '</text>';
    }).join("");
    return '<svg class="formsvg" viewBox="0 0 100 100" role="img" aria-label="' + esc(shape + " formation") + '">' + out + '</svg>';
  }

  var MOM = [-0.2,-0.45,-0.3,0.1,0.35,0.2,0.55,0.7,0.45,0.6,0.8,0.5,0.65,0.85,0.72];

  function momentumSVG() {
    var w = 100, mid = 23, n = MOM.length, bw = (w - 2) / n;
    var out = ['<line x1="0" y1="' + mid + '" x2="' + w + '" y2="' + mid + '" stroke="#3A3A3A" stroke-width="0.5"/>'];
    for (var i = 0; i < n; i++) {
      var v = MOM[i], mag = Math.abs(v) * 20, y = v >= 0 ? mid - mag : mid;
      out.push('<rect x="' + (1 + i * bw).toFixed(2) + '" y="' + y.toFixed(2) + '" width="' + (bw - 1.2).toFixed(2) +
        '" height="' + Math.max(0.7, mag).toFixed(2) + '" rx="0.5" fill="' + (v >= 0 ? "#E8F0FC" : "#F26522") +
        '" opacity="' + (i === n - 1 ? 1 : 0.6) + '"/>');
    }
    out.push('<text x="1" y="5" fill="#8E8E8E" font-size="4.2" font-family="ReithSans, Arial">52\'</text>');
    out.push('<text x="99" y="5" text-anchor="end" fill="#8E8E8E" font-size="4.2" font-family="ReithSans, Arial">67\'</text>');
    return '<svg class="momsvg" viewBox="0 0 100 46" role="img" aria-label="Momentum over the last fifteen minutes.">' + out.join("") + '</svg>';
  }

  function wagonSVG(shots) {
    var cx = 50, cy = 50, r = 44;
    var col = { four: "#FFD230", six: "#FF9F1C", three: "#9ADFA0", two: "#7FB2FF", one: "#8E8E8E" };
    var out = '<circle cx="50" cy="50" r="44" fill="#123A1C" stroke="#2F7D3A" stroke-width="0.8"/>' +
      '<circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="0.5" stroke-dasharray="2 2"/>' +
      '<rect x="47" y="38" width="6" height="24" fill="#C8A96E" opacity="0.5"/>' +
      '<line x1="50" y1="6" x2="50" y2="94" stroke="rgba(255,255,255,.1)" stroke-width="0.4"/>' +
      '<line x1="6" y1="50" x2="94" y2="50" stroke="rgba(255,255,255,.1)" stroke-width="0.4"/>';
    out += shots.map(function (s) {
      var a = (s[0] - 90) * Math.PI / 180, len = r * s[1];
      var x = cx + Math.cos(a) * len, y = cy + Math.sin(a) * len;
      var c = col[s[2]] || "#8E8E8E";
      return '<line x1="50" y1="50" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="' + c +
        '" stroke-width="' + (s[2] === "four" || s[2] === "six" ? 1.3 : 0.8) + '" stroke-linecap="round" opacity="0.92"/>' +
        '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.4" fill="' + c + '"/>';
    }).join("");
    return '<svg class="wagonsvg" viewBox="0 0 100 100" role="img" aria-label="Wagon wheel of scoring shots.">' + out + '</svg>';
  }

  function winpredSeries(series) {
    var n = series.length, w = 100, h = 26;
    var pts = series.map(function (v, i) {
      return (i / (n - 1) * w).toFixed(1) + "," + (h - v / 100 * h).toFixed(1);
    }).join(" ");
    return '<svg class="wpsvg" viewBox="0 0 100 26" preserveAspectRatio="none" role="img" aria-label="England win probability since lunch.">' +
      '<polyline points="' + pts + '" fill="none" stroke="#4ADE80" stroke-width="1.2" stroke-linejoin="round"/>' +
      '<circle cx="100" cy="' + (h - series[n - 1] / 100 * h).toFixed(1) + '" r="1.8" fill="#4ADE80"/></svg>';
  }

  /* ==========================================================================
     Generated imagery
     ==========================================================================
     There is no licensed photography in this prototype, so every picture is
     drawn rather than loaded. A seeded generator reads the item it illustrates
     and builds a scene from it: stands, crowd, floodlights, the playing
     surface in perspective, the markings for that sport and a few figures on
     it. The seed comes from the item's own title, so a card keeps the same
     picture every time and no two cards get the same one.

     Swap scene() for real images and nothing else in the app has to change.
     ========================================================================== */

  function hashStr(s) {
    var h = 2166136261, i;
    s = String(s);
    for (i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  function mkRand(seedStr) {
    var x = hashStr(seedStr) || 0x9E3779B9;
    return function () {
      x ^= x << 13; x >>>= 0;
      x ^= x >>> 17;
      x ^= x << 5; x >>>= 0;
      return x / 4294967296;
    };
  }

  function n(v) { return Math.round(v * 100) / 100; }

  /* shared, colour-neutral texture. One copy for the whole page rather than
     several hundred circles per card. */
  function ensureSprites() {
    if (document.getElementById("gfxdefs")) { return; }
    var d = document.createElement("div");
    d.id = "gfxdefs";
    d.setAttribute("aria-hidden", "true");
    d.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
    d.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg"><defs>' +
      '<pattern id="pxCrowd" width="1.5" height="1.3" patternUnits="userSpaceOnUse">' +
      '<circle cx="0.4" cy="0.35" r="0.3" fill="#fff" opacity="0.4"/>' +
      '<circle cx="1.05" cy="0.9" r="0.26" fill="#fff" opacity="0.2"/>' +
      '<circle cx="0.2" cy="1.0" r="0.22" fill="#000" opacity="0.4"/>' +
      '<circle cx="1.25" cy="0.2" r="0.18" fill="#000" opacity="0.32"/>' +
      '</pattern>' +
      '<pattern id="pxCrowdFar" width="0.95" height="0.85" patternUnits="userSpaceOnUse">' +
      '<circle cx="0.28" cy="0.26" r="0.2" fill="#fff" opacity="0.3"/>' +
      '<circle cx="0.7" cy="0.62" r="0.17" fill="#000" opacity="0.34"/>' +
      '</pattern>' +
      '<pattern id="pxSeats" width="6" height="2.1" patternUnits="userSpaceOnUse">' +
      '<rect width="6" height="1.1" fill="#fff" opacity="0.05"/>' +
      '<rect y="1.6" width="6" height="0.5" fill="#000" opacity="0.22"/>' +
      '</pattern>' +
      '</defs></svg>';
    document.body.appendChild(d);
  }

  /* ---- kit colours, shirt then trim ---- */
  var KITS = {
    football: [["#DB2B22", "#FFFFFF"], ["#F26D1B", "#101820"]],
    rugby: [["#C8102E", "#FFFFFF"], ["#128D51", "#FFFFFF"]],
    cricket: [["#F2F0E7", "#E2DED0", "#1A3A6B"], ["#F2F0E7", "#DED9C8", "#F1B434"]],
    tennis: [["#F5F4EE", "#4FC3C3"], ["#EFE6D2", "#BB1919"]],
    boxing: [["#DB2B22", "#FFD230"], ["#2B4C9B", "#FFFFFF"]]
  };

  var TURF = {
    football: ["#2E7A3C", "#15401E"],
    rugby: ["#2B7139", "#133C1D"],
    cricket: ["#35803D", "#194720"],
    tennis: ["#4A8B37", "#22501C"],
    boxing: ["#6E86B8", "#26355A"]
  };

  /* ---- figures ----------------------------------------------------------
     Each pose is a set of joints in a 22 x 46 box with the feet on the floor.
     Drawn twice: a fatter dark pass for the silhouette, then a thinner kit
     pass on top, which reads as a player rather than a stick. */

  var POSES = {
    run: {
      head: [11.2, 6.4, 3.9],
      spine: [[11.7, 10.2], [10.3, 24.4]],
      arms: [[[11.2, 13.4], [16.6, 17.2], [19.4, 12.8]], [[11.2, 13.4], [5.6, 16.4], [3.2, 11.0]]],
      legs: [[[10.3, 24.4], [16.0, 32.6], [15.2, 44.6]], [[10.3, 24.4], [5.4, 31.6], [1.0, 37.4]]]
    },
    kick: {
      head: [12.2, 6.0, 3.9],
      spine: [[12.4, 9.8], [9.8, 24.0]],
      arms: [[[11.8, 13.0], [18.0, 12.2], [21.4, 7.6]], [[11.8, 13.0], [4.8, 14.6], [1.4, 10.2]]],
      legs: [[[9.8, 24.0], [15.2, 29.6], [21.8, 26.4]], [[9.8, 24.0], [8.0, 34.2], [8.6, 44.6]]]
    },
    serve: {
      head: [10.4, 8.0, 3.9],
      spine: [[10.9, 11.8], [10.1, 25.0]],
      arms: [[[10.9, 14.0], [13.8, 7.4], [13.2, 1.2]], [[10.9, 14.0], [5.0, 11.8], [2.4, 6.2]]],
      legs: [[[10.1, 25.0], [12.8, 34.2], [12.2, 44.6]], [[10.1, 25.0], [6.2, 33.0], [3.8, 44.6]]],
      racket: [13.2, 1.2]
    },
    ready: {
      head: [11.0, 8.6, 3.9],
      spine: [[11.2, 12.4], [11.0, 25.6]],
      arms: [[[11.2, 14.6], [16.2, 18.6], [19.2, 15.0]], [[11.2, 14.6], [6.0, 18.2], [3.6, 15.0]]],
      legs: [[[11.0, 25.6], [16.8, 33.4], [17.6, 44.6]], [[11.0, 25.6], [5.2, 33.4], [4.2, 44.6]]],
      racket: [19.2, 15.0]
    },
    bat: {
      head: [11.8, 8.0, 3.9],
      spine: [[12.0, 11.8], [10.4, 25.0]],
      arms: [[[11.6, 14.0], [15.8, 17.6], [14.4, 21.2]], [[11.6, 14.0], [13.8, 18.4], [14.4, 21.2]]],
      legs: [[[10.4, 25.0], [15.6, 33.2], [16.2, 44.6]], [[10.4, 25.0], [5.8, 33.0], [4.4, 44.6]]],
      bat: [14.4, 21.2]
    },
    bowl: {
      head: [10.4, 6.4, 3.9],
      spine: [[10.9, 10.2], [10.1, 24.0]],
      arms: [[[10.9, 12.6], [14.8, 6.2], [14.2, 0.6]], [[10.9, 12.6], [4.8, 14.4], [2.0, 19.4]]],
      legs: [[[10.1, 24.0], [16.4, 30.4], [20.2, 39.6]], [[10.1, 24.0], [5.2, 32.4], [2.6, 43.6]]]
    },
    lift: {
      head: [11.0, 7.0, 4.1],
      spine: [[11.0, 11.0], [11.0, 25.0]],
      arms: [[[11.0, 13.4], [16.6, 8.4], [17.8, 1.6]], [[11.0, 13.4], [5.4, 8.4], [4.2, 1.6]]],
      legs: [[[11.0, 25.0], [15.0, 34.0], [15.4, 44.6]], [[11.0, 25.0], [7.0, 34.0], [6.6, 44.6]]]
    },
    guard: {
      head: [11.0, 7.4, 4.1],
      spine: [[11.0, 11.4], [10.8, 24.6]],
      arms: [[[11.0, 14.0], [16.0, 15.4], [13.4, 10.0]], [[11.0, 14.0], [6.2, 16.0], [8.6, 10.2]]],
      legs: [[[10.8, 24.6], [15.8, 33.0], [16.8, 44.6]], [[10.8, 24.6], [5.6, 33.2], [4.4, 44.6]]],
      gloves: [[13.4, 10.0], [8.6, 10.2]]
    },
    dive: {
      head: [14.0, 13.0, 3.9],
      spine: [[13.6, 16.4], [5.0, 24.0]],
      arms: [[[13.2, 18.0], [18.6, 15.0], [22.0, 11.0]], [[13.2, 18.0], [16.4, 21.8], [20.4, 23.0]]],
      legs: [[[5.0, 24.0], [1.0, 30.0], [3.0, 37.0]], [[5.0, 24.0], [0.4, 25.6], [-3.0, 30.0]]]
    }
  };

  function poly(pts, width, col, op) {
    return '<polyline points="' + pts.map(function (q) { return n(q[0]) + "," + n(q[1]); }).join(" ") +
      '" fill="none" stroke="' + col + '" stroke-width="' + n(width) + '" stroke-linecap="round" stroke-linejoin="round"' +
      (op === undefined ? "" : ' opacity="' + op + '"') + '/>';
  }

  /* cx is where the figure stands, footY where the feet land, ht its height */
  function figure(name, cx, footY, ht, kit, o) {
    var P0 = POSES[name] || POSES.run;
    o = o || {};
    var dark = o.dark || "#0A0D12";
    var s = ht / 46;
    var lw = 3.6;
    var limbs = P0.arms.concat(P0.legs);
    var g = "";

    g += limbs.map(function (L) { return poly(L, lw + 1.3, dark); }).join("");
    g += poly(P0.spine, lw + 5.0, dark);
    g += '<circle cx="' + P0.head[0] + '" cy="' + P0.head[1] + '" r="' + n(P0.head[2] + 0.6) + '" fill="' + dark + '"/>';

    if (!o.silhouette) {
      g += limbs.map(function (L) { return poly(L, lw - 0.9, kit[1]); }).join("");
      g += poly(P0.spine, lw + 2.6, kit[0]);
      g += '<circle cx="' + P0.head[0] + '" cy="' + P0.head[1] + '" r="' + P0.head[2] + '" fill="#8A6952"/>';
      if (kit[2]) {
        /* a cap, which is how you tell two sides apart when both play in white */
        g += '<path d="M' + n(P0.head[0] - P0.head[2] - 0.3) + ',' + n(P0.head[1] - 0.4) +
          ' a' + P0.head[2] + ',' + P0.head[2] + ' 0 0 1 ' + n(P0.head[2] * 2 + 0.6) + ',0' +
          ' l1.6,0.9 l-' + n(P0.head[2] * 2 + 2.2) + ',0 Z" fill="' + kit[2] + '"/>';
      }
      if (P0.racket) {
        g += '<line x1="' + P0.racket[0] + '" y1="' + n(P0.racket[1] + 1.2) + '" x2="' + P0.racket[0] + '" y2="' + n(P0.racket[1] - 1.6) +
          '" stroke="' + dark + '" stroke-width="1"/>' +
          '<ellipse cx="' + P0.racket[0] + '" cy="' + n(P0.racket[1] - 4.4) + '" rx="2.7" ry="3.5" fill="#fff" fill-opacity="0.12" stroke="' + dark + '" stroke-width="1.1"/>';
      }
      if (P0.bat) {
        g += '<rect x="' + n(P0.bat[0] - 1.2) + '" y="' + P0.bat[1] + '" width="2.4" height="11" rx="0.6" fill="#D9C08A" stroke="' + dark + '" stroke-width="0.6"/>';
      }
      if (P0.gloves) {
        g += P0.gloves.map(function (q) {
          return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="2.5" fill="' + kit[0] + '" stroke="' + dark + '" stroke-width="0.6"/>';
        }).join("");
      }
    }

    var sx = o.flip ? -s : s;
    return '<g transform="translate(' + n(cx - 11 * s) + ',' + n(footY - 46 * s) + ') scale(' + n(sx) + ',' + n(s) + ')' +
      (o.flip ? ' translate(-22,0)' : "") + '"' + (o.op !== undefined ? ' opacity="' + o.op + '"' : "") + '>' +
      g + '</g>';
  }

  /* ---- the ground -------------------------------------------------------
     A single perspective frame: t runs 0 to 1 across the pitch, d runs 0 at
     the far side to 1 at the camera. Every marking below is placed in it, so
     the lines converge the way a camera at the halfway line would see them. */

  function Ground(hzY, botY) {
    var TL = -20, TR = 120, BL = -74, BR = 174;
    return {
      xAt: function (t, d) {
        var xt = TL + (TR - TL) * t, xb = BL + (BR - BL) * t;
        return xt + (xb - xt) * d;
      },
      yAt: function (d) { return hzY + (botY - hzY) * d; },
      quad: function (t0, t1, d0, d1, fill, op) {
        var a = this.xAt(t0, d0), b = this.xAt(t1, d0), c = this.xAt(t1, d1), e = this.xAt(t0, d1);
        return '<path d="M' + n(a) + ',' + n(this.yAt(d0)) + ' L' + n(b) + ',' + n(this.yAt(d0)) +
          ' L' + n(c) + ',' + n(this.yAt(d1)) + ' L' + n(e) + ',' + n(this.yAt(d1)) + 'Z" fill="' + fill + '"' +
          (op === undefined ? "" : ' opacity="' + op + '"') + '/>';
      },
      across: function (d, t0, t1, op, wd) {
        return '<line x1="' + n(this.xAt(t0, d)) + '" y1="' + n(this.yAt(d)) + '" x2="' + n(this.xAt(t1, d)) +
          '" y2="' + n(this.yAt(d)) + '" stroke="#fff" stroke-opacity="' + op + '" stroke-width="' + (wd || 0.7) + '"/>';
      },
      along: function (t, d0, d1, op, wd) {
        return '<line x1="' + n(this.xAt(t, d0)) + '" y1="' + n(this.yAt(d0)) + '" x2="' + n(this.xAt(t, d1)) +
          '" y2="' + n(this.yAt(d1)) + '" stroke="#fff" stroke-opacity="' + op + '" stroke-width="' + (wd || 0.7) + '"/>';
      }
    };
  }

  function stands(w, hzY, rnd, uid, accent, deep) {
    var out = "";
    var roof = hzY * 0.13, upper = hzY * 0.49, walk = hzY * 0.57, lower = hzY * 0.9;
    var i;

    function tier(y0, y1, pat, dark) {
      var hh = y1 - y0;
      return '<rect x="-5" y="' + n(y0) + '" width="' + (w + 10) + '" height="' + n(hh) + '" fill="#000" opacity="' + dark + '"/>' +
        '<rect x="-5" y="' + n(y0) + '" width="' + (w + 10) + '" height="' + n(hh) + '" fill="url(#pxSeats)"/>' +
        '<rect x="-5" y="' + n(y0) + '" width="' + (w + 10) + '" height="' + n(hh) + '" fill="url(#' + pat + ')"/>';
    }

    /* roof, with a lit lip along the front edge */
    out += '<rect x="-5" y="-3" width="' + (w + 10) + '" height="' + n(roof + 3) + '" fill="#04060A"/>';
    out += '<rect x="-5" y="' + n(roof - 0.7) + '" width="' + (w + 10) + '" height="0.7" fill="#fff" opacity="0.12"/>';

    out += tier(roof, upper, "pxCrowdFar", 0.52);
    /* the concourse between the tiers reads as a dark band */
    out += '<rect x="-5" y="' + n(upper) + '" width="' + (w + 10) + '" height="' + n(walk - upper) + '" fill="#04060A" opacity="0.88"/>';
    out += tier(walk, lower, "pxCrowd", 0.34);
    /* uneven rows: some blocks fuller and better lit than others */
    for (i = 0; i < 5; i++) {
      var by = walk + (lower - walk) * (i / 5);
      out += '<rect x="-5" y="' + n(by) + '" width="' + (w + 10) + '" height="' + n((lower - walk) / 5) +
        '" fill="' + (i % 2 ? "#000" : "#fff") + '" opacity="' + n(0.03 + rnd() * 0.05) + '"/>';
    }

    /* stand blocks: vertical gangways break up the crowd */
    for (i = 1; i < 6; i++) {
      out += '<rect x="' + n(i * (w / 6) - 0.5 + (rnd() - 0.5)) + '" y="' + n(roof) + '" width="1" height="' + n(lower - roof) +
        '" fill="#04060A" opacity="0.55"/>';
    }

    /* the floodlights wash the near side of the stand */
    out += '<rect x="-5" y="' + n(roof) + '" width="' + (w + 10) + '" height="' + n(lower - roof) + '" fill="' + accent + '" opacity="0.07"/>';

    /* shirts and faces catching the light, denser at the front */
    for (i = 0; i < 46; i++) {
      var sy = walk + Math.pow(rnd(), 0.7) * (lower - walk);
      out += '<circle cx="' + n(rnd() * (w + 6) - 3) + '" cy="' + n(sy) + '" r="' + n(0.3 + rnd() * 0.45) +
        '" fill="' + (i % 4 === 0 ? accent : i % 4 === 1 ? "#FFD230" : "#fff") + '" opacity="' + n(0.3 + rnd() * 0.45) + '"/>';
    }

    /* a few flags held up */
    for (i = 0; i < 4; i++) {
      var fx = 6 + rnd() * (w - 16), fy = walk + rnd() * (lower - walk) * 0.75;
      var fw = 4 + rnd() * 3.5, fh = 2 + rnd() * 1.4;
      out += '<rect x="' + n(fx) + '" y="' + n(fy - fh) + '" width="' + n(fw) + '" height="' + n(fh) + '" fill="' +
        (i % 2 ? accent : "#fff") + '" opacity="' + n(0.4 + rnd() * 0.3) + '" transform="rotate(' + n(-6 + rnd() * 12) +
        ' ' + n(fx) + ' ' + n(fy) + ')"/>';
    }

    /* the hoarding along the front, and the strip of empty seats behind it */
    var hb = Math.max(1.4, (hzY - lower) * 0.62);
    out += '<rect x="-5" y="' + n(lower) + '" width="' + (w + 10) + '" height="' + n(hzY - lower) + '" fill="' + deep + '"/>';
    out += '<rect x="-5" y="' + n(lower) + '" width="' + (w + 10) + '" height="' + n(hzY - lower) + '" fill="#000" opacity="0.3"/>';
    for (i = 0; i < 7; i++) {
      out += '<rect x="' + n(i * (w / 6.4) - 3) + '" y="' + n(lower + 0.6) + '" width="' + n(w / 8) + '" height="' + n(hb) +
        '" fill="' + (i % 2 ? accent : "#E9ECF2") + '" opacity="0.26" rx="0.3"/>';
    }
    out += '<rect x="-5" y="' + n(hzY - 0.5) + '" width="' + (w + 10) + '" height="0.5" fill="#fff" opacity="0.14"/>';

    /* floodlights */
    out += '<g>' +
      '<circle cx="' + n(w * 0.79) + '" cy="' + n(roof * 0.5) + '" r="1.6" fill="#FFF7E0" opacity="0.9"/>' +
      '<circle cx="' + n(w * 0.79) + '" cy="' + n(roof * 0.5) + '" r="10" fill="#FFF3D0" opacity="0.09"/>' +
      '<circle cx="' + n(w * 0.2) + '" cy="' + n(roof * 0.38) + '" r="1.2" fill="#FFF7E0" opacity="0.7"/>' +
      '<circle cx="' + n(w * 0.2) + '" cy="' + n(roof * 0.38) + '" r="7" fill="#FFF3D0" opacity="0.07"/>' +
      '</g>';
    return out;
  }

  function markings(kind, G, rnd, accent) {
    var out = "";
    if (kind === "football") {
      out += G.across(0.06, 0.02, 0.98, 0.5, 0.7);
      out += G.across(0.2, 0.2, 0.8, 0.42, 0.7);
      out += G.along(0.2, 0.06, 0.2, 0.42, 0.7) + G.along(0.8, 0.06, 0.2, 0.42, 0.7);
      out += G.across(0.34, 0.34, 0.66, 0.34, 0.6);
      out += G.along(0.34, 0.06, 0.34, 0.34, 0.6) + G.along(0.66, 0.06, 0.34, 0.34, 0.6);
      out += G.across(0.94, 0.0, 1.0, 0.4, 1.1);
      /* centre circle, flattened by the angle */
      out += '<ellipse cx="' + n(G.xAt(0.5, 0.78)) + '" cy="' + n(G.yAt(0.78)) + '" rx="' + n((G.xAt(0.78, 0.78) - G.xAt(0.22, 0.78)) / 2) +
        '" ry="' + n((G.yAt(1) - G.yAt(0.62)) * 0.5) + '" fill="none" stroke="#fff" stroke-opacity="0.34" stroke-width="0.8"/>';
      /* goal */
      var gy = G.yAt(0.06), gl = G.xAt(0.4, 0.06), gr = G.xAt(0.6, 0.06);
      out += '<path d="M' + n(gl) + ',' + n(gy) + ' L' + n(gl) + ',' + n(gy - 5.4) + ' L' + n(gr) + ',' + n(gy - 5.4) +
        ' L' + n(gr) + ',' + n(gy) + '" fill="#fff" fill-opacity="0.05" stroke="#fff" stroke-opacity="0.7" stroke-width="0.9"/>';
    } else if (kind === "rugby") {
      out += G.across(0.1, 0.02, 0.98, 0.52, 0.9);
      out += G.across(0.3, 0.02, 0.98, 0.34, 0.7);
      out += G.across(0.62, 0.02, 0.98, 0.3, 0.7);
      out += G.along(0.06, 0.1, 1, 0.3, 0.7) + G.along(0.94, 0.1, 1, 0.3, 0.7);
      var py = G.yAt(0.1), pl = G.xAt(0.44, 0.1), pr = G.xAt(0.56, 0.1);
      out += '<path d="M' + n(pl) + ',' + n(py) + ' L' + n(pl) + ',' + n(py - 13) +
        ' M' + n(pr) + ',' + n(py) + ' L' + n(pr) + ',' + n(py - 13) +
        ' M' + n(pl - 0.6) + ',' + n(py - 7.2) + ' L' + n(pr + 0.6) + ',' + n(py - 7.2) +
        '" stroke="#fff" stroke-opacity="0.72" stroke-width="1.1" fill="none"/>';
    } else if (kind === "cricket") {
      /* the square, lighter than the outfield */
      out += G.quad(0.39, 0.61, 0.12, 1, "#C6B489", 0.82);
      out += G.quad(0.44, 0.56, 0.12, 1, "#D9CCA6", 0.5);
      out += G.across(0.24, 0.42, 0.58, 0.55, 0.7);
      out += G.across(0.86, 0.4, 0.6, 0.55, 0.9);
      /* stumps at the far end */
      var sy = G.yAt(0.24), sx = G.xAt(0.5, 0.24);
      out += '<path d="M' + n(sx - 0.9) + ',' + n(sy) + ' l0,-3.4 M' + n(sx) + ',' + n(sy) + ' l0,-3.6 M' + n(sx + 0.9) + ',' + n(sy) +
        ' l0,-3.4" stroke="#fff" stroke-opacity="0.85" stroke-width="0.55"/>';
      /* the rope */
      out += '<path d="M' + n(G.xAt(-0.05, 0.1)) + ',' + n(G.yAt(0.1)) + ' Q' + n(G.xAt(0.5, 0.04)) + ',' + n(G.yAt(0.03)) +
        ' ' + n(G.xAt(1.05, 0.1)) + ',' + n(G.yAt(0.1)) + '" fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="0.8"/>';
    } else if (kind === "tennis") {
      out += G.across(0.06, 0.08, 0.92, 0.6, 0.8);
      out += G.across(0.24, 0.22, 0.78, 0.5, 0.7);
      out += G.across(0.94, 0.08, 0.92, 0.6, 1.0);
      out += G.across(0.78, 0.22, 0.78, 0.5, 0.8);
      out += G.along(0.08, 0.06, 0.94, 0.45, 0.7) + G.along(0.92, 0.06, 0.94, 0.45, 0.7);
      out += G.along(0.22, 0.06, 0.94, 0.4, 0.7) + G.along(0.78, 0.06, 0.94, 0.4, 0.7);
      out += G.along(0.5, 0.24, 0.78, 0.4, 0.7);
      /* the net */
      var ny = G.yAt(0.5), nl = G.xAt(0.03, 0.5), nr = G.xAt(0.97, 0.5), nh = (G.yAt(1) - G.yAt(0)) * 0.13 + 2.5;
      out += '<path d="M' + n(nl) + ',' + n(ny) + ' L' + n(nl) + ',' + n(ny - nh) + ' L' + n(nr) + ',' + n(ny - nh) +
        ' L' + n(nr) + ',' + n(ny) + 'Z" fill="#0B0E12" fill-opacity="0.34"/>';
      out += '<path d="M' + n(nl) + ',' + n(ny - nh) + ' L' + n(nr) + ',' + n(ny - nh) + '" stroke="#fff" stroke-opacity="0.8" stroke-width="1"/>';
      for (var t = 0; t <= 16; t++) {
        var xx = nl + (nr - nl) * (t / 16);
        out += '<line x1="' + n(xx) + '" y1="' + n(ny - nh) + '" x2="' + n(xx) + '" y2="' + n(ny) + '" stroke="#fff" stroke-opacity="0.16" stroke-width="0.3"/>';
      }
    } else if (kind === "boxing") {
      out += G.quad(0.1, 0.9, 0.08, 1, "#fff", 0.05);
      out += G.along(0.1, 0.08, 1, 0.3, 0.8) + G.along(0.9, 0.08, 1, 0.3, 0.8);
      out += G.across(0.08, 0.1, 0.9, 0.3, 0.8);
      var cy = G.yAt(0.08);
      out += '<circle cx="' + n(G.xAt(0.5, 0.6)) + '" cy="' + n(G.yAt(0.6)) + '" r="9" fill="none" stroke="' + accent + '" stroke-opacity="0.3" stroke-width="1"/>';
      for (var r = 0; r < 3; r++) {
        out += '<line x1="-8" y1="' + n(cy - 2 - r * 5.4) + '" x2="112" y2="' + n(cy - 3.4 - r * 5.4) +
          '" stroke="#fff" stroke-opacity="' + (0.42 - r * 0.07) + '" stroke-width="0.9"/>';
      }
      out += '<rect x="' + n(G.xAt(0.1, 0.08) - 1) + '" y="' + n(cy - 19) + '" width="2" height="19" fill="#0B0E12" opacity="0.7"/>' +
        '<rect x="' + n(G.xAt(0.9, 0.08) - 1) + '" y="' + n(cy - 19) + '" width="2" height="19" fill="#0B0E12" opacity="0.7"/>';
    }
    return out;
  }

  function cast(kind, G, rnd, kits, span, dz) {
    var out = "", i;
    dz = dz || 1;
    /* sx is a fraction of the visible frame rather than a point on the pitch,
       so nobody ends up standing outside the crop */
    function place(pose, sx, d, scale, flip, ki) {
      d = d * dz;
      var ht = span * (0.16 + 0.46 * d) * (scale || 1);
      var x = sx * 100, y = G.yAt(d);
      out += '<ellipse cx="' + n(x) + '" cy="' + n(y) + '" rx="' + n(ht * 0.24) +
        '" ry="' + n(ht * 0.06) + '" fill="#000" opacity="0.32"/>';
      out += figure(pose, x, y, ht, kits[ki || 0], { flip: flip });
    }
    function ball(sx, d, lift, fill) {
      d = d * dz;
      out += '<circle cx="' + n(sx * 100) + '" cy="' + n(G.yAt(d) - span * lift) + '" r="' + n(span * 0.018) +
        '" fill="' + fill + '" stroke="#0B0E12" stroke-width="0.3"/>';
    }
    if (kind === "football") {
      place("kick", 0.3, 0.76, 1, false, 0);
      place("run", 0.56, 0.58, 0.9, true, 1);
      place("run", 0.8, 0.44, 0.8, false, 1);
      ball(0.44, 0.72, 0.1, "#fff");
    } else if (kind === "rugby") {
      place("run", 0.28, 0.76, 1, false, 0);
      place("run", 0.5, 0.64, 0.92, true, 1);
      place("run", 0.76, 0.48, 0.78, false, 0);
    } else if (kind === "cricket") {
      place("bat", 0.34, 0.8, 1, false, 0);
      place("bowl", 0.6, 0.32, 0.86, false, 1);
      for (i = 0; i < 3; i++) {
        place("ready", 0.14 + i * 0.33, 0.18 + i * 0.05, 0.52, i % 2 === 0, 1);
      }
      ball(0.52, 0.5, 0.12, "#C0392B");
    } else if (kind === "tennis") {
      place("serve", 0.28, 0.78, 1, false, 0);
      place("ready", 0.64, 0.26, 0.86, true, 1);
      ball(0.38, 0.6, 0.3, "#D8E84A");
    } else if (kind === "boxing") {
      place("guard", 0.36, 0.7, 1, false, 0);
      place("guard", 0.58, 0.66, 0.98, true, 1);
    }
    return out;
  }

  /* ---- the one entry point ---- */

  function scene(p, ratio, key) {
    ensureSprites();
    p = p || {};
    var motif = p.motif || "crowd";
    var sport = String(p.sport || key || "").toLowerCase();
    var seed = String(key || "") + "~" + motif + "~" + (p.g ? p.g.join("") : "");
    var rnd = mkRand(seed);

    var w = 100;
    var h = ratio === "wide" ? 56 : ratio === "square" ? 100
      : ratio === "cine" ? 66 : ratio === "tall" ? 133 : 56;

    var kind = resolveKind(motif, sport);

    var uid = "gx" + hashStr(seed + ratio).toString(36);
    var g0 = (p.g && p.g[0]) || "#22314A";
    var g1 = (p.g && p.g[1]) || "#0C121C";
    var kits = KITS[kind] || KITS.football;
    var turf = TURF[kind] || TURF.football;
    var accent = kits[0][0];

    /* a crowd card keeps the camera high in the stands, everything else
       puts the horizon a bit under halfway and gives the pitch the frame */
    var hzY = motif === "crowd" ? h * 0.56
      : ratio === "tall" ? h * (kind === "boxing" ? 0.36 : 0.32)
      : h * (kind === "boxing" ? 0.42 : 0.4);
    var botY = h + 2;

    var out = '<defs>' +
      '<linearGradient id="' + uid + 'sky" x1="0" y1="0" x2="0.3" y2="1">' +
      '<stop offset="0" stop-color="' + g0 + '"/><stop offset="1" stop-color="' + g1 + '"/></linearGradient>' +
      '<linearGradient id="' + uid + 'turf" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + turf[1] + '"/><stop offset="0.45" stop-color="' + turf[0] + '"/>' +
      '<stop offset="1" stop-color="' + turf[1] + '"/></linearGradient>' +
      '<radialGradient id="' + uid + 'glow" cx="0.74" cy="0.12" r="0.8">' +
      '<stop offset="0" stop-color="#fff" stop-opacity="0.3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="' + uid + 'scrim" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="0.55" stop-color="#000" stop-opacity="0.16"/>' +
      '<stop offset="1" stop-color="#000" stop-opacity="0.72"/></linearGradient>' +
      '</defs>';

    out += '<rect x="-2" y="-2" width="' + (w + 4) + '" height="' + (h + 4) + '" fill="url(#' + uid + 'sky)"/>';
    out += '<g>' + stands(w, hzY, rnd, uid, accent, g1) + '</g>';

    var G = Ground(hzY, botY);
    out += '<path d="M' + n(G.xAt(0, 0)) + ',' + n(hzY) + ' L' + n(G.xAt(1, 0)) + ',' + n(hzY) +
      ' L' + n(G.xAt(1, 1)) + ',' + n(botY) + ' L' + n(G.xAt(0, 1)) + ',' + n(botY) + 'Z" fill="url(#' + uid + 'turf)"/>';

    if (kind !== "boxing") {
      for (var s = 0; s < 8; s += 2) {
        out += G.quad(s / 8, (s + 1) / 8, 0, 1, "#fff", 0.045);
      }
    }

    out += markings(kind, G, rnd, accent);
    out += cast(kind, G, rnd, kits, (botY - hzY), ratio === "tall" ? 0.66 : 1);

    out += '<rect x="-2" y="-2" width="' + (w + 4) + '" height="' + (h + 4) + '" fill="url(#' + uid + 'glow)"/>';
    out += '<rect x="-2" y="-2" width="' + (w + 4) + '" height="' + (h + 4) + '" fill="url(#' + uid + 'scrim)"/>';

    return '<svg class="photo" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      out + '</svg>';
  }

  function resolveKind(motif, sport) {
    sport = String(sport || "").toLowerCase();
    return motif === "court" ? "tennis"
      : motif === "oval" ? "cricket"
      : motif === "ring" ? "boxing"
      : motif === "track" ? "f1"
      : /formula|grand prix/.test(sport) ? "f1"
      : /rugby|six nations|ireland|wales/.test(sport) ? "rugby"
      : /cricket|ashes|test match|lord/.test(sport) ? "cricket"
      : /tennis|wimbledon|raducanu/.test(sport) ? "tennis"
      : /box|fight/.test(sport) ? "boxing"
      : motif === "pitch" ? "football"
      : "football";
  }

  /* ==========================================================================
     Photography
     ==========================================================================
     Pictures are tagged with the phase of a fixture they belong to, not just
     the sport, and the picker asks for the phase the page is currently in.
     So build-up shows team news and previews, live shows the ball in play,
     and full time shows the celebration. The same card in a different
     lifecycle state gets a different photograph, which is the point.

     Three crops per picture live in img/: wide (16:9), tall (9:13) and sq.
     A picture whose shape disagrees badly with the frame is laid across a
     blurred bed of itself rather than cropped into a thin slice.
     ========================================================================== */

  var PHASE = { buildup: "pre", live: "live", companion: "live", fulltime: "post" };

  var PHOTOS = {
    football: [
      { s: "fb-xi", p: "pre", a: "A pundit's England XI for tonight" },
      { s: "fb-debate", p: "pre", a: "Two England selection calls, side by side" },
      { s: "fb-palmer", p: "pre", a: "A pundit makes the case for Cole Palmer" },
      { s: "fb-kane", p: "live", a: "England shoot from the edge of the area" },
      { s: "fb-celebrate", p: "live", a: "England celebrate the opening goal" },
      { s: "fb-highlights", p: "live", a: "England on the attack" },
      { s: "fb-celebrate", p: "post", a: "England players celebrate a goal" },
      { s: "fb-highlights", p: "post", a: "Highlights of the England match" },
      { s: "fb-bellingham", p: "post", a: "England's best player of the night" }
    ],
    tennis: [
      { s: "tn-smile", p: "pre", a: "Raducanu at the All England Club before her match" },
      { s: "tn-stretch", p: "live", a: "Raducanu stretches for a backhand on grass" },
      { s: "tn-tracking", p: "live", a: "Raducanu tracks the ball on the baseline" },
      { s: "tn-dejected", p: "live", a: "Raducanu after dropping serve" },
      { s: "tn-smile", p: "post", a: "Raducanu smiles after the match" },
      { s: "tn-best", p: "post", a: "Raducanu roars after taking the match" }
    ],
    rugby: [
      { s: "rg-listen", p: "pre", a: "An Ireland forward before kick-off" },
      { s: "rg-flyhalves", p: "pre", a: "The two fly-halves, side by side" },
      { s: "rg-wales", p: "pre", a: "A Wales forward leaves the field" },
      { s: "rg-maul", p: "live", a: "Wales and Ireland forwards contest a maul" },
      { s: "rg-run", p: "live", a: "A back runs at the defence" },
      { s: "rg-listen", p: "live", a: "An Ireland forward waits for the TMO" },
      { s: "rg-maul", p: "post", a: "The maul that decided the afternoon" },
      { s: "rg-roar", p: "post", a: "An Ireland player roars at the final whistle" }
    ],
    f1: [
      { s: "bb-f1city", p: "pre", a: "The Baku street circuit from above" },
      { s: "bb-f1lead", p: "live", a: "A McLaren on the Baku street circuit" },
      { s: "bb-f1merc", p: "live", a: "A Mercedes in first practice" },
      { s: "bb-f1lead", p: "post", a: "First practice in Baku" }
    ],
    cricket: [
      { s: "ck-squad", p: "pre", a: "The England Test squad" },
      { s: "ck-ball", p: "pre", a: "An England bowler before play" },
      { s: "ck-mic", p: "any", a: "A BBC Sport microphone at the Ashes" },
      { s: "ck-starc", p: "live", a: "Starc celebrates as an England batter walks off" },
      { s: "ck-wicket", p: "live", a: "England celebrate a wicket" },
      { s: "ck-stokes", p: "live", a: "Stokes rallies the crowd from the outfield" },
      { s: "ck-ball", p: "live", a: "An England bowler works on the ball" },
      { s: "ck-root", p: "post", a: "Root celebrates a Test century" },
      { s: "ck-lords", p: "post", a: "England celebrate a wicket at Lord's" },
      { s: "ck-huddle", p: "post", a: "England celebrate together in the field" }
    ]
  };

  /* every slug and the crops that exist for it, so a card never asks for a
     file that was never cut */
  var SLOTS = {
    "cl-trophy": "wide",
    "cl-training": "wide",
    "ar-court": "wide tall sq full",
    "ar-debut": "tall sq full",
    "ar-ident": "wide sq full",
    "ar-lords": "wide sq full",
    "ar-mag93": "tall sq full",
    "ar-mag99": "tall sq full",
    "ar-notice": "wide sq full",
    "ar-table": "sq full",
    "bb-gordon": "wide sq",
    "bb-oldtrafford": "wide sq",
    "bb-dezerbi": "wide sq",
    "bb-f1baku": "wide sq",
    "bb-heat": "wide sq",
    "bb-saints": "wide sq",
    "bb-irish": "wide sq",
    "bb-edwards": "wide sq",
    "bb-welsh": "wide sq",
    "bb-baxter": "wide sq",
    "bb-mcburnie": "wide sq",
    "bb-chelseaw": "wide sq",
    "bb-alcaraz": "wide sq",
    "bb-agassi": "wide sq",
    "bb-keothavong": "wide sq",
    "bb-daviscup": "wide sq",
    "bb-wheelchair": "wide sq",
    "bb-balls": "wide sq",
    "bb-antonelli": "wide sq",
    "bb-ball": "wide sq",
    "bb-balogun": "wide sq",
    "bb-chequered": "wide sq",
    "bb-elvira": "wide sq",
    "bb-f1city": "wide sq",
    "bb-f1lead": "wide sq",
    "bb-f1merc": "wide sq",
    "bb-fulham": "wide sq",
    "bb-furyaj": "wide sq",
    "bb-gbboxers": "wide sq",
    "bb-hadjar": "wide sq",
    "bb-hadjar2": "wide sq",
    "bb-hodgkinson": "wide sq",
    "bb-hunter": "wide sq",
    "bb-infantino": "wide sq",
    "bb-ingebrigtsen": "wide sq",
    "bb-itauma": "wide sq",
    "bb-kaptein": "wide sq",
    "bb-kaptein2": "wide sq",
    "bb-kenya": "wide sq",
    "bb-lopez": "wide sq",
    "bb-mcilroy1": "wide sq",
    "bb-mcilroy2": "wide sq",
    "bb-monaco": "wide sq",
    "bb-ngetich": "wide sq",
    "bb-orourke": "wide sq",
    "bb-paredes": "wide sq",
    "bb-quiz63": "wide sq",
    "bb-quiz64": "wide sq",
    "bb-quiz65": "wide sq",
    "bb-quiz66": "wide sq",
    "bb-quizwsl": "wide sq",
    "bb-relive": "wide sq",
    "bb-scott": "wide sq",
    "bb-spaun": "wide sq",
    "bb-speedsuit": "wide sq",
    "bb-tuchel": "wide sq",
    "bb-walsh": "wide sq",
    "bb-wctransfers": "wide sq",
    "bb-westham": "wide sq",
    "bb-womenrace": "wide sq",
    "bb-woakes": "wide sq",
    "bb-lordsview": "wide sq",
    "bb-ckart": "wide sq",
    "bb-radiowales": "wide sq",
    "ck-ashsquad": "tall sq",
    "ck-ball": "wide tall sq",
    "ck-bat": "wide tall sq",
    "ck-carse": "tall sq",
    "ck-hope": "tall sq",
    "ck-huddle": "wide tall sq",
    "ck-lords": "wide tall sq",
    "ck-mic": "wide tall sq",
    "ck-root": "wide tall sq",
    "ck-squad": "wide tall sq",
    "ck-starc": "wide tall sq",
    "ck-stokes": "wide tall sq",
    "ck-tms": "tall sq",
    "ck-wicket": "wide tall sq",
    "ck-xi": "wide tall sq",
    "fb-bellingham": "wide tall sq",
    "fb-celebrate": "wide tall sq",
    "fb-debate": "wide tall sq",
    "fb-highlights": "wide sq",
    "fb-kane": "wide tall sq",
    "fb-palmer": "wide tall sq",
    "fb-tuchel": "tall sq",
    "fb-xi": "wide tall sq",
    "rg-flyhalves": "wide sq",
    "rg-listen": "wide tall sq",
    "rg-maul": "wide tall sq",
    "rg-roar": "wide tall sq",
    "rg-run": "wide tall sq",
    "rg-squad": "wide tall sq",
    "rg-wales": "wide tall sq",
    "tn-best": "wide tall sq",
    "tn-books": "tall sq",
    "tn-challenge": "tall sq",
    "tn-dejected": "wide tall sq",
    "tn-plan": "wide tall sq",
    "tn-secret": "tall sq",
    "tn-smile": "wide tall sq",
    "tn-stretch": "wide tall sq",
    "tn-tracking": "wide sq"
  };

  function slotFor(slug, ratio) {
    var want = ratio === "tall" ? "tall" : ratio === "square" ? "sq" : "wide";
    var have = SLOTS[slug] || "";
    if (have.indexOf(want) >= 0) { return want; }
    return have.indexOf("wide") >= 0 ? "wide" : have.indexOf("tall") >= 0 ? "tall" : "sq";
  }

  /* pictures already on the screen being drawn; reset at the start of each
     full render so a picture appears once per screen, not once per card */
  var USED = {};
  function resetUsed() { USED = {}; }

  function imgTag(slug, alt, ratio) {
    USED[slug] = (USED[slug] || 0) + 1;
    return '<img class="photo" src="img/' + slug + '-' + slotFor(slug, ratio) + '.jpg" ' +
      'loading="lazy" decoding="async" alt="' + esc(alt || "") + '">';
  }

  function pickPhoto(kind, key) {
    var pool = PHOTOS[kind];
    if (!pool || !pool.length) { return null; }
    var want = PHASE[lc()] || "live";
    if (want === "post" && hideOn()) { want = "pre"; }
    var fit = pool.filter(function (x) { return x.p === want || x.p === "any"; });
    if (!fit.length) {
      /* a preview frame stands in for live far better than a celebration does */
      fit = pool.filter(function (x) { return x.p !== "post"; });
    }
    if (!fit.length) { fit = pool; }
    /* prefer anything not yet on this screen, then anything in the sport */
    var fresh = fit.filter(function (x) { return !USED[x.s]; });
    if (!fresh.length) { fresh = pool.filter(function (x) { return !USED[x.s] && (x.p !== "post" || want === "post"); }); }
    if (fresh.length) { fit = fresh; }
    return fit[hashStr(String(key) + "|" + kind + "|" + lc()) % fit.length];
  }

  function photoSVG(p, ratio, key) {
    p = p || {};
    if (p.img) { return imgTag(p.img, p.cap || p.t || "", ratio); }
    var kind = resolveKind(p.motif || "crowd", p.sport || key);
    var hit = pickPhoto(kind, key);
    if (hit) { return imgTag(hit.s, hit.a, ratio); }
    return scene(p, ratio, key);
  }

  function badge(colour, initials) {
    return '<span class="tbadge" style="background:' + colour + '" aria-hidden="true">' + esc(initials) + '</span>';
  }

  var ARROW = '<svg class="secarrow" width="26" height="12" viewBox="0 0 26 12" aria-hidden="true">' +
    '<line x1="1" y1="6" x2="13" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1.6 3.2"/>' +
    '<path d="M15 2.5 19.5 6 15 9.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<line x1="15" y1="6" x2="24" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  function feedHead(title, toast) {
    return '<button class="feedhead" type="button" data-toast="' + esc(toast || (title + " is not built out in this prototype.")) + '">' +
      '<span>' + esc(title) + '</span>' + ARROW + '</button>';
  }

  /* ------------------------------------------------------------- panels */

  var P = {};

  P.involve = function (p) {
    return '<div class="involve"><div class="rule-y" style="margin:0"></div><div class="inner">' +
      '<div class="ihead">' + I.chat + '<div><h3>' + esc(p.title) + '</h3><p>' + esc(p.body) + '</p></div></div>' +
      '<div><button class="btn" type="button" data-toast="' + esc(p.toast) + '">' + esc(p.cta) + '</button></div></div></div>';
  };

  P.storyline = function (p) {
    return '<div class="c"><div class="storyline"><div class="sk">' + esc(p.kicker) + '</div><p>' + esc(p.body) + '</p></div></div>';
  };

  P.note = function (p) { return '<p class="note">' + esc(p.body) + '</p>'; };

  P.kv = function (p) {
    return '<dl class="kvgrid">' + p.items.map(function (it) {
      return '<div><dt>' + esc(it[0]) + '</dt><dd>' + esc(it[1]) + (it[2] ? '<small>' + esc(it[2]) + '</small>' : "") + '</dd></div>';
    }).join("") + '</dl>';
  };

  P.stats = function (p) {
    return '<div class="c">' + p.rows.map(function (r) {
      return '<div class="statrow"><div class="statlab"><span class="v">' + esc(r[0]) + '</span>' +
        '<span class="k">' + esc(r[1]) + '</span><span class="v r">' + esc(r[2]) + '</span></div>' +
        '<div class="statbar"><span class="sb l"><i style="width:' + r[3] + '%"></i></span><span class="mid"></span>' +
        '<span class="sb r"><i style="width:' + (100 - r[3]) + '%"></i></span></div></div>';
    }).join("") + '</div>';
  };

  P.h2h = function (p) {
    return '<div class="h2h">' + p.results.map(function (r) {
      return '<span class="' + (r === "W" ? "w" : r === "L" ? "l" : "") + '">' + r + '</span>';
    }).join("") + '</div>';
  };

  function deckCard(ix, idx) {
    var it = DROP[ix];
    return '<button class="short" type="button" data-play="' + ix + '">' +
      '<span class="thumb">' + photoSVG(it, "tall", it.sport + " " + it.t) + '<span class="play">' + I.playtri + '</span>' +
      '<span class="dur">' + esc(it.dur) + '</span></span>' +
      '<span class="kick">' + esc(it.sport) + '</span><span class="st">' + esc(it.t) + '</span></button>';
  }

  P.shorts = function (p) {
    return '<div class="dropwrap">' +
      '<span class="droppill">' + I.flame + '<b>' + esc(p.label || "Your daily drop") + '</b>' +
      '<span class="dropcount">' + I.stack + DROP.length + ' items</span></span>' +
      '<div class="rail droprail">' + p.deck.map(deckCard).join("") + '</div></div>';
  };

  P.shortsgrid = function (p) {
    return '<div class="focusrail" data-focusrail>' + p.deck.map(function (ix) {
      var it = DROP[ix];
      return '<button class="fcard" type="button" data-play="' + ix + '">' +
        '<span class="fphoto">' + photoSVG(it, "tall", it.sport + " " + it.t) +
        '<span class="fscrim"></span>' +
        '<span class="play">' + I.playtri + '</span>' +
        '<span class="dur">' + esc(it.dur) + '</span>' +
        '<span class="fmeta"><span class="fkick">' + esc(it.sport) + '</span>' +
        (it.baked ? "" : '<span class="ftitle">' + esc(it.t) + '</span>') + '</span></span></button>';
    }).join("") + '</div>';
  };

  P.opta = function () {
    var m = MOMENTS.filter(function (x) { return x.id === S.moment; })[0] || MOMENTS[0];
    var shown = lc() === "companion" ? mmss(Math.max(0, S.dataSecs - S.offset)) : mmss(S.dataSecs);
    return '<div class="optacard">' +
      '<div class="optahead"><span class="optaicon">' + I.optabars + '</span>' +
      '<span><span class="t1">Live match view</span><br><span class="t2">Powered by Opta</span></span>' +
      '<button class="linkbtn" type="button" data-optatoggle aria-expanded="' + S.optaOpen + '">' +
      (S.optaOpen ? 'Hide ⌃' : 'Show ⌄') + '</button></div>' +
      '<div class="optabody"' + (S.optaOpen ? '' : ' hidden') + '>' +
      '<div class="optaclock"><span class="l" id="opta-clock">' + shown + '</span>' +
      '<button class="iconbtn" type="button" style="width:30px;height:30px" data-toast="Full-screen pitch view is not wired up." aria-label="Expand">' + I.expand + '</button></div>' +
      '<div class="pitchbox">' + pitchSVG(m) + '</div>' +
      '<div class="optacap"><div class="c1">' + esc(m.label) + '</div><div class="c2">' + esc(m.sub) + '</div></div>' +
      '<div class="optactrl">' +
      '<button class="ctrlbtn" type="button" data-playpause aria-label="' + (S.playing ? "Pause" : "Play") + '">' + (S.playing ? I.pause : I.play) + '</button>' +
      MOMENTS.map(function (x) {
        return '<button class="chip" type="button" data-moment="' + x.id + '" aria-pressed="' + (x.id === S.moment) + '">' + esc(x.chip) + '</button>';
      }).join("") +
      '<span class="spacer"></span>' +
      '<button class="ctrlbtn" type="button" data-toast="Feed refreshed. 4 new events." aria-label="Refresh">' + I.refresh + '</button></div>' +
      '</div></div>';
  };

  /* two options add up to a hundred, so one bar and one number say it all */
  function splitBar(opts, split, chosen) {
    var lead = split[0] >= split[1] ? 0 : 1;
    return '<div class="splitbar"><div class="sblabs"><span class="' + (chosen === 0 ? "me" : "") + '">' + esc(opts[0]) + (chosen === 0 ? " · you" : "") + '</span>' +
      '<span class="' + (chosen === 1 ? "me" : "") + '">' + esc(opts[1]) + (chosen === 1 ? " · you" : "") + '</span></div>' +
      '<div class="sbtrack"><i class="a' + (chosen === 0 ? " me" : "") + '" style="width:' + split[0] + '%"></i><i class="b' + (chosen === 1 ? " me" : "") + '" style="width:' + split[1] + '%"></i></div>' +
      '<p class="sbline"><b>' + split[lead] + '%</b> said ' + esc(opts[lead]) + '</p></div>';
  }

  function resultRows(opts, split, chosen) {
    if (opts.length === 2) { return splitBar(opts, split, chosen); }
    return '<div class="results">' + opts.map(function (o, j) {
      var me = j === chosen;
      return '<div class="resrow"><div class="reslab"><span>' + esc(o) + (me ? " · you" : "") + '</span><b>' + split[j] + '%</b></div>' +
        '<div class="track"><i class="' + (me ? "me" : "") + '" style="width:' + split[j] + '%"></i></div></div>';
    }).join("") + '</div>';
  }

  P.poll = function (p) {
    var chosen = S.votes[p.id], done = chosen !== undefined;
    var head = p.tag ? '<div class="alerttag">' + esc(p.tag) + '</div>' : "";
    return '<div class="c' + (p.kind === "alert" ? " alert" : "") + '">' + head +
      '<p class="q">' + esc(p.q) + '</p>' +
      '<div class="opts' + (p.opts.length === 2 && !p.big ? " two" : "") + '" data-poll="' + p.id + '">' +
      p.opts.map(function (o, j) {
        return '<button class="optbtn" type="button" aria-pressed="' + (j === chosen) + '" data-i="' + j + '"' + (done ? " disabled" : "") + '>' + esc(o) + '</button>';
      }).join("") + '</div>' +
      (done ? resultRows(p.opts, p.split, chosen) : "") +
      '<p class="tally">' + esc(done ? (p.after || "Counted.") : (p.tally || "")) + '</p></div>';
  };

  P.predict = function () {
    var COMMON = { "2-1": 14, "1-1": 12, "2-0": 11, "1-0": 9, "3-1": 7, "0-0": 5, "1-2": 5, "3-0": 4 };
    var key = S.predict.h + "-" + S.predict.a, mine = COMMON[key] || 1, rows = "";
    var names = ev().id === "rugby" ? ["Wales", "Ireland"] : ["England", "Netherlands"];
    if (S.predict.locked) {
      var keys = Object.keys(COMMON).slice(0, 4);
      if (keys.indexOf(key) === -1) { keys[3] = key; }
      keys.sort(function (a, b) { return (COMMON[b] || mine) - (COMMON[a] || mine); });
      rows = '<div class="results">' + keys.map(function (k) {
        var pct = COMMON[k] || mine, me = k === key;
        return '<div class="resrow"><div class="reslab"><span>' + k.replace("-", " – ") + (me ? " · your call" : "") +
          '</span><b>' + pct + '%</b></div><div class="track"><i class="' + (me ? "me" : "") +
          '" style="width:' + Math.min(100, pct * 6) + '%"></i></div></div>';
      }).join("") + '</div>';
    }
    return '<div class="c"><div class="stepgrid">' +
      ["h", "a"].map(function (t, i) {
        return '<div class="steprow"><span class="n">' + names[i] + '</span>' +
          '<button class="stepb" type="button" data-step="' + t + '" data-d="-1" aria-label="' + names[i] + ' one fewer"' + (S.predict.locked ? " disabled" : "") + '>&minus;</button>' +
          '<span class="stepv">' + S.predict[t] + '</span>' +
          '<button class="stepb" type="button" data-step="' + t + '" data-d="1" aria-label="' + names[i] + ' one more"' + (S.predict.locked ? " disabled" : "") + '>+</button></div>';
      }).join("") + '</div>' + rows +
      '<p class="tally">' + (S.predict.locked
        ? (mine >= 10 ? "You're with the crowd. " + mine + "% agree." : "Bold. Only " + mine + "% went for that.")
        : "Locks at kick-off. Counts towards your Predictor season.") + '</p>' +
      '<button class="btn block ' + (S.predict.locked ? "" : "solid") + '" type="button" data-lock style="margin-top:12px"' + (S.predict.locked ? " disabled" : "") + '>' +
      (S.predict.locked ? "Locked: " + S.predict.h + " – " + S.predict.a : "Lock in " + S.predict.h + " – " + S.predict.a) + '</button></div>';
  };

  P.countdown = function (p) {
    return '<div class="c"><div class="cd" id="cd" data-h="' + p.h + '" data-m="' + p.m + '" data-s="' + p.s + '">' +
      '<span class="cdu"><span class="cdn" id="cd-h">' + pad(p.h) + '</span><span class="cdl">hrs</span></span>' +
      '<span class="cdsep">:</span><span class="cdu"><span class="cdn" id="cd-m">' + pad(p.m) + '</span><span class="cdl">min</span></span>' +
      '<span class="cdsep">:</span><span class="cdu"><span class="cdn" id="cd-s">' + pad(p.s) + '</span><span class="cdl">sec</span></span>' +
      '</div></div>';
  };

  P.toggle = function (p) {
    var on = !!S.toggles[p.id];
    return '<div style="margin-top:10px"><button class="btn block ' + (on ? "" : "solid") + '" type="button" data-toggleid="' + p.id + '" aria-pressed="' + on + '">' +
      esc(on ? p.on + " ✓" : p.label) + '</button><p class="tally">' + esc(on ? p.onNote : p.off) + '</p></div>';
  };

  P.league = function () {
    return '<div class="c"><div class="lgtop"><span class="lgpos">306,107<small>th of 1.2m</small></span>' +
      '<span class="lgmove">▲ 8,402 last week</span></div>' +
      '<div class="results" style="margin-top:14px">' +
      '<div class="resrow"><div class="reslab"><span>Exact calls this season</span><b>2 of 11</b></div><div class="track"><i class="me" style="width:18%"></i></div></div>' +
      '<div class="resrow"><div class="reslab"><span>Correct outcomes</span><b>7 of 11</b></div><div class="track"><i class="alt" style="width:64%"></i></div></div>' +
      '</div></div>';
  };

  P.leagueft = function () {
    return '<div class="c"><div class="lgtop"><span class="lgpos">214,903<small>rd of 1.2m</small></span>' +
      '<span class="lgmove">▲ 91,204</span></div>' +
      '<p class="note" style="margin-top:6px">Your highest position this season.</p>' +
      '<div class="results" style="margin-top:12px"><div class="resrow"><div class="reslab"><span>Beat your mates</span><b>4 of 6</b></div>' +
      '<div class="track"><i class="me" style="width:67%"></i></div></div></div>' +
      '<button class="btn block" type="button" data-toast="Card copied. Paste it into the group chat." style="margin-top:12px">Share your card</button></div>';
  };

  P.momentum = function () {
    return '<div class="c">' + momentumSVG() +
      '<div class="momkey"><span class="a"><b>England</b> 71% of the last 10</span><span class="b"><b>Netherlands</b> 29%</span></div></div>';
  };

  P.sortrow = function () {
    return '<div class="selectrow"><span>Show</span><select id="feedsort" aria-label="Sort live reporting">' +
      '<option value="new"' + (S.feedNewest ? " selected" : "") + '>Most recent</option>' +
      '<option value="old"' + (S.feedNewest ? "" : " selected") + '>Oldest first</option></select></div>';
  };

  P.feed = function (p) {
    var posts = S.feedNewest ? p.posts : p.posts.slice().reverse();
    return '<p class="byline">' + esc(p.author) + '</p><div class="feed">' +
      posts.map(function (q, i) {
        var up = 8 + (q[1].length * 3) % 41, down = 1 + (q[2].length % 7);
        /* the latest post, while the match is on, carries the site's NEW tag */
        var isNew = q === p.posts[0] && (lc() === "live" || lc() === "companion");
        return '<article class="post' + (isNew ? " isnew" : "") + '">' +
          '<span class="stamp">' + esc(q[0]) + '</span>' + (isNew ? '<span class="pnew">NEW</span>' : "") +
          '<div class="postbody">' +
          (q[4] ? '<div class="pev ' + esc(q[5] || "") + '">' + evMark(q[5]) + '<span><b>' + esc(q[1]) + '</b><small>' + esc(q[4]) + '</small></span></div>'
            : q[10] ? '<h3 class="pgi">' + I.msg + '<span>' + esc(q[1]) + '</span></h3>'
            : '<h3' + (q[3] ? ' class="shout"' : "") + '>' + esc(q[1]) + '</h3>') +
          (q[8] ? '<p class="psub">' + esc(q[8]) + '</p>' : "") +
          (q[9] ? '<p class="pcrest">' + (crestImg(ev().id, q[9], "pc") || flagFor(q[9])) + '<b>' + esc(q[9]) + '</b></p>' : "") +
          (q[11] ? '<p class="pby"><span class="wpav bbc" aria-hidden="true"><i>B</i><i>B</i><i>C</i></span><span><b>' + esc(q[11][0]) + '</b><small>' + esc(q[11][1]) + '</small></span></p>' : "") +
          (q[6] ? '<figure class="pimg">' + imgTag(q[6], q[1], "wide") + (q[7] ? '<figcaption>' + esc(q[7]) + '</figcaption>' : "") + '</figure>' : "") +
          (q[10] ? '<div class="pfans">' + q[10].map(function (m) { return '<blockquote><p>' + esc(m[0]) + '</p></blockquote><p class="pfan">' + esc(m[1]) + '</p>'; }).join("") + '</div>' : "") +
          (Array.isArray(q[2]) ? q[2] : [q[2]]).filter(function (x) { return x !== ""; }).map(function (para) {
            var m = /^\*\*(.+?)\*\*\s*(.*)$/.exec(para);
            return '<p>' + (m ? '<b>' + esc(m[1]) + '</b> ' + esc(m[2]) : esc(para)) + '</p>';
          }).join("") +
          '<div class="react"><button class="rbtn" type="button" data-toast="Thanks for the feedback.">' + I.thumbup + up + '</button>' +
          '<button class="rbtn" type="button" data-toast="Thanks for the feedback.">' + I.thumbdown + down + '</button>' +
          '<button class="rbtn share" type="button" data-toast="Share sheet is not wired up in this prototype.">' + I.shareflat + 'Share</button></div>' +
          '</div></article>';
      }).join("") + '</div>';
  };

  function evMark(k) {
    if (k === "wicket") {
      return '<svg class="pevic" viewBox="0 0 32 32" aria-hidden="true"><path d="M9 12v14M16 12v14M23 12v14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M8 9l7-2M17 7l7 2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M4 4l6 5M28 4l-6 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".7"/></svg>';
    }
    var n = k === "six" ? "6" : "4";
    return '<span class="pevic num" aria-hidden="true">' + n + '</span>';
  }

  P.formation = function (p) {
    return '<div class="formation">' + formationSVG(p.shape, p.team) +
      '<div class="formmeta"><span><b>' + esc(p.label) + '</b> ' + esc(p.shape) + '</span><span>' + esc(p.sub) + '</span></div></div>';
  };

  P.xi = function (p) {
    return '<div class="playerlist">' + p.list.map(function (pl) {
      var hot = pl[0] === p.highlight;
      return '<div class="pl"><span class="num">' + pl[0] + '</span><span class="pn">' + esc(pl[1]) + '</span>' +
        '<span class="pr' + (hot ? " hot" : "") + '">' + esc(hot ? p.hint : pl[2]) + '</span></div>';
    }).join("") + '</div>';
  };

  P.rating = function (p) {
    var key = ev().id;
    if (S.ratings[key] === undefined) { S.ratings[key] = p.avg + 0.5; }
    var v = S.ratings[key], diff = (v - p.avg).toFixed(1);
    var line = Math.abs(diff) < 0.3 ? "Right on the national average. Stays open until the end."
      : (diff > 0 ? "You're " + diff + " above the country. " : "You're " + Math.abs(diff).toFixed(1) + " below the country. ") + "Stays open until the end.";
    return '<div class="c"><div class="ratehead"><span class="who">' + esc(p.who) + '</span>' +
      '<span class="val" id="rateval">' + v.toFixed(1) + '</span></div>' +
      '<input type="range" id="rate" min="1" max="10" step="0.1" value="' + v + '" aria-label="Rate ' + esc(p.who) + ' out of ten">' +
      '<div class="results" style="margin-top:8px"><div class="resrow"><div class="reslab"><span>Fan average, ' + esc(p.count) + '</span><b>' + p.avg + '</b></div>' +
      '<div class="track"><i class="alt" style="width:' + (p.avg * 10) + '%"></i></div></div></div>' +
      '<p class="tally" id="ratenote">' + esc(line) + '</p></div>';
  };

  P.scored = function (p) {
    return '<div class="c"><div class="bigpts"><span class="v">' + p.total + '</span>' +
      '<span class="l">points<br>of a possible ' + p.max + '</span></div><div class="scored">' +
      p.rows.map(function (r) {
        return '<div class="sc-row"><span class="sc-m ' + (r[0] ? "y" : "n") + '">' + (r[0] ? "✓" : "✕") + '</span>' +
          '<span class="sc-t">' + esc(r[1]) + '<small>' + esc(r[2]) + '</small></span>' +
          '<span class="sc-p' + (r[0] ? " on" : "") + '">+' + r[3] + '</span></div>';
      }).join("") + '</div><p class="tally">' + esc(p.note) + '</p></div>';
  };

  P.streak = function (p) {
    return '<div class="c"><div class="streak">' + p.weeks.map(function (w, i) {
      return '<span class="wk ' + (p.on.indexOf(i) > -1 ? "on" : (i === p.next ? "next" : "")) + '">' + esc(w) + '</span>';
    }).join("") + '</div><p class="note" style="margin:0">' + esc(p.note) + '</p></div>';
  };

  P.nextfix = function (p) {
    var on = !!S.toggles["next-" + ev().id];
    return '<div class="c"><div class="fixrow"><span class="f1">' + esc(p.fixture) + '</span><span class="f2">' + esc(p.when) + '</span></div>' +
      '<p class="note" style="margin:0 0 12px">' + esc(p.sub) + '</p>' +
      '<button class="btn block ' + (on ? "" : "solid") + '" type="button" data-toggleid="next-' + ev().id + '" aria-pressed="' + on + '">' +
      esc(on ? p.on + " ✓" : p.cta) + '</button><p class="tally">' + esc(on ? p.onNote : p.off) + '</p></div>';
  };

  P.potm = function (p) {
    return '<div class="c"><div class="potmtop"><span class="pname">' + esc(p.name) + '</span>' +
      '<span class="pscore">' + esc(p.score) + '</span></div>' +
      '<p class="note" style="margin:4px 0 0">' + esc(p.sub) + '</p><div class="results" style="margin-top:14px">' +
      p.rows.map(function (r) {
        return '<div class="resrow"><div class="reslab"><span>' + esc(r[0]) + '</span><b>' + r[1].toFixed(1) + '</b></div>' +
          '<div class="track"><i class="' + (r[2] ? "me" : "alt") + '" style="width:' + (r[1] * 10) + '%"></i></div></div>';
      }).join("") + '</div></div>';
  };

  P.sync = function () {
    var off = S.offset, data = S.dataSecs, cls, msg, label;
    var src = hasVideo(ev()) ? "telly" : "radio";
    if (off === 0) {
      cls = "warn"; label = "Ahead of your " + src;
      msg = "<b>You'll see it first.</b> With no delay set, this screen tells you about the moment roughly 23 seconds before your " + src + " does.";
    } else if (off < 12) {
      cls = "warn"; label = "Probably ahead";
      msg = "<b>Still ahead.</b> Most living-room streams sit 20 to 30 seconds behind. Try nudging it further.";
    } else if (off > 34) {
      cls = "warn ok"; label = "Running late";
      msg = "<b>Behind the picture.</b> Safe from spoilers, though reactions will feel a beat late.";
    } else {
      cls = "warn ok"; label = "In sync";
      msg = "<b>Matched.</b> Nothing on this screen will get ahead of your " + src + ".";
    }
    return '<div class="c"><p class="syncwhy">Live data reaches this phone about 23 seconds before the picture reaches your ' + src +
      '. This screen waits, so a goal never turns up here before you see it.</p>' +
      '<div class="synctop"><span>Status</span><b id="syncstate">' + label + '</b></div>' +
      '<div class="clocks"><span class="ck"><span class="cl">Live data</span><span class="cv" id="c-data">' + mmss(data) + '</span></span>' +
      '<span class="ckgap">' + (off === 0 ? "0s" : "−" + off + "s") + '</span>' +
      '<span class="ck ckyour"><span class="cl">Your ' + src + '</span><span class="cv" id="c-tv">' + mmss(Math.max(0, data - off)) + '</span></span></div>' +
      '<input type="range" id="offset" min="0" max="45" step="1" value="' + off + '" aria-label="Seconds your broadcast is behind the live data">' +
      '<div class="rangeends"><span>Live data</span><span>45s behind</span></div>' +
      '<div class="' + cls + '" style="margin-top:14px">' + msg + '</div>' +
      '<p class="tally">Only move the slider if this screen gets ahead of your ' + src + '. Set once, remembered for every match.</p></div>';
  };

  P.quiz = function (p) {
    var q = S.quiz[p.id];
    if (!q) { q = S.quiz[p.id] = { answered: false, left: p.seconds }; }
    return '<div class="c"><div class="qbar"><i class="qbar-i" data-qid="' + p.id + '" style="width:' + (q.left / p.seconds * 100) + '%"></i></div>' +
      '<p class="q">' + esc(p.q) + '</p><div class="opts" data-quiz="' + p.id + '">' +
      p.opts.map(function (o, j) {
        return '<button class="optbtn" type="button" aria-pressed="' + (q.answered === j) + '" data-i="' + j + '"' +
          (q.answered !== false ? " disabled" : "") + '>' + esc(o) + '</button>';
      }).join("") + '</div><p class="tally" data-qtally="' + p.id + '">' +
      esc(q.answered !== false
        ? (q.answered === p.correct ? "Right. " : "Not that one. ") + p.why
        : "Fires in the gaps only. Never while the ball is live.") + '</p></div>';
  };

  P.pundit = function (p) {
    var id = "pundit-" + ev().id + "-" + p.when;
    var chosen = S.votes[id], done = chosen !== undefined;
    return '<div class="c"><div class="pundit"><span class="pav">' + esc(p.initials) + '</span>' +
      '<div><p class="pq">“' + esc(p.quote) + '”</p><span class="pw">' + esc(p.who) + ' · ' + esc(p.when) + '</span></div></div>' +
      '<div class="opts two" style="margin-top:14px" data-poll="' + id + '">' +
      p.opts.map(function (o, j) {
        return '<button class="optbtn" type="button" aria-pressed="' + (j === chosen) + '" data-i="' + j + '"' + (done ? " disabled" : "") + '>' + esc(o) + '</button>';
      }).join("") + '</div>' + (done ? resultRows(p.opts, p.split, chosen) : "") +
      '<p class="tally">' + esc(done ? p.after : "Tap to see where the country sits.") + '</p></div>';
  };

  P.signin = function () {
    return '<div class="c dashed"><p class="signp">You\'ve answered <b>' + S.answered + '</b> thing' + (S.answered === 1 ? "" : "s") +
      ' today. Sign in to keep them, see how you did at the end, and get your Predictor score.</p>' +
      '<p class="tally signnote">' + (S.signedIn ? "Saved. Anything you answer is scored at the end."
        : (S.answered >= 3 ? "Fans who answer three or more are 4x likelier to come back next week"
          : "1 of 4 companion fans signs in before the end")) + '</p>' +
      '<button class="btn block ' + (S.signedIn ? "" : "solid") + '" type="button" data-signin' + (S.signedIn ? " disabled" : "") + '>' +
      (S.signedIn ? "Signed in ✓" : "Sign in with BBC account") + '</button></div>';
  };

  P.follows = function (p) {
    return '<div class="playerlist">' + p.items.map(function (it, i) {
      return '<div class="pl follow"><span class="pn">' + esc(it[0]) + '<br><span class="pr small">' + esc(it[1]) + '</span></span>' +
        '<button class="chip" type="button" data-follow="' + i + '" aria-pressed="' + it[2] + '">' + (it[2] ? "Following" : "Follow") + '</button></div>';
    }).join("") + '</div>';
  };

  P.scorelist = function (p) {
    return '<div class="playerlist">' + p.items.map(function (it) {
      var cev = crestEvFor(it[0], it[2]);
      return '<div class="pl score3"><span class="pn">' + crestImg(cev, it[0], "xs") + esc(it[0]) + '<br>' + crestImg(cev, it[2], "xs") + esc(it[2]) + '</span>' +
        '<span class="pn nums">' + (it[1] ? esc(it[1]) + '<br>' + esc(it[3]) : "&nbsp;") + '</span>' +
        '<span class="pr' + (it[5] ? " hot" : "") + '">' + esc(it[4]) + '</span></div>';
    }).join("") + '</div>';
  };

  P.searchbox = function () {
    return '<div class="c" style="padding:10px"><input id="searchbox" type="search" placeholder="Search BBC Sport" aria-label="Search BBC Sport" class="searchin"></div>';
  };

  P.chips = function (p) {
    return '<div class="chiprow">' + p.items.map(function (c) {
      return '<button class="chip" type="button" data-toast="Search is a stub in this prototype.">' + esc(c) + '</button>';
    }).join("") + '</div>';
  };

  P.btnrow = function (p) {
    return '<button class="btn block solid" type="button" data-toast="' + esc(p.toast) + '">' + esc(p.label) + '</button>';
  };

  /* ---- cricket ---- */

  P.audio = function (p) {
    var bars = "";
    for (var i = 0; i < 28; i++) {
      var h = 3 + Math.abs(Math.sin(i * 1.4)) * 11;
      bars += '<rect x="' + (i * 3.5) + '" y="' + ((14 - h) / 2 + 1) + '" width="2" height="' + h.toFixed(1) + '" rx="1" fill="#4ADE80" opacity="' + (0.35 + (i % 5) * 0.13).toFixed(2) + '"/>';
    }
    return '<div class="c audio"><div class="audiotop">' +
      '<button class="audiobtn" type="button" data-toast="' + esc(p.title) + ' is a placeholder in this prototype." aria-label="Play ' + esc(p.title) + '">' + I.play + '</button>' +
      '<span><span class="at1">' + esc(p.title) + '</span><br><span class="at2">' + esc(p.sub) + '</span></span></div>' +
      '<svg class="wave" viewBox="0 0 98 16" preserveAspectRatio="none" aria-hidden="true">' + bars + '</svg>' +
      (p.note ? '<p class="note" style="margin-top:12px">' + esc(p.note) + '</p>' : "") + '</div>';
  };

  P.timing = function (p) {
    return '<div class="c">' + table(p.cols || ["Time", "Laps"], p.rows, "Driver") + (p.note ? '<p class="note" style="margin-top:10px">' + esc(p.note) + '</p>' : "") + '</div>';
  };

  P.sessionbar = function (p) {
    return '<div class="c">' + p.sessions.map(function (s) {
      var side = s[3];
      return '<div class="sess"><div class="sesslab"><span>' + esc(s[0]) + '</span><b>' + esc(s[1]) + '</b></div>' +
        '<div class="track"><i class="' + (side === "ENG" ? "me" : side === "AUS" ? "alt" : "") + '" style="width:' + s[2] + '%"></i></div></div>';
    }).join("") + '</div>';
  };

  P.over = function (p) {
    return '<div class="c"><div class="over">' + p.balls.map(function (b) {
      return '<span class="ball ' + b[1] + '">' + esc(b[0]) + '</span>';
    }).join("") + '</div><p class="overcap">' + esc(p.caption) + '</p>' +
      '<p class="note" style="margin-top:6px;font-size:11.5px">' + esc(p.sub) + '</p></div>';
  };

  P.wagon = function (p) {
    return '<div class="c">' + wagonSVG(p.shots) +
      '<div class="wagonkey"><span><i style="background:#FFD230"></i>Four</span><span><i style="background:#FF9F1C"></i>Six</span>' +
      '<span><i style="background:#7FB2FF"></i>Two</span><span><i style="background:#8E8E8E"></i>One</span></div>' +
      '<p class="note">' + esc(p.caption) + '</p></div>';
  };

  P.winpred = function (p) {
    return '<div class="c"><div class="wpbar" role="img" aria-label="England ' + p.values[0] + '%, draw ' + p.values[2] + '%, Australia ' + p.values[1] + '%">' +
      '<i class="a" style="width:' + p.values[0] + '%"></i><i class="d" style="width:' + p.values[2] + '%"></i><i class="b" style="width:' + p.values[1] + '%"></i></div>' +
      '<div class="wpkey"><span class="a"><b>' + esc(p.a) + '</b> ' + p.values[0] + '%</span>' +
      '<span class="d"><b>Draw</b> ' + p.values[2] + '%</span>' +
      '<span class="b"><b>' + esc(p.b) + '</b> ' + p.values[1] + '%</span></div>' +
      '<div class="wpspark">' + winpredSeries(p.series) + '<span class="wpsparkl">England, since lunch</span></div>' +
      '<p class="note">' + esc(p.note) + '</p></div>';
  };

  P.partnership = function (p) {
    function bat(b, lead) {
      return '<div class="bat' + (lead ? " lead" : "") + '"><span class="bn">' + esc(b[0]) + '</span>' +
        '<span class="br">' + esc(b[1]) + '<small> (' + esc(b[2]) + ')</small></span>' +
        '<span class="bx">' + esc(b[3]) + '</span></div>';
    }
    return '<div class="c">' + bat(p.a, true) + bat(p.b, false) +
      '<div class="ptotal"><span>Partnership</span><b>' + p.runs + ' off ' + p.balls + '</b></div>' +
      '<p class="note" style="margin-top:10px">' + esc(p.note) + '</p></div>';
  };

  P.battinglist = function (p) {
    return '<div class="tablewrap"><table class="sctable ck"><thead><tr>' +
      '<th class="scname">Batter</th><th class="wx"></th><th class="wx"></th><th>Runs</th><th>Balls</th><th>Dots</th><th>4s</th><th>6s</th><th class="wx">Mins</th><th class="wx">Strike Rate</th></tr></thead><tbody>' +
      p.rows.map(function (r) {
        var notout = /not out/i.test(r[1]);
        var runs = Number(r[2]), balls = Number(r[3]) || 1;
        var fours = Math.max(0, Math.round(runs / 9));
        var sixes = runs >= 100 ? 1 : runs >= 40 && balls < 70 ? 1 : 0;
        var dots = Math.max(0, balls - Math.round((runs - fours * 4 - sixes * 6) / 1.3) - fours - sixes);
        var dm = /^(.*?)\s*(b \S+)$/.exec(r[1]), how = notout ? "not out" : dm ? dm[1] : r[1], bwl = !notout && dm ? dm[2] : "";
        return '<tr' + (notout ? ' class="notout"' : "") + '>' +
          '<td class="scname">' + (notout ? '<span class="batico">' + I.bat + '</span>' : "") +
          '<span><b>' + esc(r[0]) + '</b><br class="apponly"><span class="scdis apponly">' + esc(r[1]) + '</span></span></td>' +
          '<td class="wx scdis">' + esc(how) + '</td><td class="wx scdis">' + esc(bwl) + '</td>' +
          '<td class="scr">' + esc(r[2]) + '</td><td>' + esc(r[3]) + '</td><td>' + dots + '</td><td>' + fours + '</td><td>' + sixes + '</td>' +
          '<td class="wx">' + Math.round(balls * 1.45) + '</td><td class="wx">' + (runs / balls * 100).toFixed(2) + '</td></tr>';
      }).join("") +
      '<tr class="wx sctrx"><td class="scname"><b>Extras</b></td><td></td><td class="scdis">' + esc((p.extras.match(/\((.*)\)/) || ["", ""])[1]) + '</td><td class="scr">' + esc((p.extras.match(/Extras (\d+)/) || ["", "0"])[1]) + '</td><td colspan="6"></td></tr>' +
      '<tr class="wx sctot"><td class="scname"><b>Total</b></td><td></td><td>' + esc((p.total.match(/\(([\d.]+) ov\)/) || ["", ""])[1]) + ' overs</td><td class="scr">' + esc(p.total.split(" (")[0]) + '</td><td colspan="6"></td></tr>' +
      '</tbody></table></div>' +
      '<div class="totrow apponly"><span>' + esc(p.extras) + '</span><b>' + esc(p.total) + '</b></div>';
  };

  P.fow = function (p) {
    return '<div class="fowt"><p class="fowh"><span>Fall of wicket</span><span>Batter</span></p>' +
      p.rows.map(function (r) {
        return '<p class="fowr"><span><b>' + esc(r[0]) + '</b> (' + esc(r[1]) + ' overs)</span><b>' + esc(r[2]) + '</b></p>';
      }).join("") + '</div>';
  };

  P.teams = function (p) {
    var k = S.ckTeam || 0, list = k ? p.lb : p.la, name = k ? p.b : p.a;
    return '<div class="ckteams"><div class="cktabs" role="tablist">' +
      [p.a, p.b].map(function (t, i) { return '<button type="button" role="tab" data-ckteam="' + i + '" aria-selected="' + (i === k) + '">' + esc(t) + '</button>'; }).join("") +
      '</div><p class="ckteamh">' + esc(name) + '</p><ul class="ckxi">' + list.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") + '</ul></div>';
  };

  P.streams = function (p) {
    return '<div class="streams">' + p.rows.map(function (r) {
      if (r[0] === "video") {
        var now = S.surface === "web" ? !!(S.wfb && S.wfb.play) : !!(S.vid && S.vid.id === ev().id && S.vid.kind === "live");
        var T0 = tkFor(ev()).T;
        return '<button class="stream vid" type="button" ' + (S.surface === "web" ? "data-wfbplay" : 'data-watch="' + S.eventIx + '"') + '>' +
          '<span class="stvimg">' + (T0.img ? imgTag(T0.img, "", "wide") : "") + (now ? '<span class="stnow">NOW PLAYING</span>' : "") + '</span>' +
          '<span class="sticon">' + I.playtri + '</span><span class="sttx"><b>' + esc(r[1]) + '</b><span>' + esc(r[2]) + '</span><em>Watch live</em></span></button>';
      }
      var dur = r[3] && r[3] !== "live" ? r[3] : "";
      var art = r[0] === "5live" ? '<span class="start fl"><span class="stbbc"><i>B</i><i>B</i><i>C</i></span><b>5 LIVE</b><small>SPORT</small></span>'
        : r[0] === "5sx" ? '<span class="start sx"><span class="stbbc"><i>B</i><i>B</i><i>C</i></span><b>SOUNDS</b><small>WATCHALONG</small></span>'
        : r[0] === "wales" ? '<span class="start img">' + imgTag("bb-radiowales", "", "wide") + '</span>'
        : r[0] === "cricket" ? '<span class="start img">' + imgTag("bb-ckart", "", "wide") + '</span>'
        : r[0] === "local"
        ? '<span class="start local"><span class="stbbc"><i>B</i><i>B</i><i>C</i> ' + esc(r[4]) + '</span><b>' + esc(r[5]) + '</b></span>'
        : '<span class="start ck"><span class="stbbc"><i>B</i><i>B</i><i>C</i></span><b>CRICKET</b></span>';
      return '<button class="stream" type="button" data-toast="' + esc(r[1] + " on " + r[2]) + ' would play here.">' + art +
        '<span class="sticon">' + I.speaker + (dur ? '<small>' + esc(dur) + '</small>' : "") + '</span><span class="sttx"><b>' + esc(r[1]) + '</b><span>' + esc(r[2]) + '</span>' + (dur ? "" : '<em>Listen live</em>') + '</span></button>';
    }).join("") + '</div>';
  };

  P.involvecta = function (p) {
    return '<div class="involvecta"><h3>' + esc(p.h) + '</h3><button type="button" data-sheet="comments" data-ctx="' + esc(p.ctx) + '">' + I.msg + esc(p.cta || "Get involved") + '</button></div>';
  };

  P.cliprail = function (p) {
    return '<div class="swrail">' + p.deck.map(function (c) {
      /* a clip names its short and the picture to show: pictures with words
         already on them are kept off the card, so the title stays readable */
      var ix = typeof c === "number" ? c : c[0], d = DROP[ix];
      if (!d) { return ""; }
      var img = typeof c === "number" ? d.img : c[1], t = typeof c === "number" ? d.t : (c[2] || d.t);
      return '<button class="swclip" type="button" data-play="' + ix + '"><span class="swimg">' + imgTag(img, t, "tall") + '</span>' +
        '<span class="swveil"></span><span class="swtx"><span class="swdur">' + I.playtri + esc(d.dur) + '</span><b>' + esc(t) + '</b></span></button>';
    }).join("") + '</div>';
  };

  P.fixlist = function (p) {
    var e = evById(p.ev), SP = SPORTPAGES[p.ev], L = p.state, TK = e.takeover || {}, f = SP.feat[L] || SP.feat.live, hid = masked(e);
    var rows = [{ a: TK.a, b: TK.b, s: L === "buildup" ? "soon" : L === "fulltime" ? "done" : "live", sa: f[0], sb: f[1], note: f[2], me: true }];
    SP.fixtures.forEach(function (x) {
      var s = x.st[L] || x.st.all;
      if (/Tomorrow/.test(s[3]) || x.comp !== "Nations League") { return; }
      rows.push({ a: x.a, b: x.b, s: s[0], sa: s[1], sb: s[2], note: s[3], comp: x.comp });
    });
    return '<p class="fxdate">' + esc(p.date) + '</p><div class="fxlist">' + rows.map(function (r) {
      var mid = r.s === "soon" || hid ? '<span class="flt">' + esc(r.s === "soon" ? r.note : "v") + '</span>'
        : '<span class="fls"><b>' + esc(r.sa) + '</b><i></i><b>' + esc(r.sb) + '</b></span><small>' + esc(r.s === "live" ? r.note : "FT") + '</small>';
      return '<div class="flr ' + (hid && r.s !== "soon" ? "hid" : r.s) + (r.me ? " me" : "") + '"><span class="fla">' + esc(r.a) + flagFor(r.a) + '</span><span class="flm">' + mid + '</span>' +
        '<span class="flb">' + flagFor(r.b) + esc(r.b) + '</span></div>';
    }).join("") + '</div><button class="fxmore" type="button" data-toast="The full fixture list is not built out in this prototype.">View all UEFA Nations League fixtures' + I.chevron + '</button>';
  };

  P.gtable = function (p) {
    var hid = masked(ev());
    return p.groups.map(function (g) {
      return '<p class="gth">' + esc(g.title) + (g.note ? ' <small>' + esc(hid ? "Before tonight" : g.note) + '</small>' : "") + '</p><div class="tablewrap"><table class="gtab"><thead><tr><th></th><th class="gtn">Team</th>' +
        ["Pld", "GD", "Pts", "W", "D", "L", "F", "A"].map(function (c) { return '<th>' + c + '</th>'; }).join("") + '</tr></thead><tbody>' +
        g.rows.map(function (r, i) {
          return '<tr' + (i === 1 ? ' class="cut"' : "") + '><td>' + (i + 1) + '</td><td class="gtn">' + flagFor(r[0]) + '<b>' + esc(r[0]) + '</b></td>' +
            r.slice(1).map(function (v, k) { return '<td' + (k === 2 ? ' class="pts"' : "") + '>' + (k === 1 && v > 0 ? "+" + v : v) + '</td>'; }).join("") + '</tr>';
        }).join("") + '</tbody></table></div>';
    }).join("") + '<button class="fxmore" type="button" data-toast="The full table is not built out in this prototype.">View full UEFA Nations League table' + I.chevron + '</button>';
  };

  function fbEvents() { var L = lc() === "companion" ? "live" : lc(); return masked(ev()) ? null : ((ev().events || {})[L] || null); }
  function plMark(name) {
    var x = fbEvents();
    if (!x) { return ""; }
    return (x.goals && x.goals[name] ? " scored" : "") + (x.cards && x.cards[name] ? " booked" : "");
  }

  var POSNAME = { GK: "Goalkeeper", RB: "Defender", CB: "Defender", LB: "Defender", CM: "Midfielder", AM: "Midfielder", RW: "Forward", LW: "Forward", ST: "Striker" };
  function plStats(pl, team) {
    var L = lc() === "companion" ? "live" : lc(), f = L === "fulltime" ? 1 : L === "buildup" ? 0 : 0.72, x = fbEvents() || {};
    var seed = 0; for (var i = 0; i < pl[1].length; i++) { seed += pl[1].charCodeAt(i) * (i + 3); }
    var r = function (lo, hi) { seed = (seed * 9301 + 49297) % 233280; return lo + Math.round(seed / 233280 * (hi - lo)); };
    var pos = pl[2], gk = pos === "GK", def = /B$/.test(pos), fwd = /W$|ST/.test(pos);
    var passes = Math.round(r(gk ? 22 : def ? 48 : fwd ? 24 : 55, gk ? 36 : def ? 70 : fwd ? 40 : 82) * f);
    var tackles = Math.round(r(0, def ? 5 : fwd ? 1 : 3) * f), shots = Math.round(r(0, fwd ? 4 : def ? 1 : 2) * f);
    var g = (x.goals || {})[pl[1]] || 0, sh = Math.max(shots, g), won = r(50, 100), acc = r(74, 96), fc = Math.round(r(0, 2) * f), fw = Math.round(r(0, 3) * f);
    var ast = (x.assists || {})[pl[1]] || 0, cc = Math.max(ast, Math.round(r(0, fwd ? 3 : 2) * f));
    return [["Goals", g], ["Shots", sh], ["Shots on target", Math.min(sh, Math.max(g, Math.round(shots / 2)))], ["Assists", ast], ["Chances created", cc],
      ["Total passes", passes], ["Passing accuracy (%)", passes ? acc.toFixed(1) : "0.0"], ["Total tackles", tackles],
      ["Tackles won (%)", tackles ? won.toFixed(1) : "0.0"], ["Fouls committed", fc], ["Fouls won", fw]];
  }

  function pitchPanel() {
    var P2 = null;
    curTabs().forEach(function (t) { (t.sections || []).forEach(function (s) { (s.panels || []).forEach(function (pn) { if (pn.t === "pitch") { P2 = pn; } }); }); });
    return P2;
  }

  /* the report tab: the report once it is written, and the player rater */
  P.report = function (p) {
    return '<div class="rpnote">' + p.text.map(function (x, i) { return '<p' + (i === 0 && p.text.length === 1 ? ' class="b"' : "") + '>' + esc(x) + '</p>'; }).join("") + '</div>';
  };
  P.rater = function () {
    var pn = pitchPanel();
    if (!pn) { return ""; }
    var k = S.rtTeam || 0, t = pn.teams[k];
    S.rates = S.rates || {};
    return '<div class="rater"><h3>How to play</h3>' +
      '<p class="rtnote">Rate players out of 10 for this game. The rater will close 30 minutes after the final whistle. You must be signed in to a BBC account to play.</p>' +
      '<p class="rtkey"><span class="rb">1</span>Give it up<span class="rb">10</span>Pure perfection</p>' +
      '<div class="rttabs" role="tablist">' + pn.teams.map(function (x, i) {
        return '<button type="button" role="tab" data-rtteam="' + i + '" aria-selected="' + (i === k) + '">' + esc(x.name) + '</button>';
      }).join("") + '</div><p class="rtxi">Starting XI</p>' +
      t.xi.map(function (pl, i) {
        var v = S.rates[k + ":" + i];
        return '<div class="rtrow"><p><span>' + pl[0] + '</span><b>' + esc(pl[1]) + '</b>' + (v ? '<em>' + I.tickplain + 'Submitted</em>' : "") + '</p>' +
          '<div class="rtballs">' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) {
            return '<button type="button" class="rb' + (v && n <= v ? " on" : "") + '" data-rate="' + k + "," + i + "," + n + '" aria-label="Rate ' + esc(pl[1]) + " " + n + ' out of 10">' + n + '</button>';
          }).join("") + '</div></div>';
      }).join("") + '</div>';
  };

  function fbPlayerHTML() {
    if (!S.fbPl) { return ""; }
    var P2 = pitchPanel();
    if (!P2) { return ""; }
    var team = P2.teams[S.fbPl.t], pl = team.xi[S.fbPl.i], x = fbEvents() || {};
    var note = lc() === "buildup" ? "Stats appear from kick-off." : "";
    return '<div class="plsheet" role="dialog" aria-label="' + esc(pl[1]) + '">' +
      '<button class="plx" type="button" data-plclose aria-label="Close">' + I.close + '</button>' +
      '<button class="plnav l" type="button" data-plnav="-1" aria-label="Previous player">' + I.back + '</button>' +
      '<button class="plnav r" type="button" data-plnav="1" aria-label="Next player">' + I.chevron + '</button>' +
      '<div class="plin"><p class="plflag">' + (crestImg(ev().id, team.name, "pc") || flagFor(team.name)) + '</p>' +
      '<h2>' + esc(pl[1]) + '</h2><p class="plpos">' + esc(POSNAME[pl[2]] || "") + '</p><p class="plteam">' + esc(team.name) + ' · #' + pl[0] + '</p>' +
      ((x.cards || {})[pl[1]] ? '<p class="plcard">Booked, 38 minutes</p>' : "") +
      '<p class="plh">Match stats</p>' + (note ? '<p class="note">' + note + '</p>' : "") +
      '<dl class="pldl">' + plStats(pl, team).map(function (s) { return '<div><dt>' + esc(s[0]) + '</dt><dd>' + esc(String(s[1])) + '</dd></div>'; }).join("") + '</dl></div></div>';
  }

  P.pitch = function (p) {
    if (S.surface === "web") { return '<div class="pgrid">' + pitchOne(p, 0) + pitchOne(p, 1) + '</div>'; }
    var k = S.fbTeam || 0;
    return '<div class="ckteams"><div class="cktabs" role="tablist">' + p.teams.map(function (x, i) {
      return '<button type="button" role="tab" data-fbteam="' + i + '" aria-selected="' + (i === k) + '">' + esc(x.name) + '</button>';
    }).join("") + '</div>' + pitchOne(p, k) + '</div>';
  };

  function pitchOne(p, k) {
    var t = p.teams[k];
    var rank = { LB: 0, LW: 0, CB: 1, CM: 1, AM: 1, ST: 1, RB: 2, RW: 2 };
    var shape = t.shape.split("-").map(Number), rows = [[t.xi[0]]], at = 1;
    shape.forEach(function (n) {
      rows.push(t.xi.slice(at, at + n).map(function (x, i) { return { x: x, i: i }; })
        .sort(function (u, v) { return (rank[u.x[2]] - rank[v.x[2]]) || (u.i - v.i); }).map(function (o) { return o.x; }));
      at += n;
    });
    var dots = rows.map(function (row, ri) {
      var top = 8 + ri * (82 / (rows.length - 1));
      return row.map(function (pl, ci) {
        var left = (ci + 1) * 100 / (row.length + 1);
        var xi = t.xi.indexOf(pl);
        return '<button type="button" class="pdot' + plMark(pl[1]) + '" data-player="' + k + ',' + xi + '" style="top:' + top.toFixed(1) + '%;left:' + left.toFixed(1) + '%"><i>' + pl[0] + '</i><b>' + esc(pl[1]) + '</b></button>';
      }).join("");
    }).join("");
    return '<div class="pone"><div class="pcard' + (k === 1 ? " away" : "") + '"><p class="pch">' + (crestImg(ev().id, t.name, "pc") || flagFor(t.name)) + '<b>' + esc(t.name) + '</b></p>' +
      '<p class="pcm"><span>Manager: <b>' + esc(t.manager) + '</b></span><span>Formation: <b>' + esc(t.shape.split("-").join(" - ")) + '</b></span></p>' +
      '<div class="ppitch"><svg viewBox="0 0 100 130" preserveAspectRatio="none" aria-hidden="true"><path d="M22 2 L78 2 L96 128 L4 128 Z M36 2 L36 16 L64 16 L64 2 M43 2 L43 7 L57 7 L57 2 M8 98 L92 98" /><circle cx="50" cy="98" r="11"/></svg>' + dots + '</div>' +
      '<p class="pcsub">' + esc(p.sub || "") + '</p></div>' +
      '<ul class="plist' + (k === 1 ? " away" : "") + '">' + t.xi.map(function (pl, xi) { return '<li><button type="button" data-player="' + k + ',' + xi + '"><i>' + pl[0] + '</i><b>' + esc(pl[1]) + '</b><span>' + esc(pl[2]) + '</span>' + I.chevron + '</button></li>'; }).join("") + '</ul></div>';
  }

  function msRow(r, hid) {
    var a = hid ? 0 : r[1], b = hid ? 0 : r[2], m = Math.max(a, b), wa = m ? a / m * 50 : 25, wb = m ? b / m * 50 : 25;
    return '<div class="msr"><p><b' + (a > b ? ' class="lead"' : "") + '>' + a + '</b><span>' + esc(r[0]) + '</span><b' + (b > a ? ' class="lead"' : "") + '>' + b + '</b></p>' +
      '<div class="msbar"><span class="sa"><i class="ba" style="width:' + (wa * 2).toFixed(1) + '%"></i></span><span class="sb"><i class="bb" style="width:' + (wb * 2).toFixed(1) + '%"></i></span></div></div>';
  }

  function halfPie(a, b, p) {
    var m = Math.max(a, b) || 1, ra = a ? 30 + 30 * Math.sqrt(a / m) : 0, rb = b ? 30 + 30 * Math.sqrt(b / m) : 0;
    var arc = function (r, left) { return r ? '<path d="M70 ' + (70 - r) + ' A' + r + ' ' + r + ' 0 0 ' + (left ? 0 : 1) + ' 70 ' + (70 + r) + ' Z" class="' + (left ? "pa" : "pb") + '"/>' : ""; };
    return '<div class="msdo"><span class="msl' + (a > b ? " lead" : "") + '"><i class="ka"></i>' + esc(p.ca || p.a.slice(0, 3)) + '<b>' + a + '</b></span>' +
      '<svg class="hpie" viewBox="0 0 140 140" aria-hidden="true">' + arc(ra, true) + arc(rb, false) + (a || b ? "" : '<circle cx="70" cy="70" r="40" class="p0"/>') + '</svg>' +
      '<span class="msl r' + (b > a ? " lead" : "") + '">' + esc(p.cb || p.b.slice(0, 3)) + '<i class="kb"></i><b>' + b + '</b></span></div>';
  }

  P.livetext = function (p) {
    if (masked(ev())) { return '<p class="note">Live text is hidden with the score. Show the score to read it.</p>'; }
    return '<div class="ltext">' + p.rows.map(function (r) {
      return '<article class="post ltx"><span class="stamp">' + esc(r[0]) + '</span><div class="postbody">' + (r[1] ? '<h3>' + esc(r[1]) + '</h3>' : "") + '<p>' + esc(r[2]) + '</p></div></article>';
    }).join("") + '</div>';
  };

  P.mstats = function (p) {
    var hid = masked(ev()), pa = hid ? 0 : p.poss[0], pb = hid ? 0 : p.poss[1], tot = pa + pb, deg = tot ? pa / tot * 360 : 180;
    var pct = function (n) { return (n % 1 ? n.toFixed(1) : n) + "%"; };
    return '<div class="msk"><span><i class="ka"></i><b>' + esc(p.a) + '</b></span><span class="kk">Key</span><span><b>' + esc(p.b) + '</b><i class="kb"></i></span></div>' +
      '<div class="mspos"><p>Overall possession</p><div class="msdo"><span class="msl"><i class="ka"></i>' + esc(p.ca || p.a.slice(0, 3).toUpperCase()) + '<b' + (pa > pb ? ' class="lead"' : "") + '>' + pct(pa) + '</b></span>' +
      '<span class="donut" style="--deg:' + deg + 'deg"></span>' +
      '<span class="msl r">' + esc(p.cb || p.b.slice(0, 3).toUpperCase()) + '<i class="kb"></i><b' + (pb > pa ? ' class="lead"' : "") + '>' + pct(pb) + '</b></span></div></div>' +
      '<div class="msrows">' + p.rows.map(function (r) {
        return msRow(r, hid);
      }).join("") + '</div>' +
      (p.touches ? '<div class="mspos"><p>Total touches inside the opposition box</p>' + halfPie(hid ? 0 : p.touches[0], hid ? 0 : p.touches[1], p) + '</div>' : "") +
      (p.deep && !hid ? '<h2 class="msdeep">In-depth match stats</h2>' + p.deep.map(function (g) {
        return '<p class="msgh">' + esc(g[0]) + '</p><div class="msrows">' + g[1].map(function (r) { return msRow(r, false); }).join("") + '</div>';
      }).join("") : "");
  };

  P.comingup = function (p) {
    return '<div class="cups">' + p.rows.map(function (r) {
      return '<button class="cup" type="button" data-toast="' + esc(r[0]) + ' is not built out in this prototype."><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span><em>' + esc(r[2]) + '</em></button>';
    }).join("") + '</div>';
  };

  P.formguide = function (p) {
    function card(r) {
      return '<div class="fgc"><p class="fgt"><i class="fg' + r[0] + '">' + r[0] + '</i><b>v ' + esc(r[1]) + '</b></p>' +
        '<p class="fgs">' + flagFor(r[2]) + '<b>' + r[3] + '</b><i></i><b>' + r[5] + '</b>' + flagFor(r[4]) + '</p><p class="fgcomp">' + esc(r[6]) + '</p></div>';
    }
    return '<div class="fgbox"><b>Season so far</b><span>' + esc(p.comp) + '</span></div>' +
      '<div class="msk"><span><i class="ka"></i><b>' + esc(p.a) + '</b></span><span class="kk">Key</span><span><b>' + esc(p.b) + '</b><i class="kb"></i></span></div>' +
      '<div class="fgbox"><b>Form guide</b><span>All competitions</span></div>' +
      '<div class="fgcols"><div><p class="fgh">' + esc(p.a) + '</p>' + p.la.map(card).join("") + '</div><div><p class="fgh">' + esc(p.b) + '</p>' + p.lb.map(card).join("") + '</div></div>' +
      '<div class="fgbox"><b>Previous meetings</b><span>Most recent first</span></div>' +
      '<div class="fgmeet">' + p.meet.map(function (m) { return '<p><span>' + esc(m[0]) + '</span><b>' + esc(m[1]) + '</b><small>' + esc(m[2]) + '</small></p>'; }).join("") + '</div>';
  };

  P.bowlinglist = function (p) {
    return '<div class="tablewrap"><table class="sctable ck bowl"><thead><tr><th class="scname">Bowler</th><th>Overs</th><th>Maidens</th><th>Runs</th><th>Wickets</th>' +
      '<th class="wx">Dots</th><th class="wx">NB</th><th class="wx">Wides</th><th class="wx">4s</th><th class="wx">6s</th><th>Econ</th></tr></thead><tbody>' +
      p.rows.map(function (r) {
        var f = r[1].split("-"), ov = Number(f[0]), runs = Number(f[2]), now = p.now === r[0];
        return '<tr' + (now ? ' class="notout"' : "") + '><td class="scname"><b>' + esc(r[0]) + '</b></td><td>' + esc(f[0]) + '.0</td><td>' + esc(f[1]) + '</td><td>' + esc(f[2]) + '</td>' +
          '<td class="scr">' + esc(f[3]) + '</td><td class="wx">' + Math.round(ov * 6 * 0.62) + '</td><td class="wx">' + (ov > 25 ? 1 : 0) + '</td><td class="wx">' + (ov % 3) + '</td>' +
          '<td class="wx">' + Math.round(runs / 9) + '</td><td class="wx">' + (runs > 80 ? 1 : 0) + '</td><td>' + (runs / ov).toFixed(2) + '</td></tr>';
      }).join("") + '</tbody></table></div>';
  };

  /* ---- tennis ---- */

  P.courts = function (p) {
    var rows = p.rows.slice().sort(function (a, b) { return b[3] - a[3]; });
    return '<div class="courtlist">' + rows.map(function (r, i) {
      return '<button class="court' + (i === 0 ? " top" : "") + '" type="button" data-toast="Switched to ' + esc(r[0]) + '. Your other scores stay pinned.">' +
        '<span class="cname">' + esc(r[0]) + (i === 0 ? " · watch now" : "") + '</span>' +
        '<span class="sig">' + r[3].toFixed(2) + '</span>' +
        '<span class="cmatch">' + esc(r[1]) + '</span>' +
        '<span class="cstate">' + esc(r[2]) + '</span></button>';
    }).join("") + '</div>';
  };

  P.pointgrid = function (p) {
    return '<div class="c"><div class="pgrid">' + p.games.map(function (g) {
      return '<div class="pgcol"><span class="pgl">' + esc(g[0]) + '</span>' +
        g[1].map(function (pt) { return '<i class="' + (pt ? "won" : "") + '"></i>'; }).join("") + '</div>';
    }).join("") + '</div><p class="note">' + esc(p.note) + '</p></div>';
  };

  P.oop = function (p) {
    return '<div class="playerlist">' + p.rows.map(function (r) {
      return '<div class="pl oop"><span class="num">' + esc(r[0]) + '</span>' +
        '<span class="pn">' + esc(r[2]) + '<br><span class="pr small">' + esc(r[3]) + '</span></span>' +
        '<span class="pr">' + esc(r[1]) + '</span></div>';
    }).join("") + '</div>';
  };

  P.centenary = function (p) {
    return '<div class="c cent">' + p.years.map(function (y) {
      return '<div class="centrow"><span class="cy">' + esc(y[0]) + '</span>' +
        '<div><span class="ct">' + esc(y[1]) + '</span><p class="cb">' + esc(y[2]) + '</p></div></div>';
    }).join("") + (p.note ? '<p class="note" style="margin-top:4px">' + esc(p.note) + '</p>' : "") + '</div>';
  };

  /* ---- rugby ---- */

  P.law = function (p) {
    return '<div class="c lawcard"><div class="lawref">' + esc(p.ref) + '</div>' +
      '<p class="lawbody">' + esc(p.body) + '</p>' +
      '<p class="lawmeta">' + esc(p.meta) + '</p></div>';
  };

  P.tmo = function (p) {
    return '<div class="c alert"><div class="alerttag">TMO REVIEW · IN PROGRESS</div>' +
      '<p class="q">' + esc(p.q) + '</p>' +
      '<div class="tmobar"><i id="tmobar" style="width:' + Math.min(100, p.elapsed / 120 * 100) + '%"></i></div>' +
      '<div class="tmotime"><span>Elapsed</span><b id="tmotime">' + mmss(S.tmo) + '</b></div>' +
      (p.note ? '<p class="note" style="margin-top:12px">' + esc(p.note) + '</p>' : "") + '</div>';
  };

  P.territory = function (p) {
    return '<div class="c">' + p.rows.map(function (r) {
      return '<div class="statrow"><div class="statlab"><span class="v">' + r[1] + '%</span>' +
        '<span class="k">' + esc(r[0]) + '</span><span class="v r">' + r[2] + '%</span></div>' +
        '<div class="statbar"><span class="sb l"><i style="width:' + r[1] + '%"></i></span><span class="mid"></span>' +
        '<span class="sb r"><i style="width:' + r[2] + '%"></i></span></div></div>';
    }).join("") + '<p class="note">' + esc(p.note) + '</p></div>';
  };

  P.phases = function (p) {
    var dots = "";
    for (var i = 0; i < p.max; i++) {
      dots += '<i class="' + (i < p.count ? "on" : "") + (i === p.count - 1 ? " now" : "") + '"></i>';
    }
    return '<div class="c"><div class="phasetop"><span class="pcount">' + p.count + '</span><span class="plab">phases<br>this possession</span></div>' +
      '<div class="phaserow">' + dots + '</div><p class="note">' + esc(p.note) + '</p></div>';
  };

  /* ------------------------------------------------------------- render */

  function renderSections(sections) {
    return sections.map(function (sec) {
      var head = "";
      if (sec.h) {
        head = '<div class="sechead"><h2>' + (sec.metaLive ? '<span class="livedot">' + esc(sec.h) + '</span>' : esc(sec.h)) + '</h2>' +
          (sec.meta ? '<span class="meta' + (sec.metaLive ? " live" : "") + '">' + esc(sec.meta) + '</span>' : "") + '</div>';
      }
      return '<section class="section' + (sec.flush ? " flush" : "") + '">' + (sec.ruleY ? '<div class="rule-y"></div>' : "") + head +
        sec.panels.map(function (p) { return P[p.t] ? P[p.t](p) : ""; }).join("") + '</section>';
    }).join("");
  }

  function appHead(sectionLabel) {
    return '<div class="apphead"><div class="headrow">' +
      '<span class="bbcblocks" aria-label="BBC"><i>B</i><i>B</i><i>C</i></span>' +
      '<button class="iconbtn nbell" type="button" data-sheet="notifs" aria-label="Notifications">' + I.bell + '<i class="ndot"></i></button>' +
      '<button class="iconbtn" type="button" data-sheet="share" aria-label="Share">' + I.share + '</button>' +
      '<button class="iconbtn menubtn" type="button" id="burger" aria-label="Your account and menu" aria-expanded="false">' +
      '<span class="meav" aria-hidden="true">A</span>' + I.burger + '</button>' +
      '</div><div class="sportrow"><span class="sportmark">SPORT</span><span class="sportsection">' + esc(sectionLabel) + '</span></div></div>';
  }

  function matchHead() {
    var e = ev(), st = evState(), h = st.head, hid = masked(e);
    /* once the TV has been switched to Court 2, the second-screen page
       follows it rather than still talking about Centre Court */
    if (e.id === "tennis" && lc() === "companion" && S.tv && S.tv.c2) {
      var lv = e.states.live;
      h = { kind: "stack", status: { kind: "paired", text: "FOLLOWING YOUR TELLY", beat: true }, rows: lv.head.rows,
        strap: "Second set · Vondroušová serving · your TV is on Court 2 now", serve: 1 };
      st = { chip: st.chip, watching: lv.watching, paired: "Paired with your TV · Court 2", head: h,
        state: "Court 2 on your TV. Centre Court is a tap away" };
    }
    var out = "";
    if (st.paired) {
      out += '<div class="paired">' + I.qr + '<span><span class="p1">' + esc(st.paired) + '</span><br>' +
        '<span class="p2">' + esc(e.title) + ' · ' + esc(e.venue) + '</span></span></div>';
    }
    out += '<div class="matchhead"><div class="compline">' +
      '<button class="iconbtn compback" type="button" data-gohome aria-label="Back to Home">' + I.back + '</button>' +
      '<span class="compname">' + esc(e.comp) + '</span>' +
      '<button class="iconbtn compback' + (followOf(e.id) ? " on" : "") + '" type="button" data-wfollow="' + e.id + '" aria-pressed="' + followOf(e.id) + '" aria-label="Follow">' + I.star + '</button></div>';

    if (st.paired && S.vid && S.vid.mode === "full" && S.vid.id === e.id) {
      out += '<p class="tvtag">' + I.tv + (e.id === "tennis" ? "On your TV: Centre Court" : "On your TV, held back to match") + '</p>';
    }
    var audioLed = !hasVideo(e) || e.id === "football";
    if (st.chip && !(audioLed && (e.id === "cricket" || e.id === "football"))) {
      out += '<div class="statestrip">' +
        '<span class="inplay' + (h.status.kind === "live" || h.status.kind === "paired" ? " on" : "") + '">' + esc(st.chip) + '</span>' +
        (st.watching && !audioLed ? '<span class="watching">' + I.livedot + esc(st.watching) + ' watching</span>' : "") +
        '</div>';
    }

    if (e.id === "football" && h.kind === "teams") {
      out += fbHead(e, st, h, hid);
    } else if (audioLed && e.id === "cricket" && h.kind === "stack") {
      out += ckHead(e, st, h, hid);
    } else if (h.kind === "teams") {
      out += '<div class="scorewrap">' +
        '<span class="side"><span class="crest a' + (crestSlug(e.id, h.home.name) ? " hasimg" : "") + '">' + (crestImg(e.id, h.home.name) || esc(h.home.code)) + '</span><span class="tname">' + esc(h.home.name) + '</span>' +
        (h.home.sub && !hid ? '<span class="tsub">' + esc(h.home.sub) + '</span>' : "") + '</span>' +
        '<span class="centre"><span class="statusrow ' + h.status.kind + '">' +
        '<i class="pip' + (h.status.beat ? " beat" : "") + '"></i>' + esc(h.status.text) + '</span>' +
        (hid ? '<span class="bigscore hid">v</span><button class="revealpill" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show score</button>'
          : '<span class="' + (h.centre.small ? "kotime" : "bigscore") + '">' + esc(h.centre.big) + '</span>' +
          '<span class="clockline" id="headclock">' + esc(h.centre.sub) + '</span>') + '</span>' +
        '<span class="side"><span class="crest b' + (crestSlug(e.id, h.away.name) ? " hasimg" : "") + '">' + (crestImg(e.id, h.away.name) || esc(h.away.code)) + '</span><span class="tname">' + esc(h.away.name) + '</span>' +
        (h.away.sub && !hid ? '<span class="tsub">' + esc(h.away.sub) + '</span>' : "") + '</span></div>';
    } else {
      out += '<div class="stackwrap"><span class="statusrow ' + h.status.kind + '">' +
        '<i class="pip' + (h.status.beat ? " beat" : "") + '"></i>' + esc(h.status.text) + '</span>' +
        h.rows.map(function (r, i) {
          return '<div class="srow' + (r[3] ? " now" : "") + '">' +
            '<span class="sname">' + crestImg(e.id, r[0], "sm") + esc(r[0]) + (h.serve === i ? '<i class="servedot"></i>' : "") + '</span>' +
            '<span class="sscore' + (hid ? " hid" : "") + '">' + esc(hid ? "\u2022 \u2022" : r[1]) + '</span>' +
            '<span class="sdet"' + (i === 1 ? ' id="stackdet"' : "") + '>' + esc(hid ? "" : r[2]) + '</span></div>';
        }).join("") +
        (hid ? '<button class="revealpill" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show score</button>' : '<p class="strap">' + esc(h.strap) + '</p>') + '</div>';
    }
    if (st.state && !hid && !audioLed) { out += '<p class="stateline">' + esc(st.state) + '</p>'; }

    if (audioLed) {
      out += lvBlock(e, st, hid);
    } else if (e.audio) {
      var canWatch = hasVideo(e) && (lc() !== "buildup") && !(S.vid && S.vid.id === e.id && S.vid.mode === "full" && S.vid.kind !== "recap");
      out += '<div class="listenrow">' +
        (canWatch ? '<button class="listenbtn watchbtn" type="button" data-watch="' + S.eventIx + '">' + I.playtri + (lc() === "fulltime" ? "Highlights" : "Watch") + '</button>' : "") +
        '<button class="listenbtn' + (canWatch ? " ontv" : "") + '" type="button" ' +
        (!hasVideo(e) && (lc() === "live" || lc() === "companion") ? 'data-watch="' + S.eventIx + '"' : 'data-listenlive="' + S.eventIx + '"') + '>' +
        I.speaker + (canWatch ? "Listen" : "Listen live") + '</button>' +
        ((lc() === "live" || lc() === "companion") && S.surface !== "together"
          ? '<button class="listenbtn ontv" type="button" data-tvlaunch="' + S.eventIx + '">' + I.playtri + 'On TV</button>' : "") +
        '<span class="listenmeta"><b>' + esc(e.audio.prog) + '</b><br>' + esc(e.audio.station) + '</span></div>';
    }

    out += '</div>';
    return out;
  }

  /* the cricket head as the live BBC Sport page has it: both sides on one
     line, the state between them, the bat against the side batting */
  function ckHead(e, st, h, hid) {
    var rows = h.rows.slice(), a = rows.filter(function (r) { return r[0] === "England"; })[0] || rows[0];
    var b = rows.filter(function (r) { return r !== a; })[0];
    function ov(r) { var m = /\(([\d.]+) ov\)/.exec(r[2] || ""); return m ? "(" + m[1] + ")" : ""; }
    function side(r, cls) {
      var bat = r[3] ? '<span class="ckbat" aria-label="Batting">' + I.bat + '</span>' : "";
      return '<span class="ckname ' + cls + '">' + (cls === "b" ? bat : "") + '<b>' + esc(r[0]) + '</b>' + (cls === "a" ? bat : "") + '</span>';
    }
    function score(r, cls) {
      return '<span class="ckscore ' + cls + (r[3] ? " now" : "") + '">' + (hid ? "&bull; &bull;" : esc(r[1]) + ' <small>' + esc(ov(r)) + '</small>') + '</span>';
    }
    var live = h.status.kind === "live" || h.status.kind === "paired";
    return '<div class="ckhead">' +
      (st.date ? '<p class="ckdate">' + esc(st.date) + '</p>' : "") +
      '<div class="ckline">' + side(a, "a") + '<span class="ckchip' + (live ? " on" : "") + '">' + esc(st.chip || "") + '</span>' + side(b, "b") + '</div>' +
      '<div class="ckline sc">' + score(a, "a") + '<span></span>' + score(b, "b") + '</div>' +
      (hid ? '<button class="revealpill ckreveal" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show score</button>'
        : (st.state ? '<p class="ckstate">' + esc(st.state) + '</p>' : "") + (h.strap ? '<p class="ckstrap">' + esc(h.strap) + '</p>' : "")) +
      '</div>';
  }

  /* the football head as the live page has it: who is with you, the date
     and group, the two sides with the time or score between, the scorers,
     and the venue */
  function fbHead(e, st, h, hid, extra) {
    var L = lc(), onNow = L !== "fulltime" && st.watching;
    function side(t, k) {
      return '<span class="fbside ' + k + '"><span class="fbmark">' + (crestImg(e.id, t.name, "fbc") || flagFor(t.name)) + '</span><b>' + esc(t.name) + '</b></span>';
    }
    var sp = h.centre.big.split(/\s*[–-]\s*/), onAir = h.status.kind === "live" || h.status.kind === "paired";
    var centre = hid ? '<span class="fbbig hid">v</span>'
      : h.centre.small ? '<span class="fbbig">' + esc(h.centre.big) + '</span>'
      : '<span class="fbbig sc"><b>' + esc(sp[0]) + '</b><i class="' + (onAir ? "live" : "ft") + '"></i><b>' + esc(sp[1] || "") + '</b></span>';
    var under = h.status.kind === "live" || h.status.kind === "paired" ? '<span class="fbclock live">' + esc(h.centre.sub) + '</span>'
      : h.status.kind === "ft" ? '<span class="fbclock">FT</span>' : "";
    return '<div class="fbhead">' +
      (onNow ? '<p class="lvlive c"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      (st.date ? '<p class="ckdate">' + esc(st.date) + '</p>' : "") +
      '<p class="ckcomp">' + esc(st.group || e.comp) + '</p>' +
      '<div class="fbline">' + side(h.home, "h") + '<span class="fbmid">' + centre + (hid ? "" : under) + '</span>' + side(h.away, "a") + '</div>' +
      (hid ? '<button class="revealpill ckreveal" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show score</button>'
        : (h.home.sub || h.away.sub ? '<div class="fbscorers"><span>' + esc(h.home.sub || "") + '</span><span>' + esc(h.away.sub || "") + '</span></div>' : "")) +
      (extra || "") + '<i class="fbdash"></i>' +
      (h.venue ? '<p class="fbvenue"><span>Venue:</span> ' + esc(h.venue) + '</p>' : "") +
      '</div>';
  }

  /* the live block under the head for radio-led events: who is with you,
     the headline, the station, one full-width button */
  function lvBlock(e, st, hid) {
    var L = lc(), live = L === "live" || L === "companion";
    var playing = S.vid && S.vid.id === e.id && S.vid.mode === "full";
    var head = hid && st.hiddenHeadline ? st.hiddenHeadline : st.headline;
    if (hasVideo(e) && e.id === "football" && st.watch && L !== "fulltime") {
      if (playing && S.vid.kind === "live") { return '<div class="lvblock slim" id="lvblock">' + vidPane() + '</div>'; }
      return '<div class="lvblock slim" id="lvblock">' +
        '<p class="lvprog c tall"><b>' + esc(st.watch[0]) + '</b><br>' + esc(st.watch[1]) + '</p>' +
        '<button class="lvlisten" type="button" data-watch="' + S.eventIx + '">' + I.playtri + 'Watch live</button>' +
        '<button class="lvalt" type="button" data-listenlive="' + S.eventIx + '">' + I.speaker + 'Or listen on ' + esc(e.audio.station.replace("BBC Radio ", "")) + '</button></div>';
    }
    if (hasVideo(e)) {
      var canW = L !== "buildup" && !(playing && S.vid.kind !== "recap");
      return '<div class="lvblock slim" id="lvblock">' +
        '<p class="lvprog c"><b>' + esc(st.prog || e.audio.prog) + '</b> ' + esc(e.audio.station) + '</p>' +
        '<div class="lvbtns">' + (canW ? '<button class="lvwatch" type="button" data-watch="' + S.eventIx + '">' + I.playtri + (L === "fulltime" ? "Highlights" : "Watch live") + '</button>' : "") +
        '<button class="lvlisten" type="button" data-listenlive="' + S.eventIx + '">' + I.speaker + 'Listen live</button></div></div>';
    }
    return '<div class="lvblock" id="lvblock">' +
      (live && st.watching ? '<p class="lvlive"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      (head ? '<h2 class="lvhead">' + esc(head) + '</h2>' : "") +
      '<p class="lvprog"><b>' + esc(e.audio.prog) + '</b><br>' + esc(e.audio.station) + '</p>' +
      '<button class="lvlisten' + (playing ? " on" : "") + '" type="button" ' + (live ? 'data-watch="' + S.eventIx + '"' : 'data-listenlive="' + S.eventIx + '"') + '>' +
      I.speaker + (playing ? "Listening live" : L === "fulltime" ? "Listen to the day" : "Listen live") + '</button></div>';
  }

  /* the same, pinned under the brand bar once the block has scrolled away */
  function lvBar() {
    var e = ev(), st = evState(), L = lc(), live = L === "live" || L === "companion";
    var head = masked(e) && st.hiddenHeadline ? st.hiddenHeadline : st.headline;
    var playing = S.vid && S.vid.id === e.id && S.vid.mode === "full";
    return '<div class="lvbar" id="lvbar" aria-hidden="true">' +
      (live && st.watching ? '<p class="lvlive"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      '<p class="lvbhead">' + esc(head || e.title) + '</p>' +
      (st.watch && hasVideo(e) && live
        ? '<p class="lvbprog"><b>' + esc(st.watch[0]) + '</b> ' + esc(st.watch[1]) + '</p>' +
          '<button class="lvlisten sm" type="button" data-watch="' + S.eventIx + '">' + I.playtri + (playing ? "Watching live" : "Watch live") + '</button>'
        : '<p class="lvbprog"><b>' + esc(st.prog || e.audio.prog) + '</b> ' + esc(e.audio.station) + '</p>' +
          '<button class="lvlisten sm' + (playing && !hasVideo(e) ? " on" : "") + '" type="button" ' + (live && !hasVideo(e) ? 'data-watch="' + S.eventIx + '"' : 'data-listenlive="' + S.eventIx + '"') + '>' + I.speaker + (playing && !hasVideo(e) ? "Listening live" : "Listen live") + '</button>') +
      '<button class="iconbtn lvbx" type="button" data-lvbx aria-label="Hide">' + I.close + '</button></div>';
  }

  function summaryBox() {
    var st = evState();
    curTab();
    if (!st.summary || S.tabIx[tabKey()] !== 0) { return ""; }
    return '<section class="section"><div class="sechead"><h2>Summary</h2></div>' +
      '<ul class="summary">' + st.summary.map(function (s, i) {
        return '<li' + (i === 1 && s.indexOf("[[") < 0 && !st.summary.some(function (x) { return x.indexOf("[[") > -1; }) ? ' class="link"' : "") + '>' + esc(s).replace(/\[\[(.+?)\]\]/g, '<b class="slink">$1</b>') + '</li>';
      }).join("") + '</ul></section>';
  }

  function tabBar() {
    var k = tabKey();
    return '<div class="tabbar" role="tablist" aria-label="Sections">' + curTabs().map(function (t, i) {
      var n = 0;
      (t.sections || []).forEach(function (s) { (s.panels || []).forEach(function (pn) { if (pn.t === "streams") { n += pn.rows.length; } }); });
      return '<button class="tabbtn" role="tab" type="button" data-tab="' + i + '" aria-selected="' + (i === S.tabIx[k]) + '">' + esc(t.label) + (n ? '<i class="tabn">' + n + '</i>' : "") + '</button>';
    }).join("") + '</div>';
  }

  /* ---- Home ---- */

  var GROUPS = [
    ["live", "Live now"],
    ["soon", "Starting soon"],
    ["done", "Earlier today"]
  ];

  /* ---- the immersive live takeover -------------------------------------
     Whatever is most worth watching right now fills the top of Home: the
     picture runs full bleed, and the only thing on top of it is the state of
     the thing itself plus one way in. */

  function rankedCards() {
    var order = { live: 0, soon: 1, done: 2 };
    return EVENTS.map(function (e, i) { return { e: e, i: i, c: maskCard(e, evState(e).card) }; })
      .sort(function (a, b) {
        if (order[a.c.status] !== order[b.c.status]) { return order[a.c.status] - order[b.c.status]; }
        return b.c.sig - a.c.sig;
      });
  }

  function takeoverHero() {
    var x = rankedCards()[0], e = x.e, st = evState(e);
    var TK = e.takeover || {}, T = maskT(e, TK[lc()] || { stats: [] });
    var status = x.c.status === "live" ? "LIVE" : x.c.status === "soon" ? "STARTING SOON" : evState(e).card.when.split(" \u00b7")[0].toUpperCase();
    var L = lc(), playable = L === "live" || L === "companion" || (L === "fulltime" && hasVideo(e));

    var bars = (T.stats || []).map(function (r) {
      var a = Number(r[1]), b = Number(r[2]), tot = (a + b) || 1;
      return '<div class="tostat">' +
        '<span class="tonum">' + esc(String(r[1])) + '</span>' +
        '<span class="tobar a"><i style="width:' + (a / tot * 100).toFixed(1) + '%;background:' + TK.ca + '"></i></span>' +
        '<span class="tolab">' + esc(r[0]) + '</span>' +
        '<span class="tobar b"><i style="width:' + (b / tot * 100).toFixed(1) + '%;background:' + TK.cb + '"></i></span>' +
        '<span class="tonum r">' + esc(String(r[2])) + '</span></div>';
    }).join("");

    return '<section class="livetake">' +
      '<div class="tostill"><div class="tokb">' +
      photoSVG(T.img ? { img: T.img, cap: TK.a + " v " + TK.b } : e.photo, "tall", e.sport + " " + e.title + " " + lc()) +
      '</div><span class="toveil"></span><span class="tosweep"></span></div>' +

      '<div class="totop">' +
      '<span class="tochip' + (x.c.status === "live" ? " on" : "") + '"><i></i>' + status + '</span>' +
      (st.watching ? '<span class="towatch">' + esc(st.watching) + ' watching</span>' : "") +
      '<span class="tospacer"></span>' +
      (playable ? '<button class="toic" type="button" data-listenlive="' + x.i + '" aria-label="Listen live">' + I.speaker + '</button>' +
        '<button class="toic" type="button" data-watch="' + x.i + '" data-fs="1"' + (L === "companion" && e.id === "tennis" ? ' data-court="Court 2 · Raducanu v Vondroušová"' : "") + ' aria-label="Watch full screen">' + I.expand + '</button>' : "") +
      '</div>' +

      '<div class="tocard">' +
      '<p class="tokick">' + (I.sport[e.sport] || "") + esc(e.sport) + ' · ' + esc(e.comp) + '</p>' +
      '<div class="tonames">' +
      '<span class="tos">' + (crestImg(e.id, TK.a, "sm") || '<i style="background:' + TK.ca + '"></i>') + esc(TK.a || "") + '</span>' +
      '<span class="toline">' + esc(T.line || "") + '</span>' +
      '<span class="tos r">' + esc(TK.b || "") + (crestImg(e.id, TK.b, "sm") || '<i style="background:' + TK.cb + '"></i>') + '</span></div>' +
      (T.sub ? '<p class="tosub">' + esc(T.sub) + '</p>' : "") +
      '<div class="tostats">' + bars + '</div>' +
      (T.hidden ? '<button class="toreveal" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show the score</button>' : "") +
      (playable
        ? '<button class="tocta" type="button" data-watch="' + x.i + '"' + (L === "companion" && e.id === "tennis" ? ' data-court="Court 2 · Raducanu v Vondroušová"' : "") + '>' +
          '<span>' + (hasVideo(e) ? I.playtri : I.speaker) + esc(L === "fulltime" ? "Watch the highlights" : hasVideo(e) ? (L === "companion" && e.id === "tennis" ? "Watch Court 2 here" : "Watch live") : "Listen live on " + stationShort(e)) + '</span>' + I.chevron + '</button>'
        : '<button class="tocta" type="button" data-open="' + x.i + '">' +
          '<span>' + esc(T.cta || "Open the experience") + '</span>' + I.chevron + '</button>') +
      (RECAPS[e.id] && (lc() === "live" || lc() === "companion")
        ? '<button class="tocatch" type="button" data-open="' + x.i + '">' + I.play +
          '<span>Just arrived? The story so far in 60 seconds</span></button>' : "") +
      '</div></section>';
  }

  /* ---- participation, led by the picture rather than by the text ---- */

  function visualPoll(poll, photo, kicker) {
    var chosen = S.votes[poll.id], done = chosen !== undefined;
    var q = String(poll.q).replace(/^Have your say:\s*/i, ""), three = poll.opts.length > 2;
    return '<div class="vpoll" data-vpoll="' + poll.id + '">' +
      '<span class="vpkick">' + esc(kicker || "Have your say") + '</span>' +
      '<p class="vpq">' + esc(q) + '</p>' +
      '<div class="vpopts' + (poll.opts.length > 2 ? " three" : "") + '">' +
      poll.opts.map(function (o, k) {
        var pct = poll.split[k];
        return '<button class="vpopt' + (done ? " done" : "") + (done && k === chosen ? " mine" : "") +
          '" type="button" data-i="' + k + '"' + (done ? " disabled" : "") +
          ' aria-pressed="' + (k === chosen) + '">' +
          '<span class="vpimg">' + (poll.imgs && poll.imgs[k] ? imgTag(poll.imgs[k], o, "wide") : photoSVG(photo, "wide", poll.id + "#" + k)) + '<span class="vpveil"></span>' +
          (done && k === chosen ? '<span class="vptick">' + I.tick + '</span>' : "") + '</span>' +
          '<span class="vprow"><span class="vpfill" style="width:' + (done && three ? pct : 0) + '%"></span>' +
          '<span class="vplab">' + esc(o) + '</span>' +
          (done && three ? '<span class="vppct">' + pct + '%</span>' : "") + '</span>' +
          '</button>';
      }).join("") + '</div>' +
      (done && !three ? splitBar(poll.opts, poll.split, chosen) : "") +
      '<p class="vpafter">' + esc(done ? poll.after : "Tap one. Results the moment you do.") + '</p>' +
      '</div>';
  }

  /* ---- the lead story, headline on the picture ---- */

  /* after the event, with scores hidden, the lead story cannot be the result */
  function heroFor() {
    var h = HOMEFEED.hero[lc()] || HOMEFEED.hero.live;
    if (lc() !== "fulltime" || !hideOn()) { return h; }
    return { kicker: "The day, without the scores", head: "Four matches, four endings, and none of them given away here",
      stand: "Pick one to catch up on: highlights, the match in 60 seconds, or the full replay. The scores wait until you ask",
      photo: { img: "ck-mic", cap: "A BBC Sport microphone" }, sport: "cricket", article: "",
      comments: h.comments, likes: h.likes, shares: h.shares, poll: h.poll };
  }

  function storyCard(hero) {
    return '<section class="story">' +
      '<button class="stphoto" type="button" data-article="' + esc(hero.article || "") + '">' + photoSVG(hero.photo, "wide", "story " + hero.head) +
      '<span class="stveil"></span>' +
      '<span class="stkick">' + esc(hero.kicker) + '</span>' +
      '<span class="sthead">' + esc(hero.head) + '</span></button>' +
      '<div class="stbody"><button class="ststand" type="button" data-article="' + esc(hero.article || "") + '">' + esc(hero.stand) + '</button>' +
      engageBar({ listen: true, ctx: "story:" + lc(), comments: hero.comments, likes: hero.likes, shares: hero.shares, likeKey: "story:" + lc() }) +
      '</div></section>';
  }

  function homeBody() {
    var hero = heroFor();
    var cards = rankedCards();
    var bySig = cards.slice().sort(function (a, b) { return b.c.sig - a.c.sig; });
    var out = "";

    out += spoilBar() + watchBar();

    /* 1. whatever is worth watching, full bleed */
    out += takeoverHero();

    /* 2. the way in for anyone who would rather answer than watch */
    out += '<section class="section pollsec">' +
      visualPoll(hero.poll, hero.photo, "Have your say") + '</section>';

    /* 3. one card per sport, ranked by the same score */
    out += '<section class="section">' + feedHead("Live on the BBC", "The full live index is not built out in this prototype.") +
      '<div class="rail liverail">' + cards.map(function (x, k) {
        var c = x.c, isTop = k === 0 && c.status === "live";
        var chip = c.status === "live" ? '<span class="chiplive">LIVE</span>'
          : c.status === "soon" ? ""
          : '<span class="chipdone">' + esc(c.hidden ? "Result hidden" : c.when.split(" ·")[0]) + '</span>';
        return '<button class="lcard' + (isTop ? " top" : "") + '" type="button" data-open="' + x.i + '">' +
          '<span class="lphoto">' + photoSVG(x.e.photo, "wide", x.e.sport + " " + x.e.title) + chip +
          (c.badge && c.status !== "soon" ? '<span class="lbadge">' + esc(c.badge) + '</span>' : "") + '</span>' +
          '<span class="lsport">' + (I.sport[x.e.sport] || "") + esc(x.e.sport) + '</span>' +
          '<span class="ltitle">' + esc(c.line1) + '</span>' +
          '<span class="lsub">' + esc(c.line2) + '</span>' +
          (c.status === "soon" ? '<span class="lfoot"><span class="lwhen">' + esc(c.when.split(" ·")[0]) + '</span>' + remindChip(x.e, "") + '</span>' : "") +
          (isTop ? '<span class="lsig hot">Watch now</span>' : "") +
          '</button>';
      }).join("") + '</div></section>';

    /* 4. the lead story */
    out += storyCard(hero);

    /* 5. following today, every card carrying its own picture */
    out += '<section class="section">' + feedHead("Following today", "Your followed events are not built out in this prototype.") +
      '<div class="cardlist">' + bySig.map(function (x) {
        var c = x.c;
        return '<button class="ecard" type="button" data-open="' + x.i + '">' +
          '<span class="ecphoto">' + photoSVG(x.e.photo, "wide", "follow " + x.e.title + c.line2) +
          (c.status === "live" ? '<span class="ecdot"></span>' : "") + '</span>' +
          '<span class="ectext">' +
          '<span class="ec-top"><span class="ec-sport">' + (I.sport[x.e.sport] || "") + esc(x.e.sport) + '</span>' +
          '<span class="ec-when' + (c.status === "live" ? " live" : c.status === "soon" ? " soon" : "") + '">' + esc(c.when) + '</span></span>' +
          '<span class="ec-title">' + esc(c.line1) + '</span>' +
          '<span class="ec-ctx">' + esc(c.ctx) + '</span>' +
          (c.status === "soon" ? '<span class="ec-foot">' + remindChip(x.e, "") + '</span>' : "") + '</span></button>';
      }).join("") + '</div></section>';

    /* 6. the drop, one in focus with the rest peeking */
    var v = HOMEFEED.videos;
    out += '<section class="section">' + feedHead(v.title, "The video index is not built out in this prototype.") +
      '<div class="focusrail" data-focusrail>' + (lc() === "fulltime" && hideOn() ? [11, 5, 8, 0, 6, 2, 3, 4] : ((v.decks && v.decks[lc()]) || v.deck)).map(function (ix) {
        var it = DROP[ix];
        return '<button class="fcard" type="button" data-play="' + ix + '">' +
          '<span class="fphoto">' + photoSVG(it, "tall", it.sport + " " + it.t) +
          '<span class="fscrim"></span>' +
          '<span class="play">' + I.playtri + '</span>' +
          '<span class="dur">' + esc(it.dur) + '</span>' +
          '<span class="fmeta"><span class="fkick">' + esc(it.sport) + '</span>' +
          (it.baked ? "" : '<span class="ftitle">' + esc(it.t) + '</span>') + '</span></span></button>';
      }).join("") + '</div></section>';

    /* 7. sport on the BBC */
    var br = HOMEFEED.bbcrail;
    out += '<section class="section">' + feedHead(br.title, "The BBC Sport index is not built out in this prototype.") +
      '<div class="rail">' + br.items.map(function (it) {
        return '<button class="bcard' + (it.badge ? " live" : "") + '" type="button" data-toast="' + esc(it.title) + ' is not built out in this prototype.">' +
          '<span class="bphoto">' + photoSVG(it, "wide", it.title + " " + it.sub) +
          (it.badge ? '<span class="chiplive">' + esc(it.badge) + '</span>' : "") + '</span>' +
          '<span class="btitle">' + esc(it.title) + '</span>' +
          '<span class="bsub">' + esc(it.sub) + '</span></button>';
      }).join("") + '</div></section>';

    /* 8. tables */
    var st = HOMEFEED.standings;
    out += '<section class="section">' + feedHead(st.title, "The full table is not built out in this prototype.") +
      table(st.cols, st.rows) + '<p class="note">' + esc(st.note) + '</p></section>';

    var cp = HOMEFEED.comps, tix = S.compTab || 0, ct = cp.tabs[tix];
    out += '<section class="section">' + feedHead(cp.title, "The competition index is not built out in this prototype.") +
      '<div class="comptabs">' + cp.tabs.map(function (t, i) {
        return '<button class="comptab" type="button" data-comp="' + i + '" aria-pressed="' + (i === tix) + '">' +
          badge(t.colour, t.initials) + esc(t.name) + '</button>';
      }).join("") + '</div>' + table(ct.cols, ct.rows, "Club") + '</section>';

    /* 9. rumours, with a picture each */
    var rm = HOMEFEED.rumours;
    out += '<section class="section">' + feedHead(rm.title, "The rumour index is not built out in this prototype.") +
      '<div class="rail">' + rm.items.map(function (it) {
        return '<button class="rcard" type="button" data-toast="' + esc(it[0]) + '">' +
          '<span class="rphoto">' + photoSVG({ motif: "pitch", g: ["#123D22", "#071A0E"], sport: "Football" }, "wide", "rumour " + it[0]) +
          '<span class="rveil"></span>' + badge(it[2], it[3]) + '</span>' +
          '<span class="rtext"><span class="rtitle">' + esc(it[0]) + '</span>' +
          '<span class="rviews">' + esc(it[1]) + '</span></span></button>';
      }).join("") + '</div></section>';

    return out;
  }

  function table(cols, rows, firstCol) {
    return '<div class="tablewrap"><table class="ltable"><thead><tr>' +
      '<th class="tpos"></th><th class="tname">' + esc(firstCol || "Team") + '</th>' +
      cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join("") +
      '</tr></thead><tbody>' + rows.map(function (r, i) {
        return '<tr' + (i === 0 ? ' class="lead"' : "") + '><td class="tpos">' + (i + 1) + '</td>' +
          '<td class="tname">' + badge(r[1], r[2]) + '<span>' + esc(r[0]) + '</span></td>' +
          r[3].map(function (v) { return '<td>' + esc(v) + '</td>'; }).join("") + '</tr>';
      }).join("") + '</tbody></table></div>';
  }

  /* ---- shell ---- */

  function frameFor() {
    var dev = $("#device"), set = $("#tvset"), s = S.surface || "phone";
    if (dev) {
      dev.hidden = s === "tv";
      dev.classList.toggle("browser", s === "web");
    }
    if (set) { set.hidden = !(s === "tv" || s === "together"); }
    document.body.dataset.surface = s;
  }

  function afterRender() {
    $$(".lc").forEach(function (b, i) { b.setAttribute("aria-selected", String(i === S.lcIx)); });
    $$(".swipehint i").forEach(function (d, i) { d.classList.toggle("on", i === S.lcIx); });
    $("#lcblurb").textContent = LIFECYCLE[S.lcIx].blurb;
    wire();
    if (S.player !== null) { mountPlayer(); }
    if (S.surface === "tv" || S.surface === "together") { renderTV(); }
    sizeFS();
    W100.mount();
  }

  function eventBody() {
    var inner = summaryBox() + renderSections(curTab().sections);
    return masked(ev()) ? spoilShield(ev()) + '<div class="spoilblur" aria-hidden="true">' + inner + '</div>' : inner;
  }

  /* the recaps hold the moments up to the live point; near-live adds what
     happened after it, so "the match in 60 seconds" tells the whole story */
  function syncRecaps() {
    var ft = lc() === "fulltime", k, R;
    for (k in RECAPS) {
      if (!RECAPS.hasOwnProperty(k)) { continue; }
      R = RECAPS[k];
      if (!R.base) { R.base = R.moments.slice(); R.baseSyn = R.synopsis.slice(); }
      R.moments = ft && R.after ? R.base.concat(R.after) : R.base.slice();
      R.synopsis = ft && R.ftSynopsis ? R.ftSynopsis : R.baseSyn;
    }
  }

  function render(dir) {
    syncRecaps();
    resetUsed();
    document.body.dataset.theme = S.theme;
    /* a full-size video only lives at the top of its own event page */
    if (S.vid && S.vid.mode === "full" && !(S.view === "event" && S.nav === "home" && (!S.vid.id || S.vid.id === ev().id))) { S.vid.mode = "pip"; }
    frameFor();
    if (S.surface === "web") { renderWeb(); afterRender(); return; }
    var app = $("#app"), isHome = S.view === "home" && S.nav === "home";
    var head, body, pre = "";

    if (S.nav !== "home") {
      head = appHead(NAVSCREENS[S.nav].title);
      body = renderSections(NAVSCREENS[S.nav].sections);
    } else if (isHome) {
      head = appHead("Home");
      body = homeBody();
    } else {
      /* only the brand bar and any playing video stay fixed; the score and
         the tabs scroll with the page, and the tabs stick once they reach
         the top. On a short phone a fixed scoreboard left no room to scroll */
      head = appHead(ev().sport) + (inlineVid() ? "" : vidPane());
      pre = matchHead() + tabBar();
      body = eventBody();
    }

    var vidFull = !isHome && S.nav === "home" && S.vid && S.vid.mode === "full";
    app.innerHTML = '<div class="viewport' + (evState().sofa && !isHome && S.nav === "home" ? " sofa" : "") + (S.dock ? " docked" : "") + (vidFull ? " hasvid" : "") + (pre ? " evpage" : "") + '" id="viewport">' +
      head + (pre && (!hasVideo(ev()) || ev().id === "football") && !S.lvHide ? lvBar() : "") + '<div class="body" id="scrollbody">' + pre + '<div id="stage"' +
      (dir ? ' class="stage-anim" style="--from:' + (dir > 0 ? "18px" : "-18px") + '"' : "") + '>' + body + '</div></div>' +
      dockHTML() + navBar() + drawer() + '<div id="ovl">' + overlaysHTML() + '</div><div class="toast" id="toast" role="status"></div></div>';

    var sb = $("#scrollbody"), vp = $("#viewport");
    if (sb && vp && !pre) {
      /* Hysteresis plus a room check. Collapsing the header shortens the page,
         which can push scrollTop back under the threshold and start an
         expand/collapse loop. Two thresholds and a minimum scroll height stop it. */
      var pending = false;
      sb.addEventListener("scroll", function () {
        if (pending) { return; }
        pending = true;
        requestAnimationFrame(function () {
          pending = false;
          if (vp.classList.contains("hasvid")) { return; }
          var on = vp.classList.contains("condensed");
          var top = sb.scrollTop;
          if (!on) {
            if (top > 80 && sb.scrollHeight - sb.clientHeight > 520) { vp.classList.add("condensed"); }
          } else if (top < 24) {
            vp.classList.remove("condensed");
          }
        });
      }, { passive: true });
    }

    var lvb = $("#lvbar"), lvk = $("#lvblock");
    if (sb && vp && lvb && lvk) {
      var lvPend = false;
      var lvCheck = function () {
        lvPend = false;
        lvb.style.top = sb.offsetTop + "px";
        var stuck = sb.scrollTop > lvk.offsetTop + lvk.offsetHeight - 8;
        vp.classList.toggle("lvstuck", stuck);
        sb.style.setProperty("--lvh", stuck ? lvb.offsetHeight + "px" : "0px");
      };
      sb.addEventListener("scroll", function () { if (!lvPend) { lvPend = true; requestAnimationFrame(lvCheck); } }, { passive: true });
      lvCheck();
    }

    afterRender();
  }

  function rerenderBody() {
    if (S.surface === "web") {
      var wsb = $("#scrollbody"), wy = wsb ? wsb.scrollTop : 0;
      render();
      if ($("#scrollbody")) { $("#scrollbody").scrollTop = wy; }
      return;
    }
    var sb = $("#scrollbody"), pos = sb ? sb.scrollTop : 0;
    var isHome = S.view === "home" && S.nav === "home";
    resetUsed();
    $("#stage").innerHTML = S.nav !== "home" ? renderSections(NAVSCREENS[S.nav].sections)
      : isHome ? homeBody() : eventBody();
    if (sb) { sb.scrollTop = pos; }
    wire();
  }

  function navBar() {
    return '<div class="bottomnav" role="tablist" aria-label="Sections">' + NAVITEMS.map(function (n) {
      var on = S.nav === n[0];
      return '<button class="nav" role="tab" type="button" data-nav="' + n[0] + '" aria-selected="' + on + '">' +
        '<i class="navpill">' + I.nav[n[0]] + '</i><span>' + esc(n[1]) + '</span></button>';
    }).join("") + '</div>';
  }

  /* ==========================================================================
     The story so far, and the audio dock
     ==========================================================================
     Somebody arriving at minute 67 needs the match explained before any of
     the live furniture makes sense. The recap tells it three ways: watch the
     moments go by in sixty seconds, listen to it read while doing something
     else, or read it properly. Same story, three levels of attention.

     The dock is where anything audio lives: Listen live, a story read aloud,
     a clip from Test Match Special. It sits above the navigation and keeps
     playing as you move around the app.
     ========================================================================== */

  var RECAP_SLIDE = 3.4;

  function secs(t) {
    var m = String(t || "0:00").split(":");
    return Number(m[0]) * 60 + Number(m[1] || 0);
  }

  function rstate(id) {
    if (!S.recap) { S.recap = {}; }
    if (!S.recap[id]) { S.recap[id] = { mode: "watch", ix: 0, el: 0, play: true, pos: 0, speed: 1, heard: false }; }
    return S.recap[id];
  }

  var WAVE = (function () {
    var out = [], x = 1234567;
    for (var i = 0; i < 64; i++) {
      x = (x * 1103515245 + 12345) & 0x7fffffff;
      out.push(0.25 + (x % 1000) / 1000 * 0.75);
    }
    return out;
  })();

  function waveSVG(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 256 40" preserveAspectRatio="none" aria-hidden="true">' +
      WAVE.map(function (v, i) {
        var h = v * 34;
        return '<rect x="' + (i * 4 + 0.5) + '" y="' + (20 - h / 2).toFixed(1) + '" width="2.4" height="' + h.toFixed(1) + '" rx="1.2"/>';
      }).join("") + '</svg>';
  }

  function momentTile(m, e) {
    if (m[3]) { return imgTag(m[3], m[1], "wide"); }
    /* no picture: a graphic card, coloured by what kind of moment it was */
    return '<span class="rcpgfx k-' + esc(m[4] || "score") + '" style="--acc:' + (e ? e.accent : "#FFD230") + '">' +
      '<b>' + esc(m[0]) + '</b>' + (e && I.sport[e.sport] ? '<i>' + I.sport[e.sport] + '</i>' : "") + '</span>';
  }

  function nowLine(R, r) {
    var dur = secs(R.listen), n = R.moments.length;
    var k = Math.min(n - 1, Math.floor(r.pos / dur * n));
    return R.moments[k];
  }

  P.recap = function (p) {
    var R = RECAPS[p.id];
    if (!R) { return ""; }
    var r = rstate(p.id), e = EVENTS.filter(function (x) { return x.id === p.id; })[0];
    var n = R.moments.length, out = "";

    out += '<div class="rcp" data-recap="' + esc(p.id) + '">' +
      '<div class="rcpmodes" role="tablist" aria-label="How to catch up">' +
      [["watch", "Watch", "60 sec"], ["listen", "Listen", R.listen], ["read", "Read", R.read]].map(function (m) {
        return '<button type="button" role="tab" data-rmode="' + m[0] + '" aria-selected="' + (r.mode === m[0]) + '">' +
          '<span>' + m[1] + '</span><small>' + esc(m[2]) + '</small></button>';
      }).join("") + '</div>';

    if (r.mode === "watch") {
      var m = R.moments[r.ix];
      out += '<div class="rcpstage' + (r.play ? "" : " paused") + '">' +
        '<div class="rcpslide">' + momentTile(m, e) + '</div>' +
        '<span class="rcpscrim"></span>' +
        '<div class="rcpsegs">' + R.moments.map(function (x, k) {
          var st = k < r.ix ? "done" : k === r.ix ? "on" : "";
          return '<span class="rcpseg ' + st + '"><i' +
            (k === r.ix ? ' style="animation-duration:' + RECAP_SLIDE + 's;animation-delay:-' + r.el.toFixed(2) + 's"' : "") +
            '></i></span>';
        }).join("") + '</div>' +
        '<div class="rcptext"><span class="rcptime">' + esc(m[0]) + '</span>' +
        '<b>' + esc(m[1]) + '</b><p>' + esc(m[2]) + '</p></div>' +
        '<button class="rcpzone prev" type="button" data-rstep="-1" aria-label="Previous moment"></button>' +
        '<button class="rcpzone next" type="button" data-rstep="1" aria-label="Next moment"></button>' +
        '<button class="rcpplay" type="button" data-rplay aria-label="' + (r.play ? "Pause" : "Play") + '">' +
        (r.play ? I.pause : I.play) + '</button>' +
        '<span class="rcpcount">' + (r.ix + 1) + ' of ' + n + '</span>' +
        '</div>';
    } else if (r.mode === "listen") {
      var dur = secs(R.listen), pct = Math.min(100, r.pos / dur * 100), now = nowLine(R, r);
      out += '<div class="rcpaudio">' +
        '<button class="rcpbig" type="button" data-rplay aria-label="' + (r.play ? "Pause" : "Play") + '">' +
        (r.play ? I.pause : I.play) + '</button>' +
        '<div class="rcpwavebox">' + waveSVG("rcpwave") +
        '<span class="rcpwavefill" style="clip-path:inset(0 ' + (100 - pct).toFixed(1) + '% 0 0)">' + waveSVG("rcpwave on") + '</span></div>' +
        '<div class="rcptimes"><span data-rel>' + mmss(Math.floor(r.pos)) + '</span>' +
        '<button type="button" class="rcpspeed" data-rspeed>' + r.speed + '×</button>' +
        '<span>' + esc(R.listen) + '</span></div>' +
        '<p class="rcpnow"><span>Now</span> <b data-rnow>' + esc(now[0] + " · " + now[1]) + '</b></p>' +
        '<p class="rcpvoice">' + esc(R.voice) + '</p>' +
        '</div>';
    } else {
      out += '<div class="rcpread">' + R.synopsis.map(function (para) { return '<p>' + esc(para) + '</p>'; }).join("") +
        '<ol class="rcpline">' + R.moments.map(function (x) {
          return '<li class="k-' + esc(x[4] || "score") + '"><span>' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b></li>';
        }).join("") + '</ol></div>';
    }
    return out + '</div>';
  };

  function refreshRecap(id) {
    var el = $('[data-recap="' + id + '"]');
    if (!el) { return; }
    var holder = document.createElement("div");
    holder.innerHTML = P.recap({ id: id });
    var fresh = holder.firstChild;
    el.parentNode.replaceChild(fresh, el);
    wireRecap(fresh);
  }

  function wireRecap(el) {
    var id = el.dataset.recap, R = RECAPS[id], r = rstate(id);
    $$("[data-rmode]", el).forEach(function (b) {
      b.onclick = function () {
        var m = b.dataset.rmode;
        if (m === r.mode) { return; }
        r.mode = m;
        r.play = m !== "read";
        if (m === "watch") { r.el = 0; if (r.ix >= R.moments.length - 1) { r.ix = 0; } }
        if (m === "listen") { stopDock(); if (r.pos >= secs(R.listen)) { r.pos = 0; } }
        refreshRecap(id);
      };
    });
    var pb = $("[data-rplay]", el);
    if (pb) {
      pb.onclick = function () {
        r.play = !r.play;
        if (r.play && r.mode === "watch" && r.ix >= R.moments.length - 1 && r.el >= RECAP_SLIDE) { r.ix = 0; r.el = 0; }
        if (r.play && r.mode === "listen") { stopDock(); if (r.pos >= secs(R.listen)) { r.pos = 0; } }
        refreshRecap(id);
      };
    }
    $$("[data-rstep]", el).forEach(function (b) {
      b.onclick = function () {
        r.ix = Math.max(0, Math.min(R.moments.length - 1, r.ix + Number(b.dataset.rstep)));
        r.el = 0;
        refreshRecap(id);
      };
    });
    var sp = $("[data-rspeed]", el);
    if (sp) {
      sp.onclick = function () {
        r.speed = r.speed === 1 ? 1.5 : r.speed === 1.5 ? 2 : 1;
        refreshRecap(id);
      };
    }
  }

  /* ---- the dock ---- */

  function dockHTML() {
    var d = S.dock;
    if (!d) { return '<div class="dock" id="dock" hidden></div>'; }
    var pct = d.dur ? Math.min(100, d.pos / d.dur * 100) : 0;
    return '<div class="dock' + (d.live ? " live" : "") + '" id="dock" role="region" aria-label="Now playing">' +
      '<button class="dkplay" type="button" data-dkplay aria-label="' + (d.play ? "Pause" : "Play") + '">' +
      (d.play ? I.pause : I.play) + '</button>' +
      '<span class="dktext">' +
      (d.live ? '<span class="dklive"><i></i>LIVE</span>' : "") +
      '<b>' + esc(d.title) + '</b><small>' + esc(d.sub) + '</small></span>' +
      (d.transcript ? '<button class="dkread" type="button" data-dkread aria-pressed="' + !!d.showText + '">Text</button>' : "") +
      '<button class="dkclose" type="button" data-dkclose aria-label="Stop">' + I.close + '</button>' +
      (d.dur ? '<span class="dkbar"><i style="width:' + pct.toFixed(1) + '%"></i></span>' : '<span class="dkbar live"><i></i></span>') +
      (d.transcript && d.showText ? '<div class="dktranscript">' + d.transcript.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join("") + '</div>' : "") +
      '</div>';
  }

  function paintDock() {
    var old = $("#dock");
    if (!old) { return; }
    var holder = document.createElement("div");
    holder.innerHTML = dockHTML();
    old.parentNode.replaceChild(holder.firstChild, old);
    wireDock();
    var vp = $("#viewport");
    if (vp) { vp.classList.toggle("docked", !!S.dock); }
  }

  function wireDock() {
    var el = $("#dock");
    if (!el || !S.dock) { return; }
    var p = $("[data-dkplay]", el), c = $("[data-dkclose]", el), t = $("[data-dkread]", el);
    if (p) { p.onclick = function () { S.dock.play = !S.dock.play; paintDock(); }; }
    if (c) { c.onclick = stopDock; }
    if (t) { t.onclick = function () { S.dock.showText = !S.dock.showText; paintDock(); }; }
  }

  function playDock(d) {
    /* one thing plays at a time: the recap's own player stops */
    for (var id in (S.recap || {})) {
      if (S.recap.hasOwnProperty(id) && S.recap[id].mode === "listen") { S.recap[id].play = false; refreshRecap(id); }
    }
    d.play = true; d.pos = 0;
    if (S.vid && S.vid.play) { S.vid.play = false; if (S.vid.mode === "full") { refreshVid(); } else { refreshOverlays(); } }
    S.dock = d;
    paintDock();
  }

  function stopDock() {
    if (!S.dock) { return; }
    S.dock = null;
    paintDock();
  }

  function listenLive(e) {
    playDock({ live: true, title: e.audio.station, sub: e.audio.prog, dur: 0 });
  }

  /* one clock for everything that moves on its own */
  function tickMedia() {
    var dt = 0.2;
    tickTV(dt);
    tickVid(dt);
    var id, r, R, el;
    for (id in (S.recap || {})) {
      if (!S.recap.hasOwnProperty(id)) { continue; }
      r = S.recap[id]; R = RECAPS[id];
      el = $('[data-recap="' + id + '"]');
      if (!el || !r.play) { continue; }
      if (r.mode === "watch") {
        r.el += dt;
        if (r.el >= RECAP_SLIDE) {
          if (r.ix < R.moments.length - 1) { r.ix += 1; r.el = 0; }
          else { r.el = RECAP_SLIDE; r.play = false; }
          refreshRecap(id);
        }
      } else if (r.mode === "listen") {
        var dur = secs(R.listen);
        r.pos = Math.min(dur, r.pos + dt * r.speed);
        var f = $(".rcpwavefill", el), rel = $("[data-rel]", el), nw = $("[data-rnow]", el);
        if (f) { f.style.clipPath = "inset(0 " + (100 - r.pos / dur * 100).toFixed(1) + "% 0 0)"; }
        if (rel) { rel.textContent = mmss(Math.floor(r.pos)); }
        if (nw) { var m = nowLine(R, r); nw.textContent = m[0] + " · " + m[1]; }
        if (r.pos >= dur) { r.play = false; refreshRecap(id); }
      }
    }
    var d = S.dock;
    if (d && d.play && d.dur) {
      d.pos = Math.min(d.dur, d.pos + dt);
      var bar = $("#dock .dkbar i");
      if (bar) { bar.style.width = (d.pos / d.dur * 100).toFixed(1) + "%"; }
      if (d.pos >= d.dur) { d.play = false; paintDock(); }
    }
  }

  /* the recap goes into every live and second-screen state, at the top of
     the first tab, or straight after the delay control where there is one */
  function seedRecaps() {
    EVENTS.forEach(function (e) {
      if (!RECAPS[e.id]) { return; }
      ["live", "companion"].forEach(function (st) {
        var s = e.states[st];
        if (!s || !s.tabs || !s.tabs[0]) { return; }
        var secs0 = s.tabs[0].sections;
        if (secs0.some(function (x) { return x.panels && x.panels.some(function (pn) { return pn.t === "recap"; }); })) { return; }
        var at = 0;
        secs0.forEach(function (x, i) { if (/^(Match your|In step)/.test(x.h || "")) { at = i + 1; } });
        secs0.splice(at, 0, { h: "The story so far", meta: "Catch up", panels: [{ t: "recap", id: e.id }] });
      });
    });
  }


  /* ==========================================================================
     The menu: a profile rather than a nav list
     ==========================================================================
     Every poll in this prototype settles against something that actually
     happens later in the day, so the menu can show a fan what their calls
     were worth. Votes read from the same state the polls write to, which
     means answering one on the live page changes what is in here.
     ========================================================================== */

  var VOTEBOOK = {
    "hero-buildup": { t: "The Ashes, day 3", q: "England to avoid the follow-on", right: 0,
      r: "You said {x}, and they got there with 11 to spare",
      w: "You said {x}. England reached 361-8 and avoided it" },
    "hero-live": { t: "Wimbledon, Court 2", q: "Raducanu to break serve", right: 0,
      r: "You said {x}, and she did", w: "You said {x}. She broke, and served it out" },
    "hero-companion": { t: "Wimbledon, Centre Court", q: "Should BBC One switch to Court 2", pending: true,
      p: "You said {x}. The gallery decides at the changeover" },
    "hero-fulltime": { t: "The day in one line", q: "Performance of the day", right: 0,
      r: "You said {x}, and the country agreed", w: "You said {x}. Root took it, and it was not close" },
    "fb-scorer": { t: "England v Netherlands", q: "First goalscorer", right: 1,
      r: "You said {x}, and {x} got it on 52", w: "You said {x}. Saka got there first, on 52" },
    "ck-session": { t: "The Ashes, day 3", q: "Wickets before lunch", right: 2,
      r: "You said {x}, and that is how the session went", w: "You said {x}. Two fell before the interval" },
    "tn-upset": { t: "Wimbledon, day 6", q: "Which seed goes out", right: 0,
      r: "You said {x}, and he went out in four", w: "You said {x}. Musetti was the one who went" },
    "rg-bp": { t: "Wales v Ireland", q: "Ireland's four tries", right: 1,
      r: "You said {x}, and it came with a minute left", w: "You said {x}. It came with a minute left" }
  };

  /* what a fan did earlier in the week, so the list is never empty */
  var PASTVOTES = [
    { t: "Ireland v France, round 4", line: "You said Ireland by less than seven, and it finished by four", ok: true },
    { t: "England v Senegal", line: "You said a clean sheet, and they conceded in the 90th", ok: false },
    { t: "The Ashes, 1st Test", line: "You said England would chase it down, and they did", ok: true }
  ];

  var MYCOMMENTS = [
    { img: "rg-maul", t: "Wales v Ireland, Six Nations",
      body: "The maul penalty count is doing all the talking and nobody on commentary has mentioned it once" },
    { img: "ck-root", t: "The Ashes, 2nd Test, Lord's",
      body: "Root at this ground, in this light, with the new ball eight overs away. I am not moving" }
  ];

  var REWARDS = [
    { i: "stack", t: "Voted in an Ashes poll", sub: "Day 3" },
    { i: "tick", t: "Correct call on Court 2", sub: "Wimbledon" },
    { i: "chat", t: "Commented in a live page", sub: "Six Nations" },
    { i: "flame", t: "Four sports in one day", sub: "26 June" }
  ];

  var FOLLOWS = ["Cricket", "Football", "Tennis", "Rugby Union", "Formula 1", "Boxing"];

  function voteRows() {
    var rows = [], id;
    for (id in VOTEBOOK) {
      if (!VOTEBOOK.hasOwnProperty(id)) { continue; }
      var choice = S.votes[id];
      if (choice === undefined) { continue; }
      var v = VOTEBOOK[id];
      var opts = pollOpts(id);
      var said = opts && opts[choice] !== undefined ? opts[choice] : "";
      var ok = v.pending ? null : choice === v.right;
      var tpl = v.pending ? v.p : (ok ? v.r : v.w);
      /* the option goes in quotes: it can be a name or a whole phrase */
      rows.push({ t: v.t + " \u00b7 " + v.q, line: String(tpl).replace(/\{x\}/g, "\u201c" + said + "\u201d"), ok: ok });
    }
    /* top up with earlier in the week, newest of those first */
    for (var k = 0; rows.length < 3 && k < PASTVOTES.length; k++) {
      rows.push({ t: PASTVOTES[k].t, line: PASTVOTES[k].line, ok: PASTVOTES[k].ok });
    }
    return rows.slice(0, 4);
  }

  /* the options a poll was rendered with, wherever it lives in the data */
  var POLLOPTS = null;
  function pollOpts(id) {
    if (!POLLOPTS) {
      POLLOPTS = {};
      var seen = [];
      (function walk(o) {
        if (!o || typeof o !== "object" || seen.indexOf(o) >= 0) { return; }
        seen.push(o);
        if (o.id && o.opts) { POLLOPTS[o.id] = o.opts; }
        for (var k in o) { if (o.hasOwnProperty(k)) { walk(o[k]); } }
      })({ e: EVENTS, h: HOMEFEED });
    }
    return POLLOPTS[id];
  }

  function drawer() {
    var votes = voteRows();
    var live = rankedCards();

    return '<div class="scrim" id="scrim"></div>' +
      '<aside class="drawer" id="drawer" aria-label="Your account" aria-hidden="true">' +

      '<div class="dtop">' +
      '<button class="iconbtn" type="button" id="drawerclose" aria-label="Close">' + I.close + '</button>' +
      '<span class="dspacer"></span>' +
      '<button class="iconbtn dbadge" type="button" data-sheet="comments" data-ctx="' + (S.view === "event" ? ev().id : "tennis") + '" aria-label="Replies">' +
      I.chat + '<i>3</i></button>' +
      '<button class="iconbtn dbadge" type="button" data-sheet="notifs" aria-label="Notifications">' +
      I.bell + '<i>2</i></button>' +
      '<button class="iconbtn dthemebtn" type="button" data-themetoggle aria-pressed="' + (S.theme === "light") + '" aria-label="' + (S.theme === "light" ? "Switch to dark mode" : "Switch to light mode") + '">' +
      (S.theme === "light" ? I.moon : I.sun) + '</button>' +
      '</div>' +

      '<div class="dme"><button class="dav" type="button" data-toast="Adding a profile picture is not built out in this prototype." aria-label="Add a profile picture">A' +
      '<span class="davadd" aria-hidden="true">+</span></button><h2>Arun</h2></div>' +

      '<section class="dblock dset">' +
      '<button type="button" class="ntype" data-spoil="toggle" aria-pressed="' + hideOn() + '"><span><b>' + I.eyeoff + 'Hide scores</b><small>Catch-ups and replays first, scores when you choose</small></span><i class="sw' + (hideOn() ? " on" : "") + '"></i></button>' +
      '</section>' +

      '<section class="dblock">' + dhead("Follows", "Your followed sports are not built out in this prototype.") +
      '<div class="dchips"><button class="dchip ic" type="button" data-toast="Follow settings are not built out in this prototype." aria-label="Edit follows">' +
      I.optabars + '</button>' +
      FOLLOWS.map(function (f) {
        return '<button class="dchip" type="button" data-toast="' + esc(f) + ' is not built out in this prototype.">' + esc(f) + '</button>';
      }).join("") + '</div></section>' +

      '<section class="dblock">' + dhead("Votes", "Your full voting record is not built out in this prototype.") +
      '<ul class="dvotes">' + votes.map(function (v) {
        var mark = v.ok === null ? '<span class="dmark wait">' + I.livedot + '</span>'
          : v.ok ? '<span class="dmark yes">' + I.tickplain + '</span>'
            : '<span class="dmark no">' + I.close + '</span>';
        return '<li>' + mark + '<span class="dvt"><b>' + esc(v.t) + '</b><span>' + esc(v.line) + '</span></span></li>';
      }).join("") + '</ul>' +
      (S.answered ? "" : '<p class="dnote">Answer a poll anywhere in the app and it lands here.</p>') +
      '</section>' +

      '<section class="dblock">' + dhead("Comments", "Your comment history is not built out in this prototype.") +
      MYCOMMENTS.map(function (c) {
        return '<button class="dcom" type="button" data-toast="Comment threads are not built out in this prototype.">' +
          '<span class="dcimg">' + imgTag(c.img, "", "square") + '</span>' +
          '<span class="dct"><b>' + esc(c.t) + '</b><span>' + esc(c.body) + '</span></span></button>';
      }).join("") + '</section>' +

      '<section class="dblock">' + dhead("Rewards", "The rewards shelf is not built out in this prototype.") +
      '<div class="drew">' + REWARDS.map(function (r) {
        return '<div class="dbadge2"><span class="dmedal">' + (I[r.i] || I.tick) + '</span>' +
          '<b>' + esc(r.t) + '</b><span>' + esc(r.sub) + '</span></div>';
      }).join("") + '</div></section>' +

      '<section class="dblock last">' + dhead("Live today", "") +
      '<div class="rail liverail drail">' + live.map(function (x, k) {
        var c = x.c;
        var chip = c.status === "live" ? '<span class="chiplive">LIVE</span>'
          : c.status === "soon" ? '<span class="chipsoon">' + esc(c.when.split(" \u00b7")[0]) + '</span>'
          : '<span class="chipdone">' + esc(c.when.split(" \u00b7")[0]) + '</span>';
        return '<button class="lcard' + (S.view === "event" && x.i === S.eventIx ? " top" : "") + '" type="button" data-open="' + x.i + '">' +
          '<span class="lphoto">' + photoSVG(x.e.photo, "wide", x.e.sport + " " + x.e.title) + chip + '</span>' +
          '<span class="lsport">' + (I.sport[x.e.sport] || "") + esc(x.e.sport) + '</span>' +
          '<span class="ltitle">' + esc(c.line1) + '</span>' +
          '<span class="lsub">' + esc(c.line2) + '</span></button>';
      }).join("") + '</div></section>' +

      '</aside>';
  }

  function closeDrawer() {
    var d = $("#drawer"), b = $("#burger");
    if (!d) { return; }
    d.classList.remove("open");
    if ($("#scrim")) { $("#scrim").classList.remove("open"); }
    d.setAttribute("aria-hidden", "true");
    if (b) { b.setAttribute("aria-expanded", "false"); }
  }

  /* the menu is rebuilt every time it opens, so its handlers are attached
     here rather than in the page-wide pass */
  function wireDrawer() {
    var d = $("#drawer");
    if (!d) { return; }
    var c = $("#drawerclose", d);
    if (c) { c.onclick = closeDrawer; }
    $$("[data-open]", d).forEach(function (b) {
      b.onclick = function () { closeDrawer(); openEvent(Number(b.dataset.open)); };
    });
    $$("[data-toast]", d).forEach(function (b) {
      b.onclick = function () { toast(b.dataset.toast); };
    });
    wireNew(d);
  }

  function dhead(title, toast) {
    return toast
      ? '<button class="dh2" type="button" data-toast="' + esc(toast) + '"><span>' + esc(title) + '</span>' + ARROW + '</button>'
      : '<div class="dh2"><span>' + esc(title) + '</span></div>';
  }

  function wire() {
    var burger = $("#burger");
    if (burger) {
      burger.onclick = function () {
        /* rebuild on open: a poll answered since the last full render has to
           show up in Votes, and only #stage is refreshed on a vote */
        var d = $("#drawer"), holder = document.createElement("div");
        holder.innerHTML = drawer();
        var fresh = holder.querySelector(".drawer");
        d.innerHTML = fresh.innerHTML;
        wireDrawer();
        d.classList.add("open");
        $("#scrim").classList.add("open");
        d.setAttribute("aria-hidden", "false");
        burger.setAttribute("aria-expanded", "true");
      };
    }
    if ($("#scrim")) { $("#scrim").onclick = closeDrawer; }
    if ($("#drawerclose")) { $("#drawerclose").onclick = closeDrawer; }

    $$("[data-lcix]").forEach(function (b) {
      b.onclick = function () { closeDrawer(); goLc(Number(b.dataset.lcix)); };
    });
    $$("[data-open]").forEach(function (b) {
      b.onclick = function () { closeDrawer(); S.sheet = null; S.article = null; S.reader = null; openEvent(Number(b.dataset.open)); };
    });
    $$("[data-gohome]").forEach(function (b) {
      b.onclick = function () { S.view = "home"; S.nav = "home"; render(-1); };
    });
    $$("[data-wfollow]").forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.wfollow, nm = SPORTPAGES[k] ? SPORTPAGES[k].name : (WEBMYSPORT.extra[k] || {}).name || k;
        var now = followOf(k);
        S.wfollow[k] = !now;
        if (S.surface === "web") { rerenderBody(); }
        else { var sb0 = $("#scrollbody"), y0 = sb0 ? sb0.scrollTop : 0; render(); if ($("#scrollbody")) { $("#scrollbody").scrollTop = y0; } }
        toast(S.wfollow[k] ? nm + " added to My Sport." : nm + " removed from My Sport.");
      };
    });
    $$("[data-gotab]").forEach(function (b) {
      b.onclick = function () {
        var want = b.dataset.gotab, k = -1;
        curTabs().forEach(function (t, i) { if (t.id === want) { k = i; } });
        if (k < 0) { return; }
        S.tabIx[tabKey()] = k;
        rerenderBody();
        var st = $("#stage"), sb = $("#scrollbody"); if (st && sb) { sb.scrollTop = Math.max(0, st.offsetTop - 80); }
      };
    });
    $$("[data-webmore]").forEach(function (b) { b.onclick = function () { S.webMore = !S.webMore; rerenderBody(); }; });
    $$("[data-webradio]").forEach(function (b) {
      b.onclick = function () {
        var id = b.dataset.webradio;
        if (S.webRadio && S.webRadio.id === id) { var c = $(".wradio"), sb = $("#scrollbody"); if (c && sb) { sb.scrollTop = Math.max(0, c.offsetTop - 60); } return; }
        S.webRadio = { id: id, play: true, fs: false, cc: false };
        rerenderBody();
      };
    });
    $$("[data-wrclose]").forEach(function (b) { b.onclick = function () { S.webRadio = null; rerenderBody(); }; });
    $$("[data-wrplay]").forEach(function (b) { b.onclick = function () { S.webRadio.play = !S.webRadio.play; rerenderBody(); }; });
    $$("[data-wrfs]").forEach(function (b) { b.onclick = function () { S.webRadio.fs = !S.webRadio.fs; rerenderBody(); }; });
    $$("[data-wrcc]").forEach(function (b) { b.onclick = function () { S.webRadio.cc = !S.webRadio.cc; S.wrLine = (S.wrLine || 0) + 1; rerenderBody(); }; });
    $$("[data-lvbx]").forEach(function (b) { b.onclick = function () { S.lvHide = true; var vp2 = $("#viewport"); if (vp2) { vp2.classList.remove("lvstuck"); } var bar = $("#lvbar"); if (bar) { bar.remove(); } var sb2 = $("#scrollbody"); if (sb2) { sb2.style.setProperty("--lvh", "0px"); } }; });
    $$("[data-fbteam]").forEach(function (b) { b.onclick = function () { S.fbTeam = Number(b.dataset.fbteam); rerenderBody(); }; });
    $$("[data-ckteam]").forEach(function (b) { b.onclick = function () { S.ckTeam = Number(b.dataset.ckteam); rerenderBody(); }; });
    $$("[data-mysport]").forEach(function (b) {
      b.onclick = function (ev2) {
        if (ev2) { ev2.preventDefault(); }
        closeDrawer(); S.sheet = null; S.article = null;
        S.view = "mysport"; S.nav = "home"; S.webMore = false; render(-1);
        var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
      };
    });
    $$("[data-msmore]").forEach(function (b) { b.onclick = function () { S.msMore = !S.msMore; rerenderBody(); }; });
    $$("[data-fxscroll]").forEach(function (b) {
      b.onclick = function () {
        var row = b.closest(".fxstrip").querySelector(".fxrow"), c = row.querySelector(".fxc");
        row.scrollBy({ left: Number(b.dataset.fxscroll) * ((c ? c.offsetWidth : 280) + 10), behavior: "smooth" });
      };
    });
    $$("[data-sportpage]").forEach(function (b) {
      b.onclick = function (ev2) {
        if (ev2) { ev2.preventDefault(); }
        closeDrawer(); S.sheet = null; S.article = null;
        S.view = "sport"; S.webSport = b.dataset.sportpage; S.nav = "home"; S.webMore = false; render(-1);
        var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
      };
    });

    $$(".tabbtn").forEach(function (b) {
      b.onclick = function () {
        S.tabIx[tabKey()] = Number(b.dataset.tab);
        $$(".tabbtn").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
        /* keep the tabs where they are: land at the top of the new tab, not
           back at the scoreboard */
        var sb0 = $("#scrollbody"), tb = $("#scrollbody > .tabbar");
        var st0 = $("#stage");
        /* a stuck bar reports where it is stuck, so measure from the content under it */
        if (S.surface === "web") {
          var wy = sb0 ? sb0.scrollTop : 0;
          rerenderBody();
          var sb1 = $("#scrollbody"), wt = $(".wcktabs") || $(".wevhead .tabbar");
          if (sb1 && wt) { sb1.scrollTop = Math.min(wy, wt.offsetTop - 2); }
          return;
        }
        if (sb0) { sb0.scrollTop = tb && st0 ? Math.min(sb0.scrollTop, st0.offsetTop - tb.offsetHeight) : 0; }
        rerenderBody();
      };
    });

    $$("[data-nav]").forEach(function (b) {
      b.onclick = function () {
        S.nav = b.dataset.nav;
        if (b.dataset.nav === "home") { S.view = "home"; }
        render();
      };
    });

    $$("[data-toast]").forEach(function (b) { b.onclick = function () { toast(b.dataset.toast); }; });

    $$("[data-comp]").forEach(function (b) {
      b.onclick = function () { S.compTab = Number(b.dataset.comp); rerenderBody(); };
    });

    $$("[data-play]").forEach(function (b) {
      b.onclick = function () { openPlayer(Number(b.dataset.play)); };
    });

    $$("[data-recap]").forEach(wireRecap);
    $$("[data-tvlaunch]").forEach(function (b) {
      b.onclick = function () { tvs().ev = Number(b.dataset.tvlaunch); tvs().screen = "home"; setSurface("together"); };
    });
    $$("[data-remind]").forEach(function (b) {
      b.onclick = function () {
        if (!S.reminders) { S.reminders = {}; }
        var id = b.dataset.remind;
        S.reminders[id] = !S.reminders[id];
        tvs().remind[id] = S.reminders[id];
        toast(S.reminders[id] ? "Reminder set. Your phone and your TV will both tell you." : "Reminder removed.");
        rerenderBody();
      };
    });
    $$("[data-webplay]").forEach(function (b) {
      b.onclick = function () { S.webPlay = true; rerenderBody(); };
    });
    wireDock();
    wireNew(document);
    $$("[data-listenlive]").forEach(function (b) {
      b.onclick = function () { listenLive(EVENTS[Number(b.dataset.listenlive)] || ev()); };
    });
    $$("[data-storylisten]").forEach(function (b) {
      b.onclick = function () {
        var h = heroFor();
        playDock({ title: h.head, sub: "Read by BBC Sport \u00b7 2 min", dur: 120, transcript: [h.stand].concat(h.body || []) });
      };
    });

    var optaBtn = $("[data-optatoggle]");
    if (optaBtn) { optaBtn.onclick = function () { S.optaOpen = !S.optaOpen; rerenderBody(); }; }

    $$("[data-focusrail]").forEach(function (rail) {
      var cards = $$(".fcard", rail), centres = [], last = -1, queued = false;
      function measure() {
        centres = cards.map(function (c) { return c.offsetLeft + c.offsetWidth / 2; });
      }
      function mark() {
        if (!centres.length) { measure(); }
        var mid = rail.scrollLeft + rail.clientWidth / 2, best = 0, bd = 1e9;
        for (var i = 0; i < centres.length; i++) {
          var d = Math.abs(centres[i] - mid);
          if (d < bd) { bd = d; best = i; }
        }
        if (best === last) { return; }
        if (last >= 0 && cards[last]) { cards[last].classList.remove("on"); }
        cards[best].classList.add("on");
        last = best;
      }
      rail.addEventListener("scroll", function () {
        if (queued) { return; }
        queued = true;
        requestAnimationFrame(function () { queued = false; mark(); });
      }, { passive: true });
      window.addEventListener("resize", function () { measure(); last = -1; mark(); });
      measure();
      mark();
    });

    $$("[data-moment]").forEach(function (b) {
      b.onclick = function () { S.moment = b.dataset.moment; S.playing = b.dataset.moment === "live"; rerenderBody(); };
    });
    var pp = $("[data-playpause]");
    if (pp) { pp.onclick = function () { S.playing = !S.playing; rerenderBody(); }; }

    $$("[data-vpoll]").forEach(function (grp) {
      var vid = grp.dataset.vpoll;
      $$(".vpopt", grp).forEach(function (b) {
        b.onclick = function () {
          if (S.votes[vid] !== undefined) { return; }
          S.votes[vid] = Number(b.dataset.i);
          S.answered += 1;
          rerenderBody();
        };
      });
    });

    $$("[data-poll]").forEach(function (grp) {
      var id = grp.dataset.poll;
      $$(".optbtn", grp).forEach(function (b) {
        b.onclick = function () {
          if (S.votes[id] !== undefined) { return; }
          S.votes[id] = Number(b.dataset.i);
          S.answered += 1;
          rerenderBody();
        };
      });
    });

    $$("[data-quiz]").forEach(function (grp) {
      var qid = grp.dataset.quiz;
      $$(".optbtn", grp).forEach(function (b) {
        b.onclick = function () {
          if (S.quiz[qid].answered !== false) { return; }
          S.quiz[qid].answered = Number(b.dataset.i);
          S.answered += 1;
          rerenderBody();
        };
      });
    });

    $$("[data-step]").forEach(function (b) {
      b.onclick = function () {
        var t = b.dataset.step;
        S.predict[t] = Math.max(0, Math.min(9, S.predict[t] + Number(b.dataset.d)));
        rerenderBody();
      };
    });
    var lock = $("[data-lock]");
    if (lock) { lock.onclick = function () { S.predict.locked = true; rerenderBody(); }; }

    $$("[data-toggleid]").forEach(function (b) {
      b.onclick = function () { S.toggles[b.dataset.toggleid] = !S.toggles[b.dataset.toggleid]; rerenderBody(); };
    });

    $$("[data-follow]").forEach(function (b) {
      b.onclick = function () {
        var on = b.getAttribute("aria-pressed") !== "true";
        b.setAttribute("aria-pressed", String(on));
        b.textContent = on ? "Following" : "Follow";
      };
    });

    var signin = $("[data-signin]");
    if (signin) { signin.onclick = function () { S.signedIn = true; rerenderBody(); }; }

    var rate = $("#rate");
    if (rate) {
      rate.oninput = function () {
        var key = ev().id;
        S.ratings[key] = Number(rate.value);
        $("#rateval").textContent = S.ratings[key].toFixed(1);
      };
      rate.onchange = function () { rerenderBody(); };
    }

    var offset = $("#offset");
    if (offset) { offset.oninput = function () { S.offset = Number(offset.value); rerenderBody(); }; }

    var sort = $("#feedsort");
    if (sort) { sort.onchange = function () { S.feedNewest = sort.value === "new"; rerenderBody(); }; }

    var search = $("#searchbox");
    if (search) { search.onkeydown = function (e) { if (e.key === "Enter") { toast("Search is a stub in this prototype."); } }; }
  }



  /* ==========================================================================
     Watching, hiding the score, and the overlays
     ==========================================================================
     Video leads wherever the BBC holds the pictures: football, tennis and
     rugby open with the match playing and a way to shrink it out of the way.
     Cricket is radio and text only, so the same slot carries Test Match
     Special with a live transcript underneath.

     Scores can be hidden for anyone arriving late or after the event. The
     page then leads with the ways to catch up, and the score is one tap away.

     Reactions happen in place. Comments, share and notifications open as
     sheets over the page rather than taking you somewhere else, so nobody
     loses the live page to leave a heart. Tapping a story opens the story.
     ========================================================================== */

  var IX = {
    rotate: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" stroke-width="1.8" transform="rotate(-45 12 12)"/><path d="M3.5 9A9 9 0 0 1 9 3.5M20.5 15A9 9 0 0 1 15 20.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    moon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19.5 14.2A7.8 7.8 0 0 1 9.8 4.5a7.8 7.8 0 1 0 9.7 9.7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    heartfill: '<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z" fill="#E8443C"/></svg>',
    shrink: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 14h6v6M20 10h-6V4M10 14l-6.5 6.5M14 10l6.5-6.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 10.2a2.3 2.3 0 1 0 0 3.6M16.5 10.2a2.3 2.3 0 1 0 0 3.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>',
    eyeoff: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 3.5l17 17M9.9 5.8A9.7 9.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-2.9 3.7M6.3 7.3C3.9 9 2.5 12 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.2-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    link: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    tv: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="12.5" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 20.5h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    spark: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5c.8 4.6 2.9 6.7 7.5 7.5-4.6.8-6.7 2.9-7.5 7.5-.8-4.6-2.9-6.7-7.5-7.5 4.6-.8 6.7-2.9 7.5-7.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    goal: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5l3.8 2.8-1.5 4.4H9.7l-1.5-4.4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    poll: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 20V11M12 20V5M19 20v-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    msg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-5 3.5v-3.5H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    camera: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>',
    mail: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 6.5l9 6.5 9-6.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    more: '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="18" cy="12" r="1.8" fill="currentColor"/></svg>',
    book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    bellon: '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-1.5 3h15L18 13V9a6 6 0 0 0-6-6z" fill="currentColor"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    bellsm: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-1.5 3h15L18 13V9a6 6 0 0 0-6-6z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    headph: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15v-3a8 8 0 0 1 16 0v3" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="4.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="16.5" y="14" width="4.5" height="6.5" rx="1.5" stroke="currentColor" stroke-width="1.8"/></svg>'
  };
  for (var ixk in IX) { if (IX.hasOwnProperty(ixk)) { I[ixk] = IX[ixk]; } }

  /* team crests, per sport: England's football and cricket crests differ */
  var CRESTS = {
    football: { England: "cr-eng-fb", Netherlands: "cr-ned" },
    cricket: { England: "cr-eng-ck", Australia: "cr-aus" },
    rugby: { Wales: "cr-wal", Ireland: "cr-ire" }
  };
  function crestSlug(evId, name) {
    var m = CRESTS[evId] || {}, k;
    for (k in m) { if (m.hasOwnProperty(k) && String(name).indexOf(k) === 0) { return m[k]; } }
    return null;
  }
  function crestImg(evId, name, cls) {
    var sl = crestSlug(evId, name);
    return sl ? '<span class="crimg' + (cls ? " " + cls : "") + '"><img src="img/' + sl + '.png" alt="' + esc(name) + ' crest" loading="lazy"></span>' : "";
  }
  /* which sport a score row belongs to, from the names in it */
  function crestEvFor(a, b) {
    if (/Australia/.test(a + b)) { return "cricket"; }
    if (/Netherlands/.test(a + b)) { return "football"; }
    if (/Wales|Ireland/.test(a + b)) { return "rugby"; }
    return null;
  }

  function evById(id) { return EVENTS.filter(function (x) { return x.id === id; })[0]; }
  function evIxById(id) { var k = -1; EVENTS.forEach(function (x, i) { if (x.id === id) { k = i; } }); return k; }
  function hasVideo(e) { return !(e && e.audioOnly); }
  function stationName(e) { return e && e.audio ? e.audio.station.replace("BBC ", "").replace("Radio 5", "5") : ""; }
  function stationShort(e) { return e && e.audio ? (e.audio.short || stationName(e)) : ""; }
  function vName(e) { var TK = e.takeover || {}; return TK.a && TK.b ? TK.a + " v " + TK.b : e.title; }

  /* ---- spoilers ------------------------------------------------------ */

  function hideOn() { return S.hide === null || S.hide === undefined ? lc() === "fulltime" : S.hide; }
  function masked(e) { return hideOn() && !S.revealed[e.id] && evState(e).card.status !== "soon"; }

  function maskCard(e, c) {
    if (!masked(e)) { return c; }
    var m = {}, k;
    for (k in c) { if (c.hasOwnProperty(k)) { m[k] = c[k]; } }
    m.line1 = vName(e);
    m.line2 = "Score hidden";
    m.ctx = c.status === "live" ? "Score hidden. Catch up in 60 seconds, or jump straight in." : "Score hidden. Highlights and the match in 60 seconds are ready.";
    m.hidden = true;
    return m;
  }

  function maskT(e, T) {
    if (!masked(e)) { return T; }
    /* a celebration gives the result away as surely as the score does */
    var NEUTRAL = { football: "bb-ball", cricket: "ck-squad", tennis: "tn-smile", rugby: "rg-flyhalves", f1: "bb-f1city" };
    return { img: lc() === "fulltime" ? (NEUTRAL[e.id] || T.img) : T.img, line: "v", sub: "Score hidden", stats: [], cta: T.cta, hidden: true };
  }

  function spoilBar() {
    if (!hideOn()) { return ""; }
    return '<div class="spoilbar">' + I.eyeoff + '<span><b>Scores are hidden</b> Catch up first, reveal when you choose</span>' +
      '<button type="button" data-spoil="off">Show all</button></div>';
  }

  function spoilShield(e) {
    var vid = hasVideo(e), R = RECAPS[e.id], L = lc();
    return '<section class="section shield"><div class="shieldin">' +
      '<p class="shk">' + I.eyeoff + 'Score hidden</p>' +
      '<h3>' + (L === "fulltime" ? "Watch it back before you see how it ended" : "Catch up before the score catches you") + '</h3>' +
      '<div class="shbtns">' +
      (R ? '<button class="shbtn pri" type="button" data-recapvid="' + e.id + '">' + I.playtri + 'The match in 60 seconds</button>' : "") +
      (vid ? '<button class="shbtn" type="button" data-watch="' + evIxById(e.id) + '" data-kind="' + (L === "fulltime" ? "highlights" : "live") + '">' + I.playtri + (L === "fulltime" ? "Highlights" : "Watch from here") + '</button>'
        : '<button class="shbtn" type="button" data-watch="' + evIxById(e.id) + '">' + I.headph + (L === "fulltime" ? "The day on " + stationShort(e) : "Listen on " + stationShort(e)) + '</button>') +
      '<button class="shbtn ghost" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show the score</button>' +
      '</div></div></section>';
  }

  /* ---- reactions ------------------------------------------------------ */

  function likeCount(base, key) {
    if (!S.likes[key]) { return base; }
    var n = Number(String(base).replace(/,/g, ""));
    return isNaN(n) ? base : (n + 1).toLocaleString("en-GB");
  }

  function likeBtn(key, base, cls) {
    var on = !!S.likes[key];
    return '<button class="eng likebtn' + (on ? " on" : "") + (cls ? " " + cls : "") + '" type="button" data-like="' + esc(key) + '" data-base="' + esc(base) + '" aria-pressed="' + on + '" aria-label="Like">' +
      '<span class="lk">' + (on ? I.heartfill : I.heart) + '</span><span class="n">' + esc(likeCount(base, key)) + '</span></button>';
  }

  function engageBar(o) {
    return '<div class="engage">' +
      (o.listen ? '<button class="stlisten" type="button" data-storylisten>' + I.speaker + 'Listen <small>2 min</small></button>' : "") +
      '<button class="eng" type="button" data-sheet="comments" data-ctx="' + esc(o.ctx) + '" data-cbase="' + esc(o.comments) + '" aria-label="Comments">' + I.comment + '<span class="n">' + esc(commentCount(o.ctx, o.comments)) + '</span></button>' +
      likeBtn(o.likeKey, o.likes) +
      '<button class="eng" type="button" data-sheet="share" data-ctx="' + esc(o.ctx) + '" aria-label="Share">' + I.send + '<span class="n">' + esc(o.shares) + '</span></button>' +
      '</div>';
  }

  function commentCount(ctx, base) {
    var mine = (S.myComments[ctx] || []).length;
    if (!mine) { return base; }
    var n = Number(String(base).replace(/,/g, ""));
    return isNaN(n) ? base : (n + mine).toLocaleString("en-GB");
  }

  /* ---- the sheets ----------------------------------------------------- */

  var NICON = { remind: "bell", cricket: "bat", poll: "poll", spark: "spark", goal: "goal", chat: "chat", tv: "tv", tick: "tickplain", play: "playtri" };

  function sheetHTML() {
    var sh = S.sheet;
    if (!sh) { return ""; }
    var out = '<div class="sheetscrim" data-sheetclose></div><div class="sheet s-' + sh.kind + '" role="dialog" aria-label="' + esc(sh.kind) + '">' +
      '<span class="grab"></span>';

    if (sh.kind === "notifs") {
      out += '<div class="shhead"><h2>Notifications</h2><button class="iconbtn" type="button" data-sheetclose aria-label="Close">' + I.close + '</button></div>' +
        '<div class="shbody"><ul class="nlist">' + (NOTIFS[lc()] || []).map(function (n) {
          var e = n[4] ? evById(n[4]) : null, hide = e && masked(e) && (n[0] === "goal" || n[0] === "cricket" || n[0] === "tick");
          return '<li><button type="button" class="nrow"' + (e ? ' data-open="' + evIxById(e.id) + '"' : ' data-sheetclose') + '>' +
            '<span class="nic">' + (I[NICON[n[0]]] || I.bell) + '</span>' +
            '<span class="ntx"><b>' + esc(hide ? e.sport + " · an update" : n[1]) + '</b><span>' + esc(hide ? "Hidden while scores are off" : n[2]) + '</span></span>' +
            '<span class="nwhen">' + esc(n[3]) + '</span></button></li>';
        }).join("") + '</ul>' +
        '<h3 class="shsub">Tell me about</h3><div class="ntypes">' + NOTIFTYPES.map(function (t) {
          var on = S.ntypes[t[0]] === undefined ? t[3] : S.ntypes[t[0]];
          return '<button type="button" class="ntype" data-ntype="' + t[0] + '" aria-pressed="' + on + '">' +
            '<span><b>' + esc(t[1]) + '</b>' + (t[2] ? '<small>' + esc(t[2]) + '</small>' : "") + '</span><i class="sw' + (on ? " on" : "") + '"></i></button>';
        }).join("") + '</div>' +
        '<p class="shnote">Set per sport, per team or per player from anything with a bell on it.</p></div>';
    }

    if (sh.kind === "comments") {
      var sport = commentSport(sh.ctx), list = commentsFor(sport).slice(), mine = S.myComments[sh.ctx] || [];
      var title = commentTitle(sh.ctx);
      out += '<div class="shhead"><h2>Comments <small>' + esc(title) + '</small></h2><button class="iconbtn" type="button" data-sheetclose aria-label="Close">' + I.close + '</button></div>' +
        '<div class="shchips"><button type="button" class="shchip" aria-pressed="' + (S.csort !== "new") + '" data-csort="top">Top</button>' +
        '<button type="button" class="shchip" aria-pressed="' + (S.csort === "new") + '" data-csort="new">Newest</button>' +
        '<span class="shrule">House rules apply. Be kind.</span></div>' +
        '<div class="shbody clist">' +
        mine.slice().reverse().map(function (c, k) {
          return commentRow(["A", "Arun", "now", c, "0"], "me:" + sh.ctx + ":" + k, true);
        }).join("") +
        (S.csort === "new" ? list : list.slice().sort(function (a, b) { return Number(b[4]) - Number(a[4]); })).map(function (c, k) {
          return commentRow(c, "c:" + sport + ":" + c[0] + k, false);
        }).join("") + '</div>' +
        '<form class="composer" data-compose="' + esc(sh.ctx) + '"><span class="meav sm">A</span>' +
        '<input type="text" name="c" maxlength="280" placeholder="Add a comment" aria-label="Add a comment" autocomplete="off">' +
        '<button type="submit">Post</button></form>';
    }

    if (sh.kind === "voices") {
      var ve = evById(sh.ctx) || ev();
      out += '<div class="shhead"><h2>Listen to <small>' + esc(vName(ve)) + '</small></h2><button class="iconbtn" type="button" data-sheetclose aria-label="Close">' + I.close + '</button></div>' +
        '<div class="shbody">' + voiceRows(ve) + '<p class="shnote">Every voice is held back to match your picture, so nobody calls a goal before you see it.</p></div>';
    }

    if (sh.kind === "share") {
      var sc = shareCard(sh.ctx);
      out += '<div class="shhead"><h2>Share</h2><button class="iconbtn" type="button" data-sheetclose aria-label="Close">' + I.close + '</button></div>' +
        '<div class="shbody"><div class="scard' + (S.shareAsCard ? " big" : "") + '">' +
        '<span class="scimg">' + imgTag(sc.img, "", "wide") + '<span class="scveil"></span>' +
        '<span class="scmark"><span class="bbcblocks"><i>B</i><i>B</i><i>C</i></span> SPORT</span>' +
        (S.shareAsCard ? '<span class="scbig"><small>' + esc(sc.kick) + '</small>' + esc(sc.big) + '</span>' : "") + '</span>' +
        '<span class="sctext"><b>' + esc(sc.title) + '</b><span>' + esc(sc.url) + '</span></span></div>' +
        '<button type="button" class="ntype" data-sharecard aria-pressed="' + !!S.shareAsCard + '"><span><b>Share as a picture</b><small>' +
        (masked(evById(sc.sport) || EVENTS[0]) ? "Spoiler-free while scores are hidden" : "With the score, for the group chat") + '</small></span><i class="sw' + (S.shareAsCard ? " on" : "") + '"></i></button>' +
        '<div class="targets">' + [["msg", "Messages"], ["chat", "WhatsApp"], ["camera", "Instagram"], ["mail", "Email"], ["link", "Copy link"], ["more", "More"]].map(function (t) {
          return '<button type="button" class="tgt" data-sharego="' + esc(t[1]) + '"><span>' + (I[t[0]] || "") + '</span>' + esc(t[1]) + '</button>';
        }).join("") + '</div></div>';
    }
    return out + '</div>';
  }

  function commentRow(c, key, mine) {
    return '<div class="crow' + (mine ? " mine" : "") + '"><span class="wcav">' + esc(c[0]) + '</span><div>' +
      '<p class="wcmeta"><b>' + esc(c[1]) + '</b> · ' + esc(c[2]) + '</p><p class="wctext">' + esc(c[3]) + '</p>' +
      '<p class="wcact">' + likeBtn(key, c[4], "sm") +
      '<button type="button" data-toast="Replies open a thread. Not built out in this prototype.">Reply</button></p></div></div>';
  }

  function commentSport(ctx) {
    if (COMMENTS[ctx]) { return ctx; }
    if (ctx && ctx.indexOf("story") === 0) { return (HOMEFEED.hero[lc()] || {}).sport || "tennis"; }
    if (ARTICLES[ctx]) { return ARTICLES[ctx].sport || "tennis"; }
    return ev().id;
  }
  function commentTitle(ctx) {
    if (ARTICLES[ctx]) { return ARTICLES[ctx].kicker; }
    if (ctx && ctx.indexOf("story") === 0) { return (HOMEFEED.hero[lc()] || {}).kicker || ""; }
    var e = evById(ctx) || ev();
    return vName(e);
  }

  function shareCard(ctx) {
    var a = ARTICLES[ctx], e;
    if (a) { return { img: a.hero, title: a.title, url: "bbc.co.uk/sport/articles/" + ctx, kick: a.kicker, big: a.title, sport: a.sport }; }
    if (ctx && ctx.indexOf("story") === 0) {
      var h = heroFor();
      return { img: (h.photo && h.photo.img) || "tn-stretch", title: h.head, url: "bbc.co.uk/sport/live", kick: h.kicker, big: h.head, sport: h.sport };
    }
    e = evById(ctx) || ev();
    var tk = tkFor(e), T = tk.T;
    return { img: T.img || "tn-stretch", title: vName(e) + (T.hidden ? "" : " · " + (T.line || "")), url: "bbc.co.uk/sport/" + e.id + "/live",
      kick: e.comp, big: T.hidden || masked(e) ? vName(e) : (tk.TK.a + " " + (T.line || "v") + " " + tk.TK.b), sport: e.id };
  }

  /* ---- articles and the programme reader ----------------------------- */

  function articleHTML() {
    var a = ARTICLES[S.article];
    if (!a) { return ""; }
    var heroSlot = SLOTS[a.hero] && SLOTS[a.hero].indexOf("full") >= 0 ? "full" : "wide";
    return '<div class="article" role="dialog" aria-label="Article">' +
      '<div class="arbar"><button class="iconbtn" type="button" data-closearticle aria-label="Back">' + I.back + '</button>' +
      '<span class="arkick">' + esc(a.kicker) + '</span>' +
      '<button class="iconbtn" type="button" data-sheet="share" data-ctx="' + esc(S.article) + '" aria-label="Share">' + I.share + '</button></div>' +
      '<div class="arscroll"><figure class="arhero">' + fullImg(a.hero, a.heroCap, heroSlot) + '<figcaption>' + esc(a.heroCap) + '</figcaption></figure>' +
      '<div class="arbody"><p class="arkicker">' + esc(a.kicker) + '</p><h1>' + esc(a.title) + '</h1>' +
      '<p class="arby">' + esc(a.byline) + ' · ' + esc(a.read) + '</p>' +
      a.blocks.map(function (b) {
        if (b[0] === "p") { return '<p>' + esc(b[1]) + '</p>'; }
        if (b[0] === "h") { return '<h2>' + esc(b[1]) + '</h2>'; }
        if (b[0] === "img") {
          var full = SLOTS[b[1]] && SLOTS[b[1]].indexOf("full") >= 0;
          return '<figure class="arfig' + (full ? " whole" : "") + '">' + fullImg(b[1], b[2], full ? "full" : "wide") + '<figcaption>' + esc(b[2]) + '</figcaption></figure>';
        }
        return "";
      }).join("") +
      (S.article === "w100" ? '<button class="feat compact" type="button" data-reader="0"><span class="fimg">' + imgTag("ar-mag93", "", "square") + '</span>' +
        '<span class="ftx"><small>Read</small><b>Leaf through the programmes</b><span>Six pages from 1937 to 1999</span></span></button>' : "") +
      '</div></div>' +
      '<div class="arfoot">' + engageBar({ ctx: S.article, comments: a.comments, likes: a.likes, shares: a.shares, likeKey: "art:" + S.article }) + '</div>' +
      '</div>';
  }

  function fullImg(slug, alt, slot) {
    USED[slug] = (USED[slug] || 0) + 1;
    return '<img class="photo" src="img/' + slug + '-' + (slot === "full" ? "full" : slotFor(slug, slot)) + '.jpg" alt="' + esc(alt || "") + '" loading="lazy">';
  }

  function readerHTML() {
    if (S.reader === null || S.reader === undefined) { return ""; }
    return '<div class="reader" role="dialog" aria-label="The programmes">' +
      '<div class="rdbar"><span><b>The programmes</b><small>Wimbledon on the BBC</small></span>' +
      '<button class="iconbtn" type="button" data-readerclose aria-label="Close">' + I.close + '</button></div>' +
      '<div class="rdpages" data-rdpages>' + READER.map(function (pg, k) {
        return '<figure class="rdpage" data-pg="' + k + '"><div class="rdimg">' + fullImg(pg[0], pg[2], "full") + '</div>' +
          '<figcaption><b>' + esc(pg[1]) + '</b>' + esc(pg[2]) + '</figcaption></figure>';
      }).join("") + '</div>' +
      '<div class="rddots">' + READER.map(function (pg, k) { return '<i class="' + (k === S.reader ? "on" : "") + '"></i>'; }).join("") + '</div>' +
      '<p class="rdnote">Swipe to turn the page</p></div>';
  }

  /* ---- the companion nudge -------------------------------------------- */

  function pushHTML() {
    var p = S.push;
    if (!p || (p.multi && S.surface !== "together")) { return ""; }
    return '<div class="push' + (p.out ? " out" : "") + '" role="status">' +
      '<div class="pushtop"><span class="pushapp"><span class="bbcblocks mini"><i>B</i><i>B</i><i>C</i></span></span>' +
      '<span class="pushsrc">BBC SPORT · now</span><button type="button" class="pushx" data-pushclose aria-label="Dismiss">' + I.close + '</button></div>' +
      '<b>' + esc(p.title) + '</b><p>' + esc(p.body) + '</p>' +
      '<div class="pushbtns">' + p.actions.map(function (a) {
        return '<button type="button" data-pushact="' + esc(a[0]) + '">' + esc(a[1]) + '</button>';
      }).join("") + '</div></div>';
  }

  function sendCompanionPush() {
    if (S.surface !== "together" || lc() !== "companion") { return; }
    S.push = { multi: true, title: "Worth a switch: Court 2",
      body: "Your living room TV is on Centre Court. Raducanu has three break points on Court 2.",
      actions: [["switchtv", "Put Court 2 on the TV"], ["watchhere", "Watch on this phone"]] };
    refreshOverlays();
    clearTimeout(S.pushT);
    S.pushT = setTimeout(function () { if (S.push) { S.push.out = true; refreshOverlays(); setTimeout(function () { S.push = null; refreshOverlays(); }, 450); } }, 9000);
  }

  function watchBar() {
    if (lc() !== "companion") { return ""; }
    var tn = evIxById("tennis"), onC2 = tvs().c2;
    return '<button class="watchbar" type="button" data-open="' + tn + '">' +
      '<span class="wbic">' + I.tv + '</span><span class="spbtx"><small>Watching on iPlayer · Living room TV</small>' +
      '<b>' + (onC2 ? "Court 2 · Raducanu v Vondroušová" : "BBC One · Centre Court, Alcaraz v Musetti") + '</b></span>' +
      '<span class="wbchip">' + I.livedot + 'Paired</span></button>';
  }

  /* ---- video, or radio where there are no pictures -------------------- */

  var CK_TRANSCRIPT = [
    ["89.1", "Starc to Root, back of a length, defended to cover. No run."],
    ["89.2", "Full and straight, clipped off the pads to square leg for a single."],
    ["89.3", "Starc over the wicket to Woakes. Leaves it alone outside off."],
    ["89.4", "Short, and Woakes sways out of the way. The crowd lets Starc know about it."],
    ["89.5", "Pitched up, edged, and it falls short of second slip. Woakes survives."],
    ["89.6", "Driven firmly to mid-off. End of the over. England 284-6."],
    ["90.1", "Lyon into the attack. Root comes down the pitch and drives to long-on for one."],
    ["90.2", "Flighted, Woakes pats it back to the bowler."]
  ];

  function vidStart(o) {
    var prev = S.vid && S.vid.kind === "live" ? S.vid : null;
    S.vid = { id: o.id || null, kind: o.kind || "live", mode: o.mode || "full", play: true, t: 0, cc: S.vid ? S.vid.cc : false,
      aud: S.vid ? S.vid.aud : (S.webAud || "bbc"), stats: S.vid ? S.vid.stats : false, title: o.title || null, img: o.img || null, dur: o.dur || 0, ix: 0, archive: !!o.archive,
      back: o.kind && o.kind !== "live" ? prev : null, line: 0 };
    stopDock();
  }

  function vidEvent() { return S.vid && S.vid.id ? evById(S.vid.id) : null; }

  function vidInfo() {
    var v = S.vid, e = vidEvent(), tk = e ? tkFor(e) : null;
    var info = { img: v.img, label: v.title, chan: "", live: v.kind === "live", audio: false, cap: "" };
    if (v.kind === "live" && e) {
      info.audio = !hasVideo(e);
      info.img = v.img || (tk.T.img || null);
      info.label = v.title || (e.id === "tennis" ? "Court 2 · " + vName(e) : vName(e));
      info.chan = info.audio ? stationName(e) : e.id === "tennis" ? "BBC iPlayer" : "BBC One";
      info.aimg = e.audio && e.audio.img ? e.audio.img : "ck-mic";
      info.trans = e.audio && e.audio.transcript ? e.audio.transcript : CK_TRANSCRIPT;
      info.anote = e.audio && e.audio.note ? e.audio.note : "Radio and live text only. The BBC does not hold the pictures for this series.";
      var tm = TVMOMENTS[e.id] || [], m = tm[v.line % Math.max(1, tm.length)];
      info.cap = m ? m[1] + ". " + m[2] : "";
    } else if (v.kind === "recap" && e) {
      var R = RECAPS[e.id], mo = R.moments[Math.min(v.ix, R.moments.length - 1)];
      info.img = mo[3] || (tk.T.img || null);
      info.label = "The match in 60 seconds";
      info.chan = e.sport;
      info.cap = mo[0] + " · " + mo[1] + ". " + mo[2];
    } else if (v.kind === "highlights" && e) {
      info.img = v.img || (tk.T.img || null);
      info.label = "Highlights · " + vName(e);
      info.chan = "BBC iPlayer";
      info.cap = "Extended highlights with commentary";
    } else {
      info.chan = v.archive ? "BBC Archive" : "BBC iPlayer";
      info.cap = v.title;
    }
    return info;
  }

  function vidDur() {
    var v = S.vid;
    if (v.kind === "recap") { var R = RECAPS[v.id]; return R.moments.length * 4; }
    if (v.kind === "highlights") { return 11 * 60 + 20; }
    return secs(v.dur || "0:40");
  }

  /* ---- the voice over the picture ------------------------------------ */

  function voiceList(e) { return (e && VOICES[e.id]) || []; }
  function voiceOf(e) {
    var list = voiceList(e), id = S.vid ? S.vid.aud : (S.webAud || "bbc");
    return list.filter(function (x) { return x[0] === id; })[0] || list[0];
  }
  function voiceAv(vo, cls) {
    return vo && vo[5] ? '<span class="vav' + (cls ? " " + cls : "") + '" style="background:' + vo[6] + '">' + esc(vo[5]) + '</span>'
      : '<span class="vav ic' + (cls ? " " + cls : "") + '">' + (vo && vo[0] === "crowd" ? I.speaker : vo && vo[0] === "ad" ? I.cc : I.headph) + '</span>';
  }
  function voiceChip(e, fs) {
    var vo = voiceOf(e);
    if (!vo) { return ""; }
    return '<button class="vvoice" type="button" ' + (fs ? "data-fsvoices" : 'data-sheet="voices" data-ctx="' + e.id + '"') + ' aria-label="Change commentary">' +
      voiceAv(vo) + '<span><small>' + (vo[4] === "Watch with" || vo[4] === "Listen with" ? "Watching with" : "Commentary") + '</small>' + esc(vo[1]) + '</span>' + I.chevron + '</button>';
  }
  function voiceRows(e) {
    var cur = voiceOf(e), groups = [];
    voiceList(e).forEach(function (v) { if (groups.indexOf(v[4]) < 0) { groups.push(v[4]); } });
    return groups.map(function (g) {
      return '<h3 class="shsub">' + esc(g) + '</h3>' + voiceList(e).filter(function (v) { return v[4] === g; }).map(function (v) {
        var on = cur && cur[0] === v[0];
        return '<button type="button" class="vrow' + (on ? " on" : "") + '" data-voice="' + v[0] + '" data-ev="' + e.id + '">' + voiceAv(v, "lg") +
          '<span class="vrtx"><b>' + esc(v[2]) + '</b><small>' + esc(v[3]) + '</small></span>' + (on ? '<i>' + I.tickplain + '</i>' : "") + '</button>';
      }).join("");
    }).join("");
  }

  /* ---- controls shared by the page player and full screen ------------ */

  function vidControls(v, inf, e, fs) {
    var live = inf.live, dur = vidDur();
    return '<div class="vctl">' +
      '<button class="vpp" type="button" data-vidplay aria-label="' + (v.play ? "Pause" : "Play") + '">' + (v.play ? I.pause : I.play) + '</button>' +
      (live ? '<span class="vlivepill"><i></i>LIVE</span>' : '<span class="vclock" data-vtime>' + mmss(Math.floor(v.t)) + " / " + mmss(dur) + '</span>') +
      '<span class="vsp"></span>' +
      (live && e ? voiceChip(e, fs) : "") +
      '<button class="vic" type="button" data-vidcc aria-pressed="' + v.cc + '" aria-label="Subtitles">' + I.cc + '</button>' +
      (fs && live && e ? '<button class="vic" type="button" data-vidstats aria-pressed="' + !!v.stats + '" aria-label="Stats">' + I.poll + '</button>' : "") +
      '<button class="vic" type="button" data-vidfs aria-label="' + (fs ? "Exit full screen" : "Full screen") + '">' + (fs ? I.shrink : I.expand) + '</button>' +
      '</div>' +
      '<span class="vprog' + (live ? " live" : "") + '"><i style="width:' + (live ? 100 : Math.min(100, v.t / dur * 100)).toFixed(1) + '%"></i></span>';
  }

  function inlineVid() {
    var v = S.vid, e = ev();
    return !!(v && v.mode === "full" && v.kind === "live" && v.id === "football" && e.id === "football" && S.surface !== "web" && evState(e).watch && lc() !== "fulltime");
  }

  /* the match player as the live page draws it: the programme above, the
     controls on the picture, start and live either side of play */
  /* the controls the live player carries today: back to the start, back
     ten, play, forward ten and back to live */
  function playCtl(attr, playing, cls) {
    return '<button class="' + cls + ' skip" type="button" data-toast="Back to the start of the coverage." aria-label="Back to the start">&laquo;<small>START</small></button>' +
      '<button class="' + cls + ' skip" type="button" data-toast="Back ten seconds." aria-label="Back ten seconds">&#8634;<small>10</small></button>' +
      '<button class="' + cls + ' big" type="button" ' + attr + ' aria-label="' + (playing ? "Pause" : "Play") + '">' + (playing ? I.pause : I.play) + '</button>' +
      '<button class="' + cls + ' skip dim" type="button" data-toast="You are live." aria-label="Forward ten seconds">&#8635;<small>10</small></button>' +
      '<button class="' + cls + ' skip dim" type="button" data-toast="You are live." aria-label="Go live">&raquo;<small>LIVE</small></button>';
  }
  var PIPICON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="12" y="12" width="7" height="5" fill="currentColor"/></svg>';

  function fbPlayer(v, inf, e) {
    var st = evState(e), w = st.watch || [e.title, "BBC One"];
    var mins = 45 + Math.floor(v.t / 60), hh = 20 + Math.floor(mins / 60), mm = mins % 60;
    return '<div class="lvplayer" data-vidpane><p class="lvptitle"><span><b>' + esc(w[0]) + '</b><br>' + esc(w[1]) + '</span>' +
      '<button class="iconbtn" type="button" data-vidclose aria-label="Close">' + I.close + '</button></p>' +
      '<div class="lvpvid"><div class="vidimg' + (v.play ? " kb" : "") + '">' + (inf.img ? imgTag(inf.img, inf.label || "", "wide") : "") + '</div>' +
      '<span class="lvpveil"></span>' +
      '<div class="lvptop">' + voiceChip(e, false) + '<span class="vsp"></span>' +
      '<button class="lvpb" type="button" data-vidcc aria-pressed="' + v.cc + '" aria-label="Subtitles">' + I.cc + '</button>' +
      '<button class="lvpb" type="button" data-toast="Playback speed is not built out in this prototype."><b>1&times;</b></button>' +
      '<button class="lvpb" type="button" data-vidfs aria-label="Full screen">' + I.expand + '</button></div>' +
      '<div class="lvpmid">' + playCtl('data-vidplay', v.play, "lvpb") + '</div>' +
      '<div class="lvpbot"><span class="aprog"><i></i></span><span class="alive"><span class="lvring"></span>LIVE</span></div>' +
      (v.cc && inf.cap ? '<p class="lvpcap">' + esc(inf.cap) + '</p>' : "") + '</div></div>';
  }

  function vidPane() {
    var v = S.vid;
    if (!v || v.mode !== "full") { return ""; }
    var inf = vidInfo(), e = vidEvent();
    if (inlineVid()) { return fbPlayer(v, inf, e); }
    if (inf.audio) {
      var TR = inf.trans || CK_TRANSCRIPT, tl = TR.slice(0, 3 + (v.line % (TR.length - 2)));
      var TKa = e && e.takeover ? e.takeover : {};
      var disc = function (n) { return '<span class="adisc">' + (crestSlug(e.id, n) ? crestImg(e.id, n, "adc") : '<span class="adsport">' + (I.sport[e.sport] || "") + '</span>') + '</span>'; };
      return '<div class="vid audio aart" data-vidpane>' +
        '<div class="aartbg"></div>' +
        '<div class="aartdiscs' + (TKa.a ? "" : " one") + '">' + (TKa.a ? disc(TKa.a) + disc(TKa.b) : disc("")) + '</div>' +
        '<div class="vtop"><span class="vlive"><i></i>LIVE</span><span class="vchan">' + esc(voiceOf(e) ? voiceOf(e)[2] : inf.chan) + '</span><span class="vsp"></span>' +
        '<button class="vic" type="button" data-vidcc aria-pressed="' + v.cc + '" aria-label="Live transcript">' + I.cc + '</button>' +
        '<button class="vic" type="button" data-toast="Playback speed is not built out in this prototype." aria-label="Speed"><b class="aspeed">1&times;</b></button>' +
        '<button class="vic" type="button" data-vidfs aria-label="Full screen">' + I.expand + '</button>' +
        '<button class="vbtn" type="button" data-vidmin aria-label="Shrink">' + I.shrink + '</button></div>' +
        '<div class="actl"><button class="askip" type="button" data-toast="Back to the start of today\'s coverage." aria-label="Back to the start"><span>&laquo;</span>START</button>' +
        '<button class="abig" type="button" data-vidplay aria-label="' + (v.play ? "Pause" : "Play") + '">' + (v.play ? I.pause : I.play) + '</button>' +
        '<button class="askip dim" type="button" data-toast="You are live." aria-label="Go live">LIVE<span>&raquo;</span></button></div>' +
        '<div class="abot"><span class="aprog"><i></i></span><span class="alive"><span class="lvring"></span>LIVE</span></div>' +
        (e ? '<div class="avoice">' + voiceChip(e, false) + '</div>' : "") + '</div>' +
        (v.cc ? '<div class="vtrans" aria-live="polite"><p class="vtk">Live transcript · ' + esc(inf.chan) + '</p>' + tl.slice(-3).map(function (l, k, a) {
          return '<p class="' + (k === a.length - 1 ? "now" : "") + '"><b>' + esc(l[0]) + '</b>' + esc(l[1]) + '</p>';
        }).join("") + '</div>' : "");
    }
    var live = inf.live;
    return '<div class="vid' + (v.archive ? " archive" : "") + '" data-vidpane>' +
      '<div class="vidimg' + (v.play ? " kb" : "") + '">' + (inf.img ? imgTag(inf.img, inf.label || "", "wide") : "") + '</div><span class="vidveil"></span>' +
      '<div class="vtop">' + (live ? '<span class="vlive"><i></i>LIVE</span>' : '<span class="vclip">' + (v.kind === "recap" ? "CATCH-UP" : v.archive ? "ARCHIVE" : "CLIP") + '</span>') +
      '<span class="vchan">' + esc(inf.chan) + '</span><span class="vsp"></span>' +
      (live && e && watchingFor(e) ? '<span class="vwatch">' + esc(watchingFor(e)) + '</span>' : "") +
      '<button class="vbtn" type="button" data-vidmin aria-label="Shrink the video">' + I.shrink + '</button>' +
      (v.kind !== "live" ? '<button class="vbtn" type="button" data-vidclose aria-label="Close">' + I.close + '</button>' : "") + '</div>' +
      '<p class="vlabel">' + esc(inf.label || "") + '</p>' +
      (v.cc && inf.cap ? '<p class="vcap">' + esc(inf.cap) + '</p>' : "") +
      vidControls(v, inf, e, false) + '</div>';
  }

  /* ---- full screen: turned on its side on the phone -------------------- */

  function fsHTML() {
    var v = S.vid;
    if (!v || v.mode !== "fs") { return ""; }
    var inf = vidInfo(), e = vidEvent(), tk = e ? tkFor(e) : null, TK = tk ? tk.TK : {}, T = tk ? tk.T : {};
    var bug = e && inf.live ? '<div class="fsbug"><span class="fsbn">' + (crestImg(e.id, TK.a, "xs") || '<i style="background:' + TK.ca + '"></i>') + esc(TK.a || "") + '</span>' +
      '<b>' + esc(T.hidden ? "v" : (T.line || "v")) + '</b><span class="fsbn">' + esc(TK.b || "") + (crestImg(e.id, TK.b, "xs") || '<i style="background:' + TK.cb + '"></i>') + '</span></div>' +
      '<p class="fssub">' + esc(T.hidden ? "Score hidden" : (T.sub || "")) + '</p>' : '<p class="fstitle">' + esc(inf.label || "") + '</p>';
    var body = inf.audio
      ? '<div class="vidimg dim">' + imgTag(inf.aimg || "ck-mic", "", "wide") + '</div><span class="vidveil"></span>' +
        '<div class="fsaud"><span class="vwave">' + waveSVG("rcpwave on") + '</span>' +
        (inf.trans || CK_TRANSCRIPT).slice(0, 3 + (v.line % ((inf.trans || CK_TRANSCRIPT).length - 2))).slice(-3).map(function (l, k, a) {
          return '<p class="' + (k === a.length - 1 ? "now" : "") + '"><b>' + esc(l[0]) + '</b>' + esc(l[1]) + '</p>';
        }).join("") + '</div>'
      : '<div class="vidimg' + (v.play ? " kb" : "") + (v.archive ? " arch" : "") + '">' + (inf.img ? imgTag(inf.img, inf.label || "", "wide") : "") + '</div><span class="vidveil"></span>';
    var vpEl = $("#viewport"), wideVP = vpEl && vpEl.clientWidth > vpEl.clientHeight;
    var lay = S.surface === "web" || wideVP ? "" : v.land ? " rot" : " port";
    var port = lay === " port";
    return '<div class="vfs' + lay + '" role="dialog" aria-label="Full screen">' + body +
      '<div class="fstop"><div class="fsl">' + (inf.live ? '<span class="vlive"><i></i>LIVE</span>' : '<span class="vclip">' + (v.kind === "recap" ? "CATCH-UP" : "CLIP") + '</span>') +
      '<span class="vchan">' + esc(inf.chan) + '</span></div>' + bug + '<span class="vsp"></span>' +
      (inf.live && e && watchingFor(e) ? '<span class="vwatch">' + esc(watchingFor(e)) + ' watching</span>' : "") +
      (S.surface !== "web" ? '<button class="vic" type="button" data-vidrot aria-pressed="' + !!v.land + '" aria-label="' + (v.land ? "Hold upright" : "Turn to landscape") + '">' + I.rotate + '</button>' : "") + '</div>' +
      (port && e && inf.live
        /* held upright, the space under the picture is used: what you are
           listening to, or the numbers, with the tabs staying put */
        ? '<div class="fspanel"><div class="fstabs" role="tablist">' +
          '<button type="button" role="tab" data-fstab="voices" aria-selected="' + (v.fsTab !== "stats") + '">' + I.headph + 'Listen to</button>' +
          (T.hidden ? "" : '<button type="button" role="tab" data-fstab="stats" aria-selected="' + (v.fsTab === "stats") + '">' + I.poll + 'In numbers</button>') + '</div>' +
          '<div class="fsbody">' + (v.fsTab === "stats" && !T.hidden ? statBars(TK, T) : voiceRows(e)) + '</div></div>'
        : (v.stats && e && inf.live && !T.hidden ? '<aside class="fsstats"><p class="vtk">In numbers</p>' + statBars(TK, T) + '</aside>' : "") +
          (v.fsVoices && e ? '<aside class="fsvoices"><p class="vtk">Listen to</p>' + voiceRows(e) + '</aside>' : "")) +
      (v.cc && inf.cap && !inf.audio ? '<p class="vcap">' + esc(inf.cap) + '</p>' : "") +
      '<div class="fsbot">' + vidControls(v, inf, e, true) + '</div></div>';
  }

  function redrawKeepingMenu() {
    var d = $("#drawer"), open = d && d.classList.contains("open"), y = d ? d.scrollTop : 0;
    render();
    if (!open) { return; }
    var d2 = $("#drawer"), sc = $("#scrim"), bg = $("#burger");
    if (!d2) { return; }
    d2.classList.add("noanim"); if (sc) { sc.classList.add("noanim"); }
    d2.classList.add("open"); if (sc) { sc.classList.add("open"); }
    d2.setAttribute("aria-hidden", "false"); if (bg) { bg.setAttribute("aria-expanded", "true"); }
    wireDrawer();
    d2.scrollTop = y;
    void d2.offsetWidth;
    requestAnimationFrame(function () { d2.classList.remove("noanim"); if (sc) { sc.classList.remove("noanim"); } });
  }

  function onPhone() { return window.matchMedia && window.matchMedia("(pointer: coarse)").matches && Math.min(window.innerWidth, window.innerHeight) <= 500; }

  function nativeFS(on, then) {
    if (!onPhone() || S.surface === "web") { if (then) { then(); } return; }
    var el = $("#device");
    try {
      if (on && !document.fullscreenElement && el && el.requestFullscreen) {
        el.requestFullscreen().then(function () { if (then) { then(); } }).catch(function () { if (then) { then(); } });
        return;
      }
      if (!on && document.fullscreenElement) {
        if (screen.orientation && screen.orientation.unlock) { try { screen.orientation.unlock(); } catch (x) {} }
        document.exitFullscreen();
      }
    } catch (x) {}
    if (then) { then(); }
  }

  /* turning the phone, or leaving fullscreen with the back gesture, redraws */
  window.addEventListener("resize", function () { if (S.vid && S.vid.mode === "fs") { refreshOverlays(); } });
  document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement && S.vid && S.vid.mode === "fs" && onPhone()) { S.vid.mode = "full"; S.vid.land = false; render(); }
  });

  function sizeFS() {
    /* sized in CSS against the overlay layer, which always matches the screen */
  }

  /* ---- ask the experts ------------------------------------------------- */

  P.pundits = function (p) {
    var d = PUNDITS[p.id];
    if (!d) { return ""; }
    var e = evById(p.id), ix = evIxById(p.id), mine = (S.myQs[p.id] || []);
    return '<div class="pund">' +
      '<div class="rail phosts">' + d.hosts.map(function (h) {
        var on = /now|along/i.test(h[3]);
        return '<div class="phost"><span class="phav" style="background:' + h[4] + '">' + esc(h[0]) + '</span>' +
          '<b>' + esc(h[1]) + '</b><small>' + esc(h[2]) + '</small>' +
          '<span class="pstat' + (on ? " on" : "") + '">' + (on ? "<i></i>" : "") + esc(h[3]) + '</span>' +
          (h[5] && lc() !== "fulltime" ? '<button class="pbtn" type="button" data-watchwith="' + h[5] + '" data-ev="' + ix + '">' + (hasVideo(e) ? I.playtri + "Watch with" : I.headph + "Listen with") + '</button>'
            : '<button class="pbtn ghost" type="button" data-follow aria-pressed="false">Follow</button>') + '</div>';
      }).join("") + '</div>' +
      '<form class="pask" data-askq="' + p.id + '"><span class="meav sm">A</span><input type="text" maxlength="200" placeholder="Ask the experts a question" aria-label="Ask a question" autocomplete="off"><button type="submit">Ask</button></form>' +
      '<p class="pnote">The questions with the most votes are put to the studio. You get a notification if yours is answered.</p>' +
      '<div class="xqs">' + mine.slice().reverse().map(function (q) {
        return '<div class="xq mine"><div><b>' + esc(q) + '</b><small>You · just now · sent to the studio</small></div><span class="votebtn on">' + I.chevron + '1</span></div>';
      }).join("") + d.qs.map(function (q, k) {
        var key = "q:" + p.id + ":" + k, on = !!S.likes[key];
        return '<div class="xq"><div><b>' + esc(q[0]) + '</b><small>' + esc(q[1]) + '</small></div>' +
          '<button type="button" class="votebtn' + (on ? " on" : "") + '" data-vote="' + key + '" data-base="' + esc(q[2]) + '" aria-pressed="' + on + '" aria-label="Vote for this question">' + I.chevron + '<span class="n">' + esc(on ? bump(q[2]) : q[2]) + '</span></button></div>';
      }).join("") + '</div>' +
      '<h3 class="psub">Answered on air</h3><div class="bites">' + d.answered.map(function (a, k) {
        return '<button class="bite" type="button" data-bite="' + k + '" data-title="' + esc(a[0] + ": " + a[1].toLowerCase()) + '" data-dur="' + esc(a[2]) + '" data-desc="' + esc(a[1] + ". The answer as it went out, from the programme.") + '">' +
          '<span class="bplay">' + I.playtri + '</span><span class="btx"><b>' + esc(a[0]) + '</b><span>' + esc(a[1]) + '</span></span><span class="bdur">' + esc(a[2]) + '</span></button>';
      }).join("") + '</div></div>';
  };

  function bump(n) {
    var m = String(n).match(/^([\d.]+)(k?)$/);
    if (!m) { return n; }
    return m[2] ? n : String(Number(m[1]) + 1);
  }

  function seedPundits() {
    EVENTS.forEach(function (e) {
      if (!PUNDITS[e.id]) { return; }
      ["live", "companion", "fulltime"].forEach(function (st) {
        var s = e.states[st];
        if (!s || !s.tabs || !s.tabs[0]) { return; }
        var sec = s.tabs[0].sections;
        if (sec.some(function (x) { return x.panels && x.panels.some(function (pn) { return pn.t === "pundits"; }); })) { return; }
        var at = sec.length;
        sec.forEach(function (x, i) { if (x.panels && x.panels.some(function (pn) { return pn.t === "recap"; })) { at = i + 1; } });
        sec.splice(at, 0, { h: st === "fulltime" ? "From the studio" : "Ask the experts", meta: st === "fulltime" ? "Answered on air" : "Live Q&A", panels: [{ t: "pundits", id: e.id }] });
      });
    });
  }

  function wireV12(root) {
    $$("[data-vidfs]", root).forEach(function (b) {
      b.onclick = function (ev2) {
        ev2.stopPropagation();
        var v = S.vid;
        if (v.mode === "fs") {
          v.fsVoices = false;
          nativeFS(false);
          if (S.surface === "web") { S.vid = null; S.webPlay = true; } else { v.mode = "full"; }
        } else { v.mode = "fs"; nativeFS(true); }
        render();
      };
    });
    $$("[data-vidrot]", root).forEach(function (b) {
      b.onclick = function () {
        S.vid.land = !S.vid.land;
        /* on a real phone, turn the screen itself; the drawn rotation is for desks */
        if (onPhone() && screen.orientation && screen.orientation.lock) {
          if (S.vid.land) {
            nativeFS(true, function () {
              screen.orientation.lock("landscape").then(function () { S.vid.land = false; refreshOverlays(); }).catch(function () {});
            });
          } else { try { screen.orientation.unlock(); } catch (x) {} }
        }
        refreshOverlays(); sizeFS();
      };
    });
    $$("[data-fstab]", root).forEach(function (b) { b.onclick = function () { S.vid.fsTab = b.dataset.fstab; refreshOverlays(); }; });
    $$("[data-vidstats]", root).forEach(function (b) {
      b.onclick = function () { if ($(".vfs.port")) { S.vid.fsTab = "stats"; } else { S.vid.stats = !S.vid.stats; S.vid.fsVoices = false; } refreshOverlays(); };
    });
    $$("[data-fsvoices]", root).forEach(function (b) {
      b.onclick = function () { if ($(".vfs.port")) { S.vid.fsTab = "voices"; } else { S.vid.fsVoices = !S.vid.fsVoices; S.vid.stats = false; } refreshOverlays(); };
    });
    $$("[data-voice]", root).forEach(function (b) {
      b.onclick = function () {
        var e = evById(b.dataset.ev), vo = voiceList(e).filter(function (x) { return x[0] === b.dataset.voice; })[0];
        if (S.surface === "web" && !(S.vid && S.vid.mode === "fs")) {
          S.webAud = b.dataset.voice; S.sheet = null; S.webPlay = true; render();
          toast("Now listening to " + vo[2] + ". The picture carries on where it was."); return;
        }
        if (!S.vid || S.vid.id !== e.id) { watchEvent(evIxById(e.id), "live"); }
        S.vid.aud = b.dataset.voice; S.vid.fsVoices = false; S.sheet = null;
        if (S.vid.mode === "fs") { refreshOverlays(); } else { refreshVid(); refreshOverlays(); }
        toast("Now listening to " + vo[2] + ". The picture carries on where it was.");
      };
    });
    $$("[data-watchwith]", root).forEach(function (b) {
      b.onclick = function () {
        var ix = Number(b.dataset.ev);
        watchEvent(ix, "live");
        S.vid.aud = b.dataset.watchwith;
        refreshVid();
        var vo = voiceOf(EVENTS[ix]);
        toast("Watching with " + vo[2] + ".");
      };
    });
    $$("[data-vote]", root).forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.vote, on = !S.likes[k];
        S.likes[k] = on;
        b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on));
        $(".n", b).textContent = on ? bump(b.dataset.base) : b.dataset.base;
      };
    });
    $$("[data-askq]", root).forEach(function (f) {
      f.onsubmit = function (ev2) {
        ev2.preventDefault();
        var inp = f.querySelector("input"), txt = inp.value.trim();
        if (!txt) { inp.focus(); return; }
        (S.myQs[f.dataset.askq] = S.myQs[f.dataset.askq] || []).push(txt);
        rerenderBody();
        toast("Sent to the studio. We'll tell you if it's answered on air.");
      };
    });
    sizeFS();
  }

  function pipHTML() {
    var v = S.vid;
    if (!v || v.mode !== "pip") { return ""; }
    var inf = vidInfo();
    return '<div class="minip' + (inf.audio ? " audio" : "") + '"><button type="button" class="pipimg" data-vidgrow aria-label="Make the video bigger">' +
      (inf.audio ? imgTag(inf.aimg || "ck-mic", "", "wide") + '<span class="pipwave">' + waveSVG("rcpwave on") + '</span>' : (inf.img ? imgTag(inf.img, "", "wide") : "")) +
      (inf.live ? '<span class="vlive sm"><i></i>LIVE</span>' : "") + '</button>' +
      '<span class="piptx"><b>' + esc(inf.audio ? inf.chan : inf.label || "") + '</b><small>' + esc(inf.chan) + '</small></span>' +
      '<button type="button" class="pipb" data-vidplay aria-label="' + (v.play ? "Pause" : "Play") + '">' + (v.play ? I.pause : I.play) + '</button>' +
      '<button type="button" class="pipb" data-vidclose aria-label="Close">' + I.close + '</button></div>';
  }

  function tickVid(dt) {
    var v = S.vid;
    if (!v || !v.play) { return; }
    v.t += dt;
    var live = v.kind === "live";
    if (live) {
      if (Math.floor(v.t / 6) !== v.line) { v.line = Math.floor(v.t / 6); if (v.cc || !hasVideo(vidEvent() || EVENTS[0])) { refreshVid(); } }
      return;
    }
    if (v.kind === "recap") {
      var R = RECAPS[v.id], k = Math.floor(v.t / 4);
      if (k >= R.moments.length) { vidEnd(); return; }
      if (k !== v.ix) { v.ix = k; refreshVid(); return; }
    } else if (v.t >= vidDur()) { vidEnd(); return; }
    var bar = $(".vprog i"), tm = $("[data-vtime]");
    if (bar) { bar.style.width = Math.min(100, v.t / vidDur() * 100).toFixed(1) + "%"; }
    if (tm) { tm.textContent = mmss(Math.floor(v.t)) + " / " + mmss(vidDur()); }
  }

  function vidEnd() {
    var v = S.vid;
    if (v.kind === "recap" && v.id) { S.revealed[v.id] = true; toast("That is where it stands. Scores are showing for this match."); }
    S.vid = v.back || null;
    render();
  }

  function refreshVid() {
    var pane = $("[data-vidpane]");
    if (S.vid && S.vid.mode === "fs") { refreshOverlays(); return; }
    if (pane && S.vid && S.vid.mode === "full") {
      var holder = document.createElement("div");
      holder.innerHTML = vidPane();
      var trans = pane.nextElementSibling && pane.nextElementSibling.classList.contains("vtrans") ? pane.nextElementSibling : null;
      if (trans) { trans.remove(); }
      pane.replaceWith.apply(pane, [].slice.call(holder.childNodes));
      wireNew($("#viewport") || document);
    } else { refreshOverlays(); }
  }

  /* ---- panels --------------------------------------------------------- */

  function heat(sig) {
    var n = sig >= 0.85 ? 4 : sig >= 0.6 ? 3 : sig >= 0.35 ? 2 : 1;
    var word = n === 4 ? "Hot right now" : n === 3 ? "Heating up" : n === 2 ? "Steady" : "Quiet";
    return '<span class="heat h' + n + '"><span class="hbars"><i></i><i></i><i></i><i></i></span>' + word + '</span>';
  }

  P.courts = function (p) {
    var rows = p.rows.slice().sort(function (a, b) { return b[3] - a[3]; });
    var tn = evIxById("tennis");
    return '<div class="courtlist">' + rows.map(function (r, i) {
      var top = i === 0;
      return '<div class="court' + (top ? " top" : "") + '">' +
        '<span class="cname">' + esc(r[0]) + '</span>' + (r[4] ? '<span class="ctag' + (top ? " on" : "") + '">' + esc(r[4]) + '</span>' : "") +
        '<span class="cmatch">' + esc(r[1]) + '</span>' +
        '<span class="cstate">' + esc(r[2]) + '</span>' +
        '<span class="cacts"><button type="button" class="cbtn pri" data-watch="' + tn + '" data-court="' + esc(r[0] + " · " + r[1].replace(" (on your telly)", "")) + '">' + I.playtri + 'Watch</button>' +
        '<button type="button" class="cbtn" data-listenlive="' + tn + '">' + I.speaker + 'Listen</button></span></div>';
    }).join("") + '</div>';
  };

  P.clips = function (p) {
    return '<div class="rail cliprail">' + p.items.map(function (c) {
      return '<button class="clip' + (p.archive ? " archive" : "") + '" type="button" data-clip="' + esc(c[2]) + '" data-title="' + esc(c[0]) + '" data-dur="' + esc(c[1]) + '"' + (p.archive ? ' data-archive="1"' : "") + '>' +
        '<span class="climg">' + imgTag(c[2], c[0], "wide") + '<span class="play">' + I.playtri + '</span><span class="dur">' + esc(c[1]) + '</span></span>' +
        '<span class="cltitle">' + esc(c[0]) + '</span></button>';
    }).join("") + '</div>';
  };

  P.soundbites = function (p) {
    return '<div class="bites">' + p.items.map(function (b, k) {
      return '<button class="bite" type="button" data-bite="' + k + '" data-title="' + esc(b[0]) + '" data-dur="' + esc(b[1]) + '" data-desc="' + esc(b[2]) + '">' +
        '<span class="bplay">' + I.playtri + '</span><span class="btx"><b>' + esc(b[0]) + '</b><span>' + esc(b[2]) + '</span></span>' +
        '<span class="bdur">' + esc(b[1]) + '</span></button>';
    }).join("") + '</div>';
  };

  P.feature = function (p) {
    return '<button class="feat' + (p.compact ? " compact" : "") + '" type="button" data-article="' + esc(p.article) + '">' +
      '<span class="fimg">' + imgTag(p.img, "", p.compact ? "square" : "wide") + '</span>' +
      '<span class="ftx"><small>' + esc(p.kicker) + '</small><b>' + esc(p.title) + '</b><span>' + I.book + esc(p.sub) + '</span></span></button>';
  };

  P.reader = function () {
    return '<div class="rail readrail">' + READER.map(function (pg, k) {
      return '<button class="rpage" type="button" data-reader="' + k + '"><span class="rpimg">' + imgTag(pg[0], pg[2], "tall") + '</span>' +
        '<span class="rpy">' + esc(pg[1]) + '</span></button>';
    }).join("") + '</div>';
  };

  /* ---- a reminder on anything that has not started -------------------- */

  function remindChip(e, text) {
    var on = !!(S.reminders && S.reminders[e.id]);
    if (text === "") {
      return '<span class="rpill' + (on ? " on" : "") + '" role="button" tabindex="0" data-remindchip="' + e.id + '" aria-pressed="' + on + '">' +
        (on ? I.bellon : I.bellsm) + (on ? "Reminder set" : "Remind me") + '</span>';
    }
    return '<span class="chipsoon remind' + (on ? " on" : "") + '" role="button" tabindex="0" data-remindchip="' + e.id + '" aria-pressed="' + on + '" aria-label="' + (on ? "Reminder set" : "Remind me when it starts") + '">' +
      (on ? I.bellon : I.bellsm) + esc(text) + '</span>';
  }

  /* ---- overlays live in one container, redrawn on their own ----------- */

  function overlaysHTML() {
    return articleHTML() + readerHTML() + fsHTML() + sheetHTML() + fbPlayerHTML() + pipHTML() + pushHTML() + W100.html();
  }

  function refreshOverlays() {
    var o = $("#ovl");
    if (!o) { return; }
    o.innerHTML = overlaysHTML();
    wireNew(o);
    W100.mount();
    sizeFS();
    var pg = $("[data-rdpages]", o);
    if (pg && S.reader) { pg.scrollLeft = S.reader * pg.clientWidth; }
  }

  function openSheet(kind, ctx) { S.sheet = { kind: kind, ctx: ctx || null }; refreshOverlays(); }

  function watchEvent(ix, kind, court, fs) {
    var e = EVENTS[ix];
    vidStart({ id: e.id, kind: kind || (lc() === "fulltime" && hasVideo(e) ? "highlights" : "live"), title: court || null });
    if (fs) { S.vid.mode = "fs"; }
    S.article = null;
    if (S.view !== "event" || S.eventIx !== ix) { closeDrawer(); openEvent(ix); } else { render(); }
    var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
  }

  /* handlers for everything above; safe to run on any root, repeatedly */
  function wireNew(root) {
    root = root || document;
    $$("[data-sheet]", root).forEach(function (b) {
      b.onclick = function (ev2) { ev2.stopPropagation(); closeDrawer(); openSheet(b.dataset.sheet, b.dataset.ctx || (S.view === "event" ? ev().id : "story:" + lc())); };
    });
    $$("[data-player]", root).forEach(function (b) {
      b.onclick = function () { var v = b.dataset.player.split(","); S.fbPl = { t: Number(v[0]), i: Number(v[1]) }; refreshOverlays(); };
    });
    $$("[data-plclose]", root).forEach(function (b) { b.onclick = function () { S.fbPl = null; refreshOverlays(); }; });
    $$("[data-plnav]", root).forEach(function (b) { b.onclick = function () { S.fbPl.i = (S.fbPl.i + Number(b.dataset.plnav) + 11) % 11; refreshOverlays(); }; });
    $$("[data-wfbplay]", root).forEach(function (b) {
      b.onclick = function () {
        S.wfb = S.wfb || {};
        if (S.wfb.play) { var sb0 = $("#scrollbody"); if (sb0) { sb0.scrollTop = 0; } return; }
        S.wfb.play = true; S.wfb.pause = false; S.webRadio = null; render();
        var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
      };
    });
    $$("[data-wfbclose]", root).forEach(function (b) { b.onclick = function () { S.wfb = {}; rerenderBody(); }; });
    $$("[data-wfbpause]", root).forEach(function (b) { b.onclick = function () { S.wfb.pause = !S.wfb.pause; rerenderBody(); }; });
    $$("[data-rtteam]", root).forEach(function (b) { b.onclick = function () { S.rtTeam = Number(b.dataset.rtteam); rerenderBody(); }; });
    $$("[data-rate]", root).forEach(function (b) {
      var v = b.dataset.rate.split(",").map(Number), row = b.parentNode;
      b.onclick = function () { S.rates = S.rates || {}; S.rates[v[0] + ":" + v[1]] = v[2]; rerenderBody(); };
      b.onmouseenter = function () { $$(".rb", row).forEach(function (x, i) { x.classList.toggle("h", i < v[2]); }); };
      row.onmouseleave = function () { $$(".rb", row).forEach(function (x) { x.classList.remove("h"); }); };
    });
    $$("[data-sheetclose]", root).forEach(function (b) { b.onclick = function () { S.sheet = null; refreshOverlays(); }; });
    $$("[data-like]", root).forEach(function (b) {
      b.onclick = function (ev2) {
        ev2.stopPropagation();
        var k = b.dataset.like, on = !S.likes[k];
        S.likes[k] = on;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", String(on));
        $(".lk", b).innerHTML = on ? I.heartfill : I.heart;
        $(".n", b).textContent = likeCount(b.dataset.base, k);
        if (on) { b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); }
      };
    });
    $$("[data-csort]", root).forEach(function (b) { b.onclick = function () { S.csort = b.dataset.csort; refreshOverlays(); }; });
    $$("[data-compose]", root).forEach(function (f) {
      f.onsubmit = function (ev2) {
        ev2.preventDefault();
        var inp = f.querySelector("input"), txt = inp.value.trim();
        if (!txt) { inp.focus(); return; }
        var ctx = f.dataset.compose;
        (S.myComments[ctx] = S.myComments[ctx] || []).push(txt);
        refreshOverlays();
        $$('[data-sheet="comments"][data-ctx="' + ctx + '"][data-cbase]').forEach(function (c) { $(".n", c).textContent = commentCount(ctx, c.dataset.cbase); });
        toast("Posted. It shows for everyone once it is checked.");
      };
    });
    $$("[data-ntype]", root).forEach(function (b) {
      b.onclick = function () {
        var t = b.dataset.ntype, def = NOTIFTYPES.filter(function (x) { return x[0] === t; })[0][3];
        S.ntypes[t] = !(S.ntypes[t] === undefined ? def : S.ntypes[t]);
        refreshOverlays();
      };
    });
    $$("[data-sharecard]", root).forEach(function (b) { b.onclick = function () { S.shareAsCard = !S.shareAsCard; refreshOverlays(); }; });
    $$("[data-sharego]", root).forEach(function (b) {
      b.onclick = function () {
        var t = b.dataset.sharego;
        S.sheet = null; refreshOverlays();
        toast(t === "Copy link" ? "Link copied." : "Opens " + t + " with the " + (S.shareAsCard ? "picture" : "link") + " ready to send.");
      };
    });
    $$("[data-article]", root).forEach(function (b) {
      b.onclick = function () { S.article = b.dataset.article; S.sheet = null; closeDrawer(); refreshOverlays(); var sc = $(".arscroll"); if (sc) { sc.scrollTop = 0; } };
    });
    $$("[data-closearticle]", root).forEach(function (b) { b.onclick = function () { S.article = null; refreshOverlays(); }; });
    $$("[data-reader]", root).forEach(function (b) { b.onclick = function () { S.reader = Number(b.dataset.reader); refreshOverlays(); }; });
    $$("[data-readerclose]", root).forEach(function (b) { b.onclick = function () { S.reader = null; refreshOverlays(); }; });
    $$("[data-rdpages]", root).forEach(function (pg) {
      pg.addEventListener("scroll", function () {
        var k = Math.round(pg.scrollLeft / Math.max(1, pg.clientWidth));
        if (k !== S.reader) { S.reader = k; $$(".rddots i").forEach(function (d, i) { d.classList.toggle("on", i === k); }); }
      }, { passive: true });
    });
    $$("[data-reveal]", root).forEach(function (b) { b.onclick = function (ev2) { ev2.stopPropagation(); S.revealed[b.dataset.reveal] = true; render(); }; });
    $$("[data-spoil]", root).forEach(function (b) {
      b.onclick = function (ev2) {
        ev2.stopPropagation();
        S.hide = b.dataset.spoil === "on" ? true : b.dataset.spoil === "off" ? false : !hideOn();
        if (S.hide) { S.revealed = {}; }
        redrawKeepingMenu();
        toast(S.hide ? "Scores hidden across the app. Catch-ups come first." : "Scores are showing.");
      };
    });
    $$("[data-themetoggle]", root).forEach(function (b) {
      b.onclick = function () {
        S.theme = S.theme === "light" ? "dark" : "light";
        document.body.dataset.theme = S.theme;
        redrawKeepingMenu();
      };
    });
    $$("[data-remindchip]", root).forEach(function (b) {
      var go = function (ev2) {
        ev2.stopPropagation(); ev2.preventDefault();
        var id = b.dataset.remindchip, e = evById(id);
        if (!S.reminders) { S.reminders = {}; }
        S.reminders[id] = !S.reminders[id];
        tvs().remind[id] = S.reminders[id];
        $$('[data-remindchip="' + id + '"]').forEach(function (c) {
          c.classList.toggle("on", S.reminders[id]);
          c.setAttribute("aria-pressed", String(S.reminders[id]));
          c.innerHTML = (S.reminders[id] ? I.bellon : I.bellsm) + (c.classList.contains("rpill") ? (S.reminders[id] ? "Reminder set" : "Remind me") : esc(evState(e).card.when.split(" ·")[0]));
        });
        toast(S.reminders[id] ? "We'll tell you when " + e.title + " starts, on your phone and your TV." : "Reminder removed.");
      };
      b.onclick = go;
      b.onkeydown = function (k) { if (k.key === "Enter" || k.key === " ") { go(k); } };
    });
    $$("[data-watch]", root).forEach(function (b) {
      b.onclick = function (ev2) { ev2.stopPropagation(); S.sheet = null; watchEvent(Number(b.dataset.watch), b.dataset.kind || null, b.dataset.court || null, !!b.dataset.fs); };
    });
    $$("[data-recapvid]", root).forEach(function (b) {
      b.onclick = function () { var id = b.dataset.recapvid; vidStart({ id: id, kind: "recap" }); if (b.dataset.fs) { S.vid.mode = "fs"; } render(); var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; } };
    });
    $$("[data-clip]", root).forEach(function (b) {
      b.onclick = function () {
        vidStart({ id: S.view === "event" ? ev().id : null, kind: "clip", img: b.dataset.clip, title: b.dataset.title, dur: b.dataset.dur, archive: !!b.dataset.archive });
        render(); var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
      };
    });
    $$("[data-bite]", root).forEach(function (b) {
      b.onclick = function () {
        if (S.vid && S.vid.mode === "full") { S.vid.mode = "pip"; S.vid.play = false; render(); }
        playDock({ title: b.dataset.title, sub: b.dataset.sub || "Radio 5 Sports Extra · clip", dur: secs(b.dataset.dur), transcript: [b.dataset.desc] });
      };
    });
    $$("[data-vidmin]", root).forEach(function (b) { b.onclick = function () { S.vid.mode = "pip"; render(); toast("Still playing. Tap the small player to bring it back."); }; });
    $$("[data-vidgrow]", root).forEach(function (b) {
      b.onclick = function () {
        var v = S.vid, ix = v.id ? evIxById(v.id) : -1;
        v.mode = "full"; v.play = true;
        if (ix >= 0 && (S.view !== "event" || S.eventIx !== ix)) { openEvent(ix); } else { S.view = S.view; render(); }
        var sb = $("#scrollbody"); if (sb) { sb.scrollTop = 0; }
      };
    });
    $$("[data-vidclose]", root).forEach(function (b) {
      b.onclick = function (ev2) { ev2.stopPropagation(); var v = S.vid; S.vid = v && v.kind !== "live" ? v.back : null; render(); };
    });
    $$("[data-vidplay]", root).forEach(function (b) {
      b.onclick = function (ev2) { ev2.stopPropagation(); S.vid.play = !S.vid.play; if (S.vid.play) { stopDock(); } if (S.vid.mode === "full") { refreshVid(); } else { refreshOverlays(); } };
    });
    $$("[data-vidcc]", root).forEach(function (b) { b.onclick = function () { S.vid.cc = !S.vid.cc; refreshVid(); }; });
    $$("[data-vidaud]", root).forEach(function (b) {
      b.onclick = function () {
        var v = S.vid; v.aud = v.aud === "tv" ? "radio" : v.aud === "radio" ? "crowd" : "tv";
        toast(v.aud === "tv" ? "TV commentary." : v.aud === "radio" ? "Radio 5 Live commentary, synced to the picture." : "Crowd only. No commentary.");
        refreshVid();
      };
    });
    $$("[data-pushclose]", root).forEach(function (b) { b.onclick = function () { S.push = null; refreshOverlays(); }; });
    $$("[data-pushact]", root).forEach(function (b) {
      b.onclick = function () {
        var a = b.dataset.pushact; S.push = null;
        clearTimeout(S.pushT);
        if (S.surface === "together") { queueMulti(); }
        if (a === "later") { refreshOverlays(); return; }
        if (a === "predict") { openTab("football", "predict"); return; }
        if (a === "lineups") { openTab("football", "lineups"); return; }
        if (a === "rate") { openTab("football", lc() === "fulltime" ? "ratings" : "playalong"); return; }
        if (a === "stats") { openTab("football", "livetab"); return; }
        if (a === "yourday") { openTab("football", "yournight"); return; }
        if (a === "nextgame") {
          if (!S.reminders) { S.reminders = {}; } S.reminders.eng2 = true;
          refreshOverlays(); toast("Reminder set for England v Serbia. Your phone and your TV will both tell you."); return;
        }
        if (a === "switchtv") {
          /* the phone acts as a remote for the paired TV: iPlayer on the TV
             changes stream, and the phone's own page follows the new match */
          var t = tvs();
          t.c2 = true; t.ev = evIxById("tennis"); t.screen = "player"; t.mode = "live";
          if (S.surface === "together") { syncPhoneTo(t.ev); }
          render();
          toast("Your living room TV is now on Court 2.");
          return;
        }
        watchEvent(evIxById("tennis"), "live", "Court 2 · Raducanu v Vondroušová");
      };
    });
    wireV12(root);
    wireMySport(root);
    $$("[data-toast]", root).forEach(function (b) { if (!b.onclick) { b.onclick = function () { toast(b.dataset.toast); }; } });
    $$("[data-open]", root).forEach(function (b) {
      if (!b.onclick) { b.onclick = function () { S.sheet = null; closeDrawer(); refreshOverlays(); openEvent(Number(b.dataset.open)); }; }
    });
  }


  /* ==========================================================================
     My Sport: who you follow along the top, one feed underneath
     ========================================================================== */

  function msFollow(id) { return MYSPORT.follows.filter(function (f) { return f[0] === id; })[0]; }

  function msAvatar(f, cls) {
    if (/^cr-/.test(f[3])) {
      return '<span class="msav' + (cls ? " " + cls : "") + (f[5] ? " fresh" : "") + '"><span class="msavin crest-in"><img src="img/' + f[3] + '.png" alt="' + esc(f[1]) + '"></span></span>';
    }
    var isImg = /-/.test(f[3]) && SLOTS[f[3]];
    return '<span class="msav' + (cls ? " " + cls : "") + (f[5] ? " fresh" : "") + '"><span class="msavin" style="background:' + f[4] + '">' +
      (isImg ? imgTag(f[3], f[1], "square") : '<b>' + esc(f[3]) + '</b>') + '</span></span>';
  }

  function msCard(it, k) {
    var e = it.open ? evById(it.open) : null, ix = e ? evIxById(e.id) : -1;
    if (it.k === "article") {
      var tagLine = '<span class="mstag"><b>' + esc(it.tag) + '</b> · ' + esc(it.ago) + '</span>';
      if (it.hero) {
        return '<button class="mshero" type="button" data-article="' + esc(it.article) + '"><span class="msimg">' + imgTag(it.img, "", "wide") + '</span>' +
          '<span class="mstitle big">' + esc(it.title) + '</span>' + tagLine + '</button>';
      }
      return '<button class="msrow" type="button" data-article="' + esc(it.article) + '"><span class="msthumb">' + imgTag(it.img, "", "wide") + '</span>' +
        '<span class="mstx"><span class="mstitle">' + esc(it.title) + '</span>' + tagLine + '</span></button>';
    }
    if (it.k === "live" && e) {
      var c = maskCard(e, evState(e).card), live = c.status === "live";
      return '<button class="msrow mslive" type="button" data-open="' + ix + '"><span class="msthumb">' + photoSVG(e.photo, "wide", "ms " + e.title) +
        (live ? '<span class="chiplive">LIVE</span>' : c.status === "soon" ? '<span class="chipsoon">' + esc(c.when.split(" ·")[0]) + '</span>' : "") + '</span>' +
        '<span class="mstx"><span class="mstitle">' + esc(c.line1) + '</span><span class="mssub">' + esc(c.line2) + '</span>' +
        '<span class="mstag"><b>' + esc(e.sport) + '</b> · ' + esc(live ? "Live now" : c.when) + '</span></span></button>';
    }
    if (it.k === "short") {
      var d = DROP[it.play];
      if (!d) { return ""; }
      return '<button class="msshort" type="button" data-play="' + it.play + '"><span class="msimg tall">' + imgTag(d.img, d.t, "tall") +
        '<span class="play">' + I.playtri + '</span><span class="dur">' + esc(d.dur) + '</span></span>' +
        '<span class="mstitle">' + esc(d.t) + '</span><span class="mstag"><b>' + esc(d.sport) + '</b> · Short</span></button>';
    }
    if (it.k === "quiz") {
      return '<button class="mscta quiz" type="button" data-open="' + ix + '"><span class="msic">' + I.poll + '</span><span class="mstx">' +
        '<span class="mskick">' + esc(it.tag) + '</span><span class="mstitle">' + esc(it.title) + '</span><span class="msgo">Play along ' + I.chevron + '</span></span></button>';
    }
    if (it.k === "qa") {
      return '<button class="mscta qa" type="button" data-bite="' + k + '" data-title="' + esc(it.who + ": " + it.title.toLowerCase()) + '" data-dur="' + esc(it.dur) + '" data-desc="' + esc(it.title + ". The answer as it went out, from the programme.") + '">' +
        '<span class="bplay">' + I.playtri + '</span><span class="mstx"><span class="mskick">' + esc(it.tag) + ' · ' + esc(it.who) + '</span>' +
        '<span class="mstitle">' + esc(it.title) + '</span><span class="mssub">' + esc(it.dur) + ' · because you follow ' + esc(it.who) + '</span></span></button>';
    }
    if (it.k === "watchwith" && e) {
      var fw = msFollow(it.tags[0]);
      return '<button class="mscta ww" type="button" data-watchwith="creator" data-ev="' + ix + '">' + msAvatar(fw, "sm") + '<span class="mstx">' +
        '<span class="mskick">' + esc(it.tag) + '</span><span class="mstitle">' + esc(it.title) + '</span><span class="msgo">Watch with ' + esc(it.who) + ' ' + I.chevron + '</span></span></button>';
    }
    return "";
  }

  /* ---- habit posts: short timestamped updates from what you follow ---- */
  function hpSource(fid) {
    var f = msFollow(fid) || [fid, (WEBMYSPORT.extra[fid] || {}).name || fid, "", "", "#333"];
    return '<p class="hpsrc">' + msAvatar([f[0], f[1], f[2], f[3], f[4], 0], "xs") + '<b>' + esc(f[1]) + '</b></p>';
  }
  function hpBody(t) {
    var m = /^\*\*(.+?)\*\*\s*(.*)$/.exec(t);
    return '<p>' + (m ? '<b>' + esc(m[1]) + '</b> ' + esc(m[2]) : esc(t)) + '</p>';
  }
  function habitCard(h, ix, withSrc) {
    var isNew = !h.seen && !(S.hpRead && S.hpRead[ix]);
    var inner = (withSrc ? hpSource(h.f) : "") + '<h3>' + esc(h.title) + '</h3>' +
      (h.by ? '<p class="pby"><span class="wpav bbc" aria-hidden="true"><i>B</i><i>B</i><i>C</i></span><span><b>' + esc(h.by[0]) + '</b><small>' + esc(h.by[1]) + '</small></span></p>' : "") +
      (h.img ? '<figure class="pimg">' + imgTag(h.img, h.title, "wide") + (h.credit ? '<figcaption>' + esc(h.credit) + '</figcaption>' : "") + '</figure>' : "") +
      (h.body || []).map(hpBody).join("");
    if (h.k === "qa") {
      inner += h.qa.map(function (x) { return '<p><b>' + esc(x[0]) + ':</b> ' + esc(x[1]) + '</p>'; }).join("");
    }
    if (h.k === "poll") {
      var v = S.hpVote && S.hpVote[ix];
      inner += '<div class="hpoll">' + h.opts.map(function (o, i) {
        return v === undefined ? '<button type="button" data-hpvote="' + ix + ',' + i + '">' + esc(o) + '</button>'
          : '<div class="hpres' + (v === i ? " me" : "") + '"><i style="width:' + h.split[i] + '%"></i><span>' + esc(o) + (v === i ? " \u2713" : "") + '</span><b>' + h.split[i] + '%</b></div>';
      }).join("") + '</div><p class="hpmeta">' + esc(v === undefined ? "Vote to see how other fans called it" : h.votes + " \u00b7 Closes at kick-off") + '</p>';
    }
    if (h.k === "quiz") {
      inner += '<div class="hpcta"><span class="hpstreak">' + [1, 2, 3, 4, 5].map(function (d) { return '<i class="' + (d <= h.streak ? "on" : "") + '"></i>'; }).join("") + '<b>' + h.streak + '-day streak</b></span>' +
        '<button type="button" class="hpgo" data-toast="Today\u2019s Who Am I? would open here.">Play today\u2019s quiz ' + I.chevron + '</button></div>';
    }
    if (h.k === "predict") {
      inner += '<div class="hpcta"><button type="button" class="hpgo" data-toast="The Predictor for Chelsea v Bournemouth would open here.">Predict the score ' + I.chevron + '</button></div>';
    }
    if (h.open) {
      var oix = evIxById(h.open);
      inner += '<div class="hpcta"><button type="button" class="hpgo" data-open="' + oix + '">Go to the live page ' + I.chevron + '</button></div>';
    }
    return '<article class="post hp' + (isNew ? " isnew" : "") + '"><span class="stamp">' + esc(h.ts) + '</span>' + (isNew ? '<span class="pnew">NEW</span>' : "") +
      '<div class="postbody">' + inner + '<div class="react"><button class="rbtn share" type="button" data-toast="Share sheet is not wired up in this prototype.">' + I.shareflat + 'Share</button></div></div></article>';
  }
  function habitList(filter, withSrc) {
    return '<div class="feed hpfeed">' + HABIT.map(function (h, i) { return (!filter || h.f === filter) ? habitCard(h, i, withSrc) : ""; }).join("") + '</div>';
  }
  function hpNewCount(filter) { return HABIT.filter(function (h, i) { return !h.seen && !(S.hpRead && S.hpRead[i]) && (!filter || h.f === filter); }).length; }

  /* a club you follow: its crest, the sub-nav, and its fixtures in the site's card style */
  function clubFixtures(id) {
    var C = CLUBS[id];
    return '<div class="clfx">' + C.fixtures.map(function (x) {
      var row = function (n, sc) { return '<span class="clt">' + (n === C.name ? '<img src="img/' + C.crest + '.png" alt="">' : '<i class="clno">' + esc(n.slice(0, 3).toUpperCase()) + '</i>') + '<b' + (x.st === "done" && +x.sa !== +x.sb && ((n === x.a && +x.sa < +x.sb) || (n === x.b && +x.sb < +x.sa)) ? ' class="lost"' : "") + '>' + esc(n) + '</b>' + (sc !== undefined ? '<em>' + esc(sc) + '</em>' : "") + '</span>'; };
      return '<div class="clc ' + x.st + '"><span class="clcomp">' + esc(x.comp) + (x.st === "done" ? '<small>FT</small>' : "") + '</span>' +
        '<span class="clbody"><span class="clteams">' + row(x.a, x.sa) + row(x.b, x.sb) + '</span>' +
        (x.st === "soon" ? '<span class="clwhen"><small>' + esc(x.day.split(" ")[0]) + '</small><b>' + esc(x.note) + '</b><small>' + esc(x.day.split(" ").slice(1).join(" ")) + '</small></span>' : "") + '</span></div>';
    }).join("") + '</div>';
  }
  function clubHead(id) {
    var C = CLUBS[id];
    return '<div class="clhead"><img class="clcrest" src="img/' + C.crest + '.png" alt=""><span><b>' + esc(C.name) + '</b><small>' + esc(C.comp) + '</small></span>' +
      '<button type="button" class="msedit on" data-toast="Unfollowing is not built out in this prototype." aria-pressed="true">Following</button></div>';
  }

  /* the curated mix: a lead, then cards, with shorts in pairs */
  function msMix(items, withLead) {
    var out = "", lead = withLead ? (items.filter(function (x) { return x.hero; })[0] || items.filter(function (x) { return x.k === "article"; })[0]) : null;
    if (lead) { out += msCard(lead.hero ? lead : { k: "article", article: lead.article, img: lead.img, title: lead.title, tag: lead.tag, ago: lead.ago, hero: true }, 0); }
    var rest = items.filter(function (x) { return x !== lead; }), shorts = [];
    out += '<div class="msfeed">';
    rest.forEach(function (it, k) {
      if (it.k === "short") {
        shorts.push(it);
        if (shorts.length === 2) { out += '<div class="mspair">' + shorts.map(msCard).join("") + '</div>'; shorts = []; }
        return;
      }
      out += msCard(it, k);
    });
    if (shorts.length) { out += '<div class="mspair">' + shorts.map(msCard).join("") + '</div>'; }
    return out + '</div>';
  }
  function hpSplit(filter) {
    var fresh = [], earlier = [];
    HABIT.forEach(function (h, i) {
      if (filter && h.f !== filter) { return; }
      ((!h.seen && !(S.hpRead && S.hpRead[i])) ? fresh : earlier).push(i);
    });
    return { fresh: fresh, earlier: earlier };
  }
  function hpBlock(ixs, withSrc) { return '<div class="hpwrap"><div class="feed hpfeed">' + ixs.map(function (i) { return habitCard(HABIT[i], i, withSrc); }).join("") + '</div></div>'; }
  function secHead(t, sub) { return '<div class="mshead sm"><h2>' + t + (sub ? '<small>' + sub + '</small>' : "") + '</h2></div>'; }

  /* My Sport is one feed. The row of what you follow stays pinned and shrinks
     as you scroll; picking one narrows the feed. A club adds its own tabs,
     which pin under the row. */
  P.mysport = function () {
    var sel = S.msFilter || null, f = sel ? msFollow(sel) : null, isClub = sel && CLUBS[sel];
    var items = MYSPORT.feed.filter(function (it) { return !sel || it.tags.indexOf(sel) >= 0; });
    var out = '<div class="ms">';

    out += '<div class="msrail" role="tablist" aria-label="Following">' +
      '<button type="button" class="msf' + (!sel ? " on" : "") + '" data-msf="" aria-selected="' + !sel + '"><span class="msav all"><span class="msavin">' + I.nav.mysport + '</span></span><span class="msn">All</span></button>' +
      MYSPORT.follows.map(function (x) {
        var on = sel === x[0], n = hpSplit(x[0]).fresh.length;
        return '<button type="button" class="msf' + (on ? " on" : "") + '" data-msf="' + x[0] + '" aria-selected="' + on + '">' +
          msAvatar(n ? x : [x[0], x[1], x[2], x[3], x[4], 0]) + (n ? '<i class="msbadge">' + n + '</i>' : "") + '<span class="msn">' + esc(x[1]) + '</span></button>';
      }).join("") +
      '<button type="button" class="msf" data-toast="Adding follows is not built out in this prototype."><span class="msav add"><span class="msavin">+</span></span><span class="msn">Add</span></button></div>';

    if (isClub) {
      var tab = S.clubTab || "latest", sp = hpSplit(sel);
      out += clubHead(sel) + '<div class="clsub" role="tablist">' + [["latest", "Latest"], ["fixtures", "Scores & Fixtures"]].map(function (t) {
        return '<button type="button" role="tab" data-cltab="' + t[0] + '" class="' + (tab === t[0] ? "on" : "") + '">' + esc(t[1]) + '</button>';
      }).join("") + CLUBS[sel].sub.slice(1).map(function (s) { return '<button type="button" data-toast="' + esc(s) + ' is not built out in this prototype.">' + esc(s) + '</button>'; }).join("") + '</div>';
      if (tab === "fixtures") { return out + secHead("Scores &amp; Fixtures", "Premier League") + clubFixtures(sel).replace('class="clfx"', 'class="clfx vert"') + '</div>'; }
      out += secHead("Next up") + clubFixtures(sel);
      if (sp.fresh.length) { out += secHead("New since you last looked", sp.fresh.length + " update" + (sp.fresh.length > 1 ? "s" : "")) + hpBlock(sp.fresh, false); }
      if (sp.earlier.length) { out += secHead("Earlier") + hpBlock(sp.earlier, false); }
      return out + '</div>';
    }

    var s2 = hpSplit(sel);
    if (f) {
      out += '<div class="mshead"><h2>' + esc(f[1]) + '<small>' + esc(f[2]) + '</small></h2><button type="button" class="msedit on" data-follow aria-pressed="true">Following</button></div>';
    }
    if (s2.fresh.length) { out += secHead("New since you last looked", s2.fresh.length + " update" + (s2.fresh.length > 1 ? "s" : "") + " from what you follow") + hpBlock(s2.fresh, !sel); }
    if (s2.earlier.length) { out += secHead("Earlier today") + hpBlock(s2.earlier, !sel); }
    if (items.length) { out += secHead(sel ? "More on " + esc(f[1]) : "More for you", "Stories, live, shorts and quizzes") + msMix(items, !sel); }
    if (!items.length && !s2.fresh.length && !s2.earlier.length) { out += '<p class="note">Nothing new from ' + esc(f[1]) + ' since you last looked.</p>'; }
    return out + '</div>';
  };

  function wireMySport(root) {
    $$("[data-cltab]", root).forEach(function (b) { b.onclick = function () { S.clubTab = b.dataset.cltab; var sb = $("#scrollbody"), y = sb ? sb.scrollTop : 0; rerenderBody(); var sb2 = $("#scrollbody"), c = $(".clsub"); if (sb2 && c && y > c.offsetTop) { sb2.scrollTop = c.offsetTop - 60; } }; });
    $$("[data-hpvote]", root).forEach(function (b) {
      b.onclick = function () { var v = b.dataset.hpvote.split(",").map(Number); S.hpVote = S.hpVote || {}; S.hpVote[v[0]] = v[1]; rerenderBody(); };
    });
    $$("[data-msf]", root).forEach(function (b) {
      b.onclick = function () {
        var id = b.dataset.msf || null;
        S.msFilter = S.msFilter === id ? null : id;
        if (id) { S.msSeen = S.msSeen || {}; S.msSeen[id] = true; }
        if (!id && S.msFilter === null && S.msLastClub) { HABIT.forEach(function (h, i) { if (h.f === S.msLastClub) { S.hpRead = S.hpRead || {}; S.hpRead[i] = true; } }); }
        if (id && CLUBS[id]) { S.msLastClub = id; S.clubTab = "latest"; }
        var rail = $(".msrail"), x = rail ? rail.scrollLeft : 0;
        rerenderBody();
        var rail2 = $(".msrail"); if (rail2) { rail2.scrollLeft = x; }
      };
    });
  }

  /* ------------------------------------------------------------- player */

  function playerHTML() {
    if (S.player === null) { return ""; }
    var ix = S.player, it = DROP[ix], n = DROP.length;
    var liked = !!S.liked[ix];
    return '<div class="takeover" id="takeover" role="dialog" aria-label="' + esc(it.t) + '">' +
      '<div class="tovideo">' + photoSVG(it, "tall", it.sport + " " + it.t) + '<span class="toscrim"></span></div>' +
      '<div class="tonav"><button class="tozone prev" type="button" data-step-clip="-1" aria-label="Previous"></button>' +
      '<button class="tozone next" type="button" data-step-clip="1" aria-label="Next"></button></div>' +
      '<button class="toback" type="button" data-closeplayer aria-label="Close">' + I.back2 + '</button>' +
      '<div class="torail">' +
      '<button class="toact' + (liked ? " on" : "") + '" type="button" data-likeclip aria-pressed="' + liked + '">' +
      I.heartbig + '<span>' + (liked ? bumpCount(it.likes) : it.likes) + '</span></button>' +
      '<button class="toact" type="button" data-toast="Comments are not built out in this prototype.">' + I.commentbig + '<span>' + esc(it.comments) + '</span></button>' +
      '<button class="toact" type="button" data-toast="Share sheet is not wired up in this prototype.">' + I.sharebig + '<span>Share</span></button>' +
      (TRANSCRIPTS[it.img] ? '<button class="toact' + (S.transcript ? " texton" : "") + '" type="button" data-cliptext aria-pressed="' + !!S.transcript + '">' +
        '<span class="toaa">Aa</span><span>Text</span></button>' : "") +
      '</div>' +
      (S.transcript && TRANSCRIPTS[it.img] ? '<div class="totext"><b>What is said</b><p>' + esc(TRANSCRIPTS[it.img]) + '</p></div>' : "") +
      '<div class="tofoot">' +
      '<div class="tochan"><span class="toav">' + esc(it.chan.replace("BBC ", "").slice(0, 2).toUpperCase()) + '</span>' +
      '<span><span class="tocn">' + esc(it.chan) + '</span><br>' +
      '<span class="tohandle">' + I.tick + esc(it.handle) + '</span></span></div>' +
      '<p class="tocap">' + esc(it.cap) + '</p>' +
      (it.audio ? '<button class="tosounds" type="button" data-cliplisten>' + I.speaker + 'Listen to the full call on Sounds</button>' : "") +
      '<div class="totags">' + it.tags.map(function (tg) {
        return '<button class="totag" type="button" data-toast="' + esc(tg) + ' is not built out in this prototype.">' + esc(tg) + '</button>';
      }).join("") + '</div></div>' +
      '<div class="toprog"><span class="tosegs">' + DROP.map(function (x, k) {
        return '<button class="toseg' + (k === ix ? " on" : "") + '" type="button" data-clip="' + k + '" aria-label="Item ' + (k + 1) + '"></button>';
      }).join("") + '</span><span class="tocount">' + (ix + 1) + ' of ' + n + '</span></div>' +
      '</div>';
  }

  function bumpCount(s) {
    var m = /^([\d.]+)(k?)$/.exec(s);
    if (!m) { return s; }
    if (m[2]) { return (parseFloat(m[1]) + 0.1).toFixed(1) + "k"; }
    return String(Number(m[1]) + 1);
  }

  function openPlayer(ix) {
    S.player = ix;
    mountPlayer();
  }
  function closePlayer() {
    S.player = null;
    var el = $("#takeover");
    if (el) { el.remove(); }
  }
  function stepClip(d) {
    if (S.player === null) { return; }
    S.player = (S.player + d + DROP.length) % DROP.length;
    mountPlayer();
  }
  function mountPlayer() {
    var old = $("#takeover");
    if (old) { old.remove(); }
    $("#viewport").insertAdjacentHTML("beforeend", playerHTML());
    wirePlayer();
  }

  function wirePlayer() {
    var el = $("#takeover");
    if (!el) { return; }
    $$("[data-closeplayer]", el).forEach(function (b) { b.onclick = closePlayer; });
    $$("[data-cliptext]", el).forEach(function (b) {
      b.onclick = function () { S.transcript = !S.transcript; mountPlayer(); };
    });
    $$("[data-cliplisten]", el).forEach(function (b) {
      b.onclick = function () {
        var it = DROP[S.player];
        closePlayer();
        playDock({ live: false, title: "Test Match Special", sub: it.t + " \u00b7 the full call", dur: 312,
          transcript: TRANSCRIPTS[it.img] ? [TRANSCRIPTS[it.img]] : null });
      };
    });
    $$("[data-step-clip]", el).forEach(function (b) {
      b.onclick = function () { stepClip(Number(b.dataset.stepClip)); };
    });
    $$("[data-clip]", el).forEach(function (b) {
      b.onclick = function () { S.player = Number(b.dataset.clip); mountPlayer(); };
    });
    $$("[data-toast]", el).forEach(function (b) { b.onclick = function () { toast(b.dataset.toast); }; });
    var like = $("[data-likeclip]", el);
    if (like) {
      like.onclick = function () {
        S.liked[S.player] = !S.liked[S.player];
        mountPlayer();
      };
    }
    var wheelAt = 0;
    el.addEventListener("wheel", function (e) {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) { return; }
      var now = Date.now();
      if (now - wheelAt < 420) { return; }
      wheelAt = now;
      stepClip(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    var sy = 0, tracking = false;
    el.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { return; }
      sy = e.touches[0].clientY; tracking = true;
    }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (!tracking) { return; }
      tracking = false;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dy) > 60) { stepClip(dy < 0 ? 1 : -1); }
    }, { passive: true });
    el.focus();
  }

  /* ==========================================================================
     The website
     ==========================================================================
     Same events, same panels, laid out for a desk rather than a hand. The
     phone stacks everything in one column because it has to; the website
     has room to hold the story, the match and the conversation side by side,
     so nobody has to choose which one to scroll away from.
     ========================================================================== */

  var WEBNAV = ["Home", "News", "Sport", "Weather", "iPlayer", "Sounds", "Bitesize"];
  var WEBSPORT = ["Home", "Football", "Cricket", "Formula 1", "Rugby U", "Rugby L", "Tennis", "Golf", "Boxing", "Athletics", "My Sport"];

  function tkFor(e) {
    var TK = e.takeover || {};
    return { TK: TK, T: maskT(e, TK[lc()] || { stats: [] }) };
  }

  /* where it is on: cricket is radio only here, and Court 2 is an iPlayer
     stream while BBC One stays on Centre Court */
  function chanFor(e) {
    return !hasVideo(e) ? stationName(e) : e.id === "tennis" ? "BBC iPlayer" : "BBC One";
  }

  function watchingFor(e) {
    var st = evState(e);
    /* a count of people watching only means something while it is on */
    return st.card && st.card.status === "live" ? (st.watching || null) : null;
  }

  function statBars(TK, T) {
    return '<div class="tostats">' + (T.stats || []).map(function (r) {
      var a = Number(r[1]), b = Number(r[2]), tot = (a + b) || 1;
      return '<div class="tostat">' +
        '<span class="tonum">' + esc(String(r[1])) + '</span>' +
        '<span class="tobar a"><i style="width:' + (a / tot * 100).toFixed(1) + '%;background:' + TK.ca + '"></i></span>' +
        '<span class="tolab">' + esc(r[0]) + '</span>' +
        '<span class="tobar b"><i style="width:' + (b / tot * 100).toFixed(1) + '%;background:' + TK.cb + '"></i></span>' +
        '<span class="tonum r">' + esc(String(r[2])) + '</span></div>';
    }).join("") + '</div>';
  }

  function liveChip(status, small) {
    return status === "live" ? '<span class="wlive' + (small ? " sm" : "") + '"><i></i>LIVE</span>'
      : status === "soon" ? '<span class="wsoon' + (small ? " sm" : "") + '">Coming up</span>'
      : '<span class="wdone' + (small ? " sm" : "") + '">' + (lc() === "fulltime" ? "Highlights" : "Result") + '</span>';
  }

  function commentsFor(id) {
    return (lc() === "buildup" && COMMENTS_PRE[id]) ? COMMENTS_PRE[id] : (COMMENTS[id] || []);
  }

  function commentsPanel(id, n) {
    var list = commentsFor(id).slice(0, n || 4);
    return '<div class="wcom">' +
      '<div class="wcomin"><span class="meav sm">A</span>' +
      '<button type="button" class="wcomfake" data-sheet="comments" data-ctx="' + esc(id) + '">Add to the conversation</button></div>' +
      list.map(function (c, k) {
        return '<div class="wcomrow"><span class="wcav">' + esc(c[0]) + '</span>' +
          '<div><p class="wcmeta"><b>' + esc(c[1]) + '</b> · ' + esc(c[2]) + '</p>' +
          '<p class="wctext">' + esc(c[3]) + '</p>' +
          '<p class="wcact">' + likeBtn("c:" + id + ":" + c[0] + k, c[4], "sm") +
          '<button type="button" data-toast="Replies are not built out in this prototype.">Reply</button></p></div></div>';
      }).join("") + '</div>';
  }

  /* the BBC masthead, then Sport: the wordmark, the sport nav and a grey
     sub-nav for wherever you are, as bbc.co.uk/sport has them now */
  var WEBICONS = { News: "#E4252A", Sport: "#FFD230", Weather: "#1F8FE0", iPlayer: "#F54997", Sounds: "#FF6A1A", Bitesize: "#8A3FE8" };
  var SEARCHICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  function webMega() {
    function link(n) {
      var sp = null, k;
      for (k in SPORTPAGES) { if (SPORTPAGES.hasOwnProperty(k) && (SPORTPAGES[k].name === n || SPORTPAGES[k].nav === n)) { sp = k; } }
      var act = sp ? 'data-sportpage="' + sp + '"' : n === "My Sport" ? "data-mysport" : 'data-toast="' + esc(n) + ' is not built out in this prototype."';
      return '<a href="#" ' + act + '>' + esc(n) + '</a>';
    }
    return '<div class="wmega"><div class="wwrap"><h2>A-Z Sports</h2><div class="wmgrid az">' + WEBMORE.az.map(link).join("") + '</div>' +
      '<h2>More from Sport</h2><div class="wmgrid more">' + WEBMORE.more.map(link).join("") + '</div></div></div>';
  }

  function webMast() {
    var here = S.view === "sport" ? S.webSport : S.view === "event" ? ev().id : null;
    var SPh = here ? SPORTPAGES[here] : null;
    return '<header class="wmast"><div class="wwrap wmastin">' +
      '<span class="bbcblocks" aria-label="BBC"><i>B</i><i>B</i><i>C</i></span>' +
      '<button class="wforyou" type="button" id="burger" aria-label="Your account and settings" aria-expanded="false"><span class="meav" aria-hidden="true">A</span><span class="wfy">For you</span></button>' +
      '<button class="iconbtn nbell" type="button" data-sheet="notifs" aria-label="Notifications">' + I.bell + '<i class="ndot"></i></button>' +
      '<span class="wmsep" aria-hidden="true"></span>' +
      '<nav class="wnav">' + WEBNAV.map(function (n) {
        var ic = WEBICONS[n] ? '<i class="wni" style="--c:' + WEBICONS[n] + '"></i>' : "";
        return '<a href="#" ' + (n === "Sport" ? "data-gohome" : 'data-toast="' + esc(n) + ' is outside this prototype."') + '>' + ic + esc(n) + '</a>';
      }).join("") + '<a href="#" class="wdots3" data-toast="More of the BBC is outside this prototype." aria-label="More">···</a></nav>' +
      '<span class="wfill"></span>' +
      '<button class="wsearch" type="button" data-toast="Search is a stub in this prototype.">' + SEARCHICON + 'Search BBC</button>' +
      '</div></header>' +
      '<div class="wsport">' +
      '<div class="wwrap wsportmk"><button class="wsportmark" type="button" data-gohome>SPORT</button></div>' +
      '<div class="wsportbar"><div class="wwrap wsportin"><nav class="wsnav">' + WEBSPORT.map(function (n) {
        var sp = sportPageFor(n);
        var on = (n === "Home" && S.view === "home") || (sp && sp === here) || (n === "My Sport" && S.view === "mysport");
        var act = n === "Home" ? " data-gohome" : sp ? ' data-sportpage="' + sp + '"'
          : n === "My Sport" ? ' data-mysport'
          : ' data-toast="' + esc(n) + ' is not built out in this prototype."';
        return '<a href="#" class="' + (on ? "on" : "") + '"' + act + '>' + esc(n) + '</a>';
      }).join("") + '</nav>' +
      '<button class="wmorebtn' + (S.webMore ? " on" : "") + '" type="button" data-webmore aria-expanded="' + !!S.webMore + '">' + (S.webMore ? I.close : I.burger) + 'More</button>' +
      '</div></div>' +
      (S.webMore ? webMega() : "") +
      '<div class="wsubbar"><div class="wwrap"><nav class="wsub2">' +
      (SPh ? '<a href="#" class="on" data-sportpage="' + here + '">' + esc(SPh.name) + I.chevron + '</a>' +
          SPh.tabs.map(function (t) { return '<a href="#" data-toast="' + esc(t) + ' is not built out in this prototype.">' + esc(t) + '</a>'; }).join("")
        : '<a href="#" class="on" data-gohome>Home' + I.chevron + '</a>' +
          '<a href="#" data-sportpage="football">Football Scores &amp; Fixtures</a>' +
          '<a href="#" data-open="' + evIxById("football") + '">' + esc(EVENTS[evIxById("football")].title) + '</a>' +
          WEBHOMESUB.map(function (t) { return '<a href="#" data-toast="' + esc(t) + ' is outside this prototype.">' + esc(t) + '</a>'; }).join("")) +
      '</nav></div></div></div>';
  }

  function webHome() {
    var cards = rankedCards(), top = cards[0], e = top.e, tk = tkFor(e), TK = tk.TK, T = tk.T;
    var hero = heroFor();
    var isLive = lc() === "live" || lc() === "companion";
    var out = "";

    /* the lead: whatever is most worth watching, beside everything else live */
    out += spoilBar();
    out += '<section class="wtop"><div class="whero">' +
      '<div class="wheroimg">' + (T.img ? imgTag(T.img, TK.a + " v " + TK.b, "wide") : photoSVG(e.photo, "wide", e.title)) +
      '<span class="wheroveil"></span></div>' +
      '<div class="wherotext">' +
      '<p class="wkick">' + liveChip(top.c.status) + '<span>' + esc(e.sport) + ' · ' + esc(e.comp) + '</span>' +
      (watchingFor(e) ? '<span class="wwatch">' + esc(watchingFor(e)) + ' watching</span>' : "") + '</p>' +
      '<h1 class="wh1">' + crestImg(e.id, TK.a, "md") + esc(TK.a) + ' <span>' + esc(T.line || "v") + '</span> ' + esc(TK.b) + crestImg(e.id, TK.b, "md") + '</h1>' +
      (T.sub ? '<p class="wsub">' + esc(T.sub) + '</p>' : "") +
      '<div class="wherostats">' + statBars(TK, T) + '</div>' +
      '<div class="wbtns">' +
      '<button class="wbtn pri" type="button" data-open="' + top.i + '">' + esc(T.cta || "Open the live page") + '</button>' +
      (isLive ? '<button class="wbtn" type="button" data-tvlaunch="' + top.i + '">' + I.playtri + 'Watch on your TV</button>' +
        '<button class="wbtn" type="button" data-listenlive="' + top.i + '">' + I.speaker + 'Listen live</button>' : "") +
      (lc() === "buildup" ? '<button class="wbtn" type="button" data-remind="' + e.id + '">' + I.bell + (S.reminders && S.reminders[e.id] ? "Reminder set" : "Remind me") + '</button>' : "") +
      '</div></div></div>' +

      '<aside class="wlivelist"><h2 class="wh2">' + (isLive ? "Live now" : lc() === "buildup" ? "Today" : "Earlier today") + '</h2>' +
      cards.map(function (x) {
        var c = x.c, wt = watchingFor(x.e);
        return '<button class="wlrow" type="button" data-open="' + x.i + '">' +
          '<span class="wlimg">' + photoSVG(x.e.photo, "square", x.e.sport + " " + x.e.title) + '</span>' +
          '<span class="wltext">' + liveChip(c.status, true) +
          '<b>' + esc(c.line1) + '</b><span>' + esc(c.line2) + '</span>' +
          (wt && c.status === "live" ? '<small>' + esc(wt) + ' watching</small>' : '<small>' + esc(c.when) + '</small>') +
          (c.status === "soon" ? remindChip(x.e, "") : "") +
          '</span></button>';
      }).join("") + '</aside></section>';

    /* three things you can do right now, side by side */
    out += '<section class="wthree">' +
      '<div class="wpanel">' + visualPoll(hero.poll, hero.photo, "Have your say") + '</div>' +
      (RECAPS[e.id] && isLive
        ? '<div class="wpanel"><h2 class="wh2">The story so far <small>' + esc(e.title) + '</small></h2>' + P.recap({ id: e.id }) + '</div>'
        : '<div class="wpanel wstory"><button class="wstlink" type="button" data-article="' + esc(hero.article || "") + '"><span class="wstimg">' + photoSVG(hero.photo, "wide", "story " + hero.head) + '</span>' +
          '<span class="wkick"><span>' + esc(hero.kicker) + '</span></span><span class="wh2 big">' + esc(hero.head) + '</span><span class="wsub">' + esc(hero.stand) + '</span></button>' +
          engageBar({ listen: true, ctx: "story:" + lc(), comments: hero.comments, likes: hero.likes, shares: hero.shares, likeKey: "story:" + lc() }) + '</div>') +
      '<div class="wpanel"><h2 class="wh2">The conversation <small>' + esc(e.title) + '</small></h2>' + commentsPanel(e.id, 3) + '</div>' +
      '</section>';

    /* the rest of the day, as a grid rather than a scroll */
    out += '<section class="wsec"><h2 class="wh2">Following today</h2><div class="wgrid4">' +
      cards.slice().sort(function (a, b) { return b.c.sig - a.c.sig; }).map(function (x) {
        var c = x.c;
        return '<button class="wcard" type="button" data-open="' + x.i + '">' +
          '<span class="wcimg">' + photoSVG(x.e.photo, "wide", "follow " + x.e.title + c.line2) + (c.status === "soon" ? "" : liveChip(c.status, true)) + '</span>' +
          '<span class="wcsport">' + esc(x.e.sport) + ' · ' + esc(c.when) + '</span>' +
          '<b>' + esc(c.line1) + '</b><span class="wcctx">' + esc(c.ctx) + '</span>' +
          (c.status === "soon" ? '<span class="ec-foot">' + remindChip(x.e, "") + '</span>' : "") + '</button>';
      }).join("") + '</div></section>';

    /* the rest of BBC Sport today, in the site's own grid */
    out += '<section class="wsec"><h2 class="wh2">More from BBC Sport</h2><div class="bgrid4">' +
      HOMEMORE.map(function (it) { return bCard(it, false); }).join("") + '</div></section>';

    var v = HOMEFEED.videos;
    out += '<section class="wsec"><h2 class="wh2">' + esc(v.title) + '</h2><div class="wshorts">' +
      [1, 7, 2, 9, 5, 0].map(function (ix) {
        var it = DROP[ix];
        return '<button class="wshort" type="button" data-play="' + ix + '">' +
          '<span class="wsimg">' + photoSVG(it, "tall", it.sport + " " + it.t) + '<span class="play">' + I.playtri + '</span>' +
          '<span class="dur">' + esc(it.dur) + '</span></span>' +
          '<span class="wcsport">' + esc(it.sport) + '</span><b>' + esc(it.t) + '</b></button>';
      }).join("") + '</div></section>';

    var st = HOMEFEED.standings, cp = HOMEFEED.comps, tix = S.compTab || 0, ct = cp.tabs[tix];
    out += '<section class="wsec wtables"><div><h2 class="wh2">' + esc(st.title) + '</h2>' + table(st.cols, st.rows) +
      '<p class="note">' + esc(st.note) + '</p></div>' +
      '<div><h2 class="wh2">' + esc(cp.title) + '</h2><div class="comptabs">' + cp.tabs.map(function (t, i) {
        return '<button class="comptab" type="button" data-comp="' + i + '" aria-pressed="' + (i === tix) + '">' + badge(t.colour, t.initials) + esc(t.name) + '</button>';
      }).join("") + '</div>' + table(ct.cols, ct.rows, "Club") + '</div></section>';
    return out;
  }

  /* scores hidden on the website: the centre of the page offers the ways
     to catch up, full screen, before anything that would give it away */
  function webShield(e) {
    return spoilShield(e).replace(/data-recapvid=/g, 'data-fs="1" data-recapvid=').replace(/data-watch="(\d+)"/g, 'data-watch="$1" data-fs="1"');
  }

  function followBtn(id, cls) {
    var on = followOf(id);
    return '<button class="' + cls + (on ? " on" : "") + '" type="button" data-wfollow="' + id + '" aria-pressed="' + on + '">' +
      (on ? I.tickplain + "Following" : I.star + "Follow") + '</button>';
  }

  function prematchPanel(e) {
    var PM = PREMATCH[e.id];
    if (!PM) { return ""; }
    return '<div class="wpanel pm"><h2 class="wh2">' + esc(PM.title) + '</h2><dl class="pmrows">' + PM.rows.map(function (r) {
      return '<div><dt>' + esc(r[0]) + '</dt><dd><b>' + esc(r[1]) + '</b><span>' + esc(r[2]) + '</span></dd></div>';
    }).join("") + '</dl><div class="pmgo">' + PM.go.map(function (g) {
      return g[1] === "listen"
        ? '<button type="button" data-listenlive="' + evIxById(e.id) + '">' + I.speaker + '<span>' + esc(g[0]) + '</span>' + I.chevron + '</button>'
        : '<button type="button" data-gotab="' + esc(g[1]) + '"><span>' + esc(g[0]) + '</span>' + I.chevron + '</button>';
    }).join("") + '</div></div>';
  }

  /* the head band: both sides on one line for cricket, the leaders for F1 */
  function webBand(e, st, hid) {
    var h = st.head || {};
    if (e.id === "cricket") { return '<section class="wband">' + ckHead(e, st, h, hid) + '</section>'; }
    var live = h.status && (h.status.kind === "live" || h.status.kind === "paired");
    return '<section class="wband"><div class="ckhead">' + (st.date ? '<p class="ckdate">' + esc(st.date) + '</p>' : "") +
      '<p class="ckcomp">' + esc(e.comp.replace(" · ", " - ")) + '</p>' +
      '<div class="ckline one"><span class="ckname a"><b>' + esc(e.audio.prog.split(" - ")[1] || e.title) + '</b></span><span class="ckchip' + (live ? " on" : "") + '">' + esc(st.chip || "") + '</span><span></span></div>' +
      (hid ? '<button class="revealpill ckreveal" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show the times</button>'
        : '<p class="f1lead">' + (h.rows || []).slice(0, 3).map(function (r, i) { return '<span' + (i === 0 ? ' class="now"' : "") + '><b>' + esc(r[0]) + '</b> ' + esc(r[1]) + '</span>'; }).join("") + '</p>' +
          (st.state ? '<p class="ckstate">' + esc(st.state) + '</p>' : "")) + '</div></section>';
  }

  /* the live block, or the radio player once it is playing */
  function webLive(e, st, hid) {
    var L = lc(), live = L === "live" || L === "companion", TK = e.takeover || {};
    var head = hid && st.hiddenHeadline ? st.hiddenHeadline : st.headline;
    var wr = S.webRadio && S.webRadio.id === e.id ? S.webRadio : null;
    if (wr) {
      var disc = function (n) { return '<span class="adisc">' + (crestSlug(e.id, n) ? crestImg(e.id, n, "adc") : '<span class="adsport">' + (I.sport[e.sport] || "") + '</span>') + '</span>'; };
      var TR = (e.audio.transcript || CK_TRANSCRIPT), ln = TR[(S.wrLine || 0) % TR.length];
      return '<section class="wradio"><div class="wwrap">' +
        '<p class="wrtop"><b>' + esc(e.audio.prog) + '</b> ' + esc(e.audio.station) + '<button class="iconbtn" type="button" data-wrclose aria-label="Stop and close">' + I.close + '</button></p>' +
        '<div class="wrcard' + (wr.fs ? " fs" : "") + '">' +
        '<div class="aartbg"></div><div class="aartdiscs' + (TK.a ? "" : " one") + '">' + (TK.a ? disc(TK.a) + disc(TK.b) : disc("")) + '</div>' +
        '<p class="wrtitle">' + esc(e.audio.prog) + '</p>' +
        '<div class="wrctl">' +
        '<button type="button" class="wrb vol" data-toast="Volume is not built out in this prototype." aria-label="Volume">' + I.speaker + '</button>' +
        '<span class="wrmid"><button type="button" class="wrb skip" data-toast="Back to the start of today\'s coverage." aria-label="Back to the start">&laquo;<small>START</small></button>' +
        '<button type="button" class="wrb skip" data-toast="Back ten seconds." aria-label="Back ten seconds">&#8634;<small>10</small></button>' +
        '<button type="button" class="wrb big" data-wrplay aria-label="' + (wr.play ? "Pause" : "Play") + '">' + (wr.play ? I.pause : I.play) + '</button>' +
        '<button type="button" class="wrb skip dim" aria-label="Forward ten seconds" data-toast="You are live.">&#8635;<small>10</small></button>' +
        '<button type="button" class="wrb skip dim" aria-label="Go live" data-toast="You are live.">&raquo;<small>LIVE</small></button></span>' +
        '<span class="wrend"><button type="button" class="wrb" data-wrcc aria-pressed="' + !!wr.cc + '" aria-label="Live transcript">' + I.cc + '</button>' +
        '<button type="button" class="wrb" data-toast="Playback speed is not built out in this prototype."><b>1&times;</b></button>' +
        '<button type="button" class="wrb" data-wrfs aria-label="' + (wr.fs ? "Exit full screen" : "Full screen") + '">' + (wr.fs ? I.shrink : I.expand) + '</button></span></div>' +
        '<div class="wrprog"><span class="aprog"><i></i></span><span class="alive"><span class="lvring"></span>LIVE</span></div>' +
        '<div class="wrvoice">' + voiceChip(e, false) + '</div>' +
        (wr.cc && ln ? '<p class="wrcc"><b>' + esc(ln[0]) + '</b> ' + esc(ln[1]) + '</p>' : "") +
        '</div></div></section>';
    }
    var bg = L === "fulltime" && hid ? "bb-lordsview" : (tkFor(e).T.img || null);
    return '<section class="wlv">' + (bg ? '<span class="wlvimg">' + imgTag(bg, "", "wide") + '</span>' : "") + '<div class="wwrap"><div class="wlvtext">' +
      (live && st.watching ? '<p class="lvlive"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      (head ? '<h1 class="wlvh">' + esc(head) + '</h1>' : "") +
      '<p class="wlvprog"><b>' + esc(e.audio.prog) + '</b> ' + esc(e.audio.station) + '</p>' +
      '<div class="wlvbtns"><button class="lvlisten" type="button" data-webradio="' + e.id + '">' + I.speaker + (L === "fulltime" ? "Listen to the day" : "Listen live") + '</button>' +
      (L === "buildup" ? '<button class="wbtn" type="button" data-remind="' + e.id + '">' + I.bell + (S.reminders && S.reminders[e.id] ? "Reminder set" : "Remind me") + '</button>' : "") +
      followBtn(e.id, "wbtn ghost wfol") + '</div></div></div></section>';
  }

  function webLvBar(e, st, hid) {
    var L = lc(), live = L === "live" || L === "companion";
    var head = hid && st.hiddenHeadline ? st.hiddenHeadline : st.headline;
    var on = S.webRadio && S.webRadio.id === e.id;
    return '<div class="wlvbar" id="lvbar"><div class="wwrap"><div>' +
      (live && st.watching ? '<p class="lvlive"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      '<p class="lvbhead">' + esc(head || e.title) + '</p></div>' +
      '<div class="wlvbr"><p class="lvbprog"><b>' + esc(e.audio.prog) + '</b><br>' + esc(e.audio.station) + '</p>' +
      '<button class="lvlisten sm' + (on ? " on" : "") + '" type="button" data-webradio="' + e.id + '">' + I.speaker + (on ? "Listening live" : "Listen live") + '</button></div>' +
      '<button class="iconbtn lvbx" type="button" data-lvbx aria-label="Hide">' + I.close + '</button></div></div>';
  }

  function webEventAudio() {
    var e = ev(), st = evState(), tk = tkFor(e), TK = tk.TK, T = tk.T, hid = masked(e);
    var R = RECAPS[e.id], L = lc(), out = "";
    var sections = curTab().sections.filter(function (x) {
      return !(x.panels && x.panels.some(function (pn) { return pn.t === "recap" || pn.t === "involvecta" || (pn.t === "audio" && L !== "companion"); }));
    });
    var inv = null;
    curTabs().forEach(function (t) { (t.sections || []).forEach(function (x) { (x.panels || []).forEach(function (pn) { if (pn.t === "involvecta") { inv = pn; } }); }); });
    out += webBand(e, st, hid) + webLive(e, st, hid);
    out += '<div class="wcktabs">' + tabBar() + '</div>';
    out += '<div class="wwrap wckcols"><aside class="wckleft">' +
      (hid ? "" : summaryBox().replace('<section class="section">', '<section class="section wsum">')) +
      (inv ? '<div class="wckinv">' + P.involvecta(inv) + '</div>' : "") +
      (L === "buildup" ? prematchPanel(e)
        : R && !hid ? '<div class="wpanel"><h2 class="wh2">Key moments' + (L === "fulltime" ? " <small>The whole day</small>" : " <small>So far</small>") + '</h2><ol class="rcpline">' + R.moments.map(function (x) {
          return '<li class="k-' + esc(x[4] || "score") + '"><span>' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b></li>';
        }).join("") + '</ol></div>' : "") +
      (T.stats && T.stats.length && !hid ? '<div class="wpanel"><h2 class="wh2">In numbers</h2>' + statBars(TK, T) + '</div>' : "") +
      (hid ? "" : '<div class="wpanel"><h2 class="wh2">The conversation</h2>' + commentsPanel(e.id, 3) + '</div>') +
      '</aside><section class="wckmain"><div id="stage">' +
      (hid ? webShield(e) : renderSections(sections.filter(function (x) { return !(x.panels && x.panels.some(function (pn) { return pn.t === "summary"; })); }))) +
      '</div></section></div>';
    return out;
  }

  /* ---- football on the website, as the live page looks today ----------
     The head across the middle, one line for what is on and one button,
     then the tabs, and under them the tab itself. */
  function webFbHead(e, st, hid) {
    var h = st.head, L = lc(), A = (e.assists || {})[L === "companion" ? "live" : L];
    var assists = A && !hid ? '<div class="fbassist"><span>' + esc(A[0]) + '</span><b>Assists</b><span>' + esc(A[1]) + '</span></div>' : "";
    return '<section class="wband wfb">' + fbHead(e, st, h, hid, assists) + '</section>';
  }

  function webFbWatch(e, st, hid) {
    var L = lc(), live = L === "live" || L === "companion";
    if (S.webRadio && S.webRadio.id === e.id) { return webLive(e, st, hid); }
    if (live && st.watch) {
      return '<section class="wfbwatch"><p><b>' + esc(st.watch[0]) + '</b> ' + esc(st.watch[1]) + '</p>' +
        '<button class="lvlisten" type="button" data-wfbplay>' + I.playtri + 'Watch live</button></section>';
    }
    return '<section class="wfbwatch"><p><b>' + esc(st.prog || e.audio.prog) + '</b> ' + esc(e.audio.station) + '</p>' +
      '<div class="wlvbtns"><button class="lvlisten" type="button" data-webradio="' + e.id + '">' + I.speaker + 'Listen live</button>' +
      (L === "buildup" ? '<button class="wbtn" type="button" data-remind="' + e.id + '">' + I.bell + (S.reminders && S.reminders[e.id] ? "Reminder set" : "Remind me") + '</button>'
        : st.watch ? '<button class="wbtn" type="button" data-toast="' + esc(st.watch[0]) + ' is on ' + esc(st.watch[1]) + ' at 22:30.">' + I.playtri + 'Watch at 22:30</button>' : "") +
      followBtn(e.id, "wbtn ghost wfol") + '</div></section>';
  }

  function webFbPlayer(e, st) {
    var T = tkFor(e).T, w = st.watch || [e.title, "BBC One"], on = !S.wfb.pause;
    return '<section class="wfbplayer"><div class="wfbin"><p class="wfbptop"><span><b>' + esc(w[0]) + '</b> ' + esc(w[1]) + '</span>' +
      '<button class="iconbtn" type="button" data-wfbclose aria-label="Close">' + I.close + '</button></p>' +
      '<div class="wfbpv"><div class="vidimg' + (on ? " kb" : "") + '">' + (T.img ? imgTag(T.img, "", "wide") : "") + '</div><span class="lvpveil"></span>' +
      '<span class="wfbpvoice">' + voiceChip(e, false) + '</span>' +
      '<div class="wfbpbar"><span class="aprog"><i></i></span><span class="alive"><span class="lvring"></span>LIVE</span></div>' +
      '<div class="wfbpctl"><span class="wfbpmid">' + playCtl("data-wfbpause", on, "wrb") + '</span>' +
      '<span class="wfbpend"><button type="button" class="wrb" data-toast="Playback speed is not built out in this prototype."><b>1&times;</b></button>' +
      '<button type="button" class="wrb" data-toast="Picture in picture is not built out in this prototype." aria-label="Picture in picture">' + PIPICON + '</button>' +
      '<button type="button" class="wrb" data-watch="' + S.eventIx + '" data-fs="1" aria-label="Full screen">' + I.expand + '</button></span></div>' +
      '</div></div></section>';
  }

  function webFbBar(e, st, hid) {
    var L = lc(), live = L === "live" || L === "companion";
    if (!(live && st.watch)) { return webLvBar(e, st, hid); }
    var head = hid && st.hiddenHeadline ? st.hiddenHeadline : st.headline, on = S.wfb && S.wfb.play;
    return '<div class="wlvbar" id="lvbar"><div class="wwrap"><div>' +
      (st.watching ? '<p class="lvlive"><span class="lvring"></span>LIVE<i></i><span>' + esc(st.watching) + ' viewing</span></p>' : "") +
      '<p class="lvbhead">' + esc(head || e.title) + '</p></div>' +
      '<div class="wlvbr"><p class="lvbprog"><b>' + esc(st.watch[0]) + '</b><br>' + esc(st.watch[1]) + '</p>' +
      '<button class="lvlisten sm' + (on ? " on" : "") + '" type="button" data-wfbplay>' + I.playtri + (on ? "Watching live" : "Watch live") + '</button></div>' +
      '<button class="iconbtn lvbx" type="button" data-lvbx aria-label="Hide">' + I.close + '</button></div></div>';
  }

  function webEventFootball() {
    var e = ev(), st = evState(), hid = masked(e), t = curTab(), out = "";
    S.wfb = S.wfb || {};
    out += S.wfb.play ? webFbPlayer(e, st) : webFbHead(e, st, hid) + webFbWatch(e, st, hid);
    out += '<div class="wcktabs">' + tabBar() + '</div>';
    if (hid) { return out + '<div class="wwrap wfbone"><div id="stage">' + webShield(e) + '</div></div>'; }
    if (t.id === "live") {
      var inv = null;
      t.sections.forEach(function (x) { (x.panels || []).forEach(function (pn) { if (pn.t === "involvecta") { inv = pn; } }); });
      var rest = t.sections.filter(function (x) { return !(x.panels && x.panels.some(function (pn) { return pn.t === "involvecta" || pn.t === "summary"; })); });
      /* as on the site: the clips, then the reporting; anything else follows */
      var rank = function (x) { return x.panels && x.panels.some(function (pn) { return pn.t === "cliprail"; }) ? 0 : x.h === "Live Reporting" ? 1 : 2; };
      rest = rest.map(function (x, i) { return { x: x, i: i }; }).sort(function (u, v) { return rank(u.x) - rank(v.x) || u.i - v.i; }).map(function (o) { return o.x; });
      return out + '<div class="wwrap wckcols wfbcols"><aside class="wckleft">' +
        summaryBox().replace('<section class="section">', '<section class="section wsum">') +
        (inv ? '<div class="wckinv">' + P.involvecta(inv) + '</div>' : "") +
        '</aside><section class="wckmain"><div id="stage">' + renderSections(rest) + '</div></section></div>';
    }
    return out + '<div class="wwrap wfbone t-' + esc(t.id) + '"><div id="stage">' + renderSections(t.sections) + '</div></div>';
  }

  function webEvent() {
    if (ev().id === "football") { return webEventFootball(); }
    if (!hasVideo(ev())) { return webEventAudio(); }
    var e = ev(), st = evState(), tk = tkFor(e), TK = tk.TK, T = tk.T;
    var card = st.card, isLive = lc() === "live" || lc() === "companion";
    var R = RECAPS[e.id];
    var out = "";

    out += '<section class="wevhead"><div class="wwrap">' +
      '<p class="wcrumb"><button type="button" data-gohome>Sport</button> › <button type="button" data-sportpage="' + e.id + '">' + esc(e.sport) + '</button> › ' + esc(e.comp) + '</p>' +
      '<div class="wevrow"><div>' +
      '<p class="wkick">' + liveChip(card.status) + (watchingFor(e) ? '<span class="wwatch">' + esc(watchingFor(e)) + ' watching</span>' : "") + '</p>' +
      '<h1 class="wh1">' + crestImg(e.id, TK.a, "md") + esc(TK.a) + ' <span>' + esc(T.line || "v") + '</span> ' + esc(TK.b) + crestImg(e.id, TK.b, "md") + '</h1>' +
      (T.sub ? '<p class="wsub">' + esc(T.sub) + '</p>' : "") + '</div>' +
      '<div class="wbtns">' +
      (isLive ? '<button class="wbtn pri" type="button" data-tvlaunch="' + S.eventIx + '">' + I.playtri + 'Watch on your TV</button>' : "") +
      '<button class="wbtn" type="button" data-listenlive="' + S.eventIx + '">' + I.speaker + 'Listen live</button>' +
      (lc() === "buildup" ? '<button class="wbtn" type="button" data-remind="' + e.id + '">' + I.bell + (S.reminders && S.reminders[e.id] ? "Reminder set" : "Remind me") + '</button>' : "") +
      followBtn(e.id, "wbtn ghost wfol") +
      '</div></div>' + tabBar() + '</div></section>';

    /* left: catch up. centre: the match. right: take part. */
    out += '<div class="wwrap wcols"><aside class="wleft">' +
      (R && isLive ? '<div class="wpanel"><h2 class="wh2">The story so far</h2>' + P.recap({ id: e.id }) + '</div>' : "") +
      (lc() === "buildup" ? prematchPanel(e)
        : R && masked(e) ? '<div class="wpanel"><h2 class="wh2">Key moments</h2><p class="note">Hidden with the score. They are here when you choose to see it.</p>' +
          '<button class="wbtn" type="button" data-reveal="' + e.id + '">' + I.eye + 'Show the score and moments</button></div>'
        : R ? '<div class="wpanel"><h2 class="wh2">Key moments' + (lc() === "fulltime" ? " <small>The whole match</small>" : " <small>So far</small>") + '</h2><ol class="rcpline">' + R.moments.map(function (x) {
          return '<li class="k-' + esc(x[4] || "score") + '"><span>' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b></li>';
        }).join("") + '</ol></div>' : "") +
      '</aside>' +

      '<section class="wcentre"><div id="stage">' +
      (isLive ? '<div class="wplayer' + (S.webPlay ? " on" : "") + '">' + (T.img ? imgTag(T.img, TK.a + " v " + TK.b, "wide") : photoSVG(e.photo, "wide", e.title)) +
        '<span class="wpveil"></span><span class="wpchip">' + liveChip("live") + '<span>' + esc(chanFor(e)) + '</span></span>' +
        (S.webPlay ? '<span class="wpnow">' + I.pause + '</span>' : '<button class="wpplay" type="button" data-webplay aria-label="Play">' + I.playtri + '</button>') +
        '<span class="wpvoice">' + voiceChip(e, false) + '</span>' +
        '<button class="wpfs" type="button" data-watch="' + S.eventIx + '" data-fs="1" aria-label="Full screen">' + I.expand + '</button>' +
        '</div>' : "") +
      (masked(e) ? webShield(e) : summaryBox() + renderSections(curTab().sections.filter(function (x) {
        return !(x.panels && x.panels.some(function (pn) { return pn.t === "recap"; }));
      }))) + '</div></section>' +

      '<aside class="wright">' +
      (T.stats && T.stats.length ? '<div class="wpanel"><h2 class="wh2">In numbers</h2>' + statBars(TK, T) + '</div>' : "") +
      (masked(e) ? "" : '<div class="wpanel"><h2 class="wh2">The conversation</h2>' + commentsPanel(e.id, 4) + '</div>') +
      (masked(e) ? "" : '<div class="wpanel"><h2 class="wh2">Watch</h2><div class="wshorts two">' +
      DROP.map(function (it, ix) { return { it: it, ix: ix }; }).filter(function (x) { return x.it.sport.indexOf(e.sport.split(" ")[0]) === 0; }).slice(0, 2).map(function (x) {
        return '<button class="wshort" type="button" data-play="' + x.ix + '"><span class="wsimg">' + photoSVG(x.it, "tall", x.it.sport + " " + x.it.t) +
          '<span class="play">' + I.playtri + '</span><span class="dur">' + esc(x.it.dur) + '</span></span><b>' + esc(x.it.t) + '</b></button>';
      }).join("") + '</div></div>') +
      '</aside></div>';
    return out;
  }

  /* ---- the sport pages: title, a compact scores strip, then the stories ---- */

  function sportPageFor(navName) {
    var k;
    for (k in SPORTPAGES) { if (SPORTPAGES.hasOwnProperty(k) && SPORTPAGES[k].nav === navName) { return k; } }
    return null;
  }

  /* simple flags for the national sides in the fixture cards; crests come
     first where we have them, clubs and counties get neither */
  var FLAGS = {
    England: '<rect width="24" height="16" fill="#fff"/><rect x="10" width="4" height="16" fill="#CE1124"/><rect y="6" width="24" height="4" fill="#CE1124"/>',
    Scotland: '<rect width="24" height="16" fill="#005EB8"/><path d="M0 0 24 16M24 0 0 16" stroke="#fff" stroke-width="3"/>',
    Wales: '<rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#00AB39"/><circle cx="12" cy="8" r="4" fill="#D30731"/>',
    Ireland: '<rect width="8" height="16" fill="#169B62"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#FF883E"/>',
    Netherlands: '<rect width="24" height="16" fill="#21468B"/><rect width="24" height="10.7" fill="#fff"/><rect width="24" height="5.3" fill="#AE1C28"/>',
    Spain: '<rect width="24" height="16" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/>',
    Italy: '<rect width="8" height="16" fill="#009246"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#CE2B37"/>',
    France: '<rect width="8" height="16" fill="#002395"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#ED2939"/>',
    Norway: '<rect width="24" height="16" fill="#BA0C2F"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="24" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#00205B"/><rect y="7" width="24" height="2" fill="#00205B"/>',
    Iceland: '<rect width="24" height="16" fill="#02529C"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="24" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#DC1E35"/><rect y="7" width="24" height="2" fill="#DC1E35"/>',
    Denmark: '<rect width="24" height="16" fill="#C8102E"/><rect x="7" width="3" height="16" fill="#fff"/><rect y="6.5" width="24" height="3" fill="#fff"/>',
    Germany: '<rect width="24" height="16" fill="#FFCE00"/><rect width="24" height="10.7" fill="#DD0000"/><rect width="24" height="5.3" fill="#000"/>',
    Belgium: '<rect width="8" height="16" fill="#000"/><rect x="8" width="8" height="16" fill="#FDDA24"/><rect x="16" width="8" height="16" fill="#EF3340"/>',
    Hungary: '<rect width="24" height="16" fill="#477050"/><rect width="24" height="10.7" fill="#fff"/><rect width="24" height="5.3" fill="#CE2939"/>',
    "Northern Ireland": '<rect width="24" height="16" fill="#fff"/><path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" stroke-width="2"/>',
    India: '<rect width="24" height="16" fill="#fff"/><rect width="24" height="5.3" fill="#FF9933"/><rect y="10.7" width="24" height="5.3" fill="#138808"/><circle cx="12" cy="8" r="2" fill="none" stroke="#000080" stroke-width=".8"/>'
  };
  function flagFor(name) {
    var f = FLAGS[name];
    return f ? '<svg class="fxflag" viewBox="0 0 24 16" aria-hidden="true">' + f + '</svg>' : '<span class="fxflag none" aria-hidden="true"></span>';
  }

  function followOf(k) {
    S.wfollow = S.wfollow || {};
    if (S.wfollow.hasOwnProperty(k)) { return S.wfollow[k]; }
    var SP = SPORTPAGES[k], X = WEBMYSPORT.extra[k];
    return SP ? !!SP.follow : X ? !!X.follow : false;
  }

  function fxCards(id) {
    var SP = SPORTPAGES[id], e = evById(id), ix = evIxById(id), L = lc() === "companion" ? "live" : lc();
    var TK = e.takeover || {}, st = evState(e).card, hideF = masked(e), rows = [];
    if (SP.sessions) {
      rows.push({ feat: true, ix: ix, status: st.status, solo: true, a: "First practice", sub: hideF ? "Result hidden" : st.line1,
        meta: st.status === "live" ? "38 min" : st.status === "soon" ? "09:30" : "Done", comp: "Azerbaijan Grand Prix" });
    } else {
      var f = SP.feat[L] || SP.feat.live;
      rows.push({ feat: true, ix: ix, status: st.status, a: TK.a, b: TK.b, sa: hideF ? "" : f[0], sb: hideF ? "" : f[1],
        meta: hideF ? "Hidden" : f[2], comp: e.comp.split(" · ")[0].replace("UEFA ", "").replace("Guinness ", "") });
    }
    SP.fixtures.forEach(function (x) {
      var s = x.st[L] || x.st.all, hide = hideOn() && s[0] !== "soon" && !S.revealed[id];
      rows.push({ status: s[0], a: x.a, b: x.b, solo: !x.b, sa: hide ? "" : s[1], sb: hide ? "" : s[2], meta: hide ? "Hidden" : s[3], comp: x.comp });
    });
    var order = { live: 0, soon: 1, done: 2 };
    return rows.map(function (r, i) { r.i = i; return r; }).sort(function (p, q) { return order[p.status] - order[q.status] || (q.feat ? 1 : 0) - (p.feat ? 1 : 0) || p.i - q.i; });
  }

  /* a fixture card as the site draws them: the competition above, the two
     sides on the left, the time or the state in a box on the right */
  function fxCard(r, id) {
    var mark = function (n) { return r.feat ? (crestImg(id, n, "fxcr") || flagFor(n)) : flagFor(n); };
    var box = r.status === "live" ? '<span class="fxlive"><i></i>LIVE</span><b>' + esc(r.meta) + '</b>'
      : r.status === "soon" ? '<b>' + esc(r.meta.replace(/^Tomorrow /, "")) + '</b>' + (/^Tomorrow/.test(r.meta) ? '<small>Tomorrow</small>' : '<small>Today</small>')
      : '<b class="fxft">' + esc(r.meta) + '</b>';
    var teams = r.solo
      ? '<span class="fxt solo"><b>' + esc(r.a) + '</b>' + (r.sub ? '<small>' + esc(r.sub) + '</small>' : "") + '</span>'
      : '<span class="fxt">' + mark(r.a) + '<b>' + esc(r.a) + '</b><em>' + esc(r.sa) + '</em></span>' +
        '<span class="fxt">' + mark(r.b) + '<b>' + esc(r.b) + '</b><em>' + esc(r.sb) + '</em></span>';
    return '<button class="fxc ' + r.status + (r.feat ? " fxfeat" : "") + '" type="button" ' +
      (r.feat ? 'data-open="' + r.ix + '" aria-label="Open the live experience"' : 'data-toast="Only the featured event has a live experience in this prototype."') + '>' +
      '<span class="fxcomp">' + esc(r.comp) + '</span>' +
      '<span class="fxbody"><span class="fxteams">' + teams + '</span><span class="fxbox">' + box + '</span></span>' +
      (r.feat ? '<span class="fxgo">' + (r.status === "done" ? "Reaction and highlights" : r.status === "soon" ? "Build-up and reminders" : "Live experience") + I.chevron + '</span>' : "") + '</button>';
  }

  function fxStrip(id, title) {
    return '<section class="fxstrip" aria-label="Scores and fixtures"><div class="fxbar"><h2>' + esc(title) + I.chevron + '</h2>' +
      '<span class="fxarrows"><button type="button" class="fxarr" data-fxscroll="-1" aria-label="Previous">' + I.back + '</button>' +
      '<button type="button" class="fxarr on" data-fxscroll="1" aria-label="Next">' + I.chevron + '</button></span></div>' +
      '<div class="fxrow">' + fxCards(id).map(function (r) { return fxCard(r, id); }).join("") + '</div></section>';
  }

  /* a story card as the site draws them: picture, headline, then the tag,
     the age and the comment count in yellow along the bottom */
  function bCard(it, lead) {
    var oix = it.open ? evIxById(it.open) : -1;
    var open = oix >= 0 ? 'data-open="' + oix + '"' : it.real ? 'data-article="' + esc(it.id) + '"' : it.live ? 'data-toast="' + esc(it.tag) + ' is not built out in this prototype."'
      : it.article ? 'data-article="' + esc(it.article) + '"' : 'data-toast="This story is not built out in this prototype."';
    var isLive = it.live && (oix < 0 || evState(EVENTS[oix]).card.status === "live");
    var title = it.live && oix >= 0 && !isLive ? it.title.replace(/^Azerbaijan Grand Prix first practice$/, evState(EVENTS[oix]).card.status === "soon" ? "Azerbaijan Grand Prix first practice at 09:30" : "Azerbaijan Grand Prix first practice: the times") : it.title;
    return '<button class="bcard' + (lead ? " lead" : "") + '" type="button" ' + open + '>' +
      '<span class="bimg">' + imgTag(it.img, "", "wide") + '</span>' +
      '<span class="btitle">' + (isLive ? '<span class="blive"><i></i>LIVE</span> ' : "") + esc(title) + '</span>' +
      (lead && it.stand ? '<span class="bstand">' + esc(it.stand) + '</span>' : "") +
      '<span class="bmeta"><span class="btag">' + esc(it.tag) + '</span>' + (it.ago ? '<span class="bdot">·</span><span>' + esc(it.ago) + '</span>' : "") +
      (it.comments ? '<span class="bdot">·</span><span class="bcom">' + I.comment + esc(it.comments) + '</span>' : "") + '</span></button>';
  }

  function spAvatar(it) {
    return it.k === "creator" ? '<span class="wpav" style="background:' + it.col + '">' + esc(it.av) + '</span>'
      : '<span class="wpav bbc" aria-hidden="true"><i>B</i><i>B</i><i>C</i></span>';
  }

  /* the mixed row under the story grid: posts, clips, shorts and stories
     share one card shape, so every card in a row lines up top and bottom */
  function spItem(it, id, k) {
    if (it.k === "story" || it.k === "short") {
      var sh = it.k === "short", dd = sh ? DROP[it.play] : null;
      if (sh && !dd) { return ""; }
      var oix = it.open ? evIxById(it.open) : -1;
      var act = sh ? 'data-play="' + it.play + '"' : oix >= 0 ? 'data-open="' + oix + '"' : it.real ? 'data-article="' + esc(it.id) + '"'
        : it.article ? 'data-article="' + esc(it.article) + '"' : 'data-toast="This story is not built out in this prototype."';
      return '<button class="mxc media" type="button" ' + act + '>' +
        '<span class="mximg">' + imgTag(sh ? dd.img : it.img, sh ? dd.t : it.title, "wide") +
        (sh ? '<span class="mxplay">' + I.playtri + '</span><span class="mxdur">' + esc(dd.dur) + '</span>' : "") + '</span>' +
        '<span class="mxbody"><b class="mxtitle">' + esc(sh ? dd.t : it.title) + '</b>' +
        '<span class="mxfoot"><span class="btag">' + esc(sh ? "Short" : it.tag) + '</span><span class="bdot">·</span><span>' + esc(sh ? dd.chan : it.ago) + '</span></span></span></button>';
    }
    if (it.k === "post" || it.k === "creator") {
      return '<article class="mxc' + (it.k === "creator" ? " cr" : "") + '">' +
        '<span class="mxhead">' + spAvatar(it) + '<span class="mxwho"><b>' + esc(it.who) + '</b><small>' + esc(it.org) + ' · ' + esc(it.ago) + ' ago</small></span>' +
        '<span class="mxkind">' + (it.k === "creator" ? "Creator" : "Post") + '</span></span>' +
        '<p class="mxtext">' + esc(it.text) + '</p>' +
        '<span class="mxfoot wcact">' + likeBtn("sp:" + id + ":" + k, it.likes, "sm") +
        '<button type="button" data-sheet="comments" data-ctx="' + esc(it.ev || id) + '">' + I.comment + esc(it.comments) + '</button></span></article>';
    }
    if (it.k === "bite") {
      return '<button class="mxc" type="button" data-bite="sp' + k + '" data-title="' + esc(it.who + ": " + it.title.toLowerCase()) + '" data-dur="' + esc(it.dur) + '" data-sub="' + esc(it.sub) + '" data-desc="' + esc(it.title + ". The answer as it went out, from the programme.") + '">' +
        '<span class="mxhead"><span class="bplay">' + I.playtri + '</span><span class="mxwho"><b>' + esc(it.who) + '</b><small>' + esc(it.org) + '</small></span>' +
        '<span class="mxkind">Audio · ' + esc(it.dur) + '</span></span>' +
        '<b class="mxtitle">' + esc(it.title) + '</b>' +
        '<span class="mxfoot"><span class="btag">Answered on air</span></span></button>';
    }
    return "";
  }

  function webSport() {
    var id = S.webSport, SP = SPORTPAGES[id], ix = SP.noEvent ? -1 : evIxById(id);
    var fol = followOf(id);
    var out = '<div class="wwrap wsppage">';

    out += '<div class="bsphead"><h1>' + esc(SP.name) + '</h1>' +
      '<button class="bfollow' + (fol ? " on" : "") + '" type="button" data-wfollow="' + id + '" aria-pressed="' + fol + '">' +
      (fol ? I.tickplain + 'Following' : '<b aria-hidden="true">+</b>Follow') + '</button></div>';

    if (!SP.noEvent) {
      out += spoilBar();
      /* scores and fixtures, one row high, so the stories still start on screen */
      out += fxStrip(id, SP.sessions ? "Azerbaijan Grand Prix sessions" : "Scores & Fixtures");
    }

    /* the lead and six stories, in the site's grid */
    out += '<section class="bgrid">' + SP.top.map(function (it, k) { return bCard(it, k === 0); }).join("") + '</section>';

    if (SP.more && SP.more.length) {
      out += '<section class="wsec"><h2 class="wh2">From our journalists, the experts and creators</h2>' +
        '<div class="mxgrid">' + SP.more.map(function (it, k) { return spItem(it, id, k + 10); }).join("") + '</div></section>';
    }

    out += '<section class="wsec bmostwrap' + (ix < 0 ? " solo" : "") + '"><div class="bmost"><h2 class="wh2">Most read</h2><ol>' +
      SP.mostRead.map(function (m) {
        return '<li><button type="button" ' + (m[1] ? 'data-article="' + esc(m[1]) + '"' : 'data-toast="This story is not built out in this prototype."') + '>' + esc(m[0]) + '</button></li>';
      }).join("") + '</ol></div>' +
      (ix >= 0 ? '<button class="wbite listen" type="button" data-listenlive="' + ix + '"><span class="bplay">' + I.speaker + '</span><span class="spbtx"><span class="btag">Listen</span><b>' + esc(SP.listen[0]) + '</b><small>' + esc(SP.listen[1]) + '</small></span></button>' : "") +
      '</section></div>';
    return out;
  }

  /* My Sport on the website: what you follow, as chips you can switch, then
     a row for each, with today's scores and fixtures for the sports that
     have a live experience */
  function msSection(title, link, cards) {
    return '<section class="bmsrow"><div class="bmshead"><h2>' + (link ? '<button type="button" ' + link + '>' + esc(title) + I.chevron + '</button>' : esc(title)) + '</h2>' +
      (link ? '<button type="button" class="bmsmore" ' + link + '>View More</button>' : "") + '</div>' +
      '<div class="bgrid5">' + cards.map(function (it) { return bCard(it, false); }).join("") + '</div></section>';
  }

  function webMySport() {
    var W = WEBMYSPORT, out = '<div class="wwrap wsppage">';
    out += '<div class="bsphead"><h1>My Sport</h1></div>';
    out += '<section class="bfollowwrap"><h2 class="bmsh">What to follow</h2><div class="bchips' + (S.msMore ? " open" : "") + '">' + W.chips.map(function (c) {
      var on = followOf(c[0]);
      return '<span class="bchip"><span>' + esc(c[1]) + '</span><button type="button" data-wfollow="' + c[0] + '" aria-pressed="' + on + '" aria-label="' + (on ? "Unfollow " : "Follow ") + esc(c[1]) + '">' +
        (on ? I.tickplain : '<b aria-hidden="true">+</b>') + '</button></span>';
    }).join("") + '</div><button type="button" class="bseemore" data-msmore>' + (S.msMore ? "See less" : "See more") + I.chevron + '</button></section>';

    /* the stream of updates beside the clubs you follow, then the rest */
    var clubs = Object.keys(CLUBS).filter(function (k) { return followOf(k); }), sp = hpSplit(null);
    var keep = function (ixs) { return ixs.filter(function (i) { var h = HABIT[i]; return followOf(h.f) || msFollow(h.f); }); };
    out += '<div class="whp"><aside class="whpside">' + clubs.map(function (k) {
      return '<section class="wclub">' + clubHead(k) + '<h3>Next up</h3>' + clubFixtures(k) + '</section>';
    }).join("") + '</aside><section class="whpmain">' +
      (keep(sp.fresh).length ? '<div class="whphead"><h2>New since you last looked</h2><span>' + keep(sp.fresh).length + ' updates</span></div>' + hpBlock(keep(sp.fresh), true) : "") +
      (keep(sp.earlier).length ? '<div class="whphead"><h2>Earlier today</h2></div>' + hpBlock(keep(sp.earlier), true) : "") + '</section></div>';
    out += '<h2 class="whpmore">More from what you follow</h2>';

    /* today, across everything followed that has a live experience */
    var todays = W.chips.filter(function (c) { return followOf(c[0]) && SPORTPAGES[c[0]] && !SPORTPAGES[c[0]].noEvent; });
    if (todays.length) {
      out += '<section class="fxstrip bmstoday"><div class="fxbar"><h2>Today, from what you follow</h2>' +
        '<span class="fxarrows"><button type="button" class="fxarr" data-fxscroll="-1" aria-label="Previous">' + I.back + '</button>' +
        '<button type="button" class="fxarr on" data-fxscroll="1" aria-label="Next">' + I.chevron + '</button></span></div><div class="fxrow">' +
        todays.map(function (c) { var r = fxCards(c[0]).filter(function (x) { return x.feat; })[0]; return fxCard(r, c[0]); }).join("") + '</div></section>';
    }

    W.chips.forEach(function (c) {
      var k = c[0];
      if (!followOf(k) || CLUBS[k]) { return; }
      var SP = SPORTPAGES[k], link = SP ? 'data-sportpage="' + k + '"' : 'data-toast="' + esc(c[1]) + ' is not built out in this prototype."';
      var cards = W.rows[k] || (SP ? SP.top.slice(0, 5) : null);
      if (!cards) { return; }
      out += msSection(c[1], link, cards);
      if (SP && !SP.noEvent) {
        out += '<div class="bmsfx">' + fxStrip(k, W.fixturesTitle[k] || c[1] + " Scores & Fixtures") + '</div>';
      }
    });
    return out + '</div>';
  }

  function wireWebBar() {
    var sb = $("#scrollbody"), bar = $(".wlvbar"), anchor = $(".wfbwatch") || $(".wfbplayer") || $(".wlv") || $(".wradio"), vp = $("#viewport");
    if (!sb || !bar || !anchor) { return; }
    var pend = false;
    var check = function () {
      pend = false;
      bar.style.top = sb.offsetTop + "px";
      var stuck = sb.scrollTop > anchor.offsetTop + anchor.offsetHeight - 10;
      vp.classList.toggle("lvstuck", stuck);
      sb.style.setProperty("--lvh", stuck ? bar.offsetHeight + "px" : "0px");
    };
    sb.addEventListener("scroll", function () { if (!pend) { pend = true; requestAnimationFrame(check); } }, { passive: true });
    check();
  }

  function renderWeb() {
    var app = $("#app");
    if (S.view === "sport" && !SPORTPAGES[S.webSport]) { S.view = "home"; }
    if (S.view === "mysport" && S.surface !== "web") { S.view = "home"; }
    var url = S.view === "event" ? "bbc.co.uk/sport/" + ev().id + "/live" : S.view === "sport" ? "bbc.co.uk/sport/" + (SPORTPAGES[S.webSport].url || (S.webSport === "rugby" ? "rugby-union" : S.webSport)) : S.view === "mysport" ? "bbc.co.uk/sport/my" : "bbc.co.uk/sport";
    app.innerHTML = '<div class="web" id="viewport">' +
      '<div class="wbrowser"><span class="wdots"><i></i><i></i><i></i></span><span class="wurl">' + esc(url) + '</span></div>' +
      (S.view === "event" && ev().id === "football" && !S.lvHide ? webFbBar(ev(), evState(), masked(ev()))
        : S.view === "event" && !hasVideo(ev()) && !S.lvHide ? webLvBar(ev(), evState(), masked(ev())) : "") +
      '<div class="wscroll" id="scrollbody">' + webMast() +
      '<main class="wmain">' + (S.view === "event" ? webEvent() : S.view === "sport" ? webSport() : S.view === "mysport" ? webMySport() : '<div class="wwrap">' + webHome() + '</div>') + '</main>' +
      '<footer class="wfoot"><div class="wwrap"><span class="bbcblocks"><i>B</i><i>B</i><i>C</i></span>' +
      '<nav>' + ["Terms of Use", "About the BBC", "Privacy Policy", "Cookies", "Accessibility Help", "Contact the BBC"].map(function (n) {
        return '<a href="#" data-toast="' + esc(n) + ' is outside this prototype.">' + esc(n) + '</a>';
      }).join("") + '</nav></div></footer>' +
      '</div>' + dockHTML() + drawer() + '<div id="ovl">' + overlaysHTML() + '</div><div class="toast" id="toast" role="status"></div></div>';
    wireWebBar();
  }

  /* ==========================================================================
     iPlayer on the television
     ==========================================================================
     Ten feet away, with a remote. The telly is for watching and listening:
     the picture, a choice of commentary, a way to catch up, a glance at the
     numbers, and a sense of how many others are with you. Anything that
     needs typing, voting or scrolling is handed to the phone in the room.

     Drawn at 1280 x 720 and scaled to fit. Arrow keys move, Enter selects,
     Escape or Backspace goes back, S toggles the stats.
     ========================================================================== */

  function tvs() {
    if (!S.tv) {
      S.tv = { screen: "home", f: [0, 0], overlay: null, stats: false, audio: "bbc", subs: false,
        ev: null, mode: "live", rix: 0, rel: 0, rplay: true, rmode: "watch",
        mt: 0, mi: -1, toast: null, toastT: 0, phoneT: 0, paired: false, remind: {}, bump: 0, focus: false };
    }
    return S.tv;
  }

  function tvEvent() {
    var t = tvs();
    if (t.ev === null) { t.ev = rankedCards()[0].i; }
    return EVENTS[t.ev];
  }

  function tvWatching(e) {
    var w = watchingFor(e);
    if (!w) { return null; }
    var base = Number(String(w).replace(/[^0-9]/g, "")) || 0;
    return (base + tvs().bump).toLocaleString("en-GB");
  }

  var AUDIO_OPTS = [
    ["tv", "TV commentary", "The commentary team on the broadcast"],
    ["radio", "Radio commentary", "Synced to the picture, not twenty seconds ahead of it"],
    ["crowd", "Crowd only", "No commentary. Just the ground"],
    ["ad", "Audio described", "Commentary that describes what is on screen"]
  ];

  function radioName(e) { return e.audio.station.replace("BBC ", ""); }

  function isAudioLed(e) { return !hasVideo(e); }

  function tvBtn(r, c, act, label, cls) {
    return '<button class="tvb' + (cls ? " " + cls : "") + '" type="button" data-tvf="' + r + "," + c + '" data-tvact="' + act + '">' + label + '</button>';
  }

  /* ---- home ---- */

  function tvHome() {
    var cards = rankedCards(), top = cards[0];
    /* paired with a phone, the TV leads with the match the pair is following */
    if (S.surface === "together" && S.tv && S.tv.ev !== null) { top = cards.filter(function (x) { return x.i === S.tv.ev; })[0] || top; }
    var e = top.e, tk = tkFor(e), TK = tk.TK, T = tk.T;
    var L = lc(), isLive = L === "live" || L === "companion", w = tvWatching(e);
    var out = '<div class="tvhero">' + ((T.tvimg || T.img) ? imgTag(T.tvimg || T.img, "", "wide") : photoSVG(e.photo, "wide", e.title)) +
      '<span class="tvheroveil"></span></div>';

    out += tvSide();

    out += '<div class="tvherotext">' +
      '<p class="tvkick">' + (isLive ? '<span class="tvlive"><i></i>LIVE</span>' : L === "buildup" ? '<span class="tvsoon">' + esc(top.c.when) + '</span>' : '<span class="tvsoon">Highlights</span>') +
      '<span>' + esc(chanFor(e)) + '</span>' +
      (w && isLive ? '<span class="tvwatch">' + I.stack + esc(w) + ' watching</span>' : "") + '</p>' +
      '<h1>' + crestImg(e.id, TK.a, "tvc") + esc(TK.a) + ' <span>' + esc(T.line || "v") + '</span> ' + esc(TK.b) + crestImg(e.id, TK.b, "tvc") + '</h1>' +
      '<p class="tvsub">' + esc(e.comp) + (T.sub ? " · " + esc(T.sub) : "") + '</p>' +
      '<div class="tvbtns">' +
      (isLive
        ? tvBtn(0, 0, "watch:" + top.i, I.playtri + (isAudioLed(e) ? "Listen live" : "Watch live"), "pri") +
          (RECAPS[e.id] ? tvBtn(0, 1, "catchup:" + top.i, "Catch up in 60 seconds") : "") +
          tvBtn(0, 2, "start:" + top.i, "From the start")
        : L === "buildup"
          ? tvBtn(0, 0, "remind:" + e.id, I.bell + (tvs().remind[e.id] ? "Reminder set" : "Remind me"), "pri") +
            tvBtn(0, 1, "watch:" + top.i, I.playtri + "Watch the build-up")
          : tvBtn(0, 0, "watch:" + top.i, I.playtri + "Highlights", "pri") +
            (RECAPS[e.id] ? tvBtn(0, 1, "catchup:" + top.i, "The match in 60 seconds") : "") +
            tvBtn(0, 2, "start:" + top.i, "Full replay")) +
      '</div></div>';

    out += '<div class="tvrails"><h2>' + (isLive ? "Live now" : L === "buildup" ? "On today" : "Catch up on today") + '</h2><div class="tvrow">' +
      cards.map(function (x, k) {
        var c = x.c, xtk = tkFor(x.e), ww = tvWatching(x.e);
        var img = xtk.T.tvimg || xtk.T.img || null;
        return '<button class="tvcard" type="button" data-tvf="1,' + k + '" data-tvact="watch:' + x.i + '">' +
          '<span class="tvcimg">' + (img ? imgTag(img, "", "wide") : photoSVG(x.e.photo, "wide", x.e.title)) +
          (c.status === "live" ? '<span class="tvlive sm"><i></i>' + (isAudioLed(x.e) ? "LIVE · RADIO" : "LIVE") + '</span>' : '<span class="tvsoon sm">' + esc(c.when.split(" ·")[0]) + '</span>') +
          (c.status === "live" ? '<span class="tvprog"><i style="width:' + (40 + k * 12) + '%"></i></span>' : "") + '</span>' +
          '<b>' + esc(c.line1) + '</b><span>' + esc(c.status === "live" && ww ? ww + " watching" : c.line2) + '</span></button>';
      }).join("") + '</div>' +

      '<h2>Coming up</h2><div class="tvrow">' + COMINGUP.map(function (u, k) {
        var on = !!tvs().remind[u.id];
        return '<button class="tvcard up" type="button" data-tvf="2,' + k + '" data-tvact="remind:' + u.id + '">' +
          '<span class="tvcimg">' + imgTag(u.img, "", "wide") + '<span class="tvbell' + (on ? " on" : "") + '">' + I.bell + (on ? "Reminder set" : "Remind me") + '</span></span>' +
          '<b>' + esc(u.t) + '</b><span>' + esc(u.when) + ' · ' + esc(u.ch) + '</span></button>';
      }).join("") + '</div>' +

      '<h2>More like this</h2><div class="tvrow">' + TVMORE.map(function (m, k) {
        return '<button class="tvcard" type="button" data-tvf="3,' + k + '" data-tvact="more:' + k + '">' +
          '<span class="tvcimg">' + imgTag(m.img, "", "wide") + '</span>' +
          '<span class="tvck">' + esc(m.k) + '</span><b>' + esc(m.t) + '</b><span>' + esc(m.s) + '</span></button>';
      }).join("") + '</div></div>';
    return out;
  }

  /* iPlayer's own left rail: icons, which open out with labels when the
     remote moves left onto them */
  var TVSIDE = [["home", "Home"], ["tv", "Channels"], ["stack", "Categories"], ["search", "Search"], ["plus", "Watchlist"], ["gear", "Settings"]];
  function tvSide() {
    var t = tvs(), open = !!t.side;
    return '<nav class="tvside' + (open ? " open" : "") + '"><span class="tvsav">A</span>' +
      (open ? '<span class="tvsname">Arun</span>' : "") +
      TVSIDE.map(function (x, k) {
        var ic = x[0] === "home" ? I.nav.home : x[0] === "search" ? I.nav.search : x[0] === "tv" ? I.tv : x[0] === "stack" ? I.nav.shorts :
          x[0] === "plus" ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' : I.gear;
        return '<button type="button" class="tvsi' + (k === 0 ? " on" : "") + '" data-tvf="' + (100 + k) + ',0" data-tvact="side:' + k + '">' +
          '<i>' + ic + '</i>' + (open ? '<span>' + x[1] + '</span>' : "") + '</button>';
      }).join("") +
      '<span class="tvsbrand">' + (open ? '<b>iPLAYER</b>' : "") + '</span></nav>';
  }

  /* ---- catch up ---- */

  function tvCatchup() {
    var t = tvs(), e = tvEvent(), R = RECAPS[e.id], m = R.moments[t.rix];
    var out = "";
    if (t.rmode === "watch") {
      out += '<div class="tvfull">' + (m[3] ? imgTag(m[3], m[1], "wide") : '<span class="tvgfx k-' + esc(m[4]) + '" style="--acc:' + e.accent + '"><b>' + esc(m[0]) + '</b></span>') +
        '<span class="tvfullveil"></span></div>' +
        '<div class="tvsegs">' + R.moments.map(function (x, k) {
          return '<span class="' + (k < t.rix ? "done" : k === t.rix ? "on" : "") + '"><i' +
            (k === t.rix ? ' style="width:' + Math.min(100, t.rel / 4.5 * 100).toFixed(1) + '%"' : "") + '></i></span>';
        }).join("") + '</div>' +
        '<p class="tvcatchkick">The story so far · ' + esc(e.title) + '</p>' +
        '<div class="tvcatchtext"><span class="tvtime">' + esc(m[0]) + '</span><h1>' + esc(m[1]) + '</h1><p>' + esc(m[2]) + '</p></div>';
    } else {
      var dur = secs(R.listen), pos = Math.min(dur, t.rel), k = Math.min(R.moments.length - 1, Math.floor(pos / dur * R.moments.length));
      out += '<div class="tvfull dim">' + (T_IMG(e) ? imgTag(T_IMG(e), "", "wide") : "") + '<span class="tvfullveil heavy"></span></div>' +
        '<div class="tvlisten"><p class="tvcatchkick">Listening · ' + esc(R.voice) + '</p>' +
        '<h1>' + esc(R.moments[k][0] + " · " + R.moments[k][1]) + '</h1>' +
        '<div class="tvwave">' + waveSVG("rcpwave") + '<span class="rcpwavefill" style="clip-path:inset(0 ' + (100 - pos / dur * 100).toFixed(1) + '% 0 0)">' + waveSVG("rcpwave on") + '</span></div>' +
        '<p class="tvtimes"><span>' + mmss(Math.floor(pos)) + '</span><span>' + esc(R.listen) + '</span></p>' +
        '<p class="tvline">' + esc(R.synopsis[Math.min(R.synopsis.length - 1, Math.floor(pos / dur * R.synopsis.length))]) + '</p></div>';
    }
    out += '<div class="tvbtns bottom">' +
      tvBtn(0, 0, "skip", I.playtri + (lc() === "fulltime" ? "Watch the highlights" : "Join live"), "pri") +
      tvBtn(0, 1, "rmode", t.rmode === "watch" ? I.speaker + "Listen instead" : "Watch instead") +
      tvBtn(0, 2, "rpause", t.rplay ? "Pause" : "Play") + '</div>';
    return out;
  }

  function centreCourt(e) {
    var t = tvs();
    return e.id === "tennis" && lc() === "companion" && !t.c2;
  }

  function T_IMG(e) { var x = tkFor(e); return x.T.tvimg || x.T.img || null; }

  /* ---- the player ---- */

  function tvPlayer() {
    var t = tvs(), e = tvEvent(), tk = tkFor(e), TK = tk.TK, T = tk.T, L = lc();
    var hl = L !== "buildup" && (L === "fulltime" || t.mode === "highlights"), w = tvWatching(e);
    var audioLed = isAudioLed(e) && !hl;
    var cc = centreCourt(e);
    var pic = t.mode === "start" && t.fromImg ? t.fromImg : (T.tvimg || T.img);
    var out = '<div class="tvfull kb' + (audioLed ? " dim" : "") + (cc ? " blur" : "") + '">' + (pic ? imgTag(pic, "", "wide") : photoSVG(e.photo, "wide", e.title)) +
      '<span class="tvfullveil' + (audioLed ? " heavy" : " light") + '"></span></div>';

    /* the top line: what this is, and how many are with you */
    out += '<div class="tvtop"><p>' +
      (L === "buildup" ? '<span class="tvsoon">Build-up · ' + esc(evState(e).card.when.split(" ·")[0]) + '</span>' : hl ? '<span class="tvsoon">Highlights</span>' : t.mode === "start" ? '<span class="tvsoon">From the start</span>' : '<span class="tvlive"><i></i>LIVE</span>') +
      '<span>' + (audioLed ? esc(stationName(e)) : cc ? "BBC One" : esc(chanFor(e))) + '</span><span class="tvdim">' + (cc ? "Centre Court" : e.id === "tennis" ? "Court 2 · Raducanu v Vondroušová" : esc(e.title)) + '</span></p>' +
      (w && !hl ? '<p class="tvwatch">' + I.stack + '<b>' + esc(w) + '</b>&nbsp;watching with you</p>' : "") + '</div>';

    var tvo = voiceList(e).filter(function (x) { return x[0] === t.audio; })[0] || voiceList(e)[0];
    if (tvo && (t.audio !== "bbc" || audioLed)) {
      out += '<p class="tvaudiochip">' + (tvo[5] ? '<span class="vav" style="background:' + tvo[6] + '">' + esc(tvo[5]) + '</span>' : I.speaker) +
        esc(tvo[4] === "Watch with" || tvo[4] === "Listen with" ? tvo[4] + " " + tvo[2].replace(/ watchalong$/, "") : tvo[2]) + '</p>';
    }

    /* cricket has radio rights and no pictures here: the telly becomes a
       radio with a scoreboard, rather than a black screen */
    var ckLive = e.id === "cricket" && L !== "buildup";
    if (audioLed && !ckLive) {
      var hd = evState(e).head || {}, hrows = (hd.rows || []).slice(0, 3);
      out += '<div class="tvradio"><p class="tvcatchkick">' + I.speaker + esc(stationName(e)) + ' · listening on your TV</p>' +
        '<div class="tvtiming">' + hrows.map(function (r) {
          return '<p class="' + (r[3] ? "on" : "") + '"><span>' + esc(r[0]) + '</span><b>' + esc(masked(e) ? "" : r[1]) + '</b><small>' + esc(r[2]) + '</small></p>';
        }).join("") + '</div>' +
        '<p class="tvbatters">' + esc(hd.strap || "") + '</p>' +
        '<div class="tvwave live">' + waveSVG("rcpwave on") + '</div></div>';
    }
    if (audioLed && ckLive) {
      out += '<div class="tvradio"><p class="tvcatchkick">' + I.speaker + 'Test Match Special · listening on your TV</p>' +
        '<div class="tvscore"><div><span>Australia</span><b>372</b></div><div class="on"><span>England</span><b>284-6</b><small>89.2 overs · trail by 88</small></div></div>' +
        '<p class="tvbatters"><b>Root 121*</b> (238) &nbsp;·&nbsp; Woakes 4* (11) &nbsp;·&nbsp; New ball in 8 overs</p>' +
        '<div class="tvover">' + ["1", "•", "4", "•", "2", "•"].map(function (b, k) {
          return '<span class="' + (b === "4" ? "four" : "") + (k === 5 ? " now" : "") + '">' + b + '</span>';
        }).join("") + '</div>' +
        '<div class="tvwave live">' + waveSVG("rcpwave on") + '</div></div>';
    }

    /* the second-screen tennis story: BBC One is on Centre Court, and the
       Spine says Court 2 is the better match. On the big screen that is a
       single, dismissable suggestion with one button, not a feed */
    if (cc) {
      out += '<div class="tvradio"><p class="tvcatchkick">Centre Court · third set</p>' +
        '<div class="tvsets"><p class="on"><span>Alcaraz</span><em>7</em><em>6</em><em>2</em><i></i></p><p><span>Musetti</span><em>6</em><em>3</em><em>1</em></p></div>' +
        '<p class="tvbatters">Alcaraz serving · 30-15 · on serve all set</p></div>' +
        (t.stay ? "" : '<div class="tvspine"><p class="tvcatchkick">Worth watching now</p>' +
        '<p class="tvspinet"><b>Court 2</b><i>Break point</i></p>' +
        '<p class="tvspines">Raducanu has three break points to level the second set against Vondroušová</p>' +
        '<div class="tvbtns">' + tvBtn(0, 0, "court2", I.playtri + "Switch to Court 2", "pri") + tvBtn(0, 1, "stay", "Stay here") + '</div></div>');
    }

    /* a moment, as a lower third, then the hand-off to the phone */
    if (t.toast) {
      out += '<div class="tvl3"><span class="tvl3k">' + esc(t.toast[0]) + '</span><div><b>' + esc(t.toast[1]) + '</b><span>' + esc(t.toast[2]) + '</span></div></div>';
    }
    if (t.phoneT > 0 && !t.overlay) {
      out += '<div class="tvphone' + (t.paired ? " paired" : "") + '">' + (t.paired ? '<span class="tvphicon">' + I.phone + '</span>' : qrSVG()) + '<div><b>' + (t.paired ? "On your phone now" : "Play along on your phone") + '</b>' +
        '<span>' + (e.id === "tennis" ? "Call the next game" : e.id === "rugby" ? "Was it a try?" : e.id === "cricket" ? "Predict the next wicket" : "Rate the players") +
        ' · 3,109 playing along</span></div></div>';
    }

    if (t.stats && !hl && !cc) {
      out += '<aside class="tvstats"><p class="tvcatchkick">In numbers</p>' +
        '<p class="tvsline"><b>' + esc(TK.a) + '</b><span>' + esc(T.line || "") + '</span><b>' + esc(TK.b) + '</b></p>' +
        statBars(TK, T) +
        (e.id === "tennis" ? '<p class="tvcatchkick" style="margin-top:18px">Worth watching now</p>' +
          '<ol class="tvcourts"><li class="on"><b>Court 2</b>Raducanu v Vondroušová<i>Break point</i></li><li><b>Court 18</b>Boulter v Kalinskaya<i>Deciding set</i></li><li><b>No.1</b>Sinner v Fils<i>Serving for the match</i></li></ol>' : "") +
        '</aside>';
    }

    if (!t.overlay) {
      out += '<p class="tvhint">OK for options</p>';
    }

    if (t.overlay === "controls") {
      var R = RECAPS[e.id];
      out += '<div class="tvctrl">' +
        '<div class="tvctitle"><h2>' + esc(vName(e)) + '</h2><p>' + esc(hl ? "Highlights" : t.mode === "start" ? (t.from ? "Replaying from " + t.from : "From the start") : "Live") + ' · ' + esc(e.comp) + '</p></div>' +
        '<div class="tvbar"><span class="tvbarfill" style="width:' + (hl ? 38 : t.mode === "start" ? (t.fromPct || 6) : 100) + '%"></span>' +
        (R ? R.moments.map(function (x, k) {
          return '<span class="tvmark k-' + esc(x[4]) + '" style="left:' + ((k + 1) / (R.moments.length + 1) * 100).toFixed(1) + '%"><em>' + esc(x[0] + " " + x[1]) + '</em></span>';
        }).join("") : "") +
        (hl ? "" : '<span class="tvbarlive">' + (t.mode === "start" ? "Behind live" : "LIVE") + '</span>') + '</div>' +
        '<div class="tvbtns">' +
        (t.mode === "start" ? tvBtn(0, 0, "golive", "Jump to live", "pri") : "") +
        tvBtn(0, 1, "ov:audio", I.speaker + "Commentary") +
        tvBtn(0, 2, "subs", "Subtitles " + (t.subs ? "on" : "off")) +
        (hl ? "" : tvBtn(0, 3, "stats", "Stats " + (t.stats ? "on" : "off"))) +
        (RECAPS[e.id] && L !== "buildup" ? tvBtn(0, 4, "ov:moments", "Moments") : "") +
        (PUNDITS[e.id] ? tvBtn(0, 5, "ov:experts", "The experts") : "") +
        tvBtn(0, 7, "ov:others", "More like this") +
        tvBtn(0, 8, "ov:phone", "Play along on phone") +
        '</div></div>';
    }

    if (t.overlay === "moments" && RECAPS[e.id]) {
      var RM = RECAPS[e.id];
      out += '<div class="tvsheet"><p class="tvcatchkick">Moments</p>' +
        tvBtn(0, 0, "catchup:" + t.ev, I.playtri + "All of them in 60 seconds", "pri wide") +
        RM.moments.map(function (m, k) {
          return '<button class="tvopt withthumb k-' + esc(m[4] || "score") + '" type="button" data-tvf="' + (k + 1) + ',0" data-tvact="jump:' + k + '">' +
            '<span class="tvothumb">' + (m[3] ? imgTag(m[3], "", "wide") : "") + '<em>' + esc(m[0]) + '</em></span>' +
            '<b>' + esc(m[1]) + '</b><span>' + esc(m[2]) + '</span></button>';
        }).join("") + '</div>';
    }

    if (t.overlay === "audio") {
      var lastG = "";
      out += '<div class="tvsheet"><p class="tvcatchkick">Listen to</p>' + voiceList(e).map(function (o, k) {
        var head = o[4] !== lastG ? '<p class="tvgroup">' + esc(o[4]) + '</p>' : "";
        lastG = o[4];
        return head + '<button class="tvopt' + (t.audio === o[0] ? " sel" : "") + (o[5] ? " withav" : "") + '" type="button" data-tvf="' + k + ',0" data-tvact="audio:' + o[0] + '">' +
          (o[5] ? '<span class="vav lg" style="background:' + o[6] + '">' + esc(o[5]) + '</span>' : "") +
          '<b>' + esc(o[2]) + '</b><span>' + esc(o[3]) + '</span>' + (t.audio === o[0] ? '<i>' + I.tickplain + '</i>' : "") + '</button>';
      }).join("") + '</div>';
    }

    /* the experts, the ten-foot way: watch with one of them, or hear an
       answer that went out on air. Asking a question is for the phone */
    if (t.overlay === "experts" && PUNDITS[e.id]) {
      var PD = PUNDITS[e.id], row = 0;
      out += '<div class="tvsheet"><p class="tvcatchkick">The experts</p>' +
        PD.hosts.map(function (h) {
          var r = row++;
          return '<button class="tvopt withav" type="button" data-tvf="' + r + ',0" data-tvact="' + (h[5] ? "audio:" + h[5] : "ov:phone") + '">' +
            '<span class="vav lg" style="background:' + h[4] + '">' + esc(h[0]) + '</span><b>' + esc(h[1]) + '</b>' +
            '<span>' + esc(h[2]) + ' · ' + esc(h[3]) + '</span><em class="tvworth dim">' + (h[5] ? "Watch with" : "Ask on your phone") + '</em></button>';
        }).join("") +
        '<p class="tvgroup">Answered on air</p>' + PD.answered.map(function (a) {
          var r = row++;
          return '<button class="tvopt" type="button" data-tvf="' + r + ',0" data-tvact="answer:' + r + '">' +
            '<b>' + esc(a[0]) + '</b><span>' + esc(a[1]) + ' · ' + esc(a[2]) + '</span></button>';
        }).join("") +
        '<div class="tvask">' + qrSVG() + '<span><b>Ask a question</b>Scan to ask from your phone. The most-voted go to the studio.</span></div></div>';
    }

    if (t.overlay === "others") {
      out += '<div class="tvmore"><h2>More like this</h2><div class="tvrow">' +
        rankedCards().filter(function (x) { return x.i !== t.ev; }).map(function (x, k) {
          var xT = tkFor(x.e).T, live = x.c.status === "live";
          return '<button class="tvcard" type="button" data-tvf="0,' + k + '" data-tvact="switch:' + x.i + '">' +
            '<span class="tvcimg">' + ((xT.tvimg || xT.img) ? imgTag(xT.tvimg || xT.img, "", "wide") : photoSVG(x.e.photo, "wide", x.e.title)) +
            (live ? '<span class="tvlive sm"><i></i>LIVE</span>' : '<span class="tvsoon sm">' + esc(x.c.when.split(" \u00b7")[0]) + '</span>') + '</span>' +
            '<span class="tvck">' + esc(x.e.sport) + '</span><b>' + esc(x.c.line1) + '</b><span>' + esc(x.c.line2) + '</span></button>';
        }).join("") +
        TVMORE.map(function (m, k) {
          return '<button class="tvcard" type="button" data-tvf="0,' + (10 + k) + '" data-tvact="more:' + k + '">' +
            '<span class="tvcimg">' + imgTag(m.img, "", "wide") + '</span><span class="tvck">' + esc(m.k) + '</span><b>' + esc(m.t) + '</b><span>' + esc(m.s) + '</span></button>';
        }).join("") + '</div></div>';
    }

    if (t.overlay === "phone") {
      out += '<div class="tvsheet wide"><div class="tvpair">' + qrSVG(true) + '<div>' +
        '<p class="tvcatchkick">Scan with your phone camera</p>' +
        '<h1>Play along without covering the match</h1>' +
        '<ul><li>Predictions and polls, settled as it happens</li><li>Player ratings and the full stats</li><li>The conversation, and your mates\' calls</li></ul>' +
        '<p class="tvline">Your phone follows this TV, held back to match the picture.</p>' +
        '<div class="tvbtns">' + tvBtn(0, 0, "pair", t.paired ? "Paired" : "I've scanned it", "pri") + '</div></div></div></div>';
    }
    return out;
  }

  function qrSVG(big) {
    var n = 21, x = 97531, cells = "";
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        var finder = (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
        var on;
        if (finder) {
          var rr = r >= n - 7 ? r - (n - 7) : r, cc = c >= n - 7 ? c - (n - 7) : c;
          on = rr === 0 || rr === 6 || cc === 0 || cc === 6 || (rr > 1 && rr < 5 && cc > 1 && cc < 5);
        } else {
          x = (x * 1103515245 + 12345) & 0x7fffffff;
          on = (x >> 8) % 2 === 0;
        }
        if (on) { cells += '<rect x="' + c + '" y="' + r + '" width="1" height="1"/>'; }
      }
    }
    return '<svg class="tvqr' + (big ? " big" : "") + '" viewBox="-2 -2 25 25" aria-hidden="true"><rect x="-2" y="-2" width="25" height="25" fill="#fff"/><g fill="#000">' + cells + '</g></svg>';
  }

  function renderTV() {
    var host = $("#tvapp");
    if (!host) { return; }
    var t = tvs();
    resetUsed();
    var body = t.screen === "player" ? tvPlayer() : t.screen === "catchup" ? tvCatchup() : tvHome();
    host.innerHTML = '<span class="tvwip">Work in progress</span><div class="tv s-' + t.screen + (t.screen === "home" && t.f[0] >= 2 && t.f[0] < 100 ? " deep" : "") + (t.screen === "home" && t.f[0] === 3 ? " deeper" : "") + (t.side ? " sideopen" : "") + (t.overlay ? " ov" : "") + '">' + body + '</div>';
    tvFocus();
    $$("[data-tvact]", host).forEach(function (b) {
      b.onclick = function () {
        t.f = b.dataset.tvf.split(",").map(Number);
        t.focus = true;
        tvAct(b.dataset.tvact);
      };
    });
    fitTV();
  }

  function tvFocusables() {
    return $$("[data-tvf]", $("#tvapp")).filter(function (el) { return tvs().side || Number(el.dataset.tvf.split(",")[0]) < 100 || tvs().screen !== "home"; }).map(function (el) {
      var p = el.dataset.tvf.split(",").map(Number);
      return { el: el, r: p[0], c: p[1] };
    });
  }

  function tvFocus() {
    var t = tvs(), list = tvFocusables();
    if (!list.length) { return; }
    var hit = list.filter(function (x) { return x.r === t.f[0] && x.c === t.f[1]; })[0];
    if (!hit) {
      var row = list.filter(function (x) { return x.r === t.f[0]; });
      hit = row.length ? row.reduce(function (a, b) { return Math.abs(b.c - t.f[1]) < Math.abs(a.c - t.f[1]) ? b : a; }) : list[0];
      t.f = [hit.r, hit.c];
    }
    hit.el.classList.add("tvfocus");
    var row2 = hit.el.closest(".tvrow");
    if (row2 && row2.children.length > 1) {
      /* scroll only once the focus would leave the right-hand edge */
      var kids = [].slice.call(row2.children), ix = kids.indexOf(hit.el);
      var step = kids[1].offsetLeft - kids[0].offsetLeft;
      var vis = Math.max(1, Math.floor((row2.clientWidth - 64) / step));
      row2.scrollLeft = Math.max(0, (ix - vis + 1) * step);
    }
  }

  function tvMove(dr, dc) {
    var t = tvs(), list = tvFocusables();
    if (!list.length) { return; }
    if (t.screen === "home") {
      if (t.side) {
        if (dc > 0) { t.side = false; t.f = t.sideFrom || [0, 0]; renderTV(); return; }
        if (dc < 0) { return; }
        var sr = Math.max(100, Math.min(100 + TVSIDE.length - 1, t.f[0] + dr));
        t.f = [sr, 0]; renderTV(); return;
      }
      list = list.filter(function (x) { return x.r < 100; });
      if (dc < 0) {
        var rowL = list.filter(function (x) { return x.r === t.f[0]; }).map(function (x) { return x.c; }).sort(function (a, b) { return a - b; });
        if (rowL.indexOf(t.f[1]) <= 0) { t.side = true; t.sideFrom = t.f.slice(); t.f = [100, 0]; renderTV(); return; }
      }
    }
    if (dr) {
      var rows = list.map(function (x) { return x.r; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return a - b; });
      var ix = rows.indexOf(t.f[0]) + dr;
      if (ix < 0 || ix >= rows.length) {
        /* off the bottom of a clean player opens the controls */
        if (t.screen === "player" && !t.overlay && dr > 0) { t.overlay = "controls"; t.f = [0, 1]; renderTV(); }
        return;
      }
      t.f = [rows[ix], t.f[1]];
    } else {
      var row = list.filter(function (x) { return x.r === t.f[0]; }).map(function (x) { return x.c; }).sort(function (a, b) { return a - b; });
      var j = row.indexOf(t.f[1]) + dc;
      if (j < 0 || j >= row.length) { return; }
      t.f = [t.f[0], row[j]];
    }
    renderTV();
  }

  function tvBack() {
    var t = tvs();
    if (t.side) { t.side = false; t.f = t.sideFrom || [0, 0]; renderTV(); return; }
    if (t.overlay) { t.overlay = null; t.f = [0, 1]; }
    else if (t.screen !== "home") { t.screen = "home"; t.f = [0, 0]; t.toast = null; t.phoneT = 0; }
    renderTV();
  }

  function tvGo(screen, ix, mode) {
    var t = tvs();
    t.screen = screen;
    if (ix !== undefined && ix !== null) { t.ev = ix; }
    t.overlay = null; t.toast = null; t.phoneT = 0; t.mt = 0; t.mi = -1;
    t.mode = mode || (lc() === "fulltime" ? "highlights" : "live");
    t.f = [0, 0];
    if (screen === "catchup") { t.rix = 0; t.rel = 0; t.rplay = true; t.rmode = "watch"; }
    if (S.surface === "together" && screen === "player" && S.eventIx !== t.ev) {
      /* the phone follows the telly to the new match */
      syncPhoneTo(t.ev); render(); return;
    }
    renderTV();
  }

  function tvAct(act) {
    var t = tvs(), p = act.split(":"), k = p[0], v = p[1];
    if (k === "watch") { tvGo("player", Number(v)); return; }
    if (k === "start") { tvGo("player", Number(v), lc() === "fulltime" ? "highlights" : "start"); return; }
    if (k === "catchup") { tvGo("catchup", Number(v)); return; }
    if (k === "remind") { t.remind[v] = !t.remind[v]; if (!S.reminders) { S.reminders = {}; } S.reminders[v] = t.remind[v]; renderTV(); return; }
    if (k === "skip") { tvGo("player", t.ev); return; }
    if (k === "rmode") { t.rmode = t.rmode === "watch" ? "listen" : "watch"; t.rel = 0; t.rplay = true; renderTV(); return; }
    if (k === "rpause") { t.rplay = !t.rplay; renderTV(); return; }
    if (k === "golive") { t.mode = "live"; t.from = null; t.fromPct = null; t.fromImg = null; t.overlay = null; renderTV(); return; }
    if (k === "ov") { t.overlay = v; t.f = [0, 0]; renderTV(); return; }
    if (k === "audio") { t.audio = v; t.overlay = "controls"; t.f = [0, 1]; renderTV(); return; }
    if (k === "side") {
      var nm = TVSIDE[Number(v)][1];
      t.side = false; t.f = [0, 0];
      if (nm !== "Home") { t.toast = [nm, "Work in progress", nm + " is not built out in this prototype yet"]; t.toastT = 4; }
      renderTV(); return;
    }
    if (k === "more") {
      var mm = TVMORE[Number(v)];
      t.overlay = null; t.toast = [mm.k, mm.t, "Programme pages are not built out in this prototype yet"]; t.toastT = 5; renderTV(); return;
    }
    if (k === "jump") {
      var RJ = RECAPS[tvEvent().id], mj = RJ.moments[Number(v)];
      t.mode = "start"; t.from = mj[0] + " " + mj[1]; t.fromPct = Math.round((Number(v) + 1) / (RJ.moments.length + 1) * 100);
      t.fromImg = mj[3] || null; t.overlay = "controls"; t.f = [0, 0]; renderTV(); return;
    }
    if (k === "answer") {
      var PDa = PUNDITS[tvEvent().id], ai = Number(v) - PDa.hosts.length, an = PDa.answered[ai];
      t.overlay = null; t.toast = [an[0], "Answered on air", an[1]]; t.toastT = 7; t.phoneT = 0; renderTV(); return;
    }
    if (k === "subs") { t.subs = !t.subs; renderTV(); return; }
    if (k === "stats") { t.stats = !t.stats; renderTV(); return; }
    if (k === "switch") { tvGo("player", Number(v)); return; }
    if (k === "court2") {
      t.c2 = true; t.mt = 0; t.mi = -1; t.f = [0, 0];
      if (S.surface === "together") { phoneNudge(["", "Your telly is on Court 2", "Raducanu v Vondroušová. Break points coming up"], tvEvent()); }
      renderTV(); return;
    }
    if (k === "stay") { t.stay = true; renderTV(); return; }
    if (k === "pair") { t.paired = true; t.overlay = null; if (S.surface !== "together") { setSurface("together"); } else { renderTV(); } return; }
  }

  function tvKey(e) {
    var t = tvs(), k = e.key;
    if (k === "ArrowUp") { e.preventDefault(); tvMove(-1, 0); }
    else if (k === "ArrowDown") { e.preventDefault(); tvMove(1, 0); }
    else if (k === "ArrowLeft") { e.preventDefault(); tvMove(0, -1); }
    else if (k === "ArrowRight") { e.preventDefault(); tvMove(0, 1); }
    else if (k === "Enter" || k === " ") {
      e.preventDefault();
      if (t.screen === "player" && !t.overlay && !$("#tvapp [data-tvf]")) { t.overlay = "controls"; t.f = [0, 1]; renderTV(); return; }
      var f = $("#tvapp .tvfocus");
      if (f) { f.click(); }
    }
    else if (k === "Escape" || k === "Backspace") { e.preventDefault(); tvBack(); }
    else if (k === "s" || k === "S") { if (t.screen === "player") { t.stats = !t.stats; renderTV(); } }
  }

  /* runs on the media clock */
  function tickTV(dt) {
    if (S.surface !== "tv" && S.surface !== "together") { return; }
    var t = tvs(), e, R, redraw = false;
    if (t.screen === "catchup" && t.rplay) {
      e = tvEvent(); R = RECAPS[e.id];
      t.rel += dt;
      if (t.rmode === "watch" && t.rel >= 4.5) {
        t.rel = 0;
        if (t.rix < R.moments.length - 1) { t.rix += 1; } else { tvGo("player", t.ev); return; }
      }
      if (t.rmode === "listen" && t.rel >= secs(R.listen)) { tvGo("player", t.ev); return; }
      /* redraw only when the slide or spoken line changes; otherwise move the
         progress in place, so the text is not re-animated five times a second */
      if (t.rmode === "watch") {
        if (t.rel < dt + 0.001) { redraw = true; }
        else { var seg = $("#tvapp .tvsegs .on i"); if (seg) { seg.style.width = Math.min(100, t.rel / 4.5 * 100).toFixed(1) + "%"; } else { redraw = true; } }
      } else {
        var dur = secs(R.listen), n = R.moments.length, k = Math.min(n - 1, Math.floor(t.rel / dur * n));
        var fill = $("#tvapp .tvwave .rcpwavefill"), tm = $("#tvapp .tvtimes span");
        if (fill && k === t.lk) {
          fill.style.clipPath = "inset(0 " + (100 - Math.min(100, t.rel / dur * 100)).toFixed(1) + "% 0 0)";
          if (tm) { tm.textContent = mmss(Math.floor(t.rel)); }
        } else { t.lk = k; redraw = true; }
      }
    }
    if (t.screen === "player" && lc() !== "fulltime" && lc() !== "buildup" && t.mode !== "highlights" && !centreCourt(tvEvent())) {
      e = tvEvent();
      var list = TVMOMENTS[e.id] || [];
      t.mt += dt;
      if (Math.random() < 0.02) {
        t.bump += 1 + Math.floor(Math.random() * 9);
        var wb = $("#tvapp .tvtop .tvwatch b"), wv = tvWatching(e);
        if (wb && wv) { wb.textContent = wv; }
      }
      if (t.toastT > 0) { t.toastT -= dt; if (t.toastT <= 0) { t.toast = null; t.phoneT = 9; redraw = true; } }
      else if (t.phoneT > 0) { t.phoneT -= dt; if (t.phoneT <= 0) { redraw = true; } }
      if (t.mt >= (t.mi < 0 ? 4 : 16) && list.length) {
        t.mt = 0; t.mi = (t.mi + 1) % list.length;
        t.toast = list[t.mi]; t.toastT = 7; t.phoneT = 0;
        if (S.surface === "together") { phoneNudge(list[t.mi], e); }
        redraw = true;
      }
    }
    if (redraw) { renderTV(); }
  }

  /* ---- surfaces ---- */

  var SURFACES = [
    ["phone", "App"],
    ["web", "Website"],
    ["tv", "iPlayer TV"],
    ["together", "Multiscreen"]
  ];

  function setSurface(s) {
    /* Multiscreen notifications belong to the paired phone: clear them
       before anything else draws, so none carries over to another screen */
    if (s !== "together") { stopMultiNudges(); $$(".nudge").forEach(function (n) { n.remove(); }); }
    S.surface = s;
    if (s !== "web" && (S.view === "sport" || S.view === "mysport")) { S.view = "home"; }
    var t = tvs();
    if (s === "together") {
      multiPair();
      t.paired = true;
      t.focus = true;
    }
    if (s === "tv") { t.focus = true; }
    $$(".sf").forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.surface === s)); });
    document.body.dataset.surface = s;
    render();
    if (s === "together") { startMultiNudges(); } else { stopMultiNudges(); }
  }

  /* Multiscreen: a TV and a phone paired on one match, England v Netherlands,
     through the whole day. The TV shows what suits a room; the phone gets a
     few well-timed nudges for what suits a hand */
  function multiPair() {
    var t = tvs(), fb = evIxById("football"), L = lc();
    t.c2 = false; t.ev = fb;
    if (L === "buildup") { t.screen = "home"; t.overlay = null; t.f = [0, 0]; }
    else { t.screen = "player"; t.overlay = null; t.toast = null; t.phoneT = 0; t.mt = 0; t.mi = -1; t.mode = L === "fulltime" ? "highlights" : "live"; t.f = [0, 0]; }
    syncPhoneTo(fb);
    S.tabIx[EVENTS[fb].id + ":" + lc()] = 0;
  }

  var MULTI = {
    buildup: [
      { title: "England v Netherlands, 19:45 on your TV", body: "It's on BBC One in the living room. Your phone keeps in step with the TV from kick-off.",
        actions: [["predict", "Predict the score"], ["later", "Later"]] },
      { title: "Team news is in", body: "England have named their side. The line-ups are on your phone while the TV shows the build-up.",
        actions: [["lineups", "See the line-ups"], ["later", "Later"]] }
    ],
    companion: [
      { title: "Have your say", body: "Who has been England's best player so far? 41,000 fans have voted. The TV carries on without you missing a thing.",
        actions: [["rate", "Rate the players"], ["later", "Later"]] },
      { title: "The numbers, without covering the picture", body: "England have seven corners to one this half. The live stats are on your phone.",
        actions: [["stats", "See the stats"], ["later", "Later"]] },
    ],
    fulltime: [
      { title: "Full time. Rate the players", body: "Your TV is showing the highlights. Give your ratings before the studio gives theirs.",
        actions: [["rate", "Rate the players"], ["later", "Later"]] },
      { title: "How your predictions did", body: "Two of three right tonight, and your Predictor streak is still going.",
        actions: [["yourday", "See your night"], ["later", "Later"]] },
      { title: "Next: England v Serbia, Tuesday 19:45", body: "Predict the score now and your TV and phone will both remind you at kick-off.",
        actions: [["nextgame", "Predict and remind me"], ["later", "Later"]] }
    ]
  };

  function stopMultiNudges() { clearTimeout(S.multiT); clearTimeout(S.pushT); S.multiQ = null; S.push = null; }

  function startMultiNudges() {
    stopMultiNudges();
    if (S.surface !== "together") { return; }
    S.multiQ = (MULTI[lc()] || []).slice();
    S.multiT = setTimeout(nextMultiNudge, 1600);
  }

  function nextMultiNudge() {
    if (S.surface !== "together" || !S.multiQ || !S.multiQ.length) { return; }
    if (S.view === "event" && S.eventIx !== tvs().ev) { queueMulti(); return; }
    var n = S.multiQ.shift();
    S.push = { title: n.title, body: n.body, actions: n.actions, multi: true };
    refreshOverlays();
    clearTimeout(S.pushT);
    S.pushT = setTimeout(function () {
      if (S.push) { S.push.out = true; refreshOverlays(); setTimeout(function () { S.push = null; refreshOverlays(); queueMulti(); }, 450); }
    }, 11000);
  }

  /* one at a time, well spaced, and only while the phone is on the paired match or Home */
  function queueMulti() { clearTimeout(S.multiT); S.multiT = setTimeout(nextMultiNudge, 30000); }

  function openTab(evId, tabId) {
    var ix = evIxById(evId), e = EVENTS[ix];
    S.eventIx = ix; S.view = "event"; S.nav = "home";
    var tabs = visTabs(evState(e).tabs), k = 0;
    tabs.forEach(function (x, i) { if (x.id === tabId) { k = i; } });
    S.tabIx[e.id + ":" + lc()] = k;
    render();
    var sb = $("#scrollbody"), st = $("#stage"), tb = $("#scrollbody > .tabbar");
    if (sb && st && tb) { sb.scrollTop = st.offsetTop - tb.offsetHeight; }
  }

  function syncPhoneTo(ix) {
    if (ix === null || ix === undefined) { return; }
    S.eventIx = ix; S.view = "event"; S.nav = "home";
  }

  function phoneNudge(m, e) {
    /* only for moments worth a look, never while the phone is on another
       match, and never more than once every forty seconds */
    if (S.view === "event" && S.eventIx !== tvs().ev) { return; }
    if (/^(Corner|Drinks|Appeal)$/.test(m[1])) { return; }
    var now = Date.now();
    if (S.lastNudge && now - S.lastNudge < 40000) { return; }
    S.lastNudge = now;
    var vp = $("#app .viewport");
    if (!vp) { return; }
    var old = $(".nudge", vp);
    if (old) { old.remove(); }
    vp.insertAdjacentHTML("beforeend", '<div class="nudge" role="status"><span class="nudgek">On your telly</span>' +
      '<b>' + esc(m[1]) + '</b><span>' + esc(m[2]) + '</span></div>');
    setTimeout(function () { var n = $(".nudge", vp); if (n) { n.classList.add("out"); } }, 6000);
    setTimeout(function () { var n = $(".nudge", vp); if (n) { n.remove(); } }, 6600);
  }

  function fitTV() {
    var set = $("#tvset"), scr = $("#tvapp");
    if (!set || set.hidden || !scr) { return; }
    var avail = scr.parentNode.clientWidth;
    var sc = Math.min(1, avail / 1280);
    scr.style.transform = "scale(" + sc + ")";
    set.style.setProperty("--tvh", Math.round(720 * sc) + "px");
  }
  window.addEventListener("resize", fitTV);

  /* ------------------------------------------------------------- moves */

  function goLc(ix) {
    if (ix < 0 || ix >= LIFECYCLE.length || ix === S.lcIx) { return; }
    var dir = ix > S.lcIx ? 1 : -1;
    S.lcIx = ix;
    S.nav = "home";
    S.push = null;
    render(dir);
    if ($("#scrollbody")) { $("#scrollbody").scrollTop = 0; }
    if (S.surface === "together") { multiPair(); render(); startMultiNudges(); }
  }

  function openEvent(ix) {
    S.eventIx = ix;
    S.view = "event";
    S.nav = "home";
    render(1);
    if ($("#scrollbody")) { $("#scrollbody").scrollTop = 0; }
  }

  function attachSwipe() {
    var app = $("#app"), sx = 0, sy = 0, tracking = false;
    /* the part of the day changes only from the pills at the top. Swipes
       and arrow keys used to do it too, and fought with scrolling rails */

    document.addEventListener("keydown", function (e) {
      if (e.target.matches("input, select, textarea")) { return; }
      if (S.player === null && (S.surface === "tv" || (S.surface === "together" && tvs().focus))) { tvKey(e); return; }
      if (S.player !== null) {
        if (e.key === "Escape") { closePlayer(); }
        if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); stepClip(1); }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); stepClip(-1); }
        return;
      }
      if (e.key === "Escape" && S.view === "event") { S.view = "home"; S.nav = "home"; render(-1); }
    });
  }

  /* ------------------------------------------------------------- clocks */

  var overTick = 0;

  function startClocks() {
    setInterval(function () {
      var st = evState(), kind = st.clock;

      if (kind === "football") {
        S.dataSecs += 1;
        var hc = $("#headclock");
        if (hc && S.view === "event" && S.nav === "home") {
          hc.textContent = lc() === "companion" ? mmss(Math.max(0, S.dataSecs - S.offset)) : mmss(S.dataSecs);
        }
        var oc = $("#opta-clock");
        if (oc) { oc.textContent = lc() === "companion" ? mmss(Math.max(0, S.dataSecs - S.offset)) : mmss(S.dataSecs); }
      }

      if (kind === "rugby") {
        S.rugbySecs += 1;
        var rc = $("#headclock");
        if (rc && S.view === "event" && S.nav === "home") {
          rc.textContent = lc() === "companion" ? mmss(Math.max(0, S.rugbySecs - S.offset)) : mmss(S.rugbySecs);
        }
      }

      if (kind === "cricket") {
        overTick += 1;
        if (overTick >= 8) {
          overTick = 0;
          S.overBall += 1;
          if (S.overBall > 6) { S.overBall = 1; S.overNum += 1; }
          var sd = $("#stackdet");
          if (sd) { sd.textContent = "(" + S.overNum + "." + S.overBall + " ov) · trail by 88"; }
        }
      }

      var cd = $("#c-data"), ctv = $("#c-tv");
      if (cd) { cd.textContent = mmss(kind === "rugby" ? S.rugbySecs : S.dataSecs); }
      if (ctv) { ctv.textContent = mmss(Math.max(0, (kind === "rugby" ? S.rugbySecs : S.dataSecs) - S.offset)); }

      var cdEl = $("#cd");
      if (cdEl) {
        var left = Number(cdEl.dataset.h) * 3600 + Number(cdEl.dataset.m) * 60 + Number(cdEl.dataset.s) - 1;
        if (left < 0) { left = 0; }
        cdEl.dataset.h = Math.floor(left / 3600);
        cdEl.dataset.m = Math.floor(left % 3600 / 60);
        cdEl.dataset.s = left % 60;
        $("#cd-h").textContent = pad(Number(cdEl.dataset.h));
        $("#cd-m").textContent = pad(Number(cdEl.dataset.m));
        $("#cd-s").textContent = pad(Number(cdEl.dataset.s));
      }

      var tb = $("#tmobar");
      if (tb) {
        S.tmo += 1;
        tb.style.width = Math.min(100, S.tmo / 120 * 100) + "%";
        $("#tmotime").textContent = mmss(S.tmo);
      }

      $$(".qbar-i").forEach(function (bar) {
        var qid = bar.dataset.qid, q = S.quiz[qid];
        if (!q || q.answered !== false || q.left <= 0) { return; }
        q.left -= 1;
        bar.style.width = Math.max(0, q.left / 20 * 100) + "%";
        if (q.left <= 0) {
          q.answered = -1;
          var t = $('[data-qtally="' + qid + '"]');
          if (t) { t.textContent = "Time's up. The answer lands with the next replay."; }
        }
      });
    }, 1000);
  }

  /* ==========================================================================
     Wimbledon 100: Centre Court, any year
     ==========================================================================
     A play-along layer inside the tennis experience. Put champions from any
     year on court together, call it, watch the key points on an animated
     court drawn in the look of the era, and take a clip or a challenge link
     to social. Opened from CTAs in the tennis tabs; lives in the overlay
     container like the article reader, and draws with the app's own tokens
     so light mode and the dark app both work.

     Ratings are illustrative. The model is a point-by-point simulation,
     played 10,000 times for the headline number.
     ========================================================================== */

  var W100 = (function () {
    var KEY = "w100:v1";
    function load() { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } }
    function persist() { try { localStorage.setItem(KEY, JSON.stringify(W.saved)); } catch (e) {} }
    var W = {
      open: false, step: "home", draw: "L", a: null, b: null, active: 0, grass: "today", kit: "era",
      call: { w: null, s: null }, err: "", match: null, mc: null, fromLink: false, clipMoment: "mp",
      tl: null, clipTl: null, rec: null, recording: false,
      saved: load() || { points: 0, streak: 4, history: [], trivia: { i: 0, ans: [], done: false }, tmw: null }
    };

    var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
    var lerp = function (a, b, t) { return a + (b - a) * t; };
    var rand = function (a, b) { return a + Math.random() * (b - a); };

    /* ---- who can play ---- */
    var PLAYERS = [
      { id: "wills1927", name: "Helen Wills", short: "Wills", year: 1927, draw: "L", serve: 66, ret: 80, net: 60, wood: true },
      { id: "king1966", name: "Billie Jean King", short: "King", year: 1966, draw: "L", serve: 72, ret: 72, net: 90, wood: true },
      { id: "evert1976", name: "Chris Evert", short: "Evert", year: 1976, draw: "L", serve: 66, ret: 86, net: 54, wood: true },
      { id: "wade1977", name: "Virginia Wade", short: "Wade", year: 1977, draw: "L", serve: 74, ret: 70, net: 80, wood: true },
      { id: "navratilova1987", name: "Martina Navratilova", short: "Navratilova", year: 1987, draw: "L", serve: 80, ret: 70, net: 90, wood: false },
      { id: "graf1991", name: "Steffi Graf", short: "Graf", year: 1991, draw: "L", serve: 76, ret: 77, net: 62, wood: false },
      { id: "williams2016", name: "Serena Williams", short: "Williams", year: 2016, draw: "L", serve: 88, ret: 78, net: 58, wood: false },
      { id: "raducanu2027", name: "Emma Raducanu", short: "Raducanu", year: 2027, draw: "L", serve: 72, ret: 78, net: 56, today: true },
      { id: "vondrousova2027", name: "Markéta Vondroušová", short: "Vondroušová", year: 2027, draw: "L", serve: 70, ret: 78, net: 66, today: true },
      { id: "swiatek2027", name: "Iga Świątek", short: "Świątek", year: 2027, draw: "L", serve: 76, ret: 84, net: 56, today: true },
      { id: "cochet1927", name: "Henri Cochet", short: "Cochet", year: 1927, draw: "G", serve: 68, ret: 78, net: 86, wood: true },
      { id: "perry1936", name: "Fred Perry", short: "Perry", year: 1936, draw: "G", serve: 74, ret: 80, net: 80, wood: true },
      { id: "laver1962", name: "Rod Laver", short: "Laver", year: 1962, draw: "G", serve: 74, ret: 78, net: 90, wood: true },
      { id: "borg1980", name: "Björn Borg", short: "Borg", year: 1980, draw: "G", serve: 77, ret: 84, net: 66, wood: true },
      { id: "becker1985", name: "Boris Becker", short: "Becker", year: 1985, draw: "G", serve: 84, ret: 64, net: 82 },
      { id: "agassi1992", name: "Andre Agassi", short: "Agassi", year: 1992, draw: "G", serve: 70, ret: 88, net: 50 },
      { id: "federer2003", name: "Roger Federer", short: "Federer", year: 2003, draw: "G", serve: 82, ret: 76, net: 74 },
      { id: "murray2013", name: "Andy Murray", short: "Murray", year: 2013, draw: "G", serve: 75, ret: 85, net: 58 },
      { id: "djokovic2019", name: "Novak Djokovic", short: "Djokovic", year: 2019, draw: "G", serve: 79, ret: 88, net: 56 },
      { id: "alcaraz2027", name: "Carlos Alcaraz", short: "Alcaraz", year: 2027, draw: "G", serve: 80, ret: 86, net: 70, today: true },
      { id: "sinner2027", name: "Jannik Sinner", short: "Sinner", year: 2027, draw: "G", serve: 82, ret: 86, net: 60, today: true }
    ];
    function PL(id) { return PLAYERS.filter(function (p) { return p.id === id; })[0]; }
    var GRASS = [["1920", "1920s lawn"], ["1980", "1980s grass"], ["today", "Today's grass"]];
    var KIT = [["era", "As they played"], ["wood", "All on wood"], ["modern", "All on today's kit"]];
    function grassLabel(g) { return GRASS.filter(function (x) { return x[0] === g; })[0][1]; }
    function condLine() {
      return grassLabel(W.grass) + ", " + ({ era: "rackets as they played", wood: "everyone on wood", modern: "everyone on today's kit" })[W.kit];
    }
    function yearLabel(p) { return p.today ? "Today" : String(p.year); }

    var TRIVIA = [
      { q: "In which year did the BBC first broadcast from Wimbledon?", o: ["1922", "1927", "1937", "1946"], a: 1, x: "Radio commentary came first, in 1927. Television followed in 1937." },
      { q: "Which British woman won the Ladies' singles in the Championships' centenary year, 1977?", o: ["Sue Barker", "Ann Jones", "Virginia Wade", "Jo Durie"], a: 2, x: "Virginia Wade beat Betty Stöve in the final." },
      { q: "When did Wimbledon switch from white balls to yellow?", o: ["1972", "1980", "1986", "1995"], a: 2, x: "Yellow balls arrived in 1986." },
      { q: "Andy Murray's 2013 title was the first by a British man since which year?", o: ["1936", "1952", "1961", "1977"], a: 0, x: "Fred Perry won his third in a row in 1936." },
      { q: "The Championships moved from Worple Road to Church Road in which year?", o: ["1909", "1922", "1931", "1946"], a: 1, x: "Church Road has been home since 1922." }
    ];

    /* ---- the model ---- */
    function adj(p) {
      var s = p.serve, r = p.ret, n = p.net;
      var wood = W.kit === "wood" || (W.kit === "era" && p.wood);
      if (wood) { s -= 3; r -= 2; n += 2; }
      return { s: s, r: r, n: n };
    }
    function pServe(srv, rcv) {
      var a = adj(srv), b = adj(rcv);
      var p = (srv.draw === "L" ? 0.565 : 0.62) + (a.s - b.r) * 0.0014;
      if (W.grass === "1920") { p += 0.015 + (a.n - 65) * 0.0016; }
      else if (W.grass === "1980") { p += 0.025 + (a.n - 65) * 0.0013 + (a.s - 70) * 0.0007; }
      else { p += -0.005 - (b.r - 72) * 0.0008; }
      return clamp(p, 0.42, 0.8);
    }
    function simMatch(A, B, log) {
      var need = A.draw === "L" ? 2 : 3;
      var pS = [pServe(A, B), pServe(B, A)];
      var sets = [0, 0], setScores = [], server = Math.random() < 0.5 ? 0 : 1;
      var L = log ? [] : null, st = { sp: [0, 0], spw: [0, 0], brk: [0, 0] };
      function snap(s, w, g, pts, tb) {
        return { server: s, winner: w, sets: sets.slice(), setScores: setScores.map(function (x) { return x.slice(); }), games: g.slice(), pts: pts.slice(), tb: tb };
      }
      while (sets[0] < need && sets[1] < need) {
        var g = [0, 0], finalSet = sets[0] === need - 1 && sets[1] === need - 1, setWinner = -1;
        while (setWinner < 0) {
          if (g[0] === 6 && g[1] === 6) {
            var target = finalSet ? 10 : 7, tp = [0, 0], first = server, n = 0, tw = -1;
            while (tw < 0) {
              var s = n === 0 ? first : (Math.floor((n - 1) / 2) % 2 === 0 ? 1 - first : first);
              var w = Math.random() < pS[s] ? s : 1 - s;
              st.sp[s]++; if (w === s) { st.spw[s]++; }
              if (L) {
                var e = snap(s, w, g, tp, true);
                [0, 1].forEach(function (x) { if (tp[x] + 1 >= target && tp[x] + 1 - tp[1 - x] >= 2) { e.sp = x; if (sets[x] === need - 1) { e.mp = x; } } });
                L.push(e);
              }
              tp[w]++; n++;
              if (tp[w] >= target && tp[w] - tp[1 - w] >= 2) { tw = w; }
            }
            g[tw]++; setWinner = tw; server = 1 - first;
          } else {
            var sv = server, rc = 1 - sv, p = [0, 0], gw = -1;
            while (gw < 0) {
              var w2 = Math.random() < pS[sv] ? sv : rc;
              st.sp[sv]++; if (w2 === sv) { st.spw[sv]++; }
              if (L) {
                var gp = function (x) { return p[x] >= 3 && p[x] > p[1 - x]; };
                var e2 = snap(sv, w2, g, p, false);
                if (gp(rc)) { e2.bp = true; }
                [0, 1].forEach(function (x) { if (gp(x)) { var ng = g.slice(); ng[x]++; if (ng[x] >= 6 && ng[x] - ng[1 - x] >= 2) { e2.sp = x; if (sets[x] === need - 1) { e2.mp = x; } } } });
                L.push(e2);
              }
              p[w2]++;
              if (p[w2] >= 4 && p[w2] - p[1 - w2] >= 2) { gw = w2; }
            }
            if (gw !== sv) { st.brk[gw]++; }
            g[gw]++; server = 1 - server;
            if (g[gw] >= 6 && g[gw] - g[1 - gw] >= 2) { setWinner = gw; }
          }
        }
        sets[setWinner]++; setScores.push(g.slice());
      }
      return { winner: sets[0] > sets[1] ? 0 : 1, sets: sets, setScores: setScores, log: L, st: st };
    }
    function monteCarlo(A, B, N) {
      var wA = 0, dist = {};
      for (var i = 0; i < N; i++) {
        var m = simMatch(A, B, false);
        if (m.winner === 0) { wA++; }
        var k = m.sets[0] + "-" + m.sets[1]; dist[k] = (dist[k] || 0) + 1;
      }
      var top = Object.keys(dist).sort(function (x, y) { return dist[y] - dist[x]; })[0].split("-").map(Number);
      return { pctA: clamp(Math.round(wA / N * 100), 1, 99), likely: top };
    }
    var PT = ["0", "15", "30", "40"];
    function ptsLabel(e) {
      var p = e.pts;
      if (e.tb) { return p[0] + "-" + p[1]; }
      if (p[0] >= 3 && p[1] >= 3) { return p[0] === p[1] ? "40-40" : (p[0] > p[1] ? "Ad-40" : "40-Ad"); }
      return PT[p[0]] + "-" + PT[p[1]];
    }
    function scoreText(e) {
      var done = e.setScores.map(function (g) { return g[0] + "-" + g[1]; }).join("  ");
      return (done ? done + "  " : "") + e.games[0] + "-" + e.games[1] + (e.tb ? "  Tie-break " : "  ") + ptsLabel(e);
    }
    function finalText(m) { return m.setScores.map(function (g) { return g[0] + "-" + g[1]; }).join("  "); }
    function pickMoments(m) {
      var out = [], saved = 0;
      m.log.forEach(function (e, i) {
        if (e.mp !== undefined && e.winner === e.mp) { out.push({ i: i, kind: "mp" }); }
        else if (e.sp !== undefined && e.winner === e.sp) { out.push({ i: i, kind: e.tb ? "tbsp" : "sp" }); }
        else if (e.mp !== undefined && saved < 2) { saved++; out.push({ i: i, kind: "mpsaved" }); }
        else if (e.bp && e.winner !== e.server) { out.push({ i: i, kind: "brk" }); }
      });
      var main = out.filter(function (o) { return o.kind !== "brk"; }), brks = out.filter(function (o) { return o.kind === "brk"; });
      var room = Math.max(0, 8 - main.length), stp = brks.length / Math.max(1, room);
      for (var k = 0; k < room && k < brks.length; k++) { main.push(brks[Math.floor(k * stp)]); }
      main.sort(function (a, b) { return a.i - b.i; });
      return [{ i: 0, kind: "first" }].concat(main);
    }
    var KIND = { first: "First point", brk: "Break point", sp: "Set point", tbsp: "Tie-break, set point", mp: "Match point", mpsaved: "Match point" };

    /* ---- the court, drawn in the look of the era ---- */
    var PAL = {
      "1920": { sur: "#4d463a", c1: "#766d5b", c2: "#7f7663", line: "#ece5d2", ball: "#f2ecdd", kit: "#f4efe3", shade: "rgba(0,0,0,.28)", grain: true },
      "1980": { sur: "#34502a", c1: "#5b7a38", c2: "#638342", line: "#f3eedb", ball: "#f6f3e7", kit: "#f7f4ea", shade: "rgba(0,0,0,.3)", scan: true },
      "today": { sur: "#1b4629", c1: "#2d7a42", c2: "#338749", line: "#ffffff", ball: "#e4f03c", kit: "#ffffff", shade: "rgba(0,0,0,.32)" }
    };
    var FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';
    function geo(W0, H0, top, bottom) { return { cx: W0 / 2, top: H0 * top, bottom: H0 * bottom, wTop: W0 * 0.5, wBot: W0 * 0.86, hs: H0 * 0.42 }; }
    function proj(G, x, y, h) {
      var s = G.wTop + (G.wBot - G.wTop) * y, k = s / G.wBot;
      return { X: G.cx + (x - 0.5) * s, Y: G.top + y * (G.bottom - G.top) - (h || 0) * G.hs * k, k: k };
    }
    function drawCourt(ctx, Wd, Ht, G, pal) {
      ctx.fillStyle = pal.sur; ctx.fillRect(0, 0, Wd, Ht);
      for (var i = 0; i < 12; i++) {
        var y0 = -0.08 + i * (1.16 / 12), y1 = y0 + 1.16 / 12;
        var a = proj(G, -0.12, y0), b = proj(G, 1.12, y0), c = proj(G, 1.12, y1), d = proj(G, -0.12, y1);
        ctx.fillStyle = i % 2 ? pal.c1 : pal.c2;
        ctx.beginPath(); ctx.moveTo(a.X, a.Y); ctx.lineTo(b.X, b.Y); ctx.lineTo(c.X, c.Y); ctx.lineTo(d.X, d.Y); ctx.closePath(); ctx.fill();
      }
      var ln = function (x0, y0, x1, y1) { var p0 = proj(G, x0, y0), p1 = proj(G, x1, y1); ctx.moveTo(p0.X, p0.Y); ctx.lineTo(p1.X, p1.Y); };
      ctx.strokeStyle = pal.line; ctx.lineWidth = Math.max(1.5, Wd / 260); ctx.beginPath();
      ln(0, 0, 1, 0); ln(0, 1, 1, 1); ln(0, 0, 0, 1); ln(1, 0, 1, 1); ln(0.125, 0, 0.125, 1); ln(0.875, 0, 0.875, 1);
      ln(0.125, 0.231, 0.875, 0.231); ln(0.125, 0.769, 0.875, 0.769); ln(0.5, 0.231, 0.5, 0.769); ln(0.5, 0, 0.5, 0.02); ln(0.5, 1, 0.5, 0.98);
      ctx.stroke();
      var n0 = proj(G, -0.04, 0.5, 0.05), n1 = proj(G, 1.04, 0.5, 0.05), g0 = proj(G, -0.04, 0.5), g1 = proj(G, 1.04, 0.5);
      ctx.fillStyle = "rgba(20,20,20,.35)"; ctx.beginPath(); ctx.moveTo(g0.X, g0.Y); ctx.lineTo(g1.X, g1.Y); ctx.lineTo(n1.X, n1.Y); ctx.lineTo(n0.X, n0.Y); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = pal.line; ctx.lineWidth = Math.max(2, Wd / 200); ctx.beginPath(); ctx.moveTo(n0.X, n0.Y); ctx.lineTo(n1.X, n1.Y); ctx.stroke();
      ctx.strokeStyle = "#2a2a2a"; ctx.lineWidth = Math.max(2, Wd / 180); ctx.beginPath(); ctx.moveTo(g0.X, g0.Y); ctx.lineTo(n0.X, n0.Y); ctx.moveTo(g1.X, g1.Y); ctx.lineTo(n1.X, n1.Y); ctx.stroke();
    }
    function drawPlayer(ctx, G, pal, x, y, label, Wd) {
      var p = proj(G, x, y), sc = p.k * Wd / 720 * 1.35, fs = Math.round(15 * sc + 6);
      ctx.fillStyle = pal.shade; ctx.beginPath(); ctx.ellipse(p.X, p.Y, 16 * sc, 6 * sc, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = pal.kit; ctx.fillRect(p.X - 9 * sc, p.Y - 40 * sc, 18 * sc, 34 * sc);
      ctx.fillStyle = "#c99a7a"; ctx.beginPath(); ctx.arc(p.X, p.Y - 48 * sc, 7.5 * sc, 0, Math.PI * 2); ctx.fill();
      ctx.font = "700 " + fs + "px " + FONT; ctx.textAlign = "center";
      var tw = ctx.measureText(label).width + 12;
      ctx.fillStyle = "rgba(0,0,0,.78)"; ctx.fillRect(p.X - tw / 2, p.Y - 84 * sc - 16, tw, fs + 6);
      ctx.fillStyle = "#fff"; ctx.fillText(label, p.X, p.Y - 84 * sc - 16 + fs);
    }
    function drawBall(ctx, G, pal, b, trail, Wd) {
      var u = Wd / 720;
      trail.forEach(function (t, i) { var q = proj(G, t.x, t.y, t.h); ctx.fillStyle = pal.ball; ctx.globalAlpha = (i + 1) / trail.length * 0.35; ctx.beginPath(); ctx.arc(q.X, q.Y, 4.5 * q.k * u, 0, Math.PI * 2); ctx.fill(); });
      ctx.globalAlpha = 1;
      var g = proj(G, b.x, b.y, 0); ctx.fillStyle = pal.shade; ctx.beginPath(); ctx.ellipse(g.X, g.Y, 6 * g.k * u, 2.5 * g.k * u, 0, 0, Math.PI * 2); ctx.fill();
      var q = proj(G, b.x, b.y, b.h); ctx.fillStyle = pal.ball; ctx.beginPath(); ctx.arc(q.X, q.Y, 7 * q.k * u, 0, Math.PI * 2); ctx.fill();
    }
    function eraOverlay(ctx, Wd, Ht, pal, t) {
      if (pal.grain) {
        ctx.fillStyle = "rgba(40,30,15,.10)"; ctx.fillRect(0, 0, Wd, Ht);
        var n = Math.round(Wd * Ht / 2600), seed = Math.floor(t * 24) * 9301;
        for (var i = 0; i < n; i++) {
          seed = (seed * 9301 + 49297) % 233280; var x = seed / 233280 * Wd;
          seed = (seed * 9301 + 49297) % 233280; var y = seed / 233280 * Ht;
          ctx.fillStyle = i % 2 ? "rgba(255,248,230,.22)" : "rgba(0,0,0,.22)"; ctx.fillRect(x, y, 2, 2);
        }
        ctx.strokeStyle = "rgba(20,14,6,.55)"; ctx.lineWidth = Wd * 0.03; ctx.strokeRect(0, 0, Wd, Ht);
      }
      if (pal.scan) {
        ctx.fillStyle = "rgba(255,190,110,.07)"; ctx.fillRect(0, 0, Wd, Ht);
        ctx.fillStyle = "rgba(0,0,0,.08)"; for (var yy = 0; yy < Ht; yy += 4) { ctx.fillRect(0, yy, Wd, 1.5); }
      }
    }
    function wrapText(ctx, text, x, y, maxW, lh) {
      var words = text.split(" "), line = "", yy = y;
      words.forEach(function (w) { var t = line ? line + " " + w : w; if (ctx.measureText(t).width > maxW && line) { ctx.fillText(line, x, yy); line = w; yy += lh; } else { line = t; } });
      if (line) { ctx.fillText(line, x, yy); }
      return yy + lh;
    }
    function bbcMark(ctx, x, y, sz) {
      ctx.font = "700 " + Math.round(sz * 0.72) + "px " + FONT; ctx.textAlign = "center";
      for (var i = 0; i < 3; i++) {
        ctx.fillStyle = "#fff"; ctx.fillRect(x + i * (sz + 3), y, sz, sz);
        ctx.fillStyle = "#000"; ctx.fillText("BBC"[i], x + i * (sz + 3) + sz / 2, y + sz * 0.76);
      }
      ctx.textAlign = "left"; ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(sz * 0.95) + "px " + FONT;
      ctx.fillText("SPORT", x + 3 * (sz + 3) + sz * 0.35, y + sz * 0.82);
    }

    function makeRally(e) {
      var server = e.server, winner = e.winner, outcome = Math.random() < 0.62 ? "winner" : "error";
      var n = 1 + Math.floor(Math.random() * 6), lastHitter = outcome === "winner" ? winner : 1 - winner;
      if ((server + n - 1) % 2 !== lastHitter) { n += 1; }
      var shots = [], px = server === 0 ? 0.62 : 0.38;
      for (var k = 0; k < n; k++) {
        var hitter = (server + k) % 2, last = k === n - 1, from = { x: px, y: hitter === 0 ? 1.05 : -0.05 };
        var bx = rand(0.2, 0.8), by = k === 0 ? (hitter === 0 ? rand(0.29, 0.46) : rand(0.54, 0.71)) : (hitter === 0 ? rand(0.06, 0.34) : rand(0.66, 0.94));
        var kind = "rally";
        if (last && outcome === "error") {
          var r = Math.random();
          if (r < 0.35) { kind = "net"; by = 0.5; }
          else if (r < 0.7) { kind = "out"; bx = Math.random() < 0.5 ? rand(0.02, 0.1) : rand(0.9, 0.98); }
          else { kind = "out"; by = hitter === 0 ? rand(-0.06, -0.01) : rand(1.01, 1.06); }
        }
        if (last && outcome === "winner") { kind = "winner"; bx = Math.random() < 0.5 ? rand(0.16, 0.26) : rand(0.74, 0.84); }
        var dx = (bx - from.x) / Math.max(0.2, Math.abs(by - from.y)), endY = hitter === 0 ? -0.08 : 1.08;
        var end = { x: clamp(bx + dx * Math.abs(endY - by), -0.05, 1.05), y: endY };
        shots.push({ hitter: hitter, from: from, bounce: { x: bx, y: by }, end: end, kind: kind, dur: k === 0 ? 0.52 : (kind === "winner" ? 0.5 : 0.64), serve: k === 0 });
        px = end.x;
      }
      var acc = 0; shots.forEach(function (s) { s.t0 = acc; acc += s.dur; });
      return { shots: shots, total: acc };
    }
    function rallyState(R, t, server) {
      var pl = [{ x: server === 0 ? 0.62 : 0.5 }, { x: server === 1 ? 0.38 : 0.5 }];
      var ball = { x: server === 0 ? 0.62 : 0.38, y: server === 0 ? 1.05 : -0.05, h: 0.1 };
      if (t <= 0) { return { pl: pl, ball: ball }; }
      var prev = [pl[0].x, pl[1].x];
      for (var i = 0; i < R.shots.length; i++) {
        var s = R.shots[i], rcv = 1 - s.hitter;
        if (t < s.t0 + s.dur || i === R.shots.length - 1) {
          var u = clamp((t - s.t0) / s.dur, 0, 1.6), b, BU = 0.72;
          if (s.kind === "net") {
            var uu = Math.min(u, 1);
            b = { x: lerp(s.from.x, s.bounce.x, uu), y: lerp(s.from.y, 0.5, uu), h: Math.sin(Math.PI * uu * 0.5) * 0.06 + (1 - uu) * 0.08 };
            if (u >= 1) { b.h = Math.max(0, 0.04 - (u - 1) * 0.1); }
          } else if (u < BU) {
            var v = u / BU;
            b = { x: lerp(s.from.x, s.bounce.x, v), y: lerp(s.from.y, s.bounce.y, v), h: (s.serve ? 0.16 : 0) * (1 - v) + Math.sin(Math.PI * v) * (s.serve ? 0.08 : 0.2) };
          } else {
            var v2 = Math.min((u - BU) / (1 - BU), 1.8), f = s.kind === "out" ? 0.5 : 1;
            b = { x: lerp(s.bounce.x, s.end.x, v2 * f), y: lerp(s.bounce.y, s.end.y, v2 * f), h: Math.max(0, Math.sin(Math.PI * Math.min(v2, 1)) * 0.07) };
          }
          var reach = s.kind === "winner" ? 0.45 : 1;
          pl[rcv].x = lerp(prev[rcv], lerp(prev[rcv], s.end.x, reach), clamp(u, 0, 1));
          pl[s.hitter].x = lerp(prev[s.hitter], 0.5, clamp(u, 0, 1) * 0.5);
          return { pl: pl, ball: b };
        }
        prev[rcv] = s.end.x; prev[s.hitter] = lerp(prev[s.hitter], 0.5, 0.5);
        pl[0].x = prev[0]; pl[1].x = prev[1];
      }
      return { pl: pl, ball: ball };
    }
    function Timeline(canvas, segs, opts) {
      var ctx = canvas.getContext("2d"), start = 0, raf = 0, paused = false, pausedAt = 0, lastSeg = -1;
      var total = segs.reduce(function (a, s) { return a + s.dur; }, 0);
      function draw(t) {
        var acc = 0;
        for (var i = 0; i < segs.length; i++) {
          var s = segs[i];
          if (t < acc + s.dur || i === segs.length - 1) {
            s.render(ctx, canvas.width, canvas.height, t - acc);
            if (opts.onSeg && lastSeg !== i) { lastSeg = i; opts.onSeg(i); }
            return;
          }
          acc += s.dur;
        }
      }
      function frame(now) {
        if (paused) { return; }
        if (!canvas.isConnected) { paused = true; return; }
        var t = (now - start) / 1000;
        if (t >= total) {
          if (opts.loop) { start = now; t = 0; }
          else { draw(total - 0.001); paused = true; if (opts.onEnd) { opts.onEnd(); } return; }
        }
        draw(t); raf = requestAnimationFrame(frame);
      }
      return {
        total: total,
        play: function () { cancelAnimationFrame(raf); paused = false; start = performance.now() - pausedAt * 1000; raf = requestAnimationFrame(frame); },
        restart: function () { pausedAt = 0; lastSeg = -1; this.play(); },
        pause: function () { paused = true; cancelAnimationFrame(raf); pausedAt = (performance.now() - start) / 1000; },
        stop: function () { paused = true; cancelAnimationFrame(raf); },
        drawAt: function (t) { draw(t); },
        isPaused: function () { return paused; }
      };
    }
    function rallySeg(m, mom, A, B, pal, layout) {
      var e = m.log[mom.i], R = makeRally(e), next = m.log[mom.i + 1];
      var after = next ? scoreText(next) : finalText(m), label = KIND[mom.kind], wn = e.winner === 0 ? A.short : B.short;
      var afterLabel = { first: "Point " + wn, brk: "Break " + wn, sp: "Set " + wn, tbsp: "Set " + wn, mp: "Game, set and match", mpsaved: "Saved by " + wn }[mom.kind];
      var pre = 0.6, post = 1.1, trail = [];
      return {
        dur: pre + R.total + post,
        meta: { label: label, score: scoreText(e) },
        render: function (ctx, Wd, Ht, t) {
          var G = layout.geo(Wd, Ht), rs = rallyState(R, t - pre, e.server), inPlay = t < pre + R.total;
          drawCourt(ctx, Wd, Ht, G, pal);
          if (t > pre) { trail.push({ x: rs.ball.x, y: rs.ball.y, h: rs.ball.h }); if (trail.length > 7) { trail.shift(); } } else { trail.length = 0; }
          drawPlayer(ctx, G, pal, rs.pl[1].x, -0.06, B.short, Wd);
          if (t < pre + R.total + 0.4) { drawBall(ctx, G, pal, rs.ball, trail, Wd); }
          drawPlayer(ctx, G, pal, rs.pl[0].x, 1.06, A.short, Wd);
          eraOverlay(ctx, Wd, Ht, pal, t);
          layout.chrome(ctx, Wd, Ht, inPlay ? label : afterLabel, inPlay ? scoreText(e) : after);
        }
      };
    }

    /* the watch view, 4:5 */
    var WATCH = {
      geo: function (Wd, Ht) { return geo(Wd, Ht, 0.24, 0.8); },
      chrome: function (ctx, Wd, Ht, label, score) {
        var A = PL(W.a), B = PL(W.b);
        ctx.fillStyle = "rgba(0,0,0,.84)"; ctx.fillRect(0, 0, Wd, Ht * 0.085);
        ctx.fillStyle = "#fff"; ctx.textAlign = "left"; ctx.font = "800 " + Math.round(Ht * 0.034) + "px " + FONT;
        ctx.fillText(A.short + " v " + B.short, Wd * 0.04, Ht * 0.055);
        ctx.textAlign = "right"; ctx.font = "700 " + Math.round(Ht * 0.021) + "px " + FONT; ctx.fillStyle = "#C4C4C4";
        ctx.fillText(grassLabel(W.grass).toUpperCase(), Wd * 0.96, Ht * 0.053);
        var bh = Ht * 0.13, by = Ht - bh - Ht * 0.03;
        ctx.fillStyle = "rgba(0,0,0,.88)"; ctx.fillRect(Wd * 0.04, by, Wd * 0.92, bh);
        ctx.fillStyle = "#FFD230"; ctx.fillRect(Wd * 0.04, by, Wd * 0.012, bh);
        ctx.textAlign = "left"; ctx.fillStyle = "#FFD230"; ctx.font = "800 " + Math.round(Ht * 0.034) + "px " + FONT;
        ctx.fillText(label, Wd * 0.08, by + bh * 0.44);
        ctx.fillStyle = "#fff"; ctx.font = "500 " + Math.round(Ht * 0.026) + "px " + FONT;
        ctx.fillText(score, Wd * 0.08, by + bh * 0.8);
      }
    };
    /* the clip, 9:16 */
    var CLIP = {
      geo: function (Wd, Ht) { return geo(Wd, Ht, 0.3, 0.72); },
      chrome: function (ctx, Wd, Ht, label, score) { clipChrome(ctx, Wd, Ht); clipCaption(ctx, Wd, Ht, label, score); }
    };
    function clipChrome(ctx, Wd, Ht) {
      var A = PL(W.a), B = PL(W.b);
      ctx.fillStyle = "#000"; ctx.fillRect(0, 0, Wd, Ht * 0.22); ctx.fillRect(0, Ht * 0.8, Wd, Ht * 0.2);
      ctx.fillStyle = "#FFD230"; ctx.fillRect(0, Ht * 0.22 - 6, Wd, 6);
      ctx.textAlign = "left"; ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(Wd * 0.085) + "px " + FONT;
      ctx.fillText(A.short, Wd * 0.07, Ht * 0.09);
      ctx.fillStyle = "#C4C4C4"; ctx.font = "500 " + Math.round(Wd * 0.04) + "px " + FONT; ctx.fillText(yearLabel(A), Wd * 0.07, Ht * 0.118);
      ctx.textAlign = "right"; ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(Wd * 0.085) + "px " + FONT; ctx.fillText(B.short, Wd * 0.93, Ht * 0.165);
      ctx.fillStyle = "#C4C4C4"; ctx.font = "500 " + Math.round(Wd * 0.04) + "px " + FONT; ctx.fillText(yearLabel(B), Wd * 0.93, Ht * 0.193);
      ctx.textAlign = "center"; ctx.fillStyle = "#8E8E8E"; ctx.font = "500 " + Math.round(Wd * 0.045) + "px " + FONT; ctx.fillText("v", Wd / 2, Ht * 0.135);
      bbcMark(ctx, Wd * 0.07, Ht * 0.9, Math.round(Wd * 0.045));
      ctx.textAlign = "right"; ctx.fillStyle = "#FFD230"; ctx.font = "800 " + Math.round(Wd * 0.048) + "px " + FONT; ctx.fillText("Wimbledon 100", Wd * 0.93, Ht * 0.933);
      ctx.textAlign = "left"; ctx.fillStyle = "#C4C4C4"; ctx.font = "500 " + Math.round(Wd * 0.034) + "px " + FONT; ctx.fillText(condLine(), Wd * 0.07, Ht * 0.968);
    }
    function clipCaption(ctx, Wd, Ht, label, score) {
      var y = Ht * 0.815;
      ctx.textAlign = "left"; ctx.fillStyle = "#FFD230"; ctx.font = "800 " + Math.round(Wd * 0.066) + "px " + FONT; ctx.fillText(label, Wd * 0.07, y + Wd * 0.06);
      ctx.fillStyle = "#fff"; ctx.font = "500 " + Math.round(Wd * 0.042) + "px " + FONT; ctx.fillText(score, Wd * 0.07, y + Wd * 0.12);
    }
    function clipSegments() {
      var A = PL(W.a), B = PL(W.b), m = W.match, pal = PAL[W.grass], mc = W.mc, moms = pickMoments(m), mom = moms[moms.length - 1];
      if (W.clipMoment === "brk") { var bk = moms.filter(function (x) { return x.kind === "brk" || x.kind === "mpsaved"; }); if (bk.length) { mom = bk[bk.length - 1]; } }
      var winner = m.winner === 0 ? A : B, pct = mc ? (m.winner === 0 ? mc.pctA : 100 - mc.pctA) : null;
      var intro = { dur: 1.7, render: function (ctx, Wd, Ht, t) {
        drawCourt(ctx, Wd, Ht, CLIP.geo(Wd, Ht), pal); eraOverlay(ctx, Wd, Ht, pal, t);
        ctx.fillStyle = "rgba(0,0,0," + (0.86 - Math.min(t, 1) * 0.2) + ")"; ctx.fillRect(0, 0, Wd, Ht);
        ctx.textAlign = "left"; ctx.fillStyle = "#FFD230"; ctx.font = "800 " + Math.round(Wd * 0.05) + "px " + FONT; ctx.fillText("CENTRE COURT, ANY YEAR", Wd * 0.07, Ht * 0.3);
        ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(Wd * 0.12) + "px " + FONT; ctx.fillText(A.short, Wd * 0.07, Ht * 0.4);
        ctx.fillStyle = "#8E8E8E"; ctx.font = "500 " + Math.round(Wd * 0.06) + "px " + FONT; ctx.fillText("v", Wd * 0.07, Ht * 0.46);
        ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(Wd * 0.12) + "px " + FONT; ctx.fillText(B.short, Wd * 0.07, Ht * 0.54);
        ctx.fillStyle = "#C4C4C4"; ctx.font = "500 " + Math.round(Wd * 0.045) + "px " + FONT; wrapText(ctx, condLine(), Wd * 0.07, Ht * 0.62, Wd * 0.86, Wd * 0.06);
        clipChrome(ctx, Wd, Ht);
      } };
      var outro = { dur: 2.4, render: function (ctx, Wd, Ht) {
        ctx.fillStyle = "#0D0D0D"; ctx.fillRect(0, 0, Wd, Ht);
        ctx.textAlign = "left"; ctx.fillStyle = "#FFD230"; ctx.font = "800 " + Math.round(Wd * 0.05) + "px " + FONT; ctx.fillText("THE NUMBERS SAY", Wd * 0.07, Ht * 0.3);
        ctx.fillStyle = "#fff"; ctx.font = "800 " + Math.round(Wd * 0.1) + "px " + FONT;
        var y = wrapText(ctx, winner.short + " wins " + (pct === null ? "" : pct + " of 100"), Wd * 0.07, Ht * 0.38, Wd * 0.86, Wd * 0.115);
        ctx.fillStyle = "#C4C4C4"; ctx.font = "500 " + Math.round(Wd * 0.045) + "px " + FONT;
        y = wrapText(ctx, "across 10,000 matches in these conditions.", Wd * 0.07, y + Wd * 0.01, Wd * 0.86, Wd * 0.06);
        ctx.fillStyle = "#fff"; ctx.font = "700 " + Math.round(Wd * 0.05) + "px " + FONT;
        wrapText(ctx, "Think you know better? Call it yourself on BBC Sport.", Wd * 0.07, y + Wd * 0.08, Wd * 0.86, Wd * 0.065);
        clipChrome(ctx, Wd, Ht);
      } };
      return [intro, rallySeg(m, mom, A, B, pal, CLIP), outro];
    }

    /* ---- markup, in the app's own components ---- */
    function splitW(a, b, pa, chosen) {
      var lead = pa >= 50 ? a : b, lp = pa >= 50 ? pa : 100 - pa;
      return '<div class="splitbar"><div class="sblabs"><span class="' + (chosen === 0 ? "me" : "") + '">' + esc(a) + (chosen === 0 ? " · your call" : "") + '</span>' +
        '<span class="' + (chosen === 1 ? "me" : "") + '">' + esc(b) + (chosen === 1 ? " · your call" : "") + '</span></div>' +
        '<div class="sbtrack"><i class="a' + (chosen === 0 ? " me" : "") + '" style="width:' + pa + '%"></i><i class="b' + (chosen === 1 ? " me" : "") + '" style="width:' + (100 - pa) + '%"></i></div>' +
        '<p class="sbline"><b>' + lp + ' in 100</b> for ' + esc(lead) + '</p></div>';
    }
    function stepsBar() {
      var S2 = ["pick", "call", "watch", "result", "clip"], ix = S2.indexOf(W.step);
      return '<div class="w1steps" aria-hidden="true">' + S2.map(function (s, i) { return '<i class="' + (i <= ix ? "on" : "") + '"></i>'; }).join("") + '</div>';
    }
    function mu(A, B, sub) {
      return '<div class="w1mu"><div><b>' + esc(A.name) + '</b><span>' + (A.today ? "On court today" : A.year + " champion") + '</span></div><i>v</i>' +
        '<div class="r"><b>' + esc(B.name) + '</b><span>' + (B.today ? "On court today" : B.year + " champion") + '</span></div></div>' +
        (sub ? '<p class="w1cond">' + esc(sub) + '</p>' : "");
    }
    function sec(h, meta, inner, rule) {
      return '<section class="section">' + (rule ? '<div class="rule-y"></div>' : "") + (h ? '<div class="sechead"><h2>' + esc(h) + '</h2>' + (meta ? '<span class="meta">' + esc(meta) + '</span>' : "") + '</div>' : "") + inner + '</section>';
    }
    function trivia() {
      var T = W.saved.trivia;
      if (T.done) {
        var sc = T.ans.filter(function (a, i) { return a === TRIVIA[i].a; }).length;
        return '<div class="c"><p class="q">You scored ' + sc + ' out of 5</p><p class="tally">' +
          (sc >= 4 ? "Centre Court would be proud." : sc >= 2 ? "Respectable. A few for the scrapbook." : "Plenty of history left to find.") + ' Tomorrow\'s five arrive at 8am.</p>' +
          '<button class="btn block" type="button" data-w1="trivia-again" style="margin-top:12px">Play today\'s five again</button></div>';
      }
      var q = TRIVIA[T.i], got = T.ans[T.i] !== undefined;
      return '<div class="c"><div class="w1qhead"><span>Question ' + (T.i + 1) + ' of 5</span></div><p class="q">' + esc(q.q) + '</p><div class="opts two">' +
        q.o.map(function (o, k) {
          var cls = "optbtn" + (got && k === q.a ? " w1right" : got && k === T.ans[T.i] ? " w1wrong" : "");
          return '<button class="' + cls + '" type="button" data-w1="trivia" data-v="' + k + '"' + (got ? " disabled" : "") + '>' + esc(o) + '</button>';
        }).join("") + '</div>' +
        (got ? '<p class="tally"><b class="w1b">' + (T.ans[T.i] === q.a ? "Right. Plus 5 points." : "Not quite.") + '</b> ' + esc(q.x) + '</p>' +
          '<button class="btn solid block" type="button" data-w1="trivia-next" style="margin-top:12px">' + (T.i < 4 ? "Next question" : "See your score") + '</button>' : "") + '</div>';
    }
    function homeHTML() {
      var H = W.saved.history, tm = W.saved.tmw;
      var TMW = [["murray2013,perry1936,today,era", "Murray 2013 v Perry 1936", 44], ["navratilova1987,williams2016,1980,era", "Navratilova 1987 v Williams 2016", 31], ["borg1980,federer2003,1980,era", "Borg 1980 v Federer 2003", 25]];
      var out = '<figure class="arhero w1hero">' + imgTag("ar-court", "Two players in long whites on the old Worple Road courts", "wide") +
        '<figcaption>Anthony Wilding and Josiah Ritchie at Worple Road, before the Championships moved to Church Road in 1922.</figcaption></figure>' +
        '<div class="arbody w1intro"><p class="arkicker">Wimbledon 100</p><h1>Centre Court, any year</h1>' +
        '<p>A century of the BBC at the Championships. Put champions from any year on court together, make your call, and watch how it plays out on the grass of their day.</p>' +
        '<div class="w1pts"><span>Your Wimbledon 100 points</span><b>' + W.saved.points + '</b><span>Streak ' + W.saved.streak + ' days</span></div></div>';
      var ev0 = lc(), motd = ev0 === "fulltime" ? ["raducanu2027", "vondrousova2027", "1980", "wood"] : ["wade1977", "raducanu2027", "1980", "era"];
      var mA = PL(motd[0]), mB = PL(motd[1]);
      out += sec(ev0 === "fulltime" ? "Rewrite it" : "Match-up of the day", ev0 === "fulltime" ? "Today's Court 2, in 1980" : "Wade v Raducanu", '<div class="c w1motd">' + mu(mA, mB,
        ev0 === "fulltime" ? "Same two players, 1980s grass, everyone on wooden rackets. Does it go the same way?" : "Britain's champion in the centenary year against Britain's player on Court 2 today. 1980s grass, rackets as they played.") +
        '<button class="btn solid block" type="button" data-w1="preset" data-m="' + motd.join(",") + '">Make your call</button></div>', true);
      out += sec("Make your own", "Two draws, 21 players", '<button class="btn solid block" type="button" data-w1="new">Pick two players</button>' +
        '<p class="note">Champions from 1927 to 2019, and today\'s players. Change the grass and the rackets and see the result move.</p>');
      if (H.length) {
        out += sec("Your match-ups", "Tap to play again", '<div class="w1hist">' + H.slice(0, 4).map(function (h) {
          var A = PL(h.a), B = PL(h.b);
          return '<button type="button" data-w1="preset" data-m="' + [h.a, h.b, h.grass, h.kit].join(",") + '"><b>' + esc(A.short + " v " + B.short) + '</b><span>' + esc(h.w + " " + h.pct + " of 100") + '</span>' + I.chevron + '</button>';
        }).join("") + '</div>');
      }
      out += sec("Daily five", "100 years in five questions", trivia());
      out += sec("Pick tomorrow's match-up", tm ? "Counted" : "The winner opens tomorrow", '<div class="c"><p class="q">Which one should open tomorrow?</p>' +
        (tm === null || tm === undefined ? '<div class="opts">' + TMW.map(function (o, i) { return '<button class="optbtn" type="button" data-w1="tmw" data-v="' + i + '">' + esc(o[1]) + '</button>'; }).join("") + '</div>'
          : resultRows(TMW.map(function (o) { return o[1]; }), TMW.map(function (o) { return o[2]; }), tm) + '<p class="tally">Counted. It opens tomorrow at 8am.</p>') + '</div>');
      out += sec("From the archive", "Relive it, then replay it", '<div class="w1arch">' +
        '<button class="feat compact" type="button" data-w1="preset" data-m="agassi1992,djokovic2019,today,era"><span class="fimg">' + imgTag("bb-agassi", "", "square") + '</span>' +
        '<span class="ftx"><small>1992</small><b>Agassi wins Wimbledon, his first major</b><span>Put him on court with Djokovic</span></span></button>' +
        '<button class="feat compact" type="button" data-w1="preset" data-m="perry1936,murray2013,today,era"><span class="fimg">' + imgTag("ar-debut", "", "square") + '</span>' +
        '<span class="ftx"><small>1936 and 2013</small><b>Perry, then the 77-year wait</b><span>Perry v Murray, on today\'s grass</span></span></button></div>');
      out += '<p class="note w1foot">Ratings are illustrative for the prototype, not the model.</p>';
      return out;
    }
    function pickHTML() {
      var pool = PLAYERS.filter(function (p) { return p.draw === W.draw; });
      var champs = pool.filter(function (p) { return !p.today; }), today = pool.filter(function (p) { return p.today; });
      var chip = function (p) {
        var on = p.id === W.a || p.id === W.b;
        return '<button class="w1chip' + (p.today ? " today" : "") + '" type="button" data-w1="pick" data-v="' + p.id + '" aria-pressed="' + on + '">' + esc(p.short) + '<small>' + yearLabel(p) + '</small></button>';
      };
      var slot = function (i) {
        var p = PL(i === 0 ? W.a : W.b);
        return '<button class="w1slot" type="button" data-w1="slot" data-v="' + i + '" aria-pressed="' + (W.active === i) + '"><small>Player ' + (i === 0 ? "one" : "two") + '</small>' +
          (p ? '<b>' + esc(p.name) + '</b><span>' + (p.today ? "On court today" : p.year + " champion") + '</span>' : '<span>Tap a name below</span>') + '</button>';
      };
      var seg = function (list, key) { return '<div class="w1seg">' + list.map(function (o) { return '<button class="optbtn" type="button" data-w1="cond" data-k="' + key + '" data-v="' + o[0] + '" aria-pressed="' + (W[key] === o[0]) + '">' + esc(o[1]) + '</button>'; }).join("") + '</div>'; };
      return '<div class="w1pad">' + stepsBar() + '<h1 class="w1h1">Put two players on court</h1>' +
        '<div class="opts two"><button class="optbtn" type="button" data-w1="draw" data-v="L" aria-pressed="' + (W.draw === "L") + '">Ladies\' singles</button><button class="optbtn" type="button" data-w1="draw" data-v="G" aria-pressed="' + (W.draw === "G") + '">Gentlemen\'s singles</button></div>' +
        '<div class="w1slots">' + slot(0) + slot(1) + '</div>' +
        '<p class="w1lab">Champions, by the year they won</p><div class="w1chips">' + champs.map(chip).join("") + '</div>' +
        '<p class="w1lab">On court today</p><div class="w1chips">' + today.map(chip).join("") + '</div>' +
        '<p class="w1lab">The grass</p>' + seg(GRASS, "grass") + '<p class="w1lab">The rackets</p>' + seg(KIT, "kit") +
        '<button class="btn solid block" type="button" data-w1="to-call"' + (W.a && W.b ? "" : " disabled") + ' style="margin-top:18px">Make your call</button>' +
        '<p class="note">Ratings are illustrative for the prototype, not the model.</p></div>';
    }
    function callHTML() {
      var A = PL(W.a), B = PL(W.b), sets = A.draw === "L" ? [2, 3] : [3, 4, 5];
      return '<div class="w1pad">' + stepsBar() +
        (W.fromLink ? '<div class="w1banner">Someone sent you this match-up. Make your call before you see how it goes.</div>' : "") +
        '<div class="c w1motd">' + mu(A, B, condLine()) + '</div>' +
        '<p class="w1lab">Who wins?</p><div class="opts two">' +
        '<button class="optbtn" type="button" data-w1="call-w" data-v="0" aria-pressed="' + (W.call.w === 0) + '">' + esc(A.short) + '</button>' +
        '<button class="optbtn" type="button" data-w1="call-w" data-v="1" aria-pressed="' + (W.call.w === 1) + '">' + esc(B.short) + '</button></div>' +
        '<p class="w1lab">In how many sets?</p><div class="w1seg' + (sets.length === 2 ? " two" : "") + '">' + sets.map(function (n) {
          return '<button class="optbtn" type="button" data-w1="call-s" data-v="' + n + '" aria-pressed="' + (W.call.s === n) + '">' + n + ' sets</button>';
        }).join("") + '</div>' +
        (W.err ? '<p class="w1err" role="alert">' + esc(W.err) + '</p>' : "") +
        '<button class="btn solid block" type="button" data-w1="lock" style="margin-top:18px">Lock it in and play</button>' +
        '<button class="btn block" type="button" data-w1="to-pick" style="margin-top:10px">Change the match-up</button></div>';
    }
    function watchHTML() {
      return '<div class="w1pad">' + stepsBar() +
        '<div class="w1stage"><canvas id="w1watch" width="720" height="900" role="img" aria-label="Animated court showing the key points of the simulated match"></canvas></div>' +
        '<p class="w1sr" id="w1live" aria-live="polite"></p>' +
        '<div class="opts two" style="margin-top:12px"><button class="optbtn w1ctr" type="button" data-w1="pause" id="w1pause">' + I.pause + 'Pause</button>' +
        '<button class="optbtn w1ctr" type="button" data-w1="to-result">Skip to the result</button></div>' +
        '<p class="note">' + (W.grass === "today" ? "BBC commentary would play over these points." : "BBC archive commentary from the era would play over these points.") + '</p></div>';
    }
    function resultHTML() {
      var A = PL(W.a), B = PL(W.b), m = W.match, mc = W.mc, win = m.winner === 0 ? A : B, lose = m.winner === 0 ? B : A;
      var tot = m.sets[0] + m.sets[1], rw = W.call.w === m.winner, rs = rw && W.call.s === tot;
      var sv = function (i) { return m.st.sp[i] ? Math.round(m.st.spw[i] / m.st.sp[i] * 100) + "%" : "-"; };
      var pv = function (i) { return m.st.sp[i] ? m.st.spw[i] / m.st.sp[i] : 0; };
      var share = function (x, y) { return x + y ? Math.round(x / (x + y) * 100) : 50; };
      var likely = mc ? (mc.likely[0] > mc.likely[1] ? mc.likely[0] + "-" + mc.likely[1] + " to " + A.short : mc.likely[1] + "-" + mc.likely[0] + " to " + B.short) : "";
      return '<div class="w1pad">' + stepsBar() + '<p class="w1lab" style="margin-top:0">The match you watched</p>' +
        '<h1 class="w1h1">' + esc(win.name) + ' beats ' + esc(lose.short) + ' ' + Math.max(m.sets[0], m.sets[1]) + '-' + Math.min(m.sets[0], m.sets[1]) + '</h1>' +
        '<p class="w1score">' + esc(finalText(m)) + '</p>' +
        '<div class="c w1verdict' + (rw ? " good" : "") + '"><p class="q">' + (rw && rs ? "Spot on. Right winner, right sets." : rw ? "Right winner, wrong number of sets." : "Not this time. It went the other way.") + '</p>' +
        '<p class="tally" style="margin-top:4px">' + (rw ? "Plus " + (rs ? 15 : 10) + " points" : "No points this time") + '</p></div>' +
        '<p class="w1lab">Across 10,000 matches in these conditions</p><div class="c">' +
        (mc ? splitW(A.short, B.short, mc.pctA, W.call.w) + '<p class="tally">Most likely score: ' + esc(likely) + '</p>' : '<p class="tally">Running 10,000 matches…</p>') +
        '</div><p class="w1lab">In this match</p><div class="w1names"><span>' + esc(A.short) + '</span><span>' + esc(B.short) + '</span></div>' +
        P.stats({ rows: [[sv(0), "Serve points won", sv(1), share(pv(0), pv(1))], [String(m.st.brk[0]), "Breaks of serve", String(m.st.brk[1]), share(m.st.brk[0], m.st.brk[1])]] }) +
        '<button class="btn solid block" type="button" data-w1="to-clip" style="margin-top:18px">Make a clip</button>' +
        '<button class="btn block" type="button" data-w1="copylink" style="margin-top:10px">Copy challenge link</button>' +
        '<div class="opts two" style="margin-top:10px"><button class="optbtn" type="button" data-w1="rewatch">Watch again</button><button class="optbtn" type="button" data-w1="to-pick">Change conditions</button></div></div>';
    }
    function clipHTML() {
      var moms = pickMoments(W.match), hasBrk = moms.some(function (x) { return x.kind === "brk" || x.kind === "mpsaved"; });
      var canRec = !!(window.MediaRecorder && HTMLCanvasElement.prototype.captureStream);
      var rec = "";
      if (W.recording) { rec = '<button class="btn solid block" type="button" disabled>Recording… keep this screen open</button>'; }
      else if (W.rec) {
        rec = '<a class="btn solid block" href="' + W.rec.url + '" download="' + fileBase() + '.' + W.rec.ext + '">Download the clip</a>' +
          (W.rec.share ? '<button class="btn block" type="button" data-w1="share-clip" style="margin-top:10px">Share the clip</button>' : "") +
          '<button class="btn block" type="button" data-w1="record" style="margin-top:10px">Record it again</button>';
      } else if (canRec) { rec = '<button class="btn solid block" type="button" data-w1="record">Record the video clip</button>'; }
      else { rec = '<p class="note">This browser cannot record video. Save the image instead.</p>'; }
      return '<div class="w1pad">' + stepsBar() + '<h1 class="w1h1">Your clip</h1>' +
        (hasBrk ? '<div class="opts two"><button class="optbtn" type="button" data-w1="clipm" data-v="mp" aria-pressed="' + (W.clipMoment === "mp") + '">Match point</button><button class="optbtn" type="button" data-w1="clipm" data-v="brk" aria-pressed="' + (W.clipMoment === "brk") + '">The big break</button></div>' : "") +
        '<div class="w1clip"><canvas id="w1clip" width="1080" height="1920" role="img" aria-label="Vertical clip preview of your match-up"></canvas></div>' +
        '<div style="margin-top:14px">' + rec + '</div>' +
        '<button class="btn block" type="button" data-w1="save-image" style="margin-top:10px">Save as an image</button>' +
        '<button class="btn block" type="button" data-w1="copylink" style="margin-top:10px">Copy challenge link</button>' +
        '<p class="note">Every clip carries the BBC Sport and Wimbledon 100 marks and a link that opens this match-up for whoever sees it.</p></div>';
    }
    function bodyHTML() {
      return W.step === "home" ? homeHTML() : W.step === "pick" ? pickHTML() : W.step === "call" ? callHTML()
        : W.step === "watch" ? watchHTML() : W.step === "result" ? resultHTML() : clipHTML();
    }
    function html() {
      if (!W.open) { return ""; }
      return '<div class="article w1" id="w100" role="dialog" aria-label="Wimbledon 100: Centre Court, any year">' +
        '<div class="arbar"><button class="iconbtn" type="button" data-w1="back" aria-label="Back">' + I.back + '</button>' +
        '<span class="arkick">Wimbledon 100 · Centre Court, any year</span>' +
        '<button class="iconbtn" type="button" data-w1="close" aria-label="Close">' + I.close + '</button></div>' +
        '<div class="arscroll" id="w1scroll">' + bodyHTML() + '</div></div>';
    }

    /* ---- mounting and moving between steps ---- */
    function stopAll() { if (W.tl) { W.tl.stop(); W.tl = null; } if (W.clipTl && !W.recording) { W.clipTl.stop(); W.clipTl = null; } }
    var reduce = function () { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
    function mount() {
      if (!W.open) { stopAll(); return; }
      var root = $("#w100");
      if (!root) { return; }
      ["touchstart", "touchmove", "touchend", "pointerdown"].forEach(function (t) { root.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true }); });
      if (W.step === "watch") { startWatch(); }
      if (W.step === "clip" && !W.recording) { startClip(); }
    }
    function show(scrollTop) {
      var sc = $("#w1scroll");
      if (!sc) { refreshOverlays(); return; }
      stopAll();
      sc.innerHTML = bodyHTML();
      if (scrollTop !== false) { sc.scrollTop = 0; }
      mount();
    }
    function startWatch() {
      var cv = $("#w1watch"); if (!cv) { return; }
      var A = PL(W.a), B = PL(W.b), pal = PAL[W.grass];
      var segs = pickMoments(W.match).map(function (mo) { return rallySeg(W.match, mo, A, B, pal, WATCH); });
      W.tl = Timeline(cv, segs, {
        loop: false,
        onSeg: function (i) { var el = $("#w1live"); if (el) { el.textContent = segs[i].meta.label + ". " + segs[i].meta.score; } },
        onEnd: function () { setTimeout(function () { if (W.open && W.step === "watch") { W.step = "result"; show(); } }, 900); }
      });
      if (reduce()) { W.tl.drawAt(segs[0].dur - 0.5); } else { W.tl.play(); }
    }
    function startClip() {
      var cv = $("#w1clip"); if (!cv) { return; }
      W.clipTl = Timeline(cv, clipSegments(), { loop: true });
      if (reduce()) { W.clipTl.drawAt(W.clipTl.total - 0.5); } else { W.clipTl.play(); }
    }
    function fileBase() { return ("wimbledon100-" + PL(W.a).short + "-v-" + PL(W.b).short).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9-]/g, ""); }
    function challengeURL() { return location.href.split("#")[0] + "#m=" + [W.a, W.b, W.grass, W.kit].join(","); }
    function copyText(t) {
      if (navigator.clipboard && window.isSecureContext) { return navigator.clipboard.writeText(t); }
      return new Promise(function (res) { var ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} ta.remove(); res(); });
    }
    function shareText() {
      var A = PL(W.a), B = PL(W.b), mc = W.mc; if (!mc) { return ""; }
      var lead = mc.pctA >= 50 ? A : B, pct = mc.pctA >= 50 ? mc.pctA : 100 - mc.pctA;
      return A.short + " v " + B.short + ", " + condLine() + ": the numbers say " + lead.short + " wins " + pct + " of 100. Call it yourself on BBC Sport #Wimbledon100";
    }
    function recordClip() {
      var cv = $("#w1clip"); if (!cv) { return; }
      var types = ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
      var mime = types.filter(function (t) { return MediaRecorder.isTypeSupported(t); })[0];
      if (!mime) { toast("This browser cannot record video. Save the image instead."); return; }
      if (W.clipTl) { W.clipTl.stop(); }
      W.recording = true; W.rec = null; show(false);
      cv = $("#w1clip");
      var rec = new MediaRecorder(cv.captureStream(30), { mimeType: mime, videoBitsPerSecond: 6000000 }), chunks = [];
      rec.ondataavailable = function (e) { if (e.data && e.data.size) { chunks.push(e.data); } };
      rec.onstop = function () {
        var type = mime.split(";")[0], ext = type === "video/mp4" ? "mp4" : "webm", blob = new Blob(chunks, { type: type }), share = false;
        try { share = !!(navigator.canShare && navigator.canShare({ files: [new File([blob], fileBase() + "." + ext, { type: type })] })); } catch (e) {}
        W.rec = { blob: blob, ext: ext, url: URL.createObjectURL(blob), share: share };
        W.recording = false; W.saved.points += 2; persist();
        if (W.open && W.step === "clip") { show(false); toast("Clip ready. Download it or share it."); }
      };
      rec.start(200);
      W.clipTl = Timeline(cv, clipSegments(), { loop: false, onEnd: function () { setTimeout(function () { rec.stop(); }, 150); } });
      W.clipTl.restart();
    }
    function saveImage() {
      var off = document.createElement("canvas"); off.width = 1080; off.height = 1920;
      var tl = Timeline(off, clipSegments(), { loop: false }); tl.drawAt(tl.total - 0.2);
      off.toBlob(function (b) {
        if (!b) { toast("Could not make the image."); return; }
        var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = fileBase() + ".png"; document.body.appendChild(a); a.click(); a.remove();
        toast("Image saved.");
      }, "image/png");
    }
    function lockIn() {
      if (W.call.w === null || W.call.s === null) { W.err = "Pick a winner and the number of sets first."; show(false); return; }
      var A = PL(W.a), B = PL(W.b);
      W.match = simMatch(A, B, true); W.mc = null; W.rec = null;
      var m = W.match, tot = m.sets[0] + m.sets[1], rw = W.call.w === m.winner, rs = rw && W.call.s === tot;
      W.saved.points += rw ? (rs ? 15 : 10) : 0;
      W.step = "watch"; W.err = ""; show();
      setTimeout(function () {
        W.mc = monteCarlo(A, B, 10000);
        var lead = W.mc.pctA >= 50 ? A : B, pct = W.mc.pctA >= 50 ? W.mc.pctA : 100 - W.mc.pctA;
        W.saved.history = [{ a: W.a, b: W.b, grass: W.grass, kit: W.kit, w: lead.short + " wins", pct: pct }].concat(W.saved.history.filter(function (h) {
          return !(h.a === W.a && h.b === W.b && h.grass === W.grass && h.kit === W.kit);
        })).slice(0, 6);
        persist();
        if (W.open && W.step === "result") { show(false); }
      }, 60);
      persist();
    }
    function openW(preset, fromLink) {
      stopAll();
      W.open = true; W.fromLink = !!fromLink; W.err = ""; W.call = { w: null, s: null }; W.match = null; W.mc = null; W.rec = null; W.clipMoment = "mp";
      W.step = "home";
      if (preset && preset !== "new") {
        var p = preset.split(","), A = PL(p[0]), B = PL(p[1]);
        if (A && B && A.draw === B.draw) { W.a = p[0]; W.b = p[1]; W.draw = A.draw; W.grass = p[2] || "today"; W.kit = p[3] || "era"; W.step = "call"; }
      } else if (preset === "new") { W.step = "pick"; W.a = null; W.b = null; W.active = 0; }
      if ($("#w100")) { show(); } else { refreshOverlays(); }
    }
    function closeW() {
      stopAll(); if (W.clipTl) { W.clipTl.stop(); W.clipTl = null; }
      W.open = false; W.recording = false;
      if (/#m=/.test(location.hash)) { history.replaceState(null, "", location.pathname + location.search); }
      var el = $("#w100"); if (el) { el.remove(); }
    }
    function back() {
      var order = { pick: "home", call: W.fromLink ? "home" : "pick", watch: "call", result: "call", clip: "result" };
      if (W.step === "home") { closeW(); return; }
      W.step = order[W.step] || "home"; show();
    }

    function onClick(ev2) {
      var el = ev2.target.closest("[data-w1]");
      if (!el) { return; }
      var act = el.dataset.w1, v = el.dataset.v;
      ev2.preventDefault(); ev2.stopPropagation();
      switch (act) {
        case "open": openW(el.dataset.m || null); break;
        case "close": closeW(); break;
        case "back": back(); break;
        case "new": W.fromLink = false; W.step = "pick"; W.a = null; W.b = null; W.active = 0; show(); break;
        case "preset": openW(el.dataset.m); break;
        case "draw": if (W.draw !== v) { W.draw = v; W.a = null; W.b = null; W.active = 0; } show(false); break;
        case "slot": W.active = Number(v); show(false); break;
        case "pick":
          if (W.a === v) { W.a = null; W.active = 0; }
          else if (W.b === v) { W.b = null; W.active = 1; }
          else if (W.active === 0) { W.a = v; W.active = W.b ? 0 : 1; }
          else { W.b = v; W.active = W.a ? 1 : 0; }
          show(false); break;
        case "cond": W[el.dataset.k] = v; show(false); break;
        case "to-call": W.step = "call"; W.call = { w: null, s: null }; show(); break;
        case "to-pick": W.fromLink = false; W.step = "pick"; show(); break;
        case "call-w": W.call.w = Number(v); W.err = ""; show(false); break;
        case "call-s": W.call.s = Number(v); W.err = ""; show(false); break;
        case "lock": lockIn(); break;
        case "pause":
          if (!W.tl) { break; }
          if (W.tl.isPaused()) { W.tl.play(); el.innerHTML = I.pause + "Pause"; } else { W.tl.pause(); el.innerHTML = I.play + "Play"; }
          break;
        case "to-result": W.step = "result"; show(); break;
        case "rewatch": W.step = "watch"; show(); break;
        case "to-clip": W.step = "clip"; show(); break;
        case "clipm": W.clipMoment = v; W.rec = null; show(false); break;
        case "record": recordClip(); break;
        case "save-image": saveImage(); break;
        case "share-clip":
          if (W.rec) { try { navigator.share({ files: [new File([W.rec.blob], fileBase() + "." + W.rec.ext, { type: W.rec.blob.type })], title: "Wimbledon 100", text: shareText() + " " + challengeURL() }); } catch (e) {} }
          break;
        case "copylink": copyText(challengeURL()).then(function () { toast("Challenge link copied. It opens this match-up."); }); break;
        case "trivia": { var T = W.saved.trivia; T.ans[T.i] = Number(v); if (Number(v) === TRIVIA[T.i].a) { W.saved.points += 5; } persist(); show(false); break; }
        case "trivia-next": { var T2 = W.saved.trivia; if (T2.i < 4) { T2.i++; } else { T2.done = true; W.saved.streak += 1; } persist(); show(false); break; }
        case "trivia-again": W.saved.trivia = { i: 0, ans: [], done: false }; persist(); show(false); break;
        case "tmw": W.saved.tmw = Number(v); W.saved.points += 1; persist(); show(false); break;
      }
    }

    /* ---- the call to action inside the tennis tabs ---- */
    function cta(p) {
      if (p.variant === "motd" || p.variant === "rewrite" || p.variant === "moment") {
        var m = p.m.split(","), A = PL(m[0]), B = PL(m[1]);
        W.grass = W.grass || "today";
        return '<div class="c w1motd w1ctacard"><p class="w1kick">' + esc(p.kicker || "Wimbledon 100") + '</p>' +
          (p.title ? '<p class="q" style="margin:0 0 12px">' + esc(p.title) + '</p>' : "") +
          mu(A, B, p.sub || "") +
          '<button class="btn solid block" type="button" data-w1="open" data-m="' + esc(p.m) + '">' + esc(p.cta || "Make your call") + '</button></div>';
      }
      return '<button class="feat w1cta" type="button" data-w1="open">' +
        '<span class="fimg">' + imgTag(p.img || "ar-court", "", "wide") + '<i class="w1badge">100</i></span>' +
        '<span class="ftx"><small>' + esc(p.kicker || "Wimbledon 100 · Play along") + '</small><b>' + esc(p.title || "Centre Court, any year") + '</b>' +
        '<span class="w1ctasub">' + esc(p.sub || "Put champions from any year on court together, make your call, and share the clip.") + '</span>' +
        '<span class="w1go">' + esc(p.cta || "Pick two players") + I.chevron + '</span></span></button>';
    }

    function boot() {
      document.addEventListener("click", onClick, true);
      document.addEventListener("keydown", function (e) {
        if (W.open && e.key === "Escape") { e.stopImmediatePropagation(); e.preventDefault(); back(); }
      }, true);
      var fromHash = function () {
        var mm = /#m=([^&]+)/.exec(location.hash);
        if (!mm) { return; }
        var p = decodeURIComponent(mm[1]).split(",");
        if (!(PL(p[0]) && PL(p[1]))) { return; }
        var ix = evIxById("tennis");
        if (S.surface !== "phone" && S.surface !== "together") { S.surface = "phone"; }
        if (ix >= 0 && (S.view !== "event" || S.eventIx !== ix)) { openEvent(ix); }
        openW(p.join(","), true);
      };
      fromHash();
      window.addEventListener("hashchange", fromHash);
    }

    return { html: html, mount: mount, cta: cta, boot: boot, isOpen: function () { return W.open; } };
  })();

  P.w100cta = function (p) { return W100.cta(p); };


  /* ------------------------------------------------------------- boot */

  function boot() {
    $("#lifecycle").innerHTML = LIFECYCLE.map(function (l, i) {
      return '<button class="lc" role="tab" type="button" aria-selected="' + (i === S.lcIx) + '">' + esc(l.label) + '</button>';
    }).join("");
    $$(".lc").forEach(function (b, i) { b.onclick = function () { goLc(i); }; });
    $("#swipehint").innerHTML = LIFECYCLE.map(function (l, i) {
      return '<i class="' + (i === S.lcIx ? "on" : "") + '"></i>';
    }).join("");

    seedRecaps();
    seedPundits();
    S.surface = "phone";
    var sfh = $("#surface");
    if (sfh) {
      sfh.innerHTML = SURFACES.map(function (x) {
        return '<button class="sf" role="tab" type="button" data-surface="' + x[0] + '" aria-selected="' + (x[0] === "phone") + '">' + esc(x[1]) +
          (x[0] === "tv" || x[0] === "together" ? '<i class="sfwip" title="Work in progress">WIP</i>' : "") + '</button>';
      }).join("");
      $$(".sf").forEach(function (b) { b.onclick = function () { setSurface(b.dataset.surface); }; });
    }
    var tvset = $("#tvset"), dev = $("#device");
    if (tvset) { tvset.addEventListener("pointerdown", function () { tvs().focus = true; }); }
    if (dev) { dev.addEventListener("pointerdown", function () { if (S.surface === "together") { tvs().focus = false; } }); }
    render();
    attachSwipe();
    startClocks();
    W100.boot();
    setInterval(tickMedia, 200);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", boot); }
  else { boot(); }
})();
