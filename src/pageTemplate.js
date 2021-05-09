let generateTeam = teamArr => {
    let card = '';
    for(let i = 0; i < teamArr.length; i++) {
        let finalItem = teamArr[i].company || teamArr[i].gitHub || teamArr[i].office;
        let objectKey = Object.keys(teamArr[i]);
        let lastAtt = objectKey[4];
        let finalProp = lastAtt + ": " + finalItem;

        if(lastAtt === undefined) {
            finalProp = " ";
        }else if(lastAtt === 'gitHub'){
            finalProp = ('giHub : <a href="https://www.github.com/${teamArr[i].github}"> ${teamArr[i].gitHub}'
            )
        }
        else {
            alert('finalProp')
        }
        
        let {id, name, email, role,} = teamArr[i]
        card+= `
  <div class="card">
  <div class="id">
  <h5 class="cardID">${id}</h5>
  </div>
  <div class="cardBody">
  <h1 class="cardName">Name: ${name}</h1>
  <h2 class="cardRole">Role: ${role}</h3>
  </div>
  <ul class="cardList">
  <li class="list">@mail: ${email}</li>
  <li class="list">${finalProp}</li>
  </ul>
  </div> `
        
    }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teamXtra</title>
    <link rel="stylesheet" href="../src/reset.css"/>
    <link rel="stylesheet" href="../src/style.css"/>
    <link rel="shortcut icon" href="../src/Logo2.png">
</head>
<body>
<header>
   <h1 id="team">TeamXtra</h1>
   
</header>
<section class="container"
    <div class="row">
    ${card}
    </div>
</body>
</html>`
}

module.exports = generateTeam;