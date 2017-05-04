
export class Server{
    public Id: number;
    public Name: string;
    public Description: string;
    public IsActive : boolean
    public DateCreated: Date;


    constructor(Id: number, Name: string , active: boolean, Desc: string)
    {
        this.Id = Id;
        this.Name = Name;
        this.IsActive = active;
        this.Description = Desc;
        this.DateCreated = new Date()
    }
}

