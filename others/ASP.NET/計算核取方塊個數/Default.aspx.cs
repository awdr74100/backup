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

    protected void CheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
    {
        int cc = 0;
        foreach (ListItem i in CheckBoxList1.Items)
            //for (int i = 0; i < CheckBoxList1.Items.Count; i++)
            //if (CheckBoxList1.Items[i].Selected)
            if (i.Selected)
                cc++;
        Label1.Text = cc.ToString();
    }
}