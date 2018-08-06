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
    var body = document.querySelector("body"); 
    for(var i = 0; i < people.length; i++)
    {
        var tempDiv = document.createElement('div');
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var fName = document.createTextNode(people[i].first);
        var lName = document.createTextNode(people[i].last);
        var credit = document.createTextNode(people[i].credit);

        p.appendChild(fName);
        p1.appendChild(lName);
        p2.appendChild(credit);
        tempDiv.appendChild(p);
        tempDiv.appendChild(p1);
        tempDiv.appendChild(p2);
        body.appendChild(tempDiv);

        tempDiv.className = 'border';
        tempDiv.id = [i];
        tempDiv.setAttribute('id', [i])
    } 