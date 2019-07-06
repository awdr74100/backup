<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="styles/bootstrap.min.css"/>
    <style>
        .a{
            margin-top:20px;
        }
        .b{
            margin-top:10px;
        }
        .c{
            color:red;
        }
        .d{
            margin-top:30px;
        }
        .e{
            color:grey;
        }
        .bor{
            border-radius:2px;
        }
        .but{
            border-radius:5px;
            font-size:17px;
        }
        .link{
            text-decoration:none;
            background-color:aliceblue;
        }
    </style>
</head>
<body style="background-color:#f9f0d9">
    <form id="form1" runat="server">      
    <div >
        <table style="margin:0 auto;border:solid 1px #f00;  " >
            <tr> 
                <td style="width:300px;padding:20px;background-color:white" >
                    <div >
                        您註冊了嗎?<br />
                        <i class="e">如果您是我們的會員，請登入.</i>
                    </div>
                    <div class="a">
                        電子信箱&nbsp; <i class="c">*</i><br />
                        <div class="b" >
                        <asp:TextBox ID="TextBox1" runat="server" Height="41px" Width="355px" BorderWidth="1px" CssClass="bor" ></asp:TextBox>
                        </div>
                        <div class="a">
                            密碼&nbsp; <i class="c">*</i><br />
                            <div class="b">
                                <asp:TextBox ID="TextBox2" runat="server" Height="41px" Width="355px" BorderWidth="1px" CssClass="bor" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="d">
                            <asp:Button ID="Button1" runat="server" Text="登入" Height="46px" Width="359px" CssClass="but" BackColor="#D12027" BorderStyle="None" ForeColor="White" />
                        </div>
                        <div class="a">
                            <asp:LinkButton ID="LinkButton1" runat="server" CssClass="link" ForeColor="#339966" BackColor="White">註冊帳號</asp:LinkButton>
                        </div>
                    </div>
                </td>
                
                <td style="width:500px">
                    <h1>
                        515151
                    </h1>

                </td>
            </tr>
            
        </table>
    </div>
    </form>
</body>
</html>
