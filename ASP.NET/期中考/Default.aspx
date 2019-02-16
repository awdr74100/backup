<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 400px;
            height: 247px;
        }
        </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="container">
    
        <table class="auto-style1">
            <tr>
                <td>姓&nbsp;&nbsp; 名:<br />
&nbsp;<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    <asp:RadioButton ID="RadioButton1" runat="server" GroupName="CUS" Text="先生" />
                    <asp:RadioButton ID="RadioButton2" runat="server" GroupName="CUS" Text="小姐" />
                </td>
            </tr>
            <tr>
                <td>聯絡電話<br />
                    <asp:TextBox ID="TextBox2" runat="server" MaxLength="4" Width="70px"></asp:TextBox>
&nbsp;-
                    &nbsp;<asp:TextBox ID="TextBox3" runat="server" MaxLength="8" Width="100px"></asp:TextBox>
                    分機:<asp:TextBox ID="TextBox4" runat="server" MaxLength="5" Width="70px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>用餐方式:
                    <asp:RadioButtonList ID="RadioButtonList1" runat="server" RepeatDirection="Horizontal" RepeatLayout="Flow">
                        <asp:ListItem Selected="True" Value="0">外帶</asp:ListItem>
                        <asp:ListItem Value="1">內用</asp:ListItem>
                    </asp:RadioButtonList>
                    </td>
            </tr>
            <tr>
                <td>取貨時間:&nbsp;<asp:Label ID="Label1" runat="server"></asp:Label>

                    <asp:Label ID="Label2" runat="server" ForeColor="Red"></asp:Label></td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="Button1" runat="server" BackColor="Red" ForeColor="White" Height="40px" Text="開始訂餐" Width="100%" OnClick="Button1_Click" />
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
