function convertyard() {
    const YardInput = document.getElementById("YardInput");
    const sqfeetResult = document.getElementById("sqfeetResult");

    const yard = parseFloat(YardInput.value);

    if (isNaN(yard) || yard< 0) {
        sqfeetResult.value = "Invalid input";
    } else {
        const sqfeet = yard * 9;
        sqfeetResult.value = sqfeet.toFixed(2) + " sqft";
    }
}
