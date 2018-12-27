/**
 * Retrieve a set of environment variables. Throws if any of the variables are
 * not set.
 * @param vars The names of the environment variables to retrieve
 * @return An array containing all the requested variables. The array will have
 * the same order as the `vars` parameter.
 * @throws Error if one or more variables are not set. Variables set to an empty
 * string will be accepted.
 */
export default function env(vars: string[]): string[] {
  let ret = [ ]
  for (let v of vars) {
    if (process.env[v] === undefined) {
      throw new Error(`Environment variable "${v}" isn't set`)
    }
    ret.push(process.env[v]!)
  }
  return ret
}
