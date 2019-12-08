// JavaScript Document


function addFood(selectbox,text,value )
{
	var food = document.createElement("OPTION");
	food.text = text;
	food.value = value;
	selectbox.options.add(food);
}

function addFood_List(){
var food = new Array("Burger","Bacon","Lettuce","Tomato","Potato");

for (var i=0; i < food.length; i++){
addFood(document.drop_list.Month_list, food[i], food[i]);
}

}

window.changeColor = function(value)
{
    alert(value);
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case '1':
            color = "#660000";
        break;
        case '2':
            color = "#005c99";
        break;
        case '3':
            color = "#00b300";
        break;
    }
    document.body.style.backgroundColor = color;
}
