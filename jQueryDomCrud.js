/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 22, 2022
 * jQuery Dom Crud
 */

// 1. Wrap your JS code in the jQuery document.ready method
$(document).ready(function () {

    // 4. Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    var $aEl = $("<a>", { id: "cta" }).text("Buy Now!");
    $("p").after($aEl); //add after <p>

    // 2. Access (read) the data-color attribute of the <img>,
    // log to the console
    var $dataColor = $('img').attr("data-color");
    console.log(`The data-color of the image is ${$dataColor}`);

    // 3. Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $("ul li:eq(2)").addClass("highlight");

    // 5. Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $("p:last").remove();

    // 6. Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $($aEl).click(function () {
        $($aEl).html("Added to cart");
    })
});