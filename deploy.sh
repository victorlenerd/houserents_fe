#!/bin/sh
docker stop houserents-fe || true && docker rm houserents-fe || true
$(aws ecr get-login --region us-east-2 --no-include-email)
docker run -d -p 4040:4040 --name houserents-fe --rm 699011322781.dkr.ecr.us-east-2.amazonaws.com/houserents-fe-develop:latest