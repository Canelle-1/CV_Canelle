function photo(voyage) {
    var image;
    if (voyage == "Prague") {
        image = "/CV_Canelle/photo_pragues.jpeg";
    } else if (voyage == "Toulouse") {
        image = "/CV_Canelle/photo_toulouse.jpeg";
    } else if (voyage == "Olbia") {
        image = "/CV_Canelle/photo_olbia.jpeg";
    } else if (voyage == "Athènes") {
        image = "/CV_Canelle/photo_athènes.jpeg";
    } else if (voyage == "Naples") {
        image = "/CV_Canelle/photo_naples.jpeg";
    } else if (voyage == "Porto") {
        image = "/CV_Canelle/photo_porto.jpeg";
    }

    document.getElementById("monImage").src = image;
}
