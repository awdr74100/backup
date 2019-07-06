<%@ Page Language="C#" AutoEventWireup="true" CodeFile="aaa.aspx.cs" Inherits="aaa" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>

        






        <asp:Button ID="Button1" runat="server" Text="早餐" Height="58px" Width="111px" OnClick="Button1_Click" /><asp:Button ID="Button2" runat="server" Text="晚餐" Height="57px" Width="134px" OnClick="Button2_Click" />

        <asp:MultiView ID="MultiView1" runat="server">
            <asp:View ID="View1" runat="server">
                <div>
                <asp:DataList ID="DataList1" runat="server" RepeatDirection="Horizontal" DataSourceID="SqlDataSource1">
                    <ItemTemplate>
                        <asp:Image ID="Image1" runat="server"  ImageUrl='<%# String.Concat("~/images/",Eval("img")) %>' />
                        <br />
                        <asp:Label ID="Label1" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                        <br />
                        <br />
                        數量<asp:DropDownList ID="qty" runat="server">
                            <asp:ListItem>1</asp:ListItem>
                            <asp:ListItem>2</asp:ListItem>
                            <asp:ListItem>3</asp:ListItem>
                            <asp:ListItem>4</asp:ListItem>
                            <asp:ListItem>5</asp:ListItem>
                            <asp:ListItem>6</asp:ListItem>
                            <asp:ListItem>7</asp:ListItem>
                            <asp:ListItem></asp:ListItem>
                        </asp:DropDownList>
                        <asp:Button ID="Button3" runat="server" Text="Button" />
                        <br />
                        <asp:Label ID="Label2" runat="server" Text='<%# Eval("pname") %>'></asp:Label>
                        <br />
                        <asp:HiddenField ID="HiddenField1" runat="server" Value='<%# Eval("Id") %>' />
                        <br />
                        <asp:HiddenField ID="HiddenField2" runat="server" Value='<%# Eval("price") %>' />
                    </ItemTemplate>
                </asp:DataList>
                    <br />
                    <asp:DataList ID="DataList2" runat="server">
                        <ItemTemplate>
                            <asp:Label ID="panem" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                            <asp:Label ID="Label4" runat="server" Text='<%# Eval("qty") %>'></asp:Label>
                            <asp:Label ID="Label5" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                            <asp:Label ID="Label6" runat="server" Text='<%# Eval("total") %>'></asp:Label>
                            <asp:Button ID="Button4" runat="server" Text="Button" />
                            <br />
                            <br />
                            <asp:HiddenField ID="HiddenField3" runat="server" Value='<%# Eval("id") %>' />
                        </ItemTemplate>
                    </asp:DataList>
                    </div>
            </asp:View>
             <asp:View ID="View2" runat="server">

            </asp:View>
        </asp:MultiView>

    </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT [Id], [pname], [price], [img] FROM [productdetail]"></asp:SqlDataSource>
    </form>
</body>
</html>
