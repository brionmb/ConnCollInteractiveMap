
function BuildingHashList()
{
var scope=this;
var buildingList={};
var counter=0;

scope.addElement = function(x)
{  
		counter ++;
        buildingList[x.getName()]=x;
}
scope.returnElementAt = function(x)
{

return buildingList[x];
}
scope.returnElementBy = function(x)
{
 		if (buildingList[x]!=null)
 		{
 			return buildingList[x];
 		}
 		else
 		return null;
}

scope.getCounterSize = function()
{
	return counter;
}
scope.getList = function()
{
return buildingList;
}



}
