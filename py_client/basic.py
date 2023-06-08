import requests

# endpoint = "https://httpbin.org/status/200"
# endpoint = "https://httpbin.org/anything"
URL = "http://localhost:8000/api/"

get_response = requests.get(URL, params={"variable":"example"}, json={"text":"Hello Tien!!"}) # API -> method

print(get_response.json())
# print(get_response.text) 
# print(get_response.status_code)