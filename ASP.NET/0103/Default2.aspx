<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <p>
            名稱：<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </p>
        <p>
            帳號：<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        </p>
        <p>
            密碼：<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
        </p>
        <asp:Button ID="Button1" runat="server" Text="註冊帳號" OnClick="Button1_Click" />

        　<br />
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" DeleteCommand="DELETE FROM [account] WHERE [Id] = @Id" InsertCommand="INSERT INTO [account] ([Id], [name], [account], [password]) VALUES (@Id, @name, @account, @password)" SelectCommand="SELECT * FROM [account]" UpdateCommand="UPDATE [account] SET [name] = @name, [account] = @account, [password] = @password WHERE [Id] = @Id">
            <DeleteParameters>
                <asp:Parameter Name="Id" Type="Int32" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="Id" Type="Int32" />
                <asp:Parameter Name="name" Type="String" />
                <asp:Parameter Name="account" Type="String" />
                <asp:Parameter Name="password" Type="String" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="name" Type="String" />
                <asp:Parameter Name="account" Type="String" />
                <asp:Parameter Name="password" Type="String" />
                <asp:Parameter Name="Id" Type="Int32" />
            </UpdateParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [account]"></asp:SqlDataSource>
        <br />
        <br />
        <p>刪除帳號：<asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource2" DataTextField="name" DataValueField="Id">
            </asp:DropDownList>
        </p>
        <p>&nbsp;</p>
        <p>
            <asp:Button ID="Button2" runat="server" Text="刪除帳號" OnClick="Button2_Click" />
        </p>
        <p>
            &nbsp;</p>
        <p>
            <asp:Button ID="Button3" runat="server" Text="登入頁面" OnClick="Button3_Click" />
        </p>
    </div>
    </form>
</body>
</html>
