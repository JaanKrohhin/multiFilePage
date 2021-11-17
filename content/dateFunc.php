<h1>Kuupäeva Funktsioonid</h1>
<ol>
    <li>time()</li>
    <li>date()</li>
    <li>mktime()</li>
    <li>strtotime()</li>
    <li>date_default_timezone_set()</li>
</ol>
<h1>Ülesanded</h1>
<section>
    <h2>Kuupäev ja aeg formaadis DD/MM/YYYY HH:MM</h2>
    <?php
    echo date("d/m/Y g:i");
    ?>
</section>
<section>
    <h2>Kasutaja vanus DD/MM/YYYY</h2>
    <?php
    include("func.php");
    echo getAge();
    ?>
</section>
<section>
    <h2>Koolivaheag DD</h2>
    <?php
    schBreak();
    ?>
    <h2>2022 uue aastani</h2>
    <?php
    $year=date("Y");
    $Lday=strtotime("last day of December");
    $dateT=strtotime("now");
    $dateDiff=$Lday-$dateT;
    echo $year." aasta lõpuni ".floor($dateDiff/(60*60*24))." päeva";
    ?>
</section>
<section>
    <h2>Hooaja Pilt</h2>
    <img src="content/<?php getSeason();?>" alt="Season" width="380px" height="250px" style="border-radius: 80px">
</section>


