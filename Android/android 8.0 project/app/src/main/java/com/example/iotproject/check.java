package com.example.iotproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class check extends AppCompatActivity {

    private Button btn1;
    private TextView t1,t2,t3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_check);



        Bundle box1 =this.getIntent().getExtras();
        String Name = box1.getString("Name");
        String Weight = box1.getString("Weight");
        String Age = box1.getString("Age");



        btn1 = findViewById(R.id.btn1);
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(check.this,sensor.class);


                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });

    }
}
