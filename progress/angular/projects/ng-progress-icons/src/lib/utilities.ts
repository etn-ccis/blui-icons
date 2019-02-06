export const rangeValue = function(value, min, max){
    return Math.max(min,Math.min(value,max))
}

export const getCoordinates = function(percent, radius = 12){
    return {
        x: radius + (radius * Math.cos( (percent/100) * 2*Math.PI) ),
        y: radius + (radius * Math.sin( (percent/100) * 2*Math.PI) )
    }
}