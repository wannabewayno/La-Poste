export default  function (range,roundToNearest=1){
    return Math.round((Math.random()*(range[1] - range[0]) + range[0])/roundToNearest)*roundToNearest;
}