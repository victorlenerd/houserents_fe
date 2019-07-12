#!/bin/sh
$(aws ecr get-login --region us-east-2 --no-include-email)
docker run -d -p 4040:4040  \
    -e PORT=4040 \
    -e API_SERVER=http://0.0.0.0:5000 \
    -e MAP_API_KEY=AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc \
    --rm 699011322781.dkr.ecr.us-east-2.amazonaws.com/houserents-fe-develop:latest