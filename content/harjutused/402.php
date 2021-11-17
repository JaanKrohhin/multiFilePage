<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 402</title>
</head>
<body>
<h1>Ülesanne 402</h1>
<h2>Checkbox</h2>
<?php
$i=1;
while ($i<=20){
    echo "<input type='checkbox' name='box' id='$i' value='$i'>";
    echo "<label for='$i'>See on kast ".$i."</label><br>";
    $i++;
}
?>
<h2>Teksti lahtrid</h2>
<?php
for ($i=1; $i <21;$i++){
    echo "<input type='text' name='cell' id='cell[$i]' placeholder='$i'>";
    echo "<label for='cell[$i]'>See on lahter ".$i."</label><br>";
}
?>
<h2>Radio nuppud</h2>
<?php
for ($i=1; $i <21;$i++){
    echo "<input type='radio' name='rad' id='value$i'>";
    echo "<label for='value$i'>See on nupp ".$i."</label><br>";}
?>
<br><a href="../../index.php?leht=test">Ülessanete leht</a>
</body>
</html>
