<h2>Currency Calculator var 1</h2>
<form name="cal1" onclick="return validateForm()" method="post">

    <label for='kogus'>Input an amount:</label>
    <input type='number' name='kogus' id='kogus' value="1" min="1">Euro
    <fieldset>
        <legend>Choose Currency:</legend>
        <label for='ruble'>Rubles</label>
        <input type='radio' name='kogus' id='ruble' value="rub" onchange="change(event)">
        <br>
        <label for='dollar'>Dollar</label>
        <input type='radio' name='kogus' id='dollar' value="dol" onchange="change(event)">
        <br>
        <label for='yen'>Japanese Yen</label>
        <input type='radio' name='kogus' id='yen' value="yen" onchange="change(event)">
        <br>
        <label for='pounds'>British Pounds</label>
        <input type='radio' name='kogus' id='pounds' value="pound" onchange="change(event)">
        <br>
    </fieldset>
    <div id="answer">The answer goes here...</div>
</form>

<img src="content/Task7Calculator/img/none.png" alt="Picture" id="pic1">

<h2>Currency Calculator var 2</h2>
<form name="ca2">
    <label for='kogus2'>Input an amount:</label>
    <input type='number' name='kogus2' id='kogus2' value="1" min="1">Euro(s) to
    <select name="kogus2" onchange="selectChange(event)">
        <option value="nothing">-Select Currency-</option>
        <option value="ruble">Rubles</option>
        <option value="dollar">Dollar</option>
        <option value="yen">Japanese Yen</option>
        <option value="pound">British Pounds</option>
    </select>
    <div id="answer2">The answer goes here...</div>
</form>
<img src="content/Task7Calculator/img/none.png" id="pic2" alt="Picture2">

<h2>Currency Calculator var 3</h2>
<form name="cal3">
    <label for='kogus3'>Input an amount:</label>
    <input type='number' name='kogus3' id='kogus3' value="1" min="1" onclick="inputCurrency()">Euro(s) to

    <input type='text' name='kogus3' id='curName' placeholder="--Currency--">
    <label for='curName'>Write a currency(dollar,ruble,yen,pound)</label>

    <input type="button" onclick="inputCurrency()" value="Convert">
    <div id="answer3">The answer goes here...</div>
</form>
<img src="content/Task7Calculator/img/none.png" id="pic3" alt="Picture2">
<h2>Date Calculator</h2>
<form>    
    <label for='dateA'>Select a 1st Date:</label>
    <input type='date' id='dateA'><br>
    <label for='dateA'>Select a 2nd Date:</label>
    <input type='date' id='dateB'><br>
    <label for='date'>Press the button to show the difference in time</label>
    <input type="button" id="date" onclick="dateDiv()" value="Convert"><br>
    <div id="answerD">The answer goes here...</div><br>
    <a href="https://github.com/JaanKrohhin/Calculator">Github link to repository</a>
</form><br>
<div id="foo"></div>
