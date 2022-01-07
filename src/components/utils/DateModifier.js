const DateModifier = props => {

    // Array with months of the year (ORDERED)
    const monthsOfTheYear =  [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ];
    
    const newDateFormat = () => {

        // date is comming on the format of YYYY-MM-DD
        const dateArray = (props.date).split("-");

        // set each variable
        const day = parseInt(dateArray[2]);
        const month = monthsOfTheYear[dateArray[1]-1];
        const year = dateArray[0];

        return `on ${day} ${month} ${year}`;
    }


    return ( 
        <span>{newDateFormat()}</span>
     );
}
 
export default DateModifier;