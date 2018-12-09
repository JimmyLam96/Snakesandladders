var boardloop = function () {
    for (let i = 8; i > 0; i--) {
        console.log("loop 1");
        var Row = $("<div>", {
            class: "row",
        });
        for (var j = 0; j <= 7; j++) {
            console.log("Loop 2");
            var div = $("<div>", {
                class: "square",
                id: (8 * i - j) + "",
            });
            // if (i % 2 == j % 2) {
            //     $(div).addClass("orange");
            // } else {
            //     $(div).addClass("white")
            // }
            Row.append(div);
            div.append((8 * i - j) + "");
        }
        $("#gameboard").append(Row);

    }
};

function clicked() {
    var dice = Math.floor(1 + (Math.random() * 6));
    var tb = document.getElementById("out");
    tb.value = dice;
};

function timer(e) {
    var time = 0;
    var interval;
    var offset;

    function update(){
        time += delta();
        var formattedTime = timeFormatter(time);
        e.textContent = formattedTime;
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(t){
        var time = new Date(t);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();

        if(minutes.length < 2){
            minutes = "0" + minutes;
        }

        if(seconds.length < 2){
            seconds = "0" + seconds;
        }

        return minutes + ":" + seconds;
    }

    interval = setInterval(update, 10);
    offset = Date.now();
    
}
    
/* we attach a function to a button's click event
 * after the DOM finished loading
 */
window.onload = function () {
    document.getElementById("b").onclick = clicked;
    timer(document.getElementById("timer"));
}

//main
boardloop();