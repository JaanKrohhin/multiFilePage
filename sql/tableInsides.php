<?php
require("conf.php");
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Andmetabeli sisu näitamine</title>
</head>
<body>
<h1>Andmetabeli "Loomad" sisu näitamine</h1>
<?php
global $connection;
//showing data in a table
$order=$connection->prepare("SELECT id,nimi,kirjeldus FROM loomad");
$order->bind_result($id,$nimi,$kirjeldus);
$order->execute();
echo "<table>";
echo "<tr>
<th>ID</th>
<th>Loomanimi</th>
<th>Kirjeldus</th>
</tr>";
while($order->fetch()){
    echo "<tr>";
    echo "<td>$id</td>";
    echo "<td>$nimi</td>";
    echo "<td>$kirjeldus</td>";
    echo "</tr>";
}
echo "</table>";
?>
</body>
</html>

