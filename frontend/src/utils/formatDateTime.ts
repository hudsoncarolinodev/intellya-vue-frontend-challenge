import { format } from 'date-fns';
const formatDateTime = (dateTime: string | boolean | Number) => {
    const formattedDateTime = format(new Date(dateTime.toString()), "dd/MM/yyyy 'às' HH:mm");
    return formattedDateTime;
};

export default formatDateTime
