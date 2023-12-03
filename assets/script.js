var topics= ['HTML', 'CSS', 'GIT', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
    function listtopics() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
}

function selecttopic (){
if (randomTopic === 'HTML') {
    console.log("let's study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("let's study CSS!");
} else if (randomTopic ==='GIT') {
    console.log("let's study git!");
} else if (randomTopic === 'JavaScript') {
    console.log("let's study JavaScript!");
} else {
    console.log('please try again!');
}
}

console.log('Here are the topics we learned through Prework:');
listtopics()
console.log('Which topic should we study first?');
selecttopic()