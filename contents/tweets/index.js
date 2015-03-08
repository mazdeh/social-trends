var tweets = {

    searchByPhrase: function(inputPhrase) {

        // var phrase = inputPhrase
        // console.log(phrase)

        // $.get("http://socialtrends.herokuapp.com/application/rate_limit_status.json?trends=place", function(data) {

        //     $.get("/twitter/tweets/list.jade", function(template) {
        //             var html = jade.render(template, {
        //                 data: data
        //             })
        //             $("#list").html(html)
        //         })
        // })

        // var params = {id: 1}
        // $.get("https://socialtrends.herokuapp.com/trends/place.json", params, function(data) {
        //      data = data

        //     // var items=JSON.parse(data)

        //         $.get("/twitter/tweets/list.jade", function(template) {
        //             var html = jade.render(template, {
        //                 data: data
        //             })
        //             $("#list").html(html)
        //         })
        // })


        // $.get("https://socialtrends.herokuapp.com/trends/available.json", function(data) {
        //      data = data

        //     // var items=JSON.parse(data)

        //         $.get("/twitter/tweets/list.jade", function(template) {
        //             var html = jade.render(template, {
        //                 data: data
        //             })
        //             $("#list").html(html)
        //         })
        // })

    },

    load: function() {

        $.get("https://socialtrends.herokuapp.com/trends/place.json", function(data) {
             data = data[0].trends

                $.get("/twitter/tweets/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    $("#list").html(html)
                })
        })


        $.get("/twitter/tweets/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        // tweets.searchByPhrase('1')

    }

}