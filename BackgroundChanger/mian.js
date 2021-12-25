// ----------- 1차 ------------
// function backcolor() {
//   document.getElementById('background').style.backgroundColor = "#db0d36";
// }

// ----------- 2차 ------------
// let hex = document.getElementById("hex");
// let btn = document.getElementById("btn");

// btn.addEventListener('click', function() {
//  var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// 	var color = '#';

//   for(var i = 0; i < 6; i++) {
// 		var random = Math.floor(Math.random() * hexNumbers.length);
// 		color += hexNumbers[random];
//     console.log(color);
// 	}
// 	document.body.style.backgroundColor = color;
// 	hex.textContent = color;
//   console.log(color);
// });

// ----------- 3차 ------------
var hex = document.getElementById("hex");
var btn = document.getElementById("btn");

btn.addEventListener('click', hexGenerator)
  function hexGenerator() {
  var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = '#';

  for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * hexNumbers.length);
		color += hexNumbers[random];
	}
	document.body.style.backgroundColor = color;
	hex.textContent = color;
};