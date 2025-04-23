let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=5351b4c");
xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
    console.log(data.Title);
  }
};

xhr.send();
