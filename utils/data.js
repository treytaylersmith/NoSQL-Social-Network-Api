const userNames = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Amelia",
  "Amee",
  "Andrea",
  "Angela",
  "Anna",
  "Anne",
  "Audrey",
  "Avarice",
  "Bella",
  "Bernadette",
  "Carol",
  "Caroline",
  "Carolyn",
  "Chloe",
  "Claire",
  "Deirdre",
  "Diana",
  "Diane",
  "Donna",
  "Dorothy",
  "Elizabeth",
];

const emails = [
  "Abigail@emails.com",
  "Alexandra@emails.com",
  "Alison@emails.com",
  "Amanda@emails.com",
  "Amelia@emails.com",
  "Amy@emails.com",
  "Andrea@emails.com",
  "Angela@emails.com",
  "Anna@emails.com",
  "Anne@emails.com",
  "Audrey@emails.com",
  "Ava@emails.com",
  "Bella@emails.com",
  "Bernadette@emails.com",
  "Carol@emails.com",
  "Caroline@emails.com",
  "Carolyn@emails.com",
  "Chloe@emails.com",
  "Claire@emails.com",
  "Deirdre@emails.com",
  "Diana@emails.com",
  "Diane@emails.com",
  "Donna@emails.com",
  "Dorothy@emails.com",
  "Elizabeth@emails.com",
];

const thoughts = [
  "i am a big fan of this",
  "i am not a big fan of this",
  "i think we should all hang out",
  "i think we should not all hang out",
  "netflix is really cool",
  "netflix is not really cool",
  "i am a thinking person",
  "i am not a thinking person",
  "i am a robot",
  "i am not a robot",
  "for some reason i feel cool",
  "for some reason i do not feel cool",
  "there are sometimes clouds in the sky",
  "there are sometimes not clouds in the sky",
];

const reactions = [
  "cool",
  "not cool",
  "dumb",
  "not dumb",
  "smart",
  "not smart",
  "i agree",
  "i do not agree",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getRandomThoughts = (int, username)=>{
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
          thoughtText: getRandomArrItem(thoughts),
          username,
          reactions: getRandomReactions(int, username),
          
        });
    }
    return results;
}

const getRandomReactions = (int, username) =>{
    const results = []
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username,            
          });

    }
    return results;
}

const getUser = (i)=>{
    return {
        name:userNames[i],
        email: emails[i]
    }

}

module.exports = {getRandomThoughts, getUser};