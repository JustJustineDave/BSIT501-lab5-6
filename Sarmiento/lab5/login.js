 <script>
        function validateForm() {
            var username = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            
            var validUsername = "vincesarmiento";
            var validPassword = "12345678";

            if (username === validUsername && password === validPassword) {
                alert("Login successful!");
                return true;
            } else {
                alert("Invalid username or password. Please try again.");
                return false;
            }
        }
    </script>