export class PhoneType {
    public static Home: string = "Home";
    public static Office: string = "Office";
    public static values():string[] {
        return [
            PhoneType.Home,
            PhoneType.Office
        ];
    }
}