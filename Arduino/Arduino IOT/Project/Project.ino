
//include Components
#include "HX711.h"
#include <WiFi.h>
#include <WiFiMulti.h>
WiFiMulti WiFiMulti;

//WIFI、Thingspeak資料
const char* ssid     = "WiFi 38-14"; 
const char* password = "062434357";
const char* host = "api.thingspeak.com";
String api_key = "S8EBCQ7CTNO4N8TU"; 

//sensorPin
//腳位去HX711.h改
//目前DT是23，SCK是22(GPIO)
#define waterPin 36

//variable
int Weight = 0;
int Water = 0;

//TDS Setting
#define TdsSensorPin 36
#define VREF 5.0      // analog reference voltage(Volt) of the ADC
#define SCOUNT  30           // sum of sample point
int analogBuffer[SCOUNT];    // store the analog value in the array, read from ADC
int analogBufferTemp[SCOUNT];
int analogBufferIndex = 0,copyIndex = 0;
float averageVoltage = 0,temperature = 25;
int tdsValue = 0;


void setup() {
  pinMode(TdsSensorPin,INPUT);
  Connect_to_Wifi();
  Init_Hx711(); 
  Serial.begin(115200);
  Get_Maopi();    //reset
  delay(3000);
  Get_Maopi();    //reset
  Serial.print("Start!\n");
}

void loop() {
  
  Connect_to_Wifi();
  delay(500);
  get_Weight_Value();
//  delay(500);
//  get_Water_Level();
//  delay(500);
//  get_TDS();
  delay(500);
  Send_Data();
  delay(14000);
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
  int weightValue = Weight;
  int waterValue = Water;
  int tdasensorValue = tdsValue;

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
    data_to_send += String(400);
    data_to_send += "&field2=";
    data_to_send += String(800);
    data_to_send += "&field3=";
    data_to_send += String(weightValue);
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

//獲取重量值
void get_Weight_Value(){
  Weight = Get_Weight();  //計算放在感測器上的重物重量
  Serial.print(Weight); //串口顯示重量
  Serial.println("g "); //顯示單位
        
}

//獲取水位值
void get_Water_Level(){
  Water = analogRead(waterPin);
  Serial.print("Water Value:");
  Serial.println(Water);
}
//獲取TDS值
void get_TDS(){
  static unsigned long analogSampleTimepoint = millis();
   if(millis()-analogSampleTimepoint > 40U)     //every 40 milliseconds,read the analog value from the ADC
   {
     analogSampleTimepoint = millis();
     analogBuffer[analogBufferIndex] = analogRead(TdsSensorPin);    //read the analog value and store into the buffer
     analogBufferIndex++;
     if(analogBufferIndex == SCOUNT) 
         analogBufferIndex = 0;
   }   
   static unsigned long printTimepoint = millis();
   if(millis()-printTimepoint > 800U)
   {
      printTimepoint = millis();
      for(copyIndex=0;copyIndex<SCOUNT;copyIndex++)
        analogBufferTemp[copyIndex]= analogBuffer[copyIndex];
      averageVoltage = getMedianNum(analogBufferTemp,SCOUNT) * (float)VREF / 1024.0; // read the analog value more stable by the median filtering algorithm, and convert to voltage value
      float compensationCoefficient=1.0+0.02*(temperature-25.0);    //temperature compensation formula: fFinalResult(25^C) = fFinalResult(current)/(1.0+0.02*(fTP-25.0));
      float compensationVolatge=averageVoltage/compensationCoefficient;  //temperature compensation
      tdsValue=(133.42*compensationVolatge*compensationVolatge*compensationVolatge - 255.86*compensationVolatge*compensationVolatge + 857.39*compensationVolatge)*0.5; //convert voltage value to tds value
      //Serial.print("voltage:");
      //Serial.print(averageVoltage,2);
      //Serial.print("V   ");
      Serial.print("TDS Value:");
      Serial.print(tdsValue);
      Serial.println("ppm");
   }
  
}

int getMedianNum(int bArray[], int iFilterLen) 
{
      int bTab[iFilterLen];
      for (byte i = 0; i<iFilterLen; i++)
    bTab[i] = bArray[i];
      int i, j, bTemp;
      for (j = 0; j < iFilterLen - 1; j++) 
      {
    for (i = 0; i < iFilterLen - j - 1; i++) 
          {
      if (bTab[i] > bTab[i + 1]) 
            {
    bTemp = bTab[i];
          bTab[i] = bTab[i + 1];
    bTab[i + 1] = bTemp;
       }
    }
      }
      if ((iFilterLen & 1) > 0)
  bTemp = bTab[(iFilterLen - 1) / 2];
      else
  bTemp = (bTab[iFilterLen / 2] + bTab[iFilterLen / 2 - 1]) / 2;
      return bTemp;
}
