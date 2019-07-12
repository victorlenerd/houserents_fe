#!/bin/sh
docker stop houserents-fe || true && docker rm houserents-fe || true
$(aws ecr get-login --region us-east-2 --no-include-email)
docker run -d -p 4040:4040  \
    --env PORT="4040" \
    --env API_SERVER="http://0.0.0.0:5000" \
    --env MAP_API_KEY="AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc" \
    --name houserents-fe \
    --rm 699011322781.dkr.ecr.us-east-2.amazonaws.com/houserents-fe-develop:latest