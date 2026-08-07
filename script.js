function searchLocation() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "<p>অনুগ্রহ করে একটি এলাকার নাম লিখুন।</p>";
        return;
    }

    const found = locations.find(function(item) {
        return item.area.toLowerCase() === input;
    });

    if (found) {
        result.innerHTML = `
            <h2>✅ Search Result</h2>
            <p><strong>Area:</strong> ${found.area}</p>
            <p><strong>Thana:</strong> ${found.thana}</p>
            <p><strong>District:</strong> ${found.district}</p>
            <p><strong>Division:</strong> ${found.division}</p>
        `;
    } else {
        result.innerHTML = "<h2>❌ Location not found</h2>";
    }
}
