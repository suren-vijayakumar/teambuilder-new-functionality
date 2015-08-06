

function shuffle(array) {// Fisher–Yates Shuffle
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function buttonAppend(){
    for(var i=2; i<=11; i++) {

        $('.buttonDiv').append("<button class='"+ i +"teamButton btn btn-primary btn-lg "+ " data-index = " + i + "'>" + (i) + "</button>");

    }
 $('.buttonDiv').append("<button class='randomButton btn btn-warning btn-lg'>random</button>");
}

var cohortAppend = function(myArray, noTeams) {

    $(".cohortDiv").children().remove();
    for(var c=0; c<noTeams; c++) {
        var d = c+1;
        //$(".cohortDiv").append("<div class ='group" + (c+1) +"'> <p>Group</p>" + (c+1) + "</div>");
        $(".cohortDiv").append("<div id ='newGroup" + d +"'class ='group panel-body'> Group " + d + "</div>");
        for (var f = 0; f < myArray[c].length; f++) {

            //$(".cohortDiv").append("<div class='name'> "+ myArray[c][f].name + "</div>");
            $("#newGroup"+d).append("<div class='name'> "+ myArray[c][f].name + "</div>");
            var $g=$("#newGroup"+d).children().last();
             $g.hide().delay(500*f).slideDown();

        }
    }

};


$(document).ready(function(){
    var gammaArray=[];
    var i = 0;
    var p=0;
    $.ajax({
        type: "GET",
        url: "/data",
        dataType: 'json',
        success: function (data) {
            for(var i= 1; i<=22; i++) {
                gammaArray.push(data[i]);
            }
            console.log(gammaArray);
        }

    });
    buttonAppend();

for(var n = 2; n<11; n++) {
        console.log(n);
        var className = '.'+n+'teamButton';
        $("body").on('click', className, function () {
            //noTeams = new Number(n);
            noTeams = $(this).data("index");

            console.log("Num of teams" + noTeams);
        });
    }

    $("body").on('click', '.2teamButton', function() {

        noTeams=2;

    });


    $("body").on('click', '.3teamButton', function() {

        noTeams=3;

    });


    $("body").on('click', '.4teamButton', function() {

        noTeams=4;

    });


    $("body").on('click', '.5teamButton', function() {

        noTeams=5;

    });


    $("body").on('click', '.6teamButton', function() {

        noTeams=6;

    });


    $("body").on('click', '.7teamButton', function() {

        noTeams=7;

    });


    $("body").on('click', '.8teamButton', function() {

        noTeams=8;

    });

    $("body").on('click', '.9teamButton', function() {

        noTeams=9;

    });

    $("body").on('click', '.10teamButton', function() {

        noTeams=10;

    });


    $("body").on('click', '.11teamButton', function() {

        noTeams=11;

    });





    $("body").on('click', '.randomButton', function() {

        var arrayToPop = gammaArray.slice();

        p = Math.floor((arrayToPop.length)/noTeams);// whole number people per team
        var teamArray =[];
        arrayToPop= shuffle(arrayToPop);
        for(var j=0; j<noTeams; j++){
            var tempArray=[];
            for (var k= j*p; k<p*(j+1); k++){
                tempArray.push(arrayToPop.pop());

            }
            teamArray.push(tempArray);
        }

        var b= arrayToPop.length; // getting the length of the remaining people
        for (var a=0; a<b; a++){
            teamArray[a].push(arrayToPop.pop());
        }
        console.log(teamArray);
        cohortAppend(teamArray, noTeams);

    });


});