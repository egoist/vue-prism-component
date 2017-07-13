export function assign(obj) {
  for (let i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (const p in arguments[i]) obj[p] = arguments[i][p]
  }
  return obj
}
