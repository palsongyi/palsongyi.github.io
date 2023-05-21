const quotes = [
    {
      quote: "자연도 날씨가 좋아야 동식물이 잘 자라듯이 사람도 기쁜 마음이 있어야 즐거운 일이 생긴다.",
      author: "채근담",
    },
    {
      quote: "대장부 마음 씀씀이는 푸른 하늘 밝은 태양과 같아서 남들이 보고 다 알아차리도록 해야 옳다.",
      author: "독서록",
    },
    {
      quote:
        "밤 깊어 추위를 견디기 어렵더니 밝은 달이 와서 나를 비추어 주네.",
      author: "오래된 그림에 쓰다",
    },
    {
      quote: "남성적 세계는 시간당 60 마일의 속도로 교대를 때리는 불확정성과도 같다",
      author: "Toward a Feminist Theory the State",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;