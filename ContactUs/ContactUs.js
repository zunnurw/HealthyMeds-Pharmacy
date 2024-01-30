function getcity() {
    var state = document.getElementById("state").value;
    console.log(state);
    var city = document.getElementById("city");
    city.innerHTML = "<option value=''>Select City</option>";

    var CityOptions = {
        Johor: [
            "Johor Bahru",
            "Batu Pahat",
            "Kluang",
            "Muar",
            "Segamat",
            "Pontian",
            "Kota Tinggi",
            "Mersing",
            "Kulai"],

        Kedah: [
            "Alor Setar",
            "Sungai Petani",
            "Langkawi",
            "Kota Setar",
            "Pendang",
            "Baling",
            "Sik"],

        Kelantan: [
            "Kota Bharu",
            "Pasir Mas",
            "Tumpat",
            "Tanah Merah",
            "Machang",
            "Pasir Puteh",
            "Jeli",
            "Gua Musang"],
        
        Melaka: [
            "Melaka City",
            "Alor Gajah",
            "Jasin"],
        
        Pahang: [
            "Kuantan",
            "Temerloh",
            "Mentakab",
            "Bentong",
            "Raub",
            "Jerantut",
            "Maran",
            "Bera",
            "Lipis"],

        Perak: [
            "Ipoh",
            "Tapah",
            "Taiping",
            "Teluk Intan",
            "Batu Gajah",
            "Kampar",
            "Sitiawan",
            "Lumut",
            "Kuala Kangsar"],

        Perlis: [
            "Kangar",
            "Arau"],

        Penang: [
            "George Town",
            "Seberang Perai",
            "Bukit Mertajam",
            "Butterworth",
            "Nibong Tebal",
            "Balik Pulau"],

        Sabah: [
            "Kota Kinabalu",
            "Sandakan",
            "Tawau",
            "Lahad Datu",
            "Keningau",
            "Papar",
            "Semporna",
            "Tenom"],

        Sarawak: [
            "Kuching",
            "Miri",
            "Sibu",
            "Bintulu",
            "Kota Samarahan",
            "Serian",
            "Kapit",
            "Sarikei"],

        Selangor: [
            "Shah Alam",
            "Petaling Jaya",
            "Subang Jaya",
            "Klang",
            "Ampang",
            "Kajang",
            "Sepang",
            "Hulu Langat"],

        Terengganu: [
            "Kuala Terengganu",
            "Marang",
            "Setiu",
            "Besut",
            "Dungun",
            "Kemaman",
            "Hulu Terengganu"],

        FederalTerritories: [
            "Kuala Lumpur City Center",
            "Brickfields",
            "Bukit Bintang",
            "Mont Kiara",
            "Bangsar",
            "Setapak",
            "Wangsa Maju",
            "Cheras",
            "Labuan",
            "Putrajaya"],
    };

    if (state !== "") {
        var cities = CityOptions[state];
        if (cities) {
            for (var i = 0; i < cities.length; i++) {
                var option = document.createElement("option");
                option.value = cities[i];
                option.textContent = cities[i];
                city.appendChild(option);
            }
        }
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (!name || !email || !phone || !subject || !appointmentDate || !appointmentTime) {
        alert('Please fill out all required fields.');
        return false; // Prevent form submission
    }
    return true; // Continue with form submission
}

function showAppointmentForm() {
    const selectedDate = document.getElementById('appointmentDate').value;
    const selectedTime = document.getElementById('appointmentTime').value;

    if (selectedDate && selectedTime) {
        const time = selectedTime.split(':');
        let hours = parseInt(time[0]);
        const minutes = time[1];
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const formattedTime = hours + ':' + minutes + ' ' + ampm;

        alert('Your appointment has been submitted to HealthyMeds Pharmacy for ' + selectedDate + ' at ' + formattedTime);

        // Here, you can call the function to show the calendar
        showCalendar();
    } else {
        alert('Please select both date and time for your appointment.');
    }
}

function validateAndSubmit() {
    const isFormValid = validateForm();
    if (isFormValid) {
        showAppointmentForm();
    }
}


