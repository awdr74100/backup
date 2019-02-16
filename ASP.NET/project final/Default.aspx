<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>開始點餐</title>
    <link rel="stylesheet" href="styles/bootstrap.min.css"/>
    <link rel="stylesheet" href="page1.css" />
    
</head>
<body style="background-color:#f9f0d9">
    <form id="form1" runat="server">      
    <div >
        <table style="margin:0 auto;" >
            <tr> 
                <td style="width:300px;padding:20px;">
                    <div class="t1">
                        貼心提醒
                    </div >
                    <ul class="u1">
                        <li>網路訂餐無法提供全部餐點或禮品，亦無法使用優惠券，如有需要請至門市選購，敬請見諒。</li>
                        <li>請務必正確填寫訂購人姓名、聯絡電話，姓名或電話有誤無法聯絡確認訂單內容者，將不予接單，敬請見諒。</li>
                        <li>網路訂餐取餐時間最快為「完成訂餐後15分鐘」，若訂購餐點數量較多，取餐所需時間會較長。訂餐完成後，請列印訂購明細或熟記網路取餐號碼，以利快速付款取餐。</li>
                        <li>如有問題請撥打電話 449-2626 (手機直撥請加02)，由客服人員協助您。</li>
                    </ul>


                </td>
                <td style="width:500px;background-color:white;padding-left:30px;border:1px solid black ">
                    <div style="color:#07b860;">本服務提供時間為 AM 06:00 ~ PM 9:00，恕不提供分裝服務。</div>
                    <div>
                        <div class="font">
                        <b class="b">姓名</b><i class="i">*</i><br />
                        </div>
                        <div class="box">
                            <asp:TextBox ID="TextBox1" runat="server" BorderWidth="1px" Height="26px" Width="296px" CssClass="rad"></asp:TextBox>
                                <asp:RadioButton ID="RadioButton1" runat="server" Text="先生" Checked="True" GroupName="user1" />
                                <asp:RadioButton ID="RadioButton2" runat="server" Text="小姐" GroupName="user1" />
                       </div>
                    </div>
                    <div>
                        <div class="font">
                        <b >連絡電話</b><i class="i">*</i><br />
                        </div>
                        <div class="box">
                             <asp:TextBox ID="TextBox2" runat="server" BorderWidth="1px" Height="26px" Width="296px" CssClass="rad"></asp:TextBox>
                        </div>
                    </div>
                    <div>
                        <div class="font">
                        <b >用餐方式</b><asp:RadioButton ID="RadioButton3" runat="server" Checked="True" GroupName="user2" Text="外帶" /><asp:RadioButton ID="RadioButton4" runat="server" GroupName="user2" Text="內用" />
                        </div>
                    </div>
                    <div>
                        <div class="font">
                            <b >取貨門市</b><i class="i">*</i><br />
                        </div>
                        <div class="box">
                            <asp:DropDownList ID="DropDownList1" runat="server" Height="26px" Width="80px" AutoPostBack="True" DataSourceID="SqlDataSource1" DataTextField="name" DataValueField="Id"></asp:DropDownList><asp:DropDownList ID="DropDownList2" runat="server" Height="26px" Width="80px" AutoPostBack="True" DataSourceID="SqlDataSource2" DataTextField="name" DataValueField="Id"></asp:DropDownList><asp:DropDownList ID="DropDownList3" runat="server" Height="26px" Width="150px" AutoPostBack="True" DataSourceID="SqlDataSource3" DataTextField="name" DataValueField="Id"></asp:DropDownList>
                            <br />
                            <div class="address1">
                                <asp:DataList ID="DataList1" runat="server" DataSourceID="SqlDataSource4" OnItemCommand="DataList1_ItemCommand">
                                    <ItemTemplate>
                                        <asp:Label ID="Label1" runat="server" Text="地址：" CssClass="address"></asp:Label>
                                        
                                        <asp:Label ID="Label5" runat="server" Text='<%# Eval("address") %>'></asp:Label>
                                        <asp:Button ID="Button2" runat="server" Text="確認" CommandName="open" BackColor="#D12027" BorderStyle="Solid" ForeColor="White" />
                                    </ItemTemplate>
                                </asp:DataList>
                           
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="font">
                            <b >取貨時間</b><asp:RadioButton ID="RadioButton5" runat="server" Text="系統預定" Checked="True" />
                            <asp:Label ID="Label2" runat="server" Text="" CssClass="time"></asp:Label>
                            <asp:Label ID="Label3" runat="server" Text="" ForeColor="Red"></asp:Label>
                            <br />
                        </div>
                    </div>
                    <div>
                        <asp:Button ID="Button1" runat="server" Text="開始訂餐" Height="49px" Width="387px" BackColor="#D12027" BorderStyle="None" Font-Bold="False" Font-Size="16px" ForeColor="White" CssClass="btn" OnClick="Button1_Click"  />
                    </div>
                </td>
            </tr>
            
          </table>
      </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [city]"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [district] WHERE ([cityid] = @cityid)">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList1" Name="cityid" PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [store] WHERE ([districtid] = @districtid)">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList2" Name="districtid" PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [store] WHERE (([cityid] = @cityid) AND ([districtid] = @districtid) AND ([Id] = @Id))">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList1" Name="cityid" PropertyName="SelectedValue" Type="Int32" />
                <asp:ControlParameter ControlID="DropDownList2" Name="districtid" PropertyName="SelectedValue" Type="Int32" />
                <asp:ControlParameter ControlID="DropDownList3" Name="Id" PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <br />
    </form>
</body>
</html>
