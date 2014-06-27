var loginBtn = document.getElementById("loginbtn");
EventUtil.addHandler(loginbtn, "click", function(){
	function getLocalStorage() {
		if (typeof localStorage == "object") {
			return localStorage;
		} else if (typeof globalStorage == "object") {
			return globalStorage[location.host];
		} else {
			throw new Error("Local storage is not available");
		}
	}

	var storage = getLocalStorage();
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	console.log(username.value);

	storage.setItem("username", username.value);
	storage.setItem("password", password.value);


	EventUtil.addHandler(document, "storage", function(event) {
		alert("Storage changed for " + event.domain);
	});

	CookieUtil.set("name", username.value);
	alert("Welcome, " + CookieUtil.get("name") + ".");
});

