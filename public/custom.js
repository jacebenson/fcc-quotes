var GLOBAL = {};
GLOBAL.quoteUsed = '';
GLOBAL.quote = '';
GLOBAL.quotes = [
  {
    author: "O",
    quote: "They are kind and lots of fun."
  },
  {
    author: "Daniel Tiger",
    quote: "Won't you be my neighbor?"
  },
  {
    author: "Mr. Mcfeely",
    quote: "Speedy Delivery"
  },
  {
    author: "Daniel Tiger",
    quote: "Everyone's job is important.  We all help in different ways."
  },
  {
    author: "Daniel Tiger",
    quote: "If you’re feeling frustrated, take a step back, and ask for help."
  },
  {
    author: "Daniel Tiger",
    quote: "When you feel jealous talk about it, and we’ll figure something out."
  }, {
    author: "Daniel Tiger",
    quote: "When you’re sick, rest is best."
  },
  {
    author: "Daniel Tiger",
    quote: "Keep trying, you’ll get better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "Find your own way to say I love you."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "I can be anybody, anybody that I choose."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "If something seems hard to do, try it a little bit at a time."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "See what it is, you might feel better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "Think about how someone else is feeling, maybe you can help them feel better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "Close your eyes and think of something happy, if you think about something great you won’t be as afraid."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "When something seems bad, turn it around, and find something good."
  }
  ,
  {
    author: "Daniel Tiger",
    quote: "When you feel so mad that you want to roar, take a deep breath, and count to four."
  },
  {
    author: "Daniel Tiger",
    quote: "Saying I’m sorry is the first step, then, how can I help?"
  }
];
function getRandomQuote() {
  GLOBAL.quoteUsed = Math.floor(Math.random() * (GLOBAL.quotes.length - 0) + 0);
  var quote = {
    text: GLOBAL.quotes[GLOBAL.quoteUsed].quote,
    author: GLOBAL.quotes[GLOBAL.quoteUsed].author
  };
  GLOBAL.quote = quote.text;
  return quote;
}
$(function () {
  var loadedQuote = getRandomQuote();
  $('#text').text(loadedQuote.text);
  $('#author').text(loadedQuote.author);
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=' + loadedQuote.text);
  $('#newquote').click(function () {
    lastQuote = GLOBAL.quoteUsed.toString();
    var newQuote = getRandomQuote();
    //$('#text').text(getRandomQuote(quotes));
    $('#text').text(newQuote.text);
    $('#author').text(newQuote.author);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=' + newQuote.text);
  });
  /*$('#tweet').click(function () {
    var hrefForTweeting = 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=';
    window.open(hrefForTweeting + GLOBAL.quote);
  });*/
})