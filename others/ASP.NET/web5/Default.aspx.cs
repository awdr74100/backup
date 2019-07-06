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



    protected void Button1_Click(object sender, EventArgs e)
    {
        double total;
        switch (DropDownList1.SelectedValue)
        {
            case "0":
                if (RadioButtonList1.SelectedValue == "0")
                    total = 2850.0;
                else
                    total = 3150.0;
                break;
            case "1":
                if (RadioButtonList1.SelectedValue == "0")
                    total = 2450.0;
                else
                    total = 2650.0;
                break;
            default:
                if (RadioButtonList1.SelectedValue == "0")
                    total = 3950.0;
                else
                    total = 4250.0;
                break;
        }
        double total1 = 0.0;
        foreach (ListItem i in CheckBoxList1.Items)
        {
            if (i.Selected)
            {
                if (Convert.ToUInt32(i.Value) < 6)
                    total1 = total + total1;
                else
                {
                    switch (DropDownList1.SelectedValue)
                    {
                        case "0":
                            total1 += total * 1.1;
                            break;
                        case "1":
                            total1 += total * 1.09;
                            break;
                        default:
                            total1 += total * 1.12;
                            break;
                    }
                }
            }
        }
        Label1.Text = total1.ToString();
    }
}