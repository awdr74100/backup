<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:RadioButton ID="RadioButton1" runat="server" AutoPostBack="True" GroupName="meal" OnCheckedChanged="RadioButton1_CheckedChanged" Text="三明治" />
        <asp:RadioButton ID="RadioButton2" runat="server" AutoPostBack="True" GroupName="meal" OnCheckedChanged="RadioButton2_CheckedChanged" Text="漢堡" />
        <br />
        <br />
        數量: <asp:TextBox ID="TextBox1" runat="server" AutoPostBack="True" OnTextChanged="TextBox1_TextChanged">0</asp:TextBox>
        <br />
        <br />
        總價: <asp:Label ID="Label1" runat="server" Text="0"></asp:Label>
    
    </div>
    </form>
</body>
</html>
