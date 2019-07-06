#include <Servo.h>

Servo myservo; // 建立Servo物件，控制伺服馬達
Servo myservo1; // 建立Servo物件，控制伺服馬達
Servo myservo2; // 建立Servo物件，控制伺服馬達
Servo myservo3; // 建立Servo物件，控制伺服馬達
Servo myservo4; // 建立Servo物件，控制伺服馬達
Servo myservo5; // 建立Servo物件，控制伺服馬達
Servo myservo6; // 建立Servo物件，控制伺服馬達
Servo myservo7; // 建立Servo物件，控制伺服馬達

void setup() 
{ 
  myservo.attach(2); // 連接數位腳位9，伺服馬達的訊號線
   myservo1.attach(3);
    myservo2.attach(4);
     myservo3.attach(5);
      myservo4.attach(6);
       myservo5.attach(7);
        myservo6.attach(8);
         myservo7.attach(9);
} 

void loop() 
{
   myservo.write(45);
    myservo1.write(45);
     myservo2.write(45);
      myservo3.write(45);
       myservo4.write(45);
        myservo5.write(45);
         myservo6.write(45);
          myservo7.write(45);
      delay(2000);
       myservo.write(90);
    myservo1.write(90);
     myservo2.write(90);
      myservo3.write(90);
       myservo4.write(90);
        myservo5.write(90);
         myservo6.write(90);
          myservo7.write(90);
      delay(2000);
       myservo.write(135);
    myservo1.write(135);
     myservo2.write(135);
      myservo3.write(135);
      myservo4.write(135);
        myservo5.write(135);
         myservo6.write(135);
          myservo7.write(135);
       delay(2000);
 
    
  
}
