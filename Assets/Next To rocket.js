#pragma strict

function Start () {
	LoadAfterDelay("Rocket Launch");
}
 function LoadAfterDelay(RocketLaunch: String){
   yield WaitForSeconds(10); // wait 10 seconds
   Application.LoadLevel(RocketLaunch);
 }
    
function Update () {

}