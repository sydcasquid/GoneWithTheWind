//Establish the movie object. It has 2 methods, one with a parameter, the other 
//without.
//The parameter for leadingRole method is the key for one of the actressLead/actorLead 
//key-value pairs, If not, it will be 'undefined'.


movie = {

    title: "Gone With Wind",

    year: 1939,

    actressLead:"Vivien Leigh",

    actorLead: "Clark Gable",

    genre: "Epic",

    academyAwards: 8,

    leadingRole: function(actor) {

        return this[actor];

    },

    formatInfo: function() {

        return (`${this.title} was released in ${this.year}.

        It tells the story of the civil war in the US`);

    },

    quote: "Frankly My Dear, I don't give a damn",

    //Add an object attribute, and access ...

    profits: {

        yearOfRelease: 10,

        subsequentToDate: 40

    },



};


//You can log the whole object, or use the dot access operator and/or bracket 
//notation to access individual values.

console.log(movie);
console.log("Most famous quote from the movie :"  + movie.quote);
let role = movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role , " + movie.leadingRole("actressLead"));

roleWithMostVotes = "actorLead";
console.log("Role with most votes is " + 
            movie.leadingRole(roleWithMostVotes));


//Add an object attribute, and access ...

// profits: {

//     yearOfRelease: 10,

//     subsequentToDate: 40

// }


//... the yearOfRelease attribute

console.log("profits the year of release : " + movie.profits.yearOfRelease)



