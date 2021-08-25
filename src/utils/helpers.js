export const formatPrice = (number) => {
    return new Intl.NumberFormat('be-BE', {
        style:'currency',
        currency:"EUR"
    }).format(number/100) 
    
}

export const getUniqueValues = () => {}
