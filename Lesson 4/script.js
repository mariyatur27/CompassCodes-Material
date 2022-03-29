document.getElementById('submit').addEventListener('click', function() {
  var f_name = document.getElementById('fname').value;
  var l_name = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var birth = document.getElementById('birth').value;
  var tel = document.getElementById('tel').value;
  document.getElementById('submit').style.backgroundColor = '#F9CE21';

  var info = [f_name, l_name, email, birth, tel];
  console.log(info);
  var final_list = [];

  for (var i = 0; i < info.length; i++) {
    if (info[i] !== '') {
      final_list.push(info[i])
    }
  }
  console.log(final_list);

  document.getElementById('output_space').innerHTML = "Here is the  info that I got from you: ".concat(final_list);
});



document.getElementById("reset").addEventListener("click", function () {
  document.getElementById('fname').value = "";
  document.getElementById('lname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('birth').value = "";
  document.getElementById('tel').value = "";
});
