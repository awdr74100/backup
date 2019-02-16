#include <OneWire.h>
#include <DallasTemperature.h>

int greenLedPin = 2;           
int yellowLedPin = 3;          
int redLedPin = 4;        
int led_pin=11;
int analog_pin=A0;     
float sensorVoltage; 
int temp;
int temp_sensor = 5;       

float temperature = 0;    
int lowerLimit = 27;    
int upperLimit = 30;    


OneWire oneWirePin(temp_sensor);

DallasTemperature sensors(&oneWirePin);
void setup(void){
  Serial.begin(9600);
  
  pinMode(led_pin, OUTPUT);
  pinMode(redLedPin,OUTPUT);
  pinMode(greenLedPin,OUTPUT);
  pinMode(yellowLedPin,OUTPUT);
  
  sensors.begin();
}
void loop(){
  Serial.print("Requesting Temperatures from sensors: ");
  sensors.requestTemperatures(); 
  Serial.println("DONE");
  temp=analogRead(analog_pin);
  sensorVoltage = temp;
  
  temperature = sensors.getTempCByIndex(0);
    
  digitalWrite(redLedPin, LOW);
  digitalWrite(greenLedPin, LOW);
  digitalWrite(yellowLedPin, LOW);
  
  Serial.print("Temperature is ");
  Serial.print(temperature);
  
  
  if(temperature <= lowerLimit){
    Serial.println(", Yellow LED is Activated");
    digitalWrite(yellowLedPin, HIGH);
  }
  else if(temperature > lowerLimit && temperature < upperLimit){
    Serial.println(", Green LED is Activated");
    digitalWrite(greenLedPin, HIGH);
  }
  else if(temperature >= upperLimit){
    Serial.println(", Red LED is Activated");
    digitalWrite(redLedPin, HIGH);
  }
   Serial.println(sensorVoltage);
   if(temp>900)
  {

    Serial.println("dangerous!!");  
    digitalWrite(led_pin,HIGH);
    delay(1000);
    digitalWrite(led_pin,LOW);
    delay(1000);
   }
   else
   {
      Serial.println("No dangerous!"); 
      digitalWrite(led_pin,LOW);
      delay(1000);
   }
 
}
