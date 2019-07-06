<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default3.aspx.cs" Inherits="Default3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>結帳頁面</title>
    <link rel="stylesheet" href="page2.css" />
</head>
<body style="background-color:#f9f0d9">
    <form id="form1" runat="server">      
    <div >
        <table style="margin:0 auto;" >
            <tr> 
                <td style="width:300px;padding:20px;">
                   

                </td>
                <td style="width:500px;background-color:white;padding-left:30px;border:1px solid black " >
                    <div class="news1">
                        <p>
                            <b >使用者資訊</b>
                        </p>
                    </div>
                    <div>
                        <p class="news2"><i>姓名：</i></p>
                        <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
                        <p class="news2"><i>連絡電話：</i></p>
                        <asp:Label ID="Label10" runat="server" Text=""></asp:Label>
                        <p class="news2"><i>用餐方式：</i></p>
                        <asp:Label ID="Label11" runat="server" Text=""></asp:Label>
                    </div>
                    <div class="news1">
                        <p>
                            <b >我的訂單</b>
                        </p>
                    </div>
                    <div>
                        <p class="news2"><i>取貨門市：</i></p>
                        <asp:Label ID="Label2" runat="server" Text=""></asp:Label>
                        <p class="news2"><i>預定取貨時間：</i></p>
                        <asp:Label ID="Label3" runat="server" Text=""></asp:Label>
                    </div>
                    <div class="news3">
                        <p>訂單明細</p>
                    </div>
                    <div>
                        <asp:DataList ID="DataList1" runat="server" DataKeyField="id" OnItemCommand="DataList1_ItemCommand1">
                            <ItemTemplate>
                                
                                　<asp:Label ID="Label4" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                                　<asp:Label ID="Label5" runat="server" Text="$"></asp:Label>
                                <asp:Label ID="Label6" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                                <asp:Label ID="Label7" runat="server" Text="*"></asp:Label>
                                <asp:Label ID="Label8" runat="server" Text='<%# Eval("qty") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:DataList>
                    </div>
                    <hr />
                    <div>
                        <p class="total">總計　　　　  　　   NT$<asp:Label ID="Label9" runat="server" Text="0"></asp:Label>元
                        </p>　　　　　
                    </div>
                    <div>
                        <asp:Button ID="Button4" runat="server" Text="送出" BackColor="#D12027" CssClass="Checkout" ForeColor="White" Height="47px" Width="300px" OnClick="Button4_Click" />
                    </div>

                </td>
            </tr>
            
          </table>
      </div>
        
    </form>
</body>
</html>
