function show_confirm()
{
var r=confirm("Do you want to submit?");
if (r==true)
    {
    alert("Successful!Thank You!")
    window.location.href="index.html";
    }
else
  {
  alert("You cancelled");
  }
}