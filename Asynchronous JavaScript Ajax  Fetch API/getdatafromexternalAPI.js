document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = this.responseText;
      let output = '';
      // get properties
      const json = JSON.parse(response);
      const arrprops = Object.keys(json);
      arrprops.forEach((prop) => {
          output += `${prop} :  ${json[prop]} <hr>` ;
      })
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}