let locations = [];

// JSON থেকে ডেটা লোড
fetch("locations.json")
  .then(response => response.json())
  .then(data => {
    locations = data;
  })
  .catch(error => {
    console.error("Data Load Error:", error);
  });

function searchLocation() {

    const input = document.getElementById("searchInput").value.trim().toLowerCase();

    const result = document.getElementById("result");

    if(input === ""){
        result.innerHTML = "<h3>⚠️ Please enter an area name.</h3>";
        return;
    }

    const found = locations.find(item =>
        item.area.toLowerCase().includes(input) ||
        item.thana.toLowerCase().includes(input) ||
        item.district.toLowerCase().includes(input)
    );

    if(found){

        result.innerHTML = `
        <div class="card">
            <h2>📍 ${found.area}</h2>

            <p><b>🏘️ Thana:</b> ${found.thana}</p>

            <p><b>🏙️ District:</b> ${found.district}</p>

            <p><b>🌍 Division:</b> ${found.division}</p>
        </div>
        `;

    }else{

        result.innerHTML = `
        <div class="card">
            <h2>❌ Location Not Found</h2>
        </div>
        `;

    }

}
