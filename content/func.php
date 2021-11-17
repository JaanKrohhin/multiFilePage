<?php
//finding age func
function getAge(){
    echo "<form method='post' action='' >";
    echo "Palun sinu sünnipäev";
    echo "<input type='date' name='age'>";
    echo "<input type='submit' name='arv' value='Arvuta Vanus'>";
    echo "</form>";
    if (isset($_POST["arv"])){
        $age=$_POST["age"];
        $diff=date_diff(date_create($age), date_create("16.11.21"));
        echo $diff->format("%y")." aastat vana";
    }
}
function schBreak(){
    $date1=date_create('16-11-2021');
    $date2=date_create('20-12-2021');
    $times=date_diff($date1, $date2);
    echo "<i>Talve koolivaheajani on ".$times->format('%a')." päeva</i>";
}
function getSeason(){
    //show as a different pic for each season
    //array
    $images=array("Summer"=>"img/summer.png","Autumn"=>"img/autumn.png","Spring"=>"img/spring.png","Winter"=>"img/winter.png");
    $day=date("z");
    $autumn=array(date("z",strtotime("September 1")),date("z",strtotime("November 30")));
    $winter=array(date("z",strtotime("December 1")),date("z",strtotime("February 28")));
    $spring=array(date("z",strtotime("March 1")),date("z",strtotime("May 31")));
    $summer=array(date("z",strtotime("June 1")),date("z",strtotime("August 31")));
    $season="";
    if ($day>=$autumn[0] && $day<=$autumn[1]){$season="Autumn";}
    elseif ($day>=$winter[0] && $day<=$winter[1]){$season="Winter";}
    elseif ($day>=$spring[0] && $day<=$spring[1]){$season="Spring";}
    else {$season="Summer";}
    $seasonImg=$images[$season];
    echo $seasonImg;
}
?>