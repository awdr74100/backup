using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
   

    protected void Page_Load(object sender, EventArgs e)
    {
        
    }

    protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
    {
        int food = 0;

        int drink = 0;

        int add = 0; 

        if(RadioButton1.Checked == true)
        {
            food = 30;
        }else if (RadioButton2.Checked == true)
        {
            food = 40;
        }

        if (RadioButton3.Checked == true)
        {
            drink = 20;
        }
        else if (RadioButton4.Checked == true)
        {
            drink = 25;
        }

        if(RadioButton5.Checked == true)
        {
            if(RadioButton3.Checked == true || RadioButton4.Checked == true)
            {
                add = 5;
            }
        }
       
        Label1.Text = ((food + drink + add )* Convert.ToInt32(TextBox1.Text)).ToString()  ;
    }





    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        int food = 0;

        int drink = 0;

        int add = 0;

        if (RadioButton1.Checked == true)
        {
            food = 30;
        }
        else if (RadioButton2.Checked == true)
        {
            food = 40;
        }

        if (RadioButton3.Checked == true)
        {
            drink = 20;
        }
        else if (RadioButton4.Checked == true)
        {
            drink = 25;
        }

        if (RadioButton5.Checked == true)
        {
            if (RadioButton3.Checked == true || RadioButton4.Checked == true)
            {
                add = 5;
            }
        }

        Label1.Text = ((food + drink + add) * Convert.ToInt32(TextBox1.Text)).ToString();
    }
}