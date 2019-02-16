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

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        DataView dv = (DataView)SqlDataSource1.Select(new DataSourceSelectArguments());
        if (dv.Table.Rows.Count != 0)
        {
            Session["user"] = TextBox1.Text;
            Server.Transfer("aaa.aspx");
        }
        else
            Label1.Text = "帳號密碼錯誤";
    }
}