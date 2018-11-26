var dropDownLink = document.getElementById('navFeature');
var dropDownContent = document.getElementById('dropDownContent');
var testVar = false;

dropDownLink.addEventListener('mouseover', displayDropDown, false);
dropDownLink.addEventListener('mouseout', removeDropDown, false);




function displayDropDown(){
    dropDownContent.style.display="initial";
}

function removeDropDown(){
    dropDownContent.style.display="none";
}