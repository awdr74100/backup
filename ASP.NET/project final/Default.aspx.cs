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
        dt.ToShortTimeString().ToString();

        Label2.Text = dt.ToShortTimeString().ToString();

        if (dt.Hour < 6 || dt.Hour >24 )
        {
            TextBox1.Text = "";
            TextBox2.Text = "";
            
            TextBox1.ReadOnly = true;
            TextBox2.ReadOnly = true;
            
            Button1.Enabled = false;
            Label2.Text = "";
            Label3.Text = "門市今日可派單時間已結束";


        }

    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        if(RadioButton1.Checked == true)
        {
            Session["name"] = TextBox1.Text + "先生";
        }
        else
        {
            Session["name"] = TextBox1.Text + "小姐";
        }

        if (RadioButton3.Checked == true)
        {
            Session["select"] = "外帶";
        }
        else
        {
            Session["select"] = "內用";
        }


        if (TextBox1.Text == "")
        {
            Response.Write("<script>alert('"+"姓名必須輸入!" + "');</script>");
        }else if(TextBox2.Text == "")
        {
            Response.Write("<script>alert('" + "連絡電話必須輸入!" + "');</script>");
        }
        else
        {
            
            Session["phone"] = TextBox2.Text;
            Session["time"] = Label2.Text;
            
            
            Server.Transfer("Default2.aspx");

        }
        

    }

    protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
    {
        if (e.CommandName == "open")
        {
            Label lb = e.Item.FindControl("Label5") as Label;
            Session["address"] = lb.Text;

        }
        
    }

    
}
