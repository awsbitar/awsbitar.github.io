let Person = {
    FirstName: "Aws",
    LastName: "Albitar",
    Nationality: "Syrian",
    Age: "22",
    Degree: "Electrical Engineering",
    updateAge: function() {
        return ++Person.Age;
    }
};
    

function PersonalInfo(){
        var TableOfContent = ["class", "Full Name", "OverView", "Education", "Communication Skills", "Adress"];
        var html = "";
        for (var x = 0; x < TableOfContent.length; x++){
            supp = "document.getElementById('"+TableOfContent[x]+"').scrollIntoView()";
            link += '<a onclick = "'+supp+'">'+TableOfContent[x]+'</a><br>';
        }
        document.getElementById("demo").innerHTML = link;
}

function Checker() {
    var result = confirm('Are you sure you want to go to the instagram page?');
    if (result==false) {
    event.preventDefault();
    }

} 



