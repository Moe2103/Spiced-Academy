(function () {
    // USER INPUT

    let results = $("#results");
    let textfield = $("input");

    textfield.on("input", function () {
        let value = textfield.val();

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: value,
            },
            success: function (data) {
                if (data.length == 0) {
                    results.hide();
                    return;
                }
                rendercountries(data);
                // do something with the data here
                console.log("data", data);
                console.log("$value", value);
                console.log('$("input").val()', $("input").val());
                //check if $value is the same as what is currently in the input field
                // if not ...return early?
            },
        });
    });

    function rendercountries(countries) {
        var resultsHTML = "";
        if (countries.length == 0) {
            resultsHTML += "<div>no results</div>";
        } else {
            resultsHTML += "<p>" + countries + "</p>";
        }

        $(results).html(resultsHTML).show();
    }

    // MOUSE MOVEMENT

    results.on("mouseover", "div", function (e) {
        $("#results div").removeClass("on");
        $(e.target).addClass("on");
    });

    results.on("mousedown", "div", function (e) {
        textfield.val($(e.target).html());
        results.hide();
    });
})();
