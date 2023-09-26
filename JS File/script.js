// Function to convert temperature
function convertTemperature() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const unit = document.getElementById("unit").value;

    if (!isNaN(celsius)) {
        let result = "";

        if (unit === "fahrenheit") {
            const fahrenheit = (celsius * 9/5) + 32;
            result = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "kelvin") {
            const kelvin = celsius + 273.15;
            result = `Kelvin: ${kelvin.toFixed(2)}K`;
        }

        document.getElementById("convertedResult").textContent = result;
    } else {
        document.getElementById("convertedResult").textContent = "Enter a valid Temperature in Celsius.";
    }
}

// Add an event listener to the "Convert" button to call the function when clicked
document.getElementById("convertButton").addEventListener("click", convertTemperature);
