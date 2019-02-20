export const getCoordinates = (percent, radius = 12) => {
    return {
        x: radius + (radius * Math.cos( (percent/100) * 2*Math.PI) ),
        y: radius + (radius * Math.sin( (percent/100) * 2*Math.PI) )
    }
}