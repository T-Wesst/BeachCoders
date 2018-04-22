var counter = 0;
        if (localStorage.getItem("clickcounter")) {
            counter = localStorage.getItem("clickcounter")
            document.getElementById("clicks").innerHTML = counter;
        }
        if (localStorage.getItem("firstname")) {
            removeForm();
            displaygreeting();

        } else {

            document.getElementById('myform').onkeydown = function(e) {
                if (e.keyCode == 13) {
                    // submit

                    localStorage.setItem('firstname', document.getElementById('first_name').value)
                    localStorage.setItem('lastname', document.getElementById('last_name').value)
                    localStorage.setItem('email', document.getElementById('email').value)
                    removeForm()
                    displaygreeting();
                }

            };
        }

        function displaygreeting() {
            var first = localStorage.getItem('firstname')
            var last = localStorage.getItem('lastname')
            document.getElementById('greetings').innerHTML = first + " " + last
        }

        function removeForm() {
            var elm = document.getElementById('myform');
            elm.parentNode.removeChild(elm);
        }

        function addOneToCounter() {
            counter++
            document.getElementById("clicks").innerHTML = counter;
            localStorage.setItem("clickcounter", counter)
        }
        
        document.getElementById("cat").addEventListener("click", addOneToCounter);
