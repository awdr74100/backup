package com.example.project2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.example.project2.MainActivity.Book;

public class Main2Activity extends AppCompatActivity {

    private Button b1;

    private static final int number = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

      //  Intent intent = getIntent();
     //   String book_name = intent.getStringExtra("book_name");
     //   Log.d("book","book_name"+book_name);

        Intent intent = getIntent();
        Book data = (Book)
        getIntent().getSerializableExtra("li");
        Log.d("MS","MS1 = "+data.getSize());
        Log.d("MS","MS2 = "+data.getWidth());



        b1 = findViewById(R.id.b1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
       //         Intent intent = getIntent();
        //        intent.putExtra("book","54545");
       //         setResult(number,intent);
                finish();
            }
        });
    }
}
