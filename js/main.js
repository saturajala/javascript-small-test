// Ensimmäinen yritys tallentaa sanaa, ei toimi
/* $("#wordList").append('<div class="form-inline">\n\
<input type="text" placeholder="Add a word" class="form-control"/> \n\
<a href="#" id="removeWord">Remove</a></div>');
            });

            $("#wordkList").on("click", "#removeWord", function (e) { 
                e.preventDefault();
                $(this).parent('div').remove();
                checkCount--;
            });
            
            $("#saveData").click(function (e) {
                var resultArray = [];
                $('#wordList').find('div.form-inline').each(function() {
  					var rowData = {};
                    rowData['checkbox'] = $(this).find('input[type=checkbox]').val();
                    rowData['input'] = $(this).find('input[type=text]').val();
                    rowData['checkboxID'] = $(this).find('input[type=checkbox]').attr('id');
                    resultArray.push(rowData);
				});
                console.log(resultArray);
            });
        }); */


/*Yksinkertainen koodi, jossa tehdään muuttuja "words" minne laitetaan valmiiksi 
 * sanoja. En saanut toimimaan versiota, missä pystytään etsimään sanoja ruotsista suomeksi */

/*var words = {
    "koira": {
        translation: "en hund",
    },
    "tyttö": {
        translation: "en flicka",
    }
};

window.onload = onloadFunc;

function onloadFunc() {
    document.getElementById("search_button").onclick = myFunction;
}

function myFunction() {
    var entryVal = document.getElementById("entryInput");
    var entryId = entryVal.value.toLowerCase();
    if (entryId in words) {
        var message = "";
        message += "Suomi: " + entryVal.value + "<br />";
        message += "Ruotsi: " + words[entryId].translation + "<br />";
        document.getElementById("result").innerHTML = message;
        entryVal.value = "";
    } else {
        document.getElementById("result").innerHTML = "Sanaa ei valitettavasti löytynyt";
    }
    entryVal.focus();
} */


/*Sanakirjan luominen JavaScript-taulukkoa käyttäen*/

/* Arrayn luominen ja sinne uusien sanojen lisääminen*/
var finnishInput  = document.getElementById("finnish");
var swedishInput   = document.getElementById("swedish");

var arr = [];
var wordAdded  = document.getElementById("wordAdded");

/*Lisäys-funktio. Validointi on kesken (ei toiminut eka). */
function insert ( ) {

/* if (!/^[a-zA-Z]*$/g.test(finnishInput)){ 
    alert("Sana voi sisältää vain kirjaimia!");
    return false;
/*} 
else {*/
arr.push({finnish: finnishInput.value, swedish: swedishInput.value});
 clearAndShow();
 wordAdded.innerHTML = "Uusi sana lisätty!";
 for (var i = 0; i < arr.length; i += 1) {
 document.getElementById("modalTextSaved").innerHTML = "Lisätty uudet sanat: " + arr[i].finnish + " ja " + arr[i].swedish;
 }
/*} */
};

 // Tyhjennetään tiedot
function clearAndShow () {
 
  finnishInput.value = "";
  swedishInput.value = "";
  
  // Testaus consolessa muuttamalla taulukko json-muotoon
  console.log(JSON.stringify(arr));
};

// Etsitään sanoja vertaamalla taulukkoa ja inputtia
function search() {
    var entryVal = document.getElementById("entryInput");
    var entryId = entryVal.value.toLowerCase();
    for (var i = 0; i < arr.length; i += 1) {
            if (arr[i].finnish === entryId) {
                console.log(JSON.stringify(arr[i].swedish));
                document.getElementById("result").innerHTML = "";
                document.getElementById("result").innerHTML = "Sana löytyi: " + arr[i].swedish.toString();
            }
            else {
             document.getElementById("result").innerHTML = "Sanaa ei valitettavasti löytynyt";   
            }
        }
    };
    
function changeLang() {
    if(document.getElementById("fi")) {
        document.getElementById("fi").id = "se";
        console.log("turned to swedish");
        document.getElementById("se")[0].placeholder = "sana ruotsiksi";
        document.getElementById("se").innerHTML = "Vaihda FI - SE";
    }
    else if (document.getElementById("se")) {
        document.getElementById("se").id = "fi";
        console.log("turned to finnish");
        document.getElementById("fi")[0].placeholder = "sana suomeksi";
        document.getElementById("fi").innerHTML = "Vaihda SE - FI";
    }
};
    
function search2() {
    var entryVal2 = document.getElementById("entryInput2");
    var entryId2 = entryVal2.value.toLowerCase();
    
    //Jos sana on suomesta - ruotsiksi
    if(document.getElementById("fi")) {
    for (var i = 0; i < arr.length; i += 1) {
            if (arr[i].finnish === entryId2) {
                console.log(JSON.stringify(arr[i].swedish));
                document.getElementById("result2").innerHTML = "";
                document.getElementById("result2").innerHTML = "Sana löytyi: " + arr[i].swedish.toString();
            }
            else {
             document.getElementById("result2").innerHTML = "Sanaa ei valitettavasti löytynyt";   
            }
        }
    }
   // Jos sana on ruotsista - suomeksi
    else if (document.getElementById("se")) {
            for (var i = 0; i < arr.length; i += 1) {
            if (arr[i].swedish === entryId2) {
                console.log(JSON.stringify(arr[i].finnish));
                document.getElementById("result2").innerHTML = "";
                document.getElementById("result2").innerHTML = "Sana löytyi: " + arr[i].finnish.toString();
            }
            else {
             document.getElementById("result2").innerHTML = "Sanaa ei valitettavasti löytynyt";   
            }
        }
    
        }
    };