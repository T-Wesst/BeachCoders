function getData(input) {
            $('.carousel').carousel('destroy');

            nytUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&sort=newest&api-key=f63654d0426c42b990ddbe774f68118a`
            $.getJSON(nytUrl,
                function(data) {
                    console.log(data)


                    var articles = data.response.docs.map(function(story) {

                        if (story.multimedia[1]) {
                            var image = `<img src = 'https://www.nytimes.com/${story.multimedia[1].url}'>`

                            return `
                                <a class="carousel-item" href="${story.web_url}">
                                ${image}
                                </a>
                                `
                        }
                        return "";
                    })

                    console.log(articles);
                    document.getElementById('headlines').innerHTML = articles.join('')
                    $('.carousel').carousel();


                })
        }
        $('form').submit(function(event) {
            $('#headlines').html('<img src="loadingimg.gif">')
            event.preventDefault();
            getData($('#search').val())
            $('form')[0].reset();
            $('input').blur();
        })
