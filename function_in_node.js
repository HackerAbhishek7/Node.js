
// Normal javascript

// function displayMessage()
// {
//     console.log("this is a display meassage function");
// }

// displayMessage();

var display = function()
{
    console.log("Hello");
}

var square = function(x)
{
    var z = x * x;
    console.log(z);
}


var multiply = function(m)
{
    console.log(2 * m);
}

module.exports.square = square;
module.exports.multiply = multiply;