$(document).ready(function () {
    var firstNames = [
    'Allison',
'Arthur', 'Ana', 'Alex', 'Arlene', 'Alberto', 'Barry', 'Bertha', 'Bill', 'Bonnie', 'Bret', 'Beryl', 'Chantal', 'Cristobal', 'Claudette', 'Charley', 'Cindy', 'Chris', 'Dean', 'Dolly', 'Danny', 'Danielle', 'Dennis', 'Debby', 'Erin', 'Edouard', 'Erika', 'Earl', 'Emily', 'Ernesto', 'Felix', 'Fay', 'Fabian', 'Frances', 'Franklin', 'Florence', 'Gabielle', 'Gustav', 'Grace', 'Gaston', 'Gert', 'Gordon', 'Humberto', 'Hanna', 'Henri', 'Hermine', 'Harvey', 'Helene', 'Iris', 'Isidore', 'Isabel', 'Ivan', 'Irene', 'Isaac', 'Jerry', 'Josephine', 'Juan', 'Jeanne', 'Jose', 'Joyce', 'Karen', 'Kyle', 'Kate', 'Karl', 'Katrina', 'Kirk', 'Lorenzo', 'Lili', 'Larry', 'Lisa', 'Lee', 'Leslie', 'Michelle', 'Marco', 'Mindy', 'Maria', 'Michael', 'Noel', 'Nana', 'Nicholas', 'Nicole', 'Nate', 'Nadine', 'Olga', 'Omar', 'Odette', 'Otto', 'Ophelia', 'Oscar', 'Pablo', 'Paloma', 'Peter', 'Paula', 'Philippe', 'Patty', 'Rebekah', 'Rene', 'Rose', 'Richard', 'Rita'
                 ];
    var lastNames = ['Abbott', 'Acevedo', 'Acosta', 'Adams', 'Adkins', 'Aguilar', 'Aguirre', 'Albert', 'Alexander', 'Alford', 'Allen', 'Allison', 'Alston', 'Alvarado', 'Alvarez', 'Anderson', 'Andrews', 'Anthony', 'Armstrong', 'Arnold', 'Ashley', 'Atkins', 'Atkinson', 'Austin', 'Avery', 'Avila', 'Ayala', 'Ayers', 'Bailey', 'Baird', 'Baker', 'Baldwin', 'Ball', 'Ballard', 'Banks', 'Barber', 'Barker', 'Barlow', 'Barnes', 'Barnett', 'Barr', 'Barrera', 'Barrett', 'Barron', 'Barry', 'Bartlett', 'Barton', 'Bass', 'Bates', 'Battle', 'Bauer', 'Baxter', 'Beach', 'Bean', 'Beard', 'Beasley', 'Beck', 'Becker', 'Bell', 'Bender', 'Benjamin', 'Bennett', 'Benson', 'Bentley', 'Benton', 'Berg', 'Berger', 'Bernard', 'Berry', 'Best', 'Bird', 'Bishop', 'Black', 'Blackburn', 'Blackwell', 'Blair', 'Blake', 'Blanchard', 'Blankenship', 'Blevins', 'Bolton', 'Bond', 'Bonner', 'Booker', 'Boone', 'Booth', 'Bowen', 'Bowers', 'Bowman', 'Boyd', 'Boyer', 'Boyle', 'Bradford', 'Bradley', 'Bradshaw', 'Brady', 'Branch', 'Bray', 'Brennan', 'Brewer'
                ];


    $('form').submit(function (event) {
        event.preventDefault();
        var userinput = $('#search').val();
        $('h3').html(userinput);
        searchitunes(userinput);
        $('form')[0].reset();
        $('input').blur();
    })




    $('.random-btn').click(function () {
        makeARandomSearch();

        function makeARandomSearch() {
            var randomName = randomElement(firstNames) + "+" + randomElement(lastNames);
            $('h3').html(randomName);
            $.ajax({
                    url: "https://itunes.apple.com/search?term=" + randomName,
                    dataType: 'JSONP'
                })
                .done(function (data) {
                    if (data.results.length !== 0) {

                        appendSongs(data)
                    } else {
                        makeARandomSearch();
                    }



                })
                .fail(function (data) {
                    $('#songs').append(data.status);
                })
        }

    })




    function searchitunes(input) {


        $.ajax({
                url: "https://itunes.apple.com/search?term=" + input,
                dataType: 'JSONP'
            })
            .done(function (data) {

                appendSongs(data);

            })
            .fail(function (data) {
                $('#songs').append(data.status);
            })

    }


    function randomElement(array) {
        var randonNum = Math.floor(Math.random() * array.length);
        return array[randonNum];
    }

    function appendSongs(data) {
        $('#songs').html("");
        for (var i = 0; i < data.results.length; i++) {
            if (data.results[i].trackName) {
                $('#songs').append(`
                                <li>
                                <div class="collapsible-header"><img src="${data.results[i].artworkUrl30}"> ${data.results[i].trackCensoredName} <br> ${data.results[i].artistName}</div>
                                <div class="collapsible-body"><span>$${data.results[i].trackPrice}</span>        
<audio controls>
  <source src="${data.results[i].previewUrl}" type="audio/mpeg">
</audio>
</div>
                                </li>
                            `)
            }
        }
        $('.collapsible').collapsible();
    }
    $('.parallax').parallax();
})
