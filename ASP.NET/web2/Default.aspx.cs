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

    protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
    {
        int mp = 0;
        if (RadioButton1.Checked)
            mp = 30;
        else
            if (RadioButton2.Checked)
            mp = 40;
        Label1.Text = (Convert.ToInt32(TextBox1.Text) * mp).ToString();
    }

    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        int mp = 0;
        if (RadioButton1.Checked)
            mp = 30;
        else
        {
            if (RadioButton2.Checked)
                mp = 40;
        }
        Label1.Text = (Convert.ToInt32(TextBox1.Text) * mp).ToString();
    }

    protected void RadioButton2_CheckedChanged(object sender, EventArgs e)
    {
        int mp = 0;
        if (RadioButton1.Checked)
            mp = 30;
        else
            if (RadioButton2.Checked)
            mp = 40;
        Label1.Text = (Convert.ToInt32(TextBox1.Text) * mp).ToString();
    }
}