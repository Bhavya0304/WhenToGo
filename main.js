
function cacl(){
    var out = document.getElementById("out").value.trim();
    var totalh = document.getElementById("totalh").value.trim();

    var totalhour = totalh.split('H')[0]
    var totalminute = parseInt(totalh.split('H ')[1].split('M')[0]) + (parseInt(totalhour) * 60);

    var outhour =  parseInt(out.split(':')[0]);
    var outminute = parseInt(out.split(':')[1]);
    var abc = (outhour *60) +outminute;

    var remaining = 510 - totalminute +1;

    // var check = outminute + remaining;
    var lastHour = Math.floor(remaining/60);

    var lastMinute = remaining%60;
    
    

    outhour += 	lastHour;
    outminute += lastMinute;
    if(outminute>60){
        outhour++;
        outminute -=60;
    }
    

   
    // console.log(lastHour);
    // console.log(lastMinute);

    var d = new Date();
    let hour = d.getHours() <12 ? d.getHours() : d.getHours() - 12;
    
    let totalminute1 = d.getMinutes();
    
    console.log(hour, typeof(hour));
    console.log(outhour, typeof(outhour));
    if(hour > outhour || (hour == outhour && totalminute1 > outminute) ){
        alert("Nikad.....")
    }
    else{
        alert("Ubho ree \n"+ outhour+':'+outminute)
    }

}