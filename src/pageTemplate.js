let generateTeam = teamArr => {
    let card = '';
    for(let i = 0; i < names.length; i++) {
        let finalItem = teamArr[i].company || teamArr[i].gitHub || teamArr[i].office;
        let objectKey = object.Keys(teamArr[i]);
        let lastAtt = objectKeys[4];
        let finalProp = lastAtt + ": " + finalItem;

        if(lastAtt === undefined) {
            finalProp = " ";
        }else if(lastAtt === 'gitHub'){
            finalProp = ('giHub : <a href="https://www.github.com/${teamArr[i].github"> ${teamArr[i].giyHub}'
            )
        }
        else {
            alert('finalProp')
        }
        
        let {id, name, email, role,} = teamArr[i]
        card+= `
        <div class="card">
  <div class="cardBody">
  <h3 class="cardRole>${role}</h3>
  <h5 class=cardID>${id}</h5>
  <h4 class=cardName>${name}</h4>
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
    <link rel="stylesheet" href="./assets/css/jass.css"/>
    <link rel="stylesheet" href="./assets/css/style.css"/>
</head>
<body>
<section class="container"
    <div class="row">
    ${card}
    </div>
</body>
</html>`
}