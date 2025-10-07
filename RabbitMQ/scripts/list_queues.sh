#!/bin/bash

echo "* Listing queues:"

docker-compose exec -it rabbitmq rabbitmqctl list_queues