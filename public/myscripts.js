const fromJSON = fetch("./post-submits.json")
  .then(res => { return res.json() })
  .then(myJson => {
    JSON.stringify(myJson);
    let output = "";
    myJson.forEach( (person, index) => {
      output += `<p><input type="radio" name="removable" value="${index}">  Hi ${person.firstname} ${person.lastname}! I hope you have never seen such a fascinating page in your ${person.age} years! </p>`;
    });
    document.getElementById("json").innerHTML = output;
  });