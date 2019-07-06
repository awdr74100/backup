<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 1000px;
        }
        .auto-style2 {
            width: 180px;
        }
        .div1 {
            height:40px;
            background-color:#f00;
            color:#fff;
            font-size:14pt;
            text-align:center;
            border-radius:10px 10px 0 0;
            vertical-align:middle;
        }
        .div2 {
            height:40px;
            background-color:chocolate;
            width:100%;
            padding:5px;
        }
        .div3 {
            height:40px;
            background-color:#fff;
            width:100%;
            vertical-align:middle;
            font-size:14pt;
        }
        .td1 {
            height:30px;
            font-size:12pt;
            color:#404040;
            border-bottom:dotted 1px #808080;
            width:180px;
        }
        .td2 {
            vertical-align:top;
        }
        a {
            color: #404040;
            text-decoration: none;
        }

    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="auto-style1">
            <tr>
                <td class="auto-style2">
                    <div class="div1">美味專區</div>
                    <div>
                        <table style="margin-left:5px;margin-right:5px;">
                            <tr>
                                <td class="td1">
                                    <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">主餐</asp:LinkButton>
                                </td>
                            </tr>
                            <tr>
                                <td class="td1">
                                    <asp:LinkButton ID="LinkButton2" runat="server" OnClick="LinkButton2_Click">副餐</asp:LinkButton>
                                </td>
                            </tr>
                            <tr>
                                <td class="td1">
                                    <asp:LinkButton ID="LinkButton3" runat="server" OnClick="LinkButton3_Click">飲料</asp:LinkButton>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
                <td class="td2">
                    <asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0">
                        <asp:View ID="View1" runat="server">
                            <asp:Panel ID="Panel1" runat="server">
                                <div class="div2"><div class="div3">主餐<br />
                                     <div>
                                         <asp:DataList ID="DataList4" runat="server" DataSourceID="SqlDataSource1" RepeatDirection="Horizontal" Width="16px">
                                             <ItemTemplate>
                                                 <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl='<%# String.Concat("~/images/",Eval("photo")) %>' CommandArgument='<%# Eval("id") %>' OnClick ="ImageButton1_Click" />
                                                 <br />
                                                 <asp:Label ID="Label3" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                                                 <br />
                                                 <asp:Label ID="Label4" runat="server" Text='<%# Eval("price") %>'></asp:Label>
                                             </ItemTemplate>
                                         </asp:DataList>
                                     </div>
                                    
                                    </div></div>
                            </asp:Panel>
                        </asp:View>
                         <asp:View ID="View2" runat="server">
                            <asp:Panel ID="Panel2" runat="server">
                                <div class="div2"><div class="div3">副餐<br /> </div></div>
                            </asp:Panel>
                        </asp:View>
                         <asp:View ID="View3" runat="server">
                            <asp:Panel ID="Panel3" runat="server">
                                <div class="div2"><div class="div3">飲料<br /> </div></div>
                            </asp:Panel>
                        </asp:View>
                    </asp:MultiView>
                </td>
            </tr>
        </table>
    
    </div>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [meals] WHERE ([typeid] = @typeid)">
                                        <SelectParameters>
                                            <asp:Parameter DefaultValue="1" Name="typeid" Type="Int32" />
                                        </SelectParameters>
                                    </asp:SqlDataSource>
        <br />
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [meals] WHERE ([typeid] = @typeid)">
            <SelectParameters>
                <asp:Parameter DefaultValue="2" Name="typeid" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <br />
        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [meals] WHERE ([typeid] = @typeid)">
            <SelectParameters>
                <asp:Parameter DefaultValue="3" Name="typeid" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <br />
        <br />
    </form>
</body>
</html>
