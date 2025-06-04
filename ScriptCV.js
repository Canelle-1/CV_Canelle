
function photo(voyage) {
    var image;
    if (voyage=="Prague") {
        image = "photo_pragues.jpeg";
    } else if (voyage=="Toulouse") {
        image = "photo_toulouse.jpeg";
    } else if (voyage=="Olbia") {
        image = "photo_olbia.jpeg";
    } else if (voyage=="Athènes") {
        image = "photo_athènes.jpeg";
   
    } else if (voyage=="Naples") {
        image = "photo_naples.jpeg";
    } else if (voyage=="Porto") {
        image = "photo_porto.jpeg";
    }
    document.getElementById("monImage").src = image;
}

