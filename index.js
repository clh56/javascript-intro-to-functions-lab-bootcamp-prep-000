function shout(string) {
return string.toUpperCase()
};

shout("hello");

function logshout(string) {
  return console.log(string.toLowerCase())
}

logShout ("hello");

function whisper(string){
  return string.toLowerCase();
}

whisper("HELLO");

function logWhisper(string){
  return console.log(string.toLowerCase())
}

logWhisper("HELLO")


function sayHiToGrandma(string) {
  if (string.toLowerCase() === string)
  { return "I can\'t hear you!" }
  if (string.toUpperCase() === string)
  { return "YES INDEED!" }
  if (string === "I love you, Grandma.")
  { return "I love you, too." }
}
