function show_confirm()
{
var r=confirm("Have you see the terms and conditions?");
if (r==true)
    {
    alert("Successful!Thank You!")
    window.location.href="index.html";
    }
else
  {
  alert("The aim  of this competition  was  to  record  the  developments  on  sclera segmentation in  the cross-resolution  environment (sclera trait  captured  using  multiple  acquiring  sensors  with different image resolutions). For the purpose of benchmarking, you have to employed two datasets of sclera images captured using different sensors. The first dataset was collected using a DSLR camera and the second one was collected using a mobile phone camera.");
  }
}