/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 22, 2022
 * jQuery 'To Do List'
 */

$(document).ready(function () {

  // 1. Toggles "done" class on <li> element
  $('li').click(function () {
    $(this).toggleClass('done');
  })

  // 2. Delete element when delete link clicked
  $(".delete").click(function () {
    //$(this).parent().remove();   //DELETE SELECTED ITEM
    $(this).parent().fadeOut();    //EXTRA CREDIT
  })

  // 3. Adds new list item to <ul>
  // add listener for add
  $(".add").click(function () {
    const text = $('input').val();

    //only add to list if  text is not empty
    if (text !== "") {

      //create new item, then add to 'ul'
      $liEl = $("<li>").append($("<span>").text(text), $("<a class=delete>").text("Delete"))
      $('ul').append($liEl);

      //clear input field
      $('input').val('');  //js input.value = '';   

      //if click to item on list, toggle to 'done'
      $liEl.click(function () {
        $(this).toggleClass('done');
      })

      //if click to Delete, delete the li element / remove from the DOM
      $(".delete").click(function () {
        //$(this).parent().remove();   //DELETE SELECTED ITEM
        $(this).parent().fadeOut();    //EXTRA CREDIT
      })
    } //end if
  }) //end $(".add-item").click(function () {}
}); //end jquery