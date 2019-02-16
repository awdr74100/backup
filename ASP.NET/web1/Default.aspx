<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
</head>
<body style="background-color:#000;">
    <form id="form1" runat="server">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-7">
                    <asp:Label ID="Label1" runat="server" Text="0" Width="100%" ForeColor="White" CssClass="text-right" Font-Size="100pt"></asp:Label>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-2">
                    <asp:Button ID="Button1" runat="server" Text="7" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button2" runat="server" Text="8" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button3" runat="server" Text="9" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button4" runat="server" Text="X" BackColor="#F09A37" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
            </div>
            <div class="row justify-content-center" style="margin-top:20px;">
                <div class="col-2">
                    <asp:Button ID="Button5" runat="server" Text="4" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button6" runat="server" Text="5" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button7" runat="server" Text="6" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button8" runat="server" Text="－" BackColor="#F09A37" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
            </div>
            <div class="row justify-content-center" style="margin-top:20px;">
                <div class="col-2">
                    <asp:Button ID="Button9" runat="server" Text="1" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button10" runat="server" Text="2" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button11" runat="server" Text="3" BackColor="#333333" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button12" runat="server" Text="+" BackColor="#F09A37" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click" />
                </div>
            </div>
            <div class="row justify-content-center" style="margin-top:20px;">
                <div class="col-4">
                    <asp:Button ID="Button13" runat="server" Text="0" BackColor="#333333" ForeColor="White" Height="140" Width="100%" CssClass="border-0 text-left" style="border-radius:70px;padding-left:60px;" Font-Size="50pt" OnClick="Button1_Click" />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button15" runat="server" Text="AC" BackColor="#A5A5A5" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click"  />
                </div>
                <div class="col-2">
                    <asp:Button ID="Button16" runat="server" Text="=" BackColor="#F09A37" ForeColor="White" Height="140" Width="140" CssClass="border-0 rounded-circle" Font-Size="40pt" OnClick="Button1_Click"   />
                </div>
            </div>
        </div>
    </form>
</body>
</html>
