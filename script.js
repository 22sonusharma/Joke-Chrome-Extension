fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=ab2c6905fdabed98a0b0da63c0c9')
.then(data => data.json())
.then(jokeData=>{
    const jokeText=jokeData.jokeContent;
    const jokeElement=document.getElementById("jokeElement");
  jokeElement.innerHTML=jokeText;
});