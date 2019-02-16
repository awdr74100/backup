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
        string a = Convert.ToString(Session["IndexKey"]);
        Label1.Text = a;
        string q = "摩斯火雞堡";
        string qq = "90";
        string w = "辛味章魚堡";
        string ww = "90";
        string r = "柚香大阪燒珍珠堡";
        string rr = "90";
        string t = "元氣和牛珍珠堡";
        string tt = "105";
        string y = "元氣和牛珍珠堡(米升級)";
        string yy = "110";
        string u = "海洋珍珠堡";
        string uu = "75";
        string i = "海洋珍珠堡(米升級)";
        string ii = "80";
        string o = "燒肉珍珠堡(牛)";
        string oo = "70";
        string p = "米升級燒肉珍珠堡(牛)";
        string pp = "75";
        string s = "薑燒珍珠堡(豬)";
        string ss = "65";
        string d = "米升級薑燒珍珠堡(豬)";
        string dd = "70";
        string f = "杏鮑菇珍珠堡";
        string ff = "70";
        string g = "杏鮑菇珍珠堡(米升級)";
        string gg = "75";
        string h = "厚切培根和牛堡";
        string hh = "100";
        string j = "摘鮮綠黃金炸蝦堡";
        string jj = "70";
        switch (a)
        {
            case "1":
                Label1.Text = q;

                Label2.Text = qq;
                break;
            case "2":
                Label1.Text = w;

                Label2.Text = ww;
                break;
            case "3":
                Label1.Text = r;

                Label2.Text = rr;
                break;
            case "4":
                Label1.Text = t;

                Label2.Text = tt;
                break;
            case "5":
                Label1.Text = y;

                Label2.Text = yy;
                break;
            case "6":
                Label1.Text = u;

                Label2.Text = uu;
                break;
            case "7":
                Label1.Text = i;

                Label2.Text = ii;
                break;
            case "8":
                Label1.Text = o;

                Label2.Text = oo;
                break;
            case "9":
                Label1.Text = p;

                Label2.Text = pp;
                break;
            case "10":
                Label1.Text = s;

                Label2.Text = ss;
                break;
            case "11":
                Label1.Text = d;

                Label2.Text = dd;
                break;
            case "12":
                Label1.Text = f;

                Label2.Text = ff;
                break;
            case "13":
                Label1.Text = g;

                Label2.Text = gg;
                break;
            case "14":
                Label1.Text = h;

                Label2.Text = hh;
                break;
            case "15":
                Label1.Text = j;

                Label2.Text = jj;
                break;

        }
    }
}