
//include Components
#include <WiFi.h>
#include <WiFiMulti.h>
WiFiMulti WiFiMulti;

//WIFI、Thingspeak資料
const char* ssid     = "WiFi 38-14"; 
const char* password = "062434357";
const char* host = "api.thingspeak.com";
String api_key = "S8EBCQ7CTNO4N8TU"; 

//var變數
int Water;

//感測器腳位
#define waterPin 36

void setup() {
  Serial.begin(115200);
  Connect_to_Wifi();
}

void loop() {
  delay(200);
  get_Water_Level();
  delay(200);
  Send_Data();
  delay(15000);
}




//連接wifi路由
void Connect_to_Wifi()
{

  // We start by connecting to a WiFi network
  WiFiMulti.addAP(ssid, password);

  Serial.println();
  Serial.println();
  Serial.print("Wait for WiFi... ");

  while (WiFiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

}


//送出資料
void Send_Data()
{

  // map the moist to 0 and 100% for a nice overview in thingspeak.
  
//  value = constrain(value,0,5000);
//  value = map(value,0,5000,100,0);

  Serial.println("Prepare to send data");

  // Use WiFiClient class to create TCP connections
  WiFiClient client;

  const int httpPort = 80;

  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }
  else
  {
    String data_to_send = api_key;
    data_to_send += "&field1=";
    data_to_send += String(Water);
    data_to_send += "&field2=";
    data_to_send += String(200);
    data_to_send += "&field3=";
    data_to_send += String(300);
    data_to_send += "\r\n\r\n";

    client.print("POST /update HTTP/1.1\n");
    client.print("Host: api.thingspeak.com\n");
    client.print("Connection: close\n");
    client.print("X-THINGSPEAKAPIKEY: " + api_key + "\n");
    client.print("Content-Type: application/x-www-form-urlencoded\n");
    client.print("Content-Length: ");
    client.print(data_to_send.length());
    client.print("\n\n");
    client.print(data_to_send);

    delay(1000);
  }

  client.stop();


}

void get_Water_Level(){
  int getwater = analogRead(waterPin);
  Water = getwater;
  Serial.print("Water Value:");
  Serial.println(Water);
}
