var points = new Decimal(0); //this defines the players points use the "new Decimal" thing on the end because thats how we are going to handle numbers over 1e308
var pointsProduction = new Decimal(0);
var pointsClick = new Decimal(1);

var gen1cost = new Decimal(20);
var gen1amount = new Decimal(0);

function buyGen()
{
	if(points.greaterThanOrEqualTo(gen1cost)) //checks if player has enough
	{
		points = points.minus(gen1cost); //takes away the points
		gen1amount =gen1amount.add(1); //adds 1 to the generator amount
		gen1cost = gen1cost.times(1.2) //mutiplys the gen cost by 1
		pointsProduction = pointsProduction.add(0.1) //addes the production thing
	}
}

function clickPoints()
{
	points = points.add(1);
}

function gameLoop()
{
	points = points.add(pointsProduction)
	document.getElementById("points").innerHTML = "Points:" + points;
	document.getElementById("gen 1 info").innerHTML = "Cost: " + gen1cost + " points You own " + gen1amount + " of these";
}
setInterval(gameLoop,100);