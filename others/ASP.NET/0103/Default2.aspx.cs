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
        SqlDataSource1.InsertCommand = "insert into[account]([name],[account],[password]) values('" + TextBox1.Text + "','" + TextBox2.Text + "','" + TextBox3.Text + "')";
        SqlDataSource1.Insert();
        DropDownList1.DataBind();

    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        SqlDataSource1.DeleteCommand = "Delete from [account] where Id=" + DropDownList1.SelectedValue;
        SqlDataSource1.Delete();
        DropDownList1.DataBind();
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        Server.Transfer("Default3.aspx", true);
    }
}