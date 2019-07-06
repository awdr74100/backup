using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default2 : System.Web.UI.Page
{

    
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }




    protected void Button1_Click(object sender, EventArgs e)
    {
        double a = Convert.ToInt32(TextBox1.Text);
        double b = Convert.ToInt32(TextBox2.Text);
        double c = Convert.ToInt32(TextBox3.Text);
        switch (CheckBoxList1.SelectedValue)
        {
            case "0":
                Label1.Text = a.ToString() + "+" + b.ToString() + "+" + c.ToString() + "=" + (a + b + c).ToString(); 
                break;
            case "1":
                Label1.Text = a.ToString() + "-" + b.ToString() + "-" + c.ToString() + "=" + (a - b - c).ToString();
                break;
            case "2":
                Label1.Text = a.ToString() + "×" + b.ToString() + "×" + c.ToString() + "=" + (a * b * c).ToString();
                break;
            case "3":
                if(b == 0 && c == 0)
                {
                    Label1.Text = "無法相除";
                }
                else
                {
                    Label1.Text = a.ToString() + "÷" + b.ToString() + "÷" + c.ToString() + "=" + (a / b / c).ToString();
                }
                break;
            default:
                Label1.Text = "0";
                break;

        }
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        Label1.Text = "";
        CheckBoxList1.ClearSelection();



    }
    
    protected void CheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        

        
    }


}