//For card:
var square;
var el;
// When generating number for square, set in variable that is equal to id.

    // Keep track of Random numbers used, do not duplicate
        var cardSet = [];
        //if tile is in cardSet
        var insideCardSet = cardSet.includes(square)
        for(var i = 0; i <=24; i++) {
            if(i<=0 && i<5) {
                Math.floor(Math.random() * 15) + 1;
                while (insideCardSet == false) {
                    cardSet.push(square);
                }
            }
            else if(i>=5 && i<10) {
                Math.floor(Math.random() * 15) + 16;    
                while (insideCardSet == false) {
                    cardSet.push(square);
                }
            }
            else if(i>=10 && i<14) {
                Math.floor(Math.random() * 15) + 31;   
                while (insideCardSet == false) {
                    cardSet.push(square);
                }
            }
            else if(i>=14 && i<19) {
                Math.floor(Math.random() * 15) + 46;   
                while (insideCardSet == false) {
                    cardSet.push(square);
                }
            }
            else {
                Math.floor(Math.random() * 15) + 46;   
                while (insideCardSet == false) {
                    cardSet.push(square);
                }
            }
        //Increase squareID # by one?
            var prefix = 'square';
            for(var j = i; el = document.getElementById(prefix + j); j++) {
                el.style.display = square;
            }
            document.getElementById("square[]").innerHTML = square;
        }
        
 

//For drawing
    //Pull numbers out at Random
    var counter = 1;
    var tile;
    var drawnTilesSet = [];
    var numberSelected = drawnTilesSet.includes(tile);

    while (counter>75) {
        tile = function randomNumber() {
            return Math.floor(Math.random() * 75) + 1;
        }
        while (drawnTilesSet == false) {
            numberSelected.push(tile);
            counter += 1;
        }

    }
 
    //Set to correct letter
    if (tile >= 61 && tile <=75 ) {
        document.write("O " + tile);
    }
    else if (tile >= 46 && tile <=60 ) {
        document.write("G " + tile);
    }
    else if (tile >= 31 && tile <=45 ) {
        document.write("N " + tile);
    }
    else if (tile >= 16 && tile <= 30) {
        document.write("I " + tile);
    }
    else {
        document.write("B " + tile);
    }

        // If number/letter combination matches square
        //if cardSet.inside(tile) == true,
            //var markSquare = document.getElementById("FIGURE OUT HOW TO GET ELEMENT ID from the number");
            // element.classList.add("marked");
 

//Bingo! = true
//if colB[0] && colB[1] && colB[2] && colB[3] && colB[4] == filled
    //or
//if colI[0] && colI[1] && colI[2] && colI[3] && colI[4] == filled
    //or
//if colN[0] && colN[1] && colN[2] && colN[3] && colN[4] == filled    
    //or
//if colG[0] && colG[1] && colG[2] && colG[3] && colG[4] == filled
    //or
//if colO[0] && colO[1] && colO[2] && colO[3] && colO[4] == filled
    //or
//if colB[0] && colI[0] && colN[0] && colG[0] && colO[0] == filled
    //or
 //if colB[1] && colI[1] && colN[1] && colG[1] && colO[1] == filled
    //or   
//if colB[2] && colI[2] && colN[2] && colG[2] && colO[2] == filled
    //or
//if colB[3] && colI[3] && colN[3] && colG[3] && colO[3] == filled
    //or
//if colB[4] && colI[4] && colN[4] && colG[4] && colO[4] == filled
    //or
//if colB[0] && colI[1] && colN[2] && colG[3] && colO[4] == filled
    //or
//if colB[4] && colI[3] && colN[2] && colG[1] && colO[0] == filled
    //or
//if colB[0] && colB[4] && colN[2] && colO[4] && colO[0] == filled