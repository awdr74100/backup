package com.example.iotproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class input extends AppCompatActivity {

    private Button btn1,btn2;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_input);

        btn1 = findViewById(R.id.btn1);
        btn2 = findViewById(R.id.btn2);


        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(input.this,ageExplain.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });


        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(input.this,check.class);

                EditText EditTextName = (EditText)findViewById(R.id.edit1);
                Editable StrName = EditTextName.getText();
                String Name = StrName.toString();

                EditText EditTextWeight = (EditText)findViewById(R.id.edit2);
                int IntWeight = Integer.parseInt(EditTextWeight.getText().toString());
                String Weight = String.valueOf(IntWeight);

                EditText EditTextAge = (EditText)findViewById(R.id.edit3);
                int IntAge = Integer.parseInt(EditTextAge.getText().toString());
                String Age = String.valueOf(IntAge);



                String Drink;
                String Eat;

                if (IntWeight<=3){
                    int IntEat = 80;
                    Eat = String.valueOf(IntEat);
                }else if (IntWeight<=6){
                    int IntEat = 140;
                    Eat = String.valueOf(IntEat);
                }else {
                    int IntEat = 200;
                    Eat = String.valueOf(IntEat);
                }


                if (IntAge <= 1){
                    int Intdrink = IntWeight * 80;
                    Drink = String.valueOf(Intdrink);
                }else if(IntAge <=9){
                    int Intdrink = IntWeight * 40;
                    Drink = String.valueOf(Intdrink);
                }else {
                    int Intdrink = IntWeight * 50;
                    Drink = String.valueOf(Intdrink);
                }

                Bundle bundle = new Bundle();
                bundle.putString("Name", Name);
                bundle.putString("Weight", Weight);
                bundle.putString("Age", Age);
                bundle.putString("Drink",Drink);
                bundle.putString("Eat",Eat);

                intent.putExtras(bundle);

                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });


    }
}
