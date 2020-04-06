#!/bin/bash

for i in `seq 1 100`; do
  curl -X GET \
  https://api.j.kingsmill.io/get \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: api.j.kingsmill.io' \
  -H 'Postman-Token: 24d150e7-3ba0-49b6-afdd-0b7848a8b4a4,012fc485-a673-46a0-879d-44956a27fcde' \
  -H 'User-Agent: PostmanRuntime/7.15.2' \
  -H 'cache-control: no-cache'
done
