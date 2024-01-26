import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
    name: string;
    onChange: (date: Date) => void;
    selected: Date;
};

const Datepicker = ({ name, onChange, selected }: DatePickerProps) => {
    const minTime = new Date();
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(17, 30, 0, 0);

    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    return (
        <ReactDatePicker
            id={name}
            name={name}
            selected={selected}
            onChange={onChange}
            showTimeSelect
            className="w-full"
            dateFormat="Pp"
            wrapperClassName="w-full"
            filterDate={isWeekday}
            minDate={new Date()}
            minTime={minTime}
            maxTime={maxTime}
            required
        />
    );
};

export default Datepicker;
