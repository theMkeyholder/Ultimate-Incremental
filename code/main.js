var points = new Decimal(0); //this defines the players points use the "new Decimal" thing on the end because thats how we are going to handle numbers over 1e308
var pointsProduction = new Decimal(0);
var pointsClick = new Decimal(1);

var generators = [] //this is defining a list with nothing inside
makeGenerators();
function makeGenerators()
{
	var prices = ["20","200","5000","2e4","1.25e5"] // this is define a list with 2 elements inside
	var production = ["0.1","1.5","9","30","75"]
	for(var a = 0 ; a < prices.length ; a = a + 1) //this is a for loop think of it like the repeat block in scratch
	{
		generators.push //push justs adds an item on to a list
		({
			price: new Decimal(prices[a]),
			production: new Decimal(production[a]),
			amount: new Decimal(0)
		})
	}
		
}

function buyGen(generator) //you can also make functions to take in varibles like this
{
	if(points.greaterThanOrEqualTo(generators[generator - 1].price)) //checks if player has enough
	{
		points = points.minus(generators[generator - 1].price); //takes away the points
		generators[generator - 1].amount = generators[generator - 1].amount.add(1); //adds 1 to the generator amount
		generators[generator - 1].price = generators[generator - 1].price.times(1.2) //mutiplys the gen cost by 1
		pointsProduction = pointsProduction.add(generators[generator - 1].production) //addes the production thing
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
	document.getElementById("gen 1 info").innerHTML = "Cost: " + generators[0].price + " points You own " + generators[0].amount + " of these";
	document.getElementById("gen 2 info").innerHTML = "Cost: " + generators[1].price + " points You own " + generators[1].amount + " of these";
}
setInterval(gameLoop,100);
