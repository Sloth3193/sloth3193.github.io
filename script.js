document.getElementById('generateParts').addEventListener('click', function () {
    const currency = document.getElementById('currency').value;
    const budget = parseInt(document.getElementById('budget').value);
    const usage = document.getElementById('usage').value;
    const preference = document.getElementById('preference').value;
    const buildType = document.getElementById('buildType').value;

    let partsList = '';

    // Adjust currency symbol
    let currencySymbol = '$';
    if (currency === 'GBP') {
        currencySymbol = '£';
    } else if (currency === 'EUR') {
        currencySymbol = '€';
    }

    // Ultra-budget (£200 and below) builds
    if (budget <= 200) {
        partsList = 'Ultra-Budget Build: ';
        if (buildType === 'custom') {
            partsList += preference === 'amd' || preference === 'amd_am5' 
                ? 'AMD Athlon 3000G, Integrated Graphics, 4GB RAM' 
                : 'Intel Pentium Gold G5400, Integrated Graphics, 4GB RAM';
        } else if (buildType === 'prebuilt') {
            partsList += 'Refurbished Prebuilt with Intel i3 or Ryzen 3, 4GB RAM';
        } else if (buildType === 'laptop') {
            partsList += 'Used/Refurbished Laptop with Intel i3 or AMD Ryzen 3';
        } else if (buildType === 'handheld') {
            partsList += 'Steam Deck (Base model) or used handheld consoles like Nintendo Switch Lite';
        } else if (buildType === 'custom_built_by_others') {
            partsList += preference === 'amd' || preference === 'amd_am5' 
                ? 'AMD Athlon 3000G, Integrated Graphics, Built by a third-party service' 
                : 'Intel Pentium G5400, Integrated Graphics, Built by a third-party service';
        }
    } 
    // Budget (£200-500) builds
    else if (budget > 200 && budget <= 500) {
        partsList = 'Budget Build: ';
        if (buildType === 'custom') {
            if (usage === 'gaming') {
                partsList += preference === 'amd' || preference === 'amd_am5' 
                    ? 'Ryzen 3 3200G, Integrated Graphics' 
                    : 'Intel i3-10100, Integrated Graphics';
            } else if (usage === 'videoEditing') {
                partsList += 'Ryzen 5 3400G, Integrated Graphics, 8GB RAM';
            } else if (usage === 'programming') {
                partsList += 'Intel i3-10100, Integrated Graphics, 8GB RAM';
            } else {
                partsList += 'Ryzen 3 3200G, Integrated Graphics, 8GB RAM';
            }
        } else if (buildType === 'prebuilt') {
            partsList += 'Prebuilt with Intel i3 or Ryzen 3, 8GB RAM';
        } else if (buildType === 'laptop') {
            partsList += 'Budget Laptop (e.g. Acer Aspire with Ryzen 3 or i3)';
        } else if (buildType === 'handheld') {
            partsList += 'Steam Deck, Aya Neo Air';
        } else if (buildType === 'custom_built_by_others') {
            partsList += 'Custom budget build, assembled by others: Ryzen 3 3200G, 8GB RAM';
        }
    } 
    // Mid-range (£500-1000) builds
    else if (budget > 500 && budget <= 1000) {
        partsList = 'Mid-range Build: ';
        if (buildType === 'custom') {
            if (usage === 'gaming') {
                partsList += preference === 'amd' 
                    ? 'Ryzen 5 3600, Radeon RX 5600 XT' 
                    : preference === 'amd_am5' 
                    ? 'Ryzen 5 7600, Radeon RX 6700 XT' 
                    : 'Intel i5-10400, GTX 1660 Super';
            } else if (usage === 'videoEditing') {
                partsList += preference === 'amd_am5' 
                    ? 'Ryzen 5 7600, Radeon RX 6700 XT, 16GB RAM' 
                    : preference === 'amd' 
                    ? 'Ryzen 5 3600, Radeon RX 580, 16GB RAM' 
                    : 'Intel i5-10400, GTX 1660 Super, 16GB RAM';
            } else if (usage === 'programming') {
                partsList += 'Intel i5-10400, Integrated Graphics, 16GB RAM';
            } else {
                partsList += 'Ryzen 5 3400G, Integrated Graphics, 16GB RAM';
            }
        } else if (buildType === 'prebuilt') {
            partsList += 'Mid-range Prebuilt with Ryzen 5 or Intel i5, GTX 1660 Super, 16GB RAM';
        } else if (buildType === 'laptop') {
            partsList += 'Gaming Laptop (e.g. Lenovo Legion with Ryzen 5 4600H and GTX 1660)';
        } else if (buildType === 'handheld') {
            partsList += 'Aya Neo or Steam Deck (512GB model)';
        } else if (buildType === 'custom_built_by_others') {
            partsList += 'Custom mid-range build assembled by others: Ryzen 5 3600, 16GB RAM, RX 5600 XT';
        }
    } 
    // High-end (£1000-2000) builds
    else if (budget > 1000 && budget <= 2000) {
        partsList = 'High-end Build: ';
        if (buildType === 'custom') {
            if (usage === 'gaming') {
                partsList += preference === 'amd' 
                    ? 'Ryzen 7 5800X, Radeon RX 6700 XT' 
                    : preference === 'amd_am5' 
                    ? 'Ryzen 7 7700X, Radeon RX 7800 XT' 
                    : 'Intel i7-11700K, RTX 3060 Ti';
            } else if (usage === 'videoEditing') {
                partsList += preference === 'amd_am5' 
                    ? 'Ryzen 9 7900X, Radeon RX 7900 XT, 32GB RAM' 
                    : preference === 'amd' 
                    ? 'Ryzen 9 5900X, Radeon RX 6800, 32GB RAM' 
                    : 'Intel i7-11700K, RTX 3070, 32GB RAM';
            } else if (usage === 'programming') {
                partsList += 'Intel i7-11700K, Integrated Graphics, 32GB RAM';
            } else {
                partsList += 'Ryzen 7 5700G, Integrated Graphics, 32GB RAM';
            }
        } else if (buildType === 'prebuilt') {
            partsList += 'High-end Prebuilt with Intel i7 or Ryzen 7, RTX 3060 Ti, 32GB RAM';
        } else if (buildType === 'laptop') {
            partsList += 'Gaming Laptop (e.g. Asus ROG with Ryzen 9 5900H and RTX 3070)';
        } else if (buildType === 'handheld') {
            partsList += 'Aya Neo 2021 or other high-performance handhelds';
        } else if (buildType === 'custom_built_by_others') {
            partsList += 'Custom high-end build assembled by others: Ryzen 7 5800X, RTX 3060 Ti';
        }