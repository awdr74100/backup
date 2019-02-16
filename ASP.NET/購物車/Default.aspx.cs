using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        

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

    protected void Button2_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex = 0;
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        MultiView1.ActiveViewIndex = 1;
    }

    protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
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

        DataList2.DataSource = cart;
        DataList2.DataBind();

        Session["cart"] = cart;

        Label1.Text = cart.Compute("sum(total)", "").ToString();


    }

    protected void DataList2_DataBinding(object sender, EventArgs e)
    {

    }

    protected void DataList1_DataBinding(object sender, EventArgs e)
    {

    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        DataTable dt = (DataTable)ViewState["CurrentData"];
        List<DataRow> rowsToDelete = new List<DataRow>();
        foreach (DataRow row in dt.Rows)
        {
            //Your Check condition and adding the rows to delete list
            if (row["First Name"] == "Joe")
            {
                rowsToDelete.Add(row);
            }
        }
        //Deleting the rows 
        foreach (DataRow row in rowsToDelete)
        {
            dt.Rows.Remove(row);
        }
        dt.AcceptChanges();



    }
    protected void DataList2_SelectedIndexChanged(object sender, EventArgs e)
    {
        
    }
}