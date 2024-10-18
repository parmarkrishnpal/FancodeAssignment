/**
 * Check if the user's latitude and longitude falls within FanCode city range
 * @param {Object} user - User object
 * @returns {Boolean} True if user is from FanCode city
 */
export function isUserFromFanCodeCity(user) {
    const lat = parseFloat(user.address.geo.lat);
    const lng = parseFloat(user.address.geo.lng);
    return lat > -40 && lat < 5 && lng > 5 && lng < 100;
}