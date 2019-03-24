$(function () {

    //人員資料
    var people = [{
            name: "藍奕濡",
            rate: 68
        },
        {
            name: "張家齊",
            rate: 40
        },
        {
            name: '洪益全',
            rate: 90
        }
    ]
    //--------------------------------------------------------------


    //條件判斷
    var results = [];
    people.forEach(function (person) {
        if (person.rate >= 60 && person.rate <= 89) {
            results.push(person);
        }
    });
    console.log(results);
    //--------------------------------------------------------------

    //符合條件的人加入HTML表格中
    var $tableBody = $('<tbody></tbody>'); // New table body
    for (var i = 0; i < results.length; i++) { // Loop through matches
        var person = results[i]; // Store current person
        var $row = $('<tr></tr>'); // Create a row for them
        $row.append($('<td></td>').text(person.name)); // Add their name
        $row.append($('<td></td>').text(person.rate)); // Add their rate
        $tableBody.append($row); // Add row to new content
    }

    $('thead').after($tableBody);
    //--------------------------------------------------------------
});