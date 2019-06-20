int relayPin = 23;
 
void setup() {
  pinMode(relayPin, OUTPUT);
}
 
void loop() {
  digitalWrite(relayPin, HIGH);
  delay(4000);
  digitalWrite(relayPin, LOW);
  delay(4000);
}
