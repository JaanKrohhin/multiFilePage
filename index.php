<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/board.js"></script>
    <script src="js/puzzleland.js"></script>
    <script src="../../js/calc.js"></script>
    <title>Krohhin PHP Leht</title>
</head>
<body>
<?php
include ('header.php');
include ('nav.php');

?>
<main>
    <?php
    if (isset($_GET['leht'])) {
        include($_GET['leht'] . '.php');
    }else {
        include ('content/_main.php');
    }
    include ('footer.php');
    ?>
</main>
</body>
</html>

