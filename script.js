function toggleInput(dropdownId, inputId) {
    const dropdown = document.getElementById(dropdownId);
    const input = document.getElementById(inputId);

    if (dropdown.value === "other") {
        dropdown.style.display = "none";
        input.style.display = "inline-block";
    } else {
        input.style.display = "none";
    }
}








function calculateEarnings() {
    let postpaid_units = document.getElementById("postpaid-custom").style.display !== "none" 
                         ? parseInt(document.getElementById("postpaid-custom").value)
                         : parseInt(document.getElementById("postpaid").value);
    
    let prepaid_units = document.getElementById("prepaid-custom").style.display !== "none" 
                        ? parseInt(document.getElementById("prepaid-custom").value)
                        : parseInt(document.getElementById("prepaid").value);
    
    let mobileProtection_units = document.getElementById("mobileProtection-custom").style.display !== "none" 
                                 ? parseInt(document.getElementById("mobileProtection-custom").value)
                                 : parseInt(document.getElementById("mobileProtection").value);
    
    let allStateFamily_units = document.getElementById("allStateFamily-custom").style.display !== "none" 
                               ? parseInt(document.getElementById("allStateFamily-custom").value)
                               : parseInt(document.getElementById("allStateFamily").value);
    
    let accessories_value = parseFloat(document.getElementById("accessories").value || 0);
    
    let nonMobileProtection_units = document.getElementById("nonMobileProtection-custom").style.display !== "none" 
                                   ? parseInt(document.getElementById("nonMobileProtection-custom").value)
                                   : parseInt(document.getElementById("nonMobileProtection").value);


    let total_payout = 0;

    // Calculation logic for postpaid
    if (postpaid_units === 1) {
        total_payout += 0;
    } else if (postpaid_units === 2) {
        total_payout += 30;
    } else if (postpaid_units === 3) {
        total_payout += 60;
    } else if (postpaid_units === 4) {
        total_payout += 100;
    } else {
        total_payout += postpaid_units * 30;
    }

    // Calculation for prepaid
    if (prepaid_units < 3) {
        total_payout += 0;
    } else {
        total_payout += prepaid_units * 3;
    }

    // Calculation for other categories
    total_payout += mobileProtection_units * 5;
    total_payout += allStateFamily_units * 15;
    total_payout += Math.floor(accessories_value / 200) * 2; // $2 for every $200
    total_payout += nonMobileProtection_units;


 document.getElementById("output").
 innerText = total_payout.toFixed(2);
}
