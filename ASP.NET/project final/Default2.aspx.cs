using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
          if (Session["name"] == null)
        {
            Server.Transfer("Default.aspx");
        }
             

        MultiView1.ActiveViewIndex = 0;  //預設顯示

        Label2.Text = (string)Session["address"];
        Label3.Text = (string)Session["time"];
        


        if (Session["cart"] == null)
        {
            DataTable cart;
            cart = new DataTable();
            //定義資料表id欄位
            DataColumn column;

            column = new DataColumn();
            column.DataType = System.Type.GetType("System.Int32");
            column.ColumnName = "id";
            cart.Columns.Add(column);
            //定義資料表name欄位
            column = new DataColumn();
            column.DataType = System.Type.GetType("System.String");
            column.ColumnName = "name";
            cart.Columns.Add(column);
            //定義資料表數量欄位
            column = new DataColumn();
            column.DataType = System.Type.GetType("System.Int32");
            column.ColumnName = "qty";
            cart.Columns.Add(column);
            //定義資料表價格欄位
            column = new DataColumn();
            column.DataType = System.Type.GetType("System.Int32");
            column.ColumnName = "price";
            cart.Columns.Add(column);

            //定義資料表總價欄位
            column = new DataColumn();
            column.DataType = System.Type.GetType("System.Int32");
            column.ColumnName = "total";
            cart.Columns.Add(column);



            Session["cart"] = cart;



        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex = 0;
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex = 1;
    }

    protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
    {
        
    }

    protected void DataList2_ItemCommand(object source, DataListCommandEventArgs e)
    {
        DataTable cart = (DataTable)Session["cart"];

        int id = Convert.ToInt32(((HiddenField)e.Item.FindControl("HiddenField1")).Value);
        string name = ((Label)e.Item.FindControl("pnameLabel")).Text;
        int qty = Convert.ToInt32(((DropDownList)e.Item.FindControl("qty")).SelectedValue);
        int price = Convert.ToInt32(((HiddenField)e.Item.FindControl("HiddenField2")).Value);
        int total = qty * price;

        DataRow row;
        row = cart.NewRow();
        row["id"] = id;
        row["name"] = name;
        row["qty"] = qty;
        row["price"] = price;
        row["total"] = total;
        cart.Rows.Add(row);

        DataList1.DataSource = cart;
        DataList1.DataBind();

        Session["cart"] = cart;

        Label9.Text = cart.Compute("sum(total)", "").ToString();
    }

    protected void DataList1_ItemCommand1(object source, DataListCommandEventArgs e)
    {
        int a = e.Item.ItemIndex;

        int productID = Convert.ToInt32(DataList1.DataKeys[e.Item.ItemIndex]);
        DataTable cart = (DataTable)Session["cart"];
        cart.Rows[a].Delete();
        DataList1.DataSource = cart;
        DataList1.DataBind();

        Label9.Text = cart.Compute("sum(total)", "").ToString();

    }

    protected void DataList3_ItemCommand(object source, DataListCommandEventArgs e)
    {
        DataTable cart = (DataTable)Session["cart"];

        int id = Convert.ToInt32(((HiddenField)e.Item.FindControl("HiddenField1")).Value);
        string name = ((Label)e.Item.FindControl("pnameLabel")).Text;
        int qty = Convert.ToInt32(((DropDownList)e.Item.FindControl("qty")).SelectedValue);
        int price = Convert.ToInt32(((HiddenField)e.Item.FindControl("HiddenField2")).Value);
        int total = qty * price;

        DataRow row;
        row = cart.NewRow();
        row["id"] = id;
        row["name"] = name;
        row["qty"] = qty;
        row["price"] = price;
        row["total"] = total;
        cart.Rows.Add(row);

        DataList1.DataSource = cart;
        DataList1.DataBind();

        Session["cart"] = cart;

        Label9.Text = cart.Compute("sum(total)", "").ToString();
    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        if(Label9.Text == "0" || Label9.Text == "")
        {
            Response.Write("<script>alert('" + "你還沒點餐喔!" + "');</script>");
        }
        else
        {
            Server.Transfer("Default3.aspx");
        }
    }
}