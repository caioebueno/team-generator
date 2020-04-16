// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(email,name,id, school) {
        this.getId = () => {return id}
        this.getRole = () => { return "Intern"};
        this.getName = () => {return name}
        this.getEmail = () => {return email};
        this.getSchool = () => {return school};
    }
}

module.exports = {Intern};