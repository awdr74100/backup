//include Components
#define RXD2 16
#define TXD2 17
#define tdsPin 36

#include <Servo.h>
#include <WiFi.h>
#include <WiFiMulti.h>
WiFiMulti WiFiMulti;

//WIFI、Thingspeak資料
const char* ssid     = "J006"; 
const char* password = "1234567890";
const char* host = "api.thingspeak.com";
String api_key = "ROL1AWRVDZ6F6VTJ"; 

//var變數
int Tds = 0;
Servo myservo;
char msg ;
int pos = 0;





void setup() {
  
  myservo.attach(13);
  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, RXD2, TXD2);
  Connect_to_Wifi();

  Serial.println("Serial Txd is on pin: "+String(TX));
  Serial.println("Serial Rxd is on pin: "+String(RX));
  
}

void loop() {
  

  while (Serial2.available()) {
    
    msg = Serial2.read();
    Serial.println("good"); 
    Serial.println(msg); 
    
    for (pos = 0; pos <= 90; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                     // waits 15ms for the servo to reach the position
       }
       delay(10000);
    for (pos = 90; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
       }
        get_tds_Value();
        delay(1000);
        Send_Data();
        delay(4000);
        Send_Data();
        delay(4000);
        Send_Data();
        delay(4000);
  
     }

  
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
    data_to_send += "&field4=";
    data_to_send += String(Tds);
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


void get_tds_Value(){
  int gettdsvalue = analogRead(tdsPin);
  Tds = gettdsvalue;
  Serial.println("----------------------------");
  Serial.print("TDS Value:");
  Serial.println(Tds);
  Serial.println("pump close");
  Serial.println("----------------------------");
}
