//Use this Array of objects to complete the assignment.
var people =[
    {first:"Jason", last:"Vorhees", credit:"Friday the 13th"},
    {first:"Freddy", last:"Krueger", credit:"A Nightmare on Elm Street" },
    {first:"Roger", last:"Rabbit", credit:"Who Framed Roger Rabbit" },
    {first:"Kevin", last:"McCallister", credit:"Home Alone" },
    {first:"Godzilla", last:"King of The Monsters", credit:"Godzilla" },
    {first:"Buzz", last:"Lightyear", credit:"Toy Story" },
    {first:"Marion", last:"Cobretti", credit:"Cobra" }
]

var body = document.querySelector("body"),
    str = "";
    
    for(var i = 0; i < people.length; i++){
        str += "<div id='" + i + "' class='border'>"
              str  += "<p>";
               str += people[i].first;
              str  +="</p>"
              str  += "<p>";
               str += people[i].last;
              str  +="</p>"
              str  += "<p>";
               str += people[i].credit;
              str  +="</p>"
              str+= "</div>"
        }
        body.innerHTML = str;