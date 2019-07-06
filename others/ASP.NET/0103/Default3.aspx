<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default3.aspx.cs" Inherits="Default3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <p>
            帳號：<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </p>
        <p>
            密碼：<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        </p>
        <p>
            訊息：<asp:Label ID="Label1" runat="server" Text=""></asp:Label>
        </p>
        <p>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString2 %>" SelectCommand="SELECT * FROM [account] WHERE (([account] = @account) AND ([password] = @password))">
                <SelectParameters>
                    <asp:ControlParameter ControlID="TextBox1" Name="account" PropertyName="Text" Type="String" />
                    <asp:ControlParameter ControlID="TextBox2" Name="password" PropertyName="Text" Type="String" />
                </SelectParameters>
            </asp:SqlDataSource>
        </p>
        <p>
            <asp:Button ID="Button1" runat="server" Text="登入" OnClick="Button1_Click" />
        </p>
    </div>
    </form>
</body>
</html>
