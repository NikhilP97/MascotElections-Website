export LOCAL_IP=`ipconfig getifaddr en0`

alias serve="browser-sync start -s -f . --no-notify --host $LOCAL_IP --port 9000"