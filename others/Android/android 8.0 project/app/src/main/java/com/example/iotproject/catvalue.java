package com.example.iotproject;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class catvalue extends AppCompatActivity {

    private Button btn1;
    private TextView e1,e2,e3,e4,e5;

    private String Drink;
    private String Eat;
    private String Name;
    private String Weight;
    private String Age;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_catvalue);

        btn1 = findViewById(R.id.btn1);

        e1 = findViewById(R.id.name);
        e2 = findViewById(R.id.weight);
        e3 = findViewById(R.id.age);
        e4 = findViewById(R.id.drink);
        e5 = findViewById(R.id.eat);

        Bundle box1 =this.getIntent().getExtras();
        Name = box1.getString("Name");
        Weight = box1.getString("Weight");
        Age = box1.getString("Age");
        Drink = box1.getString("Drink");
        Eat = box1.getString("Eat");

        e1.setText(Name);
        e2.setText(Weight);
        e3.setText(Age);
        e4.setText(Drink);
        e5.setText(Eat);


        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                catvalue.this.finish();
                overridePendingTransition(0, R.anim.slide_out_right);

            }
        });

    }
}
