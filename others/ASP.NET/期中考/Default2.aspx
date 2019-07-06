<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="css/bootstrap.min.css"
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <h1>3個數字的運算</h1>
        <p>第一個數字:<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </p>
        <p>第二個數字:<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        </p>
        <p>第三個數字:<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:CheckBoxList ID="CheckBoxList1" runat="server" RepeatDirection="Horizontal" OnSelectedIndexChanged="CheckBoxList1_SelectedIndexChanged">
                <asp:ListItem Value="0">三數相加</asp:ListItem>
                <asp:ListItem Value="1">三數相減</asp:ListItem>
                <asp:ListItem Value="2">三數相乘</asp:ListItem>
                <asp:ListItem Value="3">三數相除</asp:ListItem>
            </asp:CheckBoxList>
        </p>
        <p>
            <asp:Button ID="Button1" runat="server" Text="送出" OnClick="Button1_Click" />
&nbsp;
            <asp:Button ID="Button2" runat="server" Text="重新設定" OnClick="Button2_Click" />
        </p>
        <p>
            <asp:Label ID="Label1" runat="server"></asp:Label>
        </p><br />
        <br />
    
    </div>
    </form>
</body>
</html>
