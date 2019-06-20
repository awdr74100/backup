#include "HX711.h"
//腳位去HX711.h改
//目前DT是23，SCK是22(GPIO)

//腳位定義
#define waterPin 36
#define tdsPin 39
int relayPin = 21;


//var變數
int Water = 0;
int Weight = 0;
//int Tds = 0;


void setup() {
  
  Init_Hx711();  
  Get_Maopi(); 
  delay(3000);
  Get_Maopi(); 
  Serial.begin(115200);
  pinMode(relayPin, OUTPUT);
  
  
}

void loop() {
  get_Water_Level();
  delay(1000);
  get_Weight_Value();
  delay(1000);
//  get_Tds_Value();
//  delay(1000);
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
    }
    else{
    digitalWrite(relayPin, LOW);
    }
  
}

//void get_Tds_Value(){
//  int gettdsvalue = analogRead(tdsPin);
//  Tds = gettdsvalue;
//  Serial.println("----------------------------");
//  Serial.print("TDS Value:");
//  Serial.println(Tds);
//  Serial.println("pump close");
//  Serial.println("----------------------------");
//}

void get_Weight_Value(){
  int getweightvalue = Get_Weight();
  Weight = getweightvalue;  //計算放在感測器上的重物重量
  Serial.println("----------------------------");
  Serial.print(Weight); //串口顯示重量
  Serial.println("g "); //顯示單位
  Serial.println("----------------------------");
        
}
