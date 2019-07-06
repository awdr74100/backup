using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default3 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["name"] == null)
        {
            Server.Transfer("Default.aspx");
        }

        

        Label1.Text = (string)Session["name"];
        Label10.Text = (string)Session["phone"];
        Label2.Text = (string)Session["address"];
        Label3.Text = (string)Session["time"];
        Label11.Text = (string)Session["select"];

        DataTable cart = (DataTable)Session["cart"];

        Label9.Text = cart.Compute("sum(total)", "").ToString();

        DataList1.DataSource = cart;
        DataList1.DataBind();
    }

    protected void DataList1_ItemCommand1(object source, DataListCommandEventArgs e)
    {
        
    }



    protected void Button4_Click(object sender, EventArgs e)
    {
        Response.Write("<script>alert('" + "已送出餐點，將回到點餐畫面" + "');</script>");
        Server.Transfer("Default.aspx");
    }
}