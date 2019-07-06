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
        double[,] roomprice = { { 2850.0, 2450.0, 3950.0 }, { 3150.0, 2650.0, 4250.0 } };
        double[] surcharge = { 1.1, 1.09, 1.12 };
        double sprice = roomprice[Convert.ToInt32(RadioButtonList1.SelectedValue), Convert.ToInt32(DropDownList1.SelectedValue)];

        
        double tot = 0.0;
        foreach (ListItem i in CheckBoxList1.Items)
        {
            if (i.Selected)
            {
                if (Convert.ToUInt32(i.Value) < 6)
                    tot += sprice;
                else
                    tot += sprice * surcharge[Convert.ToInt32(DropDownList1.SelectedValue)];
            }
        }


        Label1.Text = tot.ToString();
    }
}