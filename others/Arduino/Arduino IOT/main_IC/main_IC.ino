//include Components
#include "HX711.h"
#include <WiFi.h>
#include <WiFiMulti.h>
WiFiMulti WiFiMulti;

//WIFI、Thingspeak資料
const char* ssid     = "Blue"; 
const char* password = "6666666666";
const char* host = "api.thingspeak.com";
String api_key = "ROL1AWRVDZ6F6VTJ"; 

//var變數
int Water = 0;
int Weight = 0;
int Pump = 0;
int relayPin = 21;

//感測器腳位
//目前DT是23，SCK是22(GPIO)
#define waterPin 36

void setup() {
  Init_Hx711();  
  Get_Maopi(); 
  delay(3000);
  Get_Maopi(); 
  Serial.begin(115200);
  Connect_to_Wifi();
  pinMode(relayPin, OUTPUT);
}

void loop() {
  get_Water_Level();
  delay(1000);
  get_Weight_Value();
  delay(1000);
  Send_Data();
  delay(30000);
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
    data_to_send += String(200);
    data_to_send += "&field2=";
    data_to_send += String(300);
    data_to_send += "&field3=";
    data_to_send += String(400);
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

void get_Weight_Value(){
  int getweightvalue = Get_Weight();
  Weight = getweightvalue;  //計算放在感測器上的重物重量
  Serial.println("----------------------------");
  Serial.print(Weight); //串口顯示重量
  Serial.println("g "); //顯示單位
  Serial.println("----------------------------");
        
}

void get_Water_Level(){
  int getwatervalue = analogRead(waterPin);
  Water = getwatervalue;
  Serial.println("----------------------------");
  Serial.print("Water Value:");
  Serial.println(Water);
  Serial.println("pump close");
  Serial.println("----------------------------");
  if(getwatervalue<2500){
    digitalWrite(relayPin, HIGH);
    Pump = 1;
    }
    else{
    digitalWrite(relayPin, LOW);
    Pump = 2;
    }
  
}
