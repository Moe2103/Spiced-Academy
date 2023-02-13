var search = $("#search");
var input = $("#input");
var select = $("#select");
var go = $("#go");
var more = $("#more");
var resultsEl = $("#results");

let nextUrl;
let isMakingRequest = false;

go.on("click", function () {
    console.log("name", input.val());
    console.log("select", select.val());

    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify",
        data: {
            q: input.val(),
            type: select.val(),
        },
        success: function (data) {
            // searching for Artist: data.artist does not exist;
            // searching for albums: data.albums does not exist.
            const results = data.artists || data.albums;
            nextUrl = results.next;
            const items = results.items;
            console.log(items);

            const itemsAdj = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            console.log(itemsAdj);
            renderHtml(itemsAdj, false);
        },

        error: function (error) {
            console.log(error);
            //log the error for now
        },
    });
});

function renderHtml(items, shouldAppend) {
    let htmlString = "";
    for (let i = 0; i < items.length; i++) {
        htmlString +=
            '<div class="result-item">' +
            '<img src="' +
            items[i].imageUrl +
            '">' +
            "<span>" +
            items[i].name +
            "</span>";
    }

    if (shouldAppend === true) {
        resultsEl.append(htmlString);
    } else {
        resultsEl.html(htmlString);
    }
}

more.on("click", function () {
    console.log("input", input.val());

    $.ajax({
        url: nextUrl,

        success: function (data) {
            const results = data.artists || data.albums;
            // console.log(results);
            nextUrl = results.next;
            const items = results.items;
            // console.log(items);
            const itemsAdj = items.map((item) => {
                return { name: item.name, imageUrl: item.images[0]?.url };
            });
            renderHtml(itemsAdj, true);
            // console.log(itemsAdj);
        },
        error: function (error) {
            console.log("error");
            alert("Error");
        },
    });
});

let timerID;

$(document).scroll(() => {
    clearTimeout(timerID);
    console.log("scrollY: ", window.scrollY);
    console.log("clientHeight: ", document.body.clientHeight);
    console.log("inner height: ", window.innerHeight);
    timerID = setTimeout(() => {
        if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
            // calculation with scrollY, clientHeight and innerHeight
            $.ajax({
                url: nextUrl,

                success: function (data) {
                    const results = data.artists || data.albums;
                    // console.log(results);
                    nextUrl = results.next;
                    const items = results.items;
                    // console.log(items);
                    const itemsAdj = items.map((item) => {
                        return {
                            name: item.name,
                            imageUrl: item.images[0]?.url,
                        };
                    });
                    renderHtml(itemsAdj, true);
                    // console.log(itemsAdj);
                },
                error: function (error) {
                    console.log("error");
                    alert("Error");
                },
            });
            console.log("SCROLLEND");
        }
    }, 250);
});
