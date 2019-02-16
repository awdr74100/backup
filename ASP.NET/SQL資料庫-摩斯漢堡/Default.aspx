<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <p>取貨門市
            <br />
            <br />
            <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource1" DataTextField="cityname" DataValueField="Id"></asp:DropDownList>
            <asp:DropDownList ID="DropDownList2" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource2" DataTextField="area" DataValueField="Id">
            </asp:DropDownList>
            <asp:DropDownList ID="DropDownList3" runat="server" AutoPostBack="True" DataSourceID="SqlDataSource3" DataTextField="name" DataValueField="Id">
            </asp:DropDownList>
        </p>
        <p>&nbsp;</p>
        <p>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT [cityname], [Id] FROM [city]"></asp:SqlDataSource>
            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT DISTINCT [area], [cityid], [Id] FROM [branch] WHERE ([cityid] = @cityid)">
                <SelectParameters>
                    <asp:ControlParameter ControlID="DropDownList1" Name="cityid" PropertyName="SelectedValue" Type="Int32" />
                </SelectParameters>
            </asp:SqlDataSource>
            <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:mos %>" SelectCommand="SELECT DISTINCT [Id], [name] FROM [branch] WHERE ([Id] = @Id)">
                <SelectParameters>
                    <asp:ControlParameter ControlID="DropDownList2" Name="Id" PropertyName="SelectedValue" Type="Int32" />
                </SelectParameters>
            </asp:SqlDataSource>
        </p>
        <p>&nbsp;</p>
    </div>
    </form>
</body>
</html>
