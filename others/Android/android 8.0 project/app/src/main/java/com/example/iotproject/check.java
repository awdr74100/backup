package com.example.iotproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.TextView;

public class check extends AppCompatActivity {

    private Button btn1;
    private CheckBox ck1,ck2,ck3,ck4;
    private int IntDrink;
    private int IntEat;
    private String Drink;
    private String Eat;
    private String Name;
    private String Weight;
    private String Age;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_check);

        ck1 = findViewById(R.id.ck1);
        ck2 = findViewById(R.id.ck2);
        ck3 = findViewById(R.id.ck3);
        ck4 = findViewById(R.id.ck4);


        Bundle box1 =this.getIntent().getExtras();
        Name = box1.getString("Name");
        Weight = box1.getString("Weight");
        Age = box1.getString("Age");
        Drink = box1.getString("Drink");
        Eat = box1.getString("Eat");

        IntDrink = Integer.valueOf(Drink);
        IntEat = Integer.valueOf(Eat);


        ck1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked){
                    IntDrink = IntDrink - ((IntEat /10)*7);
                    Drink = String.valueOf(IntDrink);
                }else {
                    IntDrink = IntDrink + ((IntEat /10)*7);
                    Drink = String.valueOf(IntDrink);
                }
            }
        });

        ck2.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked){
                    IntDrink = IntDrink + 60;
                    IntEat = IntEat +40;
                    Drink = String.valueOf(IntDrink);
                    Eat = String.valueOf(IntEat);
                }else {
                    IntDrink = IntDrink - 60;
                    IntEat = IntEat - 40;
                    Drink = String.valueOf(IntDrink);
                    Eat = String.valueOf(IntEat);
                }
            }
        });

        ck3.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked){
                    IntDrink = IntDrink + 60;
                    Drink = String.valueOf(IntDrink);
                }else {
                    IntDrink = IntDrink-60;
                    Drink = String.valueOf(IntDrink);
                }
            }
        });

        ck4.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked){
                    IntDrink = IntDrink + 40;
                    Drink = String.valueOf(IntDrink);
                }else {
                    IntDrink = IntDrink -40  ;
                    Drink = String.valueOf(IntDrink);
                }
            }
        });


        btn1 = findViewById(R.id.btn1);
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(check.this,sensor.class);

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
