function makeAjaxGetRequest(url,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    callback(xhr.responseText);
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);
}

function makeAjaxDeleteRequest(url,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    callback(xhr.responseText);
		}
	};
	xhr.open("DELETE", url, true);
	xhr.send(null);
}

function makeAjaxPostRequest(url,jsonData,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    callback(xhr.responseText);
		}
	};
	xhr.open("POST", url, true);
	//************ A FAIRE EN TP ***************************
	//appeler xhr.setRequestHeader(...,...);
	//pour fixer "Content-Type" à la valeur "application/json"
	//******************************************************
	xhr.send(jsonData);
}

function makeAjaxPutRequest(url,jsonData,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		    callback(xhr.responseText);
		}
	};
	xhr.open("PUT", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(jsonData);
}