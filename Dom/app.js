<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Handson</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <div>
            <h2>Q1- Write a code to access element. which is having id text</h2>
            <h3 id="text">This is a Id selector</h3>
                <pre>
                    const IdAccess = document.getElementById('text');
                </pre>
        </div>
        <div>
            <h2>Q2- Write the code to access element. which is having tag as h1</h2>
            <h1>This is a Element selected</h1>
                <pre>
                    const ElementAccess = document.getElementsByTagName('h1');
                    ElementAccess[0].innerHTML="";
                </pre>
        </div>
        <div>
            <h2>Q3- Write the code to access element. which is haveing class</h2>
            <h3 class="box">This is a Class Selected</h1>
                <pre>
                    const ClassAccess = document.getElementsByClassName('box');
                    ClassAccess[0].innerHTML="";
                </pre>
        </div>
        <div>
            <h2>Q4- &lt; h1 &gt;Hello &lt; /h1 &gt;  Change the heading from "Hello" to "Hello World" using DOM Function</h2>
            <h1 id="change">Hello</h1>
            <button onclick="ChangeMe()">Change</button>
                <pre>
                    function ChangeMe() {
                        const ChangeIt = document.getElementById('change');
                        ChangeIt.innerHTML="Hello World";
                    }
                    You can also Do This 

                    const check = document.querySelector("#change");
                    check.addEventListener('click', function(){
                        check.innerHTML = "Hello World"
                    });
                </pre>
        </div>
        <div>
            <h2>Q5- Create and HTML page having a content Hello World and a button name Relpace Text. When User will click on this button page content should be changed to Wellcome to Elevation academy</h2>
            <h3 id="Replace">Hello World</h3>
            <button onclick="ReplaceMe()">Replace</button>
                <pre>
                    function ReplaceMe() {
                        const ReplaceIt = document.querySelector('#Replace');
                        ReplaceIt.innerHTML=" Welcome To Elevation Academy";
                    }
                </pre>
        </div>
        <div>
            <h2>Q6- &lt; h1 &gt;Hello &lt; /h1 &gt;  Add one style attributs and give text color as red and id value as heading in the above given h1 tag using function</h2>
            <h3 id="Heading">Hello</h3>
            <!-- <button onclick="ReplaceMe()">Replace</button> -->
                <pre>
                    const ColorChanger = document.querySelector("#Heading");
                    ColorChanger.addEventListener('click', function(){
                        ColorChanger.style.color = 'red';
                    });
                     
                    You can also do 
                    const ColorChanger = document.querySelector("#Heading");
                    ColorChanger.style.color = 'red';
                </pre>
        </div>
        <div>
            <h2>Q7- Create a three card on HTMl page and arrange them using flex property in row or horizantal direction and also create button at the bottom named "Change Flex direction". When user click on this button, the card arrangement should be changed to vertical direction </h2>
            <div id="Dimention">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
            <button onclick="direction()">Change Direction</button>

            <pre>
                function direction() {
                    let changeDimention = document.getElementById('Dimention');
                    if (myDir.style.flexDirection === 'row') {
                        myDir.style.flexDirection = 'column';
                    }
                    else{
                        myDir.style.flexDirection = 'row';
                    }
                }
                
                You can also do in this way

                const myDir = document.getElementById('Dimention');
                    myDir.addEventListener('click', function(){
                        if (myDir.style.flexDirection === 'row') {
                            myDir.style.flexDirection = 'column';
                        }
                        else{
                            myDir.style.flexDirection = 'row';
                        }
                    
                });
            </pre>
        </div>
        <div>
            <h2>Q8- What is the difference between doucment vs window</h2>
            <p> When JavaScript is executed inside the browser, the window object is the JavaScript Global object. The document object is a property of the window object. The window object represents the browser window. The document object represents the HTML document loaded in that window.</p>
        </div>
        <div>
            <h2>Q9- Write a code to implement timer clock using JS-- display HH:MM:SS --The time should keep updating every second</h2>
            <h3 id="Timer"></h3>
                <pre>
                    setInterval(updateTime, 1000)
                    function updateTime() {
                        let myTime = new Date();
                        let myHR = myTime.getHours();
                        let myMin = myTime.getMinutes();
                        let mySecd = myTime.getSeconds();

                        const ShowTime = document.querySelector('#Timer');
                        ShowTime.innerHTML= "" + myHR + ":" + myMin + ":" + mySecd;
                    }
                </pre>
        </div>
        <div>
            <h2>Q10- Randome Number Game</h2>
            
            <a href="https://nnarendra1787.github.io/JavaScript-Handson/Random-Number-Game/">Random-Number-Game</a>
        </div>

    </div>

</body>
<script src="./app.js"></script>
</html>
