champs=$(curl --location --request GET 'http://ddragon.leagueoflegends.com/cdn/12.9.1/data/fr_FR/champion.json' --header 'Content-Type: application/json' | 
python3 -c "import sys, json; 
data = json.load(sys.stdin)['data'];
champs = '';
for i in data: 
    champs+= i + ' '

print(champs)
")
echo $champs
for i in $champs
do 
    echo $i
    touch data/champ/$i.json
    curl https://ddragon.leagueoflegends.com/cdn/12.9.1/data/fr_FR/champion/$i.json -o data/champ/$i.json 
done
