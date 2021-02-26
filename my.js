function Hamza() {
    var First = document.getElementById("nom").value;
    var Second = document.getElementById("prenom").value;
    var Gmail = document.getElementById("email").value;
    var Adres = document.getElementById("addres").value;
    var Tele = document.getElementById("phone").value;

    document.getElementById("tryN").innerHTML += "<div style='background-color: #c7cfb7;width:200px;height:50px;margin:20px'> + First + </div>";
    document.getElementById("tryP").innerHTML += "<div style='background-color: #f7f7e8;width:200px;height:50px;margin:20px'>" + Second + "</div>";
    document.getElementById("tryN").innerHTML += "<div style='background-color: #c7cfb7;width:200px;height:50px;margin:20px'>" + Gmail + "</div>";
    document.getElementById("tryP").innerHTML += "<div style='background-color: #f7f7e8;width:200px;height:50px;margin:20px'>" + Adres + "</div>";
    document.getElementById("tryS").innerHTML += "<div style='background-color: #557174;width:200px;height:100px;margin:40px 20px 20px 20px;'>" + Tele + "</div>";
    console.log(First);
    console.log(Second);
    console.log(Gmail);
    console.log(Adres);
    console.log(Tele);



}