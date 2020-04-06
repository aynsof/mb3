$("#ReportSubmit").click(function() { 
    var emailAddress = $("#EmailAddress").val(); 
    var report = $("#Report").val(); 
    if (emailAddress !== undefined && emailAddress !== "") {
        var body = { 
            "UserID": emailAddress,
            "Report": report
        }; 
        var additionalParams = { 
            headers: {}, 
            queryParams: {} 
        }; 

        fetch('https://api.j.kingsmill.io/add', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(body), // body data type must match "Content-Type" header
          })
          .then(function(result){
            document.getElementById("response").innerHTML = "Report submitted successfully!";
            $("#response").addClass("au-body au-page-alerts au-page-alerts--success");
            response => response.json() // parses JSON response into native Javascript objects 
            }).catch( function(result){ 
            document.getElementById("response").innerHTML = "Error - report not submitted. Please try again later.";
            $("#response").addClass("au-body au-page-alerts au-page-alerts--error");
            console.error('Error submitting report to API'); 
        }); 
    }
}); 
