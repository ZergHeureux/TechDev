export class DateUtils {
    /**
     * Format two date to a schedule date like : 'day 0 month 00:00 - 12:00'
     * @param start Start Date
     * @param end End Date
     * @returns String formated date
     */
    static convertDateToSchedule(start: Date, end: Date): string {
        var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        return `${days[start.getDay()]} ${start.getDate()} ${months[start.getMonth()]} ${start.toTimeString().slice(0, 5)} - ${end.toTimeString().slice(0, 5)}`;
    }
}