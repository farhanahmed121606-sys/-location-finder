function searchLocation() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (!input) {
        result.innerHTML = `
            <h2>⚠️ লিখুন</h2>
            <p>অনুগ্রহ করে একটি এলাকার নাম লিখুন।</p>
        `;
        return;
    }

    const found = locations.find(item =>
        item.area.toLowerCase().includes(input)
    );

    if (found) {
        result.innerHTML = `
            <h2>✅ Search Result</h2>
            <p><strong>Area:</strong> ${found.area}</p>
            <p><strong>Thana:</strong> ${found.thana}</p>
            <p><strong>District:</strong> ${found.district}</p>
            <p><strong>Division:</strong> ${found.division}</p>
        `;
    } else {
        result.innerHTML = `
            <h2>❌ Location Not Found</h2>
            <p>"${input}" নামে কোনো এলাকা পাওয়া যায়নি।</p>
        `;
    }
}
