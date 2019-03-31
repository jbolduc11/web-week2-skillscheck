

let groceries = ['bananas', 'bread', 'milk', 'gravy'];

const checkGroceryCount = () => {
    let length = groceries.length;
    if(length > 5) {
        return 'That looks like a big trip'
    } else if (length === 1) {
        return '1 item'
    } else {
        return (length + ' items');
    }
}

console.log(checkGroceryCount());