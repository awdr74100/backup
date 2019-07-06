package com.example.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import static com.example.myapplication.MainActivity.*;


public class Main2Activity extends AppCompatActivity {

    private Button b3;
    private EditText e3,e4;
    private TextView t1,t2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Intent intent = getIntent();
        MSS data = (MSS)
        getIntent().getSerializableExtra("li");

        String sd = Integer.toString(data.getSize()*50);
        String ad = Integer.toString(data.getSize());
        String cd = Integer.toString(data.getWidth());
        Log.d("look","this1 = "+sd);

        Log.d("look","this1 = "+data.getSize());
        Log.d("look","this1 = "+data.getWidth());

        b3 = findViewById(R.id.b3);
        t1 = findViewById(R.id.t1);
        t2 = findViewById(R.id.t2);

        t1.setText(ad);
        t2.setText(cd);

        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                finish();
            }
        });











    }
}
