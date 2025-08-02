import React, { Component } from "react";
import NewsIntem from "./NewsIntem";

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor from News component");
    this.state = {
      articles: [
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title: "PayPal Beats on Strong Venmo Growth",
          description: "",
          url: "https://biztoc.com/x/789ffa20e975a6b5",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:10:00Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+749 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "US Stocks Head for Another Record High Ahead of Fed Meeting",
          description: "",
          url: "https://biztoc.com/x/de830360ea174330",
          urlToImage: "https://biztoc.com/cdn/de830360ea174330_s.webp",
          publishedAt: "2025-07-29T14:09:53Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+780 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title: "Tesla Stock Outlook: Is Wall Street Bullish or Bearish?",
          description:
            'Jump-Start Your Search For Promising Trade Ideas With Barchart Premier’s "Top Stock Pick".\nFREE 30 Day Trial\n- Market Pulse\n- VolatilityVolume & Open InterestHorizontal StrategiesButterfly Strategies\n-\n- Market PulseResourcesEuropean FuturesEuropean Groupings…',
          url: "https://biztoc.com/x/b6b537a4ea42bafb",
          urlToImage: "https://biztoc.com/cdn/b6b537a4ea42bafb_s.webp",
          publishedAt: "2025-07-29T14:09:49Z",
          content:
            'Jump-Start Your Search For Promising Trade Ideas With Barchart Premiers "Top Stock Pick".FREE 30 Day Trial- Market Pulse- VolatilityVolume &amp; Open InterestHorizontal StrategiesButterfly Strategies… [+137 chars]',
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title:
            "Transom Capital completes acquisition of Sigmatron International",
          description: "",
          url: "https://biztoc.com/x/9599765f5a262653",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:45Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+764 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "apnews.com",
          title:
            "Book Review: 'Victory ‘45’ chronicles the long, winding road to ending WWII",
          description: "",
          url: "https://biztoc.com/x/20882eae1b6e0583",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:39Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+768 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "theguardian.com",
          title:
            "IMF upgrades global growth forecast as Trump tariffs ease, but warns on risks",
          description: "",
          url: "https://biztoc.com/x/08366789321e21cd",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:37Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+773 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "US Job Openings Fall to 7.44 Million After Back-to-Back Jumps",
          description: "",
          url: "https://biztoc.com/x/1c345bd04d72a914",
          urlToImage: "https://biztoc.com/cdn/1c345bd04d72a914_s.webp",
          publishedAt: "2025-07-29T14:09:34Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+782 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title:
            "Are Wall Street Analysts Predicting Apple Stock Will Climb or Sink?",
          description: "",
          url: "https://biztoc.com/x/7bcc73129a487217",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:30Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+773 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title:
            "Are We Headed for a Market Earthquake? 5 Catalyst Events You Can’t Ignore",
          description: "",
          url: "https://biztoc.com/x/ad7a8911e143ddc2",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:28Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+778 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "edition.cnn.com",
          title:
            "Americans are growing hopeful about the economy as trade talks progress",
          description: "",
          url: "https://biztoc.com/x/5b8350886970265b",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T14:09:24Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+744 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Ivory Coast’s Octogenarian Leader to Seek Fourth Term in Office",
          description: "",
          url: "https://biztoc.com/x/e7315c2c4bfe6953",
          urlToImage: "https://biztoc.com/cdn/e7315c2c4bfe6953_s.webp",
          publishedAt: "2025-07-29T14:09:24Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+784 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Indian owners of three ships ask sanctions-hit Nayara Energy to release the vessels, sources say",
          description: "",
          url: "https://biztoc.com/x/d87eabe8ffe1c9a2",
          urlToImage: "https://biztoc.com/cdn/d87eabe8ffe1c9a2_s.webp",
          publishedAt: "2025-07-29T14:09:19Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+792 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Global Desk",
          title:
            "Palantir’s AI is helping pick targets in war zones, and its billionaire boss Alex Karp is boasting about it",
          description:
            "Palantir uses AI in war zones: Palantir Technologies is using AI in war zones like Ukraine. The AI tools help identify targets using data. CEO Alex Karp supports using AI to protect soldiers. Palantir's client list includes banks, hospitals, and the US govern…",
          url: "https://economictimes.indiatimes.com/news/international/us/palantir-uses-ai-in-war-zones-palantirs-ai-is-helping-pick-targets-in-war-zones-and-its-billionaire-boss-alex-karp-is-boasting-about-it/articleshow/122977744.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-122977799,width-1200,height-630,imgsize-41604,overlay-economictimes/articleshow.jpg",
          publishedAt: "2025-07-29T14:04:13Z",
          content:
            "Palantir uses AI in war zones: Palantir Technologies, a data analytics and artificial intelligence firm co-founded by billionaire Alex Karp and venture capitalist Peter Thiel, is boldly embracing the… [+3482 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "CBRE raises 2025 profit forecast on higher leasing, property sales",
          description: "",
          url: "https://biztoc.com/x/3580096a26734fc1",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:58:47Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+780 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Ukraine's live-blogging lawmakers fuel public anger at parliament",
          description: "",
          url: "https://biztoc.com/x/59341d7c945d07e0",
          urlToImage: "https://biztoc.com/cdn/59341d7c945d07e0_s.webp",
          publishedAt: "2025-07-29T13:58:27Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+787 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title: "Do Wall Street Analysts Like Paramount Global Stock?",
          description: "",
          url: "https://biztoc.com/x/0c094198a30b66ea",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:58:20Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+758 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Visa, Mastercard set for higher profits on solid spending trends",
          description: "",
          url: "https://biztoc.com/x/31e38249a9d2e846",
          urlToImage: "https://biztoc.com/cdn/31e38249a9d2e846_s.webp",
          publishedAt: "2025-07-29T13:58:18Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+784 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "hollywoodreporter.com",
          title:
            "Spotify Hits 276 Million Paying Subs, Exceeding Forecasts, But Swings to Quarterly Loss",
          description: "",
          url: "https://biztoc.com/x/6fac0b490ba51d75",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:58:16Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+789 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "247wallst.com",
          title: "Waymo’s Move to Dallas Is a Headache for Tesla",
          description:
            "Alphabet Inc.’s (NASDAQ: GOOGL) self-driving car company Waymo is moving into Dallas. That is not good for Tesla Inc. (NASDAQ: TSLA). Tesla’s self-driving robotaxi is only available in Austin (as well as a few cities outside the United States). Waymo also ope…",
          url: "https://biztoc.com/x/5b5a906ea97767e5",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:47:50Z",
          content:
            "Alphabet Inc.s (NASDAQ: GOOGL) self-driving car company Waymo is moving into Dallas. That is not good for Tesla Inc. (NASDAQ: TSLA). Teslas self-driving robotaxi is only available in Austin (as well … [+143 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "npr.org",
          title: "Are prices going up because of tariffs? Here's what we know",
          description: "",
          url: "https://biztoc.com/x/6964dfc31df1e964",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:47:41Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+729 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Lutnick Says More ‘Horse Trading’ Ahead With EU on Pact Details",
          description: "",
          url: "https://biztoc.com/x/dc3c7a7a06055801",
          urlToImage: "https://biztoc.com/cdn/dc3c7a7a06055801_s.webp",
          publishedAt: "2025-07-29T13:47:34Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+782 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Pakistan's crackdown on black market dollar trade pushes deals online",
          description: "",
          url: "https://biztoc.com/x/5e7372be2c16beb1",
          urlToImage: "https://biztoc.com/cdn/5e7372be2c16beb1_s.webp",
          publishedAt: "2025-07-29T13:47:32Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+781 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "AI Infrastructure Firm Whitefiber Seeks $132.8 Million in IPO",
          description: "",
          url: "https://biztoc.com/x/8257fc9d08427a0b",
          urlToImage: "https://biztoc.com/cdn/8257fc9d08427a0b_s.webp",
          publishedAt: "2025-07-29T13:47:27Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+781 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Dangote Refinery drops lawsuit against Nigerian fuel importers",
          description: "",
          url: "https://biztoc.com/x/94d119a92011fce9",
          urlToImage: "https://biztoc.com/cdn/94d119a92011fce9_s.webp",
          publishedAt: "2025-07-29T13:47:25Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+781 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "China Minister Meets US Delegation Including Apple in Beijing",
          description: "",
          url: "https://biztoc.com/x/011b0fcb0d4c1a4a",
          urlToImage: "https://biztoc.com/cdn/011b0fcb0d4c1a4a_s.webp",
          publishedAt: "2025-07-29T13:47:24Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+782 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Greenhushing Can Keep Costs Higher, Climate Impact X CEO Says",
          description: "",
          url: "https://biztoc.com/x/e6ef31a3d9a83eb4",
          urlToImage: "https://biztoc.com/cdn/e6ef31a3d9a83eb4_s.webp",
          publishedAt: "2025-07-29T13:47:23Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+781 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title:
            "Esperion Therapeutics (ESPR) Gets Boost from Acquisition Rumors",
          description: "",
          url: "https://biztoc.com/x/0d52c4f85572a8b6",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:47:18Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+754 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "gobankingrates.com",
          title:
            "4 States Where Home Prices Are Expected To Crash in the Next 12 Months",
          description: "",
          url: "https://biztoc.com/x/81b26545905c1bd8",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:47:16Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+776 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Primary Dealers Expect Steady Treasury Auction Sizes for Quarter",
          description: "",
          url: "https://biztoc.com/x/f52b039dd7ed5cdb",
          urlToImage: "https://biztoc.com/cdn/f52b039dd7ed5cdb_s.webp",
          publishedAt: "2025-07-29T13:47:11Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+785 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Baker Hughes’ Big New Deal Shows Why It’s the Top Oil Services Stock",
          description: "",
          url: "https://biztoc.com/x/b0404bf5263dcded",
          urlToImage: "https://biztoc.com/cdn/b0404bf5263dcded_s.webp",
          publishedAt: "2025-07-29T13:47:08Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+734 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Italy to tell EU terms for UniCredit's BPM bid remain despite deal collapse",
          description: "",
          url: "https://biztoc.com/x/b6c363ab92812148",
          urlToImage: "https://biztoc.com/cdn/b6c363ab92812148_s.webp",
          publishedAt: "2025-07-29T13:47:08Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Spotify post a surprise quarterly loss? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's tariffs … [+787 chars]",
        },
        {
          source: {
            id: null,
            name: "Autoblog",
          },
          author: "Sebastian Cenizo",
          title: 'Tesla\'s Affordable EV Is So Much Less Than "Just A Model Y"',
          description:
            "Back in February, Tesla began promising new Model Y variants, and since then, the Model Y L has been revealed as a bigger six-seater for China. There have...",
          url: "https://www.autoblog.com/news/leaked-cheap-tesla-model-y-will-look-feel-very-different",
          urlToImage:
            "https://media.zenfs.com/en/autoblog_arena_articles_145/87c86315880b677bc6dbbcd184c0bdf9",
          publishedAt: "2025-07-29T13:45:00Z",
          content:
            'Tesla\'s Affordable EV Is So Much Less Than "Just A Model Y" originally appeared on Autoblog.\r\nChinese Leak Reveals Significant Changes\r\nBack in February, Tesla began promising new Model Y variants, a… [+3095 chars]',
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title: "Stocks Keep Grinding Higher at the Open",
          description: "",
          url: "https://biztoc.com/x/93849180d4bd8902",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:36:15Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+734 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investing.com",
          title:
            "Trump deciding trade deals by Aug. 1, Commerce Secretary Lutnick says",
          description: "",
          url: "https://biztoc.com/x/af75bd9d2d7b9135",
          urlToImage: "https://biztoc.com/cdn/af75bd9d2d7b9135_s.webp",
          publishedAt: "2025-07-29T13:36:10Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+722 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "SoFi, UnitedHealth, Novo Nordisk, UPS, Boeing, Sarepta, Whirlpool, and More Movers",
          description: "",
          url: "https://biztoc.com/x/9c17d1c4db6b8367",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:35:54Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+662 chars]",
        },
        {
          source: {
            id: null,
            name: "Gizmodo.com",
          },
          author: "Matt Novak",
          title: "Elon Musk Keeps Suggesting War Is a Good Thing for Society",
          description:
            '“When you have an extended period of prosperity with no existential war, there’s no cleansing function..."',
          url: "https://gizmodo.com/elon-musk-keeps-suggesting-war-is-a-good-thing-for-society-2000635780",
          urlToImage:
            "https://gizmodo.com/app/uploads/2025/07/elon-musk-2022-air-force-1200x675.jpg",
          publishedAt: "2025-07-29T13:30:49Z",
          content:
            "Elon Musk is both the wealthiest person in the world and a major contractor for the U.S. military as the head of SpaceX. When the billionaire talks about war and its potential consequences, we need t… [+3982 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "OPEC+ Oil Gambit Is Looking a Little Less Costly, For Now",
          description: "",
          url: "https://biztoc.com/x/0e6386180e13e283",
          urlToImage: "https://biztoc.com/cdn/0e6386180e13e283_s.webp",
          publishedAt: "2025-07-29T13:25:33Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+716 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "AstraZeneca Weighs Direct-to-Patient Drug Sales in US",
          description: "",
          url: "https://biztoc.com/x/ca7ad54bdfa9cfbc",
          urlToImage: "https://biztoc.com/cdn/ca7ad54bdfa9cfbc_s.webp",
          publishedAt: "2025-07-29T13:25:27Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+714 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title: "Shares mixed, euro dips as tariff costs counted",
          description: "",
          url: "https://biztoc.com/x/973872e430cc9212",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:22Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+682 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Trump Tariffs Threaten Brazil’s Bet on New Orange-Growing Region",
          description: "",
          url: "https://biztoc.com/x/ed1ae6800c0eadd2",
          urlToImage: "https://biztoc.com/cdn/ed1ae6800c0eadd2_s.webp",
          publishedAt: "2025-07-29T13:25:20Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+717 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "UK to Grow Faster Than European Peers for Two Years, IMF Says",
          description: "",
          url: "https://biztoc.com/x/65bcd3a9e240a869",
          urlToImage: "https://biztoc.com/cdn/65bcd3a9e240a869_s.webp",
          publishedAt: "2025-07-29T13:25:17Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+721 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Jack Dorsey’s Block Aims to Draw Cash App Users With Group Payments Tool",
          description: "",
          url: "https://biztoc.com/x/81f991e9bace29e4",
          urlToImage: "https://biztoc.com/cdn/81f991e9bace29e4_s.webp",
          publishedAt: "2025-07-29T13:25:12Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+726 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "wsj.com",
          title: "Procter & Gamble Says Consumers Are Under Stress",
          description: "",
          url: "https://biztoc.com/x/75ad3de9c6f8c227",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:12Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+690 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Iveco says in advanced talks for deals on defence unit, rest of company",
          description: "",
          url: "https://biztoc.com/x/e48f1a7a95aade5d",
          urlToImage: "https://biztoc.com/cdn/e48f1a7a95aade5d_s.webp",
          publishedAt: "2025-07-29T13:25:10Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+727 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Union Pacific to buy Norfolk in $85-billion mega US railroad deal",
          description: "",
          url: "https://biztoc.com/x/e30057ce28981ed1",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:09Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+718 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title:
            "Grupo Bimbo lowers sales growth outlook amid strength in Mexico peso",
          description: "",
          url: "https://biztoc.com/x/1b7c49789e99eefb",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:09Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+688 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Candy giant Mars to invest $2 billion more in US manufacturing through 2026",
          description: "",
          url: "https://biztoc.com/x/b527df296241cdc9",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:08Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+736 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Unrest Over High Costs Spread as Calm Returns to Angola Capital",
          description: "",
          url: "https://biztoc.com/x/ae32b6bd44f24dbe",
          urlToImage: "https://biztoc.com/cdn/ae32b6bd44f24dbe_s.webp",
          publishedAt: "2025-07-29T13:25:07Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+724 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "EU to Make Reduced Aid Payout to Ukraine Due to Lagging Reforms",
          description: "",
          url: "https://biztoc.com/x/12adc57a6b81b01c",
          urlToImage: "https://biztoc.com/cdn/12adc57a6b81b01c_s.webp",
          publishedAt: "2025-07-29T13:25:05Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+724 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title:
            "Financing a Car? Find Out If This New Tax Deduction Could Lower Your Costs",
          description: "",
          url: "https://biztoc.com/x/3d253ac6f61e8969",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:03Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+690 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Tumbles. Ozempic, Wegovy Maker Has New CEO, Cuts U.S. Outlook",
          description: "",
          url: "https://biztoc.com/x/242be22ed48ee692",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:25:02Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+695 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title: "Chip Stocks Have Been Stars. It Might Not Last",
          description: "",
          url: "https://biztoc.com/x/d7a5b0d308bdb27a",
          urlToImage: "https://biztoc.com/cdn/d7a5b0d308bdb27a_s.webp",
          publishedAt: "2025-07-29T13:25:00Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+669 chars]",
        },
        {
          source: {
            id: null,
            name: "GlobeNewswire",
          },
          author: "Research and Markets",
          title:
            "Automotive OEM Telematics Market Report 2025: Telematics Subscriptions Predicted to Double by 2029, Reflecting a 13% CAGR",
          description:
            "The global car telematics market is surging, with connected cars set to surpass 500M by 2029. In 2024, 79% of new cars feature embedded systems, driven by mandates like EU's eCall. Key players like BMW, Toyota, and Tesla are expanding offerings, with OEM ship…",
          url: "https://www.globenewswire.com/news-release/2025/07/29/3123336/28124/en/Automotive-OEM-Telematics-Market-Report-2025-Telematics-Subscriptions-Predicted-to-Double-by-2029-Reflecting-a-13-CAGR.html",
          urlToImage:
            "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
          publishedAt: "2025-07-29T13:25:00Z",
          content:
            'Dublin, July 29, 2025 (GLOBE NEWSWIRE) -- The "Global Automotive OEM Telematics Market 10th Edition" report has been added to ResearchAndMarkets.com\'s offering.\r\nThe number of connected cars with emb… [+9357 chars]',
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Stanley Black & Decker Stock Is Falling After Earnings. Tariffs Are Taking a Toll",
          description: "",
          url: "https://biztoc.com/x/20df587b6b29c026",
          urlToImage: "https://biztoc.com/cdn/20df587b6b29c026_s.webp",
          publishedAt: "2025-07-29T13:24:59Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+684 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "windowscentral.com",
          title:
            "Microsoft reveals 40 jobs about to be destroyed by AI (and those safe from it) — is your career on the list?",
          description: "",
          url: "https://biztoc.com/x/d18b580fd19f77ee",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:24:59Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+737 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title: "Retail replaces 'smart money' as Wall Street rocket fuel",
          description: "",
          url: "https://biztoc.com/x/e7f8715886450a6b",
          urlToImage: "https://biztoc.com/cdn/e7f8715886450a6b_s.webp",
          publishedAt: "2025-07-29T13:24:49Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+705 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Trump deciding trade deals by Aug. 1, Commerce Secretary Lutnick says",
          description: "",
          url: "https://biztoc.com/x/aae4c018e332779b",
          urlToImage: "https://biztoc.com/cdn/aae4c018e332779b_s.webp",
          publishedAt: "2025-07-29T13:24:47Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+740 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Cantor, Tether-Backed Twenty One Raises Bitcoin Holdings Target",
          description: "",
          url: "https://biztoc.com/x/8f1287a545ce2704",
          urlToImage: "https://biztoc.com/cdn/8f1287a545ce2704_s.webp",
          publishedAt: "2025-07-29T13:24:45Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "apnews.com",
          title:
            "Justice Department files misconduct complaint against federal judge handling deportation case",
          description: "",
          url: "https://biztoc.com/x/fd6957ceb22439c7",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:24:42Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+725 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "OpenAI-Backed Health Startup Ambience Valued at Over $1 Billion",
          description: "",
          url: "https://biztoc.com/x/d0438bbbb9f0c529",
          urlToImage: "https://biztoc.com/cdn/d0438bbbb9f0c529_s.webp",
          publishedAt: "2025-07-29T13:14:20Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "wsj.com",
          title: "Boeing Narrows Losses in Bid to Reset Business",
          description: "",
          url: "https://biztoc.com/x/5d260341886e88f1",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:14:18Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+677 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "wsj.com",
          title:
            "Novo Nordisk Shares Plummet as Wegovy Knockoffs Weigh on Sales",
          description: "",
          url: "https://biztoc.com/x/bcbc84e76f306d75",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:14:18Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+679 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Obesity drugmaker Novo Nordisk plunges as it cuts forecasts again",
          description: "",
          url: "https://biztoc.com/x/e0ea4d7b897cc1ab",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:14:18Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+741 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "World’s ‘Precarious’ Trade Backdrop Is Hurting Growth, IMF Says",
          description: "",
          url: "https://biztoc.com/x/6ae65c729461d665",
          urlToImage: "https://biztoc.com/cdn/6ae65c729461d665_s.webp",
          publishedAt: "2025-07-29T13:14:11Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+721 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investing.com",
          title:
            "Loss of central bank independence could lead to instability, IMF warns",
          description: "",
          url: "https://biztoc.com/x/3a0ae380b5848ff1",
          urlToImage: "https://biztoc.com/cdn/3a0ae380b5848ff1_s.webp",
          publishedAt: "2025-07-29T13:14:04Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+724 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investors.com",
          title:
            "Stock Market Today: Dow Rises Ahead Of Fed Meeting; Novo Nordisk Plummets (Live Coverage)",
          description: "",
          url: "https://biztoc.com/x/22a8ecade467b540",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:14:01Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+725 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investing.com",
          title:
            "IMF edges 2025 growth forecast slightly higher, warns tariff risks still dog outlook",
          description: "",
          url: "https://biztoc.com/x/222a66cb8e93b66c",
          urlToImage: "https://biztoc.com/cdn/222a66cb8e93b66c_s.webp",
          publishedAt: "2025-07-29T13:13:57Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+738 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "US Housing Market’s Price Growth Slows for Fourth Straight Month",
          description: "",
          url: "https://biztoc.com/x/0a698faa2b4a1e82",
          urlToImage: "https://biztoc.com/cdn/0a698faa2b4a1e82_s.webp",
          publishedAt: "2025-07-29T13:13:56Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+721 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "Europe’s Far Right Blasts Trump Trade Deal as Support Wavers",
          description: "",
          url: "https://biztoc.com/x/18a1e23d08d2ea5b",
          urlToImage: "https://biztoc.com/cdn/18a1e23d08d2ea5b_s.webp",
          publishedAt: "2025-07-29T13:13:54Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+721 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "Trade Flop Shows Europe Can’t Afford to Delay Reforms",
          description: "",
          url: "https://biztoc.com/x/4069f6f89d1443a3",
          urlToImage: "https://biztoc.com/cdn/4069f6f89d1443a3_s.webp",
          publishedAt: "2025-07-29T13:13:54Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+725 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title: "Is US stock rally near 'Mag 7' turning point?",
          description: "",
          url: "https://biztoc.com/x/9b01eaae0cd90690",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:49Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+696 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "European second-quarter corporate profits expected to rise after EU-US tariff deal",
          description: "",
          url: "https://biztoc.com/x/28e750d4396d42d8",
          urlToImage: "https://biztoc.com/cdn/28e750d4396d42d8_s.webp",
          publishedAt: "2025-07-29T13:13:47Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+737 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "India Top Bourse Awaits SEBI Nod for Offer to Settle Two Cases",
          description: "",
          url: "https://biztoc.com/x/32e7ddf174915cfa",
          urlToImage: "https://biztoc.com/cdn/32e7ddf174915cfa_s.webp",
          publishedAt: "2025-07-29T13:13:47Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "apnews.com",
          title: "How US adults are using AI, according to AP-NORC polling",
          description: "",
          url: "https://biztoc.com/x/e60e9ef6f4880bd9",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:46Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+702 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investing.com",
          title:
            "IMF lifts 2025 GDP emerging economies' outlook on improved China view",
          description: "",
          url: "https://biztoc.com/x/6916618ed6b82f08",
          urlToImage: "https://biztoc.com/cdn/6916618ed6b82f08_s.webp",
          publishedAt: "2025-07-29T13:13:46Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title:
            "Here’s What Happened the Last Time Novo Nordisk Stock Was This Oversold",
          description: "",
          url: "https://biztoc.com/x/6b4aec801d67e95e",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:42Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+717 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title: "Earnings Preview: What To Expect From Paychex's Report",
          description: "",
          url: "https://biztoc.com/x/e09d4e06cb08b363",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:41Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+700 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "edition.cnn.com",
          title: "Trump’s trade war victory is already under siege",
          description: "",
          url: "https://biztoc.com/x/ae5b0bbf0c65f31b",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:40Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+675 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title: "Blackstone Executive Killed in Manhattan Shooting",
          description: "",
          url: "https://biztoc.com/x/426a87603ac64ec1",
          urlToImage: "https://biztoc.com/cdn/426a87603ac64ec1_s.webp",
          publishedAt: "2025-07-29T13:13:32Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+681 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "marketwatch.com",
          title:
            "IMF lifts U.S. growth outlook on lower tariffs and upbeat markets",
          description: "",
          url: "https://biztoc.com/x/3c876979b0adc6a3",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:13:31Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+693 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "finance.yahoo.com",
          title:
            "Spotify stock slides on Q2 earnings loss, weaker forecast after record rally",
          description: "",
          url: "https://biztoc.com/x/b469ea301929c94a",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:02:41Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+732 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "Trump Says Was Briefed on ‘Tragic Shooting’ in Midtown Manhattan",
          description: "",
          url: "https://biztoc.com/x/65a7b97ecb869982",
          urlToImage: "https://biztoc.com/cdn/65a7b97ecb869982_s.webp",
          publishedAt: "2025-07-29T13:02:34Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title: "What will it take to stave off famine in Gaza?",
          description: "",
          url: "https://biztoc.com/x/177676f4ed9ebdf8",
          urlToImage: "https://biztoc.com/cdn/177676f4ed9ebdf8_s.webp",
          publishedAt: "2025-07-29T13:02:33Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+718 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barchart.com",
          title:
            "Grant Cardone Warns Fed Chair Powell is Pushing The U.S. into a Crash That Will Make The ‘2008 Market Housing Crisis Pale in Comparison’",
          description: "",
          url: "https://biztoc.com/x/66eb811510769d8e",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:02:29Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+780 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "Are US Trade Tariffs the Ultimate Stealth Tax?",
          description: "",
          url: "https://biztoc.com/x/b5f89a0e4866f72c",
          urlToImage: "https://biztoc.com/cdn/b5f89a0e4866f72c_s.webp",
          publishedAt: "2025-07-29T13:02:26Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+709 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "newschannel5.com",
          title:
            "The Boring Company plans underground transit loop connecting Nashville airport to downtown",
          description: "",
          url: "https://biztoc.com/x/59f01a9da8878373",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:02:25Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+737 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "edition.cnn.com",
          title:
            "India overtakes China as biggest smartphone exporter to the United States, report says",
          description: "",
          url: "https://biztoc.com/x/d77d89347081de63",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:02:14Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+699 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title: "Treasury Yields Take a Break Ahead of Data, Fed Meeting",
          description: "",
          url: "https://biztoc.com/x/c58bd2539de82a27",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T13:02:11Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+749 chars]",
        },
        {
          source: {
            id: null,
            name: "Electrek",
          },
          author: "Jameson Dow",
          title:
            "Another Chinese self-driving test: deadly results and lawbreaking in city ADAS use",
          description:
            "Chinese media outlet Dongchedi posted another massive test of automotive self-driving systems, testing many of the same cars as it did in the highway test we we reported on this weekend.\n\n\n\nThis time, the test covers various urban driving scenarios, where muc…",
          url: "http://electrek.co/2025/07/29/another-huge-chinese-self-driving-test-lawbreaking-indecision-in-urban-driving/",
          urlToImage:
            "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2025/07/dcar-urban-hero-e1753767204284.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          publishedAt: "2025-07-29T13:00:00Z",
          content:
            "Chinese media outlet Dongchedi posted another massive test of automotive self-driving systems, testing many of the same cars as it did in the highway test we we reported on this weekend.\r\nThis time, … [+14785 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Norfolk Stock Drops on Merger With Union Pacific. That’s Not Supposed to Happen",
          description: "",
          url: "https://biztoc.com/x/dbe5a513cc175dbb",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:59Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+701 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Boeing Stock Is Rising After Results Beat Wall Street Estimates",
          description: "",
          url: "https://biztoc.com/x/3bc00ac1f375acfb",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:54Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+670 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Spotify Stock Misses a Beat. Blame This Cost for a Surprise Loss",
          description: "",
          url: "https://biztoc.com/x/77192c984e531ca4",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:47Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+671 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Novo Nordisk Stock Dives 20%. Ozempic Maker Unveils New CEO Amid Shock Cut to U.S. Outlook",
          description: "",
          url: "https://biztoc.com/x/d5ad007ec5df3340",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:46Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+688 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "barrons.com",
          title:
            "Procter & Gamble Posts Earnings Beat and Names New CEO. The Stock Is Rising",
          description: "",
          url: "https://biztoc.com/x/453d835b21f089e2",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:45Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+678 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title: "Bain Shuts Scandal-Tainted South African Consulting Business",
          description: "",
          url: "https://biztoc.com/x/dc1ecd6a53abbedf",
          urlToImage: "https://biztoc.com/cdn/dc1ecd6a53abbedf_s.webp",
          publishedAt: "2025-07-29T12:51:29Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+721 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "bloomberg.com",
          title:
            "B. Riley Sets Date to Post Report Covering Overdue 2024 Results",
          description: "",
          url: "https://biztoc.com/x/4d5d0e42f608b84c",
          urlToImage: "https://biztoc.com/cdn/4d5d0e42f608b84c_s.webp",
          publishedAt: "2025-07-29T12:51:22Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+723 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "Johnson Controls raises annual profit forecast on strong demand",
          description: "",
          url: "https://biztoc.com/x/04ab04db82cab872",
          urlToImage: "https://biztoc.com/cdn/950/og.png",
          publishedAt: "2025-07-29T12:51:21Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+718 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "reuters.com",
          title:
            "European second-quarter corporate profits expected to rise 1.8%",
          description: "",
          url: "https://biztoc.com/x/70e6c3dcc26415e5",
          urlToImage: "https://biztoc.com/cdn/70e6c3dcc26415e5_s.webp",
          publishedAt: "2025-07-29T12:51:19Z",
          content:
            "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why did Novo Nordisk shares plunge? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will US-EU trade deal affect tari… [+716 chars]",
        },
      ],
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Please Visit Our Top News Headlines</h1>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsIntem
                  title={ele.title.slice(0, 45)}
                  description={ele.description.slice(0, 88)}
                  imgurl={ele.urlToImage}
                  newsurl={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
