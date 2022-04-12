/**
 * Convert a string param into a boolean
 * @param string value
 * @returns Boolean response or null
 */
export function toBool(value) {
  if (value === 'true' || value === true) {
    return true;
  } if (value === 'false' || value === false) {
    return false;
  }
  return null;
}

export default {};
