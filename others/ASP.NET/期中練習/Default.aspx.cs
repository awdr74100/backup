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
        double roomprice;
        switch (DropDownList1.SelectedValue)
        {
            case "0":
                if (RadioButtonList1.SelectedValue == "0")
                    roomprice = 2850.0;
                else
                    roomprice = 3150.0;
                break;
            case "1":
                if (RadioButtonList1.SelectedValue == "0")
                    roomprice = 2450.0;
                else
                    roomprice = 2650.0;
                break;
            default:
                if (RadioButtonList1.SelectedValue == "0")
                    roomprice = 3950.0;
                else
                    roomprice = 4250.0;
                break;
        }
        double tot = 0.0;
        foreach (ListItem i in CheckBoxList1.Items)
        {
            if (i.Selected)
            {
                if (Convert.ToUInt32(i.Value) < 6)
                    tot += roomprice;
                else
                {
                    switch (DropDownList1.SelectedValue) {
                        case "0":
                            tot += roomprice * 1.1;
                            break;
                        case "1":
                            tot += roomprice * 1.09;
                            break;
                        default:
                            tot += roomprice * 1.12;
                            break;
                    }
                }
            }
        }


        Label1.Text = tot.ToString();
    }
}