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
        Button bt = (Button)sender;

        
        
        switch (bt.Text) {
            
            case "AC":

                
                Label1.Text = "0";
                if (Session["prevbt"] != null)
                {
                    Button prevbt = (Button)Page.FindControl(Session["prevbt"].ToString());
                    prevbt.BackColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                    prevbt.ForeColor = System.Drawing.Color.White;
                }
                Session.RemoveAll();
                break;
            case "+":

                

                bt.BackColor = System.Drawing.Color.White;
                bt.ForeColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                if ((Session["prevbt"] != null) && (Session["prevbt"].ToString() != bt.ID))
                {
                    Button prevbt = (Button)Page.FindControl(Session["prevbt"].ToString());
                    prevbt.BackColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                    prevbt.ForeColor = System.Drawing.Color.White;
                }
                Session["prevbt"] = bt.ID;
                if (Session["res"] == null)
                    Session["res"] = Session["inval"];
                else
                {
                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) + Convert.ToInt32(Session["inval"].ToString());
                    Label1.Text = Session["res"].ToString();
                }
                Session["inval"] = "0";
                break;
            case "－":
                bt.BackColor = System.Drawing.Color.White;
                bt.ForeColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                if ((Session["prevbt"] != null) && (Session["prevbt"].ToString() != bt.ID))
                {
                    Button prevbt = (Button)Page.FindControl(Session["prevbt"].ToString());
                    prevbt.BackColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                    prevbt.ForeColor = System.Drawing.Color.White;
                }
                Session["prevbt"] = bt.ID;
                if (Session["res"] == null)
                    Session["res"] = Session["inval"];
                else
                {
                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) - Convert.ToInt32(Session["inval"].ToString());
                    Label1.Text = Session["res"].ToString();
                }
                Session["inval"] = "0";
                break;
            case "X":
                bt.BackColor = System.Drawing.Color.White;
                bt.ForeColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                if ((Session["prevbt"]!=null)&&(Session["prevbt"].ToString()!=bt.ID))
                {
                    Button prevbt = (Button)Page.FindControl(Session["prevbt"].ToString());
                    prevbt.BackColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                    prevbt.ForeColor = System.Drawing.Color.White;
                }
                Session["prevbt"] = bt.ID;
                if (Session["res"] == null)
                    Session["res"] = Session["inval"];
                else
                {
                    

                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) * Convert.ToInt32(Session["inval"].ToString());
                    Session["total"] = Convert.ToInt32(Session["res"].ToString());
                    Label1.Text = Session["res"].ToString();
                }
                Session["inval"] = "0";
                break;

            case "=":

                string total = Session["prevbt"].ToString();
                bt.BackColor = System.Drawing.Color.White;
                bt.ForeColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                if ((Session["prevbt"] != null) && (Session["prevbt"].ToString() != bt.ID))
                {
                    Button prevbt = (Button)Page.FindControl(Session["prevbt"].ToString());
                    prevbt.BackColor = System.Drawing.Color.FromArgb(255, 240, 154, 55);
                    prevbt.ForeColor = System.Drawing.Color.White;
                }

                if (Session["res"] == null)
                    Session["res"] = Session["inval"];
                else if (total == "Button4")
                {
                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) * Convert.ToInt32(Session["inval"].ToString());
                    Label1.Text = Session["res"].ToString();

                }

                else if (total == "Button8")
                {
                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) - Convert.ToInt32(Session["inval"].ToString());
                    Label1.Text = Session["res"].ToString();

                }

                else if (total == "Button12")
                {
                    Session["res"] = Convert.ToInt32(Session["res"].ToString()) + Convert.ToInt32(Session["inval"].ToString());
                    Label1.Text = Session["res"].ToString();

                }


                break;

            default:
                if (Session["inval"]==null||(Convert.ToInt64(Session["inval"].ToString()) == 0))
                    Session["inval"] = bt.Text;
                else
                    Session["inval"] = Session["inval"].ToString()+bt.Text;

                Label1.Text = Session["inval"].ToString();
                break;
        }


        
    }



    protected void Button16_Click(object sender, EventArgs e)
    {

    }
}