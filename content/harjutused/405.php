<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ülesanne 405</title>
    <link rel="stylesheet" href="../../css/style.css">
    <style>
        table, td{
            border: solid lightblue 3px;
            background-color: cadetblue;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
<h1>Ülesanne 405</h1>

<?php
echo "<table>";
for ($i=1; $i <11;$i++) {
    echo "<tr>";
    for ($j = 1; $j < 11; $j++) {
        echo "<td>".$i*$j."</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
<br><a href="../../index.php?leht=test">Ülessanete leht</a>
</body>
</html>
