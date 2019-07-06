package com.example.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.io.Serializable;

public class MainActivity extends AppCompatActivity {

    private Button b1;
    private EditText e1,e2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1 = findViewById(R.id.e1);
        e2 = findViewById(R.id.e2);
        b1 = findViewById(R.id.b1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(MainActivity.this,Main2Activity.class);
                MSS mss = new MSS();

                int a = Integer.parseInt(e1.getText().toString());
                int b = Integer.parseInt(e2.getText().toString());

                mss.setSize(a);
                mss.setWidth(b);
                intent.putExtra("li",mss);
                startActivity(intent);

            }
        });
    }

    public  static class MSS implements Serializable
    {
        private int width;
        private int size;

        public int getSize() {
            return size;
        }

        public void setSize(int size) {
            this.size = size;
        }



        public int getWidth() {
            return width;
        }

        public void setWidth(int width) {
            this.width = width;
        }



    }
}
