// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
const urlRoot = "https://static.site"
const version = "16.12.0"
const babelURL = "https://unpkg.com/babel-standalone@6.26.0/babel.min.js"

export { babelURL, urlRoot, version }