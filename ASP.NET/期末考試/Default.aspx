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
    
        縣市:
        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource1" DataTextField="name" DataValueField="Id">
        </asp:DropDownList>
&nbsp; 區:<asp:DropDownList ID="DropDownList2" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource2" DataTextField="name" DataValueField="Id">
        </asp:DropDownList>
        <br />
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [city]"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [district] WHERE ([cityid] = @cityid)">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList1" Name="cityid" PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [store] WHERE (([cityid] = @cityid) AND ([districtid] = @districtid))">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList1" Name="cityid" PropertyName="SelectedValue" Type="Int32" />
                <asp:ControlParameter ControlID="DropDownList2" Name="districtid" PropertyName="SelectedValue" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
        <br />
        <asp:DataList ID="DataList1" runat="server" DataSourceID="SqlDataSource3">
            <ItemTemplate>
                <p>
                    分店名稱：<asp:Label ID="Label3" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                </p>
                <p>
                    地址：<asp:Label ID="Label1" runat="server" Text='<%# Eval("address") %>'></asp:Label>
                </p>
                
                
            </ItemTemplate>
        </asp:DataList>
        <br />
        <br />
    
    </div>
    </form>
</body>
</html>
