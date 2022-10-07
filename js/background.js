const select = document.getElementById("select")
const colors = document.getElementById("background")

select.addEventListener("change", function() {
    const getTarget = select.options[select.selectedIndex]
    const getTargetValue = getTarget.value
    const getTargetText = getTarget.text

    colors.style.background = getTargetValue
    colors.innerHTML = getTargetText
})