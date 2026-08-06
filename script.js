function searchLocation() {

    let input = document.getElementById("searchInput").value.trim();

    if(input === "") {
        document.getElementById("result").innerHTML =
        "<h3>⚠️ অনুগ্রহ করে একটি এলাকার নাম লিখুন।</h3>";
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>🔍 Search Result</h2>
        <p><strong>আপনি সার্চ করেছেন:</strong> ${input}</p>
        <p>🚧 লোকেশন ডাটাবেস যুক্ত করা হচ্ছে...</p>
    `;
}
