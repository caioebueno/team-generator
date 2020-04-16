// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(email,name,id, office) {
        this.getId = () => {return id}
        this.getRole = () => { return "Manager"};
        this.getName = () => {return name}
        this.getEmail = () => {return email};
        this.getOffice = () => {return office};
    }
}

module.exports = {Manager};