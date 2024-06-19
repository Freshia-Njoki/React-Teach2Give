export const ratingFunc = (rating: number) => {
    if (rating === 5) {
        return "🌟🌟🌟🌟🌟"
    } else if( rating === 4) {
        return "🌟🌟🌟🌟"
    } else if( rating === 3) {
        return "🌟🌟🌟"
    } else if( rating === 2) {
        return "🌟🌟"
    } else if( rating === 1) {
        return "🌟"
    } else{ rating = 0}
}