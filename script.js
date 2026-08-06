function searchLocation() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    const found = locations.find(item =>
        item.area.toLowerCase() === input
    );

    if (found) {
        result.innerHTML = `
            <h3>Search Result</h3>
            <p><b>Area:</b> ${found.area}</p>
            <p><b>Thana:</b> ${found.thana}</p>
            <p><b>District:</b> ${found.district}</p>
            <p><b>Division:</b> ${found.division}</p>
        `;
    } else {
        result.innerHTML = "<h3>❌ Location not found.</h3>";
    }
}
