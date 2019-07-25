export const checkBudget = (budget, rest) => {
    let clase;
    // Comprobar el 25% 
    if( (budget / 4) > rest) {
         clase = 'alert alert-danger';
    } else if( (budget / 2) > rest) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 