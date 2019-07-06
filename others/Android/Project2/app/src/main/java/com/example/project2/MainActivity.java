package com.example.project2;

import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.Serializable;

public class MainActivity extends AppCompatActivity {




    private static final int number = 1;
    private TextView tv_show,view;
    private Button btn_show,push,gogo;
    private EditText exit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        gogo = findViewById(R.id.gogo);
        gogo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                Intent intent =  new Intent(MainActivity.this,Main2Activity.class);
                Book mBook = new Book();
                mBook.setSize(60);
                mBook.setWidth(100);

                intent.putExtra("li",mBook);
                startActivity(intent);


              //  intent.putExtra("boo","我好帥");

              //  startActivityForResult(intent,number);
            }
        });

        view = (TextView)findViewById(R.id.view);
        exit = (EditText)findViewById(R.id.exit);
        push = (Button)findViewById(R.id.push);

        push.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                view.setText(exit.getText().toString());

            }
        });


        tv_show = (TextView)findViewById(R.id.tv_show);
        btn_show = (Button)findViewById(R.id.btn_show);

        btn_show.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                tv_show.setText("按鈕測試");
                tv_show.setTextSize(50);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        switch (requestCode){
            case number:
                String result = data.getStringExtra("book");
                Log.d("test","is"+ result);
                break;
        }

    }
    public  static class Book implements Serializable
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


