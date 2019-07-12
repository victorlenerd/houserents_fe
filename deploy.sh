#!/bin/sh
$(aws ecr get-login --region us-east-2 --no-include-email)
docker run -d -p 5000:5000  \
    --rm 699011322781.dkr.ecr.us-east-2.amazonaws.com/houserents-fe-develop:latest