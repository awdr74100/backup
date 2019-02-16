<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:RadioButton ID="RadioButton1" runat="server" AutoPostBack="True" GroupName="food" OnCheckedChanged="RadioButton1_CheckedChanged" Text="三明治" />
&nbsp;
        <asp:RadioButton ID="RadioButton2" runat="server" AutoPostBack="True" GroupName="food" OnCheckedChanged="RadioButton1_CheckedChanged" Text="漢堡" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton3" runat="server" AutoPostBack="True" GroupName="drink" OnCheckedChanged="RadioButton1_CheckedChanged" Text="豆漿" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:RadioButton ID="RadioButton4" runat="server" AutoPostBack="True" GroupName="drink" OnCheckedChanged="RadioButton1_CheckedChanged" Text="奶茶" />
        <br />
        <br />
        <asp:RadioButton ID="RadioButton5" runat="server" AutoPostBack="True" OnCheckedChanged="RadioButton1_CheckedChanged" Text="加珍珠" />
        <br />
        <br />
        數量：<asp:TextBox ID="TextBox1" runat="server" AutoPostBack="True" Text="1" OnTextChanged="TextBox1_TextChanged"></asp:TextBox>
        <br />
        <br />
        總金額：<asp:Label ID="Label1" runat="server"></asp:Label>
        <br />
        <br />
    
    </div>
    </form>
</body>
</html>
