/**
 * Removes a cookie from the semicolon (;) separated cookie string
 *
 * @param {String} cookieString - Semicolon separated cookie string from headers
 * @param {String} cookieToRemove - name of cookie to remove
 * @return {String} cookies - processed cookie string
 */
const eatCookie = (cookieString, cookieToRemove) => {
  const cookieArray = cookieString.split('; ')
  const processedCookies = []

  cookieArray.forEach(function (cookie) {
    if (cookie.split('=')[0].trim() !== cookieToRemove) {
      processedCookies.push(cookie)
    }
  })

  return processedCookies.join('; ')
}

module.exports = eatCookie
