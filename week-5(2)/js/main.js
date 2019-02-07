function myFunction(a, b) {
   
    return a + b; //the function returns the product of p1 and p2
}
function arrays() {

    var pens;
    pens = new Array("red", "orange", "green", "blue", "purple");
    markers = pens;
    console.log(markers);
    console.log(markers[0]);
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("length of array is:" + markers.length);
}