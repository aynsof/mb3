
#!/bin/bash

report[0]="Large enterprise has been the victim of a DDoS attack."
report[1]="Suspect my identity has been stolen."
report[2]="Reporting a data breach at my large organisation."
report[3]="Discovered a critical vulnerability in national infrastructure."
report[4]="In the middle of a wide-spread phishing campaign."
report[5]="Received an email demanding that I pay money."
report[6]="Suspect there is malware installed on a business system."
report[7]="Business is the victim of a crypto-locking attack."
report[8]="Account has been accessed without permission and money has been stolen".
report[9]="Suspicious emails are being sent to my business."

email[0]="joe@gmail.com"
email[1]="jane@hotmail.com"
email[2]="ann.smith@example.com"
email[3]="x237@domain.com"
email[4]="john@example.com"
email[5]="sarah@fastmail.com"
email[6]="emily@domain.com"
email[7]="sam@example.com"
email[8]="biz@example.com"
email[9]="email@domain.com"

for i in `seq 1 10`; do

    size=${#report[@]}
    index=$(($RANDOM % $size))
    rand_report=${report[$index]}

    size=${#email[@]}
    index=$(($RANDOM % $size))
    rand_email=${email[$index]}

    curl -X POST \
    https://api.j.kingsmill.io/add \
    -H ': ' \
    -H 'Content-Type: application/json' \
    -H 'Origin: https://d1pv4sjhi3t4ux.cloudfront.net' \
    -H 'Postman-Token: e1e693cf-c17b-445a-ae54-5003bbf6ff9f' \
    -H 'cache-control: no-cache' \
    -d "
        {
            \"UserID\":\"$rand_email\",
            \"Report\":\"$rand_report\"
        }
        "

done