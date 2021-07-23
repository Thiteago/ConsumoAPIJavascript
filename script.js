function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function CarregarDados(){
    var data = JSON.parse(httpGet('https://jsonplaceholder.typicode.com/users'))


    const table = document.getElementById("tabela")
    
    data.forEach((user) => {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
    
        cell1.innerHTML = user.id;
        cell2.innerHTML = user.name;
        cell3.innerHTML = user.username;
        cell4.innerHTML = user.address.street;
    })
}


