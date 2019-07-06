int led_pin=11;
int analog_pin=A0;
void setup() {
  Serial.begin(9600);
  pinMode(led_pin, OUTPUT);
}

void loop() {
  float sensorVoltage; 
  int temp;
  temp=analogRead(analog_pin);
  sensorVoltage = temp;
   Serial.println(sensorVoltage);
  if(temp>800)
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
