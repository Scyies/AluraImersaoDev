$(document).ready(function(){

    var API_KEY = "AIzaSyBrnpVsqkm-aFO7hXnXtN_012ytMQETeEg"

    var video = ''

    $("#form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY, search, 1)
    })

    function videoSearch(key, search, maxResults) {

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data) {
            console.log(data)

            data.items.forEach(item => {
                video = `
                <iframe width="640" height="360" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `

                $("#videos").append(video)

            })
        })
    }

})

