<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        body{
            font-size:1.2em;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>旅遊住宿費用試算</h1>
        <p>
            旅客姓名：(必填)
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </p>
        <p>
            電子郵件：(必填)
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        </p>
        <p>
            飯店名稱：
            <asp:DropDownList ID="DropDownList1" runat="server" Height="58px" Width="146px" Font-Size =" 1.2em">
                <asp:ListItem Value="0">國賓大飯店</asp:ListItem>
                <asp:ListItem Value="1">中信大飯店</asp:ListItem>
                <asp:ListItem Value="2">漢來大飯店</asp:ListItem>
            </asp:DropDownList>
        </p>
        <p>
            房型：
            <asp:RadioButtonList ID="RadioButtonList1" runat="server" RepeatDirection="Horizontal">
                <asp:ListItem Value="0" Selected="True">單人房</asp:ListItem>
                <asp:ListItem Value="1">雙人房</asp:ListItem>
            </asp:RadioButtonList>
        </p>
        <p>
            入住天數：
            <asp:CheckBoxList ID="CheckBoxList1" runat="server" RepeatColumns="4" RepeatDirection="Horizontal" RepeatLayout="Flow">
                <asp:ListItem Value="7">星期天</asp:ListItem>
                <asp:ListItem Value="1">星期一</asp:ListItem>
                <asp:ListItem Value="2">星期二</asp:ListItem>
                <asp:ListItem Value="3">星期三</asp:ListItem>
                <asp:ListItem Value="4">星期四</asp:ListItem>
                <asp:ListItem Value="5">星期五</asp:ListItem>
                <asp:ListItem Value="6">星期六</asp:ListItem>
            </asp:CheckBoxList>
        </p>

        <asp:Button ID="Button1" runat="server" Text="試算" Font-Size="1.2em" Height="50px" OnClick="Button1_Click" Width="85px" />
    &nbsp;&nbsp;
        <asp:Button ID="Button2" runat="server" Text="重新設定" Font-Size="1.2em" Height="50px" OnClick="Button2_Click" Width="126px" />
        <br />
        <br />
        <asp:Label ID="Label1" runat="server"></asp:Label>
    </div>
    </form>
</body>
</html>
