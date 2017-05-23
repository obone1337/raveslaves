function checkIt() {
  // Initialize scores
  var yes = 0;
  var no = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'yes') {
        yes++;
      }

      else if (e.value == 'no') {
        no++;
      }
    }
  }

  // Determine result
  var counts = "Yes: " + yes + ", " +
               "No: " + no;

  // What is the highest value?
  var max = Math.max(yes, no);

  // Form a message
  var message;

  if (max == yes) {
    heading = "You Got: Yes ";
    message = "You could totally spin some tracks! See you at the next festival! ";
    resultimage = "<img src='img/yes.jpg'>"
  }
  else if (max == no) {
    heading = "You Got: No ";
    message = "Aw, better luck next time. Try listening to some EDM, then come back. ";
    resultimage = "<img src='img/no.jpg'>"
  }

  // Display result
  var title = "Could you DJ a rave?";

  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-image').innerHTML = resultimage;


}
