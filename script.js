document.getElementById('generateParts').addEventListener('click', function () {
    const budget = document.getElementById('budget').value;
    const usage = document.getElementById('usage').value;
    const preference = document.getElementById('preference').value;

    const userNo = Math.floor(Math.random() * 1000000);  // Random User No.

    let partsList = '';

    if (usage === 'gaming') {
        partsList = preference === 'amd' ? 'Ryzen 5 5600X, Radeon RX 6700 XT' : 'Intel i5-12400F, RTX 3060';
    } else if (usage === 'videoEditing') {
        partsList = preference === 'amd' ? 'Ryzen 9 5900X, Radeon RX 6800' : 'Intel i7-12700K, RTX 3070';
    } else if (usage === 'programming') {
        partsList = 'Intel i5-11600K, Integrated Graphics, 16GB RAM';
    } else {
        partsList = 'Ryzen 5 5600G, Integrated Graphics, 16GB RAM';
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>User No.:</strong> ${userNo}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <p><strong>Usage:</strong> ${usage}</p>
        <p><strong>Preference:</strong> ${preference}</p>
        <p><strong>Recommended Parts:</strong> ${partsList}</p>
    `;
});

document.getElementById('sendEmail').addEventListener('click', function () {
    const budget = document.getElementById('budget').value;
    const usage = document.getElementById('usage').value;
    const preference = document.getElementById('preference').value;

    const userNo = Math.floor(Math.random() * 1000000);  // Random User No.

    const subject = `PC Parts List for User No. ${userNo}`;
    const body = `
        User No.: ${userNo}%0D%0A
        Budget: $${budget}%0D%0A
        Usage: ${usage}%0D%0A
        Preference: ${preference}%0D%0A
        `;

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
});