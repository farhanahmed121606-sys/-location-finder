let locations = [];

// Load JSON Data
fetch("locations.json")
.then(response => response.json())
.then(data => {

    locations = data;

    const suggestionList = document.getElementById("suggestions");

    data.forEach(item => {

        const option = document.createElement("option");

        option.value = item.area;

        suggestionList.appendChild(option);

    });

})
.catch(error => {

    console.log(error);

});

function searchLocation(){

    const input = document.getElementById("searchInput").value.trim().toLowerCase();

    const result = document.getElementById("result");

    if(input==""){

        result.innerHTML=`
        <div class="card">
        <h2>⚠️ লিখে সার্চ করুন</h2>
        </div>
        `;

        return;

    }

    const found = locations.find(item =>

        item.area.toLowerCase().includes(input) ||

        item.thana.toLowerCase().includes(input) ||

        item.district.toLowerCase().includes(input) ||

        item.division.toLowerCase().includes(input)

    );

    if(found){

        result.innerHTML=`

        <div class="card">

        <h2>📍 ${found.area}</h2>

        <hr>

        <p><strong>🏠 Area :</strong> ${found.area}</p>

        <p><strong>🏘️ Thana :</strong> ${found.thana}</p>

        <p><strong>🏙️ District :</strong> ${found.district}</p>

        <p><strong>🌍 Division :</strong> ${found.division}</p>

        </div>

        `;

    }

    else{

        result.innerHTML=`

        <div class="card">

        <h2>❌ কোনো তথ্য পাওয়া যায়নি</h2>

        </div>

        `;

    }

}

// Enter Press Search
document.getElementById("searchInput").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        searchLocation();

    }

});
