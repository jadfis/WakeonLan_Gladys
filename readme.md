Wake On Lan [BETA]

Prérequis

Avant toute chose, l'installation de ces logiciel 
est névéssaire pour que le module fonctionne:

sudo apt-get install etherwake


sudo npm i wake-on-lan


(si l'installtion ne fonctionne pas :sudo apt-get update && sudo apt-get upgrade
et réessayer les commandes précédentes)


attention pour que le réveille fonctionne bien 
l'odinateur cible doit être en veille / hibernation !!!


De plus il faut modifier le fichier index.js 
de manière à configurer l'ip et l'adresse MAC 
de votre machine ainsi que le port internet

Utilisation

Pour éveiller un ordinateur une fois la configuration
terminée, il suffis d'executer le script suivant dans gladys:

gladys.modules.wol.wakeonlan()

A ADAPTER EN FONCTION DE CHAQU'UN
