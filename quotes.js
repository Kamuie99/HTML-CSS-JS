const quotes = [
{
    quote: "From zero to hero",
    author: "바닥에서 영웅으로",
},
{
    quote: "Desperate trumphs over luck",
    author: "간절함은 행운을 이긴다",
},
{
    quote: "One day or day one, It's your choice",
    author: "하루 또는 첫날 당신의 선택이다",
},
{
    quote: "Believe you can and you're halfway there",
    author: "할 수 있다고 믿으면 반은 온 것이다",
},
{
    quote: "All we have is now",
    author: "우리가 가진 것은 지금이다",
},
{
    quote: "Don't let yesterday take up too much of today",
    author: "어제가 오늘을 너무 많이 차지하게 하지 마세요",
},
{
    quote: "Things end, people change, And life goes on",
    author: "모든 건 끝이 있고 사람들은 변한다, 그래도 삶은 계속된다",
},
{
    quote: "If you can dream it, you can do it",
    author: "꿈을 꿀 수 있다면 할 수 있습니다",
},
{
    quote: "Love is, above all else, gift of oneself",
    author: "사랑은 무엇보다도 자신을 위한 선물이다",
},
{
    quote: "A friend is a second self",
    author: "친구는 제 2의 자신이다",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
