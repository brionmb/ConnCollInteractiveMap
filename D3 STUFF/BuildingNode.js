function buildingNode(buildName,buildLocationX,buildLocationY){


var scope = this;
var name = buildName;
var locationX = buildLocationX;
var locationY = buildLocationY;

scope.getLocationX = function()
{
return locationX;
}
scope.getLocationY = function()
{
return locationY;
}
scope.getName = function()
{
return name;
}





}