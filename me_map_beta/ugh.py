import json #(geojson also fine)

json_data = open('METOWNS_POLY.geojson')
data = json.load(json_data)
print(len(data['features']))
