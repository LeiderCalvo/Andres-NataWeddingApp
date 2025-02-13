export const MIllS_IN_DAY = 1000 * 60 * 60 * 24;

const mapTime = (number) => {
    const rounded = Math.floor(number);
    return rounded > 9 ? rounded : "0" + rounded;
};

export const getDatesDiffDiscriminated = (a, b) => {
    const milliDiff = (a - b) / MIllS_IN_DAY;
    const days = milliDiff;
    const hours = (days % 1) * 24;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;

    return [
        {
            time: mapTime(days),
            label: "DÍAS",
        },
        {
            time: mapTime(hours),
            label: "HORAS",
        },
        {
            time: mapTime(minutes),
            label: "MIN",
        },
        {
            time: mapTime(seconds),
            label: "SEG",
        },
    ];
};
