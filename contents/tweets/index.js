var tweets = {

    searchByPhrase: function(inputPhrase) {

        var phrase = inputPhrase || 'lazy'

        // $.get("http://socialtrends.herokuapp.com/application/rate_limit_status.json?trends=place", function(data) {

        //     $.get("/twitter/tweets/list.jade", function(template) {
        //             var html = jade.render(template, {
        //                 data: data
        //             })
        //             $("#list").html(html)
        //         })
        // })

        $.get("http:/api.twitter.com/1.1/trends/place.json?id=1", function(data) {
             data = data.trends

            // var items=JSON.parse(data)

                $.get("/twitter/tweets/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    $("#list").html(html)
                })
        })


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


        $.get("/twitter/tweets/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        // tweets.searchByPhrase('1')

    }

}