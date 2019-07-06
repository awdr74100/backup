#define RXD2 16
#define TXD2 17
#define tdsPin 36

int Tds = 0;

#include <Servo.h>
Servo myservo;
char msg ;
int pos = 0;
 
void setup() {
  myservo.attach(13);
  // Note the format for setting a serial port is as follows: Serial2.begin(baud-rate, protocol, RX pin, TX pin);
  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, RXD2, TXD2);
  
  Serial.println("Serial Txd is on pin: "+String(TX));
  Serial.println("Serial Rxd is on pin: "+String(RX));
}
 
void loop() { //Choose Serial1 or Serial2 as required
//  get_tds_Value();
//  delay(1000);
  while (Serial2.available()) {
    msg = Serial2.read();
    Serial.println("good"); 
    Serial.println(msg); 
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                     // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  
  }
  
  
}
