#!/bin/bash

function check {
     result=$?

     if [ $result -ne 0 ] ; then
         echo "Error occurred getting URL $1:"
         if [ $result -eq 6 ]; then
             echo "Unable to resolve host"
         fi
         if [ $result -eq 7 ]; then
             echo "Unable to connect to host"
         fi
     else
         echo "Success"
     fi

}

while true; do
    echo 'curl -L -s -o "/dev/null" j.kingsmill.io'
    curl -L -s -o "/dev/null" j.kingsmill.io
    check;
    sleep 1
done
