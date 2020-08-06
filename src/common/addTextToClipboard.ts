/**
 *
 * @param text the text to add to the user's clipboard.
 */
const addTextToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export default addTextToClipboard
