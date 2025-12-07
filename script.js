
        function submitEntry() {
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let purpose = document.getElementById("purpose").value;

            if (name.trim() === "" || phone.trim() === "" || purpose === "") {
                alert("Please fill all fields.");
                return;
            }

            fetch("https://script.google.com/macros/s/AKfycbz3xWfZziQyt80lOqFjTBCGbA7r64xZQfz-82YQLokAr3VDtCaStX34iu8uFj41WbhD/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    purpose: purpose
                })
            });

            // hide form and show success message
            document.getElementById("form-box").style.display = "none";
            document.getElementById("success-box").style.display = "block";

            // reset fields
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("purpose").selectedIndex = 0;
        }

        function goBack() {
            document.getElementById("success-box").style.display = "none";
            document.getElementById("form-box").style.display = "block";
        }