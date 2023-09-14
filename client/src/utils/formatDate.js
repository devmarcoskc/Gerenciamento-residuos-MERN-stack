export function FormatDate (month, year) {
    if(month === "" && year === "") {
        return "";
    }

    let monthToUse = '';
    switch(month) {
        case("janeiro"):
            monthToUse = '01'
            break;
        case("fevereiro"):
            monthToUse = "02"
            break;
        case("março"):
            monthToUse = "03"
            break;
        case("abril"):
            monthToUse = "04"
            break;
        case("maio"):
            monthToUse = "05"
            break;
        case("junho"):
            monthToUse = "06"
            break;
        case("julho"):
            monthToUse = "07"
            break;
        case("agosto"):
            monthToUse = "08"
            break;
        case("setembro"):
            monthToUse = "09"
            break;
        case("outubro"):
            monthToUse = "10"
            break;
        case("novembro"):
            monthToUse = "11"
            break;
        case("dezembro"):
            monthToUse = "12"
            break;
    }

    return `${monthToUse}/${year}`;
}

export function FormatDateToShow(date) {
    let Dates = date.split("/");

    switch(Dates[0]) {
        case("01"):
            Dates[0]= 'Janeiro'
            break;
        case("02"):
            Dates[0] = "Fevereiro"
            break;
        case("03"):
            Dates[0] = "Março"
            break;
        case("04"):
            Dates[0] = "Abril"
            break;
        case("05"):
            Dates[0] = "Maio"
            break;
        case("06"):
            Dates[0] = "Junho"
            break;
        case("07"):
            Dates[0] = "Julho"
            break;
        case("08"):
            Dates[0] = "Agosto"
            break;
        case("09"):
            Dates[0] = "Setembro"
            break;
        case("10"):
            Dates[0] = "Outubro"
            break;
        case("11"):
            Dates[0] = "Novembro"
            break;
        case("12"):
            Dates[0] = "Dezembro"
            break;
    }

    return {
        month: Dates[0],
        year: Dates[1]
    }
}