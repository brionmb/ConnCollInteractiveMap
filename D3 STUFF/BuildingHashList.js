function BuildingHashList()
{
var scope=this;
var buildingList={};
var counter=0;

scope.addElement = function(x)
{
buildingList[counter]=x;
counter++;
}
scope.returnElementAt = function(x)
{
return buildingList[x];
}
scope.returnElementBy = function(x)
{
console.log("yo");
var item="";
console.log(buildingList);
console.log(buildingList.length);
for(var i=0;i<counter;i++)
{
console.log("here");
console.log(JSON.stringify(buildingList[i].getName()));
console.log(JSON.stringify(x));
 if(JSON.stringify(buildingList[i].getName()).valueOf()===JSON.stringify(x).valueOf())
 {
 console.log("THey are equal");
 return buildingList[i];
 }
}
console.log("ITEM");
console.log(item);
return item;
}
scope.getList = function()
{
return buildingList;
}



}