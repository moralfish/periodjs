class DateTime {
  private readonly _date: Date;
  constructor(date: Date | string | number) {
    this._date = new Date(date);
  }
  valueOf() {
    return this._date.valueOf();
  }
  public toDate(): Date {
    return this._date;
  }

}
export default DateTime;
