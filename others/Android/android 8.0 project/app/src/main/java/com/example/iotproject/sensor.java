package com.example.iotproject;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.support.v4.view.GravityCompat;
import android.support.v7.app.ActionBarDrawerToggle;
import android.view.MenuItem;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;

import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.widget.Button;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import android.widget.TextView;
import android.widget.Toast;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;
import android.widget.Button;
import android.util.Log;
import android.os.AsyncTask;
import android.os.Handler;



public class sensor extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {


    private String Drink;
    private String Eat;
    private String Name;
    private String Weight;
    private String Age;

    //    thingspeak 資料欄位 start
    private static final String TAG = "UsingThingspeakAPI";
    private static final String THINGSPEAK_CHANNEL_ID = "800650";
    private static final String THINGSPEAK_API_KEY = "BYTNIGFTM72HTLCQ"; //GARBAGE KEY
    private static final String THINGSPEAK_API_KEY_STRING = "BYTNIGFTM72HTLCQ";
    /* Be sure to use the correct fields for your own app*/
    private static final String THINGSPEAK_FIELD1 = "field1";
    private static final String THINGSPEAK_FIELD2 = "field2";
    private static final String THINGSPEAK_FIELD3 = "field3";
    private static final String THINGSPEAK_FIELD4 = "field4";
    private static final String THINGSPEAK_UPDATE_URL = "https://api.thingspeak.com/update?";
    private static final String THINGSPEAK_CHANNEL_URL = "https://api.thingspeak.com/channels/";
    private static final String THINGSPEAK_FEEDS_LAST = "/feeds/last?";

    //    thingspeak 資料欄位 end
    private  String message;
    private Runnable runnable;
    private Handler handler = new Handler( );
    DrawerLayout drawer;
    TextView view1,view2,view3,view4,msg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sensor);

        setTitle("Health butler");

        Bundle box1 =this.getIntent().getExtras();
        Name = box1.getString("Name");
        Weight = box1.getString("Weight");
        Age = box1.getString("Age");
        Drink = box1.getString("Drink");
        Eat = box1.getString("Eat");

//        初始建構
        drawer = findViewById(R.id.drawer_layout);

        TextView tt1 = findViewById(R.id.tt1);
        TextView tt2 = findViewById(R.id.tt2);
        TextView tt3 = findViewById(R.id.tt3);
        TextView tt4 = findViewById(R.id.tt4);


        tt1.setText(">"+Drink+" c.c.");
        tt3.setText(">"+Eat+" g");
        tt2.setText("<2次 ");
        tt4.setText("<450 ppm");

        message = "Not executed";


        Button btn1 = findViewById(R.id.btn1);
        Button btn2 = findViewById(R.id.btn2);
        Button btn3 = findViewById(R.id.btn3);
        Button btn4 = findViewById(R.id.btn4);
        Button btn5 = findViewById(R.id.btn5);

         view1 = findViewById(R.id.view1);
         view2 = findViewById(R.id.view2);
         view3 = findViewById(R.id.view3);
         view4 = findViewById(R.id.view4);
         msg = findViewById(R.id.msg);


        runnable = new Runnable( ) {
            public void run ( ) {
                try {
                    new FetchThingspeakTask().execute();
                }
                catch(Exception e){
                    Log.e("ERROR", e.getMessage(), e);
                }
                handler.postDelayed(this,15000);
            }
        };




        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);


        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, message, Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        btn1.setOnClickListener(new View.OnClickListener() {
            public void onClick(View arg0) {
                handler.postDelayed(runnable,1000); // 開始Timer
                drawer.closeDrawer(GravityCompat.START);
            }
        });

        btn2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View arg0) {
                drawer.closeDrawer(GravityCompat.START);
                message = "Stop Fetching Data";
                handler.removeCallbacks(runnable); //停止Timer
            }
        });


        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(sensor.this,catvalue.class);

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



        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(sensor.this,input.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });

        btn5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(sensor.this,about.class);
                startActivity(intent);
                overridePendingTransition(R.anim.slide_in_right, R.anim.animo_no);
            }
        });






        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.sensor, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_home) {
            // Handle the camera action
        } else if (id == R.id.nav_gallery) {

        } else if (id == R.id.nav_slideshow) {

        } else if (id == R.id.nav_tools) {

        } else if (id == R.id.nav_share) {

        } else if (id == R.id.nav_send) {

        }

        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }


    class FetchThingspeakTask extends AsyncTask<Void, Void, String> {
        protected void onPreExecute() {
            message = "Fetching Data from Server.";
        }
        protected String doInBackground(Void... urls) {
            try {
                URL url = new URL(THINGSPEAK_CHANNEL_URL + THINGSPEAK_CHANNEL_ID +
                        THINGSPEAK_FEEDS_LAST + THINGSPEAK_API_KEY_STRING + "=" +
                        THINGSPEAK_API_KEY + "");
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                    StringBuilder stringBuilder = new StringBuilder();
                    String line;
                    while ((line = bufferedReader.readLine()) != null) {
                        stringBuilder.append(line).append("\n");
                    }
                    bufferedReader.close();
                    return stringBuilder.toString();
                }
                finally{
                    urlConnection.disconnect();
                }
            }
            catch(Exception e) {
                Log.e("ERROR", e.getMessage(), e);
                return null;
            }
        }
        protected void onPostExecute(String response) {
            if(response == null) {
                Toast.makeText(sensor.this, "There was an error", Toast.LENGTH_SHORT).show();
                return;
            }
            try {
                JSONObject channel = (JSONObject) new JSONTokener(response).nextValue();
                double v1 = channel.getDouble(THINGSPEAK_FIELD1);
                double v2 = channel.getDouble(THINGSPEAK_FIELD2);
                double v3 = channel.getDouble(THINGSPEAK_FIELD3);
                double v4 = channel.getDouble(THINGSPEAK_FIELD4);


                int weight = (int) v1;
                String weightvalue = String.valueOf(weight);
                view3.setText(weightvalue);


                int water = (int) v2;
                if (water<360){
                    view1.setText("50");
                }else if(water<720){
                    view1.setText("100");
                }else if(water<1080){
                    view1.setText("150");
                }else if(water<1440){
                    view1.setText("200");
                }else if(water<1800){
                    view1.setText("250");
                }else if(water<2160){
                    view1.setText("300");
                }else if(water<2520){
                    view1.setText("350");
                }else if(water<2880){
                    view1.setText("400");
                }else if(water<3240){
                    view1.setText("450");
                }else if(water<3600){
                    view1.setText("500");
                }

//                int pump = (int) v3;
//                if (pump >1){
//
//                }

                if (water <10 && weight<1){
                    view2.setText("1");
                }else {
                    view2.setText("0");
                }


                int tds = (int) v4;
                if (tds>450){
                    view4.setTextColor(android.graphics.Color.RED);
                }
                String tdsvalue = String.valueOf(tds);
                view4.setText(tdsvalue);



//                String value1 =Double.toString(v1);
//                String value2 =Double.toString(v2);
//                String value3 =Double.toString(v3);
//                view1.setText(value1);
//                view2.setText(value2);
//                view3.setText(value3);
//                view4.setText(value3);
//                if(v1>=90)
//                    t1.setText("HI ALL  ");
//                    t3.setText("84");
//                else
//                    t1.setText("NO VALUES");
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }



}
