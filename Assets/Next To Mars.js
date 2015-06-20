#pragma strict

function Start () {
	LoadAfterDelay("Mars");
}
 function LoadAfterDelay(Mars: String){
   yield WaitForSeconds(10); // wait 10 seconds
   Application.LoadLevel(Mars);
 }
    
function Update () {

}