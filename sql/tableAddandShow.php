<?php
require("conf.php");
global $connection;
$order=$connection->prepare("INSERT INTO loomad(nimi) VALUES (?)");
//"s"-string; $_REQUEST['loomanimi'] query in input textbox with name="loomanimi"
if (!empty($_REQUEST['loomanimi'])) {
    $order->bind_param("s", $_REQUEST['loomanimi']);
    $order->execute();
    //changes adress bar
    //$_SERVER[PHP_SELF] before file name
    header("Location: $_SERVER[PHP_SELF]");
}
if (isset($_REQUEST['kustuta'])){
    $order=$connection->prepare('DELETE FROM loomad where id=?');
    $order->bind_param("i",$_REQUEST['kustuta']);
    $order->execute();
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Andmetabelisse andmete lisamine</title>
</head>
<body>
<h1>Andmetabeli "Loomad" sisu näitamine ja lisamine</h1>
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
<th>Tegevus</th>
</tr>";
while($order->fetch()){
    echo "<tr>";
    echo "<td>$id</td>";
    echo "<td>$nimi</td>";
    echo "<td>$kirjeldus</td>";
    echo "<td><a href='$_SERVER[PHP_SELF]?kustuta=$id'>Kustuta</a></td>";
    echo "</tr>";
}
echo "</table>";
?>
<br>
<form action="" method="post">
    <label for="nimi">Loomanimi</label>
    <input type="text" name="loomanimi" id="nimi" maxlength="50">
    <input type="submit" value="Lisa">
</form>
<?php
$order->close();
?>
</body>
</html>

