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
        DateTime.Now.ToShortTimeString();
        DateTime dt = DateTime.Now.AddMinutes(20);
        dt.ToLongTimeString().ToString();

        Label1.Text = dt.ToLongTimeString().ToString();

        
        if(dt.Hour < 8 || dt.Hour > 22)
        {
            TextBox1.Text = "";
            TextBox2.Text = "";
            TextBox3.Text = "";
            TextBox4.Text = "";
            TextBox1.ReadOnly = true;
            TextBox2.ReadOnly = true;
            TextBox3.ReadOnly = true;
            TextBox4.ReadOnly = true;
            Button1.Enabled = false;
            Label2.Text = "門市今日可派單時間已結束";
            

        }
    }




    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("default2.aspx");
    }
}