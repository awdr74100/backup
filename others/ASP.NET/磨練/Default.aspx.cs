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
        double price;
        double[,] aa = {
            {2850,2450,3950 },
            { 3150,2650,4250}
        };
        switch(DropDownList1.SelectedValue)
        {
            case "0":
                if(RadioButtonList1.SelectedValue == "0")
                {
                    price = 2850;
                }
                else
                {
                    price = 3150;
                }
                break;
            case "1":
                if (RadioButtonList1.SelectedValue == "1")
                {
                    price = 2450;
                }
                else
                {
                    price = 2650;
                }
                break;
            default:
                if (RadioButtonList1.SelectedValue == "2")
                {
                    price = 3950;
                }
                else
                {
                    price = 4250;
                }
                break;
        }
        double tot = 0.0;
        foreach (ListItem i  in CheckBoxList1.Items)
        {
            if (i.Selected)
            {
                if(Convert.ToInt32(i.Value) < 6)
                {
                    tot += price;
                }
                else
                {
                    switch (DropDownList1.SelectedValue)
                    {
                        case "0":
                            tot = tot + price * 1.1;
                            break;
                        case "1":
                            tot = tot + price * 1.09;
                            break;
                        default:
                            tot = tot + price * 1.12;
                            break;
                    }
                }
            }
            
        }
        Label1.Text = tot.ToString();
    }


    protected void Button2_Click(object sender, EventArgs e)
    {
        Label1.Text = "0";
    }
}