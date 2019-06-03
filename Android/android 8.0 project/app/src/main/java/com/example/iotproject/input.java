package com.example.iotproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class input extends AppCompatActivity {

    private Button btn1;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_input);

        btn1 = findViewById(R.id.btn1);





        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(input.this,check.class);

                EditText EditTextName = (EditText)findViewById(R.id.edit1);
                Editable StrName;
                StrName = EditTextName.getText();
                String Name = StrName.toString();

                EditText EditTextWeight = (EditText)findViewById(R.id.edit2);
                Editable StrWeight;
                StrWeight = EditTextWeight.getText();
                String Weight = StrWeight.toString();

                EditText EditTextAge = (EditText)findViewById(R.id.edit3);
                Editable StrAge;
                StrAge = EditTextAge.getText();
                String Age = StrAge.toString();

                Bundle bundle = new Bundle();
                bundle.putString("Name", Name);
                bundle.putString("Weight", Weight);
                bundle.putString("Age", Age);

                intent.putExtras(bundle);

                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });


    }
}
