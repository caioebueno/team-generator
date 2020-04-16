// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(email,name,id, github) {
        this.getId = () => {return id}
        this.getRole = () => { return "Engineer"};
        this.getName = () => {return name}
        this.getEmail = () => {return email};
        this.getGithub = () => {return github};
    }
}

module.exports = {Engineer};