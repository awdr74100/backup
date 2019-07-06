using System;
using System.Collections.Generic;
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
        SqlDataSource2.DeleteCommand = "Delete from [account] where Id=" + DropDownList1.SelectedValue;
        SqlDataSource2.Delete();
        DropDownList1.DataBind();
    }
}