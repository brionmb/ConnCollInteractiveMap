function buildingNode(buildName,buildLocationNum){


var scope = this;
var name = buildName;
var location = buildLocationNum;
scope.getLocation = function()
{
return location;
}

scope.getName = function()
{
return name;
}





}