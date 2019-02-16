<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style>
        .style1 {
            margin:0 auto;
        }
        .style2 {
            text-align:center;
            width:200px;
            border:solid 1px #d4d2d2;
            margin:5px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="style1">
        <asp:DataList ID="DataList1" runat="server" DataKeyField="Id" DataSourceID="SqlDataSource1" RepeatDirection="Horizontal" OnItemCommand="DataList1_ItemCommand" OnDataBinding="DataList1_DataBinding" RepeatColumns="3">
            <ItemTemplate>
                <div class="style2">
                <asp:Image ID="Image1" runat="server" ImageUrl='<%# String.Concat("~/images/",Eval("img")) %>' ForeColor="Red" />
                    <br />
                <asp:Label ID="priceLabel" runat="server" Text='<%# Eval("price") %>' ForeColor="Red" />
                <br />
                數量
                <asp:DropDownList ID="qty" runat="server">
                     <asp:ListItem>1</asp:ListItem>
                     <asp:ListItem>2</asp:ListItem>
                     <asp:ListItem>3</asp:ListItem>
                     <asp:ListItem>4</asp:ListItem>
                     <asp:ListItem>5</asp:ListItem>
                     <asp:ListItem>6</asp:ListItem>
                     <asp:ListItem>7</asp:ListItem>
                     <asp:ListItem></asp:ListItem>
        </asp:DropDownList>
                    <asp:Button ID="Button1" runat="server" Text="Button" BackColor="Red" ForeColor="White" />
                <br />
                <asp:Label ID="pnameLabel" runat="server" Text='<%# Eval("pname") %>' />
                <br />
                    <asp:HiddenField ID="HiddenField1" runat="server"  Value='<%# Eval("Id") %>'/>
                    <asp:HiddenField ID="HiddenField2" runat="server" Value='<%# Eval("price") %>'/>
                
                <br />
                
                
                        <br />
                    </div>
            </ItemTemplate>
        </asp:DataList>


        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT [Id], [pname], [price], [img] FROM [productdetail]"></asp:SqlDataSource>


        <br />
        <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
        <br />
        <br />
        <br />
        <asp:DataList ID="DataList2" runat="server" OnSelectedIndexChanged="DataList2_SelectedIndexChanged">
            <ItemTemplate>
                
                <asp:Label ID="pname" runat="server" Text='<%# Eval("name") %>' ForeColor="#CC0000"></asp:Label>
                <asp:Label ID="Label1" runat="server" Text='<%# Eval("qty") %>' ForeColor="#CC0000"></asp:Label>
                <asp:Label ID="Label2" runat="server" Text='<%# Eval("price") %>' ForeColor="#CC0000"></asp:Label>
                <asp:Label ID="Label3" runat="server" Text='<%# Eval("total") %>' ForeColor="#CC0000"></asp:Label>
                &nbsp;
                <asp:Button ID="Button4" runat="server" OnClick="Button4_Click" Text="Button"  />
                <asp:HiddenField ID="HiddenField3" runat="server" Value='<%# Eval("id") %>' />
            </ItemTemplate>
            
        </asp:DataList>
        <br />
        <br />
        <br />


        <asp:Button ID="Button2" runat="server" Text="早餐" Height="40px" OnClick="Button2_Click" style="margin-top: 0px" Width="123px" /><asp:Button ID="Button3" runat="server" Text="優惠" Height="39px" OnClick="Button3_Click" Width="121px" />
        <asp:MultiView ID="MultiView1" runat="server">
            <asp:View ID="View1" runat="server">
                A
            </asp:View>
            <asp:View ID="View2" runat="server">
                B
            </asp:View>
            <asp:View ID="View3" runat="server">
                C
            </asp:View>
        </asp:MultiView>
    
        
    
    </div>
    </form>
</body>
</html>
