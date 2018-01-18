/*Deze functie controlleert al de inputs of ze leeg zijn of niet*/
function send(e) {
    e.preventDefault();
    var dropdownList =  document.getElementById("ddl");
    var selectDdl = dropdownList.options[dropdownList.selectedIndex].value;
    var title = document.getElementById("title");
    var titleLen = title.length;
    var year = document.getElementById( "year");
    var yearLen= year.length;
    var width = document.getElementById( "width");
    var widthLen = width.length;
    var height = document.getElementById( "height");
    var heightLen = height.length;
    var depth = document.getElementById( "depth");
    var depthLen = depth.length;
    var description = document.getElementById( "description");
    var descriptionLen =  description.length;
    var origin = document.getElementById( "origin");
    var originLen = origin.length;
    var image = document.getElementById( "image");
    var imageLen =  image.length;
    var signature = document.getElementById( "signature");
    var signatureLen =  signature.length;
    var optional = document.getElementById( "optional");
    var optionalLen = optional.length;
    var minimum = document.getElementById( "minimum");
    var minimumLen = minimum.length;
    var maximum = document.getElementById( "maximum");
    var maximumLen = maximum.length;
    var price = document.getElementById( "price");
    var priceLen = price.length;
    var end = document.getElementById( "end");
    var endLen = end.length;
    var check = document.getElementById( "check");
    var checkLen;
    var isValid = false;

if(selectDdl === 0){
    console.log(dropdownList);
    console.log('leeg');
}

}
function loginForm(e) {
    e.preventDefault();
    console.log('leeg');
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.style.display = "none";
    var form = document.getElementById("interaction");
    form.style.display = "inherit";

}



/**function bindEvents: functie  die alle event handlers  aan de functies verbind */
function bindEvents() {
    // var formbtn = document.getElementById("addNewAuc");
    // formbtn.addEventListener('submit', send);
    //
    var login = document.getElementById("btnLogin");
    login.addEventListener('click', loginForm);
}

bindEvents();