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
            if (i % 2 == j % 2) {
                $(div).addClass("orange");
            } else {
                $(div).addClass("white")
            }

            Row.append(div);
        }
        $("#gameboard").append(Row);

    }
};

//main
boardloop();