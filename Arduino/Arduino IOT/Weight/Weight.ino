#include "HX711.h"

//腳位去HX711.h改
//目前DT是23，SCK是22(GPIO)

int Weight = 0;

void setup()
{
  Init_Hx711();       //初始化HX711模組連接的IO設置

  Serial.begin(115200);
  Serial.print("Welcome to use!\n");
  Get_Maopi();    //獲取毛皮
  delay(3000);
  Get_Maopi();    //獲取毛皮
  Serial.print("Start!\n");
}

void loop()
{
  get_Weight_Value();
  delay(500);
}

void get_Weight_Value(){
  Weight = Get_Weight();  //計算放在感測器上的重物重量
  Serial.print(Weight); //串口顯示重量
  Serial.println("g "); //顯示單位
        
}
