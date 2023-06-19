export function useGradientColors() {
  const colorState = reactive({
    colors: ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'orange', 'red'], // Define an array of colors you want to cycle through
    currentColorIndex: 0,
    currentColor: 'rose', // Set the initial color
  })
  const colorState2 = reactive({
    colors: ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'orange', 'red'], // Define an array of colors you want to cycle through
    currentColorIndex: 0,
    currentColor: 'fuchsia', // Set the initial color
  })
  const colorState3 = reactive({
    colors: ['rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'orange', 'red'], // Define an array of colors you want to cycle through
    currentColorIndex: 0,
    currentColor: 'violet', // Set the initial color
  })

  onMounted(() => {
    setInterval(() => {
      colorState.currentColorIndex = (colorState.currentColorIndex + 1) % colorState.colors.length
      colorState.currentColor = colorState.colors[colorState.currentColorIndex]
    }, 1000)
  })
  onMounted(() => {
    setInterval(() => {
      colorState2.currentColorIndex = (colorState2.currentColorIndex + 1) % colorState2.colors.length
      colorState2.currentColor = colorState2.colors[colorState2.currentColorIndex]
    }, 1000)
  })
  onMounted(() => {
    setInterval(() => {
      colorState3.currentColorIndex = (colorState3.currentColorIndex + 1) % colorState3.colors.length
      colorState3.currentColor = colorState3.colors[colorState3.currentColorIndex]
    }, 1000)
  })

  return {
    colorState,
    colorState2,
    colorState3,
  }
}
