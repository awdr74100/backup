#include <SoftwareSerial.h> 

#include <Servo.h>
Servo myservo2, myservo3, myservo4, myservo5, myservo6, myservo7, myservo8, myservo9, myservo10, myservo11, myservo12, myservo13; 

int bluetoothTx = 52; 
int bluetoothRx = 53; 

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup()
{
  myservo2.attach(2);
  myservo3.attach(3);                          
  myservo4.attach(4);
  myservo5.attach(5); 
  myservo6.attach(6);
  myservo7.attach(7);                          
  myservo8.attach(8);
  myservo9.attach(9); 
  myservo10.attach(10);
  myservo11.attach(11);                          
  myservo12.attach(12);
  myservo13.attach(13);
  
  Serial.begin(9600);

  
  bluetooth.begin(9600);
}

void loop()
{
 
  if(bluetooth.available()>= 1 )
  {
    unsigned int servopos = bluetooth.read();
    //unsigned int servopos1 = bluetooth.read();
    unsigned int realservo =  servopos;
    Serial.println(realservo);

    if (realservo >= 1 && realservo <=5) {
      int servo1 = realservo;
      servo1 = map(servo1, 1, 5, 0, 180);
      myservo3.write(90);
      
      Serial.println("Servo 1 ON");
      delay(10);
    }
    if (realservo >= 6 && realservo <=10) {
      int servo2 = realservo;
      servo2 = map(servo2, 6, 10, 0, 180);
       myservo3.write(90);
      delay(200);
      myservo3.write(45);
      delay(200);
      myservo4.write(45);
      delay(200);
      myservo3.write(90);
      delay(200);
      myservo4.write(90);
      delay(200);
      myservo9.write(45);
      delay(200);
      myservo9.write(135);
      delay(200);
      myservo10.write(45);
      delay(200);
      myservo9.write(45);
      delay(200);
      myservo10.write(90);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo12.write(135);
      delay(200);
      myservo13.write(45);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo13.write(90);
      delay(200);
      myservo6.write(45);
      delay(200);
      myservo7.write(45);
      delay(200);
      myservo6.write(90);
      delay(200);
      myservo7.write(90);
      Serial.println("Servo 2 ON");
      delay(10);
    }
    if (realservo >= 11 && realservo <=15) {
      int servo7 = realservo;
      servo7 = map(servo7, 11, 15, 0, 180);
      myservo3.write(90);
      delay(200);
      myservo3.write(45);
      delay(200);
      myservo4.write(135);
      delay(200);
      myservo3.write(90);
      delay(200);
      myservo4.write(90);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo12.write(135);
      delay(200);
      myservo13.write(45);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo13.write(90);
      delay(200);
      myservo9.write(45);
      delay(200);
      myservo9.write(135);
      delay(200);
      myservo10.write(135);
      delay(200);
      myservo9.write(45);
      delay(200);
      myservo10.write(90);
      delay(200);
      myservo6.write(45);
      delay(200);
      myservo7.write(45);
      delay(200);
      myservo6.write(90);
      delay(200);
      myservo7.write(90);
      
      
     
    
      Serial.println("Servo 3 ON");
      delay(10);
    }
    if (realservo >= 16 && realservo <=20) {
      int servo4 = realservo;
      servo4 = map(servo4, 16, 20, 0, 180);
      myservo3.write(90);
      delay(200);
      myservo3.write(45);
      delay(200);
      myservo4.write(135);
      delay(200);
      myservo3.write(90);
      delay(200);
      myservo4.write(90);
      delay(200);
       myservo6.write(45);
      delay(200);
      myservo7.write(135);
      delay(200);
      myservo6.write(90);
      delay(200);
      myservo7.write(90);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo12.write(135);
      delay(200);
      myservo13.write(135);
      delay(200);
      myservo12.write(45);
      delay(200);
      myservo13.write(90);
      delay(200);
       myservo9.write(45);
      delay(200);
      myservo9.write(135);
      delay(200);
      myservo10.write(135);
      delay(200);
      myservo9.write(45);
      delay(200);
      myservo10.write(90);
      delay(200);
      
      Serial.println("Servo 4 ON");
      delay(10);
    }
  }
}
