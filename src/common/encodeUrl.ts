/**
 * Takes raw latex code and encodes it into a url for Github's latex math
 * rendering API.
 *
 * @param code The raw latex code
 */
const encodeUrl = (code: string) => {
  const baseUrl = 'https://render.githubusercontent.com/render/math?math='
  return baseUrl + encodeURIComponent(code)
}

export default encodeUrl
