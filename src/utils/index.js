export const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    return `${year}${month}${day}`;
};

function timeChange(time) {
    switch (time) {
        case "0200":
        case "0300":
        case "0400":
            time = "0200";
            break;
        case "0500":
        case "0600":
        case "0700":
            time = "0500";
            break;
        case "0800":
        case "0900":
        case "1000":
            time = "0800";
            break;
        case "1100":
        case "1200":
        case "1300":
            time = "1100";
            break;
        case "1400":
        case "1500":
        case "1600":
            time = "1400";
            break;
        case "1700":
        case "1800":
        case "1900":
            time = "1700";
            break;
        case "2000":
        case "2100":
        case "2200":
            time = "2000";
            break;
        case "2300":
        case "0000":
        case "0100":
            time = "2300";
            break;
    }
    return time;
}

export const getCurrentHour = () => {
    const currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, '0');
    hours = hours + '00';
    return timeChange(hours);
};