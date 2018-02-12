var quotes = [
  {
    author:"O",
    quote:"They are kind and lots of fun."
  },
  {
    author:"Daniel Tiger",
    quote:"Won't you be my neighbor?"
  },
  {
    author:"Mr. Mcfeely",
    quote:"Speedy Delivery"
  },
  {
    author: "Daniel Tiger",
    quote:  "Everyone's job is important.  We all help in different ways."
  },
  {
    author: "Daniel Tiger",
    quote:  "If you’re feeling frustrated, take a step back, and ask for help."
  },
  {
    author: "Daniel Tiger",
    quote:  "When you feel jealous talk about it, and we’ll figure something out."
  },  {
    author: "Daniel Tiger",
    quote:  "When you’re sick, rest is best."
  },
  {
    author: "Daniel Tiger",
    quote:  "Keep trying, you’ll get better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "Find your own way to say I love you."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "I can be anybody, anybody that I choose."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "If something seems hard to do, try it a little bit at a time."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "See what it is, you might feel better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "Think about how someone else is feeling, maybe you can help them feel better."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "Close your eyes and think of something happy, if you think about something great you won’t be as afraid."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "When something seems bad, turn it around, and find something good."
  }
  ,
  {
    author: "Daniel Tiger",
    quote:  "When you feel so mad that you want to roar, take a deep breath, and count to four."
  },
  {
    author: "Daniel Tiger",
    quote:  "Saying I’m sorry is the first step, then, how can I help?"
  }
];
var quote = '';
function getRandomQuote(quotes) {
  quoteUsed = Math.floor(Math.random() * (quotes.length - 0) + 0); 
  quote = quotes[quoteUsed].quote + ' - ' + quotes[quoteUsed].author;
  return quote;
}
$(function() {
  $('#quote').text(getRandomQuote(quotes));
  $('#newquote').click(function() {
    lastQuote = quoteUsed.toString();
    $('#quote').text(getRandomQuote(quotes));
  });
  $('#tweet').click(function(){
    var hrefForTweeting = 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=';
    window.open(hrefForTweeting + quote);
  });
})