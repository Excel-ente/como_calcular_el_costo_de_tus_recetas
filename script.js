document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Calculator functionality
  const nameInput = document.getElementById("name")
  const totalPriceInput = document.getElementById("totalPrice")
  const purchasedQuantityInput = document.getElementById("purchasedQuantity")
  const purchasedUnitSelect = document.getElementById("purchasedUnit")
  const usedQuantityInput = document.getElementById("usedQuantity")
  const usedUnitSelect = document.getElementById("usedUnit")
  const resultDiv = document.getElementById("result")
  const resultText = document.getElementById("result-text")
  const copyBtn = document.getElementById("copy-btn")
  const shareBtn = document.getElementById("share-btn")

  // Unit conversion mappings
  const unitConversions = {
    kg: { g: 1000 },
    g: { kg: 0.001 },
    lt: { ml: 1000 },
    ml: { lt: 0.001 },
  }

  // Update compatible units when purchase unit changes
  purchasedUnitSelect.addEventListener("change", function () {
    const purchasedUnit = this.value
    const compatibleUnits = getCompatibleUnits(purchasedUnit)

    // Clear current options
    usedUnitSelect.innerHTML = ""

    // Add compatible options
    compatibleUnits.forEach((unit) => {
      const option = document.createElement("option")
      option.value = unit
      option.textContent = unit
      usedUnitSelect.appendChild(option)
    })

    // Set default compatible unit
    if (compatibleUnits.length > 0) {
      if (purchasedUnit === "kg" && compatibleUnits.includes("g")) {
        usedUnitSelect.value = "g"
      } else if (purchasedUnit === "lt" && compatibleUnits.includes("ml")) {
        usedUnitSelect.value = "ml"
      } else {
        usedUnitSelect.value = compatibleUnits[0]
      }
    }

    calculateCost()
  })

  // Get compatible units for a given unit
  function getCompatibleUnits(unit) {
    switch (unit) {
      case "kg":
        return ["kg", "g"]
      case "g":
        return ["g", "kg"]
      case "lt":
        return ["lt", "ml"]
      case "ml":
        return ["ml", "lt"]
      case "unidades":
        return ["unidades"]
      default:
        return ["kg", "g", "lt", "ml", "unidades"]
    }
  }
  // Calculate cost when inputs change
  ;[nameInput, totalPriceInput, purchasedQuantityInput, purchasedUnitSelect, usedQuantityInput, usedUnitSelect].forEach(
    (input) => {
      input.addEventListener("input", calculateCost)
    },
  )

  function calculateCost() {
    const name = nameInput.value
    const totalPrice = Number.parseFloat(totalPriceInput.value)
    const purchasedQuantity = Number.parseFloat(purchasedQuantityInput.value)
    const purchasedUnit = purchasedUnitSelect.value
    const usedQuantity = Number.parseFloat(usedQuantityInput.value)
    const usedUnit = usedUnitSelect.value

    // Validate inputs
    if (
      !name ||
      isNaN(totalPrice) ||
      isNaN(purchasedQuantity) ||
      isNaN(usedQuantity) ||
      totalPrice <= 0 ||
      purchasedQuantity <= 0 ||
      usedQuantity <= 0
    ) {
      resultDiv.classList.add("hidden")
      return
    }

    // Calculate unit cost
    let convertedUsedQuantity = usedQuantity

    // Convert units if necessary
    if (purchasedUnit !== usedUnit) {
      if (unitConversions[purchasedUnit] && unitConversions[purchasedUnit][usedUnit]) {
        // Direct conversion (e.g., kg to g)
        const conversionFactor = unitConversions[purchasedUnit][usedUnit]
        convertedUsedQuantity = usedQuantity / conversionFactor
      } else if (unitConversions[usedUnit] && unitConversions[usedUnit][purchasedUnit]) {
        // Inverse conversion (e.g., g to kg)
        const conversionFactor = unitConversions[usedUnit][purchasedUnit]
        convertedUsedQuantity = usedQuantity * conversionFactor
      }
    }

    // Calculate cost
    const unitCost = totalPrice / purchasedQuantity
    const cost = unitCost * convertedUsedQuantity

    // Display result
    resultText.textContent = `Usar ${usedQuantity}${usedUnit} de ${name} te cuesta $${cost.toFixed(2)}`
    resultDiv.classList.remove("hidden")
  }

  // Copy result to clipboard
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(resultText.textContent).then(() => {
      const originalText = this.textContent
      this.textContent = "Copiado!"
      setTimeout(() => {
        this.textContent = originalText
      }, 2000)
    })
  })

  // Share on WhatsApp
  shareBtn.addEventListener("click", () => {
    const text = resultText.textContent
    window.open(
      `https  function() {
    const text = resultText.textContent;
    window.open(\`https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
    )
  })

  // Initialize the calculator with default values
  calculateCost()
})
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Calculator functionality
  const nameInput = document.getElementById("name")
  const totalPriceInput = document.getElementById("totalPrice")
  const purchasedQuantityInput = document.getElementById("purchasedQuantity")
  const purchasedUnitSelect = document.getElementById("purchasedUnit")
  const usedQuantityInput = document.getElementById("usedQuantity")
  const usedUnitSelect = document.getElementById("usedUnit")
  const resultDiv = document.getElementById("result")
  const resultText = document.getElementById("result-text")
  const copyBtn = document.getElementById("copy-btn")
  const shareBtn = document.getElementById("share-btn")

  // Unit conversion mappings
  const unitConversions = {
    kg: { g: 1000 },
    g: { kg: 0.001 },
    lt: { ml: 1000 },
    ml: { lt: 0.001 },
  }

  // Update compatible units when purchase unit changes
  purchasedUnitSelect.addEventListener("change", function () {
    const purchasedUnit = this.value
    const compatibleUnits = getCompatibleUnits(purchasedUnit)

    // Clear current options
    usedUnitSelect.innerHTML = ""

    // Add compatible options
    compatibleUnits.forEach((unit) => {
      const option = document.createElement("option")
      option.value = unit
      option.textContent = unit
      usedUnitSelect.appendChild(option)
    })

    // Set default compatible unit
    if (compatibleUnits.length > 0) {
      if (purchasedUnit === "kg" && compatibleUnits.includes("g")) {
        usedUnitSelect.value = "g"
      } else if (purchasedUnit === "lt" && compatibleUnits.includes("ml")) {
        usedUnitSelect.value = "ml"
      } else {
        usedUnitSelect.value = compatibleUnits[0]
      }
    }

    calculateCost()
  })

  // Get compatible units for a given unit
  function getCompatibleUnits(unit) {
    switch (unit) {
      case "kg":
        return ["kg", "g"]
      case "g":
        return ["g", "kg"]
      case "lt":
        return ["lt", "ml"]
      case "ml":
        return ["ml", "lt"]
      case "unidades":
        return ["unidades"]
      default:
        return ["kg", "g", "lt", "ml", "unidades"]
    }
  }
  // Calculate cost when inputs change
  ;[nameInput, totalPriceInput, purchasedQuantityInput, purchasedUnitSelect, usedQuantityInput, usedUnitSelect].forEach(
    (input) => {
      input.addEventListener("input", calculateCost)
    },
  )

  function calculateCost() {
    const name = nameInput.value
    const totalPrice = Number.parseFloat(totalPriceInput.value)
    const purchasedQuantity = Number.parseFloat(purchasedQuantityInput.value)
    const purchasedUnit = purchasedUnitSelect.value
    const usedQuantity = Number.parseFloat(usedQuantityInput.value)
    const usedUnit = usedUnitSelect.value

    // Validate inputs
    if (
      !name ||
      isNaN(totalPrice) ||
      isNaN(purchasedQuantity) ||
      isNaN(usedQuantity) ||
      totalPrice <= 0 ||
      purchasedQuantity <= 0 ||
      usedQuantity <= 0
    ) {
      resultDiv.classList.add("hidden")
      return
    }

    // Calculate unit cost
    let convertedUsedQuantity = usedQuantity

    // Convert units if necessary
    if (purchasedUnit !== usedUnit) {
      if (unitConversions[purchasedUnit] && unitConversions[purchasedUnit][usedUnit]) {
        // Direct conversion (e.g., kg to g)
        const conversionFactor = unitConversions[purchasedUnit][usedUnit]
        convertedUsedQuantity = usedQuantity / conversionFactor
      } else if (unitConversions[usedUnit] && unitConversions[usedUnit][purchasedUnit]) {
        // Inverse conversion (e.g., g to kg)
        const conversionFactor = unitConversions[usedUnit][purchasedUnit]
        convertedUsedQuantity = usedQuantity * conversionFactor
      }
    }

    // Calculate cost
    const unitCost = totalPrice / purchasedQuantity
    const cost = unitCost * convertedUsedQuantity

    // Display result
    resultText.textContent = `Usar ${usedQuantity}${usedUnit} de ${name} te cuesta $${cost.toFixed(2)}`
    resultDiv.classList.remove("hidden")
  }

  // Copy result to clipboard
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(resultText.textContent).then(() => {
      const originalText = this.textContent
      this.textContent = "Copiado!"
      setTimeout(() => {
        this.textContent = originalText
      }, 2000)
    })
  })

  // Share on WhatsApp
  shareBtn.addEventListener("click", () => {
    const text = resultText.textContent
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
  })

  // Cake Example Tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")
  const nextTabBtns = document.querySelectorAll(".next-tab-btn")
  const prevTabBtns = document.querySelectorAll(".prev-tab-btn")

  // Tab switching function
  function switchTab(tabId) {
    // Hide all tabs
    tabContents.forEach((tab) => {
      tab.classList.remove("active")
    })

    // Remove active class from all buttons
    tabBtns.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Show the selected tab
    document.getElementById(`${tabId}-tab`).classList.add("active")

    // Add active class to the clicked button
    document.querySelector(`[data-tab="${tabId}"]`).classList.add("active")
  }

  // Tab button click event
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")
      switchTab(tabId)
    })
  })

  // Next tab button click event
  nextTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const nextTabId = this.getAttribute("data-next")
      switchTab(nextTabId)
    })
  })

  // Previous tab button click event
  prevTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const prevTabId = this.getAttribute("data-prev")
      switchTab(prevTabId)
    })
  })

  // Add ingredient functionality
  const addIngredientBtn = document.getElementById("add-ingredient-btn")
  const ingredientsTbody = document.getElementById("ingredients-tbody")
  const ingredientsTotal = document.getElementById("ingredients-total")

  addIngredientBtn.addEventListener("click", () => {
    const ingName = document.getElementById("ing-name").value
    const ingTotalQty = document.getElementById("ing-total-qty").value
    const ingTotalUnit = document.getElementById("ing-total-unit").value
    const ingPrice = document.getElementById("ing-price").value
    const ingUsedQty = document.getElementById("ing-used-qty").value
    const ingUsedUnit = document.getElementById("ing-used-unit").value

    if (!ingName || !ingTotalQty || !ingPrice || !ingUsedQty) {
      alert("Por favor completa todos los campos")
      return
    }

    // Calculate cost
    let cost = 0
    const totalQty = Number.parseFloat(ingTotalQty)
    const totalPrice = Number.parseFloat(ingPrice)
    const usedQty = Number.parseFloat(ingUsedQty)

    if (ingTotalUnit === ingUsedUnit) {
      cost = (totalPrice / totalQty) * usedQty
    } else {
      // Handle unit conversion
      let convertedUsedQty = usedQty

      if (unitConversions[ingTotalUnit] && unitConversions[ingTotalUnit][ingUsedUnit]) {
        // Direct conversion (e.g., kg to g)
        const conversionFactor = unitConversions[ingTotalUnit][ingUsedUnit]
        convertedUsedQty = usedQty / conversionFactor
      } else if (unitConversions[ingUsedUnit] && unitConversions[ingUsedUnit][ingTotalUnit]) {
        // Inverse conversion (e.g., g to kg)
        const conversionFactor = unitConversions[ingUsedUnit][ingTotalUnit]
        convertedUsedQty = usedQty * conversionFactor
      }

      cost = (totalPrice / totalQty) * convertedUsedQty
    }

    // Create new row
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
      <td>${ingName}</td>
      <td>${ingTotalQty} ${ingTotalUnit}</td>
      <td>$${totalPrice.toFixed(2)}</td>
      <td>${usedQty} ${ingUsedUnit}</td>
      <td>$${cost.toFixed(2)}</td>
    `

    ingredientsTbody.appendChild(newRow)

    // Update total
    updateIngredientsTotal()

    // Clear form
    document.getElementById("ing-name").value = ""
    document.getElementById("ing-total-qty").value = ""
    document.getElementById("ing-price").value = ""
    document.getElementById("ing-used-qty").value = ""
  })

  function updateIngredientsTotal() {
    let total = 0
    const costCells = ingredientsTbody.querySelectorAll("tr td:last-child")

    costCells.forEach((cell) => {
      const costText = cell.textContent
      const cost = Number.parseFloat(costText.replace("$", ""))
      total += cost
    })

    ingredientsTotal.textContent = `$${total.toFixed(2)}`

    // Update final ingredients cost in total tab
    if (document.getElementById("final-ingredients")) {
      document.getElementById("final-ingredients").textContent = `$${total.toFixed(2)}`
      updateTotalCost()
    }
  }

  // Add decoration functionality
  const addDecorationBtn = document.getElementById("add-decoration-btn")
  const decorationTbody = document.getElementById("decoration-tbody")
  const decorationTotal = document.getElementById("decoration-total")

  if (addDecorationBtn) {
    addDecorationBtn.addEventListener("click", () => {
      const decName = document.getElementById("dec-name").value
      const decTotalQty = document.getElementById("dec-total-qty").value
      const decTotalUnit = document.getElementById("dec-total-unit").value
      const decPrice = document.getElementById("dec-price").value
      const decUsedQty = document.getElementById("dec-used-qty").value
      const decUsedUnit = document.getElementById("dec-used-unit").value

      if (!decName || !decTotalQty || !decPrice || !decUsedQty) {
        alert("Por favor completa todos los campos")
        return
      }

      // Calculate cost
      let cost = 0
      const totalQty = Number.parseFloat(decTotalQty)
      const totalPrice = Number.parseFloat(decPrice)
      const usedQty = Number.parseFloat(decUsedQty)

      if (decTotalUnit === decUsedUnit) {
        cost = (totalPrice / totalQty) * usedQty
      } else {
        // Handle unit conversion
        let convertedUsedQty = usedQty

        if (unitConversions[decTotalUnit] && unitConversions[decTotalUnit][decUsedUnit]) {
          // Direct conversion (e.g., kg to g)
          const conversionFactor = unitConversions[decTotalUnit][decUsedUnit]
          convertedUsedQty = usedQty / conversionFactor
        } else if (unitConversions[decUsedUnit] && unitConversions[decUsedUnit][decTotalUnit]) {
          // Inverse conversion (e.g., g to kg)
          const conversionFactor = unitConversions[decUsedUnit][decTotalUnit]
          convertedUsedQty = usedQty * conversionFactor
        }

        cost = (totalPrice / totalQty) * convertedUsedQty
      }

      // Create new row
      const newRow = document.createElement("tr")
      newRow.innerHTML = `
        <td>${decName}</td>
        <td>${decTotalQty} ${decTotalUnit}</td>
        <td>$${totalPrice.toFixed(2)}</td>
        <td>${usedQty} ${decUsedUnit}</td>
        <td>$${cost.toFixed(2)}</td>
      `

      decorationTbody.appendChild(newRow)

      // Update total
      updateDecorationTotal()

      // Clear form
      document.getElementById("dec-name").value = ""
      document.getElementById("dec-total-qty").value = ""
      document.getElementById("dec-price").value = ""
      document.getElementById("dec-used-qty").value = ""
    })
  }

  function updateDecorationTotal() {
    let total = 0
    const costCells = decorationTbody.querySelectorAll("tr td:last-child")

    costCells.forEach((cell) => {
      const costText = cell.textContent
      const cost = Number.parseFloat(costText.replace("$", ""))
      total += cost
    })

    decorationTotal.textContent = `$${total.toFixed(2)}`

    // Update final decoration cost in total tab
    if (document.getElementById("final-decoration")) {
      document.getElementById("final-decoration").textContent = `$${total.toFixed(2)}`
      updateTotalCost()
    }
  }

  // Add packaging functionality
  const addPackagingBtn = document.getElementById("add-packaging-btn")
  const packagingTbody = document.getElementById("packaging-tbody")
  const packagingTotal = document.getElementById("packaging-total")

  if (addPackagingBtn) {
    addPackagingBtn.addEventListener("click", () => {
      const packName = document.getElementById("pack-name").value
      const packPrice = document.getElementById("pack-price").value
      const packQty = document.getElementById("pack-qty").value

      if (!packName || !packPrice || !packQty) {
        alert("Por favor completa todos los campos")
        return
      }

      // Calculate cost
      const unitPrice = Number.parseFloat(packPrice)
      const quantity = Number.parseFloat(packQty)
      const cost = unitPrice * quantity

      // Create new row
      const newRow = document.createElement("tr")
      newRow.innerHTML = `
        <td>${packName}</td>
        <td>$${unitPrice.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>$${cost.toFixed(2)}</td>
      `

      packagingTbody.appendChild(newRow)

      // Update total
      updatePackagingTotal()

      // Clear form
      document.getElementById("pack-name").value = ""
      document.getElementById("pack-price").value = ""
      document.getElementById("pack-qty").value = ""
    })
  }

  function updatePackagingTotal() {
    let total = 0
    const costCells = packagingTbody.querySelectorAll("tr td:last-child")

    costCells.forEach((cell) => {
      const costText = cell.textContent
      const cost = Number.parseFloat(costText.replace("$", ""))
      total += cost
    })

    packagingTotal.textContent = `$${total.toFixed(2)}`

    // Update final packaging cost in total tab
    if (document.getElementById("final-packaging")) {
      document.getElementById("final-packaging").textContent = `$${total.toFixed(2)}`
      updateTotalCost()
    }
  }

  // Baking calculator functionality
  const ovenPowerInput = document.getElementById("oven-power")
  const bakingTimeInput = document.getElementById("baking-time")
  const electricityCostInput = document.getElementById("electricity-cost")
  const electricityResult = document.getElementById("electricity-result")

  const ovenCostInput = document.getElementById("oven-cost")
  const ovenLifespanInput = document.getElementById("oven-lifespan")
  const amortizationResult = document.getElementById("amortization-result")

  const gasCostInput = document.getElementById("gas-cost")
  const waterCostInput = document.getElementById("water-cost")
  const otherCostsResult = document.getElementById("other-costs-result")

  const bakingTotal = document.getElementById("baking-total")

  // Calculate baking costs when inputs change
  ;[
    ovenPowerInput,
    bakingTimeInput,
    electricityCostInput,
    ovenCostInput,
    ovenLifespanInput,
    gasCostInput,
    waterCostInput,
  ].forEach((input) => {
    if (input) {
      input.addEventListener("input", calculateBakingCosts)
    }
  })

  function calculateBakingCosts() {
    if (
      !ovenPowerInput ||
      !bakingTimeInput ||
      !electricityCostInput ||
      !ovenCostInput ||
      !ovenLifespanInput ||
      !gasCostInput ||
      !waterCostInput
    ) {
      return
    }

    // Calculate electricity cost
    const ovenPower = Number.parseFloat(ovenPowerInput.value) || 0
    const bakingTime = Number.parseFloat(bakingTimeInput.value) || 0
    const electricityCost = Number.parseFloat(electricityCostInput.value) || 0

    const kWh = (ovenPower / 1000) * (bakingTime / 60)
    const electricityCostTotal = kWh * electricityCost

    electricityResult.textContent = `$${electricityCostTotal.toFixed(2)}`

    // Calculate amortization
    const ovenCost = Number.parseFloat(ovenCostInput.value) || 0
    const ovenLifespan = Number.parseFloat(ovenLifespanInput.value) || 1

    const amortizationCost = ovenCost / ovenLifespan

    amortizationResult.textContent = `$${amortizationCost.toFixed(2)}`

    // Calculate other costs
    const gasCost = Number.parseFloat(gasCostInput.value) || 0
    const waterCost = Number.parseFloat(waterCostInput.value) || 0

    const otherCostsTotal = gasCost + waterCost

    otherCostsResult.textContent = `$${otherCostsTotal.toFixed(2)}`

    // Calculate total baking cost
    const totalBakingCost = electricityCostTotal + amortizationCost + otherCostsTotal

    bakingTotal.textContent = `$${totalBakingCost.toFixed(2)}`

    // Update final baking cost in total tab
    if (document.getElementById("final-baking")) {
      document.getElementById("final-baking").textContent = `$${totalBakingCost.toFixed(2)}`
      updateTotalCost()
    }
  }

  // Time calculator functionality
  const timeInputs = [
    "prep-time",
    "mix-time",
    "bake-supervision",
    "filling-time",
    "frosting-time",
    "details-time",
    "cleaning-time",
    "packaging-time",
    "client-time",
  ]

  const hourlyRateInput = document.getElementById("hourly-rate")
  const totalTimeSpan = document.getElementById("total-time")
  const timeValueSpan = document.getElementById("time-value")

  // Calculate time costs when inputs change
  timeInputs.forEach((inputId) => {
    const input = document.getElementById(inputId)
    if (input) {
      input.addEventListener("input", calculateTimeCosts)
    }
  })

  if (hourlyRateInput) {
    hourlyRateInput.addEventListener("input", calculateTimeCosts)
  }

  function calculateTimeCosts() {
    let totalMinutes = 0

    timeInputs.forEach((inputId) => {
      const input = document.getElementById(inputId)
      if (input) {
        totalMinutes += Number.parseFloat(input.value) || 0
      }
    })

    // Convert to hours and minutes
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    if (totalTimeSpan) {
      totalTimeSpan.textContent = `${hours} horas y ${minutes} minutos`
    }

    // Calculate time value
    const hourlyRate = Number.parseFloat(hourlyRateInput?.value) || 0
    const timeValue = (totalMinutes / 60) * hourlyRate

    if (timeValueSpan) {
      timeValueSpan.textContent = `$${timeValue.toFixed(2)}`
    }

    // Update final time value in total tab
    if (document.getElementById("final-time")) {
      document.getElementById("final-time").textContent = `$${timeValue.toFixed(2)}`
      updateTotalCost()
    }
  }

  // Total cost calculator
  function updateTotalCost() {
    const ingredientsCost =
      Number.parseFloat(document.getElementById("final-ingredients")?.textContent.replace("$", "")) || 0
    const bakingCost = Number.parseFloat(document.getElementById("final-baking")?.textContent.replace("$", "")) || 0
    const decorationCost =
      Number.parseFloat(document.getElementById("final-decoration")?.textContent.replace("$", "")) || 0
    const packagingCost =
      Number.parseFloat(document.getElementById("final-packaging")?.textContent.replace("$", "")) || 0
    const timeCost = Number.parseFloat(document.getElementById("final-time")?.textContent.replace("$", "")) || 0

    const subtotal = ingredientsCost + bakingCost + decorationCost + packagingCost + timeCost

    if (document.getElementById("subtotal")) {
      document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`
    }

    // Calculate fixed costs (10% of subtotal)
    const fixedCosts = subtotal * 0.1

    if (document.getElementById("fixed-costs")) {
      document.getElementById("fixed-costs").textContent = `$${fixedCosts.toFixed(2)}`
    }

    // Calculate total cost
    const totalCost = subtotal + fixedCosts

    if (document.getElementById("total-cost")) {
      document.getElementById("total-cost").textContent = `$${totalCost.toFixed(2)}`
    }

    // Update profit and final price
    updateProfit(totalCost)
  }

  // Profit calculator
  const profitPercentageInput = document.getElementById("profit-percentage")
  const profitPercentageValue = document.getElementById("profit-percentage-value")

  if (profitPercentageInput) {
    profitPercentageInput.addEventListener("input", function () {
      const percentage = this.value
      profitPercentageValue.textContent = `${percentage}%`

      const totalCost = Number.parseFloat(document.getElementById("total-cost")?.textContent.replace("$", "")) || 0
      updateProfit(totalCost)
    })
  }

  function updateProfit(totalCost) {
    if (
      !document.getElementById("profit-amount") ||
      !document.getElementById("final-price") ||
      !document.getElementById("portion-price")
    ) {
      return
    }

    const profitPercentage = Number.parseFloat(profitPercentageInput?.value) || 40
    const profitAmount = totalCost * (profitPercentage / 100)

    document.getElementById("profit-amount").textContent = `$${profitAmount.toFixed(2)}`

    // Calculate final price
    const finalPrice = totalCost + profitAmount

    document.getElementById("final-price").textContent = `$${finalPrice.toFixed(2)}`

    // Calculate price per portion (15 portions)
    const portionPrice = finalPrice / 15

    document.getElementById("portion-price").textContent = `$${portionPrice.toFixed(2)}`

    // Update chart
    updateChart(totalCost, profitAmount)
  }

  // Update chart
  function updateChart(totalCost, profitAmount) {
    const ingredientsCost =
      Number.parseFloat(document.getElementById("final-ingredients")?.textContent.replace("$", "")) || 0
    const bakingCost = Number.parseFloat(document.getElementById("final-baking")?.textContent.replace("$", "")) || 0
    const decorationCost =
      Number.parseFloat(document.getElementById("final-decoration")?.textContent.replace("$", "")) || 0
    const packagingCost =
      Number.parseFloat(document.getElementById("final-packaging")?.textContent.replace("$", "")) || 0
    const timeCost = Number.parseFloat(document.getElementById("final-time")?.textContent.replace("$", "")) || 0
    const fixedCosts = Number.parseFloat(document.getElementById("fixed-costs")?.textContent.replace("$", "")) || 0

    const finalPrice = totalCost + profitAmount

    // Calculate percentages
    const ingredientsPercentage = (ingredientsCost / finalPrice) * 100
    const bakingPercentage = (bakingCost / finalPrice) * 100
    const decorationPercentage = (decorationCost / finalPrice) * 100
    const packagingPercentage = (packagingCost / finalPrice) * 100
    const timePercentage = (timeCost / finalPrice) * 100
    const fixedPercentage = (fixedCosts / finalPrice) * 100
    const costPercentage = (totalCost / finalPrice) * 100
    const profitPercentage = (profitAmount / finalPrice) * 100

    // Update chart segments
    document.querySelector(".ingredients-segment").style.height = `${ingredientsPercentage}%`
    document.querySelector(".baking-segment").style.height = `${bakingPercentage}%`
    document.querySelector(".decoration-segment").style.height = `${decorationPercentage}%`
    document.querySelector(".packaging-segment").style.height = `${packagingPercentage}%`
    document.querySelector(".time-segment").style.height = `${timePercentage}%`
    document.querySelector(".fixed-segment").style.height = `${fixedPercentage}%`
    document.querySelector(".cost-segment").style.height = `${costPercentage}%`
    document.querySelector(".profit-segment").style.height = `${profitPercentage}%`

    // Update tooltips
    document.querySelector(".ingredients-segment").title = `Ingredientes: $${ingredientsCost.toFixed(2)}`
    document.querySelector(".baking-segment").title = `Horneado: $${bakingCost.toFixed(2)}`
    document.querySelector(".decoration-segment").title = `Decoración: $${decorationCost.toFixed(2)}`
    document.querySelector(".packaging-segment").title = `Packaging: $${packagingCost.toFixed(2)}`
    document.querySelector(".time-segment").title = `Tu tiempo: $${timeCost.toFixed(2)}`
    document.querySelector(".fixed-segment").title = `Gastos fijos: $${fixedCosts.toFixed(2)}`
    document.querySelector(".cost-segment").title = `Costo total: $${totalCost.toFixed(2)}`
    document.querySelector(".profit-segment").title = `Ganancia: $${profitAmount.toFixed(2)}`
  }

  // Recalculate button
  const recalculateBtn = document.getElementById("recalculate-btn")

  if (recalculateBtn) {
    recalculateBtn.addEventListener("click", () => {
      calculateBakingCosts()
      calculateTimeCosts()
      updateIngredientsTotal()
      updateDecorationTotal()
      updatePackagingTotal()
      updateTotalCost()
    })
  }

  // Fixed costs calculator
  const fixedCostsInputs = [
    "rent",
    "electricity",
    "gas",
    "water",
    "internet",
    "taxes",
    "insurance",
    "marketing",
    "other-fixed",
  ]

  const monthlyFixedTotal = document.getElementById("monthly-fixed-total")
  const monthlyProductsInput = document.getElementById("monthly-products")
  const fixedPerProduct = document.getElementById("fixed-per-product")

  // Calculate fixed costs when inputs change
  fixedCostsInputs.forEach((inputId) => {
    const input = document.getElementById(inputId)
    if (input) {
      input.addEventListener("input", calculateFixedCosts)
    }
  })

  if (monthlyProductsInput) {
    monthlyProductsInput.addEventListener("input", calculateFixedCosts)
  }

  function calculateFixedCosts() {
    let totalFixedCosts = 0

    fixedCostsInputs.forEach((inputId) => {
      const input = document.getElementById(inputId)
      if (input) {
        totalFixedCosts += Number.parseFloat(input.value) || 0
      }
    })

    if (monthlyFixedTotal) {
      monthlyFixedTotal.textContent = `$${totalFixedCosts.toFixed(2)}`
    }

    // Calculate fixed costs per product
    const monthlyProducts = Number.parseFloat(monthlyProductsInput?.value) || 1
    const fixedCostsPerProduct = totalFixedCosts / monthlyProducts

    if (fixedPerProduct) {
      fixedPerProduct.textContent = `$${fixedCostsPerProduct.toFixed(2)}`
    }
  }

  // Initialize calculations
  calculateCost()
  if (document.getElementById("baking-tab")) {
    calculateBakingCosts()
  }
  if (document.getElementById("time-tab")) {
    calculateTimeCosts()
  }
  if (document.getElementById("total-tab")) {
    updateTotalCost()
  }
  if (document.getElementById("monthly-fixed-total")) {
    calculateFixedCosts()
  }
})

