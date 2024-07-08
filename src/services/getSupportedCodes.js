const APIKEY = 'a1d5447d54ede580d6c8273b'

export default function supportedCodes () {
  return fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/codes`)
    .then(res => res.json())
    .then(response => {
      const { supported_codes: supportedCodes } = response

      const supportedCodesObject = supportedCodes.reduce((acc, [code, name]) => {
        acc[code] = name
        return acc
      }, {})
      return supportedCodesObject
    })
}
