#define waterPin 36
int Water = 0;


void setup()
{
  
 Serial.begin(115200);

}
 
void loop()
{
 get_Water_Level();
 delay(100);
}

void get_Water_Level(){
  Water = analogRead(waterPin);
  Serial.print("Water Value:");
  Serial.println(Water);
}
