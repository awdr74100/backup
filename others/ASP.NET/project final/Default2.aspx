<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>餐點選擇</title>
    
    <link rel="stylesheet" href="page2.css" />
</head>
<body style="background-color:#f9f0d9">
    <form id="form1" runat="server">
    <div>
        <table class="tablestyle1">
            <tr>
                <td class="tdstyle1">
                    <asp:Button ID="Button1" runat="server" Text="主餐" Height="52px" Width="110px" BorderStyle="None" BorderWidth="1px" CssClass="btn" Font-Size="18px" BackColor="#D12027" ForeColor="White" OnClick="Button1_Click" />
                    <asp:Button ID="Button2" runat="server" Text="點心" Height="52px" Width="110px" BorderStyle="None" CssClass="btn" BackColor="#D12027" Font-Size="18px" ForeColor="White" OnClick="Button2_Click" />
                    <div class="mult">
                        <asp:MultiView ID="MultiView1" runat="server">
                            <asp:View ID="View1" runat="server">
                                <asp:DataList ID="DataList2" runat="server" DataKeyField="Id" DataSourceID="SqlDataSource1" RepeatDirection="Horizontal"  RepeatColumns="3" OnItemCommand="DataList2_ItemCommand">
            <ItemTemplate>
                <div class="style2">
                <asp:Image ID="Image1" runat="server" ImageUrl='<%# String.Concat("~/photo/",Eval("photo")) %>' ForeColor="Red" />
                    <br />
                    <asp:Label ID="Label1" runat="server" Text="$" ForeColor="#b10e17"></asp:Label>
                <asp:Label ID="priceLabel" runat="server" Text='<%# Eval("price") %>' ForeColor="#b10e17" />
                <br />
                數量
                <asp:DropDownList ID="qty" runat="server" CssClass="qty" Height="21px" Width="34px">
                     <asp:ListItem>1</asp:ListItem>
                     <asp:ListItem>2</asp:ListItem>
                     <asp:ListItem>3</asp:ListItem>
                     <asp:ListItem>4</asp:ListItem>
                     <asp:ListItem>5</asp:ListItem>
                     <asp:ListItem>6</asp:ListItem>
                     <asp:ListItem>7</asp:ListItem>
                     <asp:ListItem></asp:ListItem>
        </asp:DropDownList>
                    <asp:Button ID="Button1" runat="server" Text="訂購" BackColor="#D12027" ForeColor="White" Height="29px" Width="56px" BorderStyle="None" CssClass="rad" />
                <br />
                    <div class="name">
                <asp:Label ID="pnameLabel" runat="server" Text='<%# Eval("name") %>'  />
                        </div>
                <br />
                    <asp:HiddenField ID="HiddenField1" runat="server"  Value='<%# Eval("Id") %>'/>
                    <asp:HiddenField ID="HiddenField2" runat="server" Value='<%# Eval("price") %>'/>
                
                           <br />
                        <br />
                    </div>
            </ItemTemplate>
        </asp:DataList>

                            </asp:View>
                            <asp:View ID="View2" runat="server">

                                <asp:DataList ID="DataList3" runat="server" DataKeyField="Id" DataSourceID="SqlDataSource2" RepeatDirection="Horizontal"  RepeatColumns="3" OnItemCommand="DataList3_ItemCommand">
            <ItemTemplate>
                <div class="style2">
                <asp:Image ID="Image1" runat="server" ImageUrl='<%# String.Concat("~/photo/",Eval("photo")) %>' ForeColor="Red" />
                    <br />
                    <asp:Label ID="Label1" runat="server" Text="$" ForeColor="#b10e17"></asp:Label>
                <asp:Label ID="priceLabel" runat="server" Text='<%# Eval("price") %>' ForeColor="#b10e17" />
                <br />
                數量
                <asp:DropDownList ID="qty" runat="server" CssClass="qty" Height="21px" Width="34px">
                     <asp:ListItem>1</asp:ListItem>
                     <asp:ListItem>2</asp:ListItem>
                     <asp:ListItem>3</asp:ListItem>
                     <asp:ListItem>4</asp:ListItem>
                     <asp:ListItem>5</asp:ListItem>
                     <asp:ListItem>6</asp:ListItem>
                     <asp:ListItem>7</asp:ListItem>
                     <asp:ListItem></asp:ListItem>
        </asp:DropDownList>
                    <asp:Button ID="Button1" runat="server" Text="訂購" BackColor="#D12027" ForeColor="White" Height="29px" Width="56px" BorderStyle="None" CssClass="rad" />
                <br />
                    <div class="name">
                <asp:Label ID="pnameLabel" runat="server" Text='<%# Eval("name") %>'  />
                        </div>
                <br />
                    <asp:HiddenField ID="HiddenField1" runat="server"  Value='<%# Eval("Id") %>'/>
                    <asp:HiddenField ID="HiddenField2" runat="server" Value='<%# Eval("price") %>'/>
                
                           <br />
                        <br />
                    </div>
            </ItemTemplate>
        </asp:DataList>

                            </asp:View>
                        </asp:MultiView>
                    </div>
                </td>
                
                <td>
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
                                <asp:Button ID="Button3" runat="server" Text="×" BorderStyle="None" />
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
                        <asp:Button ID="Button4" runat="server" Text="結帳" BackColor="#D12027" CssClass="Checkout" ForeColor="White" Height="47px" Width="300px" OnClick="Button4_Click" />
                    </div>


                </td>
            </tr>

        </table>
        
    </div>

        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [meals] WHERE ([typeid] = @typeid)">
            <SelectParameters>
                <asp:Parameter DefaultValue="1" Name="typeid" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT * FROM [meals] WHERE ([typeid] = @typeid)">
            <SelectParameters>
                <asp:Parameter DefaultValue="2" Name="typeid" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
    </form>
</body>
</html>
