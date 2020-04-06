AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:d7b80320-6fb4-4bb8-a4b1-ab371787d7a9',
});

var dynamodb = new AWS.DynamoDB();

function getData() {
    var table = document.getElementById("ddbTable");

    // Delete any pre-existing rows
    var rowCount = table.rows.length;
    while(--rowCount) table.deleteRow(rowCount);

    // Scan the DynamoDB table
    dynamodb.scan({TableName: 'acorn2'}, function(err, data) {
        document.getElementById("loader").style.display = "block";
        if (err) {
        console.log(err);
        return null;
        } else {
        var items = data['Items'].sort(function(a,b) {
            return a['Date']['S'] < b['Date']['S']
        });
        for (var i in data['Items']) {
            // Create news cells
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            row.className = 'au-table__row';
            cell1.className = 'au-table__cell';
            cell2.className = 'au-table__cell';
            cell3.className = 'au-table__cell';

            // Add some text to the new cells:
            cell1.innerHTML = data['Items'][i]['UserID']['S'];
            cell2.innerHTML = data['Items'][i]['Report']['S'];
            cell3.innerHTML = data['Items'][i]['Date']['S'];
        }

        document.getElementById("loader").style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    getData();
});

$("#GetReports").click(function() { 
    getData();
});

