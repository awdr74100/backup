#include <OneWire.h>
#include <DallasTemperature.h>

int gas=11;
int analog_pin=A0;
int greenLedPin = 2;           
int yellowLedPin = 3;          
int redLedPin = 4;             
int temp_sensor = 5;       
float temperature = 0;    
int lowerLimit = 27;    
int upperLimit = 30;   
float sensorVoltage; 
int temp; 

OneWire oneWirePin(temp_sensor);

DallasTemperature sensors(&oneWirePin);

void setup() {
  Serial.begin(9600);
  pinMode(gas, OUTPUT);
  pinMode(redLedPin,OUTPUT);
  pinMode(greenLedPin,OUTPUT);
  pinMode(yellowLedPin,OUTPUT);
  
  sensors.begin();
}

void loop(){
  Serial.print("Requesting Temperatures from sensors: ");
  sensors.requestTemperatures(); 
  Serial.println("DONE");
  
  temperature = sensors.getTempCByIndex(0);
    
  digitalWrite(redLedPin, LOW);
  digitalWrite(greenLedPin, LOW);
  digitalWrite(yellowLedPin, LOW);
  
  Serial.print("Temperature is ");
  Serial.print(temperature);
  temp=analogRead(analog_pin);
  sensorVoltage = temp;
  Serial.println(sensorVoltage);
  if(temp>800)
  {

    Serial.println("dangerous!!");  
    digitalWrite(gas,HIGH);
    delay(1000);
    digitalWrite(gas,LOW);
    delay(1000);
   }
   else
   {
      Serial.println("No dangerous!"); 
      digitalWrite(gas,LOW);
      delay(1000);
   }
  
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
  delay(500);
}


