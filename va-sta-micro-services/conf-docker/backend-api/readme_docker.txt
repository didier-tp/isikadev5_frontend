﻿NB:Cette application NodeJs (REST deviseApi) s'appuie en interne sur une base de données mysql
pouvant etre prise en  charge par le conteneur docker configuré dans le sous répertoire
mysql-scripts/docker-scripts de ce projet
=================================================================
Construction de l'image et du conteneur docker pour "deviseApi":
----------------------------------------------->
#se placer (cd) dans répertoire deviseApiNodeSq 
#(où est situé Dockerfile et package.json)
su
docker image build -t xyz/backend-api  .
docker image ls
docker run -p 8282:8282 -d --name backend-api-container --network mynetwork --network-alias=backend.api.service xyz/backend-api
docker container ls

=======
docker container exec -ti devise-api-container sh
pour debug :
ping -c 2 devise.db.service
exit
