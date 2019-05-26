<?php
$Name = $University = $Phonenumber= $Email = $Address = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   $Name = test_input($_POST["Name"]);
   $Email = test_input($_POST["Email"]);
   $Phonenumber = number_input($_POST["Phonenumber"]);
   $University = test_input($_POST["University"]);
   $Address = test_input($_POST["Address"]);
}

function test_input($data)
{
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>