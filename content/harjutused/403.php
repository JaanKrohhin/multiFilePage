<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 403</title>
</head>
<body style="background-color: grey">
<h1>Ülesanne 403</h1>
<?php
//värvi nimed
$colours=array("AliceBlue","CadetBlue","Crimson","DarkGoldenRod","DarkMagenta","FireBrick","GhostWhite","LightGreen","LightYellow","MediumSpringGreen","MediumTurquoise","MidnightBlue","Olive","Orange","Teal");
for ($i=0; $i <15;$i++){
    echo "<span style='color: $colours[$i]'>$colours[$i]< /span ><br>";
}
?>
<br><a href="../../index.php?leht=test">Ülessanete leht</a>
</body>
</html>
