/**
 * Calculates shutter speed based on sunny 16 rule
 * @param {*} aperture f-number
 * @param {*} ev exposure value
 * @param {*} iso ISO value
 * @returns Shutter speed number
 */
export function getShutterSpeed(aperture, ev, iso) {
  const numerator = aperture * aperture * iso;
  const denominator = 100 * Math.pow(2, ev);
  return numerator / denominator;
}

/**
 * Calculates f-number based on sunny 16 rule
 * @param {*} shutterSpeed shutter speed in seconds
 * @param {*} ev exposure value
 * @param {*} iso ISO value
 * @returns Shutter speed number
 */
export function getAperture(shutterSpeed, ev, iso) {
  const numerator = 100 * shutterSpeed * Math.pow(2, ev);
  return Math.sqrt(numerator / iso);
}

/**
 * Calculates exposure value based on sunny 16 rule
 * @param {*} aperture f-number
 * @param {*} shutterSpeed shutter speed in seconds
 * @param {*} iso ISO value
 * @returns Exposure value
 */
export function getEv(aperture, shutterSpeed, iso) {
  return (
    Math.log2((aperture * aperture) / shutterSpeed) +
    Math.log2(iso / 100) * aperture
  );
}

/**
 * Finds the slide index that best matches the target value
 * @param {*} slideItems array of slide items @see{@link /src/slides/index.js}
 * @param {*} target target value for search by item.value
 * @returns index of a more suitable slide
 */
export function findClosestInSlideItems(slideItems, target) {
  return slideItems.reduce((closestIndex, item, index) => {
    return Math.abs(item.value - target) <
      Math.abs(slideItems[closestIndex].value - target)
      ? index
      : closestIndex;
  }, 0);
}
